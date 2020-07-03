$(function () {
    var rellax = new Rellax('.rellax', {
        speed: -2,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });
    $('.header-top-address-link').on('mouseover', () => {
        toggleMap()
    })
    $('.header-top-address-img').on('mouseover', () => {
        toggleMap()
    })
    $('#toggle-info').on('mouseover', () => {
        $('.header-content-inner-right-panel').show()
        $('.header-content-inner-right-panel').on('mouseleave', () => {
            $('.header-content-inner-right-panel').hide()
        })
    })
    $('.header-top-contacts-btn').on('click', () => {
        showForm()
    })
    $('.header-content-btn').on('click', () => {
        showForm()
    })
    $('.form-submit').on('click', (e) => {
        e.preventDefault()
        $('.popup').hide()
        $('.form-thanks-wrapper').show()
        $('.form-thanks-close').on('click', () => {
            $('.form-thanks-wrapper').hide()
        })
    })
    $('.mobile-menu-btn').on('click', ()=>{
        $('.mobile-menu').show(500)
        $('.mobile-menu-close').on('click', ()=>{
            $('.mobile-menu').hide(500)
        })
    })

});

function toggleMap() {
    $('.map').show()
    $('.map').on('mouseleave', () => {
        $('.map').hide()
    })
    $(document).on('click', (e) => {
        if (!$(e.target).hasClass('map') && !$(e.target).hasClass('header-top-address-link')) {
            $('.map').hide()
        }
    })
}

function showForm() {
    $('.popup').show()
    $('.popup-form-close').on('click', e => {
        e.preventDefault()
        $('.popup').hide()
    })
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            $('.popup').hide()
        }
    });
}