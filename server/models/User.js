const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: String,
    password: String,
    partner: String,
    email: String,
    marketSegment: String,
    title: String,
    role: {
      type: String,
      enum: ['MasterAdmin', 'SalesAdmin', 'RFPAdmin', 'RFPTeamMember', 'InternalSales', "SalesRep", "DemoUser", "Education"]
    },
    active: {
      type: Boolean,
      default: false
    },
    partnerCode: {
      type: [String],
      enum: ['met', 'wellsFargo', 'empower'],
      required: true
    },
    permissions: String,
    userType: {
      type: [String],
      enum: ['empowerEmployee', 'empowerAdmin', 'empowerPartner', 'partnerClient'],
      required: true
    },
    demos: Array

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
