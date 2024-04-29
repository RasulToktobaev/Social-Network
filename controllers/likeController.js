const {prisma} = require('../prisma/prisma-client');

const LikeController = {
    likePost: async (req, res) => {
        const {postId} = req.body;
        const userId = req.user.userId;

        if (!postId) {
            return res.status(400).json({error: 'Все поля обязательны'})
        }

        try {
            const existingLike = await prisma.like.findFirst({
                where: {postId, userId}
            })

            if (existingLike) {
                return res.status(400).json({error: 'Вы уже прожали лайк'})
            }

            const like = await prisma.like.create({
                data: {postId, userId}
            })

            res.json(like);
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