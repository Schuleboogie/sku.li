const express = require('express');
const app = express();

app.use(express.static('public'));
app.get('/health', (req, res) => res.send('0 kills'));

app.listen(3000, () => console.log('Server for sku.li listening on port 3000'));
