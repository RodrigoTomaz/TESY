$(function() {
    // *** HeaderNav Effects *** // 

    const BtnNav = $('.btn-navbar');

    BtnNav.click((event) => fnToggleNav(event));

    function fnToggleNav(event){
        const HeaderNav = $('.header-nav');

        if(event){
            HeaderNav.toggleClass('d-flex');
            HeaderNav.toggleClass('d-none');
        }
    }
    
    // *** Effect Remove Blur Header *** //

    $('main').click(() => {
        if($('.header-nav[class*="d-flex"]')){
            $('.header-nav').addClass('d-none');
            $('.header-nav').removeClass('d-flex');
        }
    })

    // *** Effect ClickScrolled Page *** //

    const Scrolled = $('.scrolled a[href^="#"');

    Scrolled.each(function(){
        $(this).click((event) => onClickStrolled(event));
    });

    function onClickStrolled(event) { 
        event.preventDefault();

        const EventTarget = event.target;
        const Href = EventTarget.getAttribute('href');
        const SectionRefers = document.querySelector(Href);
        const HeightSectionRefers = SectionRefers.offsetTop - 60;

        this.scroll({
            top: HeightSectionRefers,
            behavior: "smooth"
        })

        const HeaderNav = $('.header-nav');

        if(event){
            HeaderNav.removeClass('d-flex');
            HeaderNav.addClass('d-none');
        }
    }

    // *** Effect Buttom Whatsapp *** //

    const BtnWhatapp = $('.btn-whats');

    $(window).scroll(() => {
        window.scrollY > 100 
        ? BtnWhatapp.addClass('animation').removeClass('actived') 
        : BtnWhatapp.addClass('actived').removeClass('animation');
    });

    // *** Effect EventScroll Page *** //

    const Observed = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        })
    })
    
    const EffectElement = document.querySelectorAll('.effect');
    EffectElement.forEach((element) => Observed.observe(element));

    // *** Gallery  Effect*** //

    $(".thumbnail").viewbox({
        imageExt: ["png", "jpg", "jpeg", "webp", "gif"]
    });
})

