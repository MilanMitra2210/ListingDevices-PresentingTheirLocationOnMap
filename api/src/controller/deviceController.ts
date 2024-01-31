import { Request, Response, NextFunction } from "express";
import DeviceModel from "../models/deviceModel";


const addDeviceController = async (
    req: Request,
    res: Response
): Promise<any> => {
    try {
        const { deviceId, name } = req.body;
        if(!deviceId || !name){
            return res.status(404).json({ message: 'Please provide DeviceID, Name in body' });
        }
        const device = await DeviceModel.findOne({deviceId});
        if(device){
            return res.status(404).json({ message: 'Device already exist' });
        }

        const newDevice = new DeviceModel({ name, deviceId });

        // Save the updated device
        await newDevice.save();

        return res.status(200).json(newDevice);
    } catch (error) {
        console.error('Error adding device:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
const addDeviceLocationController = async (
    req: Request,
    res: Response
): Promise<any> =>{
    try {
      const { latitude, longitude } = req.body;
      const deviceId = req.params.deviceId;
  
      // Find the device by ID
      const device = await DeviceModel.findOne({deviceId});
  
      if (!device) {
        return res.status(404).json({ error: 'Device not found' });
      }
  
      // Add the new location to the device's locations array
      device.locations.push({ latitude, longitude });
      
      // Save the updated device
      await device.save();
  
      return res.status(200).json(device);
    } catch (error) {
      console.error('Error adding location to device:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
const getDeviceController = async (
    req: Request,
    res: Response
): Promise<any> => {
    try {
      const deviceId = req.params.deviceId;
  
      // Find the device by ID
      const device = await DeviceModel.findOne({deviceId});
  
      if (!device) {
        return res.status(400).json({ error: 'Device not found' });
      }
  
      return res.status(200).json(device);
    } catch (error) {
      console.error('Error retrieving device data:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

export {addDeviceController, getDeviceController, addDeviceLocationController};