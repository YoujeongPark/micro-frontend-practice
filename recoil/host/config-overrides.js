var path = require("path");
const { dependencies } = require("./package.json");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

const { override, babelInclude } = require("customize-cra");

module.exports = function (config, env) {
  config.plugins.push(
    new ModuleFederationPlugin(
      (module.exports = {
        name: "host",
        remotes: {
          remote: env.mode === 'development'? `https://module-federation-state-management.vercel.app/` : 
          `remote@http://localhost:3001/remoteEntry.js`,
        },
        exposes: {
          "./atoms": "./src/store/atoms",
        },
        filename: "remoteEntry.js",
        shared: {
          ...dependencies,
          react: {
            singleton: true,
            requiredVersion: dependencies["react"],
          },
          "react-dom": {
            singleton: true,
            requiredVersion: dependencies["react-dom"],
          },
          "recoil": {
            singleton: true,
            requiredVersion: dependencies["recoil"],
          },
        },
      })
    )
  );
  config.output.publicPath = "auto";
  return Object.assign(
    config,
    override(
      babelInclude([
        /* transpile (converting to es5) code in src/ and shared component library */
        path.resolve("src"),
        path.resolve("../remote/src/components"),
      ])
    )(config, env)
  );
};
