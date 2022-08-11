import express, { Request } from "express";

const app = express();
const port = 8080;

app.get("/activities", (req: Request<{ long: number; lat: number }>, res) => {
	res.send(`${req.query.long}, ${req.query.lat}`);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
