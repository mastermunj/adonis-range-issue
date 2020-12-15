import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class LimitValidator {
  constructor(public data: Record<string, unknown>) {
    console.log('Data', data)
  }

  public refs = schema.refs(this.data)

  public schema = schema.create({
    maximumLimit: schema.number([rules.unsigned(), rules.range(10000, 1000000)]),
    availableLimit: schema.number([
      rules.unsigned(),
      rules.range(0, this.refs.maximumLimit.value as number),
    ]),
  })

  // public cacheKey = 'limit-validator'

  public messages = {
    'availableLimit.range':
      'Available Limit should be between {{ options.start }} to {{ options.stop }}',
  }
}
