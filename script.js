document.getElementById('scroll-btn').addEventListener('click', function() {
    document.getElementById('courses').scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});
