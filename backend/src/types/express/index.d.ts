import express from 'express';
import {IUser} from '../../models/User'

declare global {
  namespace Express {
    interface Request {
      user?: IUser; // Replace `any` with the actual type of your user object
    }
  }
}