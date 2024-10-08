const { compoundExports2 } = require("../helper/compound");



module.exports = {
  hallmarks: [
    [1720051200,"Rug Pull"]
  ],
  deadFrom: '2024-07-06',
  methodology:
    "Same as Compound Finance, we just count all the tokens supplied (not borrowed money) on the lending markets",
  merlin: {
    ...compoundExports2({ comptroller: '0x1F2Aa5598f6543090C4c61A90917909fb5560A43'}),
  },
  linea: {
    ...compoundExports2({ comptroller: '0xE54F37bbb8b7417EE4e0447DA0F8b922Fc7bb8Fa'}),
  },
}

module.exports.merlin.borrowed = () => ({}) // bad debt
module.exports.linea.borrowed = () => ({}) // bad debt

