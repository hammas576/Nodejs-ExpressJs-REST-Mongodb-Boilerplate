/* eslint-disable arrow-parens */
/* eslint-disable comma-dangle */
class Repository {
  constructor(modelInstance) {
    this.modelInstance = modelInstance;
  }

  async findOneRecord(filter, options) {
    try {
      const params = { ...filter, ...options };
      return await this.modelInstance.findOne(params);
    } catch (error) {
      return error;
    }
  }

  async createRecord(obj) {
    try {
      const response = await this.modelInstance.create(obj);
      return { response };
    } catch (error) {
      return { error };
    }
  }

  async findAllRecords(filter, options) {
    try {
      const params = { ...filter, ...options };
      return await this.modelInstance.find(params);
    } catch (error) {
      return error;
    }
  }

  async updateRecord(filter, values) {
    try {
      return await this.modelInstance.findOneAndUpdate(filter, values, {
        new: true,
      });
    } catch (error) {
      return error;
    }
  }
}

export default Repository;
