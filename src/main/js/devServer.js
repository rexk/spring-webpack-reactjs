import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../../../webpack.config';

const { publicPath } = config.output;
const server = new WebpackDevServer(webpack(config), {
  publicPath,
  hot: true,
  historyApiFallback: true,
  proxy: [{
    path: /((^\/client)|(?!\.js)$)/,
    target: 'http://localhost:8080'
  }]
});

server.listen(3000, '0.0.0.0', (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Listening at localhost:3000');
});
