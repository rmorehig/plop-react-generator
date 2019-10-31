import { readdirSync } from "fs";
import { join } from "path";

export default () => {
  return readdirSync(join(__dirname, `../../components`));
};
