
// document.querySelectorAll("[data-swiper-init]").forEach(elSwiper => {

//     let isLoop = elSwiper.hasAttribute("data-swiper-loop");
//     let isCenteredSlides = elSwiper.hasAttribute("data-swiper-centered");
//     let pagination = elSwiper.hasAttribute("data-swiper-pagination") ? JSON.parse(elSwiper.getAttribute("data-swiper-pagination")) : false;
//     let nextBtn = elSwiper.hasAttribute("data-swiper-next") ? elSwiper.getAttribute("data-swiper-next") : false;
//     let prevBtn = elSwiper.hasAttribute("data-swiper-prev") ? elSwiper.getAttribute("data-swiper-prev") : false;
//     let breakpoints = "";
//     if (elSwiper.hasAttribute("data-swiper-breakpoints")) {
//         array = JSON.parse(elSwiper.getAttribute("data-swiper-breakpoints"));
//         let len = array.length - 1;
//         array.forEach((e, key) => {
//             [media, perSlide, spacing] = e;
//             breakpoints += `"${media}": {"slidesPerView": ${perSlide},"spaceBetween": ${spacing}}${len != key ? "," : ""}`;
//         });
//         breakpoints = JSON.parse("{" + breakpoints + "}");
//     } else {
//         breakpoints = null;
//     }

//     var newSwiper = new Swiper(elSwiper, {
//         loop: isLoop,
//         loopFillGroupWithBlank: true,
//         centeredSlides: isCenteredSlides,
//         breakpoints: breakpoints,
//         pagination: pagination,
//         navigation: {
//             nextEl: nextBtn,
//             prevEl: prevBtn,
//         },
//     });
// });


document.querySelectorAll("[data-swiper-init]").forEach(elSwiper => {

    let isLoop = elSwiper.hasAttribute("data-swiper-loop");
    let isCenteredSlides = elSwiper.hasAttribute("data-swiper-centered");
    let pagination = elSwiper.hasAttribute("data-swiper-pagination") ? JSON.parse(elSwiper.getAttribute("data-swiper-pagination")) : false;
    let nextBtn = elSwiper.hasAttribute("data-swiper-next") ? elSwiper.getAttribute("data-swiper-next") : false;
    let prevBtn = elSwiper.hasAttribute("data-swiper-prev") ? elSwiper.getAttribute("data-swiper-prev") : false;
    let autoplay = elSwiper.hasAttribute("data-auto-play") ? Number(elSwiper.getAttribute("data-auto-play")) : false;
    let freeMode = elSwiper.hasAttribute("data-free-mode") ? true : false;
    let breakpoints = "";
    if (elSwiper.hasAttribute("data-swiper-breakpoints")) {
        array = JSON.parse(elSwiper.getAttribute("data-swiper-breakpoints"));
        let len = array.length - 1;
        array.forEach((e, key) => {
            [media, perSlide, spacing] = e;
            breakpoints += `"${media}": {"slidesPerView": ${perSlide},"spaceBetween": ${spacing}}${len != key ? "," : ""}`;
        });
        breakpoints = JSON.parse("{" + breakpoints + "}");
    } else {
        breakpoints = null;
    }

    var newSwiper = new Swiper(elSwiper, {
        loop: isLoop,
        loopFillGroupWithBlank: true,
        freeMode: freeMode,
        centeredSlides: isCenteredSlides,
        breakpoints: breakpoints,
        pagination: pagination,
        navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
        },
        //on: {
        //    click(event) {
        //        console.log('event.target', this.clickedIndex);
        //        newSwiper.slideTo(this.clickedIndex);
        //    },
        //},
        autoplay: autoplay ? {
            delay: autoplay,
        } : false,
    });
    if (elSwiper.hasAttribute("data-variable-select")) {
        swiperProduct = newSwiper;
    }
});


// <div class="swiper swiperTests" data-swiper-init data-swiper-loop data-swiper-centered
// data-swiper-breakpoints='[[768,3,50],[1024,3,40]]'
// data-swiper-pagination='{"el":".swiper-pagination","clickable":true}' data-swiper-next=".next"
// data-swiper-prev=".prev" data-auto-play="4000">
// <div class="swiper-wrapper">
//     <div class="swiper-slide">
//         <div class=" box">sadsad</div>
//     </div>
//     <div class="swiper-slide">
//         <div class=" box">sadsad</div>
//     </div>
//     <div class="swiper-slide">
//         <div class=" box">sadsad</div>
//     </div>
//     <div class="swiper-slide">
//         <div class=" box">sadsad</div>
//     </div>
//     <div class="swiper-slide">
//         <div class=" box">sadsad</div>
//     </div>
// </div>
// <div class="swiper-pagination"></div>
// <div>
//     <span class="bg-primary prev">qwewqe</span>
//     <span class="bg-primary next">qwewqe</span>
// </div>
// </div>