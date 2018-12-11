'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema(
  {
    clientId: {
      type: String,
      unique: true
    },
    firstName: {
      type: String,
      default: ''
    },
    lastName: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    },
    phone: {
      type: String,
      default: ''
    },
    balance: {
      type: Number,
      default: 0
    },
    createdOn: {
      type: Date,
      default:""
    },
    lastModified: {
      type: Date,
      default: Date.now
    }
  }
)

mongoose.model('Client', clientSchema);
