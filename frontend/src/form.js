import Form from "./js/comp/Form";
import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";



function initApp (){
  const wrapper = document.getElementById("container")
  if (!wrapper) {
    console.error("Error! No wrapper element found in DOM!");
    return;
  }
  const root = ReactDOM.createRoot(wrapper);
  root.render(
    <RecoilRoot>
        <Form/>
    </RecoilRoot>
  );
}

window.addEventListener("load", function () {
  const observer = new MutationObserver(() => {
    const wrapper = document.getElementById("container")
    console.log(
      "testing..wrapper",
      document.getElementById("container")
    )
    if(wrapper){
      initApp()
      observer.disconnect()
    }
  })
  observer.observe(document.body, { childList: true, subtree: true });
})