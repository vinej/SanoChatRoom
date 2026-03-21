import { regs } from './regs'
import { FieldType } from './fieldtypes';

export default class Validator {
  static validType(value: any, type: FieldType): boolean {
    let reg = regs[type]
    console.log('reg', reg)
    if (typeof reg === 'string') {
      reg = new RegExp(reg);
    }

    if (reg && !reg.test(value)) {
      return false
    }
    return true
  }
}    
