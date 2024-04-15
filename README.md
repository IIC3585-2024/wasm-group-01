# Tarea 2 - WASM

Esta tarea consiste en crear una función tanto en JavaScript como en otro lenguaje externo, como C/C++, para luego importarlos a JS usando WebAssembly, para finalmente comparar el rendimiento de cada uno.

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
