'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
    DOMAIN: 'http://localhost:3000',
    SESSION_SECRET: 'keyslideApp-secret-43245fdwFSDfsd2',

    FACEBOOK_ID: '1010926505659998',
    FACEBOOK_SECRET: '5daaf3b6cff52a9e0caa426daa4e62fd',

    TWITTER_ID: 'xvvL8VrXfLTYOutLeOzn93J5m',
    TWITTER_SECRET: 'vCu7TFzN0IvSY3545cELFQVGxFOtXTvqD0O5xgD3NYXuB5Yqkv',

    GOOGLE_ID: '938693771869-upsao7ia35dj3gdvkhsevd77gjukvdne.apps.googleusercontent.com',
    GOOGLE_SECRET: 'LdT5qJzJQnMpm2Xc8XFE7IC7',

    // Control debug level for modules using visionmedia/debug
    // DEBUG: 'socket.io*'
    DEBUG: '',
    MAILUSER: 'freddy@fixe.cl',
    MAILPASS: 'pF2KhMFm2sLjvR',
    MAILSERVICE: 'zoho',
    MAILFROM: 'freddy@fixe.cl',
    ALGOLIAAPPLICATIONID:'QF1OQ6A0WX',
    ALGOLIAAPIKEY: '6b8c50c920d312d2cc923c9a4717c752',
    NODE_ENV: process.env.NODE_ENV || 'development'
};
