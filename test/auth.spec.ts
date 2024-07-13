import request from 'supertest'

import app from '../app/app'
import jwt from 'jsonwebtoken'
import { UserModel } from '../app/model/user';


let server: any
let token: string;
const user = {
    nama: 'test123',
    email: 'test123@test.com',
    password: '12345',
    avatar: null
}

beforeAll((done) => {
    server = app.listen(8000, () => {
        done()
    })
})


describe('POST /api/v1/register', () => {
    // 1. Berhasil Register
    it('should response with 201 status code', async () => (
        request(server).post('/api/v1/register')
            .send(user)
            .set('Accept', 'application/json')
            .then((res: { statusCode: unknown; body: unknown; }) => {
                expect(res.statusCode).toBe(201)
                expect(res.body).toEqual(
                    expect.objectContaining({
                        message: "Berhasil Register!",
                        data: {
                            nama: user.nama,
                            email: user.email,
                            avatar: null,
                        },
                        status: "Success",
                    })
                )
            })
    ))
    it('should response with 409 status code', async () => (
        request(server)
            .post('/api/v1/register')
            .send(user)
            .set('Accept', 'application/json')
            .then((res: { statusCode: unknown; body: unknown; }) => {
                console.log(res.body)
                expect(res.statusCode).toBe(409)
                expect(res.body).toEqual(
                    expect.objectContaining({
                        errors: "Email sudah terdaftar!",
                    })
                )
            })
    ))


})

// 2. Email tidak ditemukan
it('should response with 404 status code', async () => (
    request(server)
        .post('/api/v1/login')
        .send({
            ...user,
            email: 'testa@email.com'
        })
        .set('Accept', 'application/json')
        .then((res: { statusCode: unknown; body: unknown; }) => {
            expect(res.statusCode).toBe(404)
            expect(res.body).toEqual(
                expect.objectContaining({
                    errors: "Email tidak ditemukan",
                })
            )
        })
))
// 3. password salah
it('should response with 401 status code', async () => (
    request(server)
        .post('/api/v1/login')
        .send({
            ...user,
            password: "1"
        })
        .set('Accept', 'application/json')
        .then((res: { statusCode: unknown; body: unknown; }) => {
            expect(res.statusCode).toBe(401)
            expect(res.body).toEqual(
                expect.objectContaining({
                    errors: "Password salah!",
                })
            )
        })
))

it('should get cars', async () => {
    const res = await request(server)
        .get('/api/v1/users/me')
        .send(user)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`);

    const decodedToken = jwt.verify(token, "hello_sayang")
    console.log(res.body);
    console.log(decodedToken);
    expect(res.status).toBe(200);

});

afterAll(async () => {
    await UserModel.query().where('email', user.email).del()
    server.close();
})



