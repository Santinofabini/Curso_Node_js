const os = require('node:os'); //se importa el módulo os de Node.js
console.log("Información del sistema operativo: ", os.platform());//muestra la información del sistema operativo
console.log("version del sistema operativo: ", os.release());
console.log("Arquitectura del sistema operativo: ", os.arch());
console.log("CPUS: ", os.cpus().length);
console.log("Memoria total: ", os.uptime() / 60 / 60);