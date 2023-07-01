const server = require('../src/app');
const session = require('supertest');
const agent = session(server);

describe("Test de RUTAS", () => {
    describe('GET /rickandmorty/character/:id', () => {
        it ('Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        })
        it ('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = (await agent.get('/rickandmorty/character/1')).body
            expect(response).toHaveProperty("id", "name", "species", "gender", "status", "origin", "image")
        })
        it ('Si hay un error responde con status: 404', async () => {
            await agent.get('/rickandmorty/character/1000').expect(404)
        })
    })
    describe( "GET /rickandmorty/login", () => {
        it ('Otorga accesso con el email y password correctos', async () => {
            const user = {email: 'rick@morty.com', password: 'asd123'}
            const response = (await agent.get(`/rickandmorty/login?email=${user.email}&password=${user.password}`)).body
            expect(response).toEqual({access: true, user: user})
        })
        it ('NO otorga accesso con el email y password incorrectos', async () => {
            const user = {email: 'rick@notmorty.com', password: 'notpass'}
            const response = (await agent.get(`/rickandmorty/login?email=${user.email}&password=${user.password}`)).body
            expect(response).toEqual({access: false, user: user})
        })
    })
    describe("POST /rickandmorty/fav", () => {
        it ('Agrega un nuevo fav y lo devuelve en un arreglo', async () => {
            const fav = {
                id: 1,
                name: 'name',
                gender: 'gender',
                status: 'status',
                origin: 'origin',
                image: 'image',
                species: 'species'
            }
            const response = (await agent.post('/rickandmorty/fav').send(fav)).body
            expect(response.length).toBe(1)
        })
        it ('Agrega un segundo fav y lo devuelve en un arreglo junto con el anterior', async () => {
            const newFav = {
                id: 2,
                name: 'name',
                gender: 'gender',
                status: 'status',
                origin: 'origin',
                image: 'image',
                species: 'species'
            }
            const response = (await agent.post('/rickandmorty/fav').send(newFav)).body
            expect(response.length).toBe(2)
        })
    })
    describe("DELETE /rickandmorty/fav/:id", () => {
        it ('Si no existe el ID devuelve un array con los elementos existentes previamente', async ()=> {
            const response = (await agent.delete('/rickandmorty/fav/5')).body
            expect(response.length).toBe(2)
        })
        it ('Si existe el ID elimina el personaje y devuelve un array sin el mismo', async ()=> {
            const response = (await agent.delete('/rickandmorty/fav/2')).body
            expect(response.length).toBe(1)
        })
    })
})