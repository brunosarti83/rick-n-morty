const { User } = require('../DB_connection');

async function postUser (req, res) {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400).send('Faltan datos') // faltarían al menos las mismas validaciones que en el front
    } else {
        try {
            const newUser = await User.findOrCreate({where: {email, password}})
            res.status(200).json(newUser)
        } catch(error) {
            res.status(500).send(error.message)
        }
    }
}

module.exports = postUser;