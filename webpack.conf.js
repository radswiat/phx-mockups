import { DevWebpackConfig, DevWebpackDevServer } from './webpack.base';

let config = (new DevWebpackConfig()).get();
let server = new DevWebpackDevServer(config);
server.createServer();
