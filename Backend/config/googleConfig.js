const {google} = require('googleapis');

const GOOLE_CLIENT_ID = process.env.GOOLE_CLIENT_ID;
const GOOLE_CLIENT_SECRET = process.env.GOOLE_CLIENT_SECRET;

const oauth2Client = new google.auth.OAuth2(
    GOOLE_CLIENT_ID,
    GOOLE_CLIENT_SECRET,
    'postmessage'
);

module.exports = { oauth2Client };