var blog_link = document.getElementById('blog-link');
var header = document.getElementById('main-header');

blog_link.addEventListener('mouseenter', function() {
    header.innerHTML = 'Comming Soon';
});

blog_link.addEventListener('mouseleave', function() {
    header.innerHTML = 'Saša Savić';
});
