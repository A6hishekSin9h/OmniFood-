jQuery(document).ready(function(){
   
    
/*---------------- For the sticky navigation-----------------------*/  
    
jQuery('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            jQuery('nav').addClass('sticky');
        } else{
            
            jQuery('nav').removeClass('sticky');
        }
        
    }, {
  offset: '60px;'
});
    
    
    
 /*----------------------Scroll on buttons-----------------*/   
    
    jQuery('.js--scroll-to-plans').click(function () {
       jQuery('html, body').animate({scrollTop: jQuery('.js--section-plans').offset().top}, 1000);
        
    });
    
    jQuery('.js--scroll-to-start').click(function () {
       jQuery('html, body').animate({scrollTop: jQuery('.js--section-features').offset().top}, 1000);
        
    });
    
  /*----------------------Navigation scroll-----------------*/
    
  jQuery(function() {
      jQuery('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = jQuery(this.hash);
          target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            jQuery('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /*--------Animatons on Scroll-----------------*/
    
    jQuery('.js--wp-1').waypoint(function(direction) {
        jQuery('.js--wp-1').addClass('animate_animated animate_fadeIn');
        
    }, {
        offset: '50%'
    });
    
    jQuery('.js--wp-2').waypoint(function(direction) {
        jQuery('.js--wp-2').addClass('animate_animated animate_fadeInUp');
        
    }, {
        offset: '50%'
    });
    
    jQuery('.js--wp-3').waypoint(function(direction) {
        jQuery('.js--wp-3').addClass('animate_animated animate_fadeIn');
        
    }, {
        offset: '50%'
    });
    
    jQuery('.js--wp-4').waypoint(function(direction) {
        jQuery('.js--wp-4').addClass('animate_animated animate__pulse');
        
    }, {
        offset: '50%'
    });
    
    /*------------------Mobile nav---------------------*/
    
    jQuery('.js--nav-icon').click(function() {
        var nav = jQuery('.js--main-nav');
        var icon = jQuery('.js--nav-icon ion-icon')
        nav.slideToggle(200);
        if (icon.hasClass('menu-outline')) {
            icon.addClass('close');
            icon.removeClass('menu-outline');
        } else {
            icon.addClass('menu-outline');
            icon.removeClass('close-outline');
             } 
    });
    
});