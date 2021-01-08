<template>
<div class="container">
  <div class="text-center">
    <h2>jQuery: click outside to close menu</h2>
    <p>Click the button to toggle the dropodown menu.</p>
    <p>Then click outside dropdown menu to close.</p>
    <div class="dropdown">
      <a href="#" title="" class="btn btn-primary toggle">Toggle menu</a>
      <ul class="dropdown-menu list-group">
        <li class="list-group-item">List item 1</li>
        <li class="list-group-item">List item 2</li>
        <li class="list-group-item">List item 3</li>
      </ul>
    </div>  
  </div>
</div>
</template>

<script>
import $ from 'jquery'
export default {

}
const $menu = $('.dropdown');

$(document).mouseup(e => {
   if (!$menu.is(e.target) 
   && $menu.has(e.target).length === 0) 
   {
     $menu.removeClass('is-active');
  }
 });

$('.toggle').on('click', () => {
  $menu.toggleClass('is-active');
});

</script>

<style lang="css">
html {
  height: 100%;
}

body {
  background: #333;
  color: #FFF;
  display: flex;
  height: 100%;
}

.container {
  margin: auto;
  max-width: 768px;
}

.dropdown {
  position: relative;
}

.dropdown-menu {
  display: none;
}

.toggle, .dropdown-menu {
  width: 100%;
}

.is-active .dropdown-menu {
  display: block;
}
</style>