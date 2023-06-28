import express from "express";
import * as diaryServices from "../services/diaries.services";

const router = express.Router();

router
  .route("/")
  .get((_req, res) => res.send(diaryServices.getEntriesWithoutDate()))
  .post((req, res) => {
    const data = req.body;
    return res.send(diaryServices.addEntry(data));
  });

router.route("/:id").get((req, res) => {
  const id = req.params.id;

  const diary = diaryServices.findById(Number(id));

  return diary != null ? res.send(diary) : res.sendStatus(404);
});

export default router;
