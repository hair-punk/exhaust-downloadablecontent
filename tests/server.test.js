import request from 'request';

describe('Server', () => {

  test('Server should respond to GET request to /games/:id', (done) => {
    request.get(`http://localhost:3003/games/1`).on('response', (response) => {
      expect(response.statusCode).toBe(200);
      expect(response.statusMessage).toBe('OK');
      done();
    });
  });
});