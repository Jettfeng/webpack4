(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */
/***/ (function(module, exports) {

console.log('hello,this is xxFeng');

if ("serviceWorker" in navigator) {
  //如果浏览器 支持serviceWorker
  window.addEventListener("load", () => {
    //  页面加载完成
    navigator.serviceWorker.register("/service-worker.js").then(registration => {
      console.log("SW registered: ", registration);
    }).catch(registrationError => {
      console.log("SW registration failed: ", registrationError);
    });
  });
}

/***/ })
],[[0,1]]]);
//# sourceMappingURL=main.b15e6bc5520c7a3b1339.js.map