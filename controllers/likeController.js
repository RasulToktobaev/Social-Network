const {prisma} = require('../prisma/prisma-client');

const LikeController = {
    likePost: async (req, res) => {
        const {posId} = req.body;
        const userId = req.user.userId;

        if (!posId) {
            return res.status(400).json({error: 'Все поля обязательны'})
        }

        try {
            const existingLike = await prisma.like.findFirst({
                where: {posId, userId}
            })

            if (existingLike) {
                return res.status(400).json({error: 'Вы уже прожали лайк'})
            }

            const like = await prisma.like.create({
                data: {postId, userId}
            })
        } catch (error) {
            console.error('Error like post', error)
            res.status(500).json({error: 'Не получилось поставить лайк'})
        }
    },
    unlikePost: async (req, res) => {
        res.send('unlikePost')
    }
}

module.exports = LikeController;