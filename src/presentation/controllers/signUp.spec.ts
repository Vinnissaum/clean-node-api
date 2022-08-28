import { SignUpController } from './SignUpController'

describe('SignUp controller', () => {
  test('Should return 400 if no name is provided', () => {
    // sut -> system under test
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'test@test.com',
        password: 'test',
        passwordConfirmation: 'test'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
