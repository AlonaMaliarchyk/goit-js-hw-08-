function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var r,i,o,a,f,u,l=0,c=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function x(e){return l=e,f=setTimeout(T,t),c?g(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-l>=o}function T(){var e=v();if(j(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-u);return d?m(n,o-(e-l)):n}(e))}function h(e){return f=void 0,p&&r?g(e):(r=i=void 0,a)}function w(){var e=v(),n=j(e);if(r=arguments,i=this,u=e,n){if(void 0===f)return x(u);if(d)return f=setTimeout(T,t),g(u)}return void 0===f&&(f=setTimeout(T,t)),a}return t=y(t)||0,b(n)&&(c=!!n.leading,o=(d="maxWait"in n)?s(y(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=u=i=f=void 0},w.flush=function(){return void 0===f?a:h(v())},w}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};const g={form:document.querySelector(".feedback-form "),email:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")};g.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===g.email.value||""===g.textarea.value)return alert("Not all fields are filled");console.log({Email:g.email.value,message:g.textarea.value}),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()})),g.form.addEventListener("input",e(t)((function(e){x.email=g.email.value,x.message=g.textarea.value,localStorage.setItem("feedback-form-state",JSON.stringify(x))}),500));let x={};
//# sourceMappingURL=03-feedback.6d58eeec.js.map