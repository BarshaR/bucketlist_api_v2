/**
 * Server Configuration
 */

const app = require('./app');
require('dotenv').load();

const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log('Express server listening on port ' + port);
});
