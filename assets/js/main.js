// Header ve footer load işlemi
$(document).ready(function () {

    // Transition kısmını engellemeye yarıyor.
    $("body").addClass("page-loaded");
    $("#header").load("header.html");
    $("#footer").load("footer.html");

    $("#sendMail").submit(function (e) {
        e.preventDefault();

        try {

            $(this).find("input,textarea").each(function (index, element) {
                if (element.type != "hidden") {
                    if ($(element).val().length <= 0 && element.id != "phoneField1") {
                        console.log(element);
                        Swal.fire({
                            icon: 'error',
                            title: 'All fields are required to be filled.',
                            text: ''
                        });
                        throw new Error("All fields are required to be filled.");
                    }
                }

            });

            var formData = $(this).serialize();
            $.ajax({
                type: "POST",
                url: "contact.php",
                data: formData,
                success: function (response) {
                    if (response == "success") {

                        Swal.fire({
                            icon: 'success',
                            title: 'Your message has been sent.',
                            text: ''
                        });
                        $('#sendMail')[0].reset();

                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'All fields are required to be filled.',
                        })

                    }
                }
            });

        } catch (error) {

        }
    });

    const heroWrap = document.querySelectorAll('.hero-animation-wrap');

    heroWrap.forEach((heroWrap) => {
        heroWrap.addEventListener('mousemove', (event) => {
            // const mouseX = event.clientX - heroWrap.getBoundingClientRect().left;
            // const mouseY = event.clientY - heroWrap.getBoundingClientRect().top;

            // console.log(`Mouse coordinates within .hero-animation-wrap: X=${mouseX}, Y=${mouseY}`);
            // let image = document.documentElement(heroWrap);

            // console.log(image);
            const boundingRect = heroWrap.getBoundingClientRect();
            const mouseXPercentage = ((event.clientX - boundingRect.left) / boundingRect.width) * 100;
            const mouseYPercentage = ((event.clientY - boundingRect.top) / boundingRect.height) * 100;
            $(heroWrap).find('.back-img').css({
                'transform': `translate(${mouseXPercentage}px, ${mouseYPercentage}px)`
            });
        });
    });
});


$(document).on("click", ".mobile-menu", function (event) {
    event.preventDefault();
    $(".mobile-header").toggleClass("active");
});
$(document).on("click", ".closer-btn", function (event) {
    event.preventDefault();
    $(".mobile-header").removeClass("active");
});

$(".accordion .acc-title").click(function (e) {
    e.preventDefault();

    $(this).parent().toggleClass("active");
    $(this).parent().find(".acc-desc").slideToggle();

    $(".accordion .acc-title").not(this).parent().removeClass("active");
    $(".accordion .acc-title").not(this).parent().find(".acc-desc").slideUp();

});

//#####Swiper Örneği######

// var announcementSwiper = new Swiper(".announcementSwiper", {
//     slidesPerView: 3,
//     spaceBetween: 20,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     centeredSlides: true,
//     breakpoints: {

//         768: {
//             slidesPerView: 3,
//             spaceBetween: 50,
//         },
//         1024: {
//             slidesPerView: 3,
//             spaceBetween: 50,
//         },
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".announcementSwiper-button-next",
//         prevEl: ".announcementSwiper-button-prev",
//     },
// });

