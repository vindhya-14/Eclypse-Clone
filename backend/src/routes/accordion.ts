import { Router, Request, Response } from "express";

const router = Router();

const accordionData = [
  { title: "Size & Fit", content: "Size & Fit details go here." },
  {
    title: "Delivery & Returns",
    content: "Delivery & Returns info goes here.",
  },
  { title: "How This Was Made", content: "Manufacturing details go here." },
];

router.get("/", (_req: Request, res: Response) => {
  res.json(accordionData);
});

export default router;
