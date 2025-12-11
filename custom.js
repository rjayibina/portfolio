//sticky header functionality
window.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header');
    
    if (window.scrollY > 0) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
});