//extended css
tailwind.config = {
  theme: {
    extend: {
        
      colors: {
        clifford: '#da373d',
      }
    }
  }
}

// SplideJS scripts
document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    pagination: false,
    arrows: false,
    padding: '1rem'
  } );
  splide.mount();
} );

//navbar toggle
const toggleBtn = document.getElementById("menuToggle");
const menu = document.getElementById("navigation");
function menuToggle(){
  menu.name==="hidden"?(menu.classList.remove("hidden"),menu.name="visible"):(menu.classList.add("hidden"),menu.name="hidden");
}
  