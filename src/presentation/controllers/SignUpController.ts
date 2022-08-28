import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../utils/http-util'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const { body } = httpRequest

    if (!body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!body.email) {
      return badRequest(new MissingParamError('email'))
    }
  }
}
