const UserController = {
    register: async (req, res) => {
        const {email, password, name} = req.body;

        if (!email || !password || !name) {
            return res.status(400).json({error: 'Все поля обязательны'})
        }


    },
    login: async (req, res) => {
        res.send('login')
    },
    getUserById: async (req, res) => {
        res.send('getUserById')
    },
    updateUser: async (req, res) => {
        res.send('updateUser')
    },
    current: async (req, res) => {
        res.send('current')
    },
}

module.exports = UserController;