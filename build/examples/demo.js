webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	
	// use jsx to render html, do not modify simple.html
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	__webpack_require__(2);
	__webpack_require__(6);
	
	var React = __webpack_require__(8);
	var Dropdown = __webpack_require__(9);
	var packageJson = __webpack_require__(32);
	
	__webpack_require__(33);
	var Menu = __webpack_require__(35);
	var MenuItem = Menu.Item;
	
	function onVisibleChange(visible) {
	  console.log('dropdown', visible);
	}
	
	var Demo = (function (_React$Component) {
	  function Demo() {
	    _classCallCheck(this, Demo);
	
	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(Demo, _React$Component);
	
	  _createClass(Demo, [{
	    key: 'render',
	    value: function render() {
	      var MyMenu = React.createElement(
	        Menu,
	        { prefixCls: 'rc-dropdown-menu' },
	        React.createElement(
	          MenuItem,
	          { key: '1' },
	          'select all'
	        ),
	        React.createElement(
	          MenuItem,
	          { key: '2' },
	          'select one'
	        )
	      );
	
	      var demo = React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'h1',
	          null,
	          packageJson.name,
	          '@',
	          packageJson.version
	        ),
	        React.createElement(
	          'div',
	          { style: { margin: 100 } },
	          React.createElement(
	            Dropdown,
	            { placement: 'bottom', trigger: '[\'click\']', onVisibleChange: onVisibleChange,
	              transitionName: 'zoom-down',
	              overlay: MyMenu },
	            React.createElement(
	              'button',
	              { type: 'button' },
	              'dropdown'
	            )
	          )
	        )
	      );
	
	      return demo;
	    }
	  }]);
	
	  return Demo;
	})(React.Component);
	
	React.render(React.createElement(Demo, null), document.getElementById('__react-content'));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/hua/my/react/c/dropdown/node_modules/rc-tools/node_modules/css-loader/index.js!/Users/hua/my/react/c/dropdown/assets/index.css", function() {
			var newContent = require("!!/Users/hua/my/react/c/dropdown/node_modules/rc-tools/node_modules/css-loader/index.js!/Users/hua/my/react/c/dropdown/assets/index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	exports.push([module.id, ".rc-dropdown {\n  display: block;\n  position: absolute;\n  left: -9999px;\n  top: -9999px;\n  z-index: 1070;\n  /*\n  &-arrow {\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-color: transparent;\n    border-style: solid;\n  }\n\n  &-placement-right > &-arrow {\n    top: 50%;\n    left: 0;\n    margin-top: -5px;\n    //border-width: 5px 5px 5px 0;\n    //border-right-color: #000000;\n  }\n\n  &-placement-bottom > &-arrow {\n    top: 0;\n    left: 50%;\n    margin-left: -5px;\n    //border-width: 0 5px 5px;\n    //border-bottom-color: #000000;\n  }\n\n  &-placement-top > &-arrow {\n    bottom: 0;\n    left: 50%;\n    margin-left: -5px;\n    //border-width: 5px 5px 0;\n    //border-top-color: #000000;\n  }\n\n  &-placement-left > &-arrow {\n    top: 50%;\n    right: 0;\n    margin-top: -5px;\n    //border-width: 5px 0 5px 5px;\n    //border-left-color: #000000;\n  }\n  */\n}\n.rc-dropdown-inner {\n  background-color: #ffffff;\n  border-radius: 3px;\n  box-shadow: 0 0 4px #d9d9d9;\n  background-clip: padding-box;\n  border: 1px solid #d9d9d9;\n}\n.rc-dropdown-menu {\n  border: none;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.rc-dropdown-menu-item {\n  padding: 7px 16px;\n}\n.rc-dropdown-menu-item-active {\n  background-color: rgba(45, 183, 245, 0.1);\n}\n.rc-dropdown-placement-left {\n  margin-left: -3px;\n  padding: 0 5px;\n}\n.rc-dropdown-placement-top {\n  margin-top: -3px;\n  padding: 5px 0;\n}\n.rc-dropdown-placement-bottom {\n  margin-top: 3px;\n  padding: 5px 0;\n}\n.rc-dropdown-placement-right {\n  margin-left: 3px;\n  padding: 0 5px;\n}\n", ""]);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isIE9 = memoize(function() {
			return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isIE9();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/hua/my/react/c/dropdown/node_modules/rc-tools/node_modules/css-loader/index.js!/Users/hua/my/react/c/dropdown/examples/anim.css", function() {
			var newContent = require("!!/Users/hua/my/react/c/dropdown/node_modules/rc-tools/node_modules/css-loader/index.js!/Users/hua/my/react/c/dropdown/examples/anim.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	exports.push([module.id, ".in-enter {\n  opacity: 0.01;\n  transition: opacity 4s ease-in;\n}\n.in-enter.in-enter-active {\n  opacity: 1;\n}\n.in-leave {\n  opacity: 1;\n  transition: opacity 4s ease-in;\n}\n.in-leave.in-leave-active {\n  opacity: 0.01;\n}\n.zoom-down {\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.zoom-down-enter {\n  opacity: 0;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  -webkit-animation-play-state: paused;\n  animation-play-state: paused;\n}\n.zoom-down-leave {\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.6, -0.3, 0.74, 0.05);\n  animation-timing-function: cubic-bezier(0.6, -0.3, 0.74, 0.05);\n  -webkit-animation-play-state: paused;\n  animation-play-state: paused;\n}\n.zoom-down-enter.zoom-down-enter-active {\n  -webkit-animation-name: zoomDownIn;\n  animation-name: zoomDownIn;\n  -webkit-animation-play-state: running;\n  animation-play-state: running;\n}\n.zoom-down-leave.zoom-down-leave-active {\n  -webkit-animation-name: zoomDownOut;\n  animation-name: zoomDownOut;\n  -webkit-animation-play-state: running;\n  animation-play-state: running;\n}\n@-webkit-keyframes zoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n}\n@keyframes zoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n}\n@-webkit-keyframes zoomOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n}\n@keyframes zoomOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n}\n@-webkit-keyframes zoomUpIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 0%;\n    transform-origin: 50% 0%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 0%;\n    transform-origin: 50% 0%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n}\n@keyframes zoomUpIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 0%;\n    transform-origin: 50% 0%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 0%;\n    transform-origin: 50% 0%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n}\n@-webkit-keyframes zoomUpOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 0%;\n    transform-origin: 50% 0%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 0%;\n    transform-origin: 50% 0%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n}\n@keyframes zoomUpOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 0%;\n    transform-origin: 50% 0%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 0%;\n    transform-origin: 50% 0%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n}\n@-webkit-keyframes zoomLeftIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n}\n@keyframes zoomLeftIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n}\n@-webkit-keyframes zoomLeftOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n}\n@keyframes zoomLeftOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n}\n@-webkit-keyframes zoomRightIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n}\n@keyframes zoomRightIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n}\n@-webkit-keyframes zoomRightOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n}\n@keyframes zoomRightOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n}\n@-webkit-keyframes zoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n    transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 100%;\n    transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n}\n@keyframes zoomDownIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n    transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 100%;\n    transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n}\n@-webkit-keyframes zoomDownOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 100%;\n    transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n    transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n}\n@keyframes zoomDownOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 100%;\n    transform-origin: 50% 100%;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 100%;\n    transform-origin: 50% 100%;\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n  }\n}\n", ""]);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Dropdown = __webpack_require__(10);
	
	module.exports = Dropdown;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(8);
	var rcUtil = __webpack_require__(11);
	var joinClasses = rcUtil.joinClasses;
	var classSet = rcUtil.classSet;
	var createChainedFunction = rcUtil.createChainedFunction;
	var Popup = __webpack_require__(22);
	var domAlign = __webpack_require__(30);
	var utils = __webpack_require__(29);
	
	var Dropdown = (function (_React$Component) {
	  function Dropdown(props) {
	    var _this = this;
	
	    _classCallCheck(this, Dropdown);
	
	    _get(Object.getPrototypeOf(Dropdown.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      visible: !!props.defaultVisible
	    };
	    if ('visible' in props) {
	      this.state.visible = !!props.visible;
	    }
	    ['toggle', 'show', 'hide'].forEach(function (m) {
	      _this[m] = _this[m].bind(_this);
	    });
	  }
	
	  _inherits(Dropdown, _React$Component);
	
	  _createClass(Dropdown, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if ('visible' in nextProps) {
	        this.setState({
	          visible: !!nextProps.visible
	        });
	      }
	    }
	  }, {
	    key: 'getContainer',
	    value: function getContainer() {
	      if (!this.container) {
	        this.container = document.createElement('div');
	        if (this.props.trigger.indexOf('hover') !== -1) {
	          React.findDOMNode(this).appendChild(this.container);
	        } else {
	          document.body.appendChild(this.container);
	        }
	      }
	      return this.container;
	    }
	  }, {
	    key: 'renderDropdown',
	    value: function renderDropdown(callback) {
	      var props = this.props;
	      var state = this.state;
	      React.render(React.createElement(
	        Popup,
	        { prefixCls: props.prefixCls,
	          visible: state.visible,
	          placement: props.placement,
	          transitionName: props.transitionName },
	        props.overlay
	      ), this.getContainer(), function () {
	        callback(this);
	      });
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle() {
	      if (this.state.visible) {
	        this.hide();
	      } else {
	        this.show();
	      }
	    }
	  }, {
	    key: 'setVisible',
	    value: function setVisible(visible) {
	      var _this2 = this;
	
	      this.setState({
	        visible: visible
	      }, function () {
	        _this2.props.onVisibleChange(_this2.state.visible);
	      });
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      this.setVisible(true);
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      this.setVisible(false);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this3 = this;
	
	      document.body.onmouseover = function (e) {
	        _this3.currentEle = e.target;
	        if (_this3.props.trigger.indexOf('hover') !== -1) {
	          if (!rcUtil.Dom.contains(React.findDOMNode(_this3), _this3.currentEle)) {
	            _this3.hide();
	          }
	        }
	      };
	      this.componentDidUpdate();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      var _this4 = this;
	
	      var state = this.state;
	      this.renderDropdown(function (dropdown) {
	        if (state.visible) {
	          var rootNode = React.findDOMNode(_this4);
	          var tipNode = dropdown.getRootNode();
	          var placement = _this4.props.placement;
	          var points;
	          if (placement && placement.points) {
	            var props = _this4.props;
	            var align = domAlign(tipNode, rootNode, placement);
	            tipNode.className = utils.getClassByPlacement(props.prefixCls, align);
	          } else {
	            points = ['cr', 'cl'];
	            if (placement === 'right') {
	              points = ['cl', 'cr'];
	            } else if (placement === 'top') {
	              points = ['bc', 'tc'];
	            } else if (placement === 'bottom') {
	              points = ['tl', 'bl'];
	              //points = ['tc', 'bc'];
	            }
	            domAlign(tipNode, rootNode, {
	              points: points
	            });
	          }
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var children = props.children;
	      var child = React.Children.only(children);
	      var childProps = child.props || {};
	      var newChildProps = {};
	      var trigger = props.trigger;
	      if (trigger.indexOf('click') !== -1) {
	        newChildProps.onClick = createChainedFunction(this.toggle, childProps.onClick);
	      }
	      if (trigger.indexOf('hover') !== -1) {
	        newChildProps.onMouseEnter = createChainedFunction(this.show, childProps.onMouseEnter);
	        //newChildProps.onMouseLeave = createChainedFunction(this.hide, childProps.onMouseLeave);
	        newChildProps.onMouseLeave = childProps.onMouseLeave;
	      }
	      if (trigger.indexOf('focus') !== -1) {
	        newChildProps.onFocus = createChainedFunction(this.show, childProps.onFocus);
	        newChildProps.onBlur = createChainedFunction(this.hide, childProps.onBlur);
	      }
	      return React.cloneElement(child, newChildProps);
	    }
	  }]);
	
	  return Dropdown;
	})(React.Component);
	
	Dropdown.propTypes = {
	  trigger: React.PropTypes.arrayOf(React.PropTypes.oneOf(['click', 'hover', 'focus'])),
	  placement: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
	  onVisibleChange: React.PropTypes.func,
	  overlay: React.PropTypes.node.isRequired
	};
	
	Dropdown.defaultProps = {
	  prefixCls: 'rc-dropdown',
	  onVisibleChange: function onVisibleChange() {},
	  placement: 'bottom',
	  trigger: ['hover']
	};
	
	module.exports = Dropdown;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  guid: __webpack_require__(13),
	  classSet: __webpack_require__(14),
	  joinClasses: __webpack_require__(15),
	  KeyCode: __webpack_require__(16),
	  PureRenderMixin: __webpack_require__(17),
	  shallowEqual: __webpack_require__(12),
	  createChainedFunction: __webpack_require__(18),
	  Dom: {
	    addEventListener: __webpack_require__(19),
	    contains: __webpack_require__(20)
	  },
	  Children: {
	    toArray: __webpack_require__(21)
	  }
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 */
	
	"use strict";
	
	/**
	 * Performs equality by iterating through keys on an object and returning
	 * false when any key has values which are not strictly equal between
	 * objA and objB. Returns true when the values of all keys are strictly equal.
	 *
	 * @return {boolean}
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	  var key;
	  // Test for A's keys different from B.
	  for (key in objA) {
	    if (objA.hasOwnProperty(key) &&
	        (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
	      return false;
	    }
	  }
	  // Test for B's keys missing from A.
	  for (key in objB) {
	    if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = shallowEqual;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var seed = 0;
	module.exports = function () {
	  return Date.now() + '_' + (seed++);
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This file contains an unmodified version of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/vendor/stubs/cx.js
	 *
	 * This source code is licensed under the BSD-style license found here:
	 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
	 * An additional grant of patent rights can be found here:
	 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
	 */
	
	/**
	 * This function is used to mark string literals representing CSS class names
	 * so that they can be transformed statically. This allows for modularization
	 * and minification of CSS class names.
	 *
	 * In static_upstream, this function is actually implemented, but it should
	 * eventually be replaced with something more descriptive, and the transform
	 * that is used in the main stack should be ported for use elsewhere.
	 *
	 * @param string|object className to modularize, or an object of key/values.
	 *                      In the object case, the values are conditions that
	 *                      determine if the className keys should be included.
	 * @param [string ...]  Variable list of classNames in the string case.
	 * @return string       Renderable space-separated CSS className.
	 */
	function cx(classNames) {
	  if (typeof classNames === 'object') {
	    return Object.keys(classNames).filter(function(className) {
	      return classNames[className];
	    }).join(' ');
	  } else {
	    return Array.prototype.join.call(arguments, ' ');
	  }
	}
	
	module.exports = cx;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This file contains an unmodified version of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/utils/joinClasses.js
	 *
	 * This source code is licensed under the BSD-style license found here:
	 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
	 * An additional grant of patent rights can be found here:
	 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
	 */
	
	"use strict";
	
	/**
	 * Combines multiple className strings into one.
	 * http://jsperf.com/joinclasses-args-vs-array
	 *
	 * @param {...?string} classes
	 * @return {string}
	 */
	
	function joinClasses(className /*, ... */ ) {
	  if (!className) {
	    className = '';
	  }
	  var nextClass;
	  var argLength = arguments.length;
	  if (argLength > 1) {
	    for (var ii = 1; ii < argLength; ii++) {
	      nextClass = arguments[ii];
	      if (nextClass) {
	        className = (className ? className + ' ' : '') + nextClass;
	      }
	    }
	  }
	  return className;
	}
	
	module.exports = joinClasses;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */
	
	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};
	
	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function (e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	      // Function keys don't generate text
	    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }
	
	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};
	
	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function (keyCode) {
	  if (keyCode >= KeyCode.ZERO &&
	    keyCode <= KeyCode.NINE) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.NUM_ZERO &&
	    keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.A &&
	    keyCode <= KeyCode.Z) {
	    return true;
	  }
	
	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }
	
	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};
	
	module.exports = KeyCode;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule ReactComponentWithPureRenderMixin
	*/
	
	"use strict";
	
	var shallowEqual = __webpack_require__(12);
	
	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function(nextProps, nextState) {
	    return !shallowEqual(this.props, nextProps) ||
	           !shallowEqual(this.state, nextState);
	  }
	};
	
	module.exports = ReactComponentWithPureRenderMixin;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @returns {function|null}
	 */
	function createChainedFunction() {
	  var args = arguments;
	
	  return function chainedFunction() {
	    for (var i = 0; i < args.length; i++) {
	      if (args[i] && args[i].apply) {
	        args[i].apply(this, arguments);
	      }
	    }
	  };
	}
	
	module.exports = createChainedFunction;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (target, eventType, callback) {
	  if (target.addEventListener) {
	    target.addEventListener(eventType, callback, false);
	    return {
	      remove: function () {
	        target.removeEventListener(eventType, callback, false);
	      }
	    };
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, callback);
	    return {
	      remove: function () {
	        target.detachEvent('on' + eventType, callback);
	      }
	    };
	  }
	};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (root, node) {
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }
	
	  return false;
	};


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(8);
	
	module.exports = function (children) {
	  var ret = [];
	  React.Children.forEach(children, function (c) {
	    ret.push(c);
	  });
	  return ret;
	};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	/**
	 * @author yiminghe@gmail.com
	 */
	
	var React = __webpack_require__(8);
	var CSSTransitionGroup = __webpack_require__(23);
	var utils = __webpack_require__(29);
	
	var Popup = (function (_React$Component) {
	  function Popup() {
	    _classCallCheck(this, Popup);
	
	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(Popup, _React$Component);
	
	  _createClass(Popup, [{
	    key: 'getRootNode',
	    value: function getRootNode() {
	      return React.findDOMNode(this.refs.popup);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var className = utils.getClassByPlacement(props.prefixCls, props.placement);
	      if (props.className) {
	        className += ' ' + props.className;
	      }
	      var arrowClassName = '' + props.prefixCls + '-arrow';
	      var innerClassname = '' + props.prefixCls + '-inner';
	      var content = props.visible ? [React.createElement(
	        'div',
	        { className: className,
	          key: 'popup',
	          ref: 'popup',
	          style: this.style },
	        React.createElement('div', { className: arrowClassName }),
	        React.createElement(
	          'div',
	          { className: innerClassname },
	          props.children
	        )
	      )] : [];
	      if (props.transitionName) {
	        return React.createElement(
	          CSSTransitionGroup,
	          { transitionName: props.transitionName },
	          content
	        );
	      } else {
	        return content[0] || null;
	      }
	    }
	  }]);
	
	  return Popup;
	})(React.Component);
	
	module.exports = Popup;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(24);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(8);
	var ReactTransitionChildMapping = __webpack_require__(25);
	var CSSTransitionGroupChild = __webpack_require__(26);
	
	var CSSTransitionGroup = React.createClass({
	  displayName: 'CSSTransitionGroup',
	
	  protoTypes: {
	    component: React.PropTypes.any,
	    transitionName: React.PropTypes.string.isRequired,
	    transitionEnter: React.PropTypes.bool,
	    transitionLeave: React.PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      component: 'span',
	      transitionEnter: true,
	      transitionLeave: true
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var ret = [];
	    React.Children.forEach(this.props.children, function (c) {
	      ret.push(c);
	    });
	    return {
	      children: ret
	    };
	  },
	
	  componentWillMount: function componentWillMount() {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var _this = this;
	
	    var nextChildMapping = [];
	    var showProp = this.props.showProp;
	    var exclusive = this.props.exclusive;
	
	    React.Children.forEach(nextProps.children, function (c) {
	      nextChildMapping.push(c);
	    });
	
	    // // last props children if exclusive
	    var prevChildMapping = exclusive ? this.props.children : this.state.children;
	
	    var newChildren = ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping);
	
	    if (showProp) {
	      newChildren = newChildren.map(function (c) {
	        if (!c.props[showProp] && ReactTransitionChildMapping.isShownInChildren(prevChildMapping, c, showProp)) {
	          var newProps = {};
	          newProps[showProp] = true;
	          c = React.cloneElement(c, newProps);
	        }
	        return c;
	      });
	    }
	
	    if (exclusive) {
	      // make middle state children invalid
	      // restore to last props children
	      newChildren.forEach(function (c) {
	        _this.stop(c.key);
	      });
	    }
	
	    this.setState({
	      children: newChildren
	    });
	
	    nextChildMapping.forEach(function (c) {
	      var key = c.key;
	      var hasPrev = prevChildMapping && ReactTransitionChildMapping.inChildren(prevChildMapping, c);
	      if (showProp) {
	        if (hasPrev) {
	          var showInPrev = ReactTransitionChildMapping.isShownInChildren(prevChildMapping, c, showProp);
	          var showInNow = c.props[showProp];
	          if (!showInPrev && showInNow && !_this.currentlyTransitioningKeys[key]) {
	            _this.keysToEnter.push(key);
	          }
	        }
	      } else if (!hasPrev && !_this.currentlyTransitioningKeys[key]) {
	        _this.keysToEnter.push(key);
	      }
	    });
	
	    prevChildMapping.forEach(function (c) {
	      var key = c.key;
	      var hasNext = nextChildMapping && ReactTransitionChildMapping.inChildren(nextChildMapping, c);
	      if (showProp) {
	        if (hasNext) {
	          var showInNext = ReactTransitionChildMapping.isShownInChildren(nextChildMapping, c, showProp);
	          var showInNow = c.props[showProp];
	          if (!showInNext && showInNow && !_this.currentlyTransitioningKeys[key]) {
	            _this.keysToLeave.push(key);
	          }
	        }
	      } else if (!hasNext && !_this.currentlyTransitioningKeys[key]) {
	        _this.keysToLeave.push(key);
	      }
	    });
	  },
	
	  performEnter: function performEnter(key) {
	    this.currentlyTransitioningKeys[key] = true;
	    var component = this.refs[key];
	    if (component.componentWillEnter) {
	      component.componentWillEnter(this._handleDoneEntering.bind(this, key));
	    } else {
	      this._handleDoneEntering(key);
	    }
	  },
	
	  _handleDoneEntering: function _handleDoneEntering(key) {
	    //console.log('_handleDoneEntering, ', key);
	    delete this.currentlyTransitioningKeys[key];
	    var currentChildMapping = this.props.children;
	    var showProp = this.props.showProp;
	    if (!currentChildMapping || !showProp && !ReactTransitionChildMapping.inChildrenByKey(currentChildMapping, key) || showProp && !ReactTransitionChildMapping.isShownInChildrenByKey(currentChildMapping, key, showProp)) {
	      // This was removed before it had fully entered. Remove it.
	      //console.log('releave ',key);
	      this.performLeave(key);
	    } else {
	      this.setState({ children: currentChildMapping });
	    }
	  },
	
	  stop: function stop(key) {
	    delete this.currentlyTransitioningKeys[key];
	    var component = this.refs[key];
	    if (component) {
	      component.stop();
	    }
	  },
	
	  performLeave: function performLeave(key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	    if (component.componentWillLeave) {
	      component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
	    } else {
	      // Note that this is somewhat dangerous b/c it calls setState()
	      // again, effectively mutating the component before all the work
	      // is done.
	      this._handleDoneLeaving(key);
	    }
	  },
	
	  _handleDoneLeaving: function _handleDoneLeaving(key) {
	    //console.log('_handleDoneLeaving, ', key);
	    delete this.currentlyTransitioningKeys[key];
	    var showProp = this.props.showProp;
	    var currentChildMapping = this.props.children;
	    if (showProp && currentChildMapping && ReactTransitionChildMapping.isShownInChildrenByKey(currentChildMapping, key, showProp)) {
	      this.performEnter(key);
	    } else if (!showProp && currentChildMapping && ReactTransitionChildMapping.inChildrenByKey(currentChildMapping, key)) {
	      // This entered again before it fully left. Add it again.
	      //console.log('reenter ',key);
	      this.performEnter(key);
	    } else {
	      this.setState({ children: currentChildMapping });
	    }
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },
	
	  render: function render() {
	    var props = this.props;
	    var children = this.state.children.map(function (child) {
	      return React.createElement(
	        CSSTransitionGroupChild,
	        {
	          key: child.key,
	          ref: child.key,
	          name: props.transitionName,
	          enter: props.transitionEnter,
	          leave: props.transitionLeave },
	        child
	      );
	    });
	    var Component = this.props.component;
	    return React.createElement(
	      Component,
	      this.props,
	      children
	    );
	  }
	});
	module.exports = CSSTransitionGroup;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function inChildren(children, child) {
	  var found = 0;
	  children.forEach(function (c) {
	    if (found) {
	      return;
	    }
	    found = c.key === child.key;
	  });
	  return found;
	}
	
	module.exports = {
	  inChildren: inChildren,
	
	  isShownInChildren: function isShownInChildren(children, child, showProp) {
	    var found = 0;
	    children.forEach(function (c) {
	      if (found) {
	        return;
	      }
	      found = c.key === child.key && c.props[showProp];
	    });
	    return found;
	  },
	
	  inChildrenByKey: function inChildrenByKey(children, key) {
	    var found = 0;
	    children.forEach(function (c) {
	      if (found) {
	        return;
	      }
	      found = c.key === key;
	    });
	    return found;
	  },
	
	  isShownInChildrenByKey: function isShownInChildrenByKey(children, key, showProp) {
	    var found = 0;
	    children.forEach(function (c) {
	      if (found) {
	        return;
	      }
	      found = c.key === key && c.props[showProp];
	    });
	    return found;
	  },
	
	  mergeChildMappings: function mergeChildMappings(prev, next) {
	    var ret = [];
	
	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextChildrenPending = {};
	    var pendingChildren = [];
	    prev.forEach(function (c) {
	      if (inChildren(next, c)) {
	        if (pendingChildren.length) {
	          nextChildrenPending[c.key] = pendingChildren;
	          pendingChildren = [];
	        }
	      } else {
	        pendingChildren.push(c);
	      }
	    });
	
	    next.forEach(function (c) {
	      if (nextChildrenPending.hasOwnProperty(c.key)) {
	        ret = ret.concat(nextChildrenPending[c.key]);
	      }
	      ret.push(c);
	    });
	
	    ret = ret.concat(pendingChildren);
	
	    return ret;
	  }
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule ReactCSSTransitionGroupChild
	 */
	
	'use strict';
	
	var React = __webpack_require__(8);
	
	var CSSCore = __webpack_require__(27);
	var ReactTransitionEvents = __webpack_require__(28);
	
	var TICK = 17;
	
	var ReactCSSTransitionGroupChild = React.createClass({
	  displayName: 'ReactCSSTransitionGroupChild',
	
	  transition: function transition(animationType, finishCallback) {
	    var _this = this;
	
	    var node = this.getDOMNode();
	    var className = this.props.name + '-' + animationType;
	    var activeClassName = className + '-active';
	
	    if (this.endListener) {
	      this.endListener();
	    }
	
	    this.endListener = function (e) {
	      if (e && e.target !== node) {
	        return;
	      }
	
	      CSSCore.removeClass(node, className);
	      CSSCore.removeClass(node, activeClassName);
	
	      ReactTransitionEvents.removeEndEventListener(node, _this.endListener);
	      _this.endListener = null;
	
	      // Usually this optional callback is used for informing an owner of
	      // a leave animation and telling it to remove the child.
	      if (finishCallback) {
	        finishCallback();
	      }
	    };
	
	    ReactTransitionEvents.addEndEventListener(node, this.endListener);
	
	    CSSCore.addClass(node, className);
	
	    // Need to do this to actually trigger a transition.
	    this.queueClass(activeClassName);
	  },
	
	  queueClass: function queueClass(className) {
	    this.classNameQueue.push(className);
	
	    if (!this.timeout) {
	      this.timeout = setTimeout(this.flushClassNameQueue, TICK);
	    }
	  },
	
	  stop: function stop() {
	    //console.log('force stop')
	    if (this.timeout) {
	      clearTimeout(this.timeout);
	      this.classNameQueue.length = 0;
	      this.timeout = null;
	    }
	    if (this.endListener) {
	      this.endListener();
	    }
	  },
	
	  flushClassNameQueue: function flushClassNameQueue() {
	    if (this.isMounted()) {
	      this.classNameQueue.forEach(CSSCore.addClass.bind(CSSCore, this.getDOMNode()));
	    }
	    this.classNameQueue.length = 0;
	    this.timeout = null;
	  },
	
	  componentWillMount: function componentWillMount() {
	    this.classNameQueue = [];
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.timeout) {
	      clearTimeout(this.timeout);
	    }
	  },
	
	  componentWillEnter: function componentWillEnter(done) {
	    if (this.props.enter) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  },
	
	  componentWillLeave: function componentWillLeave(done) {
	    if (this.props.leave) {
	      this.transition('leave', done);
	    } else {
	      done();
	    }
	  },
	
	  render: function render() {
	    return this.props.children;
	  }
	});
	
	module.exports = ReactCSSTransitionGroupChild;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var SPACE = ' ';
	var RE_CLASS = /[\n\t\r]/g;
	
	var norm = function norm(elemClass) {
	  return (SPACE + elemClass + SPACE).replace(RE_CLASS, SPACE);
	};
	
	module.exports = {
	  addClass: function addClass(elem, className) {
	    elem.className += ' ' + className;
	  },
	
	  removeClass: function removeClass(elem, needle) {
	    var elemClass = elem.className.trim();
	    var className = norm(elemClass);
	    needle = needle.trim();
	    needle = SPACE + needle + SPACE;
	    // 一个 cls 有可能多次出现：'link link2 link link3 link'
	    while (className.indexOf(needle) >= 0) {
	      className = className.replace(needle, SPACE);
	    }
	    elem.className = className.trim();
	  }
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionEvents
	 */
	
	'use strict';
	/**
	 * EVENT_NAME_MAP is used to determine which event fired when a
	 * transition/animation ends, based on the style property used to
	 * define that event.
	 */
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },
	
	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are useable, and if not remove them
	  // from the map
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}
	
	if (typeof window !== 'undefined') {
	  detectEvents();
	}
	
	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var ReactTransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	  endEvents: endEvents,
	
	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	module.exports = ReactTransitionEvents;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  getClassByPlacement: function getClassByPlacement(prefixCls, placement) {
	    if (typeof placement === 'string') {
	      return '' + prefixCls + ' ' + prefixCls + '-placement-' + placement;
	    } else {
	      var offset = placement.offset;
	      var offsetClass;
	      if (offset && offset.length) {
	        offsetClass = '' + prefixCls + '-placement-offset-x-' + offset[0] + ' ' + prefixCls + '-placement-offset-y-' + offset[1];
	      }
	      var points = placement.points;
	      return '' + prefixCls + '\n          ' + offsetClass + '\n          ' + prefixCls + '-placement-points-' + points[0] + '-' + points[1];
	    }
	  }
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * align dom node flexibly
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	var utils = __webpack_require__(31);
	
	// http://yiminghe.iteye.com/blog/1124720
	
	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */
	
	function getAlignOffset(region, align) {
	  var V = align.charAt(0),
	      H = align.charAt(1),
	      w = region.width,
	      h = region.height,
	      x,
	      y;
	
	  x = region.left;
	  y = region.top;
	
	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }
	
	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	/**
	 * 得到会导致元素显示不全的祖先元素
	 */
	
	function getOffsetParent(element) {
	  // ie 这个也不是完全可行
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	  var doc = element.ownerDocument,
	      body = doc.body,
	      parent,
	      positionStyle = utils.css(element, 'position'),
	      skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';
	
	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }
	
	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = utils.css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}
	
	/**
	 * 获得元素的显示部分的区域
	 */
	
	function getVisibleRectForElement(element) {
	  var visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  },
	      el = element,
	      scrollX,
	      scrollY,
	      winSize,
	      doc = element.ownerDocument,
	      win = doc.defaultView || doc.parentWindow,
	      body = doc.body,
	      documentElement = doc.documentElement;
	
	  // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) && (el !== body && el !== documentElement && utils.css(el, 'overflow') !== 'visible')) {
	      var pos = utils.offset(el);
	      // add border
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right,
	      // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	    el = getOffsetParent(el);
	  }
	
	  // Clip by window's viewport.
	  scrollX = utils.getWindowScrollLeft(win);
	  scrollY = utils.getWindowScrollTop(win);
	  visibleRect.left = Math.max(visibleRect.left, scrollX);
	  visibleRect.top = Math.max(visibleRect.top, scrollY);
	  winSize = {
	    width: utils.viewportWidth(win),
	    height: utils.viewportHeight(win)
	  };
	  visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
	  visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}
	
	function getElFuturePos(elRegion, refNodeRegion, points, offset) {
	  var xy, diff, p1, p2;
	
	  xy = {
	    left: elRegion.left,
	    top: elRegion.top
	  };
	
	  p1 = getAlignOffset(refNodeRegion, points[1]);
	  p2 = getAlignOffset(elRegion, points[0]);
	
	  diff = [p2.left - p1.left, p2.top - p1.top];
	
	  return {
	    left: xy.left - diff[0] + +offset[0],
	    top: xy.top - diff[1] + +offset[1]
	  };
	}
	
	function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
	}
	
	function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
	}
	
	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = utils.clone(elFuturePos),
	      size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };
	
	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  }
	
	  // Left edge inside and right edge outside viewport, try to resize it.
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  }
	
	  // Right edge outside viewport, try to move it.
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  }
	
	  // Top edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  }
	
	  // Top edge inside and bottom edge outside viewport, try to resize it.
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  }
	
	  // Bottom edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }
	
	  return utils.mix(pos, size);
	}
	
	function flip(points, reg, map) {
	  var ret = [];
	  utils.each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
	}
	
	function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
	}
	
	function getRegion(node) {
	  var offset, w, h;
	  if (!utils.isWindow(node) && node.nodeType !== 9) {
	    offset = utils.offset(node);
	    w = utils.outerWidth(node);
	    h = utils.outerHeight(node);
	  } else {
	    var win = utils.getWindow(node);
	    offset = {
	      left: utils.getWindowScrollLeft(win),
	      top: utils.getWindowScrollTop(win)
	    };
	    w = utils.viewportWidth(win);
	    h = utils.viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}
	
	/*
	 * align node
	 * @param {Element} node current dom node
	 * @param {Object} align align config
	 *
	 *    @example
	 *    {
	 *      node: null,         // 参考元素, falsy 或 window 为可视区域, 'trigger' 为触发元素, 其他为指定元素
	 *      points: ['cc','cc'], // ['tr', 'tl'] 表示 overlay 的 tr 与参考节点的 tl 对齐
	 *      offset: [0, 0]      // 有效值为 [n, m]
	 *    }
	 */
	function domAlign(el, refNode, align) {
	  var points = align.points;
	  var offset = align.offset;
	  var overflow = align.overflow;
	  offset = offset && [].concat(offset) || [0, 0];
	  overflow = overflow || {};
	  var newOverflowCfg = {};
	
	  var fail = 0;
	  // 当前节点可以被放置的显示区域
	  var visibleRect = getVisibleRectForElement(el);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = getRegion(el);
	  // 参照节点所占的区域, left/top/width/height
	  var refNodeRegion = getRegion(refNode);
	  // 当前节点将要被放置的位置
	  var elFuturePos = getElFuturePos(elRegion, refNodeRegion, points, offset);
	  // 当前节点将要所处的区域
	  var newElRegion = utils.merge(elRegion, elFuturePos);
	
	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY)) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        fail = 1;
	        // 对齐位置反下
	        points = flip(points, /[lr]/ig, {
	          l: 'r',
	          r: 'l'
	        });
	        // 偏移量也反下
	        offset = flipOffset(offset, 0);
	      }
	    }
	
	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        fail = 1;
	        // 对齐位置反下
	        points = flip(points, /[tb]/ig, {
	          t: 'b',
	          b: 't'
	        });
	        // 偏移量也反下
	        offset = flipOffset(offset, 1);
	      }
	    }
	
	    // 如果失败，重新计算当前节点将要被放置的位置
	    if (fail) {
	      elFuturePos = getElFuturePos(elRegion, refNodeRegion, points, offset);
	      utils.mix(newElRegion, elFuturePos);
	    }
	
	    // 检查反下后的位置是否可以放下了
	    // 如果仍然放不下只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isFailX(elFuturePos, elRegion, visibleRect);
	
	    newOverflowCfg.adjustY = overflow.adjustY && isFailY(elFuturePos, elRegion, visibleRect);
	
	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }
	
	  // https://github.com/kissyteam/kissy/issues/190
	  // http://localhost:8888/kissy/src/overlay/demo/other/relative_align/align.html
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  utils.offset(el, { left: newElRegion.left, top: newElRegion.top });
	
	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    utils.css(el, 'width', el.width() + newElRegion.width - elRegion.width);
	  }
	
	  if (newElRegion.height !== elRegion.height) {
	    utils.css(el, 'height', el.height() + newElRegion.height - elRegion.height);
	  }
	
	  return {
	    points: points,
	    offset: offset,
	    overflow: newOverflowCfg
	  };
	}
	
	domAlign.__getOffsetParent = getOffsetParent;
	
	domAlign.__getVisibleRectForElement = getVisibleRectForElement;
	
	module.exports = domAlign;
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/
	
	// body may have overflow set on it, yet we still get the entire
	// viewport. In some browsers, el.offsetParent may be
	// document.documentElement, so check for that too.

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	
	var getComputedStyleX;
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}
	
	function css(el, name, value) {
	  if (typeof name === 'object') {
	    for (var i in name) {
	      css(el, i, name[i]);
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  } else {
	    return getComputedStyleX(el, name);
	  }
	}
	
	function getClientPosition(elem) {
	  var box, x, y;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();
	
	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
	
	  x = box.left;
	  y = box.top;
	
	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.
	
	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.
	
	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
	
	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;
	
	  return { left: x, top: y };
	}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    //ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      //quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function getScrollLeft(w) {
	  return getScroll(w);
	}
	
	function getScrollTop(w) {
	  return getScroll(w, true);
	}
	
	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, computedStyle) {
	  var val = '';
	  var d = elem.ownerDocument;
	
	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null)) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }
	
	  return val;
	}
	
	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/,
	    CURRENT_STYLE = 'currentStyle',
	    RUNTIME_STYLE = 'runtimeStyle',
	    LEFT = 'left',
	    PX = 'px';
	
	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
	
	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
	
	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style,
	        left = style[LEFT],
	        rsLeft = elem[RUNTIME_STYLE][LEFT];
	
	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
	
	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;
	
	    // Revert the changed values
	    style[LEFT] = left;
	
	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}
	
	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setOffset(elem, offset) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	
	  var old = getOffset(elem),
	      ret = {},
	      current,
	      key;
	
	  for (key in offset) {
	    current = parseFloat(css(elem, key)) || 0;
	    ret[key] = current + offset[key] - old[key];
	  }
	  css(elem, ret);
	}
	
	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}
	
	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}
	
	var BOX_MODELS = ['margin', 'border', 'padding'],
	    CONTENT_INDEX = -1,
	    PADDING_INDEX = 2,
	    BORDER_INDEX = 1,
	    MARGIN_INDEX = 0;
	
	function swap(elem, options, callback) {
	  var old = {},
	      style = elem.style,
	      name;
	
	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    old[name] = style[name];
	    style[name] = options[name];
	  }
	
	  callback.call(elem);
	
	  // Revert the old values
	  for (name in options) {
	    style[name] = old[name];
	  }
	}
	
	function getPBMWidth(elem, props, which) {
	  var value = 0,
	      prop,
	      j,
	      i;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp;
	        if (prop === 'border') {
	          cssProp = prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}
	
	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /*eslint eqeqeq:0*/
	  return obj != null && obj == obj.window;
	}
	
	var domUtils = {};
	
	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    //firefox chrome documentElement.scrollHeight< body.scrollHeight
	    //ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    //quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };
	
	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name,
	        doc = win.document,
	        body = doc.body,
	        documentElement = doc.documentElement,
	        documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});
	
	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, extra) {
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'],
	      borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue == null || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue == null || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    } else {
	      return cssBoxValue;
	    }
	  } else if (borderBoxValueOrIsBorderBox) {
	    return val + (extra === BORDER_INDEX ? 0 : extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
	  } else {
	    return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	  }
	}
	
	var cssShow = { position: 'absolute', visibility: 'hidden', display: 'block' };
	
	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay(elem) {
	  var val,
	      args = arguments;
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}
	
	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	
	  domUtils[name] = function (elem, val) {
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});
	
	function mix(to, from) {
	  for (var i in from) {
	    to[i] = from[i];
	  }
	  return to;
	}
	
	var utils = module.exports = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value);
	    } else {
	      return getOffset(el);
	    }
	  },
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var i;
	    var ret = {};
	    for (i in obj) {
	      ret[i] = obj[i];
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        ret.overflow[i] = obj.overflow[i];
	      }
	    }
	    return ret;
	  },
	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    var ret = {};
	    for (var i = 0; i < arguments.length; i++) {
	      utils.mix(ret, arguments[i]);
	    }
	    return ret;
	  },
	  viewportWidth: 0,
	  viewportHeight: 0
	};
	
	mix(utils, domUtils);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"name": "rc-dropdown",
		"version": "0.5.0",
		"description": "dropdown ui component for react",
		"keywords": [
			"react",
			"react-dropdown"
		],
		"homepage": "http://github.com/react-component/dropdown",
		"author": "hualei5280@gmail.com",
		"repository": {
			"type": "git",
			"url": "git@github.com:react-component/dropdown.git"
		},
		"bugs": {
			"url": "http://github.com/react-component/dropdown/issues"
		},
		"licenses": "MIT",
		"spm": {},
		"config": {
			"port": 8006
		},
		"scripts": {
			"build": "rc-tools run build",
			"precommit": "rc-tools run precommit",
			"less": "rc-tools run less",
			"gh-pages": "rc-tools run gh-pages",
			"history": "rc-tools run history",
			"start": "node --harmony node_modules/.bin/rc-server",
			"publish": "rc-tools run tag",
			"lint": "rc-tools run lint",
			"saucelabs": "node --harmony node_modules/.bin/rc-tools run saucelabs",
			"browser-test": "node --harmony node_modules/.bin/rc-tools run browser-test",
			"browser-test-cover": "node --harmony node_modules/.bin/rc-tools run browser-test-cover"
		},
		"devDependencies": {
			"async": "~0.9.0",
			"expect.js": "~0.3.1",
			"precommit-hook": "^1.0.7",
			"rc-menu": "~3.2.3",
			"rc-server": "3.x",
			"rc-style": "1.0.x",
			"rc-tools": "3.x",
			"react": "^0.13.0"
		},
		"precommit": [
			"precommit"
		],
		"dependencies": {
			"dom-align": "~1.0.8",
			"rc-css-transition-group": "~2.1.4",
			"rc-util": "^2.0.0"
		}
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/hua/my/react/c/dropdown/node_modules/rc-tools/node_modules/css-loader/index.js!/Users/hua/my/react/c/dropdown/node_modules/rc-menu/assets/index.css", function() {
			var newContent = require("!!/Users/hua/my/react/c/dropdown/node_modules/rc-tools/node_modules/css-loader/index.js!/Users/hua/my/react/c/dropdown/node_modules/rc-menu/assets/index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	exports.push([module.id, ".rc-menu {\n  outline: none;\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n  z-index: 99999;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 3px;\n}\n.rc-menu .rc-menu-item-active,\n.rc-menu .rc-menu-submenu-active {\n  background-color: #8EC8F9 !important;\n}\n.rc-menu .rc-menu-item-selected {\n  background-color: #e7e7e7;\n}\n.rc-menu .rc-menu-submenu-title {\n  padding: 15px 20px;\n}\n.rc-menu > li.rc-menu-submenu {\n  padding: 0;\n}\n.rc-menu > li {\n  position: relative;\n  display: block;\n  padding: 15px 20px;\n  white-space: nowrap;\n}\n.rc-menu > li.rc-menu-item-disabled,\n.rc-menu > li.rc-menu-submenu-disabled {\n  color: #777;\n}\n.rc-menu .rc-menu-item-divider {\n  padding: 0;\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.rc-menu-submenu {\n  position: relative;\n}\n.rc-menu-submenu > .rc-menu {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 100%;\n  min-width: 160px;\n  background-color: #fff;\n}\n.rc-menu-submenu-open > .rc-menu {\n  display: block;\n}\n", ""]);

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Menu = __webpack_require__(36);
	Menu.SubMenu = __webpack_require__(40);
	Menu.Item = __webpack_require__(42);
	module.exports = Menu;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(8);
	var rcUtil = __webpack_require__(11);
	var joinClasses = rcUtil.joinClasses;
	var classSet = rcUtil.classSet;
	var createChainedFunction = rcUtil.createChainedFunction;
	var KeyCode = rcUtil.KeyCode;
	var scrollIntoView = __webpack_require__(37);
	
	function noop() {}
	
	function getActiveKey(props) {
	  var activeKey = props.activeKey;
	  var children = props.children;
	  React.Children.forEach(children, function (c) {
	    if (!c.key && !c.props.disabled) {
	      throw new Error('MenuItem must have key!');
	    }
	  });
	  if (activeKey) {
	    return activeKey;
	  }
	  React.Children.forEach(children, function (c) {
	    if (c.props.active) {
	      activeKey = c.key;
	    }
	  });
	  if (!activeKey && props.activeFirst) {
	    React.Children.forEach(children, function (c) {
	      if (!activeKey && !c.props.disabled) {
	        activeKey = c.key;
	      }
	    });
	    return activeKey;
	  }
	  return activeKey;
	}
	
	function saveRef(name, c) {
	  this.instances = this.instances || {};
	  this.instances[name] = c;
	}
	
	var Menu = (function (_React$Component) {
	  function Menu(props) {
	    var _this = this;
	
	    _classCallCheck(this, Menu);
	
	    _get(Object.getPrototypeOf(Menu.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      activeKey: getActiveKey.call(this, props),
	      selectedKeys: props.selectedKeys || []
	    };
	
	    ['handleItemHover', 'handleDeselect', 'handleSelect', 'handleKeyDown', 'handleDestroy'].forEach(function (m) {
	      _this[m] = _this[m].bind(_this);
	    });
	  }
	
	  _inherits(Menu, _React$Component);
	
	  _createClass(Menu, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var props = {
	        activeKey: getActiveKey.call(this, nextProps)
	      };
	      if ('selectedKeys' in nextProps) {
	        props.selectedKeys = nextProps.selectedKeys || [];
	      }
	      this.setState(props);
	    }
	  }, {
	    key: 'getChildrenComponents',
	    value: function getChildrenComponents() {
	      var _this2 = this;
	
	      var ret = [];
	      this.newChildren.forEach(function (c) {
	        ret.push(_this2.instances[c.key]);
	      });
	      return ret;
	    }
	  }, {
	    key: 'handleKeyDown',
	
	    // all keyboard events callbacks run from here at first
	    value: function handleKeyDown(e) {
	      var _this3 = this;
	
	      var keyCode = e.keyCode;
	      var handled;
	      this.newChildren.forEach(function (c) {
	        var obj = _this3.instances[c.key];
	        if (c.props.active) {
	          handled = obj.handleKeyDown(e);
	        }
	      });
	      if (handled) {
	        return true;
	      }
	      var activeKey;
	      switch (keyCode) {
	        case KeyCode.UP:
	          //up
	          activeKey = this.step(-1);
	          break;
	        case KeyCode.DOWN:
	          //down
	          activeKey = this.step(1);
	          break;
	        default:
	      }
	      if (activeKey) {
	        e.preventDefault();
	        this.setState({
	          activeKey: activeKey
	        }, function () {
	          scrollIntoView(React.findDOMNode(_this3.instances[activeKey]), React.findDOMNode(_this3), {
	            onlyScrollIfNeeded: true
	          });
	        });
	        return true;
	      }
	    }
	  }, {
	    key: 'step',
	    value: function step(direction) {
	      var children = this.newChildren;
	      var activeKey = this.state.activeKey;
	      var len = children.length;
	      if (direction < 0) {
	        children = children.concat().reverse();
	      }
	      // find current activeIndex
	      var activeIndex = -1;
	      children.every(function (c, ci) {
	        if (c.key === activeKey) {
	          activeIndex = ci;
	          return false;
	        }
	        return true;
	      });
	      var start = (activeIndex + 1) % len;
	      var i = start;
	      for (;;) {
	        var child = children[i];
	        var key = child.key;
	        if (child.props.disabled) {
	          i = (i + 1 + len) % len;
	          // complete a loop
	          if (i === start) {
	            return null;
	          }
	        } else {
	          return key;
	        }
	      }
	    }
	  }, {
	    key: 'handleItemHover',
	    value: function handleItemHover(key) {
	      this.setState({
	        activeKey: key
	      });
	    }
	  }, {
	    key: 'handleSelect',
	    value: function handleSelect(key, child, e) {
	      var props = this.props;
	      // not from submenu
	      // top menu
	      // TODO: remove sub judge
	      if (!props.sub) {
	        if (!props.multiple) {
	          var selectedDescendant = this.selectedDescendant;
	          if (selectedDescendant) {
	            if (selectedDescendant !== child) {
	              var selectedDescendantProps = selectedDescendant.props;
	              selectedDescendantProps.onDeselect(selectedDescendantProps.eventKey, selectedDescendant, e, child);
	            }
	          }
	          this.selectedDescendant = child;
	        }
	      }
	      var state = this.state;
	      // my child
	      if (this.getChildrenComponents().indexOf(child) !== -1) {
	        var selectedKeys;
	        if (props.multiple) {
	          selectedKeys = state.selectedKeys.concat([key]);
	        } else {
	          selectedKeys = [key];
	        }
	        this.setState({
	          selectedKeys: selectedKeys
	        });
	      }
	
	      if (props.onSelect) {
	        props.onSelect(key, child, e);
	      }
	    }
	  }, {
	    key: 'handleDeselect',
	    value: function handleDeselect(key, child, e, __childToBeSelected /*internal*/) {
	      var state = this.state;
	      var children = this.getChildrenComponents();
	      // my children
	      if (children.indexOf(child) !== -1 && children.indexOf(__childToBeSelected) === -1) {
	        var selectedKeys = state.selectedKeys;
	        var index = selectedKeys.indexOf(key);
	        if (index !== -1) {
	          selectedKeys = selectedKeys.concat([]);
	          selectedKeys.splice(index, 1);
	          this.setState({
	            selectedKeys: selectedKeys
	          });
	        }
	      }
	      this.props.onDeselect.apply(null, arguments);
	    }
	  }, {
	    key: 'handleDestroy',
	    value: function handleDestroy(key) {
	      var state = this.state;
	      var selectedKeys = state.selectedKeys;
	      var index = selectedKeys.indexOf(key);
	      if (index !== -1) {
	        selectedKeys = selectedKeys.concat([]);
	        selectedKeys.splice(index, 1);
	        this.setState({
	          selectedKeys: selectedKeys
	        });
	      }
	    }
	  }, {
	    key: 'renderMenuItem',
	    value: function renderMenuItem(child) {
	      var key = child.key;
	      var state = this.state;
	      var props = this.props;
	      var childProps = child.props;
	      return React.cloneElement(child, {
	        rootPrefixCls: props.prefixCls,
	        ref: createChainedFunction(child.ref, saveRef.bind(this, key)),
	        eventKey: key,
	        onHover: this.handleItemHover,
	        active: key === state.activeKey,
	        multiple: props.multiple,
	        selected: state.selectedKeys.indexOf(key) !== -1,
	        onClick: this.props.onClick,
	        onDeselect: createChainedFunction(childProps.onDeselect, this.handleDeselect),
	        onDestroy: this.handleDestroy,
	        onSelect: createChainedFunction(childProps.onSelect, this.handleSelect)
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var classes = {};
	      classes[props.prefixCls] = true;
	      var domProps = {
	        className: joinClasses(props.className, classSet(classes)),
	        role: 'menu',
	        'aria-activedescendant': ''
	      };
	      if (props.id) {
	        domProps.id = props.id;
	      }
	      if (props.focusable) {
	        domProps.tabIndex = '0';
	        domProps.onKeyDown = this.handleKeyDown;
	      }
	
	      this.newChildren = rcUtil.Children.toArray(props.children).map(this.renderMenuItem, this);
	      return React.createElement(
	        'ul',
	        domProps,
	        this.newChildren
	      );
	    }
	  }]);
	
	  return Menu;
	})(React.Component);
	
	Menu.propTypes = {
	  focusable: React.PropTypes.bool,
	  multiple: React.PropTypes.bool,
	  onSelect: React.PropTypes.func,
	  onDeselect: React.PropTypes.func,
	  activeFirst: React.PropTypes.bool,
	  activeKey: React.PropTypes.string,
	  selectedKeys: React.PropTypes.arrayOf(React.PropTypes.string)
	};
	
	Menu.defaultProps = {
	  prefixCls: 'rc-menu',
	  focusable: true,
	  onSelect: noop,
	  onClick: noop,
	  onDeselect: noop
	};
	
	module.exports = Menu;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(38);


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(39);
	
	function scrollIntoView(elem, container, config) {
	  config = config || {};
	  // document 归一化到 window
	  if (container.nodeType === 9) {
	    container = util.getWindow(container);
	  }
	
	  var allowHorizontalScroll = config.allowHorizontalScroll;
	  var onlyScrollIfNeeded = config.onlyScrollIfNeeded;
	  var alignWithTop = config.alignWithTop;
	  var alignWithLeft = config.alignWithLeft;
	
	  allowHorizontalScroll = allowHorizontalScroll === undefined ? true : allowHorizontalScroll;
	
	  var isWin = util.isWindow(container);
	  var elemOffset = util.offset(elem);
	  var eh = util.outerHeight(elem);
	  var ew = util.outerWidth(elem);
	  var containerOffset, ch, cw, containerScroll,
	    diffTop, diffBottom, win,
	    winScroll, ww, wh;
	
	  if (isWin) {
	    win = container;
	    wh = util.height(win);
	    ww = util.width(win);
	    winScroll = {
	      left: util.scrollLeft(win),
	      top: util.scrollTop(win)
	    };
	    // elem 相对 container 可视视窗的距离
	    diffTop = {
	      left: elemOffset.left - winScroll.left,
	      top: elemOffset.top - winScroll.top
	    };
	    diffBottom = {
	      left: elemOffset.left + ew - (winScroll.left + ww),
	      top: elemOffset.top + eh - (winScroll.top + wh)
	    };
	    containerScroll = winScroll;
	  } else {
	    containerOffset = util.offset(container);
	    ch = container.clientHeight;
	    cw = container.clientWidth;
	    containerScroll = {
	      left: container.scrollLeft,
	      top: container.scrollTop
	    };
	    // elem 相对 container 可视视窗的距离
	    // 注意边框, offset 是边框到根节点
	    diffTop = {
	      left: elemOffset.left - (containerOffset.left +
	      (parseFloat(util.css(container, 'borderLeftWidth')) || 0)),
	      top: elemOffset.top - (containerOffset.top +
	      (parseFloat(util.css(container, 'borderTopWidth')) || 0))
	    };
	    diffBottom = {
	      left: elemOffset.left + ew -
	      (containerOffset.left + cw +
	      (parseFloat(util.css(container, 'borderRightWidth')) || 0)),
	      top: elemOffset.top + eh -
	      (containerOffset.top + ch +
	      (parseFloat(util.css(container, 'borderBottomWidth')) || 0))
	    };
	  }
	
	  if (diffTop.top < 0 || diffBottom.top > 0) {
	    // 强制向上
	    if (alignWithTop === true) {
	      util.scrollTop(container, containerScroll.top + diffTop.top);
	    } else if (alignWithTop === false) {
	      util.scrollTop(container, containerScroll.top + diffBottom.top);
	    } else {
	      // 自动调整
	      if (diffTop.top < 0) {
	        util.scrollTop(container, containerScroll.top + diffTop.top);
	      } else {
	        util.scrollTop(container, containerScroll.top + diffBottom.top);
	      }
	    }
	  } else {
	    if (!onlyScrollIfNeeded) {
	      alignWithTop = alignWithTop === undefined ? true : !!alignWithTop;
	      if (alignWithTop) {
	        util.scrollTop(container, containerScroll.top + diffTop.top);
	      } else {
	        util.scrollTop(container, containerScroll.top + diffBottom.top);
	      }
	    }
	  }
	
	  if (allowHorizontalScroll) {
	    if (diffTop.left < 0 || diffBottom.left > 0) {
	      // 强制向上
	      if (alignWithLeft === true) {
	        util.scrollLeft(container, containerScroll.left + diffTop.left);
	      } else if (alignWithLeft === false) {
	        util.scrollLeft(container, containerScroll.left + diffBottom.left);
	      } else {
	        // 自动调整
	        if (diffTop.left < 0) {
	          util.scrollLeft(container, containerScroll.left + diffTop.left);
	        } else {
	          util.scrollLeft(container, containerScroll.left + diffBottom.left);
	        }
	      }
	    } else {
	      if (!onlyScrollIfNeeded) {
	        alignWithLeft = alignWithLeft === undefined ? true : !!alignWithLeft;
	        if (alignWithLeft) {
	          util.scrollLeft(container, containerScroll.left + diffTop.left);
	        } else {
	          util.scrollLeft(container, containerScroll.left + diffBottom.left);
	        }
	      }
	    }
	  }
	}
	
	module.exports = scrollIntoView;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	
	function getClientPosition(elem) {
	  var box, x, y;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();
	
	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
	
	  x = box.left;
	  y = box.top;
	
	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.
	
	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.
	
	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
	
	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;
	
	  return {left: x, top: y};
	}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    //ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      //quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function getScrollLeft(w) {
	  return getScroll(w);
	}
	
	function getScrollTop(w) {
	  return getScroll(w, true);
	}
	
	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, computedStyle) {
	  var val = '';
	  var d = elem.ownerDocument;
	
	  // https://github.com/kissyteam/kissy/issues/61
	  if ((computedStyle = (computedStyle || d.defaultView.getComputedStyle(elem, null)))) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }
	
	  return val;
	}
	
	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/,
	  CURRENT_STYLE = 'currentStyle',
	  RUNTIME_STYLE = 'runtimeStyle',
	  LEFT = 'left',
	  PX = 'px';
	
	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
	
	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
	
	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style,
	      left = style[LEFT],
	      rsLeft = elem[RUNTIME_STYLE][LEFT];
	
	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
	
	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : (ret || 0);
	    ret = style.pixelLeft + PX;
	
	    // Revert the changed values
	    style[LEFT] = left;
	
	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}
	
	var getComputedStyleX;
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}
	
	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setOffset(elem, offset) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	
	  var old = getOffset(elem),
	    ret = {},
	    current, key;
	
	  for (key in offset) {
	    current = parseFloat(css(elem, key)) || 0;
	    ret[key] = current + offset[key] - old[key];
	  }
	  css(elem, ret);
	}
	
	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}
	
	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}
	
	var BOX_MODELS = ['margin', 'border', 'padding'],
	  CONTENT_INDEX = -1,
	  PADDING_INDEX = 2,
	  BORDER_INDEX = 1,
	  MARGIN_INDEX = 0;
	
	function swap(elem, options, callback) {
	  var old = {},
	    style = elem.style,
	    name;
	
	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    old[name] = style[name];
	    style[name] = options[name];
	  }
	
	  callback.call(elem);
	
	  // Revert the old values
	  for (name in options) {
	    style[name] = old[name];
	  }
	}
	
	function getPBMWidth(elem, props, which) {
	  var value = 0, prop, j, i;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp;
	        if (prop === 'border') {
	          cssProp = prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}
	
	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /*jshint eqeqeq:false*/
	  return obj != null && obj == obj.window;
	}
	
	var domUtils = {};
	
	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	      //firefox chrome documentElement.scrollHeight< body.scrollHeight
	      //ie standard mode : documentElement.scrollHeight> body.scrollHeight
	      d.documentElement['scroll' + name],
	      //quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	      d.body['scroll' + name],
	      domUtils['viewport' + name](d));
	  };
	
	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name,
	      doc = win.document,
	      body = doc.body,
	      documentElement = doc.documentElement,
	      documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp ||
	      body && body[prop] || documentElementProp;
	  };
	});
	
	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, extra) {
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'],
	    borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue == null || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue == null || (Number(cssBoxValue)) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'],
	          which, computedStyle);
	    } else {
	      return cssBoxValue;
	    }
	  } else if (borderBoxValueOrIsBorderBox) {
	    return val + (extra === BORDER_INDEX ? 0 :
	        (extra === PADDING_INDEX ?
	          -getPBMWidth(elem, ['border'], which, computedStyle) :
	          getPBMWidth(elem, ['margin'], which, computedStyle)));
	  } else {
	    return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra),
	        which, computedStyle);
	  }
	}
	
	var cssShow = {position: 'absolute', visibility: 'hidden', display: 'block'};
	
	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay(elem) {
	  var val, args = arguments;
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}
	
	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	
	  domUtils[name] = function (elem, val) {
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});
	
	function css(el, name, value) {
	  if (typeof name === 'object') {
	    for (var i in name) {
	      css(el, i, name[i]);
	    }
	    return;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	  } else {
	    return getComputedStyleX(el, name);
	  }
	}
	
	function mix(to, from) {
	  for (var i in from) {
	    to[i] = from[i];
	  }
	  return to;
	}
	
	var utils = module.exports = {
	  getWindow: function (node) {
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function (el, value) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value);
	    } else {
	      return getOffset(el);
	    }
	  },
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function (obj) {
	    var ret = {};
	    for (var i in obj) {
	      ret[i] = obj[i];
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        ret.overflow[i] = obj.overflow[i];
	      }
	    }
	    return ret;
	  },
	  mix: mix,
	  scrollLeft: function (w, v) {
	    if (isWindow(w)) {
	      if (v === undefined) {
	        return getScrollLeft(w);
	      } else {
	        window.scrollTo(v, getScrollTop(w));
	      }
	    } else {
	      if (v === undefined) {
	        return w.scrollLeft;
	      } else {
	        w.scrollLeft = v;
	      }
	    }
	  },
	  scrollTop: function (w, v) {
	    if (isWindow(w)) {
	      if (v === undefined) {
	        return getScrollTop(w);
	      } else {
	        window.scrollTo(getScrollLeft(w), v);
	      }
	    } else {
	      if (v === undefined) {
	        return w.scrollTop;
	      } else {
	        w.scrollTop = v;
	      }
	    }
	  },
	  merge: function () {
	    var ret = {};
	    for (var i = 0; i < arguments.length; i++) {
	      utils.mix(ret, arguments[i]);
	    }
	    return ret;
	  },
	  viewportWidth: 0,
	  viewportHeight: 0
	};
	
	mix(utils, domUtils);


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(8);
	var rcUtil = __webpack_require__(11);
	var joinClasses = rcUtil.joinClasses;
	var classSet = rcUtil.classSet;
	var guid = rcUtil.guid;
	var KeyCode = rcUtil.KeyCode;
	var Menu = __webpack_require__(36);
	var createChainedFunction = rcUtil.createChainedFunction;
	
	var SubMenu = React.createClass({
	  displayName: 'SubMenu',
	
	  propTypes: {
	    openOnHover: React.PropTypes.bool,
	    title: React.PropTypes.node,
	    onClick: React.PropTypes.func
	  },
	
	  mixins: [__webpack_require__(41)],
	
	  getInitialState: function getInitialState() {
	    return {
	      activeFirst: false
	    };
	  },
	
	  saveMenuInstance: function saveMenuInstance(c) {
	    this.menuInstance = c;
	  },
	
	  _getPrefixCls: function _getPrefixCls() {
	    return this.props.rootPrefixCls + '-submenu';
	  },
	
	  _getActiveClassName: function _getActiveClassName() {
	    return this._getPrefixCls() + '-active';
	  },
	
	  _getDisabledClassName: function _getDisabledClassName() {
	    return this._getPrefixCls() + '-disabled';
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (!nextProps.active) {
	      this.setOpenState(false);
	    }
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      openOnHover: true,
	      onMouseEnter: function onMouseEnter() {},
	      title: ''
	    };
	  },
	
	  handleKeyDown: function handleKeyDown(e) {
	    var keyCode = e.keyCode;
	    var menu = this.menuInstance;
	
	    if (keyCode === KeyCode.ENTER) {
	      this.handleClick(e);
	      this.setState({
	        activeFirst: true
	      });
	      return true;
	    }
	
	    if (keyCode === KeyCode.RIGHT) {
	      if (this.state.open) {
	        menu.handleKeyDown(e);
	      } else {
	        this.setOpenState(true);
	        this.setState({
	          activeFirst: true
	        });
	      }
	      return true;
	    }
	    if (keyCode === KeyCode.LEFT) {
	      var handled;
	      if (this.state.open) {
	        handled = menu.handleKeyDown(e);
	      } else {
	        return undefined;
	      }
	      if (!handled) {
	        this.setOpenState(false);
	        handled = true;
	      }
	      return handled;
	    }
	
	    if (this.state.open && (keyCode === KeyCode.UP || keyCode === KeyCode.DOWN)) {
	      return menu.handleKeyDown(e);
	    }
	  },
	
	  handleMouseEnter: function handleMouseEnter() {
	    var props = this.props;
	    props.onHover(props.eventKey);
	    if (props.openOnHover) {
	      this.setOpenState(true);
	      this.setState({
	        activeFirst: false
	      });
	    }
	  },
	
	  handleMouseLeave: function handleMouseLeave() {
	    if (!this.state.open) {
	      this.props.onHover(null);
	    }
	  },
	
	  handleClick: function handleClick() {
	    this.setOpenState(true);
	    this.setState({
	      activeFirst: false
	    });
	  },
	
	  handleSubMenuClick: function handleSubMenuClick(key, menuItem, e) {
	    this.props.onClick(key, menuItem, e);
	  },
	
	  handleSelect: function handleSelect(childKey, child, e) {
	    // propagate
	    this.props.onSelect(childKey, child, e);
	  },
	
	  handleDeselect: function handleDeselect() {
	    this.props.onDeselect.apply(null, arguments);
	  },
	
	  render: function render() {
	    var props = this.props;
	    var classes = {};
	    var prefixCls = this._getPrefixCls();
	    classes[this._getOpenClassName()] = this.state.open;
	    classes[this._getActiveClassName()] = props.active;
	    classes[this._getDisabledClassName()] = props.disabled;
	    this._menuId = this._menuId || guid();
	    classes[prefixCls] = true;
	    var clickEvents = {};
	    var mouseEvents = {};
	    var titleMouseEvents = {};
	    if (!props.disabled) {
	      clickEvents = {
	        onClick: this.handleClick
	      };
	      mouseEvents = {
	        onMouseLeave: this.handleMouseLeave
	      };
	      // only works in title, not outer li
	      titleMouseEvents = {
	        onMouseEnter: this.handleMouseEnter
	      };
	    }
	    return React.createElement(
	      'li',
	      _extends({ className: joinClasses(props.className, classSet(classes)) }, mouseEvents),
	      React.createElement(
	        'div',
	        _extends({
	          className: prefixCls + '-title'
	        }, titleMouseEvents, clickEvents, {
	          'aria-expanded': props.active,
	          'aria-owns': this._menuId,
	          'aria-haspopup': 'true'
	        }),
	        props.title
	      ),
	      this.renderChildren(props.children)
	    );
	  },
	  renderChildren: function renderChildren(children) {
	    if (!this.state.open) {
	      // prevent destroy
	      return this._cacheMenu || null;
	    }
	    var childrenCount = React.Children.count(children);
	    var baseProps = {
	      sub: true,
	      focusable: false,
	      onClick: this.handleSubMenuClick,
	      onSelect: this.handleSelect,
	      onDeselect: this.handleDeselect,
	      activeFirst: this.state.activeFirst,
	      multiple: this.props.multiple,
	      id: this._menuId,
	      ref: this.saveMenuInstance
	    };
	    if (childrenCount === 1 && children.type === Menu) {
	      var menu = children;
	      baseProps.ref = createChainedFunction(menu.ref, this.saveMenuInstance);
	      baseProps.onClick = createChainedFunction(menu.props.onClick, this.handleSubMenuClick);
	      this._cacheMenu = React.cloneElement(menu, baseProps);
	    } else {
	      this._cacheMenu = React.createElement(
	        Menu,
	        baseProps,
	        children
	      );
	    }
	    return this._cacheMenu;
	  }
	});
	
	module.exports = SubMenu;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var rcUtil = __webpack_require__(11);
	var KeyCode = rcUtil.KeyCode;
	var React = __webpack_require__(8);
	
	var SubMenuStateMixin = {
	  getInitialState: function getInitialState() {
	    return {
	      open: this.props.open || false
	    };
	  },
	
	  _getOpenClassName: function _getOpenClassName() {
	    return this.props.openClassName || this.props.rootPrefixCls + '-submenu-open';
	  },
	
	  setOpenState: function setOpenState(newState, onStateChangeComplete) {
	    if (newState) {
	      this.bindRootCloseHandlers();
	    } else {
	      this.unbindRootCloseHandlers();
	    }
	
	    this.setState({
	      open: newState
	    }, onStateChangeComplete);
	  },
	
	  handleDocumentKeyUp: function handleDocumentKeyUp(e) {
	    if (e.keyCode === KeyCode.ESC) {
	      this.setOpenState(false);
	    }
	  },
	
	  handleDocumentClick: function handleDocumentClick(e) {
	    // If the click originated from within this component
	    // don't do anything.
	    if (rcUtil.Dom.contains(React.findDOMNode(this), e.target)) {
	      return;
	    }
	    // de active menu cause sub menu hide its menu
	    this.props.onHover(null);
	  },
	
	  bindRootCloseHandlers: function bindRootCloseHandlers() {
	    this._onDocumentClickListener = rcUtil.Dom.addEventListener(document, 'click', this.handleDocumentClick);
	    this._onDocumentKeyupListener = rcUtil.Dom.addEventListener(document, 'keyup', this.handleDocumentKeyUp);
	  },
	
	  unbindRootCloseHandlers: function unbindRootCloseHandlers() {
	    if (this._onDocumentClickListener) {
	      this._onDocumentClickListener.remove();
	    }
	
	    if (this._onDocumentKeyupListener) {
	      this._onDocumentKeyupListener.remove();
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.unbindRootCloseHandlers();
	  }
	};
	
	module.exports = SubMenuStateMixin;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(8);
	var rcUtil = __webpack_require__(11);
	var joinClasses = rcUtil.joinClasses;
	var classSet = rcUtil.classSet;
	var KeyCode = rcUtil.KeyCode;
	
	var MenuItem = (function (_React$Component) {
	  function MenuItem(props) {
	    var _this = this;
	
	    _classCallCheck(this, MenuItem);
	
	    _get(Object.getPrototypeOf(MenuItem.prototype), 'constructor', this).call(this, props);
	    ['handleKeyDown', 'handleMouseLeave', 'handleMouseEnter', 'handleClick'].forEach(function (m) {
	      _this[m] = _this[m].bind(_this);
	    });
	  }
	
	  _inherits(MenuItem, _React$Component);
	
	  _createClass(MenuItem, [{
	    key: '_getPrefixCls',
	    value: function _getPrefixCls() {
	      return this.props.rootPrefixCls + '-item';
	    }
	  }, {
	    key: '_getActiveClassName',
	    value: function _getActiveClassName() {
	      return this._getPrefixCls() + '-active';
	    }
	  }, {
	    key: '_getSelectedClassName',
	    value: function _getSelectedClassName() {
	      return this._getPrefixCls() + '-selected';
	    }
	  }, {
	    key: '_getDisabledClassName',
	    value: function _getDisabledClassName() {
	      return this._getPrefixCls() + '-disabled';
	    }
	  }, {
	    key: 'handleKeyDown',
	    value: function handleKeyDown(e) {
	      var keyCode = e.keyCode;
	      if (keyCode === KeyCode.ENTER) {
	        this.handleClick(e);
	        return true;
	      }
	    }
	  }, {
	    key: 'handleMouseLeave',
	    value: function handleMouseLeave() {
	      this.props.onHover(null);
	    }
	  }, {
	    key: 'handleMouseEnter',
	    value: function handleMouseEnter() {
	      var props = this.props;
	      props.onHover(props.eventKey);
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(e) {
	      var props = this.props;
	      var eventKey = props.eventKey;
	      props.onClick(eventKey, this, e);
	      if (props.multiple) {
	        if (props.selected) {
	          props.onDeselect(eventKey, this, e);
	        } else {
	          props.onSelect(eventKey, this, e);
	        }
	      } else if (!props.selected) {
	        props.onSelect(eventKey, this, e);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var props = this.props;
	      if (props.onDestroy) {
	        props.onDestroy(props.eventKey);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var classes = {};
	      classes[this._getActiveClassName()] = !props.disabled && props.active;
	      classes[this._getSelectedClassName()] = props.selected;
	      classes[this._getDisabledClassName()] = props.disabled;
	      classes[this._getPrefixCls()] = true;
	      var attrs = {
	        title: props.title,
	        className: joinClasses(props.className, classSet(classes)),
	        role: 'menuitem',
	        'aria-selected': props.selected,
	        'aria-disabled': props.disabled
	      };
	      var mouseEvent = {};
	      if (!props.disabled) {
	        mouseEvent = {
	          onClick: this.handleClick,
	          onMouseLeave: this.handleMouseLeave,
	          onMouseEnter: this.handleMouseEnter
	        };
	      }
	      return React.createElement(
	        'li',
	        _extends({}, attrs, mouseEvent),
	        props.children
	      );
	    }
	  }]);
	
	  return MenuItem;
	})(React.Component);
	
	MenuItem.propTypes = {
	  active: React.PropTypes.bool,
	  selected: React.PropTypes.bool,
	  disabled: React.PropTypes.bool,
	  title: React.PropTypes.string,
	  onSelect: React.PropTypes.func,
	  onClick: React.PropTypes.func,
	  onDeselect: React.PropTypes.func,
	  onHover: React.PropTypes.func,
	  onDestroy: React.PropTypes.func
	};
	
	MenuItem.defaultProps = {
	  onSelect: function onSelect() {},
	  onMouseEnter: function onMouseEnter() {}
	};
	module.exports = MenuItem;

/***/ }
]);
//# sourceMappingURL=demo.js.map