import { Request, Response } from "express";
import { findShortPath } from "../services/path.service";

export const getShortestPath = (req: Request, res: Response) => {
  const { grafo, start, end } = req.body;

  if (!grafo || !start || !end) {
    return res.status(400).json({ error: "Faltan datos necesarios" });
  }

  const result = findShortPath(grafo, start, end);
  res.json(result);
};
