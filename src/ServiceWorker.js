
export function swReg() {
  const swURI = `${process.env.PUBLIC_URL}/sw.js`;
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(swURI).then(function (res) {
      console.log("Service Worker Registered Successfully", res.scope);
    }).catch(function (error) {
      console.log({ error });
    })
  } else {
    console.log("Service Worker not Available");
  }
}