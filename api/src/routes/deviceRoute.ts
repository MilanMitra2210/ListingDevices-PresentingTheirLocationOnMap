import express from 'express';
import { addDeviceController, addDeviceLocationController, getAllDeviceController, getDeviceController, getAllDataController } from '../controller/deviceController';

const deviceRouter = express.Router();

// Endpoint to add location to a device
deviceRouter.post('/add', addDeviceController);

// Endpoint to add location to a device
deviceRouter.post('/:deviceId/add-locations', addDeviceLocationController);

// Endpoint to retrieve all devices
deviceRouter.get('/getalldevices', getAllDeviceController);

// Endpoint to retrieve all devices
deviceRouter.get('/get-all-data', getAllDataController);

// Endpoint to retrieve device data
deviceRouter.get('/:deviceId', getDeviceController);



export default deviceRouter;
