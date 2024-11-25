function openSite() {
  alert("After 4 seconds, a prompt will show up prompting you if you want to leave the page. Click no, and if it prompts again, click 'prevent this page from making additional dialogues', then click cancel again.");
  setTimeout((function(){
  var url = prompt("Enter a URL (include https://)");
  var iframe = document.createElement("iframe");
  iframe.style.margin = "0px";
  iframe.style.border = "0px";
  iframe.style.height = "100%";
  iframe.style.width = "100%";
  document.body.style.height = "100vh";
  document.body.style.width = "100%";
  document.body.innerHTML = "";
  document.body.appendChild(iframe);
  }), 4000);
}
