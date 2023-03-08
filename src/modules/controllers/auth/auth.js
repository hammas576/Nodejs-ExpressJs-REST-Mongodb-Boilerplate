/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
/* eslint-disable object-curly-newline */
import AuthService from '../../services/auth/auth';

export default {
  signUp: async (req, res) => {
    try {
      const { body } = req;
      const response = await AuthService.signUp(body);
      return res.status(response.statusCode).json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};
