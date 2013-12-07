
global.initDOM = function () {
    jsdom = require('jsdom');
    jQuery = require('jquery').create();
    global.jQuery = global.$ = jQuery;
    window = jsdom.jsdom().createWindow('')
    global.document = window.document;
    global.addEventListener = window.addEventListener
}