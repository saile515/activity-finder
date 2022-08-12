import "dotenv/config";

import { Schema, connect, model } from "mongoose";
import express, { Request } from "express";

const app = express();
const port = 8080;

connect(`mongodb://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:port/${process.env.DATABASE_NAME}`);

interface DayOpen {
	openingHour: number;
	closingHour: number;
}

interface ActivityInterface {
	name: string;
	category: string;
	website?: string;
	openingHours?: {
		monday?: DayOpen;
		tuesday?: DayOpen;
		wednesday?: DayOpen;
		thursday?: DayOpen;
		friday?: DayOpen;
		saturday?: DayOpen;
		sunday?: DayOpen;
		alwaysOpen?: boolean;
	};
}

const activitySchema = new Schema<ActivityInterface>({
	name: { type: String, required: true },
	category: { type: String, required: true },
	website: String,
	openingHours: {
		monday: { open: Boolean, openingHour: Number, closingHour: Number },
		tuesday: { open: Boolean, openingHour: Number, closingHour: Number },
		wednesday: { open: Boolean, openingHour: Number, closingHour: Number },
		thursday: { open: Boolean, openingHour: Number, closingHour: Number },
		friday: { open: Boolean, openingHour: Number, closingHour: Number },
		saturday: { open: Boolean, openingHour: Number, closingHour: Number },
		sunday: { open: Boolean, openingHour: Number, closingHour: Number },
		always: Boolean,
	},
});

const Activity = model<ActivityInterface>("User", activitySchema);

app.get("/activities", (req: Request<{ long: number; lat: number }>, res) => {
	res.send(`${req.query.long}, ${req.query.lat}`);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
