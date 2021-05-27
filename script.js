function loadJSON() {
  let newRequest = new XMLHttpRequest();
  newRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let myObj = JSON.parse(this.responseText);
      document.getElementById("est").innerHTML = "Name is:" + myObj.name;
      ("\n");
      document.getElementById("est").innerHTML = "Born in: " + myObj.birthday;
      ("\n");
      document.getElementById("est").innerHTML =
        "Here is a full bio: " + myObj.bio;
      ("\n");
    }
  };
  newRequest.open("GET", "enistein.json", true);
  newRequest.send();
}
