!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Gusher=t():e.Gusher=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=9)}([function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function r(e){return"number"==typeof e}function o(e){return"object"==typeof e&&null!==e}function s(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!r(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,r,u,c,a;if(this._events||(this._events={}),"error"===e&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;var l=new Error('Uncaught, unspecified "error" event. ('+t+")");throw l.context=t,l}if(n=this._events[e],s(n))return!1;if(i(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:u=Array.prototype.slice.call(arguments,1),n.apply(this,u)}else if(o(n))for(u=Array.prototype.slice.call(arguments,1),a=n.slice(),r=a.length,c=0;c<r;c++)a[c].apply(this,u);return!0},n.prototype.addListener=function(e,t){var r;if(!i(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?o(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,o(this._events[e])&&!this._events[e].warned&&(r=s(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,r&&r>0&&this._events[e].length>r&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){function n(){this.removeListener(e,n),r||(r=!0,t.apply(this,arguments))}if(!i(t))throw TypeError("listener must be a function");var r=!1;return n.listener=t,this.on(e,n),this},n.prototype.removeListener=function(e,t){var n,r,s,u;if(!i(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],s=n.length,r=-1,n===t||i(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(o(n)){for(u=s;u-- >0;)if(n[u]===t||n[u].listener&&n[u].listener===t){r=u;break}if(r<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],i(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(i(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),o=i(r);t.default=o.default.getLogger("Gusher"),e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),o=i(r);t.default=o.default,e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(0),u=i(s),c=function(){function e(t,n){r(this,e),this.name=t,this.gusher=n,this.subscribed=!1,this.emitter=new u.default}return o(e,[{key:"trigger",value:function(e,t){return this.gusher.send(e,t,this.name)}},{key:"disconnect",value:function(){this.subscribed=!0}},{key:"bind",value:function(e,t){return this.emitter.on(e,t),this}},{key:"unbind",value:function(e,t){return this.emitter.removeListener(e,t),this}},{key:"handleEvent",value:function(e,t){"subscribe_succeeded"===e&&(this.subscribed=!0),this.emitter.emit(e,t)}},{key:"subscribe",value:function(){this.gusher.send("gusher.subscribe",{id:"todo",channel:this.name})}},{key:"unsubscribe",value:function(){this.gusher.send("gusher.unsubscribe",{id:"todo",channel:this.name})}}]),e}();t.default=c,e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(3),u=i(s),c=function(){function e(){r(this,e),this.channels=new Map}return o(e,[{key:"add",value:function(e,t){var n=this.channels.get(e);return n||(n=new u.default(e,t),this.channels.set(e,n)),n}},{key:"find",value:function(e){return this.channels.get(e)}},{key:"remove",value:function(e){var t=this.channels.get(e);return this.channels.delete(e),t}},{key:"all",value:function(){var e=[],t=!0,n=!1,i=void 0;try{for(var r,o=this.channels.keys()[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var s=r.value;e.push(s)}}catch(e){n=!0,i=e}finally{try{!t&&o.return&&o.return()}finally{if(n)throw i}}return e}},{key:"disconnect",value:function(){this.channels.forEach(function(e){return e.disconnect()})}}]),e}();t.default=c,e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(0),u=i(s),c=n(1),a=i(c),l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,e),this.options=t||{},this.url=t.url||"",this.state="initialized",this.emitter=new u.default}return o(e,[{key:"bind",value:function(e,t){return this.emitter.on(e,t),this}},{key:"unbind",value:function(e,t){return this.emitter.removeListener(e,t),this}},{key:"connect",value:function(e){if(this.socket)return!1;var t=this.url;e&&(t=t+"?token="+e);try{this.socket=new WebSocket(t)}catch(e){return a.default.debug(e),!1}return this.bindListeners(),a.default.debug("Connecting",{url:this.url,token:e}),this.changeState("connecting"),!0}},{key:"close",value:function(){return!!this.socket&&(this.socket.close(),!0)}},{key:"changeState",value:function(e,t){this.state=e,this.emitter.emit(e,t)}},{key:"bindListeners",value:function(){var e=this;this.socket.onopen=function(){e.onOpen()},this.socket.onerror=function(t){e.onError(t)},this.socket.onclose=function(t){e.onClose(t)},this.socket.onmessage=function(t){e.onMessage(t)}}},{key:"unbindListeners",value:function(){this.socket&&(this.socket.onopen=null,this.socket.onerror=null,this.socket.onclose=null,this.socket.onmessage=null)}},{key:"onOpen",value:function(){this.changeState("open"),this.socket.onopen=null}},{key:"onError",value:function(e){this.emitter.emit("error",e)}},{key:"onClose",value:function(e){e?this.changeState("closed",{code:e.code,reason:e.reason,wasClean:e.wasClean}):this.changeState("closed"),this.unbindListeners(),this.socket=null}},{key:"onMessage",value:function(e){var t=void 0;try{t=JSON.parse(e.data)}catch(e){return a.default.error({error:e}),void this.emitter("error",{error:e})}t&&(a.default.debug("Event recd",t),this.emitter.emit("message",t))}},{key:"send",value:function(e,t,n){var i={event:e,data:t};this.channel&&(i.channel=n),a.default.debug("Event sent",i),this.socket.send(JSON.stringify(i))}}]),e}();t.default=l,e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(0),u=i(s),c=n(5),a=i(c),l=n(1),h=i(l),f=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,e),this.key=n,this.options=i,this.state="initialized",this.emitter=new u.default,this.reconnection=void 0===i.reconnection||i.reconnection,this.reconnectionDelay=void 0===i.reconnectionDelay?3e3:i.reconnectionDelay,this.retryMax=void 0===i.retryMax?Number.MAX_SAFE_INTEGER:i.retryMax,this.skipReconnect=!1,this.retryNum=0,this.connectionStartTimestamp=0,this.retryTimer=null,this.connection=new a.default(this.options),this.connection.bind("open",function(){t.connectionStartTimestamp=Date.now(),t.retryTimer&&(clearTimeout(t.retryTimer),t.retryNum=0,t.retryTimer=null),t.skipReconnect=!1,t.updateState("connected")}),this.connection.bind("message",function(e){t.emitter.emit("message",e)}),this.connection.bind("error",function(e){t.updateState("error",e)}),this.connection.bind("closed",function(e){var n=Date.now()-t.connectionStartTimestamp;n>0&&0!==t.connectionStartTimestamp&&(t.emitter.emit("@closed",Object.assign({},e,{session_time:n})),h.default.debug("Session Time: "+n+" ms"),t.connectionStartTimestamp=0),t.updateState("closed",e),t.retryIn(t.reconnectionDelay)})}return o(e,[{key:"retryIn",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.retryNum>=this.retryMax&&(this.disconnect(),this.emitter.emit("retryMax"),h.default.debug("Reconnect Max: ",this.retryNum)),this.reconnection&&!this.skipReconnect&&(this.retryTimer=setTimeout(function(){e.retryNum+=1,h.default.debug("Reconnect attempts: ",e.retryNum),e.connect(),e.emitter.emit("retry",{retry:e.retryNum})},t))}},{key:"bind",value:function(e,t){return this.emitter.on(e,t),this}},{key:"unbind",value:function(e,t){return this.emitter.removeListener(e,t),this}},{key:"unBindAll",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.emitter.removeAllListeners(t)}},{key:"connect",value:function(){this.updateState("connecting"),this.connection.connect(this.options.token),h.default.debug("Auth",{token:this.options.token})}},{key:"disconnect",value:function(){this.skipReconnect=!0,this.connection.close(),this.updateState("disconnected")}},{key:"updateState",value:function(e,t){var n=this.state;this.state=e,n!==e&&(h.default.debug("State changed","'"+n+"' -> '"+e+"'"),this.emitter.emit("state_change",{previous:n,current:e}),this.emitter.emit(e,t))}},{key:"send",value:function(e,t,n){return!!this.connection&&this.connection.send(e,t,n)}}]),e}();t.default=f,e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(0),u=i(s),c=n(6),a=i(c),l=n(4),h=i(l),f=n(1),d=i(f),v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,e),this.key=t,this.options=n,n.level&&d.default.setLevel(n.level),this.emitter=new u.default,this.channels=new h.default,this.connection=this.createConnection()}return o(e,[{key:"getAuthToken",value:function(){return this.options.token||""}},{key:"setAuthToken",value:function(e){e&&(this.options.token=e,this.connection.unBindAll(),this.connection.disconnect(),this.connection=new a.default(this.key,this.options),this.connection.connect())}},{key:"createConnection",value:function(){var e=this,t=new a.default(this.key,this.options);return t.bind("connected",function(){e.subscribeAll(),e.emitter.emit("connected")}),t.bind("message",function(t){if(t.channel){var n=e.channel(t.channel);n&&n.handleEvent(t.event,t.data)}e.emitter.emit(t.event,t.data),e.emitter.emit("*",t)}),t.bind("disconnected",function(){e.channels.disconnect(),e.emitter.emit("disconnected")}),t.bind("retry",function(t){e.emitter.emit("retry",t)}),t.bind("retryMax",function(){e.emitter.emit("retryMax")}),t.bind("@closed",function(t){e.emitter.emit("@closed",t)}),t.bind("closed",function(t){e.emitter.emit("closed",t)}),t.bind("error",function(e){d.default.error("Error",e)}),t}},{key:"channel",value:function(e){return this.channels.find(e)}},{key:"allChannel",value:function(){return this.channels.all()}},{key:"connect",value:function(){this.connection.connect()}},{key:"disconnect",value:function(){this.connection.disconnect()}},{key:"bind",value:function(e,t){return this.emitter.on(e,t),this}},{key:"unbind",value:function(e,t){return this.emitter.removeListener(e,t),this}},{key:"subscribe",value:function(e){var t=this.channels.add(e,this);return"connected"===this.connection.state&&t.subscribe(),t}},{key:"subscribeAll",value:function(){var e=this;this.channels.channels.forEach(function(t,n){e.subscribe(n)})}},{key:"unsubscribe",value:function(e){var t=this.channels.remove(e);t&&"connected"===this.connection.state&&t.unsubscribe()}},{key:"send",value:function(e,t,n){this.connection.send(e,t,n)}}]),e}();t.default=v,e.exports=t.default},function(e,t,n){!function(t,n){e.exports=n()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var o=n(1),s=i(o),u=function(){function e(){r(this,e)}return e.prototype.getLogger=function(e){var t=new s.default(e);return t},e}();t.default=new u,e.exports=t.default},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){return"string"==typeof e}function r(e,t){var n=""+e;return n.length>=t?n:r("0"+n,t)}function o(){var e=new Date;return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+r(e.getHours(),2)+":"+r(e.getMinutes(),2)+":"+r(e.getSeconds(),2)+":"+e.getMilliseconds()}t.__esModule=!0;var s=t.LEVEL_MAP={DEBUG:1,INFO:2,WARN:3,ERROR:4,FATAL:5},u=t.LEVEL_KEY={1:"DEBUG",2:"INFO",3:"WARN",4:"ERROR",5:"FATAL"},c=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?"LOG":arguments[0],i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];n(this,e),this.name=t,this.level=s[i.level]||s.INFO}return e.prototype.setLevel=function(e){s[e]&&(this.level=s[e])},e.prototype.debug=function(e){if(i(e)){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.write(s.DEBUG,e,n)}},e.prototype.info=function(e){if(i(e)){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.write(s.INFO,e,n)}},e.prototype.warn=function(e){if(i(e)){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.write(s.WARN,e,n)}},e.prototype.error=function(e){if(i(e)){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.write(s.ERROR,e,n)}},e.prototype.fatal=function(e){if(i(e)){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.write(s.FATAL,e,n)}},e.prototype.write=function(e,t,n){if(e>=this.level&&i(t)){var r=console[u[e].toLowerCase()]?console[u[e].toLowerCase()]:console.log;r.apply(void 0,["["+o()+"] ["+u[e]+"] "+this.name+" - "+t].concat(n))}},e}();t.default=c}])})},function(e,t,n){e.exports=n(2)}])});