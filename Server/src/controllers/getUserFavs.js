const { User, Favorite } = require('../DB_connection')

const getUserFavs = async (req, res) => {
    const { userId } = req.params
    try {
        const user = await User.findByPk(userId, {
            include: Favorite
        })
        const favorites = user.Favorites
        res.status(200).json(favorites)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = getUserFavs;