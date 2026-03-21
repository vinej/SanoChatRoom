import { Service } from '../interfaces/service'
import CrudService from './crud_service'

export default class TodoService extends CrudService implements Service {

  private static instanceService: TodoService | null = null

  constructor() {
    super('todos')
  }

  static setInstance(instanceService: TodoService) {
    this.instanceService = instanceService
  }

  static getInstance() {
    if (!this.instanceService) {
      this.instanceService = new CrudService('todos')
    }
    return this.instanceService
  }
}