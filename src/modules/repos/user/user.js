/* eslint-disable no-underscore-dangle */
import Repository from '../index';
import { User } from '../../models/index';

class UserRepo extends Repository {
  async createUser(obj) {
    const payload = {
      ...obj,
    };
    try {
      const { response, error } = await this.createRecord(payload);
      return { response, error };
    } catch (err) {
      return { error: err };
    }
  }

  async getUser(filter, options) {
    try {
      const res = await this.findOneRecord(filter, options);
      return { response: res };
    } catch (err) {
      return { error: err };
    }
  }

  async updateUser(filter, values) {
    try {
      const res = await this.updateRecord(filter, values);
      return { response: res };
    } catch (err) {
      return { error: err };
    }
  }
}

export default new UserRepo(User);
