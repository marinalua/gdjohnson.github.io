/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// play = document.getElementsByName(\"play\")[0];\n// window.addEventListener('DOMContentLoaded', () => {\n//     loadTracks({innerHTML: \"Something\", style: true});\n// });\n// const togglePlayback = () => {\n//     if (play.id === \"paused\"){\n//         setTimeout(() => {\n//             tracks.forEach(track => { track.play(); })\n//             play.innerHTML = \"Ⅱ Pause\"; \n//             play.id = \"playing\"}, \n//             300);\n//         } else {\n//         setTimeout(() => {\n//             tracks.forEach(track => { track.play(); })\n//             play.innerHTML = \"► Play\"; \n//             play.id = \"paused\"}, \n//             300);\n//     }\n// }\n// const showControls = (event) => {\n//     const controls = event.parentElement.children[0];\n//     if (controls.style.display = \"none\"){\n//         controls.style.display = \"flex\";\n//     } else {\n//         controls.style.display = \"none\";\n//     }\n// }\n// const eventInterpreter = (event) => {\n//     const track = tracks[parseInt(event.parentElement.key)];\n//     const action = event.innerHTML;\n//     if (action == \"Solo\") {\n//         solo(track);\n//     } \n//     if (action == \"Add\") {\n//         add(track);\n//     }\n//     if (action == \"Mute\") {\n//         mute(track);\n//     }\n// }\n// const solo = (track) => {\n//     tracks.forEach(track => { track.volume = 0 });\n//     track.volume = 1;\n// }\n// const add = (track) =>{\n//     track.volume = 1;\n// }\n// const mute = (track) =>{\n//     track.muted = 0; \n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLmpzPzFkNTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJwbGF5XCIpWzBdO1xuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbi8vICAgICBsb2FkVHJhY2tzKHtpbm5lckhUTUw6IFwiU29tZXRoaW5nXCIsIHN0eWxlOiB0cnVlfSk7XG4vLyB9KTtcblxuLy8gY29uc3QgdG9nZ2xlUGxheWJhY2sgPSAoKSA9PiB7XG4vLyAgICAgaWYgKHBsYXkuaWQgPT09IFwicGF1c2VkXCIpe1xuLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgICAgICAgIHRyYWNrcy5mb3JFYWNoKHRyYWNrID0+IHsgdHJhY2sucGxheSgpOyB9KVxuLy8gICAgICAgICAgICAgcGxheS5pbm5lckhUTUwgPSBcIuKFoSBQYXVzZVwiOyBcbi8vICAgICAgICAgICAgIHBsYXkuaWQgPSBcInBsYXlpbmdcIn0sIFxuLy8gICAgICAgICAgICAgMzAwKTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4vLyAgICAgICAgICAgICB0cmFja3MuZm9yRWFjaCh0cmFjayA9PiB7IHRyYWNrLnBsYXkoKTsgfSlcbi8vICAgICAgICAgICAgIHBsYXkuaW5uZXJIVE1MID0gXCLilrogUGxheVwiOyBcbi8vICAgICAgICAgICAgIHBsYXkuaWQgPSBcInBhdXNlZFwifSwgXG4vLyAgICAgICAgICAgICAzMDApO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gY29uc3Qgc2hvd0NvbnRyb2xzID0gKGV2ZW50KSA9PiB7XG4vLyAgICAgY29uc3QgY29udHJvbHMgPSBldmVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdO1xuXG4vLyAgICAgaWYgKGNvbnRyb2xzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIil7XG4vLyAgICAgICAgIGNvbnRyb2xzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBjb250cm9scy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBjb25zdCBldmVudEludGVycHJldGVyID0gKGV2ZW50KSA9PiB7XG4vLyAgICAgY29uc3QgdHJhY2sgPSB0cmFja3NbcGFyc2VJbnQoZXZlbnQucGFyZW50RWxlbWVudC5rZXkpXTtcbi8vICAgICBjb25zdCBhY3Rpb24gPSBldmVudC5pbm5lckhUTUw7XG5cbi8vICAgICBpZiAoYWN0aW9uID09IFwiU29sb1wiKSB7XG4vLyAgICAgICAgIHNvbG8odHJhY2spO1xuLy8gICAgIH0gXG5cbi8vICAgICBpZiAoYWN0aW9uID09IFwiQWRkXCIpIHtcbi8vICAgICAgICAgYWRkKHRyYWNrKTtcbi8vICAgICB9XG5cbi8vICAgICBpZiAoYWN0aW9uID09IFwiTXV0ZVwiKSB7XG4vLyAgICAgICAgIG11dGUodHJhY2spO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gY29uc3Qgc29sbyA9ICh0cmFjaykgPT4ge1xuLy8gICAgIHRyYWNrcy5mb3JFYWNoKHRyYWNrID0+IHsgdHJhY2sudm9sdW1lID0gMCB9KTtcbi8vICAgICB0cmFjay52b2x1bWUgPSAxO1xuLy8gfVxuXG4vLyBjb25zdCBhZGQgPSAodHJhY2spID0+e1xuLy8gICAgIHRyYWNrLnZvbHVtZSA9IDE7XG4vLyB9XG5cbi8vIGNvbnN0IG11dGUgPSAodHJhY2spID0+e1xuLy8gICAgIHRyYWNrLm11dGVkID0gMDsgXG4vLyB9XG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./main.js\n");

/***/ })

/******/ });