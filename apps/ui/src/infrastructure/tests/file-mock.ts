// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  process(_src, filename) {
    return { code: JSON.stringify(path.basename(filename)) };
  },
};
