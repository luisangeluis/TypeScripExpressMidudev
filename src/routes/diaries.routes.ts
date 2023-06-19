import express from "express";

const router = express.Router();

router.route("/")
  .get((_req, res) => {
    res.send("Fetching all data");
  })
  .post((_req, res) => {
    res.send("Saving a diary")
  });



export default router;