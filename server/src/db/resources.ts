import mongoose from 'mongoose';

const ResourceSchema = new mongoose.Schema({
	title: { type: String, required: true },
	imageSource: { type: String, required: true },
	link: { type: String, required: true },
	description: { type: String, required: true }
});

export const ResourceModel = mongoose.model('Resource', ResourceSchema);
