document.getElementById("hi").addEventListener("click", () => {
  document.getElementById("head").innerHTML += "Hi !";
});

document.getElementById("complex").addEventListener("click", () => {
  // console.log("hi")
  let calHead = document.getElementById("cal");

  let webworker = new Worker("webworker.js");
  webworker.postMessage("");

  webworker.onmessage = (e) => {
    console.log(e)
    calHead.innerHTML = e.data;
  };
  
});
