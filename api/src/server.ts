import express, { Application, NextFunction, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import authRouter from './routes/authRoute';
import connectDB from './config/db';

import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import roleRouter from './routes/roleRoute';
import userRouter from './routes/userRoutes';
import cookieParser from 'cookie-parser';
import deviceRouter from './routes/deviceRoute';

// configure env
dotenv.config();

// database config
connectDB();

// rest object
const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.LIVE_URL,
  credentials: true
}));

// Swagger definition options
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Assignment 1 APIs',
      version: '1.0.0',
      description: 'Register Form | Login | CRUD Operations ',
    },
    servers: [
      {
        url: 'http://localhost:8080/api/v1/auth'
      }
    ]
  },
  apis: ['./src/routes/*.ts'],
};
// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options)
  ;



// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// routes
app.use('/api/v1/role', roleRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/device', deviceRouter);

//custom error or sucess
app.use((obj: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = obj.status || 500;
  const message = obj.message || "Something went wrong"; 
  return res.status(statusCode).json({
    success: [200, 201, 204].some(a => a === obj.status) ? true : false,
    status: statusCode,
    message: message,
    data: obj.data
  })
})

/**
 * @swagger
 * /:
 *   get:
 *     summary: To get all users from mongodb
 *     description: This api is used to fetch data from mongodb
 *     responses:
 *       '200':
 *         description: This api is used to fetch data from mongodb
 */
app.get('/', (req: Request, res: Response) => {// rest api
  res.send('Server running');
});

// PORT
const PORT: number = parseInt(process.env.PORT!) || 8080;


// run listen
app.listen(PORT, () => {
  console.log(`Server is running on mode ${process.env.DEV_MODE} on port ${PORT}`);

});
