import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LimitValidator from 'App/Validators/LimitValidator'
import { validator } from '@ioc:Adonis/Core/Validator'

export default class LimitsController {
  public async index({ request }: HttpContextContract) {
    console.log(request.all())
    await validator.validate(new LimitValidator(request.all()))
  }
}
