var config = {
  lolipopdb: {
               host:  process.env.LOLIPOP_HOST || 'localhost',
               user:  process.env.LOLIPOP_USER || 'lolipop',
               password:  process.env.LOLIPOP_PASS || '',
               database: process.env.LOLIPOP_DB || 'lolipop_test'
             }
}

module.exports = config;
