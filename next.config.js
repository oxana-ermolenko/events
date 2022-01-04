const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

let BASE_URL = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : process.env.PROD_URL;

const nextConfig = {
    publicRuntimeConfig: {
        base_url: BASE_URL

    }
}

module.exports = (phase,{ defaultConfig }) => {
    if(phase === PHASE_DEVELOPMENT_SERVER){
        return {
            env:{
                DB_USER:'okyska',
                DB_PASS:'2jMwtFkN3u6i7hMj',
                DB_NAME:'testing',
                EMAIL_USER:'okyska@gmail.com',
                EMAIL_PASS:'ocyswkkmjujvlhvr'
            }
        }
    }

    return defaultConfig;
}