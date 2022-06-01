const { ASSET_HOST } = process.env

// for those who using CDN
const assetPrefix = ASSET_HOST || ''

module.exports = {
  assetPrefix,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // set 'fs' to an empty module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      // config.resolve.fallback = {
      //   fs: false,
      //   path: false,
      //   os: false,
      //   zlib: false,
      //   crypto: false,
      //   stream: false,
      //   http:false,
      //   net:false,
      //   async_hooks:false,
      // }
    }

    return config
  },
}
