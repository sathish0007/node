import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express();

mongoose.connect('mongodb://localhost/basiccurd');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(cors());

import UserRoute from './routers/userRoute';
import DoctorRoute from './routers/doctorRoute';

app.use('/', UserRoute)
app.use('/',DoctorRoute)

export default app
