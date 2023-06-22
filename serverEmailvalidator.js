const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3007;

app.use(cors());

// New endpoint for email validation
app.get('/validate-email', async (req, res) => {
  try {
    const options = {
      method: 'GET',
      url: 'https://email-validator28.p.rapidapi.com/email-validator/validate',
      params: {
        email: req.query.email // Extract email from query parameters
      },
      headers: {
        'content-type': 'application/json',
        'Content-Security-Policy': "script-src 'self' 'https://ssl.google-analytics.com';",
        'X-RapidAPI-Key': '6c4153b579msh3b88fb9e42fb3dap1c3822jsn700d8fa34f4a',
        'X-RapidAPI-Host': 'email-validator28.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    const data = response.data;
    
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
