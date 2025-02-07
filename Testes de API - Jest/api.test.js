const request = require('supertest');

const API_URL = 'https://jsonplaceholder.typicode.com';

describe('Testes da API JSONPlaceholder', () => {
  
  it('Deve retornar uma lista de usuários com status 200', async () => {
    const response = await request(API_URL).get('/users');
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  }, 10000); 

  it('Deve criar um novo usuário com sucesso (status 201)', async () => {
    const novoUsuario = { name: 'Teste Usuário', email: 'teste@example.com' };

    const response = await request(API_URL)
      .post('/users')
      .send(novoUsuario)
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  }, 10000); 

  it('Deve retornar um objeto válido ao criar um usuário sem nome', async () => {
    const usuarioInvalido = { email: 'teste@example.com' };

    const response = await request(API_URL)
      .post('/users')
      .send(usuarioInvalido)
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(201);
    expect(response.body).not.toHaveProperty('name');
  }, 10000);

  it('Deve retornar erro 404 ao acessar um endpoint inválido', async () => {
    const response = await request(API_URL).get('/invalid-endpoint');

    expect(response.status).toBe(404);
  }, 10000);

});
