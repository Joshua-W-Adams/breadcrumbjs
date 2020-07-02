var breadcrumbjs =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * npm Entry File
 * (c) 2020 Joshua Adams
 */

/**
 * index.js is the default 'entry file' for npm.
 * This means that any require('package name') or import 'package name'
 * statements will refer to this file.
 */
var pkg = __webpack_require__(1); // export a file with the same name as the package by default


module.exports = __webpack_require__(2)("./".concat(pkg.name, ".js"));

/***/ }),
/* 1 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"breadcrumbjs\",\"version\":\"1.0.4\",\"description\":\"JavaScript component for creating breadcrumb menus\",\"main\":\"index.js\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/Joshua-W-Adams/breadcrumb.js.git\"},\"author\":\"Joshua Adams\",\"license\":\"ISC\",\"bugs\":{\"url\":\"https://github.com/Joshua-W-Adams/breadcrumb.js/issues\"},\"homepage\":\"https://github.com/Joshua-W-Adams/breadcrumb.js#readme\",\"devDependencies\":{\"@babel/core\":\"^7.8.4\",\"@babel/preset-env\":\"^7.8.4\",\"babel-loader\":\"^8.0.6\",\"eslint-config-airbnb-base\":\"^14.0.0\",\"eslint-plugin-import\":\"^2.20.0\",\"express\":\"^4.17.1\",\"gulp\":\"^4.0.2\",\"gulp-concat\":\"^2.6.1\",\"gulp-eslint\":\"^6.0.0\",\"gulp-minify-css\":\"^1.2.4\",\"gulp-rename\":\"^2.0.0\",\"gulp-sass\":\"^4.0.2\",\"gulp-stylelint\":\"^13.0.0\",\"stylelint\":\"^13.0.0\",\"stylelint-config-recommended\":\"^3.0.0\",\"webpack-stream\":\"^5.2.1\"},\"dependencies\":{\"gulp-nodemon\":\"^2.5.0\"}}");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./breadcrumbjs.js": 3
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 2;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Breadcrumb.js
 * JavaScript component for creating breadcrumb menus
 * (c) 2020 Joshua Adams
 */

/* ============================== Import Modules ============================ */
// N/A

/* ================================ Variables =============================== */
var onHoverRow = {
  style: {}
};
/* ============================= Private Methods ============================ */

function _addElement(parent, type) {
  var element = document.createElement(type);
  parent.appendChild(element);
  return element;
}

function _onHoverDefault(li) {
  if (onHoverRow !== li) {
    // clear current styling
    onHoverRow.style.textDecoration = '';
    onHoverRow.style.color = '#007bff'; // set new row

    onHoverRow = li; // set default styling

    li.style.textDecoration = 'underline';
    li.style.color = '#333';
  }
}

function _onClickDefault() {}

function _onDblClickDefault() {}

function _containerRenderer() {
  var container = {};
  container.className = 'breadcrumb-menu';
  container.style = {
    // generic styling for all modules
    'font-size': '16px',
    'font-family': 'roboto',
    'margin': '0px',
    padding: '10px',
    // specific module styling
    display: 'flex',
    'flex-wrap': 'wrap',
    'list-style': 'none'
  };
  return container;
}

function _liRenderer() {
  var li = {};
  li.className = 'breadcrumb-menu__li';
  li.style = {
    display: 'inline-block',
    color: '#007bff'
  };
  return li;
}

function _separatorRenderer() {
  var sep = {};
  sep.className = 'breadcrumb-menu__separator';
  sep.style = {
    display: 'inline-block',
    padding: '0 0.5rem 0 0.5rem',
    color: '#6c757d'
  };
  return sep;
}

function _applyRender(element, properties) {
  var arr = Object.keys(properties);

  for (var i = 0; i < arr.length; i++) {
    var prop = arr[i];

    if (_typeof(properties[prop]) === 'object' && properties[prop] !== null) {
      Object.assign(element[prop], properties[prop]);
    } else {
      element[prop] = properties[prop];
    }
  }

  return element;
}

function _addSeparator(ol) {
  var separator = _addElement(ol, 'span');

  separator.innerHTML = '/';

  var render = _separatorRenderer();

  _applyRender(separator, render);

  return separator;
}

function _addBreadcrumbs(ol, options) {
  var arr = options.breadcrumbs.items; // loop through all breadcrumb menu items and add to menu

  var _loop = function _loop(i) {
    var breadcrumb = arr[i]; // Get user configuration for each item

    var cnf = {
      onClick: breadcrumb.onClick || options.breadcrumbs.onClick || _onClickDefault,
      onDblClick: breadcrumb.onDblClick || options.breadcrumbs.onDblClick || _onDblClickDefault,
      onHover: breadcrumb.onHover || options.breadcrumbs.onHover || _onHoverDefault,
      renderer: breadcrumb.renderer || options.breadcrumbs.renderer || _liRenderer
    }; // add breadcrumb elements

    var li = _addElement(ol, 'li');

    var a = _addElement(li, 'a'); // Add value


    a.innerHTML = arr[i].item; // calculate element css styling with supplied or default renderer

    var render = cnf.renderer(breadcrumb); // configure element

    _applyRender(li, render); // add separator


    if (i < arr.length - 1) {
      _addSeparator(ol);
    } // apply menu item functionality


    li.onclick = function onclick() {
      return cnf.onClick(li, arr, i);
    };

    li.ondblclick = function ondblclick() {
      return cnf.onDblClick(li, arr, i);
    };

    li.onmouseover = function onmouseover() {
      return cnf.onHover(li, arr, i);
    };

    li.onmouseout = function onmouseout() {
      return cnf.onHover(li, arr, i);
    };
  };

  for (var i = 0; i < arr.length; i++) {
    _loop(i);
  }
}

function _addContainer(frag, options) {
  var cnf = {
    renderer: options.render || _containerRenderer
  }; // add basic breacrumb structure

  var nav = _addElement(frag, 'nav');

  var ol = _addElement(nav, 'ol'); // calculate element css styling with supplied or default renderer


  var render = cnf.renderer(ol); // configure element

  _applyRender(ol, render);

  return ol;
}
/* ============================== Public Methods ============================ */

/**
 * init - constructor for generating  breadcrumb menu. Accepts the following
 * configuration options.
   const options = {
     'div': 'container',
     'renderer': null,
     'breadcrumbs': {
       'renderer': null,
       'onClick': null,
       'onDblClick': null,
       'onHover': null,
       'items': [{
         'item': 'Photos',
         'renderer': null,
         'onClick': null,
         'onDblClick': null,
         'onHover': null
       }]
     }
   }
 */


function init(options) {
  // Create DOM fragment
  var frag = document.createDocumentFragment(); // Add container elements

  var ol = _addContainer(frag, options); // Add breadcrumb menu items


  _addBreadcrumbs(ol, options); // Append fragment to DOM


  var div = document.getElementById(options.div);
  div.appendChild(frag);
}
/* =========================== Export Public APIs =========================== */


module.exports = {
  init: init
};

/***/ })
/******/ ]);
//# sourceMappingURL=breadcrumbjs.js.map