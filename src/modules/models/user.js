/* eslint-disable space-before-function-paren */
/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      default: '',
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

UserSchema.pre('find', function(next) {
  this.where({ isDeleted: false });
  next();
});

UserSchema.pre('findOne', function(next) {
  this.where({ isDeleted: false });
  next();
});

const User = mongoose.model('User', UserSchema);

export default User;
