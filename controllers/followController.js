const {prisma} = require('../prisma/prisma-client');

const FollowController = {
    followUser: async (req, res) => {
        const {followingId} = req.body;
        const userId = req.user.userId;

        if (followingId === userId) {
            return res.status(500).json({
                error: 'Вы не можете подписаться на самого' +
                    ' себя'
            })
        }
        try {
            const existingFollow = await prisma.follows.findFirst({
                where: {
                    AND: [
                        {followerId: userId},
                        {followingId}
                    ]
                }
            })

            if (existingFollow) {
                return res.status(400).json({error: 'Подписка уже существует'})
            }

            await prisma.follows.create({
                data: {
                    follower: {connect: {id: userId}},
                    following: {connect: {id: followingId}},
                }
            })

            res.status(201).json({message: 'Подписка успешно оформлена'})
        } catch (error) {
            console.error('Follow error', error)
            return res.status(500).json({error: 'Упс , что то пошло не так'})
        }
    },
    unFollowUser: async (req, res) => {
        const {followingId} = req.body;
        const userId = req.user.userId;

        try {
            const follows = await prisma.follows.findFirst({
                where:{
                    AND: [
                        {followerId:userId},
                        {followingId}
                    ]
                }
            })

            if(!follows) {
                return res.status(404).json({error: 'Вы не подписаны на данного пользователя'})
            }
        } catch (error) {

        }
    },
}

module.exports = FollowController;