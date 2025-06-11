import request from 'supertest';
import app from '../server.js';
import Product from '../model/product.model.js';

jest.mock('../model/product.model.js');

describe('POST /api/products', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a product when all fields are provided', async () => {
    const mockProduct = { name: 'Test', price: 10, image: 'img.jpg' };
    Product.prototype.save.mockResolvedValueOnce(mockProduct);

    const response = await request(app).post('/api/products').send(mockProduct);
    expect(response.status).toBe(201);
  });

  it('should return 400 when fields are missing', async () => {
    const response = await request(app).post('/api/products').send({});
    expect(response.status).toBe(400);
  });
});

