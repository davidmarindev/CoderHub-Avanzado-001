const { Queue } = require('bullmq');
const redisConfig = require('./redis');

const queue = new Queue('exampleQueue', {
  connection: {
    host: redisConfig.host,
    port: redisConfig.port,
  },
});

module.exports = queue;