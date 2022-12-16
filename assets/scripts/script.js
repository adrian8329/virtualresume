function copyGmail(){
  var text = "adrian8329@gmail.com";
  navigator.clipboard.writeText(text);
  alert("E-mail address copied to clipboard!");
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slid");
  var z = document.getElementsByClassName("slid2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    z[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  z[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 3 seconds
}