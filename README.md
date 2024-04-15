# Tarea 2 - WASM

Esta tarea consiste en crear una función tanto en JavaScript como en otro lenguaje externo, como C/C++, para luego importarlos a JS usando WebAssembly, para finalmente comparar el rendimiento de cada uno.

## Consideraciones

El máximo valor que se puede ingresar es el límite del tipo de número ``unsigned long long`` en C, que corresponde a ``18.446.744.073.709.551.615``. Pasado este valor, la función arroja resultados erroneos.

## Instrucciones de ejecución

1. Instale Emscripten y asigne las variables de entorno:
```bash
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
git pull
./emsdk install latest
./emsdk activate latest
source ./emsdk_env.sh
```

2. Ejecute el siguiente comando para construir los módulos de WASM para C, con sus respectivas optimizaciones:
```bash
chmod +x compile.sh # En caso de que el archivo shell no tenga permisos
./compile.sh
```

3. Abra el archivo **index.html**.
