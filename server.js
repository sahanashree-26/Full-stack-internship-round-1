const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/intern', (req, res) => {
  res.json({
    name: "Sahana Shree",
    referralCode: "sahanashree2025",
    donationsRaised: 5000
  });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
