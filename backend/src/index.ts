import express, { Request, Response } from "express";
import cors from "cors";
import accordionRoutes from "./routes/accordion";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("E-commerce API running 🚀");
});

app.use("/api/accordion", accordionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
