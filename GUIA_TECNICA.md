# 🛠️ Guía Técnica — El Mapa Cósmico del Legado Alphakay

Este documento acompaña la visión espiritual con pasos técnicos claros para desplegar y mintear la constelación Alphakay en la red TRON.

---

## ⚙️ Requisitos previos
- Node.js y npm instalados
- TronBox (`npm install -g tronbox`)
- Wallet TRON con saldo suficiente de TRX
- Llave privada configurada en `truffle-config.js` (usa variables de entorno, nunca publiques tu llave)

---

## 📂 Estructura del proyecto
```
/
├── contrato/
│   └── LegadoAlphakay.sol       → contrato TRC‑721
├── migrations/
│   ├── 1_deploy_legado_alphakay.js    → script de despliegue inicial
│   └── 2_mint_constelacion.js         → script para mintear las 9 estrellas
├── scripts/
│   └── mint_constelacion.js     → ejecutable para mintear constelación
├── historia/
│   ├── liturgia.md              → liturgia del primer mint
│   └── constelacion.md          → mapa narrativo de la constelación
├── truffle-config.js            → configuración de redes TRON
├── package.json                 → dependencias del proyecto
└── README.md                    → documentación principal
```

---

## 🚀 Despliegue del contrato

### Paso 1: Instalar dependencias
```bash
npm install
npm install -g tronbox
```

### Paso 2: Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto:
```
TRON_PRIVATE_KEY=tu_llave_privada_aqui
TRON_WALLET_ADDRESS=tu_wallet_tron_aqui
```

### Paso 3: Configurar truffle-config.js
Actualiza el archivo `truffle-config.js` con tus credenciales (desde variables de entorno):
```javascript
require('dotenv').config();

module.exports = {
  networks: {
    shasta: {
      privateKey: process.env.TRON_PRIVATE_KEY,
      consume_user_resource_percent: 30,
      fee_limit: 100000000,
      fullHost: "https://api.shasta.trongrid.io",
      network_id: "*"
    },
    mainnet: {
      privateKey: process.env.TRON_PRIVATE_KEY,
      consume_user_resource_percent: 30,
      fee_limit: 100000000,
      fullHost: "https://api.trongrid.io",
      network_id: "*"
    }
  },
  compilers: {
    solc: {
      version: "0.8.6"
    }
  }
};
```

### Paso 4: Desplegar en testnet (Shasta)
```bash
tronbox migrate --network shasta
```

### Paso 5: Desplegar en mainnet (producción)
```bash
tronbox migrate --network mainnet
```

---

## ⭐ Mintear la constelación

### Opción 1: Mediante migration automática
El archivo `migrations/2_mint_constelacion.js` mintea automáticamente las 9 estrellas durante el despliegue.

### Opción 2: Script manual
Ejecuta el script manualmente después del despliegue:
```bash
tronbox exec scripts/mint_constelacion.js --network shasta
```

Esto minteará las 9 estrellas de la constelación Alphakay y mostrará la liturgia en consola.

---

## 🔍 Verificar el despliegue en Tronscan

1. Ve a [https://shasta.tronscan.org](https://shasta.tronscan.org) (testnet) o [https://tronscan.org](https://tronscan.org) (mainnet)
2. Busca la dirección de tu contrato
3. Verifica que los NFTs fueron minteados correctamente
4. Consulta las transacciones de minting

---

## 🌌 Liturgia y confirmación

Después de cada mint, el sistema registrará en consola:
```
⭐ Estrella 1 minteada para: [wallet_address]
⭐ Estrella 2 minteada para: [wallet_address]
...
🌌 Liturgia de la Constelación:
[contenido de constelacion.md]
```

---

## ⚠️ Seguridad

- **Nunca** publiques tu llave privada en repositorios públicos
- Usa siempre un archivo `.env` local (añadido a `.gitignore`)
- Prueba primero en testnet (Shasta) antes de mainnet
- Verifica las transacciones antes de confirmar en mainnet

---

## 📚 Enlaces útiles

- [TRON Documentation](https://developers.tron.network/)
- [Tronscan](https://tronscan.org/)
- [TronBox Guide](https://developers.tron.network/docs/tronbox)
- [TRC‑721 Standard](https://github.com/tronprotocol/tips/blob/master/tip-721.md)

---

**Que el legado Alphakay crezca y redima en el firmamento TRON. 🌌✨**
