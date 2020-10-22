"use strict"

const axios = require('axios');
const baseConfig = {
    returnRejectPromiseOnError: true,
    baseURL: 'https://api.mcsrvstat.us/2/',
    validateStatus: function (status) {
        return status >= 200 && status < 300;
    }
}

module.exports = {
    async mcsrv(address) {
        try {
            const res = await axios.get(address, baseConfig);
            return res.data;
        } catch (err) {
            return err.response;
        }
    }
}
