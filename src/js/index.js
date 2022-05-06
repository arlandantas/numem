document.addEventListener('scroll', function (evt) {
    const scrollTop = evt.target.scrollingElement.scrollTop
    if (scrollTop > 50) {
        document.querySelector('nav').classList.add('scrolled')
    } else {
        document.querySelector('nav').classList.remove('scrolled')
    }
    // console.log(evt);
    // console.log();
})