const fs = require("fs");
const LegadoAlphakay = artifacts.require("LegadoAlphakay");

module.exports = async function (deployer) {
  const ownerAddress = "TU_WALLET_TRON_AQUI";
  const baseTokenURI = "ipfs://TU_HASH_AQUI/";

  await deployer.deploy(LegadoAlphakay, baseTokenURI);
  const contrato = await LegadoAlphakay.deployed();

  await contrato.mint(ownerAddress);

  console.log("Contrato desplegado en:", contrato.address);
  console.log("Primer NFT minteado para:", ownerAddress);

  // Registrar liturgia en consola
  const liturgia = fs.readFileSync("./historia/liturgia.md", "utf8");
  console.log("\n🌌 Liturgia del Minting:\n", liturgia);
};
