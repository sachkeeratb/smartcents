import { Request, Response } from 'express';
import { ResourceModel } from '../db/resources';

const getResourcesByTitle = async (req: Request, res: Response) => {
	const { title, page, limit } = req.query;

	const pageNumber = parseInt(page as string);
	const limitNumber = parseInt(limit as string);

	try {
		const resources = await ResourceModel.find({
			title: new RegExp(title as string, 'i')
		})
			.skip((pageNumber - 1) * limitNumber)
			.limit(limitNumber);

		res.status(200).json(resources);
	} catch (error) {
		if (error instanceof Error) {
			res.status(500).json({ message: error.message });
		} else {
			res.status(500).json({ message: 'An unknown error occurred' });
		}
	}
};

const getTotalResources = async (req: Request, res: Response) => {
	try {
		const totalResources = await ResourceModel.countDocuments();
		res.status(200).json({ total: totalResources });
	} catch (error) {
		if (error instanceof Error) {
			res.status(500).json({ message: error.message });
		} else {
			res.status(500).json({ message: 'An unknown error occurred' });
		}
	}
};

const getTotalResourcesByTitle = async (req: Request, res: Response) => {
	const { title } = req.query;

	try {
		const totalResources = await ResourceModel.countDocuments({
			title: new RegExp(title as string, 'i')
		});
		res.status(200).json({ total: totalResources });
	} catch (error) {
		if (error instanceof Error) {
			res.status(500).json({ message: error.message });
		} else {
			res.status(500).json({ message: 'An unknown error occurred' });
		}
	}
};

export { getResourcesByTitle, getTotalResources, getTotalResourcesByTitle };
