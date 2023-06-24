const axios = require('axios');

const URL = `https://rickandmortyapi.com/api/character/`

function getCharById (req, res) {
    const { id } = req.params
    axios(`${URL}${id}`)
    .then(({data}) => {
        if (data.name) {
            const char = {
                id : id,
                name : data.name,
                gender : data.gender,
                species : data.species,
                origin : data.origin,
                image : data.image,
                status : data.status,
            }
            res.status(200).json(char)
        } else {
            res.status(404).send('Not found')
        }
    })
    .catch((error) => {
        res.status(500).send(error.message)
    })
}

module.exports = getCharById;