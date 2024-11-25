function openSite() {
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
}
