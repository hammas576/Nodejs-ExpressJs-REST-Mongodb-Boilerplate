import UserRepo from '../../repos/user/user';
import Error from '../../../shared/utils/errors';
import { RESPONSE_MESSAGES } from '../../../shared/utils/constants';

async function signUp(body) {
  try {
    const { response, error } = await UserRepo.createUser(body);
    if (error) {
      return Error.conflict(error.message);
    }
    const user = response;
    return {
      statusCode: 200,
      success: true,
      user,
      message: RESPONSE_MESSAGES.RECORD_CREATED,
    };
  } catch (error) {
    return error;
  }
}

export default {
  signUp,
};
