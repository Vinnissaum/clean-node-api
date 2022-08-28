import { SignUpController } from './SignUpController'
import { MissingParamError } from '../errors/missing-param-error'

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
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('Should return 400 if no email is provided', () => {
    // sut -> system under test
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'test',
        password: 'test',
        passwordConfirmation: 'test'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })
})
