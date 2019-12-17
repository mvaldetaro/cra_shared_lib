var path = require("path");
var fs = require("fs");
const {
  override,
  addDecoratorsLegacy,
  babelInclude,
  addWebpackAlias
} = require("customize-cra");

module.exports = function(config, env) {
  return Object.assign(
    config,
    override(
      addDecoratorsLegacy(),
      addWebpackAlias({
        react: path.resolve(path.join(__dirname, "./node_modules/react")),
        sharedComponents: path.resolve(
          path.join(
            __dirname,
            "./node_modules/react_shared_components/src/components"
          )
        )
      }),
      babelInclude([
        path.resolve("src"),
        fs.realpathSync("node_modules/react_shared_components/src")
      ])
    )(config, env)
  );
};
