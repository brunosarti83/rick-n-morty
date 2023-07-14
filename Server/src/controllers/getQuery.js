const axios = require('axios');

const URL = `https://rickandmortyapi.com/api/character/`

const arrangeChar = (data) => {
    const char = {
        id : data.id,
        name : data.name,
        gender : data.gender,
        species : data.species,
        origin : data.origin.name,
        image : data.image,
        status : data.status,
    }
    return char
}

async function getQuery (req, res) {
    const { search } = req.query
    if (Boolean(Number(search))) {
        try {
            const { data } = await axios(`${URL}${search}`)
            if (data.name) {
                const char = arrangeChar(data)
                res.status(200).json([char])
            } else {
                res.status(404).send('Not found')
            }
        } catch (error) {
            res.status(error.response.status).send(error.message)
        } 
    } else {
        try {
            const { data } = await axios(`${URL}?name=${search}`)
            const pages = data.info.pages
            if (pages > 1) {
                const URLS = []
                for (i=1; i<=pages;i++) {
                    URLS.push(`${URL}?name=${search}&page=${i}`)
                }
                const promises = URLS.map(url => axios.get(url))
                const responses = await Promise.all(promises)
                const chars = []
                responses.forEach(resp => {
                    const { results } = resp.data
                    results.forEach(char => {
                        chars.push(arrangeChar(char))
                    })
                })
                res.status(200).json(chars)
            } else {
                const { results } = data
                const chars = []
                results.forEach(char => {
                    chars.push(arrangeChar(char))
                })
                res.status(200).json(chars)
            }
        } catch (error) {
            res.status(error.response.status).send(error.message)
        }
    }  
}

module.exports = getQuery;
