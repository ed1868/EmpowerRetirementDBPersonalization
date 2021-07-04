const mongoose = require('mongoose')
const Schema = mongoose.Schema

const partnerSchema = new Schema(
  {
    name: String,
    code: String,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
)

const Partner = mongoose.model('User', partnerSchema)
module.exports = Partner
