import request from 'supertest';
import app from '../app/app';
import { UserModel } from '../app/model/user';
import { CarsModel } from '../app/model/car';

import jwt from 'jsonwebtoken'


let server: any;
let token: string;
const carData = {
    size: 'small',
    name: 'Test Car',
    price: 1000,
    category: 'Test Category',
    start_rent: '2024-08-01T00:00:00Z',
    finish_rent: '2024-08-10T00:00:00Z',
    created_by: 'testadmin',
    image_url: `${__dirname}/ERD.png`
};

const user = {
    nama: "test",
    email: "test12@gmail.com",
    password: "test123",
    avatar: "test",
    role: "super-admin",
}

beforeAll((done) => {
    server = app.listen(8001, () => {
        console.log('Server started on port 8000');
        done();
    });
});

describe('GET /api/v1/cars', () => {
    it('should get cars', async () => {
        const res = await request(server)
            .get('/api/v1/cars')
            .set('Accept', 'application/json');

        console.log(res.body);
        expect(res.status).toBe(200);
        expect(res.body.data).toBeInstanceOf(Array);
    });
});

describe('POST /api/v1/cars', () => {

    it('should be login', async () => {
        const res = await request(app).post("/api/v1/login").send(user)
        expect(res.status).toBe(201)
        token = res.body.data.token
       
    })


    it('should cant create cars cause unathorized', async () => {
      
        const res = await request(app)
            .post('/api/v1/cars')
            .set('Authorization', `Bearer ${token}`)
            .set('Accept', 'application/json')
            .send(carData);
            

        console.log(res.body)
        expect(res.status).toBe(400);
    })
    it('should cant create cars cause unathorized', async () => {
        const res = await request(app)
            .post('/api/v1/cars')
            .set('Accept', 'application/json')
            .send(carData);

        console.log(res.body)
        expect(res.status).toBe(401);
    })
})


afterAll(async () => {
    await CarsModel.query().where('name', carData.name).del();
    server.close();
});
