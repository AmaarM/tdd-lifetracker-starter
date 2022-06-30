const express = require("express");
const router = express.Router();

router.get("/" , (req,res) => {
    res.status(200).json({"ping":"pong"});
})


router.post("/login", async (req, res, next) => {
  try {

  } catch (err) {

  }
});


router.post("/register", async (req, res, next) => {
    try {
  
    } catch (err) {
      
    }
});


module.exports = router;