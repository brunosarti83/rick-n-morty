const users = require('../utils/users')

const login = (req, res) => {
    const { email, password } = req.query
    const user = { email, password }
    let access = false 
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.email === email && user.password === password) {
            access = true
            break
        }
    }
    res.status(200).json({access: access, user: user})
}

module.exports = login;