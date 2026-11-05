
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-HBHELABQ.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I3YHFQ2T.js",
      "chunk-6CDBZ37O.js",
      "chunk-BJLZ7YU7.js"
    ],
    "route": "/user"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I3YHFQ2T.js",
      "chunk-6CDBZ37O.js",
      "chunk-BJLZ7YU7.js",
      "chunk-UFM77FX3.js"
    ],
    "route": "/user/signin"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I3YHFQ2T.js",
      "chunk-6CDBZ37O.js",
      "chunk-BJLZ7YU7.js",
      "chunk-DRLZM7DW.js"
    ],
    "route": "/user/signup"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I3YHFQ2T.js",
      "chunk-6CDBZ37O.js",
      "chunk-BJLZ7YU7.js",
      "chunk-EKHETBET.js"
    ],
    "route": "/user/support"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I3YHFQ2T.js",
      "chunk-6CDBZ37O.js",
      "chunk-BJLZ7YU7.js",
      "chunk-HVJZQNWQ.js"
    ],
    "route": "/user/profile"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I3YHFQ2T.js",
      "chunk-6CDBZ37O.js",
      "chunk-BJLZ7YU7.js",
      "chunk-XNLUFTYM.js"
    ],
    "route": "/user/settings"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I3YHFQ2T.js",
      "chunk-6CDBZ37O.js",
      "chunk-BJLZ7YU7.js",
      "chunk-ZXW7A66P.js",
      "chunk-OZXLYWHU.js"
    ],
    "redirectTo": "/user/dashboard/devotional",
    "route": "/user/dashboard"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I3YHFQ2T.js",
      "chunk-6CDBZ37O.js",
      "chunk-BJLZ7YU7.js",
      "chunk-ZXW7A66P.js",
      "chunk-OZXLYWHU.js"
    ],
    "route": "/user/dashboard/devotional"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I3YHFQ2T.js",
      "chunk-6CDBZ37O.js",
      "chunk-BJLZ7YU7.js",
      "chunk-ZXW7A66P.js",
      "chunk-OZXLYWHU.js",
      "chunk-7QUW5DTI.js",
      "chunk-DRR7BIQI.js",
      "chunk-YRWN3HOE.js"
    ],
    "route": "/user/dashboard/devotional/books"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I3YHFQ2T.js",
      "chunk-6CDBZ37O.js",
      "chunk-BJLZ7YU7.js",
      "chunk-ZXW7A66P.js",
      "chunk-OZXLYWHU.js",
      "chunk-7QUW5DTI.js",
      "chunk-DRR7BIQI.js",
      "chunk-YRWN3HOE.js"
    ],
    "route": "/user/dashboard/devotional/books/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I3YHFQ2T.js",
      "chunk-6CDBZ37O.js",
      "chunk-BJLZ7YU7.js",
      "chunk-ZXW7A66P.js",
      "chunk-OZXLYWHU.js",
      "chunk-FK7US23E.js",
      "chunk-FLK6FMQT.js",
      "chunk-YRWN3HOE.js"
    ],
    "route": "/user/dashboard/devotional/multimedia"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I3YHFQ2T.js",
      "chunk-6CDBZ37O.js",
      "chunk-BJLZ7YU7.js",
      "chunk-ZXW7A66P.js",
      "chunk-OZXLYWHU.js",
      "chunk-LISOBP4T.js",
      "chunk-FZMUYQUY.js",
      "chunk-MRYRR5R7.js",
      "chunk-YRWN3HOE.js"
    ],
    "route": "/user/dashboard/devotional/event"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I3YHFQ2T.js",
      "chunk-6CDBZ37O.js",
      "chunk-BJLZ7YU7.js",
      "chunk-ZXW7A66P.js",
      "chunk-OZXLYWHU.js",
      "chunk-LISOBP4T.js",
      "chunk-FZMUYQUY.js",
      "chunk-MRYRR5R7.js",
      "chunk-YRWN3HOE.js"
    ],
    "route": "/user/dashboard/devotional/event/ai-pandit"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I3YHFQ2T.js",
      "chunk-6CDBZ37O.js",
      "chunk-BJLZ7YU7.js",
      "chunk-ZXW7A66P.js",
      "chunk-OZXLYWHU.js",
      "chunk-LISOBP4T.js",
      "chunk-FZMUYQUY.js",
      "chunk-MRYRR5R7.js",
      "chunk-YRWN3HOE.js",
      "chunk-ZMR4VHQE.js"
    ],
    "route": "/user/dashboard/devotional/event/upcoming"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I3YHFQ2T.js",
      "chunk-6CDBZ37O.js",
      "chunk-BJLZ7YU7.js",
      "chunk-ZXW7A66P.js",
      "chunk-OZXLYWHU.js"
    ],
    "route": "/user/dashboard/devotional/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I3YHFQ2T.js",
      "chunk-6CDBZ37O.js",
      "chunk-BJLZ7YU7.js",
      "chunk-ZXW7A66P.js",
      "chunk-OZXLYWHU.js"
    ],
    "route": "/user/dashboard/devotional/ai-pandit"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I3YHFQ2T.js",
      "chunk-6CDBZ37O.js",
      "chunk-BJLZ7YU7.js",
      "chunk-ZXW7A66P.js",
      "chunk-OZXLYWHU.js",
      "chunk-ZMR4VHQE.js",
      "chunk-MRYRR5R7.js",
      "chunk-YRWN3HOE.js"
    ],
    "route": "/user/dashboard/devotional/upcoming"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8227, hash: '04e86ac484356c9a63a5497ef64ce9273d62760f3d6e6bbaf4b4aa8b73fc56f7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1163, hash: '02cf5c20be0824eb4810a95c4b51d9339f6171da988ba6a4b5b8b82d040f129a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3HLK37MP.css': {size: 118400, hash: 'pKfCYO44FV4', text: () => import('./assets-chunks/styles-3HLK37MP_css.mjs').then(m => m.default)}
  },
};
