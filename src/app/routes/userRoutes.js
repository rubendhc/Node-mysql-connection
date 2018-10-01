const express = require(express);
const router = express.Router();

router.get('/', (request, response)=>{
  response.json(["Esto":"Está genial"]);
});




module.exports = router;