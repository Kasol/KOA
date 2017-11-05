const dev_config = require('./config-dev');
const test_config = require('./config-test');
const pro_config = require('./config-pro');
var config;
switch (process.env.NODE_ENV) {
    case 'pro':
        config = pro_config;
        break;
    case 'test':
        config = test_config;
        break;
    default:
        config = dev_config;

}

module.exports = config;