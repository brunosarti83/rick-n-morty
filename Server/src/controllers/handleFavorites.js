
var myFavorites = []

const postFav = (req, res) => {
    const newFav = req.body
    if (newFav.id && newFav.name && newFav.status && newFav.origin && newFav.species && newFav.image && newFav.gender) {
        myFavorites.push(req.body)
        res.status(200).json(myFavorites)
    } else {
        res.status(400).send(`Missing attributes`)
    }
}

const deleteFav = (req, res) => {
    const { id } = req.params
    myFavorites = myFavorites.filter(char => char.id != id)
    res.status(200).json(myFavorites)
}  

module.exports = {
    postFav, deleteFav
}