const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: String,
    password: String,
    partner: String,
    partnerCode: String,
    userType: {
      type: [String],
      enum: ['empowerEmployee', 'empowerAdmin', 'empowerPartner'],
      required: true
    }

  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
)

const User = mongoose.model('User', userSchema)
module.exports = User
