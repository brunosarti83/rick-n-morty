const { User, Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
    const { id, name, origin, status, image, species, gender, userId } = req.body
    if (!id, !name || !origin || !status || !image || !species || !gender || !userId) {
        res.status(401).send('Faltan datos')
    } else {
        try {
            const result = await Favorite.findOrCreate({where: { id },
                defaults: { name, origin, status, image, species, gender }
            })
            const [newFav, created] = result  
            await newFav.addUser(userId)
            const user = await User.findByPk(userId, {
                include: Favorite
            })
            const favorites = user.Favorites
            res.status(200).json(favorites)
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

module.exports = postFav;