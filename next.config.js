const isProd = process.env.NODE_ENV === "production";

module.exports = {
  trailingSlash: true,
  basePath: isProd ? "/Amma" : "",
  assetPrefix: isProd ? "/Amma/" : "",
};
