AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

})

let intro = document.querySelector('.intro')
    let logo = document.querySelector('.logo-header')
    let logoSpan = document.querySelectorAll('.logo')
    window.addEventListener('DOMContentLoaded',()=>{
      setTimeout(()=>{
        logoSpan.forEach((span,idx) => {
          setTimeout(()=>{
            span.classList.add('active')
        }, (idx+1)*400);
      });

      setTimeout(()=>{
        logoSpan.forEach((span,idx)=>{
          setTimeout(()=>{
            span.classList.remove('active');
            span.classList.add('fade');
          }, (idx+1)*50)
        })
      },2000);
      setTimeout(() => {
        intro.style.top= '-100vh'
      },2300);
    })
  })
  



  <!-------------------------------------------------------- ( Project) --------------------------------------------------------->

  $(document).ready(function() {
    // Move the "All" button to the top
    var $allButton = $('.portfolio-filters li[data-filter="*"]');
    var $otherButtons = $('.portfolio-filters li').not($allButton).get().reverse();

    // Empty the container and append the "All" button first, followed by the reversed other buttons
    $('.portfolio-filters').empty().append($allButton).append($otherButtons);

    // Initialize Isotope
    var $grid = $('.isotope-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'masonry'
    });

    // Filter items on button click
    $('.portfolio-filters').on('click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // Change active class on filter buttons
    $('.portfolio-filters li').on('click', function() {
        $('.portfolio-filters li').removeClass('active');
        $(this).addClass('active');
    });
});


  
// jQuery is required for this script
$(document).ready(function () {
  // Cache selectors
  var topMenu = $(".navbar"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find(".nav-link"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });

  // Bind to scroll
  $(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop) return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    // Set/remove active class
    menuItems
      .parent()
      .removeClass("active")
      .end()
      .filter("[href='#" + id + "']")
      .parent()
      .addClass("active");
  });
});






// JavaScript for Lightbox functionality
document.querySelectorAll('.image-link').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    const imageSrc = this.getAttribute('data-image');
    document.getElementById('lightbox-img').src = imageSrc;
    document.getElementById('lightbox').style.display = 'flex';
  });
});

// Close the lightbox
document.getElementById('close-btn').addEventListener('click', function() {
  document.getElementById('lightbox').style.display = 'none';
});








