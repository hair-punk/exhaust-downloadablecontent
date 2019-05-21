const express = require('express');
let app = express();
const port = 3003;

app.use(express.static(__dirname+'/../client/dist'));



app.listen(port, () => {
  console.log(`listening on port ${port}`);
});