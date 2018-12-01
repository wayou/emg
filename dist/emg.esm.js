import { createElement, Component } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "";
styleInject(css);

var LOAD_ERR_IMG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAACfCAYAAABEM20mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzYyMzQxQjJFQjRFMTFFNjk1N0ZCQ0RDMDU3RTY1N0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzYyMzQxQjFFQjRFMTFFNjk1N0ZCQ0RDMDU3RTY1N0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRDBCNEI3OUVBODExMUU2OTA5RkNBMUI3RjRCMzUxOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRDBCNEI3QUVBODExMUU2OTA5RkNBMUI3RjRCMzUxOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pql0SicAAAsrSURBVHja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';

var LOADING_IMG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAACfCAYAAABEM20mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUQwQjRCN0FFQTgxMTFFNjkwOUZDQTFCN0Y0QjM1MTkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUQwQjRCNzlFQTgxMTFFNjkwOUZDQTFCN0Y0QjM1MTkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMERFNDJFMEU5RUExMUU2Qjk4NEQ0OTdDRERBMDdCNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFMUU3MzBCOEU5RjMxMUU2Qjk4NEQ0OTdDRERBMDdCNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpjfOS0AAAkrSURBVHja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';

/*
 * @author: wayou
 * @date: 2018-09-04 17:10:14
 * @description:
 * a comporehensive image component
 *
 */
var IMAGE_CLASS_NAMES = {
    IMAGE_CLASSNAME: "image",
    IMAGE_LOADING: "image-loading",
    IMAGE_LOAD_SUCCESS: "iamge-load-success",
    IMAGE_LOAD_ERR: "image-load-error",
};
var Emg = /** @class */ (function (_super) {
    __extends(Emg, _super);
    function Emg(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isLoading: true,
            isLoadSuccess: false,
        };
        _this.onLoad = _this.onLoad.bind(_this);
        _this.onError = _this.onError.bind(_this);
        return _this;
    }
    Emg.prototype.componentDidMount = function () {
        var _a = this.props, src = _a.src, isLazyLoad = _a.isLazyLoad;
        if (isLazyLoad) {
            this.initalLazyLoad();
        }
        else {
            this.loadImg(src);
        }
    };
    Emg.prototype.render = function () {
        var _this = this;
        var _a = this.props, alt = _a.alt, title = _a.title, style = _a.style, className = _a.className;
        var _b = this.state, isLoading = _b.isLoading, isLoadSuccess = _b.isLoadSuccess;
        var imgSrc = this.getImgUrl();
        var classNames = this.getClassName(className, isLoading, isLoadSuccess);
        return (createElement("img", { ref: function (ref) {
                _this.imageElement = ref;
            }, className: classNames, src: imgSrc, alt: alt, title: title, style: style }));
    };
    Emg.prototype.getImgUrl = function () {
        var _a = this.props, src = _a.src, loadingImg = _a.loadingImg, loadErrImg = _a.loadErrImg, fallbackImg = _a.fallbackImg;
        var _b = this.state, isLoading = _b.isLoading, isLoadSuccess = _b.isLoadSuccess;
        if (isLoading) {
            return loadingImg;
        }
        else {
            if (isLoadSuccess) {
                return src;
            }
            else {
                if (fallbackImg) {
                    return fallbackImg;
                }
                else {
                    return loadErrImg;
                }
            }
        }
    };
    Emg.prototype.getClassName = function (className, isLoading, isLoadSuccess) {
        if (className === void 0) { className = ""; }
        return [
            IMAGE_CLASS_NAMES.IMAGE_CLASSNAME,
            !!className ? className : "",
            isLoading
                ? IMAGE_CLASS_NAMES.IMAGE_LOADING
                : isLoadSuccess
                    ? IMAGE_CLASS_NAMES.IMAGE_LOAD_SUCCESS
                    : IMAGE_CLASS_NAMES.IMAGE_LOAD_ERR,
        ].join(" ");
    };
    Emg.prototype.onLoad = function (event) {
        var onLoad = this.props.onLoad;
        this.setState({
            isLoading: false,
            isLoadSuccess: true,
        });
        if (onLoad) {
            onLoad(event);
        }
    };
    Emg.prototype.onError = function (event) {
        var onError = this.props.onError;
        this.setState({
            isLoading: false,
            isLoadSuccess: false,
        });
        if (onError) {
            onError(event);
        }
    };
    Emg.prototype.initalLazyLoad = function () {
        var _this = this;
        var imageElement = this.imageElement;
        if (!imageElement) {
            return;
        }
        // TODO: performace test with large number of images
        if ("IntersectionObserver" in window) {
            var lazyImageObserver_1 = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        var lazyImage = entry.target;
                        _this.loadImg(_this.props.src);
                        lazyImageObserver_1.unobserve(lazyImage);
                    }
                });
            });
            lazyImageObserver_1.observe(imageElement);
        }
        else {
            this.loadImg(this.props.src);
        }
    };
    Emg.prototype.loadImg = function (src) {
        var loader = new Image();
        loader.onload = this.onLoad;
        loader.onerror = this.onError;
        loader.src = src;
    };
    Emg.defaultProps = {
        className: "",
        alt: "",
        loadingImg: LOADING_IMG,
        loadErrImg: LOAD_ERR_IMG,
        fallbackImg: "",
        isLazyLoad: true,
    };
    return Emg;
}(Component));

export default Emg;
