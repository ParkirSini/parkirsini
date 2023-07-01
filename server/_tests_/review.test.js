const request = require("supertest");
const app = require("../app");

const { ParkingSpaceReview, Landlord, Customer, ParkingSpace } = require('./../models')

afterAll(done => {
    ParkingSpaceReview.destroy({ truncate: true, cascade: true, restartIdentity: true })
        .then(_ => {
            return ParkingSpace.destroy({ truncate: true, cascade: true, restartIdentity: true })
                .then(() => {
                    return Landlord.destroy({ truncate: true, cascade: true, restartIdentity: true });
                })
                .then(() => {
                    return Customer.destroy({ truncate: true, cascade: true, restartIdentity: true });
                })
                .then(() => {
                    done();
                })
        })
        .catch(err => {
            done(err);
        });
});


beforeAll(done => {
    const landlordData = [{ email: 'malik@gmail.com', password: '12345', username: 'malik', phoneNumber: '000', address: "asdf", amount: 1234 }]
    const parkingSpaceData = [{ landlordId: 1, stock: 12, mapLong: 116, mapLat: 116, name: "new Lahan parkir", subtitle: "indo", description: "gak ada", city: "Jogja" }]
    const customerData = [{ email: 'malik@gmail.com', password: '12345', username: 'malik', phoneNumber: '000', address: "asdf" }]

    const insertLandlords = Landlord.bulkCreate(landlordData);
    const insertParkingSpace = ParkingSpace.bulkCreate(parkingSpaceData);
    const insertCustomers = Customer.bulkCreate(customerData);

    Promise.all([insertLandlords, insertParkingSpace, insertCustomers])
        .then(() => {
            done();
        })
        .catch(err => {
            done(err);
        });
});


describe('Review Routes Test', () => {
    describe('POST /review - create new review', () => {
        test('201 Success create review - should create new review', async () => {

            const bodyData = {
                parkingSpaceId: 1, customerId: 1,
                review: 'Mantull',
                rating: 5,
            }
            const response = await request(app).post('/review').send(bodyData)
            expect(response.status).toBe(201);
            expect(response.body).toEqual(expect.any(Object));
            expect(response.body).toHaveProperty('msg', expect.any(String));

            // expect(response.body).toHaveProperty('id', expect.any(Number));
            // expect(response.body).toHaveProperty('email', bodyData.email);
        });

        // test('400 Failed register - should return error if email is null', async () => {


        //     const bodyData = {
        //         username: 'malik',
        //         email: null,
        //         password: '12345',
        //         phoneNumber: '3456',
        //         address: 'Jl. Iskandar Muda'
        //     }
        //     const response = await request(app).post('/customers/register').send(bodyData)
        //     expect(response.status).toBe(400);
        //     expect(response.body).toEqual(expect.any(Object));
        //     expect(response.body).toHaveProperty('msg', "email is required");
        // });

        // test('400 Failed register - should return error if password is null', async () => {

        //     const bodyData = {
        //         username: 'malik',
        //         email: 'kilamReve@gmail.com',
        //         password: null,
        //         phoneNumber: '3456',
        //         address: 'Jl. Iskandar Muda'
        //     }
        //     const response = await request(app).post('/customers/register').send(bodyData)
        //     expect(response.status).toBe(400);
        //     expect(response.body).toEqual(expect.any(Object));
        //     expect(response.body).toHaveProperty('msg', "password is required");
        // });

        // test('400 Failed register - should return error if email is empty string', async () => {

        //     const bodyData = {
        //         username: 'malik',
        //         email: '',
        //         password: '12345',
        //         phoneNumber: '3456',
        //         address: 'Jl. Iskandar Muda'
        //     }
        //     const response = await request(app).post('/customers/register').send(bodyData)
        //     expect(response.status).toBe(400);
        //     expect(response.body).toEqual(expect.any(Object));
        //     expect(response.body).toHaveProperty('msg', "email is required");
        // });


        // test('400 Failed register - should return error if password is empty string', async () => {

        //     const bodyData = {
        //         username: 'malik',
        //         email: 'kilamReve@gmail.com',
        //         password: '',
        //         phoneNumber: '3456',
        //         address: 'Jl. Iskandar Muda'
        //     }
        //     const response = await request(app).post('/customers/register').send(bodyData)
        //     expect(response.status).toBe(400);
        //     expect(response.body).toEqual(expect.any(Object));
        //     expect(response.body).toHaveProperty('msg', "password is required");
        // });

        // test('400 Failed register - should return error if email is already used', async () => {

        //     const bodyData = {
        //         username: 'malik',
        //         email: 'kilamReve@gmail.com',
        //         password: '12345',
        //         phoneNumber: '3456',
        //         address: 'Jl. Iskandar Muda'
        //     }
        //     const response = await request(app).post('/customers/register').send(bodyData)
        //     expect(response.status).toBe(400);
        //     expect(response.body).toEqual(expect.any(Object));
        //     expect(response.body).toHaveProperty('msg', "email already used");
        // });

        // test('400 Failed register - should return error if email format is invalid', async () => {

        //     const bodyData = {
        //         username: 'malik',
        //         email: 'kilamReve@gmai',
        //         password: '12345',
        //         phoneNumber: '3456',
        //         address: 'Jl. Iskandar Muda'
        //     }
        //     const response = await request(app).post('/customers/register').send(bodyData)
        //     expect(response.status).toBe(400);
        //     expect(response.body).toEqual(expect.any(Object));
        //     expect(response.body).toHaveProperty('msg', "email format is incorrect");
        // });

    });

    describe('PUT /review/:id - edit review', () => {
        test('201 Success update review - should return message', async () => {
            const bodyData = {
                email: 'kilamReve@gmail.com',
                password: '12345'
            }
            const response = await request(app).post('/customers/login').send(bodyData)
            expect(response.status).toBe(200)
            expect(response.body).toEqual(expect.any(Object));
            expect(response.body).toHaveProperty('accest_token', expect.any(String));

        });

        test('401 Failed login - should return error when password is wrong', async () => {
            const bodyData = {
                email: 'kilamReve@gmail.com',
                password: '1234'
            }
            const response = await request(app).post('/customers/login').send(bodyData)
            expect(response.status).toBe(401)
            expect(response.body).toEqual(expect.any(Object));
            expect(response.body).toHaveProperty('msg', 'Email / Password is incorrect');

        });

        test('401 Failed login - should return error when email is not registered', async () => {
            const bodyData = {
                email: 'kilamReve@gmail.commm',
                password: '12345'
            }
            const response = await request(app).post('/customers/login').send(bodyData)
            expect(response.status).toBe(401)
            expect(response.body).toEqual(expect.any(Object));
            expect(response.body).toHaveProperty('msg', 'Email / Password is incorrect');

        });


        // test('401 Failed login - should return error when user not found', (done) => {
        //     request(app)
        //         .post('/login')
        //         .send({
        //             email: 'hello@mail.com',
        //             password: 'salahpassword',
        //         })
        //         .end((err, res) => {
        //             if (err) return done(err);
        //             const { body, status } = res;

        //             expect(status).toBe(401);
        //             expect(body).toEqual(expect.any(Object));
        //             expect(body).toHaveProperty('message', 'Invalid email/password');
        //             return done();
        //         });
        // });
    });
});
