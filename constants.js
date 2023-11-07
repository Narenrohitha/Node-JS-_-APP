require('dotenv');

const auth = {
    type: 'OAuth2',
    user: 'narenram267@gmail.com',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
};
const mailOptions = {    
    to: 'narenrohitha@gmail.com',
    from: 'narenram267@gmail.com',
    subject: 'Integrate Gmail API',
};

module.exports = {
    auth,
    mailOptions
}