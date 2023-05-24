"use strict";
$(function () {
    const Pages = {
        Home: 1,
        Lottery: 2,
        Game_HorizonChase: 3,
        Game_Limbo: 4,
        Game_60Games: 5,
        Game_BombHunters: 6,
    }

    let keyCode = {
        rightKey: 39, enterKey: 13, backKey: 166, leftKey: 37, downKey: 40, upKey: 38, escKey: 27,
    };

    const getPageName = function (page) {
        switch (page) {
            case Pages.Home:
                return "Home";
            case Pages.Lottery:
                return "Lottery";
            case Pages.Game_HorizonChase:
                return "Game_HorizonChase";
            case Pages.Game_Limbo:
                return "Game_Limbo";
            case Pages.Game_60Games:
                return "Game_60Games";
            case Pages.Game_BombHunters:
                return "Game_BombHunters";
        }
    }

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
                if ($("#" + (currentPage + 1)).length > 0) {
                    currentPage++
                    analytic.logEvent("page_scroll", {name: getPageName(currentPage)})
                }
                e.preventDefault();
                break;
            case keyCode.enterKey:
                focusedButton.trigger("click")
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

        let scrollToPos

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
        analytic.logEvent("button_clicked", {name: getPageName(currentPage)})
    });

    $("#download-button-4").on("click", function () {
        window.open("app://store.huma.ir?packageName=com.playdead.limbo.full")
        analytic.logEvent("button_clicked", {name: getPageName(currentPage)})
    });

    $("#download-button-5").on("click", function () {
        window.open("app://store.huma.ir?packageName=com.tcade.tvcadegp")
        analytic.logEvent("button_clicked", {name: getPageName(currentPage)})
    });

    $("#download-button-6").on("click", function () {
        window.open("app://store.huma.ir?packageName=com.craneballs.bombhunter")
        analytic.logEvent("button_clicked", {name: getPageName(currentPage)})
    });


    let scale = 1 - ((960 / screen.width) * 100) / 100
    let viewport_meta = $('#viewport-meta');
    let viewports = {
        default: viewport_meta.attr('content'),
        landscape: 'width=device-width, user-scalable=no, initial-scale=' + (1 + scale) + ', maximum-scale=' + (1 + scale) + ', minimum-scale=' + (1 + scale)
    };
    let viewport_set = function () {
        if (screen.width > 960) viewport_meta.attr('content', viewports.landscape);
        else viewport_meta.attr('content', viewports.default);
    }
    viewport_set();
    window.onresize = function () {
        viewport_set();
    }


    const firebaseConfig = {
        apiKey: "AIzaSyCQ0cVM68wakYy1WjkIij2ATtGBTEIRUYc",
        authDomain: "humastore-4612c.firebaseapp.com",
        databaseURL: "https://humastore-4612c.firebaseio.com/",
        projectId: "humastore-4612c",
        storageBucket: "humastore-4612c.appspot.com",
        messagingSenderId: "107295737637",
        appId: "1:107295737637:web:f99c3ad0c3cd26ad5a3ccc",
        measurementId: "G-HERGWN5S2M"
    };
    firebase.initializeApp(firebaseConfig);
    const analytic = firebase.analytics();

    let currentPage = Pages.Home
    console.log(getPageName(currentPage))
    analytic.logEvent("page_scroll", {name: getPageName(currentPage)})



})

