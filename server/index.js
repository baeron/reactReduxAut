import express from 'express';
import path from 'path';

var app = express();

app.get('/*', (req, res) => {
    res.sendfile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log('Server start on port 3000'));