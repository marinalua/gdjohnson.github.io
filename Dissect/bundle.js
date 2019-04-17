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

eval("var _this = this;\n\nvar play = document.getElementsByName(\"play\")[0];\n\nvar togglePlayback = function togglePlayback() {\n  if (play.id === \"paused\") {\n    setTimeout(function () {\n      track1.play();\n      track2.play();\n      track3.play();\n      track4.play();\n      track5.play();\n      play.innerHTML = \"Pause\";\n      play.id = \"playing\";\n    }, 300);\n  } else {\n    setTimeout(function () {\n      track1.pause();\n      track2.pause();\n      track3.pause();\n      track4.pause();\n      track5.pause();\n      play.innerHTML = \"Play\";\n      play.id = \"paused\";\n    }, 300);\n  }\n};\n\nvar resetTrack = function resetTrack() {\n  track1.load();\n  track2.load();\n  track3.load();\n  track4.load();\n  track5.load();\n  play.innerHTML = \"Play\";\n  play.id = \"paused\";\n};\n\nvar eventInterpreter = function eventInterpreter(event) {\n  debugger;\n  var track = event.parentElement.parentElement.firstElementChild.id;\n  var action = event.innerHTML;\n\n  if (action == \"Solo\") {\n    _this.solo(track);\n  }\n\n  if (action == \"Add\") {\n    _this.add(track);\n  }\n\n  if (action == \"Mute\") {\n    _this.mute(track);\n  }\n};\n\nvar solo = function solo(track) {\n  if (track == \"_1\") {\n    track1.muted = false;\n    track2.muted = true;\n    track3.muted = true;\n    track4.muted = true;\n    track5.muted = true;\n  }\n\n  if (track == \"_2\") {\n    track1.muted = true;\n    track2.muted = false;\n    track3.muted = true;\n    track4.muted = true;\n    track5.muted = true;\n  }\n\n  if (track == \"_3\") {\n    track1.muted = true;\n    track2.muted = true;\n    track3.muted = false;\n    track4.muted = true;\n    track5.muted = true;\n  }\n\n  if (track == \"_4\") {\n    track1.muted = true;\n    track2.muted = true;\n    track3.muted = true;\n    track4.muted = false;\n    track5.muted = true;\n  }\n\n  if (track == \"_5\") {\n    track1.muted = true;\n    track2.muted = true;\n    track3.muted = true;\n    track4.muted = true;\n    track5.muted = false;\n  }\n};\n\nvar add = function add(event) {\n  if (track == \"_1\") {\n    track1.muted = false;\n  }\n\n  if (track == \"_2\") {\n    track2.muted = false;\n  }\n\n  if (track == \"_3\") {\n    track3.muted = false;\n  }\n\n  if (track == \"_4\") {\n    track4.muted = false;\n  }\n\n  if (track == \"_5\") {\n    track5.muted = false;\n  }\n};\n\nvar mute = function mute(event) {\n  if (track == \"_1\") {\n    track1.muted = true;\n  }\n\n  if (track == \"_2\") {\n    track2.muted = true;\n  }\n\n  if (track == \"_3\") {\n    track3.muted = true;\n  }\n\n  if (track == \"_4\") {\n    track4.muted = true;\n  }\n\n  if (track == \"_5\") {\n    track5.muted = true;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLmpzPzFkNTAiXSwibmFtZXMiOlsicGxheSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJ0b2dnbGVQbGF5YmFjayIsImlkIiwic2V0VGltZW91dCIsInRyYWNrMSIsInRyYWNrMiIsInRyYWNrMyIsInRyYWNrNCIsInRyYWNrNSIsImlubmVySFRNTCIsInBhdXNlIiwicmVzZXRUcmFjayIsImxvYWQiLCJldmVudEludGVycHJldGVyIiwiZXZlbnQiLCJ0cmFjayIsInBhcmVudEVsZW1lbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImFjdGlvbiIsInNvbG8iLCJhZGQiLCJtdXRlIiwibXV0ZWQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGlCQUFULENBQTJCLE1BQTNCLEVBQW1DLENBQW5DLENBQWI7O0FBRUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ3pCLE1BQUlILElBQUksQ0FBQ0ksRUFBTCxLQUFZLFFBQWhCLEVBQXlCO0FBQ3JCQyxjQUFVLENBQUMsWUFBTTtBQUNiQyxZQUFNLENBQUNOLElBQVA7QUFBZU8sWUFBTSxDQUFDUCxJQUFQO0FBQWVRLFlBQU0sQ0FBQ1IsSUFBUDtBQUFlUyxZQUFNLENBQUNULElBQVA7QUFBZVUsWUFBTSxDQUFDVixJQUFQO0FBQzVEQSxVQUFJLENBQUNXLFNBQUwsR0FBaUIsT0FBakI7QUFDQVgsVUFBSSxDQUFDSSxFQUFMLEdBQVUsU0FBVjtBQUFvQixLQUhkLEVBSU4sR0FKTSxDQUFWO0FBS0gsR0FORCxNQU1PO0FBQ0hDLGNBQVUsQ0FBQyxZQUFNO0FBQ2JDLFlBQU0sQ0FBQ00sS0FBUDtBQUFnQkwsWUFBTSxDQUFDSyxLQUFQO0FBQWdCSixZQUFNLENBQUNJLEtBQVA7QUFBZ0JILFlBQU0sQ0FBQ0csS0FBUDtBQUFnQkYsWUFBTSxDQUFDRSxLQUFQO0FBQ2hFWixVQUFJLENBQUNXLFNBQUwsR0FBaUIs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QUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDTixLQUFELEVBQVU7QUFDbEIsTUFBSUMsS0FBSyxJQUFJLElBQWIsRUFBa0I7QUFDZFgsVUFBTSxDQUFDa0IsS0FBUCxHQUFlLEtBQWY7QUFBc0I7O0FBRTFCLE1BQUlQLEtBQUssSUFBSSxJQUFiLEVBQWtCO0FBQ2RWLFVBQU0sQ0FBQ2lCLEtBQVAsR0FBZSxLQUFmO0FBQXNCOztBQUUxQixNQUFJUCxLQUFLLElBQUksSUFBYixFQUFrQjtBQUNkVCxVQUFNLENBQUNnQixLQUFQLEdBQWUsS0FBZjtBQUFzQjs7QUFFMUIsTUFBSVAsS0FBSyxJQUFJLElBQWIsRUFBa0I7QUFDZFIsVUFBTSxDQUFDZSxLQUFQLEdBQWUsS0FBZjtBQUFzQjs7QUFFMUIsTUFBSVAsS0FBSyxJQUFJLElBQWIsRUFBa0I7QUFDZFAsVUFBTSxDQUFDYyxLQUFQLEdBQWUsS0FBZjtBQUFzQjtBQUM3QixDQWZEOztBQWlCQSxJQUFNRCxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDUCxLQUFELEVBQVU7QUFDbkIsTUFBSUMsS0FBSyxJQUFJLElBQWIsRUFBa0I7QUFDZFgsVUFBTSxDQUFDa0IsS0FBUCxHQUFlLElBQWY7QUFBcUI7O0FBRXpCLE1BQUlQLEtBQUssSUFBSSxJQUFiLEVBQWtCO0FBQ2RWLFVBQU0sQ0FBQ2lCLEtBQVAsR0FBZSxJQUFmO0FBQXFCOztBQUV6QixNQUFJUCxLQUFLLElBQUksSUFBYixFQUFrQjtBQUNkVCxVQUFNLENBQUNnQixLQUFQLEdBQWUsSUFBZjtBQUFxQjs7QUFFekIsTUFBSVAsS0FBSyxJQUFJLElBQWIsRUFBa0I7QUFDZFIsVUFBTSxDQUFDZSxLQUFQLEdBQWUsSUFBZjtBQUFxQjs7QUFFekIsTUFBSVAsS0FBSyxJQUFJLElBQWIsRUFBa0I7QUFDZFAsVUFBTSxDQUFDYyxLQUFQLEdBQWUsSUFBZjtBQUFxQjtBQUM1QixDQWZEIiwiZmlsZSI6Ii4vbWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcInBsYXlcIilbMF07XG5cbmNvbnN0IHRvZ2dsZVBsYXliYWNrID0gKCkgPT4ge1xuICAgIGlmIChwbGF5LmlkID09PSBcInBhdXNlZFwiKXtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0cmFjazEucGxheSgpOyB0cmFjazIucGxheSgpOyB0cmFjazMucGxheSgpOyB0cmFjazQucGxheSgpOyB0cmFjazUucGxheSgpO1xuICAgICAgICAgICAgcGxheS5pbm5lckhUTUwgPSBcIlBhdXNlXCI7IFxuICAgICAgICAgICAgcGxheS5pZCA9IFwicGxheWluZ1wifSwgXG4gICAgICAgICAgICAzMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdHJhY2sxLnBhdXNlKCk7IHRyYWNrMi5wYXVzZSgpOyB0cmFjazMucGF1c2UoKTsgdHJhY2s0LnBhdXNlKCk7IHRyYWNrNS5wYXVzZSgpO1xuICAgICAgICAgICAgcGxheS5pbm5lckhUTUwgPSBcIlBsYXlcIjsgXG4gICAgICAgICAgICBwbGF5LmlkID0gXCJwYXVzZWRcIn0sIFxuICAgICAgICAgICAgMzAwKTtcbiAgICB9XG59XG5cbmNvbnN0IHJlc2V0VHJhY2sgPSAoKSA9PiB7XG4gICAgdHJhY2sxLmxvYWQoKTsgdHJhY2syLmxvYWQoKTsgdHJhY2szLmxvYWQoKTsgdHJhY2s0LmxvYWQoKTsgdHJhY2s1LmxvYWQoKTtcbiAgICBwbGF5LmlubmVySFRNTCA9IFwiUGxheVwiOyBwbGF5LmlkID0gXCJwYXVzZWRcIjtcbn1cblxuY29uc3QgZXZlbnRJbnRlcnByZXRlciA9IChldmVudCkgPT4ge1xuICAgIGRlYnVnZ2VyXG4gICAgY29uc3QgdHJhY2sgPSBldmVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuaWQ7XG4gICAgY29uc3QgYWN0aW9uID0gZXZlbnQuaW5uZXJIVE1MO1xuXG4gICAgaWYgKGFjdGlvbiA9PSBcIlNvbG9cIikge1xuICAgICAgICB0aGlzLnNvbG8odHJhY2spO1xuICAgIH0gXG5cbiAgICBpZiAoYWN0aW9uID09IFwiQWRkXCIpIHtcbiAgICAgICAgdGhpcy5hZGQodHJhY2spO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24gPT0gXCJNdXRlXCIpIHtcbiAgICAgICAgdGhpcy5tdXRlKHRyYWNrKTtcbiAgICB9XG59XG5cbmNvbnN0IHNvbG8gPSAodHJhY2spID0+IHtcblxuICAgIGlmICh0cmFjayA9PSBcIl8xXCIpe1xuICAgICAgICB0cmFjazEubXV0ZWQgPSBmYWxzZTtcbiAgICAgICAgdHJhY2syLm11dGVkID0gdHJ1ZTtcbiAgICAgICAgdHJhY2szLm11dGVkID0gdHJ1ZTtcbiAgICAgICAgdHJhY2s0Lm11dGVkID0gdHJ1ZTtcbiAgICAgICAgdHJhY2s1Lm11dGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHJhY2sgPT0gXCJfMlwiKXtcbiAgICAgICAgdHJhY2sxLm11dGVkID0gdHJ1ZTtcbiAgICAgICAgdHJhY2syLm11dGVkID0gZmFsc2U7XG4gICAgICAgIHRyYWNrMy5tdXRlZCA9IHRydWU7XG4gICAgICAgIHRyYWNrNC5tdXRlZCA9IHRydWU7XG4gICAgICAgIHRyYWNrNS5tdXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRyYWNrID09IFwiXzNcIil7XG4gICAgICAgIHRyYWNrMS5tdXRlZCA9IHRydWU7XG4gICAgICAgIHRyYWNrMi5tdXRlZCA9IHRydWU7XG4gICAgICAgIHRyYWNrMy5tdXRlZCA9IGZhbHNlO1xuICAgICAgICB0cmFjazQubXV0ZWQgPSB0cnVlO1xuICAgICAgICB0cmFjazUubXV0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0cmFjayA9PSBcIl80XCIpe1xuICAgICAgICB0cmFjazEubXV0ZWQgPSB0cnVlO1xuICAgICAgICB0cmFjazIubXV0ZWQgPSB0cnVlO1xuICAgICAgICB0cmFjazMubXV0ZWQgPSB0cnVlO1xuICAgICAgICB0cmFjazQubXV0ZWQgPSBmYWxzZTtcbiAgICAgICAgdHJhY2s1Lm11dGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHJhY2sgPT0gXCJfNVwiKXtcbiAgICAgICAgdHJhY2sxLm11dGVkID0gdHJ1ZTtcbiAgICAgICAgdHJhY2syLm11dGVkID0gdHJ1ZTtcbiAgICAgICAgdHJhY2szLm11dGVkID0gdHJ1ZTtcbiAgICAgICAgdHJhY2s0Lm11dGVkID0gdHJ1ZTtcbiAgICAgICAgdHJhY2s1Lm11dGVkID0gZmFsc2U7XG4gICAgfVxufVxuXG5jb25zdCBhZGQgPSAoZXZlbnQpID0+e1xuICAgIGlmICh0cmFjayA9PSBcIl8xXCIpe1xuICAgICAgICB0cmFjazEubXV0ZWQgPSBmYWxzZTt9XG5cbiAgICBpZiAodHJhY2sgPT0gXCJfMlwiKXtcbiAgICAgICAgdHJhY2syLm11dGVkID0gZmFsc2U7fVxuXG4gICAgaWYgKHRyYWNrID09IFwiXzNcIil7XG4gICAgICAgIHRyYWNrMy5tdXRlZCA9IGZhbHNlO31cblxuICAgIGlmICh0cmFjayA9PSBcIl80XCIpe1xuICAgICAgICB0cmFjazQubXV0ZWQgPSBmYWxzZTt9XG5cbiAgICBpZiAodHJhY2sgPT0gXCJfNVwiKXtcbiAgICAgICAgdHJhY2s1Lm11dGVkID0gZmFsc2U7fVxufVxuXG5jb25zdCBtdXRlID0gKGV2ZW50KSA9PntcbiAgICBpZiAodHJhY2sgPT0gXCJfMVwiKXtcbiAgICAgICAgdHJhY2sxLm11dGVkID0gdHJ1ZTt9XG5cbiAgICBpZiAodHJhY2sgPT0gXCJfMlwiKXtcbiAgICAgICAgdHJhY2syLm11dGVkID0gdHJ1ZTt9XG5cbiAgICBpZiAodHJhY2sgPT0gXCJfM1wiKXtcbiAgICAgICAgdHJhY2szLm11dGVkID0gdHJ1ZTt9XG5cbiAgICBpZiAodHJhY2sgPT0gXCJfNFwiKXtcbiAgICAgICAgdHJhY2s0Lm11dGVkID0gdHJ1ZTt9XG5cbiAgICBpZiAodHJhY2sgPT0gXCJfNVwiKXtcbiAgICAgICAgdHJhY2s1Lm11dGVkID0gdHJ1ZTt9XG59XG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./main.js\n");

/***/ })

/******/ });