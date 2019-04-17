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

eval("var play = document.getElementsByName(\"play\")[0];\n\nvar togglePlayback = function togglePlayback() {\n  if (play.id === \"paused\") {\n    setTimeout(function () {\n      track1.play();\n      track2.play();\n      track3.play();\n      track4.play();\n      track5.play();\n      play.innerHTML = \"Pause\";\n      play.id = \"playing\";\n    }, 300);\n  } else {\n    setTimeout(function () {\n      track1.pause();\n      track2.pause();\n      track3.pause();\n      track4.pause();\n      track5.pause();\n      play.innerHTML = \"Play\";\n      play.id = \"paused\";\n    }, 300);\n  }\n};\n\nvar resetTrack = function resetTrack() {\n  track1.load();\n  track2.load();\n  track3.load();\n  track4.load();\n  track5.load();\n  play.innerHTML = \"Play\";\n  play.id = \"paused\";\n};\n\nvar eventInterpreter = function eventInterpreter(event) {\n  debugger;\n  var track = event.parentElement.parentElement.firstElementChild.id;\n  var action = event.innerHTML;\n\n  if (action == \"Solo\") {\n    solo(track);\n  }\n\n  if (action == \"Add\") {\n    add(track);\n  }\n\n  if (action == \"Mute\") {\n    mute(track);\n  }\n};\n\nvar solo = function solo(track) {\n  if (track == \"_1\") {\n    track1.muted = false;\n    track2.muted = true;\n    track3.muted = true;\n    track4.muted = true;\n    track5.muted = true;\n  }\n\n  if (track == \"_2\") {\n    track1.muted = true;\n    track2.muted = false;\n    track3.muted = true;\n    track4.muted = true;\n    track5.muted = true;\n  }\n\n  if (track == \"_3\") {\n    track1.muted = true;\n    track2.muted = true;\n    track3.muted = false;\n    track4.muted = true;\n    track5.muted = true;\n  }\n\n  if (track == \"_4\") {\n    track1.muted = true;\n    track2.muted = true;\n    track3.muted = true;\n    track4.muted = false;\n    track5.muted = true;\n  }\n\n  if (track == \"_5\") {\n    track1.muted = true;\n    track2.muted = true;\n    track3.muted = true;\n    track4.muted = true;\n    track5.muted = false;\n  }\n};\n\nvar add = function add(event) {\n  if (track == \"_1\") {\n    track1.muted = false;\n  }\n\n  if (track == \"_2\") {\n    track2.muted = false;\n  }\n\n  if (track == \"_3\") {\n    track3.muted = false;\n  }\n\n  if (track == \"_4\") {\n    track4.muted = false;\n  }\n\n  if (track == \"_5\") {\n    track5.muted = false;\n  }\n};\n\nvar mute = function mute(event) {\n  if (track == \"_1\") {\n    track1.muted = true;\n  }\n\n  if (track == \"_2\") {\n    track2.muted = true;\n  }\n\n  if (track == \"_3\") {\n    track3.muted = true;\n  }\n\n  if (track == \"_4\") {\n    track4.muted = true;\n  }\n\n  if (track == \"_5\") {\n    track5.muted = true;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLmpzPzFkNTAiXSwibmFtZXMiOlsicGxheSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJ0b2dnbGVQbGF5YmFjayIsImlkIiwic2V0VGltZW91dCIsInRyYWNrMSIsInRyYWNrMiIsInRyYWNrMyIsInRyYWNrNCIsInRyYWNrNSIsImlubmVySFRNTCIsInBhdXNlIiwicmVzZXRUcmFjayIsImxvYWQiLCJldmVudEludGVycHJldGVyIiwiZXZlbnQiLCJ0cmFjayIsInBhcmVudEVsZW1lbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImFjdGlvbiIsInNvbG8iLCJhZGQiLCJtdXRlIiwibXV0ZWQiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxpQkFBVCxDQUEyQixNQUEzQixFQUFtQyxDQUFuQyxDQUFiOztBQUVBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QixNQUFJSCxJQUFJLENBQUNJLEVBQUwsS0FBWSxRQUFoQixFQUF5QjtBQUNyQkMsY0FBVSxDQUFDLFlBQU07QUFDYkMsWUFBTSxDQUFDTixJQUFQO0FBQWVPLFlBQU0sQ0FBQ1AsSUFBUDtBQUFlUSxZQUFNLENBQUNSLElBQVA7QUFBZVMsWUFBTSxDQUFDVCxJQUFQO0FBQWVVLFlBQU0sQ0FBQ1YsSUFBUDtBQUM1REEsVUFBSSxDQUFDVyxTQUFMLEdBQWlCLE9BQWpCO0FBQ0FYLFVBQUksQ0FBQ0ksRUFBTCxHQUFVLFNBQVY7QUFBb0IsS0FIZCxFQUlOLEdBSk0sQ0FBVjtBQUtILEdBTkQsTUFNTztBQUNIQyxjQUFVLENBQUMsWUFBTTtBQUNiQyxZQUFNLENBQUNNLEtBQVA7QUFBZ0JMLFlBQU0sQ0FBQ0ssS0FBUDtBQUFnQkosWUFBTSxDQUFDSSxLQUFQO0FBQWdCSCxZQUFNLENBQUNHLEtBQVA7QUFBZ0JGLFlBQU0sQ0FBQ0UsS0FBUDtBQUNoRVosVUFBSSxDQUFDVyxTQUFMLEdBQWlCLE1BQWpCO0FBQ0FYLFVBQUksQ0FBQ0ksRUFBTCxHQUFVLFFBQVY7QUFBbUIsS0FIYixFQUlOLEdBSk0sQ0FBVjtBQUtIO0FBQ0osQ0FkRDs7QUFnQkEsSUFBTVMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQlAsUUFBTSxDQUFDUSxJQUFQO0FBQWVQLFFBQU0sQ0FBQ08sSUFBUDtBQUFlTixRQUFNLENBQUNNLElBQVA7QUFBZUwsUUFBTSxDQUFDSyxJQUFQO0FBQWVKLFFBQU0sQ0FBQ0ksSUFBUDtBQUM1RGQsTUFBSSxDQUFDVyxTQUFMLEdBQWlCLE1BQWpCO0FBQXlCWCxNQUFJLENBQUNJLEVBQUwsR0FBVSxRQUFWO0FBQzVCLENBSEQ7O0FBS0EsSUFBTVcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBQVc7QUFDaEM7QUFDQSxNQUFNQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsYUFBTixDQUFvQkEsYUFBcEIsQ0FBa0NDLGlCQUFsQyxDQUFvRGYsRUFBbEU7QUFDQSxNQUFNZ0IsTUFBTSxHQUFHSixLQUFLLENBQUNMLFNBQXJCOztBQUVBLE1BQUlTLE1BQU0sSUFBSSxNQUFkLEVBQXNCO0FBQ2xCQyxRQUFJLENBQUNKLEtBQUQsQ0FBSjtBQUNIOztBQUVELE1BQUlHLE1BQU0sSUFBSSxLQUFkLEVBQXFCO0FBQ2pCRSxPQUFHLENBQUNMLEtBQUQsQ0FBSDtBQUNIOztBQUVELE1BQUlHLE1BQU0sSUFBSSxNQUFkLEVBQXNCO0FBQ2xCRyxRQUFJLENBQUNOLEtBQUQsQ0FBSjtBQUNIO0FBQ0osQ0FoQkQ7O0FBa0JBLElBQU1JLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNKLEtBQUQsRUFBVztBQUVwQixNQUFJQSxLQUFLLElBQUksSUFBYixFQUFrQjtBQUNkWCxVQUFNLENBQUNrQixLQUFQLEdBQWUsS0FBZjtBQUNBakIsVUFBTSxDQUFDaUIsS0FBUCxHQUFlLElBQWY7QUFDQWhCLFVBQU0sQ0FBQ2dCLEtBQVAsR0FBZSxJQUFmO0FBQ0FmLFVBQU0sQ0FBQ2UsS0FBUCxHQUFlLElBQWY7QUFDQWQsVUFBTSxDQUFDYyxLQUFQLEdBQWUsSUFBZjtBQUNIOztBQUVELE1BQUlQLEtBQUssSUFBSSxJQUFiLEVBQWtCO0FBQ2RYLFVBQU0sQ0FBQ2tCLEtBQVAsR0FBZSxJQUFmO0FBQ0FqQixVQUFNLENBQUNpQixLQUFQLEdBQWUsS0FBZjtBQUNBaEIsVUFBTSxDQUFDZ0IsS0FBUCxHQUFlLElBQWY7QUFDQWYsVUFBTSxDQUFDZSxLQUFQLEdBQWUsSUFBZjtBQUNBZCxVQUFNLENBQUNjLEtBQVAsR0FBZSxJQUFmO0FBQ0g7O0FBRUQsTUFBSVAsS0FBSyxJQUFJLElBQWIsRUFBa0I7QUFDZFgsVUFBTSxDQUFDa0IsS0FBUCxHQUFlLElBQWY7QUFDQWpCLFVBQU0sQ0FBQ2lCLEtBQVAsR0FBZSxJQUFmO0FBQ0FoQixVQUFNLENBQUNnQixLQUFQLEdBQWUsS0FBZjtBQUNBZixVQUFNLENBQUNlLEtBQVAsR0FBZSxJQUFmO0FBQ0FkLFVBQU0sQ0FBQ2MsS0FBUCxHQUFlLElBQWY7QUFDSDs7QUFFRCxNQUFJUCxLQUFLLElBQUksSUFBYixFQUFrQjtBQUNkWCxVQUFNLENBQUNrQixLQUFQLEdBQWUsSUFBZjtBQUNBakIsVUFBTSxDQUFDaUIsS0FBUCxHQUFlLElBQWY7QUFDQWhCLFVBQU0sQ0FBQ2dCLEtBQVAsR0FBZSxJQUFmO0FBQ0FmLFVBQU0sQ0FBQ2UsS0FBUCxHQUFlLEtBQWY7QUFDQWQsVUFBTSxDQUFDYyxLQUFQLEdBQWUsSUFBZjtBQUNIOztBQUVELE1BQUlQLEtBQUssSUFBSSxJQUFiLEVBQWtCO0FBQ2RYLFVBQU0sQ0FBQ2tCLEtBQVAsR0FBZSxJQUFmO0FBQ0FqQixVQUFNLENBQUNpQixLQUFQLEdBQWUsSUFBZjtBQUNBaEIsVUFBTSxDQUFDZ0IsS0FBUCxHQUFlLElBQWY7QUFDQWYsVUFBTSxDQUFDZSxLQUFQLEdBQWUsSUFBZjtBQUNBZCxVQUFNLENBQUNjLEtBQVAsR0FBZSxLQUFmO0FBQ0g7QUFDSixDQXpDRDs7QUEyQ0EsSUFBTUYsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ04sS0FBRCxFQUFVO0FBQ2xCLE1BQUlDLEtBQUssSUFBSSxJQUFiLEVBQWtCO0FBQ2RYLFVBQU0sQ0FBQ2tCLEtBQVAsR0FBZSxLQUFmO0FBQXNCOztBQUUxQixNQUFJUCxLQUFLLElBQUksSUFBYixFQUFrQjtBQUNkVixVQUFNLENBQUNpQixLQUFQLEdBQWUsS0FBZjtBQUFzQjs7QUFFMUIsTUFBSVAsS0FBSyxJQUFJLElBQWIsRUFBa0I7QUFDZFQsVUFBTSxDQUFDZ0IsS0FBUCxHQUFlLEtBQWY7QUFBc0I7O0FBRTFCLE1BQUlQLEtBQUssSUFBSSxJQUFiLEVBQWtCO0FBQ2RSLFVBQU0sQ0FBQ2UsS0FBUCxHQUFlLEtBQWY7QUFBc0I7O0FBRTFCLE1BQUlQLEtBQUssSUFBSSxJQUFiLEVBQWtCO0FBQ2RQLFVBQU0sQ0FBQ2MsS0FBUCxHQUFlLEtBQWY7QUFBc0I7QUFDN0IsQ0FmRDs7QUFpQkEsSUFBTUQsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ1AsS0FBRCxFQUFVO0FBQ25CLE1BQUlDLEtBQUssSUFBSSxJQUFiLEVBQWtCO0FBQ2RYLFVBQU0sQ0FBQ2tCLEtBQVAsR0FBZSxJQUFmO0FBQXFCOztBQUV6QixNQUFJUCxLQUFLLElBQUksSUFBYixFQUFrQjtBQUNkVixVQUFNLENBQUNpQixLQUFQLEdBQWUsSUFBZjtBQUFxQjs7QUFFekIsTUFBSVAsS0FBSyxJQUFJLElBQWIsRUFBa0I7QUFDZFQsVUFBTSxDQUFDZ0IsS0FBUCxHQUFlLElBQWY7QUFBcUI7O0FBRXpCLE1BQUlQLEtBQUssSUFBSSxJQUFiLEVBQWtCO0FBQ2RSLFVBQU0sQ0FBQ2UsS0FBUCxHQUFlLElBQWY7QUFBcUI7O0FBRXpCLE1BQUlQLEtBQUssSUFBSSxJQUFiLEVBQWtCO0FBQ2RQLFVBQU0sQ0FBQ2MsS0FBUCxHQUFlLElBQWY7QUFBcUI7QUFDNUIsQ0FmRCIsImZpbGUiOiIuL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJwbGF5XCIpWzBdO1xuXG5jb25zdCB0b2dnbGVQbGF5YmFjayA9ICgpID0+IHtcbiAgICBpZiAocGxheS5pZCA9PT0gXCJwYXVzZWRcIil7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdHJhY2sxLnBsYXkoKTsgdHJhY2syLnBsYXkoKTsgdHJhY2szLnBsYXkoKTsgdHJhY2s0LnBsYXkoKTsgdHJhY2s1LnBsYXkoKTtcbiAgICAgICAgICAgIHBsYXkuaW5uZXJIVE1MID0gXCJQYXVzZVwiOyBcbiAgICAgICAgICAgIHBsYXkuaWQgPSBcInBsYXlpbmdcIn0sIFxuICAgICAgICAgICAgMzAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRyYWNrMS5wYXVzZSgpOyB0cmFjazIucGF1c2UoKTsgdHJhY2szLnBhdXNlKCk7IHRyYWNrNC5wYXVzZSgpOyB0cmFjazUucGF1c2UoKTtcbiAgICAgICAgICAgIHBsYXkuaW5uZXJIVE1MID0gXCJQbGF5XCI7IFxuICAgICAgICAgICAgcGxheS5pZCA9IFwicGF1c2VkXCJ9LCBcbiAgICAgICAgICAgIDMwMCk7XG4gICAgfVxufVxuXG5jb25zdCByZXNldFRyYWNrID0gKCkgPT4ge1xuICAgIHRyYWNrMS5sb2FkKCk7IHRyYWNrMi5sb2FkKCk7IHRyYWNrMy5sb2FkKCk7IHRyYWNrNC5sb2FkKCk7IHRyYWNrNS5sb2FkKCk7XG4gICAgcGxheS5pbm5lckhUTUwgPSBcIlBsYXlcIjsgcGxheS5pZCA9IFwicGF1c2VkXCI7XG59XG5cbmNvbnN0IGV2ZW50SW50ZXJwcmV0ZXIgPSAoZXZlbnQpID0+IHtcbiAgICBkZWJ1Z2dlclxuICAgIGNvbnN0IHRyYWNrID0gZXZlbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmlkO1xuICAgIGNvbnN0IGFjdGlvbiA9IGV2ZW50LmlubmVySFRNTDtcblxuICAgIGlmIChhY3Rpb24gPT0gXCJTb2xvXCIpIHtcbiAgICAgICAgc29sbyh0cmFjayk7XG4gICAgfSBcblxuICAgIGlmIChhY3Rpb24gPT0gXCJBZGRcIikge1xuICAgICAgICBhZGQodHJhY2spO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24gPT0gXCJNdXRlXCIpIHtcbiAgICAgICAgbXV0ZSh0cmFjayk7XG4gICAgfVxufVxuXG5jb25zdCBzb2xvID0gKHRyYWNrKSA9PiB7XG5cbiAgICBpZiAodHJhY2sgPT0gXCJfMVwiKXtcbiAgICAgICAgdHJhY2sxLm11dGVkID0gZmFsc2U7XG4gICAgICAgIHRyYWNrMi5tdXRlZCA9IHRydWU7XG4gICAgICAgIHRyYWNrMy5tdXRlZCA9IHRydWU7XG4gICAgICAgIHRyYWNrNC5tdXRlZCA9IHRydWU7XG4gICAgICAgIHRyYWNrNS5tdXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRyYWNrID09IFwiXzJcIil7XG4gICAgICAgIHRyYWNrMS5tdXRlZCA9IHRydWU7XG4gICAgICAgIHRyYWNrMi5tdXRlZCA9IGZhbHNlO1xuICAgICAgICB0cmFjazMubXV0ZWQgPSB0cnVlO1xuICAgICAgICB0cmFjazQubXV0ZWQgPSB0cnVlO1xuICAgICAgICB0cmFjazUubXV0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0cmFjayA9PSBcIl8zXCIpe1xuICAgICAgICB0cmFjazEubXV0ZWQgPSB0cnVlO1xuICAgICAgICB0cmFjazIubXV0ZWQgPSB0cnVlO1xuICAgICAgICB0cmFjazMubXV0ZWQgPSBmYWxzZTtcbiAgICAgICAgdHJhY2s0Lm11dGVkID0gdHJ1ZTtcbiAgICAgICAgdHJhY2s1Lm11dGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHJhY2sgPT0gXCJfNFwiKXtcbiAgICAgICAgdHJhY2sxLm11dGVkID0gdHJ1ZTtcbiAgICAgICAgdHJhY2syLm11dGVkID0gdHJ1ZTtcbiAgICAgICAgdHJhY2szLm11dGVkID0gdHJ1ZTtcbiAgICAgICAgdHJhY2s0Lm11dGVkID0gZmFsc2U7XG4gICAgICAgIHRyYWNrNS5tdXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRyYWNrID09IFwiXzVcIil7XG4gICAgICAgIHRyYWNrMS5tdXRlZCA9IHRydWU7XG4gICAgICAgIHRyYWNrMi5tdXRlZCA9IHRydWU7XG4gICAgICAgIHRyYWNrMy5tdXRlZCA9IHRydWU7XG4gICAgICAgIHRyYWNrNC5tdXRlZCA9IHRydWU7XG4gICAgICAgIHRyYWNrNS5tdXRlZCA9IGZhbHNlO1xuICAgIH1cbn1cblxuY29uc3QgYWRkID0gKGV2ZW50KSA9PntcbiAgICBpZiAodHJhY2sgPT0gXCJfMVwiKXtcbiAgICAgICAgdHJhY2sxLm11dGVkID0gZmFsc2U7fVxuXG4gICAgaWYgKHRyYWNrID09IFwiXzJcIil7XG4gICAgICAgIHRyYWNrMi5tdXRlZCA9IGZhbHNlO31cblxuICAgIGlmICh0cmFjayA9PSBcIl8zXCIpe1xuICAgICAgICB0cmFjazMubXV0ZWQgPSBmYWxzZTt9XG5cbiAgICBpZiAodHJhY2sgPT0gXCJfNFwiKXtcbiAgICAgICAgdHJhY2s0Lm11dGVkID0gZmFsc2U7fVxuXG4gICAgaWYgKHRyYWNrID09IFwiXzVcIil7XG4gICAgICAgIHRyYWNrNS5tdXRlZCA9IGZhbHNlO31cbn1cblxuY29uc3QgbXV0ZSA9IChldmVudCkgPT57XG4gICAgaWYgKHRyYWNrID09IFwiXzFcIil7XG4gICAgICAgIHRyYWNrMS5tdXRlZCA9IHRydWU7fVxuXG4gICAgaWYgKHRyYWNrID09IFwiXzJcIil7XG4gICAgICAgIHRyYWNrMi5tdXRlZCA9IHRydWU7fVxuXG4gICAgaWYgKHRyYWNrID09IFwiXzNcIil7XG4gICAgICAgIHRyYWNrMy5tdXRlZCA9IHRydWU7fVxuXG4gICAgaWYgKHRyYWNrID09IFwiXzRcIil7XG4gICAgICAgIHRyYWNrNC5tdXRlZCA9IHRydWU7fVxuXG4gICAgaWYgKHRyYWNrID09IFwiXzVcIil7XG4gICAgICAgIHRyYWNrNS5tdXRlZCA9IHRydWU7fVxufVxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./main.js\n");

/***/ })

/******/ });