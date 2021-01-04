// bodymovin.loadAnimation({
//   container: document.getElementById('vocabulary-animation-hero'), // Required
//   path: '/lottie/data.json', // Required
//   renderer: 'svg', // Required
//   loop: true, // Optional
//   autoplay: true, // Optional
//   name: "Vocabulary animation hero" // Name for future reference. Optional.
// })

$(window).on("load", function() {
  $(".twenty-slider").twentytwenty({
    default_offset_pct: 0.4, // How much of the before image is visible when the page loads
    orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
    before_label: 'Before', // Set a custom before label
    after_label: 'After', // Set a custom after label
    no_overlay: true, //Do not show the overlay with before and after
    move_slider_on_hover: false, // Move slider on mouse hover?
    move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement. 
    click_to_move: true // 
  });
});

function handleOutboundLinkClicks(event) {
  ga('send', 'event', {
    eventCategory: 'Outbound Link',
    eventAction: 'click',
    eventLabel: Blogengagement.target.href
  });
}


$(".subscribe-btn-navbar").click( function() {
    ga('send', 'event', 'Blog engagement', 'Subscribe', '{{clicked_page}}');
});

$(".ga-menu-projects").click( function() {
    ga('send', 'event', 'Navigation', 'Projects', 'Navbar');
});
$(".ga-menu-about").click( function() {
    ga('send', 'event', 'Navigation', 'About', 'Navbar');
});
$(".ga-menu-journal").click( function() {
    ga('send', 'event', 'Navigation', 'Journal', 'Navbar');
});

// Footer
$(".ga-rss-footer").click( function() {
    ga('send', 'event', 'Outbound link', 'RSS', 'footer');
});
$(".ga-email-footer").click( function() {
    ga('send', 'event', 'Outbound link', 'Email', 'footer');
});
$(".ga-twitter-footer").click( function() {
    ga('send', 'event', 'Outbound link', 'Twitter', 'footer');
});
$(".ga-linkedin-footer").click( function() {
    ga('send', 'event', 'Outbound link', 'Linkedin', 'footer');
});

// Blog
$(".ga-ask-question").click( function() {
    ga('send', 'event', 'Blog engagement', 'Ask question', 'Blog post');
});
$(".ga-newsletter").click( function() {
    ga('send', 'event', 'Blog engagement', 'Subscribe', 'Blog post');
});
$(".ga-twitter-blog-post").click( function() {
    ga('send', 'event', 'Share', 'Twitter', 'Blog post');
});
$(".ga-facebook-blog-post").click( function() {
    ga('send', 'event', 'Share', 'Facebook', 'Blog post');
});

