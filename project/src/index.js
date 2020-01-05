console.log('hello,this is xxFeng');

if ("serviceWorker" in navigator) {
  //如果浏览器 支持serviceWorker
  window.addEventListener("load", () => {
    //  页面加载完成
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(registration => {
        console.log("SW registered: ", registration);
      })
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
