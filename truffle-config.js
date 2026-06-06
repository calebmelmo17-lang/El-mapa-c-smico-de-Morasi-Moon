module.exports = {
  networks: {
    development: {
      privateKey: "TU_LLAVE_PRIVADA_TRON_AQUI",
      consume_user_resource_percent: 30,
      fee_limit: 100000000,
      fullHost: "http://127.0.0.1:9090",
      network_id: "*"
    },
    mainnet: {
      privateKey: "TU_LLAVE_PRIVADA_TRON_AQUI",
      consume_user_resource_percent: 30,
      fee_limit: 100000000,
      fullHost: "https://api.trongrid.io",
      network_id: "*"
    },
    shasta: {
      privateKey: "TU_LLAVE_PRIVADA_TRON_AQUI",
      consume_user_resource_percent: 30,
      fee_limit: 100000000,
      fullHost: "https://api.shasta.trongrid.io",
      network_id: "*"
    }
  },
  compilers: {
    solc: {
      version: "0.8.6"
    }
  }
};
