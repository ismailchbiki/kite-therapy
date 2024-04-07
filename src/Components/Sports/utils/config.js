import * as devConfig from "./env/config.dev";
import * as prodConfig from "./env/config.prod";

const getConfig = () => {
  if (process.env.NODE_ENV === "production") {
    return prodConfig;
  } else {
    return devConfig;
  }
};

export default getConfig();
