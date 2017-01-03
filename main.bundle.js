/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	var canvas = document.getElementById('game');
	var context = canvas.getContext('2d');
	var card = new Card(50, 50, 50, 50);
	var card2 = new Card(100, 100, 50, 50);

	function Card(x, y) {
	  this.card1 = Deal();
	  this.card2 = Deal();
	  this.x = x;
	  this.y = y;
	  this.height = height;
	  this.width = width;
	}

	Card.prototype.Deal = function () {
	  var card = Math.floor(Math.random() * 52 + 1);
	  console.log(card);
	};

	Card.prototype.drawCards = function () {
	  context.fillStyle = red;
	  context.fillRect(this.x, this.y, this.height, this.width);
	};

	requestAnimationFrame(function gameLoop() {
	  card.drawCards();
	  requestAnimationFrame(gameLoop);
	});

/***/ }
/******/ ]);