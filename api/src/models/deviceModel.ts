import mongoose, { Schema } from 'mongoose';

const locationSchema = new Schema({
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    datetime: {
        type: Date,
        default: Date.now,
    },
});

const deviceSchema = new Schema({
    deviceId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    locations: [locationSchema],
});

const DeviceModel = mongoose.model('Device', deviceSchema);

export default DeviceModel;
