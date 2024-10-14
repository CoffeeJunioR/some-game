/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const gamepool = document.querySelector('.gamepool');\r\nconst gamepoolItems = gamepool.querySelectorAll('.gamepool_item');\r\nconst img = document.createElement('img');\r\n\r\nfunction setRandomPool(gamepoolItems) {\r\n    let randomItem = gamepoolItems[(Math.random()*10).toFixed(0)];\r\n    img.setAttribute('src', '../img/goblin.png');\r\n    img.className = 'goblin_img';\r\n    randomItem.appendChild(img);\r\n};\r\n\r\nfunction removeImg(img) {\r\n    img.remove();\r\n};\r\n\r\nsetRandomPool(gamepoolItems);\r\n\r\nsetInterval(() => {\r\n    removeImg(img);\r\n}, 1500);\r\n\r\nsetInterval(() => {\r\n    setRandomPool(gamepoolItems);\r\n}, 1500);\n\n//# sourceURL=webpack://dom/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;