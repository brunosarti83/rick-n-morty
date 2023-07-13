const { User, Favorite } = require('../DB_connection');

const deleteFav = async (req, res) => {
    const { id, userId } = req.params
    try {
        const user = await User.findByPk(userId)
        await user.removeFavorite(id)
        const updatedUser = await User.findByPk(userId, {
            include: Favorite
        })
        const favorites = updatedUser.Favorites
        res.status(200).json(favorites)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = deleteFav;