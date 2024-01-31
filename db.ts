// const express = require('express');
// const app = express();
// const PORT = 3000;

// // Mock data for devices
// const devices = [
//   {
//     id: 1,
//     name: 'Device 1',
//     locations: [
//       { latitude: 40.7128, longitude: -74.0060, datetime: '2024-01-31T08:00:00' },
//       { latitude: 34.0522, longitude: -118.2437, datetime: '2024-01-31T09:00:00' },
//       // Add more locations if needed
//     ]
//   },
//   {
//     id: 2,
//     name: 'Device 2',
//     locations: [
//       { latitude: 51.5074, longitude: -0.1278, datetime: '2024-01-31T08:30:00' },
//       { latitude: 48.8566, longitude: 2.3522, datetime: '2024-01-31T09:30:00' },
//       // Add more locations if needed
//     ]
//   }
// ];

// // Endpoint to fetch all devices
// app.get('/api/devices', (req, res) => {
//   res.json(devices);
// });

// // Endpoint to fetch device by id
// app.get('/api/devices/:id', (req, res) => {
//   const deviceId = parseInt(req.params.id);
//   const device = devices.find(device => device.id === deviceId);
//   if (!device) {
//     res.status(404).send('Device not found');
//   } else {
//     res.json(device);
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
