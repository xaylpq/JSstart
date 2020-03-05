'use strict';

let path = require('path');           // путь ко всем файлам

module.exports = {
  mode: 'development',                // режим сборки
  entry: './src/js/script.js',        // точка входа
  output: {                           // файл выхода
    filename: 'bundle.js',
    path: __dirname + '/dist/js'
  },
  watch: true,                        // после вызова обновляет изменения в проекте

  devtool: "source-map"
};

// запуск npx webpack