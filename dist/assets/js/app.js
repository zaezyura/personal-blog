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
/******/ ({

/***/ "./src/assets/js/mobileNav.js":
/*!************************************!*\
  !*** ./src/assets/js/mobileNav.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const burger = document.getElementById('sidebarToggle');\r\nconst sidebar = document.getElementById('sidebar');\r\nconst page = document.getElementById('page');\r\nconst body = document.body;\r\n\r\nburger.addEventListener('click', event => {\r\n    // document.body.classList.toggle('show-sidebar');\r\n    if( body.classList.contains('show-sidebar') ) {\r\n        closeSidebar();\r\n    } else {\r\n        showSidebar();\r\n    }\r\n})\r\n\r\nfunction showSidebar() {\r\n    let mask = document.createElement('div');\r\n    mask.classList.add('page-mask');\r\n    mask.addEventListener('click', closeSidebar);\r\n    page.appendChild(mask);\r\n\r\n    body.classList.add('show-sidebar');\r\n}\r\n\r\nfunction closeSidebar() {\r\n    body.classList.remove('show-sidebar');\r\n    document.querySelector('.page-mask').remove();\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/mobileNav.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const modalBtn = document.querySelectorAll('[data-modal]');\r\nconst body = document.body;\r\nconst modalClose = document.querySelectorAll('.modal-close');\r\nconst modal = document.querySelectorAll('.modal');\r\n\r\nmodalBtn.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        let $this = event.currentTarget;\r\n        let modalId = $this.getAttribute('data-modal');\r\n        let modal = document.getElementById(modalId);\r\n        let modalContent = modal.querySelector('.modal-content');\r\n\r\n        modalContent.addEventListener('click', event => {\r\n            event.stopPropagation();\r\n        });\r\n\r\n        modal.classList.add('show');\r\n        body.classList.add('no-scroll');\r\n\r\n        setTimeout(() => {\r\n            modalContent.style.transform = 'none';\r\n            modalContent.style.opacity = '1';\r\n        }, 1);\r\n    });\r\n});\r\n\r\nmodalClose.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        let currentModal = event.currentTarget.closest('.modal');\r\n       \r\n        closeModal(currentModal);\r\n    });\r\n});\r\n\r\nmodal.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        let currentModal = event.currentTarget;\r\n       \r\n        closeModal(currentModal);\r\n    });\r\n});\r\n\r\nfunction closeModal(currentModal) {\r\n    let modalContent = currentModal.querySelector('.modal-content');\r\n    modalContent.removeAttribute('style');\r\n\r\n    setTimeout(() => {\r\n        currentModal.classList.remove('show');\r\n        body.classList.remove('no-scroll');\r\n    }, 200);\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/post.js":
/*!*******************************!*\
  !*** ./src/assets/js/post.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const button = document.querySelector('.add-post-send');\r\nlet inputText = document.querySelector('.add-post-textarea');\r\nconst post = document.querySelector('div.post');\r\nconst elem = document.querySelector('div.add-post');\r\n\r\nconst fuck = `<div class=\"post\">\r\n<div class=\"post-content\">\r\n    <p class=\"post-description\">\r\n        ${inputText}\r\n        </p>\r\n</div>\r\n<div class=\"post-footer\">\r\n<ul class=\"post-data\">\r\n<li class=\"post-data-item\">\r\n<time datetime=\"2020-06-21 19:20\">21.06.2020</t>\r\n        </li>\r\n        </ul>\r\n</div>\r\n</div> <!-- /.post -->`;\r\n\r\n// inputText.addEventListener('input', event => {\r\n//     console.log(inputText.value);\r\n// })\r\n\r\n\r\n// button.addEventListener('click', event => {\r\n//     // console.log(inputText);\r\n//     // elem.insertAdjacentHTML('afterend', fuck );\r\n// })\n\n//# sourceURL=webpack:///./src/assets/js/post.js?");

/***/ }),

/***/ "./src/assets/js/search.js":
/*!*********************************!*\
  !*** ./src/assets/js/search.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const input = document.querySelector('input.search-input');\r\n// const text = input.value.toLowerCase();\r\n// const title = document.querySelectorAll('h2 a');\r\n\r\n// // title.forEach(element => {\r\n// //     const titleText = element.innerHTML;\r\n// //     console.log(titleText);\r\n// // })\r\n// // console.log(title);\r\n\r\n// for (let elem of title) {\r\n//     console.log(elem.innerHTML);\r\n// }\r\n\r\n// ***********Create new article***********\r\n// const post = document.querySelector('article');\r\n\r\n// const postdoc = post.outerHTML;\r\n\r\n// console.log(postdoc);\r\n\r\n// // let textNode = document.createTextNode(post);\r\n// // console.log(textNode);\r\n// const inner = '<a href=\"index.html\">zaebalo</a>';\r\n// const fuck = `<div class=\"post\">\r\n// <div class=\"post-content\">\r\n// <p class=\"post-description\">\r\n//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi adipisci at incidunt necessitatibus. Delectus voluptates facilis voluptate quam? Nihil eius nisi, eligendi commodi sapiente asperiores odio quis iure dolorem omnis.\r\n//     </p>\r\n//     </div>\r\n//     <div class=\"post-footer\">\r\n//     <ul class=\"post-data\">\r\n//     <li class=\"post-data-item\">\r\n//     <time datetime=\"2020-06-21 19:20\">21.06.2020</t>\r\n//     </li>\r\n//     </ul>\r\n//     </div>\r\n//     </div> <!-- /.post -->`;\r\n//     article.insertAdjacentHTML('afterend', fuck);\r\n    \r\n\r\n// ****** Search text ******\r\n// const search = document.querySelector('.search-button');\r\n// const postText = document.querySelectorAll('article');\r\n\r\n// var input = document.querySelector('.search-input').value;\r\n\r\n// // input.addEventListener('focus', event =>{\r\n// //     input = document.querySelector('.search-input').value;\r\n// // })\r\n\r\n\r\n// search.addEventListener('click', event => {\r\n//     window.location.href = 'search.html';\r\n    \r\n//     for(let text of postText) {\r\n//         if (text.innerText.toLowerCase().includes(input)){\r\n//             const textFind = text.outerHTML;\r\n//             console.log(text);\r\n//             article.\r\n//             insertAdjacentHTML('afterend', textFind);\r\n//         } else {\r\n//             console.log('not found');\r\n//         }\r\n//     }\r\n    \r\n// })\r\n\r\n// console.log(postText);\n\n//# sourceURL=webpack:///./src/assets/js/search.js?");

/***/ }),

/***/ "./src/assets/js/textarea.js":
/*!***********************************!*\
  !*** ./src/assets/js/textarea.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const textArea = document.querySelectorAll('[data-autoresize]');\r\n\r\ntextArea.forEach(item => {\r\n    let textAreaHeight = item.offsetHeight;\r\n\r\n    item.addEventListener('input', event => {\r\n        let $this = event.target;\r\n\r\n        $this.style.height = textAreaHeight + 'px';\r\n        $this.style.height = $this.scrollHeight + 'px';\r\n    });\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/textarea.js?");

/***/ }),

/***/ "./src/assets/js/truncate.js":
/*!***********************************!*\
  !*** ./src/assets/js/truncate.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function truncate(str, maxlength) {\r\n  return (str.length > maxlength) ? \r\n    str.slice(0, maxlength - 1) + \"…\" : str;\r\n}\r\n\r\n\r\nlet title = document.querySelectorAll('h4.related-list-title a');\r\n\r\ntitle.forEach(element => {\r\n   let titleText = element.innerHTML; \r\n   \r\n   titleText = truncate(titleText, 60);\r\n   element.innerHTML = titleText;\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/truncate.js?");

/***/ }),

/***/ 0:
/*!*****************************************************************************************************************************************************************************!*\
  !*** multi ./src/assets/js/mobileNav.js ./src/assets/js/modal.js ./src/assets/js/post.js ./src/assets/js/search.js ./src/assets/js/textarea.js ./src/assets/js/truncate.js ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! E:\\personal-blog\\src\\assets\\js\\mobileNav.js */\"./src/assets/js/mobileNav.js\");\n__webpack_require__(/*! E:\\personal-blog\\src\\assets\\js\\modal.js */\"./src/assets/js/modal.js\");\n__webpack_require__(/*! E:\\personal-blog\\src\\assets\\js\\post.js */\"./src/assets/js/post.js\");\n__webpack_require__(/*! E:\\personal-blog\\src\\assets\\js\\search.js */\"./src/assets/js/search.js\");\n__webpack_require__(/*! E:\\personal-blog\\src\\assets\\js\\textarea.js */\"./src/assets/js/textarea.js\");\nmodule.exports = __webpack_require__(/*! E:\\personal-blog\\src\\assets\\js\\truncate.js */\"./src/assets/js/truncate.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/mobileNav.js_./src/assets/js/modal.js_./src/assets/js/post.js_./src/assets/js/search.js_./src/assets/js/textarea.js_./src/assets/js/truncate.js?");

/***/ })

/******/ });