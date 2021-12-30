const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase,{ defaultConfig }) => {
    if(phase === PHASE_DEVELOPMENT_SERVER){
        return {
            env:{
                DB_USER:'okyska',
                DB_PASS:'2jMwtFkN3u6i7hMj',
                DB_NAME:'testing'
            }
        }
    }

    return defaultConfig;
}