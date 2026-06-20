// .js --> por defecto utiliza CommonJS
// .mjs --> por defecto utiliza ES Modules
// .cjs --> por defecto utiliza CommonJS  

import {sum} from './sum.mjs'; //se copia en sum lo exportado
console.log(sum(2,3));