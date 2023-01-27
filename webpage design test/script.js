let toggler = document.querySelector(".toggler")
let cartmenu = document.querySelector(".side-menu")

let bag = document.querySelector(".bag-icon-div")

bag.onclick = () => {
    cartmenu.classList.remove("remove");
    cartmenu.classList.remove("d-none");
    cartmenu.classList.add("active");
   
}

toggler.onclick = () => {
    cartmenu.classList.remove("active");
    cartmenu.classList.add("remove");
}

document.addEventListener("DOMContentLoaded", function () {
  
  const heroSlider = new Splide('.splide',{
    arrows : false,
     perPage:2,
     type:'loop',
     gap:'0rem',
     // focus:'center',
     pagination:false,
     
   })
   heroSlider.mount();
 }
)


// var splide = new Splide ('.splide', {

//     perPage: 3,
//     gap : '2rem',

//     breakpoints: {

//         640: {
//             perPage: 2,
//             gap : '2rem',
//             height: '4rem',
//         },
//         480: {
//             perPage: 2,
//             gap : '0.5rem',
//             height: '4rem',
//         },
//     }
// })

// document.addEventListener( 'DOMContentLoaded', function() {
//     var splide = new Splide( '.splide' );
//     splide.mount();
//   } );

//   var elms = document.getElementsByClassName( 'splide' );

// for ( var i = 0; i < elms.length; i++ ) {
//   new Splide( elms[ i ] ).mount();
// }

// document.addEventListener( 'DOMContentLoaded', function() {
// var splide = new Splide( '.splide', {


// perPage: 2,
// gap : '0.3rem',
// type : 'loop',
// arrows : true,

// breakpoints: {
//     1200: { perPage: 2, gap: '1rem' },
//     640 : { gap: 0 },
//   },
// } );
// splide.mount();
// } );

const splide = new Splide ('.splide',{


  
  perPage : 2,
   
   

})

splide.mount();