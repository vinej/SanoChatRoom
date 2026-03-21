import axios from 'axios';
import { API_URL, HEADERS, PARAMETERS } from './config_service';
import { Service } from '../interfaces/service';
import { Entity } from '@db/model/entity';

export default class CrudService implements Service {

  service: Service

  constructor(service: Service) {
    this.service = service;
  }

  add(entity: Entity, next: any, err: any) {
    axios.post(`${API_URL}/${this.service}?${PARAMETERS()}`, entity, HEADERS())
      .then(response => {
        next(response.data);
      })
      .catch(response => err(response.data));
  };

  delete(entity: Entity, next: any, err: any) {
    axios.delete(`${API_URL}/${this.service}/${entity.id}?${PARAMETERS()}`, HEADERS())
      .then(response => {
        next(entity);
      })
      .catch(response => err(response.data));
  };

  update(entity: Entity, next: any, err: any) {
    axios.put(`${API_URL}/${this.service}?${PARAMETERS()}`, entity, HEADERS())
      .then(response => {
        next(response.data);
      })
      .catch(response => err(response.data));
  };

  getAll(next: any, err: any) {
    axios.get(`${API_URL}/${this.service}?${PARAMETERS()}`, HEADERS())
      .then(response => {
        next(response.data);
      })
      .catch(response => err(response.data));
  };
}
