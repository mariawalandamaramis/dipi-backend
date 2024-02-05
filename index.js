const express = require('express');
const app = express();
const router = require('./routes/index')
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
