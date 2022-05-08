document.addEventListener("scroll", function (evt) {
    const scrollTop = evt.target.scrollingElement.scrollTop;
    if (scrollTop > 50) {
        document.querySelector("nav").classList.add("scrolled");
    } else {
        document.querySelector("nav").classList.remove("scrolled");
    }
});

new Glider(document.querySelector("#relatos #itens"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    duration: 0.25,
    arrows: {
        prev: "#relato_ant",
        next: "#relato_seg",
    },
    responsive: [
        {
            breakpoint: 775,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 4,
            },
        },
    ],
});

new Glider(document.querySelector("#porque #itens"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    duration: 0.25,
    arrows: {
        prev: "#porque_ant",
        next: "#porque_seg",
    },
    responsive: [
        {
            breakpoint: 775,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 4,
            },
        },
    ],
});


new Glider(document.querySelector("#como #itens"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    duration: 0.25,
    arrows: {
        prev: "#como_ant",
        next: "#como_seg",
    },
    responsive: [
        {
            breakpoint: 775,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            },
        }
    ],
});
