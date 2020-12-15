import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LimitValidator from 'App/Validators/LimitValidator'
import { validator } from '@ioc:Adonis/Core/Validator'

export default class LimitsController {
  public async index({ request }: HttpContextContract) {
    await validator.validate(new LimitValidator(request.all()))
    return request.all()
  }
}
