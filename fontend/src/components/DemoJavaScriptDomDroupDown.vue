<template>
  <div>
    <h2>Clickable Dropdown</h2>
    <p>Click on the button to open the dropdown menu.</p>

    <div class="dropdown">
      <button onclick="myFunction()" class="dropbtn">Dropdown</button>
      <div id="myDropdown" class="dropdown-content">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <nav class="navbar navbar-expand-lg fixed-top row">
        <router-link tag="li" class="col" class-active="active" to="/home.html" exact
          >TIME</router-link
        >
        <router-link tag="li" class="col" class-active="active" to="/new.html" exact
          >CNN</router-link
        >
        <router-link
          tag="li"
          class="col"
          class-active="active"
          to="/demodom"
          exact
          >TechCrunch</router-link
        >
        <router-link
          tag="li"
          class="col"
          class-active="active"
          to="/BBCSport"
          exact
          >BBC Sport</router-link
        >
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
// eslint-disable-next-line no-unused-vars
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
</script>

<style lang="css">
.dropbtn {
  background-color: #3498db;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropbtn:hover,
.dropbtn:focus {
  background-color: #2980b9;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {
  background-color: #ddd;
}

.show {
  display: block;
}

nav li:hover,
nav li:active {
  background-color: indianred;
  cursor: pointer;
}
.router-link-exact-active{
  background-color: indianred;
}
</style>