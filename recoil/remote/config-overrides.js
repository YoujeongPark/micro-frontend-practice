var path = require("path");
const { dependencies } = require("./package.json");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

const { override, babelInclude } = require("customize-cra");

module.exports = function (config, env) {
  console.log(env)
  config.plugins.push(
    new ModuleFederationPlugin(
      (module.exports = {
        name: "remote",
        remotes: {
          host: 
          //env.mode === 'development'? 
          //'host@http://localhost:3000/remoteEntry.js'
          `host@https://recoilhost.vercel.app/remoteEntry.js`
        },
        exposes: {
          "./Card": "./src/components/Card",
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
        path.resolve("../host/src/components"),
      ])
    )(config, env)
  );
};
