import mongoose from 'mongoose';
import BaseModel from './base_model';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

import _ from 'lodash';
import utility from 'utility';

const UserSchema = new Schema({
  loginname:           { type: String, required: true },
  pass:                { type: String, required: true },
  create_at:           { type: Date, default: Date.now },
});

UserSchema.plugin(BaseModel);

mongoose.model('User', UserSchema);
