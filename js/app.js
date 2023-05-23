let keyCode = {
    rightKey: 39, enterKey: 13, backKey: 166, leftKey: 37, downKey: 40, upKey: 38, escKey: 27,
};


$(document).ready(function () {

    let currentPage = 1

    $(document).on('keydown', function (e) {
        let focusedButton = $(".glowing-button");

        switch (e.keyCode || e.which) {
            case keyCode.rightKey:
                e.preventDefault();
                break;
            case keyCode.leftKey:
                e.preventDefault();
                break;
            case keyCode.upKey:
                if (currentPage > 1) currentPage--
                e.preventDefault();
                break;
            case keyCode.downKey:
                if ($("#" + (currentPage + 1)).length > 0)
                    currentPage++
                e.preventDefault();
                break;
            case keyCode.enterKey:
                focusedButton.click()
                break;
            case keyCode.backKey:
                e.preventDefault();
                break;
            case keyCode.escKey:
                e.preventDefault();
                break;
        }

        focusedButton.removeClass("glowing-button")

        let buttonToFocus = $("#download-button-" + (currentPage));

        if (buttonToFocus.length > 0)
            buttonToFocus.addClass("glowing-button")

        let scrollToPos = 0

        if (currentPage > 3 && currentPage < 6)
            scrollToPos = $("#" + currentPage).offset().top - 70
        else
            scrollToPos = $("#" + currentPage).offset().top

        $('html, body').animate({
            scrollTop: scrollToPos
        }, 200);

    });


    $("#download-button-3").on("click", function () {
        window.open("app://store.huma.ir?packageName=com.aquiris.horizonchase")
    });

    $("#download-button-4").on("click", function () {
        window.open("app://store.huma.ir?packageName=com.playdead.limbo.full")
    });

    $("#download-button-5").on("click", function () {
        window.open("app://store.huma.ir?packageName=com.tcade.tvcadegp")
    });

    $("#download-button-6").on("click", function () {
        window.open("app://store.huma.ir?packageName=com.craneballs.bombhunter")
    });


    let scale =1 - ((960 / screen.width) * 100) / 100

    // Store the meta element
    let viewport_meta = $('#viewport-meta');

// Define our viewport meta values
    let viewports = {
        default: viewport_meta.attr('content'),
        landscape: 'width=device-width, user-scalable=no, initial-scale=' + (1 + scale) + ', maximum-scale=' + (1 + scale) + ', minimum-scale=' + (1 + scale)
    };

    // alert(viewports.default)

// Change the viewport value based on screen.width
    let viewport_set = function () {
        if (screen.width > 960)
            viewport_meta.attr('content', viewports.landscape);
        else
            viewport_meta.setAttribute('content', viewports.landscape);
    }

// Set the correct viewport value on page load
    viewport_set();

// Set the correct viewport after device orientation change or resize
    window.onresize = function () {
        viewport_set();
    }

})

