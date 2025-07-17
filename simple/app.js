const express = require('express');

const app = express();
const PORT = 8001;

// Middleware for parsing JSON
app.use(express.json());

// Currently no endpoints defined - this is a minimal server

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
