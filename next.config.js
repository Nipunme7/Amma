const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/Amma" : "";

module.exports = {
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  publicRuntimeConfig: {
    basePath,
  },
};
