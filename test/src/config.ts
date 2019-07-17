import * as path from 'path';

// Config docs: https://www.npmjs.com/package/apimocker#configuration
export default {
  mockDirectory: path.resolve(__dirname, 'mocks'),
  port: process.env.PORT || '7878',
  quiet: false,
  latency: 50,
  webServices: {
    friends: {
      contentType: 'application/json',
      mockFile: 'forbidden.mock.json',
      verbs: ['get', 'post', 'put', 'delete'],
      responses: {
        get: { httpStatus: 200, mockFile: 'friends.mock.json' },
        post: { httpStatus: 405, mockFile: 'forbidden.mock.json' },
        put: { httpStatus: 405, mockFile: 'forbidden.mock.json' },
        delete: { httpStatus: 405, mockFile: 'forbidden.mock.json' },
      },
    },
  },
};
