import * as apiMocker from 'apimocker';
import * as path from 'path';
// import * as configData from './config';

const PORT = process.env.PORT || 7878;

const server = apiMocker
  .createServer({ quiet: false })
  .setConfigFile(path.resolve(__dirname, 'config'));

server.start(PORT, () => console.log(`API mocker is running @${PORT}`));

export const mockerExpressApp = server.express;

export default server.express;
