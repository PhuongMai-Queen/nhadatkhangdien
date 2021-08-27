function iOSversion() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        var e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3] || 0, 10)]
    }
}

function changeUrl(e, o, t, i, n, a, s) {
    if (void 0 !== window.history.pushState) {
        var r = document.URL;
        r != e && "" != e && window.history.pushState({
            path: e,
            dataName: n,
            title: o,
            keyword: i,
            description: t,
            titleog: a,
            descriptionog: s
        }, "", e)
    }
    "" != o && ($("#hdtitle").html(o), $('meta[property="og:description"]').remove(), $("#hdtitle").after('<meta property="og:description" content="' + s + '">'), $('meta[property="og:title"]').remove(), $("#hdtitle").after('<meta property="og:title" content="' + a + '">'), $('meta[property="og:url"]').remove(), $("#hdtitle").after('<meta property="og:url" content="' + e + '">'), $("meta[name=keywords]").remove(), $("#hdtitle").after('<meta name="keywords" content="' + i + '">'), $("meta[name=description]").remove(), $("#hdtitle").after('<meta name="description" content="' + t + '">')), $("#changlanguage_redirect").val(e)
}

function ResizeWindows() {
    var e, o, t = ($(window).height() > $(window).width(), $(window).height() <= $(window).width()),
        i = ($(".bg-home img"), $(window).width()),
        n = $(window).height(),
        a = n / i,
        s = .547,
        r = n / 1350,
        l = i / 1600;
    if (a > s ? (o = n, e = n / s) : (o = i * s, e = i), (isIE11 || isIE10 || isIE9) && $(".subscribe-icon a, .go-page a").css({
            background: "none"
        }), $(".go-top").css({
            display: "none",
            opacity: 0
        }), 1100 >= i) {
        if ($(".scroll-down").css({
                opacity: 1
            }), 1 == t ? ($(".slide-pics, .bg-cover").css({
                height: i * s
            }), $(".bg-degree iframe").css({
                width: i,
                height: i * s
            })) : ($(".slide-pics, .bg-cover").css({
                height: (i + 200) * s
            }), n > 850 ? $(".bg-degree iframe").css({
                width: i,
                height: (i + 300) * s
            }) : $(".bg-degree iframe").css({
                width: i,
                height: n - 150
            })), $("#degree-page").length) {
            var c = $(".container").outerHeight();
            n > 850 && n + 150 > c && $(".hotline").addClass("active")
        }
        $(".scrollA, .scrollB,.scrollC").getNiceScroll().remove(), $(".scrollA,  .scrollB, .scrollC").css({
            height: "auto"
        }), $(".scrollA").css({
            height: "auto",
            "padding-right": 0
        }), $(".sub-news").css({
            top: $(".bg-cover").height() - 70
        }), $(".facilities-map").css({
            height: $(".facilities-bg").height() * l
        }), $(".house-map").css({
            height: $(".house-bg").height() * l
        }), $(".facilities-bg, .all-dot").scale(l), $(".house-bg").scale(l), $(".house-bg").css({
            left: i / 2 - 1170,
            top: $(".house-map").height() / 2 - 675
        }), $(".facilities-bg, .all-dot").css({
            left: i / 2 - 1200,
            top: $(".facilities-map").height() / 2 - 675
        }), $(".house").css({
            height: $(".house-map").height()
        }), 740 >= i ? $(".news-text img, .house-pic img").addClass("zoom-pic") : $(".news-text img, .house-pic img").removeClass("zoom-pic")
    } else i > 1100 && ($(".scroll-down").css({
        opacity: 0
    }), $(".sub-news").css({
        top: "50%"
    }), $(".bg-degree iframe").css({
        width: i,
        height: n
    }), $(".bg-cover, .slide-pics,  .house").css({
        height: n
    }), $(".house-map, .facilities-map").css({
        width: "100%",
        height: n
    }), $(".facilities-bg, .all-dot, .house-bg").scale(r), $(".house-bg").css({
        left: i / 2 - 1200,
        top: n / 2 - 675
    }), $(".facilities-bg, .all-dot").css({
        left: i / 2 - 1200,
        top: n / 2 - 675
    }), $(".content-text").each(function(e, o) {
        var t = $(o).find(".scrollA").innerHeight();
        t >= n - 250 ? $(o).find(".scrollA").css({
            height: n - 250,
            "padding-right": 30
        }) : $(o).find(".scrollA").css({
            height: "auto",
            "padding-right": 0
        })
    }), $(".scrollB").css({
        height: n - 130
    }), $(".scrollC").css({
        height: n - 60
    }), $(".news-text img, .house-pic img").removeClass("zoom-pic"))
}

function initialize() {
    function e() {
        r.setAnimation(google.maps.Animation.BOUNCE)
    }

    function o() {
        r.setAnimation(null)
    }

    function t() {
        o();
        var e = document.createElement("div");
        e.innerHTML = "<div class='infobox'><img src='" + infoboximage_distribution + "'  alt='" + infoboxtitle_distribution + "' ><h3> " + infoboxtitle_distribution + "</h3><p>" + a + " " + infoboxaddress_distribution + "<br>" + n + " " + infoboxphone_distribution + "<br></p></div>";
        var t = {
                content: e,
                disableAutoPan: !0,
                maxWidth: 250,
                pixelOffset: new google.maps.Size(-125, -150),
                boxStyle: {
                    background: "transparent",
                    opacity: 1,
                    width: "300px"
                },
                closeBoxMargin: "0",
                closeBoxzIndex: "99999",
                closeBoxPosition: "absolute",
                closeBoxURL: i + "default/images/close3.png",
                infoBoxClearance: new google.maps.Size(1, 1),
                isHidden: !1,
                pane: "floatPane",
                enableEventPropagation: !0
            },
            s = new InfoBox(t);
        s.open(h, r)
    }
    var i = ($(".httpserver").text(), $(".httptemplate").text()),
        n = ($(".infobox-text-email").text(), $(".infobox-text-tel").text()),
        a = ($(".infobox-text-fax").text(), $(".infobox-text-address").text()),
        a = $(".infobox-text-address").text();
    infoboxaddress_distribution = $(".infobox-address").text(), infoboxlocationlat_distribution = $(".infobox-location-lat").text(), infoboxlocationlng_distribution = $(".infobox-location-lng").text(), infoboximage_distribution = $(".infobox-image").text(), infoboximageicon_distribution = $(".infobox-image-icon").text(), infoboxgooglemap_distribution = $(".infobox-googlemap").text(), infoboxtitle_distribution = $(".infobox-name").text(), infoboxphone_distribution = $(".infobox-phone").text(), infoboxfax_distribution = $(".infobox-fax").text(), infoboxphonetel_distribution = $(".infobox-phone-tel").text(), infoboxemail_distribution = $(".infobox-email").text();
    var s = new google.maps.LatLng(infoboxlocationlat_distribution, infoboxlocationlng_distribution),
        r = null,
        l = [{
            elementType: "geometry",
            stylers: [{
                hue: "#ec6e04"
            }, {
                saturation: 0
            }, {
                lightness: 0
            }, {
                gamma: 1
            }, {
                visibility: "simplified"
            }]
        }, {
            elementType: "labels.icon",
            stylers: [{
                hue: "#ec6e04"
            }]
        }, {
            elementType: "labels.text.fill",
            stylers: [{
                color: "#999999"
            }]
        }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [{
                color: "#eeeeee"
            }]
        }, {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#999999"
            }]
        }, {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#666666"
            }]
        }, {
            featureType: "poi",
            elementType: "labels.text.stroke",
            stylers: [{
                hue: "#999999"
            }]
        }, {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{
                color: "#c9cdb1"
            }]
        }, {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#333333"
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{
                color: "#939598"
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#939598"
            }]
        }, {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#ffffff"
            }]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [{
                color: "#fbfbfb"
            }]
        }, {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#fbfbfb"
            }]
        }, {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#666666"
            }]
        }, {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{
                color: "#fbfbfb"
            }]
        }, {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#666666"
            }]
        }],
        c = new google.maps.StyledMapType(l, {
            name: "Styled Map"
        }),
        d = {
            center: s,
            zoom: 14,
            scrollwheel: !1,
            draggable: !0,
            draggingCursor: "move",
            noclear: !0,
            disableDefaultUI: !0,
            disableDoubleClickZoom: !0,
            clickableIcons: !1,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"],
                position: google.maps.ControlPosition.TOP_RIGHT
            }
        };
    google.maps.event.addDomListener(window, "resize", function() {
        google.maps.event.trigger(h, "resize"), h.setCenter(s), h.setZoom(15)
    });
    var h = new google.maps.Map(document.getElementById("map-canvas"), d);
    ({
        name: infoboxtitle_distribution
    });
    h.mapTypes.set("map_style", c), h.setMapTypeId("map_style");
    var m = i + "default/images/logomap.png";
    r = new google.maps.Marker({
        map: h,
        draggable: !1,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(infoboxlocationlat_distribution, infoboxlocationlng_distribution),
        icon: m
    }), $(window).width() > 1100 && (google.maps.event.addListener(r, "mouseover", e), google.maps.event.addListener(r, "mouseout", o)), google.maps.event.addListener(r, "click", t), ZoomControl(h)
}

function ZoomControl(e) {
    $(".zoom-control a").click(function() {
        var o = e.getZoom();
        switch ($(this).attr("id")) {
            case "zoom-in":
                e.setZoom(++o);
                break;
            case "zoom-out":
                e.setZoom(--o)
        }
        return !1
    })
}

function ZoomControl(e) {
    $(".zoom-control a").click(function() {
        var o = e.getZoom();
        switch ($(this).attr("id")) {
            case "zoom-in":
                e.setZoom(++o);
                break;
            case "zoom-out":
                e.setZoom(--o)
        }
        return !1
    })
}

function ScrollHoz() {
    var e = $(".news-list, .sub-news,.info-facilities");
    $(window).width() <= 1100 && ($(e).css({
        "overflow-x": "scroll",
        "overflow-y": "hidden",
        "-ms-touch-action": "auto",
        "-ms-overflow-style": "none",
        overflow: " -moz-scrollbars-none"
    }), $(e).animate({
        scrollLeft: "0px"
    }), 0 != TouchLenght && isTouchDevice || $(window).width() <= 1100 && ($(e).mousewheel(function(e, o) {
        e.preventDefault(), $(window).width() <= 1100 && (this.scrollLeft -= 40 * o)
    }), $(e).addClass("dragscroll"), $(".dragscroll").draptouch()))
}

function DrawLoad() {
    var e = $(".load-present"),
        o = $(e).find("path");
    $(o).each(function() {
        var e = this.getTotalLength();
        (isIE9 || isIE10 || isIE11 || isEdge) && ($(this).css({
            "stroke-dasharray": e + " " + e
        }), $(this).css({
            "stroke-dashoffset": e,
            "stroke-dasharray": e + " " + e
        }), $(this).stop().animate({
            "stroke-dashoffset": 0
        }, 1200, "linear", function() {
            $(this).stop().animate({
                "stroke-dashoffset": e
            }, 1200, "linear")
        }))
    }), setTimeout(function() {
        $(".loadicon").addClass("show")
    }, 500)
}


var ua = navigator.userAgent,
    match = ua.match("MSIE (.)"),
    versions = match && match.length > 1 ? match[1] : "unknown",
    isTouchDevice = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints > 0,
    isDesktop = 0 != $(window).width() && !isTouchDevice,
    IEMobile = ua.match(/IEMobile/i),
    isIE9 = /MSIE 9/i.test(ua),
    isIE10 = /MSIE 10/i.test(ua),
    isIE11 = !(!/rv:11.0/i.test(ua) || IEMobile),
    isEge = /Edge\/12./i.test(navigator.userAgent),
    isOpera = !!window.opr && !!opr.addons || !!window.opera || ua.indexOf(" OPR/") >= 0,
    isFirefox = "undefined" != typeof InstallTrigger,
    isIE = !!document.documentMode,
    isEdge = !isIE && !!window.StyleMedia && !isIE11,
    isChrome = !!window.chrome && !!window.chrome.webstore,
    isBlink = (isChrome || isOpera) && !!window.CSS,
    isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 || !isChrome && !isOpera && void 0 !== window.webkitAudioContext,
    isSafari5 = ua.match("Safari/") && !ua.match("Chrome") && ua.match(" Version/5."),
    AndroidVersion = parseFloat(ua.slice(ua.indexOf("Android") + 8)),
    Version = ua.match(/Android\s([0-9\.]*)/i),
    isIOS8 = function() {
        var e = navigator.userAgent.toLowerCase();
        return /iphone os 8_/.test(e)
    },
    iOS = iOSversion(),
    ios, android, blackBerry, UCBrowser, Operamini, firefox, windows, smartphone, tablet, touchscreen, all, isMobile = {
        ios: function() {
            return ua.match(/iPhone|iPad|iPod/i)
        }(),
        android: function() {
            return ua.match(/Android/i)
        }(),
        blackBerry: function() {
            return ua.match(/BB10|Tablet|Mobile/i)
        }(),
        UCBrowser: function() {
            return ua.match(/UCBrowser/i)
        }(),
        Operamini: function() {
            return ua.match(/Opera Mini/i)
        }(),
        windows: function() {
            return ua.match(/IEMobile/i)
        }(),
        smartphone: function() {
            return ua.match(/Android|BlackBerry|Tablet|Mobile|iPhone|iPad|iPod|Opera Mini|IEMobile/i) && window.innerWidth <= 440 && window.innerHeight <= 740
        }(),
        tablet: function() {
            return ua.match(/Android|BlackBerry|Tablet|Mobile|iPhone|iPad|iPod|Opera Mini|IEMobile/i) && window.innerWidth <= 1366 && window.innerHeight <= 800
        }(),
        all: function() {
            return ua.match(/Android|BlackBerry|Tablet|Mobile|iPhone|iPad|iPod|Opera Mini|IEMobile/i)
        }()
    };
if (isTouchDevice && null !== isMobile.all) var TouchLenght = !0;
else if (isMobile.tablet && isFirefox || isMobile.smartphone && isFirefox) var TouchLenght = !0;
else var TouchLenght = !1;
isMobile.Operamini && alert("Please disable Data Savings Mode");
var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
    Loadx = 0;
