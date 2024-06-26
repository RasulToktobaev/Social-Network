const express = require('express')
const router = express.Router();
const multer = require('multer');
const UserController = require('../controllers/userController');
const authenticateToken = require('../middleware/auth');
const PostController = require('../controllers/postController');
const {CommentController, LikeController, FollowController} = require("../controllers");

const uploadDestination = 'uploads'

//Показать, где хранить файлы
const storage = multer.diskStorage({
    destination: uploadDestination,
    filename: function (req, file, callback) {
        callback(null, file.originalname)
    }
});

const uploads = multer({storage: storage})

//Роуты пользователя
router.post('/register',authenticateToken, UserController.register)
router.post('/login', UserController.login)
router.get('/current', authenticateToken, UserController.current)
router.get('/user/:id', authenticateToken, UserController.getUserById)
router.put('/users/:id', authenticateToken, UserController.updateUser)


//Роуты постов
router.post('/posts', authenticateToken, PostController.createPost)
router.get('/posts', authenticateToken, PostController.getAllPosts)
router.get('/posts/:id', authenticateToken, PostController.getPostById)
router.delete('/posts/:id', authenticateToken, PostController.deletePost)

//Роуты комментариев
router.post('/comments', authenticateToken, CommentController.createComment)
router.delete('/comments/:id', authenticateToken, CommentController.deleteComment)

//Роуты лайков
router.post('/likes', authenticateToken, LikeController.likePost)
router.delete('/likes/:id', authenticateToken, LikeController.unlikePost)

//Роуты подписок
router.post('/follow', authenticateToken, FollowController.followUser)
router.delete('/unfollow/:id', authenticateToken, FollowController.unFollowUser)


module.exports = router;