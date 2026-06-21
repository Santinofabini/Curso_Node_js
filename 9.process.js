console.log(process.argv); //se muestra el array de argumentos de la línea de comandos en la consola, todo separdo para cada espacio, por ejemplo: node 9.process.js hola mundo se mostrará ['node', '9.process.js', 'hola', 'mundo']

process.exit(1); //se termina el proceso con un código de salida de 1, lo que indica que el proceso ha fallado. Si se pasa un código de salida de 0, se indica que el proceso se ha completado correctamente.

 console.log(process.cwd()); //se muestra el directorio de trabajo actual en la consola, es decir, el directorio desde el cual se está ejecutando el proceso.
