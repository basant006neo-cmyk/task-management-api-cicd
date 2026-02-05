import * as dotenv from 'dotenv'

import app from './app.js';

dotenv.config()

// import config from './config/index.js';

const PORT= process.env.PORT || 3000;

app.listen(config.port, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
