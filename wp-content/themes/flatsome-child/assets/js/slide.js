"function" != typeof Object.create && (Object.create = function(e) {
        function t() {}
        return t.prototype = e, new t
    }),
    function(e, t, a) {
        var i = {
            init: function(t, a) {
                var i = this;
                i.$elem = e(a), i.options = e.extend({}, e.fn.BTQSlider.options, i.$elem.data(), t), i.userOptions = t, i.loadContent()
            },
            loadContent: function() {
                function t(e) {
                    var t, a = "";
                    if ("function" == typeof i.options.jsonSuccess) i.options.jsonSuccess.apply(this, [e]);
                    else {
                        for (t in e.BTQ) e.BTQ.hasOwnProperty(t) && (a += e.BTQ[t].item);
                        i.$elem.html(a)
                    }
                    i.logIn()
                }
                var a, i = this;
                "function" == typeof i.options.beforeInit && i.options.beforeInit.apply(this, [i.$elem]), "string" == typeof i.options.jsonPath ? (a = i.options.jsonPath, e.getJSON(a, t)) : i.logIn()
            },
            logIn: function() {
                var e = this;
                e.$elem.data({
                    "slide-originalStyles": e.$elem.attr("style"),
                    "slide-originalClasses": e.$elem.attr("class")
                }), e.orignalItems = e.options.items, e.checkBrowser(), e.wrapperWidth = 0, e.checkVisible = null, e.setVars()
            },
            setVars: function() {
                var e = this;
                return 0 === e.$elem.children().length ? !1 : (e.baseClass(), e.eventTypes(), e.$userItems = e.$elem.children(), e.itemsAmount = e.$userItems.length, e.wrapItems(), e.$BTQItems = e.$elem.find(".slide-item"), e.$BTQWrapper = e.$elem.find(".slide-wrapper"), e.playDirection = "next", e.prevItem = 0, e.prevArr = [0], e.currentItem = 0, e.customEvents(), void e.onStartup())
            },
            onStartup: function() {
                var e = this;
                e.updateItems(), e.calculateAll(), e.buildControls(), e.updateControls(), e.response(), e.moveEvents(), e.stopOnHover(), e.BTQStatus(), e.options.transitionStyle !== !1 && e.transitionTypes(e.options.transitionStyle), e.options.autoPlay === !0 && (e.options.autoPlay = 5e3), e.play(), e.$elem.find(".slide-wrapper").css("display", "block"), e.$elem.is(":visible") || e.watchVisibility(), e.onstartup = !1, e.eachMoveUpdate(), "function" == typeof e.options.afterInit && e.options.afterInit.apply(this, [e.$elem])
            },
            eachMoveUpdate: function() {
                var e = this;
                e.options.lazyLoad === !0 && e.lazyLoad(), e.options.autoHeight === !0 && e.autoHeight(), e.onVisibleItems(), "function" == typeof e.options.afterAction && e.options.afterAction.apply(this, [e.$elem])
            },
            updateVars: function() {
                var e = this;
                "function" == typeof e.options.beforeUpdate && e.options.beforeUpdate.apply(this, [e.$elem]), e.watchVisibility(), e.updateItems(), e.calculateAll(), e.updatePosition(), e.updateControls(), e.eachMoveUpdate(), "function" == typeof e.options.afterUpdate && e.options.afterUpdate.apply(this, [e.$elem])
            },
            reload: function() {
                var e = this;
                t.setTimeout(function() {
                    e.updateVars()
                }, 0)
            },
            watchVisibility: function() {
                var e = this;
                return e.$elem.is(":visible") !== !1 ? !1 : (e.$elem.css({
                    opacity: 0
                }), t.clearInterval(e.autoPlayInterval), t.clearInterval(e.checkVisible), void(e.checkVisible = t.setInterval(function() {
                    e.$elem.is(":visible") && (e.reload(), e.$elem.animate({
                        opacity: 1
                    }, 200), t.clearInterval(e.checkVisible))
                }, 500)))
            },
            wrapItems: function() {
                var e = this;
                e.$userItems.wrapAll('<div class="slide-wrapper">').wrap('<div class="slide-item"></div>'), e.$elem.find(".slide-wrapper").wrap('<div class="slide-wrapper-outer">'), e.wrapperOuter = e.$elem.find(".slide-wrapper-outer")
            },
            baseClass: function() {
                var e = this,
                    t = e.$elem.hasClass(e.options.baseClass),
                    a = e.$elem.hasClass(e.options.theme);
                t || e.$elem.addClass(e.options.baseClass), a || e.$elem.addClass(e.options.theme)
            },
            updateItems: function() {
                var t, a, i = this;
                if (i.options.responsive === !1) return !1;
                if (i.options.singleItem === !0) return i.options.items = i.orignalItems = 1, i.options.itemsCustom = !1, i.options.itemsDesktop = !1, i.options.itemsDesktopSmall = !1, i.options.itemsTablet = !1, i.options.itemsTabletSmall = !1, i.options.itemsMobile = !1, !1;
                if (t = e(i.options.responsiveBaseWidth).width(), t > (i.options.itemsDesktop[0] || i.orignalItems) && (i.options.items = i.orignalItems), i.options.itemsCustom !== !1)
                    for (i.options.itemsCustom.sort(function(e, t) {
                            return e[0] - t[0]
                        }), a = 0; a < i.options.itemsCustom.length; a += 1) i.options.itemsCustom[a][0] <= t && (i.options.items = i.options.itemsCustom[a][1]);
                else t <= i.options.itemsDesktop[0] && i.options.itemsDesktop !== !1 && (i.options.items = i.options.itemsDesktop[1]), t <= i.options.itemsDesktopSmall[0] && i.options.itemsDesktopSmall !== !1 && (i.options.items = i.options.itemsDesktopSmall[1]), t <= i.options.itemsTablet[0] && i.options.itemsTablet !== !1 && (i.options.items = i.options.itemsTablet[1]), t <= i.options.itemsTabletSmall[0] && i.options.itemsTabletSmall !== !1 && (i.options.items = i.options.itemsTabletSmall[1]), t <= i.options.itemsMobile[0] && i.options.itemsMobile !== !1 && (i.options.items = i.options.itemsMobile[1]);
                i.options.items > i.itemsAmount && i.options.itemsScaleUp === !0 && (i.options.items = i.itemsAmount)
            },
            response: function() {
                var a, i, s = this;
                return s.options.responsive !== !0 ? !1 : (i = e(t).width(), s.resizer = function() {
                    e(t).width() !== i && (s.options.autoPlay !== !1 && t.clearInterval(s.autoPlayInterval), t.clearTimeout(a), a = t.setTimeout(function() {
                        i = e(t).width(), s.updateVars()
                    }, s.options.responsiveRefreshRate))
                }, void e(t).resize(s.resizer))
            },
            updatePosition: function() {
                var e = this;
                e.jumpTo(e.currentItem), e.options.autoPlay !== !1 && e.checkAp()
            },
            appendItemsSizes: function() {
                var t = this,
                    a = 0,
                    i = t.itemsAmount - t.options.items;
                t.$BTQItems.each(function(s) {
                    var r = e(this);
                    r.css({
                        width: t.itemWidth
                    }).data("slide-item", Number(s)), s % t.options.items !== 0 && s !== i || s > i || (a += 1), r.data("roundpages", a)
                })
            },
            appendWrapperSizes: function() {
                var e = this,
                    t = e.$BTQItems.length * e.itemWidth;
                e.$BTQWrapper.css({
                    width: 2 * t,
                    left: 0
                }), e.appendItemsSizes()
            },
            calculateAll: function() {
                var e = this;
                e.calculateWidth(), e.appendWrapperSizes(), e.loops(), e.max()
            },
            calculateWidth: function() {
                var e = this;
                e.itemWidth = Math.round(e.$elem.width() / e.options.items)
            },
            max: function() {
                var e = this,
                    t = -1 * (e.itemsAmount * e.itemWidth - e.options.items * e.itemWidth);
                return e.options.items > e.itemsAmount ? (e.maximumItem = 0, t = 0, e.maximumPixels = 0) : (e.maximumItem = e.itemsAmount - e.options.items, e.maximumPixels = t), t
            },
            min: function() {
                return 0
            },
            loops: function() {
                var t, a, i, s = this,
                    r = 0,
                    n = 0;
                for (s.positionsInArray = [0], s.pagesInArray = [], t = 0; t < s.itemsAmount; t += 1) n += s.itemWidth, s.positionsInArray.push(-n), s.options.scrollPerPage === !0 && (a = e(s.$BTQItems[t]), i = a.data("roundpages"), i !== r && (s.pagesInArray[r] = s.positionsInArray[t], r = i))
            },
            buildControls: function() {
                var t = this;
                t.options.navigation !== !0 && t.options.pagination !== !0 || (t.BTQControls = e('<div class="slide-controls"/>').toggleClass("clickable", !t.browser.isTouch).appendTo(t.$elem)), t.options.pagination === !0 && t.buildPagination(), t.options.navigation === !0 && t.buildButtons()
            },
            buildButtons: function() {
                var t = this,
                    a = e('<div class="slide-buttons"/>');
                t.BTQControls.append(a), t.buttonPrev = e("<div/>", {
                    "class": "slide-prev",
                    html: t.options.navigationText[0] || ""
                }), t.buttonNext = e("<div/>", {
                    "class": "slide-next",
                    html: t.options.navigationText[1] || ""
                }), a.append(t.buttonPrev).append(t.buttonNext), a.on("touchstart.BTQControls mousedown.BTQControls", 'div[class^="slide"]', function(e) {
                    e.preventDefault()
                }), a.on("touchend.BTQControls mouseup.BTQControls", 'div[class^="slide"]', function(a) {
                    a.preventDefault(), e(this).hasClass("slide-next") ? t.next() : t.prev()
                })
            },
            buildPagination: function() {
                var t = this;
                t.paginationWrapper = e('<div class="slide-pagination"/>'), t.BTQControls.append(t.paginationWrapper), t.paginationWrapper.on("touchend.BTQControls mouseup.BTQControls", ".slide-page", function(a) {
                    a.preventDefault(), Number(e(this).data("slide-page")) !== t.currentItem && t.goTo(Number(e(this).data("slide-page")), !0)
                })
            },
            updatePagination: function() {
                var t, a, i, s, r, n, o = this;
                if (o.options.pagination === !1) return !1;
                for (o.paginationWrapper.html(""), t = 0, a = o.itemsAmount - o.itemsAmount % o.options.items, s = 0; s < o.itemsAmount; s += 1) s % o.options.items === 0 && (t += 1, a === s && (i = o.itemsAmount - o.options.items), r = e("<div/>", {
                    "class": "slide-page"
                }), n = e("<span></span>", {
                    text: o.options.paginationNumbers === !0 ? t : "",
                    "class": o.options.paginationNumbers === !0 ? "slide-numbers" : ""
                }), r.append(n), r.data("slide-page", a === s ? i : s), r.data("roundpages", t), o.paginationWrapper.append(r));
                o.checkPagination()
            },
            checkPagination: function() {
                var t = this;
                return t.options.pagination === !1 ? !1 : void t.paginationWrapper.find(".slide-page").each(function() {
                    e(this).data("roundpages") === e(t.$BTQItems[t.currentItem]).data("roundpages") && (t.paginationWrapper.find(".slide-page").removeClass("active"), e(this).addClass("active"))
                })
            },
            checkNavigation: function() {
                var e = this;
                return e.options.navigation === !1 ? !1 : void(e.options.rewindNav === !1 && (0 === e.currentItem && 0 === e.maximumItem ? (e.buttonPrev.addClass("disabled"), e.buttonNext.addClass("disabled")) : 0 === e.currentItem && 0 !== e.maximumItem ? (e.buttonPrev.addClass("disabled"), e.buttonNext.removeClass("disabled")) : e.currentItem === e.maximumItem ? (e.buttonPrev.removeClass("disabled"), e.buttonNext.addClass("disabled")) : 0 !== e.currentItem && e.currentItem !== e.maximumItem && (e.buttonPrev.removeClass("disabled"), e.buttonNext.removeClass("disabled"))))
            },
            updateControls: function() {
                var e = this;
                e.updatePagination(), e.checkNavigation(), e.BTQControls && (e.options.items >= e.itemsAmount ? e.BTQControls.hide() : e.BTQControls.show())
            },
            destroyControls: function() {
                var e = this;
                e.BTQControls && e.BTQControls.remove()
            },
            next: function(e) {
                var t = this;
                if (t.isTransition) return !1;
                if (t.currentItem += t.options.scrollPerPage === !0 ? t.options.items : 1, t.currentItem > t.maximumItem + (t.options.scrollPerPage === !0 ? t.options.items - 1 : 0)) {
                    if (t.options.rewindNav !== !0) return t.currentItem = t.maximumItem, !1;
                    t.currentItem = 0, e = "rewind"
                }
                t.goTo(t.currentItem, e)
            },
            prev: function(e) {
                var t = this;
                if (t.isTransition) return !1;
                if (t.options.scrollPerPage === !0 && t.currentItem > 0 && t.currentItem < t.options.items ? t.currentItem = 0 : t.currentItem -= t.options.scrollPerPage === !0 ? t.options.items : 1, t.currentItem < 0) {
                    if (t.options.rewindNav !== !0) return t.currentItem = 0, !1;
                    t.currentItem = t.maximumItem, e = "rewind"
                }
                t.goTo(t.currentItem, e)
            },
            goTo: function(e, a, i) {
                var s, r = this;
                return r.isTransition ? !1 : ("function" == typeof r.options.beforeMove && r.options.beforeMove.apply(this, [r.$elem]), e >= r.maximumItem ? e = r.maximumItem : 0 >= e && (e = 0), r.currentItem = r.BTQ.currentItem = e, r.options.transitionStyle !== !1 && "drag" !== i && 1 === r.options.items ? (r.swapSpeed(0), r.browser.support3d === !0 || "msie" == r.browser && version >= 10 ? r.transition3d(r.positionsInArray[e]) : r.css2slide(r.positionsInArray[e], 1), r.afterGo(), r.singleItemTransition(), !1) : (s = r.positionsInArray[e], r.browser.support3d === !0 ? (r.isCss3Finish = !1, a === !0 ? (r.swapSpeed("paginationSpeed"), t.setTimeout(function() {
                    r.isCss3Finish = !0
                }, r.options.paginationSpeed)) : "rewind" === a ? (r.swapSpeed(r.options.rewindSpeed), t.setTimeout(function() {
                    r.isCss3Finish = !0
                }, r.options.rewindSpeed)) : (r.swapSpeed("slideSpeed"), t.setTimeout(function() {
                    r.isCss3Finish = !0
                }, r.options.slideSpeed)), r.transition3d(s)) : a === !0 ? r.css2slide(s, r.options.paginationSpeed) : "rewind" === a ? r.css2slide(s, r.options.rewindSpeed) : r.css2slide(s, r.options.slideSpeed), void r.afterGo()))
            },
            jumpTo: function(e) {
                var t = this;
                "function" == typeof t.options.beforeMove && t.options.beforeMove.apply(this, [t.$elem]), e >= t.maximumItem || -1 === e ? e = t.maximumItem : 0 >= e && (e = 0), t.swapSpeed(0), t.browser.support3d === !0 ? t.transition3d(t.positionsInArray[e]) : t.css2slide(t.positionsInArray[e], 1), t.currentItem = t.BTQ.currentItem = e, t.afterGo()
            },
            afterGo: function() {
                var e = this;
                e.prevArr.push(e.currentItem), e.prevItem = e.BTQ.prevItem = e.prevArr[e.prevArr.length - 2], e.prevArr.shift(0), e.prevItem !== e.currentItem && (e.checkPagination(), e.checkNavigation(), e.eachMoveUpdate(), e.options.autoPlay !== !1 && e.checkAp()), "function" == typeof e.options.afterMove && e.prevItem !== e.currentItem && e.options.afterMove.apply(this, [e.$elem])
            },
            stop: function() {
                var e = this;
                e.apStatus = "stop", t.clearInterval(e.autoPlayInterval)
            },
            checkAp: function() {
                var e = this;
                "stop" !== e.apStatus && e.play()
            },
            play: function() {
                var e = this;
                return e.apStatus = "play", e.options.autoPlay === !1 ? !1 : (t.clearInterval(e.autoPlayInterval), void(e.autoPlayInterval = t.setInterval(function() {
                    e.next(!0)
                }, e.options.autoPlay)))
            },
            swapSpeed: function(e) {
                var t = this;
                "slideSpeed" === e ? t.$BTQWrapper.css(t.addCssSpeed(t.options.slideSpeed)) : "paginationSpeed" === e ? t.$BTQWrapper.css(t.addCssSpeed(t.options.paginationSpeed)) : "string" != typeof e && t.$BTQWrapper.css(t.addCssSpeed(e))
            },
            addCssSpeed: function(e) {
                return {
                    "-webkit-transition": "all " + e + "ms ease",
                    "-moz-transition": "all " + e + "ms ease",
                    "-o-transition": "all " + e + "ms ease",
                    transition: "all " + e + "ms ease"
                }
            },
            removeTransition: function() {
                return {
                    "-webkit-transition": "",
                    "-moz-transition": "",
                    "-o-transition": "",
                    transition: ""
                }
            },
            doTranslate: function(e) {
                return {
                    "-webkit-transform": "translate3d(" + e + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + e + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + e + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + e + "px, 0px, 0px)",
                    transform: "translate3d(" + e + "px, 0px,0px)"
                }
            },
            transition3d: function(t) {
                var a = this,
                    i = e(".item-container").length;
                i >= 1 ? a.$BTQWrapper.css({
                    left: t
                }) : a.$BTQWrapper.css(a.doTranslate(t))
            },
            css2move: function(e) {
                var t = this;
                t.$BTQWrapper.css({
                    left: e
                })
            },
            css2slide: function(e, t) {
                var a = this;
                a.isCssFinish = !1, a.$BTQWrapper.stop(!0, !0).animate({
                    left: e
                }, {
                    duration: t || a.options.slideSpeed,
                    complete: function() {
                        a.isCssFinish = !0
                    }
                })
            },
            checkBrowser: function() {
                var e, i, s, r, n = this,
                    o = "translate3d(0px, 0px, 0px)",
                    l = a.createElement("div");
                l.style.cssText = "  -moz-transform:" + o + "; -ms-transform:" + o + "; -o-transform:" + o + "; -webkit-transform:" + o + "; transform:" + o, e = /translate3d\(0px, 0px, 0px\)/g, i = l.style.cssText.match(e), s = null !== i && i.length >= 1 && i.length <= 2, r = "ontouchstart" in t || t.navigator.msMaxTouchPoints, n.browser = {
                    support3d: s,
                    isTouch: r
                }
            },
            moveEvents: function() {
                var e = this;
                e.options.mouseDrag === !1 && e.options.touchDrag === !1 || (e.gestures(), e.disabledEvents())
            },
            eventTypes: function() {
                var e = this,
                    t = ["s", "e", "x"];
                e.ev_types = {}, e.options.mouseDrag === !0 && e.options.touchDrag === !0 ? t = ["touchstart.BTQ mousedown.BTQ", "touchmove.BTQ mousemove.BTQ", "touchend.BTQ touchcancel.BTQ mouseup.BTQ"] : e.options.mouseDrag === !1 && e.options.touchDrag === !0 ? t = ["touchstart.BTQ", "touchmove.BTQ", "touchend.BTQ touchcancel.BTQ"] : e.options.mouseDrag === !0 && e.options.touchDrag === !1 && (t = ["mousedown.BTQ", "mousemove.BTQ", "mouseup.BTQ"]), e.ev_types.start = t[0], e.ev_types.move = t[1], e.ev_types.end = t[2]
            },
            disabledEvents: function() {
                var t = this;
                t.$elem.on("dragstart.BTQ", function(e) {
                    e.preventDefault()
                }), t.$elem.on("mousedown.disableTextSelect", function(t) {
                    return e(t.target).is("input, textarea, select, option")
                })
            },
            gestures: function() {
                function i(e) {
                    if (void 0 !== e.touches) return {
                        x: e.touches[0].pageX,
                        y: e.touches[0].pageY
                    };
                    if (void 0 === e.touches) {
                        if (void 0 !== e.pageX) return {
                            x: e.pageX,
                            y: e.pageY
                        };
                        if (void 0 === e.pageX) return {
                            x: e.clientX,
                            y: e.clientY
                        }
                    }
                }

                function s(t) {
                    "on" === t ? (e(a).on(l.ev_types.move, n), e(a).on(l.ev_types.end, o)) : "off" === t && (e(a).off(l.ev_types.move), e(a).off(l.ev_types.end))
                }

                function r(a) {
                    var r, n = a.originalEvent || a || t.event;
                    if (3 === n.which) return !1;
                    if (!(l.itemsAmount <= l.options.items)) {
                        if (l.isCssFinish === !1 && !l.options.dragBeforeAnimFinish) return !1;
                        if (l.isCss3Finish === !1 && !l.options.dragBeforeAnimFinish) return !1;
                        l.options.autoPlay !== !1 && t.clearInterval(l.autoPlayInterval), l.browser.isTouch === !0 || l.$BTQWrapper.hasClass("grabbing") || l.$BTQWrapper.addClass("grabbing"), l.newPosX = 0, l.newRelativeX = 0, e(this).css(l.removeTransition()), r = e(this).position(), p.relativePos = r.left, p.offsetX = i(n).x - r.left, p.offsetY = i(n).y - r.top, s("on"), p.sliding = !1, p.targetElement = n.target || n.srcElement
                    }
                }

                function n(s) {
                    var r, n, o = s.originalEvent || s || t.event;
                    l.newPosX = i(o).x - p.offsetX, l.newPosY = i(o).y - p.offsetY, l.newRelativeX = l.newPosX - p.relativePos, "function" == typeof l.options.startDragging && p.dragging !== !0 && 0 !== l.newRelativeX && (p.dragging = !0, l.options.startDragging.apply(l, [l.$elem])), (l.newRelativeX > 8 || l.newRelativeX < -8) && l.browser.isTouch === !0 && (void 0 !== o.preventDefault ? o.preventDefault() : o.returnValue = !1, p.sliding = !0), (l.newPosY > 10 || l.newPosY < -10) && p.sliding === !1 && e(a).off("touchmove.BTQ"), r = function() {
                        return l.newRelativeX / 5
                    }, n = function() {
                        return l.maximumPixels + l.newRelativeX / 5
                    }, l.newPosX = Math.max(Math.min(l.newPosX, r()), n()), l.browser.support3d === !0 ? l.transition3d(l.newPosX) : l.css2move(l.newPosX)
                }

                function o(a) {
                    var i, r, n, o = a.originalEvent || a || t.event;
                    o.target = o.target || o.srcElement, p.dragging = !1, l.browser.isTouch !== !0 && l.$BTQWrapper.removeClass("grabbing"), l.newRelativeX < 0 ? l.dragDirection = l.BTQ.dragDirection = "left" : l.dragDirection = l.BTQ.dragDirection = "right", 0 !== l.newRelativeX && (i = l.getNewPosition(), l.goTo(i, !1, "drag"), p.targetElement === o.target && l.browser.isTouch !== !0 && (e(o.target).on("click.disable", function(t) {
                        t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault(), e(t.target).off("click.disable")
                    }), r = e._data(o.target, "events").click, n = r.pop(), r.splice(0, 0, n))), s("off")
                }
                var l = this,
                    p = {
                        offsetX: 0,
                        offsetY: 0,
                        baseElWidth: 0,
                        relativePos: 0,
                        position: null,
                        minSwipe: null,
                        maxSwipe: null,
                        sliding: null,
                        dargging: null,
                        targetElement: null
                    };
                l.isCssFinish = !0, l.$elem.on(l.ev_types.start, ".slide-wrapper", r)
            },
            getNewPosition: function() {
                var e = this,
                    t = e.closestItem();
                return t > e.maximumItem ? (e.currentItem = e.maximumItem, t = e.maximumItem) : e.newPosX >= 0 && (t = 0, e.currentItem = 0), t
            },
            closestItem: function() {
                var t = this,
                    a = t.options.scrollPerPage === !0 ? t.pagesInArray : t.positionsInArray,
                    i = t.newPosX,
                    s = null;
                return e.each(a, function(r, n) {
                    i - t.itemWidth / 20 > a[r + 1] && i - t.itemWidth / 20 < n && "left" === t.moveDirection() ? (s = n, t.options.scrollPerPage === !0 ? t.currentItem = e.inArray(s, t.positionsInArray) : t.currentItem = r) : i + t.itemWidth / 20 < n && i + t.itemWidth / 20 > (a[r + 1] || a[r] - t.itemWidth) && "right" === t.moveDirection() && (t.options.scrollPerPage === !0 ? (s = a[r + 1] || a[a.length - 1], t.currentItem = e.inArray(s, t.positionsInArray)) : (s = a[r + 1], t.currentItem = r + 1))
                }), t.currentItem
            },
            moveDirection: function() {
                var e, t = this;
                return t.newRelativeX < 0 ? (e = "right", t.playDirection = "next") : (e = "left", t.playDirection = "prev"), e
            },
            customEvents: function() {
                var e = this;
                e.$elem.on("BTQ.next", function() {
                    e.next()
                }), e.$elem.on("BTQ.prev", function() {
                    e.prev()
                }), e.$elem.on("BTQ.play", function(t, a) {
                    e.options.autoPlay = a, e.play(), e.hoverStatus = "play"
                }), e.$elem.on("BTQ.stop", function() {
                    e.stop(), e.hoverStatus = "stop"
                }), e.$elem.on("BTQ.goTo", function(t, a) {
                    e.goTo(a)
                }), e.$elem.on("BTQ.jumpTo", function(t, a) {
                    e.jumpTo(a)
                })
            },
            stopOnHover: function() {
                var t = this,
                    a = e(".projects");
                t.options.stopOnHover === !0 && t.browser.isTouch !== !0 && t.options.autoPlay !== !1 && (t.$elem.on("mouseover", function() {
                    t.stop()
                }), t.$elem.on("mouseout", function() {
                    "stop" !== t.hoverStatus && t.play()
                }), e(a).mouseenter(function() {
                    t.stop()
                }), e(a).mouseleave(function() {
                    "stop" !== t.hoverStatus && t.play()
                }))
            },
            lazyLoad: function() {
                var t, a, i, s, r, n = this;
                if (n.options.lazyLoad === !1) return !1;
                for (t = 0; t < n.itemsAmount; t += 1) a = e(n.$BTQItems[t]), "loaded" !== a.data("slide-loaded") && (i = a.data("slide-item"), s = a.find(".lazyload"), "string" == typeof s.data("src") ? (void 0 === a.data("slide-loaded") && (s.hide(), a.append('<div class="preloader"></div>'), a.addClass("loading").data("slide-loaded", "checked")), r = n.options.lazyFollow === !0 ? i >= n.currentItem : !0, r && i < n.currentItem + n.options.items && s.length && s.each(function() {
                    n.lazyPreload(a, e(this))
                })) : a.data("slide-loaded", "loaded"))
            },
            lazyPreload: function(e, a) {
                function i() {
                    e.data("slide-loaded", "loaded").removeClass("loading"), e.data("slide-loaded", "loaded").children().addClass("done"), e.find(".preloader").hide(), a.removeAttr("data-src"), "fade" === n.options.lazyEffect ? a.fadeIn(400) : a.show(), "function" == typeof n.options.afterLazyLoad && n.options.afterLazyLoad.apply(this, [n.$elem])
                }

                function s() {
                    o += 1, n.completeImg(a.get(0)) || r === !0 ? i() : 100 >= o ? t.setTimeout(s, 100) : i()
                }
                var r, n = this,
                    o = 0;
                "DIV" === a.prop("tagName") ? (a.css("background-image", "url(" + a.data("src") + ")"), r = !0) : a[0].src = a.data("src"), s()
            },
            autoHeight: function() {
                function a() {
                    var a = e(r.$BTQItems[r.currentItem]).height();
                    r.wrapperOuter.css("height", a + "px"), r.wrapperOuter.hasClass("autoheight") || t.setTimeout(function() {
                        r.wrapperOuter.addClass("autoheight")
                    }, 0)
                }

                function i() {
                    s += 1, r.completeImg(n.get(0)) ? a() : 100 >= s ? t.setTimeout(i, 100) : r.wrapperOuter.css("height", "")
                }
                var s, r = this,
                    n = e(r.$BTQItems[r.currentItem]).find("img");
                void 0 !== n.get(0) ? (s = 0, i()) : a()
            },
            completeImg: function(e) {
                var t;
                return e.complete ? (t = typeof e.naturalWidth, "undefined" === t || 0 !== e.naturalWidth) : !1
            },
            onVisibleItems: function() {
                var t, a = this;
                for (a.options.addClassActive === !0 && a.$BTQItems.removeClass("active"), a.visibleItems = [], t = a.currentItem; t < a.currentItem + a.options.items; t += 1) a.visibleItems.push(t), a.options.addClassActive === !0 && e(a.$BTQItems[t]).addClass("active");
                a.BTQ.visibleItems = a.visibleItems
            },
            transitionTypes: function(e) {
                var t = this;
                t.outClass = "slide-" + e + "-out", t.inClass = "slide-" + e + "-in"
            },
            singleItemTransition: function() {
                function e(e) {
                    return {
                        position: "relative",
                        left: e + "px"
                    }
                }
                var t = this,
                    a = t.outClass,
                    i = t.inClass,
                    s = t.$BTQItems.eq(t.currentItem),
                    r = t.$BTQItems.eq(t.prevItem),
                    n = Math.abs(t.positionsInArray[t.currentItem]) + t.positionsInArray[t.prevItem],
                    o = Math.abs(t.positionsInArray[t.currentItem]) + t.itemWidth / 2,
                    l = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
                t.isTransition = !0, t.$BTQWrapper.addClass("slide-origin").css({
                    "-webkit-transform-origin": o + "px",
                    "-moz-perspective-origin": o + "px",
                    "perspective-origin": o + "px"
                }), r.css(e(n, 10)).addClass(a).on(l, function() {
                    t.endPrev = !0, r.off(l), t.clearTransStyle(r, a)
                }), s.addClass(i).on(l, function() {
                    t.endCurrent = !0, s.off(l), t.clearTransStyle(s, i)
                })
            },
            clearTransStyle: function(e, t) {
                var a = this;
                e.css({
                    position: "",
                    left: ""
                }).removeClass(t), a.endPrev && a.endCurrent && (a.$BTQWrapper.removeClass("slide-origin"), a.endPrev = !1, a.endCurrent = !1, a.isTransition = !1)
            },
            BTQStatus: function() {
                var e = this;
                e.BTQ = {
                    userOptions: e.userOptions,
                    baseElement: e.$elem,
                    userItems: e.$userItems,
                    BTQItems: e.$BTQItems,
                    currentItem: e.currentItem,
                    prevItem: e.prevItem,
                    visibleItems: e.visibleItems,
                    isTouch: e.browser.isTouch,
                    browser: e.browser,
                    dragDirection: e.dragDirection
                }
            },
            clearEvents: function() {
                var i = this;
                i.$elem.off(".slide mousedown.disableTextSelect"), e(a).off(".slide"), e(t).off("resize", i.resizer)
            },
            unWrap: function() {
                var e = this;
                0 !== e.$elem.children().length && (e.$BTQWrapper.unwrap(), e.$userItems.unwrap().unwrap(), e.BTQControls && e.BTQControls.remove()), e.clearEvents(), e.$elem.attr({
                    style: e.$elem.data("slide-originalStyles") || "",
                    "class": e.$elem.data("slide-originalClasses")
                })
            },
            destroy: function() {
                var e = this;
                e.stop(), t.clearInterval(e.checkVisible), e.unWrap(), e.$elem.removeData()
            },
            reinit: function(t) {
                var a = this,
                    i = e.extend({}, a.userOptions, t);
                a.unWrap(), a.init(i, a.$elem)
            },
            addItem: function(e, t) {
                var a, i = this;
                return e ? 0 === i.$elem.children().length ? (i.$elem.append(e), i.setVars(), !1) : (i.unWrap(), a = void 0 === t || -1 === t ? -1 : t, a >= i.$userItems.length || -1 === a ? i.$userItems.eq(-1).after(e) : i.$userItems.eq(a).before(e), void i.setVars()) : !1
            },
            removeItem: function(e) {
                var t, a = this;
                return 0 === a.$elem.children().length ? !1 : (t = void 0 === e || -1 === e ? -1 : e, a.unWrap(), a.$userItems.eq(t).remove(), void a.setVars())
            }
        };
        e.fn.BTQSlider = function(t) {
            return this.each(function() {
                if (e(this).data("slide-init") === !0) return !1;
                e(this).data("slide-init", !0);
                var a = Object.create(i);
                a.init(t, this), e.data(this, "BTQSlider", a)
            })
        }, e.fn.BTQSlider.options = {
            items: 5,
            itemsCustom: !1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            slideSpeed: 600,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1,
            navigationText: ["", ""],
            rewindNav: !0,
            scrollPerPage: !1,
            pagination: !0,
            paginationNumbers: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: t,
            baseClass: "slide-slidebox",
            theme: "",
            lazyLoad: !1,
            lazyFollow: !0,
            lazyEffect: "fade",
            autoHeight: !1,
            jsonPath: !1,
            jsonSuccess: !1,
            dragBeforeAnimFinish: !0,
            mouseDrag: !0,
            touchDrag: !0,
            addClassActive: !1,
            transitionStyle: !1,
            beforeUpdate: !1,
            afterUpdate: !1,
            beforeInit: !1,
            afterInit: !1,
            beforeMove: !1,
            afterMove: !1,
            afterAction: !1,
            startDragging: !1,
            afterLazyLoad: !1
        }
    }(jQuery, window, document),
    function() {
        "use strict";

        function e(e) {
            e.fn.swiper = function(t) {
                var i;
                return e(this).each(function() {
                    var e = new a(this, t);
                    i || (i = e)
                }), i
            }
        }
        var t, a = function(e, s) {
            function r(e) {
                return Math.floor(e)
            }

            function n() {
                var e = b.params.autoplay,
                    t = b.slides.eq(b.activeIndex);
                t.attr("data-autoplay") && (e = t.attr("data-autoplay") || b.params.autoplay), b.autoplayTimeoutId = setTimeout(function() {
                    b.params.loop ? (b.fixLoop(), b._slideNext(), b.emit("onAutoplay", b)) : b.isEnd ? s.autoplayStopOnLast ? b.stopAutoplay() : (b._slideTo(0), b.emit("onAutoplay", b)) : (b._slideNext(), b.emit("onAutoplay", b))
                }, e)
            }

            function o(e, a) {
                var i = t(e.target);
                if (!i.is(a))
                    if ("string" == typeof a) i = i.parents(a);
                    else if (a.nodeType) {
                    var s;
                    return i.parents().each(function(e, t) {
                        t === a && (s = a)
                    }), s ? a : void 0
                }
                if (0 !== i.length) return i[0]
            }

            function l(e, t) {
                t = t || {};
                var a = window.MutationObserver || window.WebkitMutationObserver,
                    i = new a(function(e) {
                        e.forEach(function(e) {
                            b.onResize(!0), b.emit("onObserverUpdate", b, e)
                        })
                    });
                i.observe(e, {
                    attributes: "undefined" == typeof t.attributes ? !0 : t.attributes,
                    childList: "undefined" == typeof t.childList ? !0 : t.childList,
                    characterData: "undefined" == typeof t.characterData ? !0 : t.characterData
                }), b.observers.push(i)
            }

            function p(e) {
                e.originalEvent && (e = e.originalEvent);
                var t = e.keyCode || e.charCode;
                if (!b.params.allowSwipeToNext && (b.isHorizontal() && 39 === t || !b.isHorizontal() && 40 === t)) return !1;
                if (!b.params.allowSwipeToPrev && (b.isHorizontal() && 37 === t || !b.isHorizontal() && 38 === t)) return !1;
                if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                    if (37 === t || 39 === t || 38 === t || 40 === t) {
                        var a = !1;
                        if (b.container.parents("." + b.params.slideClass).length > 0 && 0 === b.container.parents("." + b.params.slideActiveClass).length) return;
                        var i = {
                                left: window.pageXOffset,
                                top: window.pageYOffset
                            },
                            s = window.innerWidth,
                            r = window.innerHeight,
                            n = b.container.offset();
                        b.rtl && (n.left = n.left - b.container[0].scrollLeft);
                        for (var o = [
                                [n.left, n.top],
                                [n.left + b.width, n.top],
                                [n.left, n.top + b.height],
                                [n.left + b.width, n.top + b.height]
                            ], l = 0; l < o.length; l++) {
                            var p = o[l];
                            p[0] >= i.left && p[0] <= i.left + s && p[1] >= i.top && p[1] <= i.top + r && (a = !0)
                        }
                        if (!a) return
                    }
                    b.isHorizontal() ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === t && !b.rtl || 37 === t && b.rtl) && b.slideNext(), (37 === t && !b.rtl || 39 === t && b.rtl) && b.slidePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && b.slideNext(), 38 === t && b.slidePrev())
                }
            }

            function d() {
                var e = "onwheel",
                    t = e in document;
                if (!t) {
                    var a = document.createElement("div");
                    a.setAttribute(e, "return;"), t = "function" == typeof a[e]
                }
                return !t && document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0 && (t = document.implementation.hasFeature("Events.wheel", "3.0")), t
            }

            function u(e) {
                var t = 10,
                    a = 40,
                    i = 800,
                    s = 0,
                    r = 0,
                    n = 0,
                    o = 0;
                return "detail" in e && (r = e.detail), "wheelDelta" in e && (r = -e.wheelDelta / 120), "wheelDeltaY" in e && (r = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (s = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (s = r, r = 0), n = s * t, o = r * t, "deltaY" in e && (o = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || o) && e.deltaMode && (1 === e.deltaMode ? (n *= a, o *= a) : (n *= i, o *= i)), n && !s && (s = 1 > n ? -1 : 1), o && !r && (r = 1 > o ? -1 : 1), {
                    spinX: s,
                    spinY: r,
                    pixelX: n,
                    pixelY: o
                }
            }

            function m(e) {
                e.originalEvent && (e = e.originalEvent);
                var t = 0,
                    a = b.rtl ? -1 : 1,
                    i = u(e);
                if (b.params.mousewheelForceToAxis)
                    if (b.isHorizontal()) {
                        if (!(Math.abs(i.pixelX) > Math.abs(i.pixelY))) return;
                        t = i.pixelX * a
                    } else {
                        if (!(Math.abs(i.pixelY) > Math.abs(i.pixelX))) return;
                        t = i.pixelY
                    }
                else t = Math.abs(i.pixelX) > Math.abs(i.pixelY) ? -i.pixelX * a : -i.pixelY;
                if (0 !== t) {
                    if (b.params.mousewheelInvert && (t = -t), b.params.freeMode) {
                        var s = b.getWrapperTranslate() + t * b.params.mousewheelSensitivity,
                            r = b.isBeginning,
                            n = b.isEnd;
                        if (s >= b.minTranslate() && (s = b.minTranslate()), s <= b.maxTranslate() && (s = b.maxTranslate()), b.setWrapperTransition(0), b.setWrapperTranslate(s), b.updateProgress(), b.updateActiveIndex(), (!r && b.isBeginning || !n && b.isEnd) && b.updateClasses(), b.params.freeModeSticky ? (clearTimeout(b.mousewheel.timeout), b.mousewheel.timeout = setTimeout(function() {
                                b.slideReset()
                            }, 300)) : b.params.lazyLoading && b.lazy && b.lazy.load(), b.emit("onScroll", b, e), b.params.autoplay && b.params.autoplayDisableOnInteraction && b.stopAutoplay(), 0 === s || s === b.maxTranslate()) return
                    } else {
                        if ((new window.Date).getTime() - b.mousewheel.lastScrollTime > 60)
                            if (0 > t)
                                if (b.isEnd && !b.params.loop || b.animating) {
                                    if (b.params.mousewheelReleaseOnEdges) return !0
                                } else b.slideNext(), b.emit("onScroll", b, e);
                        else if (b.isBeginning && !b.params.loop || b.animating) {
                            if (b.params.mousewheelReleaseOnEdges) return !0
                        } else b.slidePrev(), b.emit("onScroll", b, e);
                        b.mousewheel.lastScrollTime = (new window.Date).getTime()
                    }
                    return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
                }
            }

            function c(e, a) {
                e = t(e);
                var i, s, r, n = b.rtl ? -1 : 1;
                i = e.attr("data-parallax") || "0", s = e.attr("data-parallax-x"), r = e.attr("data-parallax-y"), s || r ? (s = s || "0", r = r || "0") : b.isHorizontal() ? (s = i, r = "0") : (r = i, s = "0"), s = s.indexOf("%") >= 0 ? parseInt(s, 10) * a * n + "%" : s * a * n + "px", r = r.indexOf("%") >= 0 ? parseInt(r, 10) * a + "%" : r * a + "px", e.transform("translate3d(" + s + ", " + r + ",0px)")
            }

            function h(e) {
                return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
            }
            if (!(this instanceof a)) return new a(e, s);
            var f = {
                    direction: "horizontal",
                    touchEventsTarget: "container",
                    initialSlide: 0,
                    speed: 300,
                    autoplay: !1,
                    autoplayDisableOnInteraction: !0,
                    autoplayStopOnLast: !1,
                    iOSEdgeSwipeDetection: !1,
                    iOSEdgeSwipeThreshold: 20,
                    freeMode: !1,
                    freeModeMomentum: !0,
                    freeModeMomentumRatio: 1,
                    freeModeMomentumBounce: !0,
                    freeModeMomentumBounceRatio: 1,
                    freeModeMomentumVelocityRatio: 1,
                    freeModeSticky: !1,
                    freeModeMinimumVelocity: .02,
                    autoHeight: !1,
                    setWrapperSize: !1,
                    virtualTranslate: !1,
                    effect: "slide",
                    coverflow: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0
                    },
                    flip: {
                        slideShadows: !0,
                        limitRotation: !0
                    },
                    cube: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    },
                    fade: {
                        crossFade: !1
                    },
                    parallax: !1,
                    zoom: !1,
                    zoomMax: 3,
                    zoomMin: 1,
                    zoomToggle: !0,
                    scrollbar: null,
                    scrollbarHide: !0,
                    scrollbarDraggable: !1,
                    scrollbarSnapOnRelease: !1,
                    keyboardControl: !1,
                    mousewheelControl: !1,
                    mousewheelReleaseOnEdges: !1,
                    mousewheelInvert: !1,
                    mousewheelForceToAxis: !1,
                    mousewheelSensitivity: 1,
                    mousewheelEventsTarged: "container",
                    hashnav: !1,
                    hashnavWatchState: !1,
                    history: !1,
                    replaceState: !1,
                    breakpoints: void 0,
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerColumnFill: "column",
                    slidesPerGroup: 1,
                    centeredSlides: !1,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                    roundLengths: !1,
                    touchRatio: 1,
                    touchAngle: 45,
                    simulateTouch: !0,
                    shortSwipes: !0,
                    longSwipes: !0,
                    longSwipesRatio: .5,
                    longSwipesMs: 300,
                    followFinger: !0,
                    onlyExternal: !1,
                    threshold: 0,
                    touchMoveStopPropagation: !0,
                    touchReleaseOnEdges: !1,
                    uniqueNavElements: !0,
                    pagination: null,
                    paginationElement: "span",
                    paginationClickable: !1,
                    paginationHide: !1,
                    paginationBulletRender: null,
                    paginationProgressRender: null,
                    paginationFractionRender: null,
                    paginationCustomRender: null,
                    paginationType: "bullets",
                    resistance: !0,
                    resistanceRatio: .85,
                    nextButton: null,
                    prevButton: null,
                    watchSlidesProgress: !1,
                    watchSlidesVisibility: !1,
                    grabCursor: !1,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    slideToClickedSlide: !1,
                    lazyLoading: !1,
                    lazyLoadingInPrevNext: !1,
                    lazyLoadingInPrevNextAmount: 1,
                    lazyLoadingOnTransitionStart: !1,
                    preloadImages: !0,
                    updateOnImagesReady: !0,
                    loop: !1,
                    loopAdditionalSlides: 0,
                    loopedSlides: null,
                    control: void 0,
                    controlInverse: !1,
                    controlBy: "slide",
                    normalizeSlideIndex: !0,
                    allowSwipeToPrev: !0,
                    allowSwipeToNext: !0,
                    swipeHandler: null,
                    noSwiping: !0,
                    noSwipingClass: "no-swiping",
                    passiveListeners: !0,
                    containerModifierClass: "slide-container-",
                    slideClass: "item-container",
                    slideActiveClass: "item-active",
                    slideDuplicateActiveClass: "slide-duplicate-active",
                    slideVisibleClass: "slide-visible",
                    slideDuplicateClass: "slide-duplicate",
                    slideNextClass: "item-next",
                    slideDuplicateNextClass: "slide-duplicate-next",
                    slidePrevClass: "item-prev",
                    slideDuplicatePrevClass: "slide-duplicate-prev",
                    wrapperClass: "item-wrapper",
                    bulletClass: "pagination-bullet",
                    bulletActiveClass: "pagination-bullet-active",
                    buttonDisabledClass: "disabled",
                    paginationCurrentClass: "pagination-current",
                    paginationTotalClass: "pagination-total",
                    paginationHiddenClass: "pagination-hidden",
                    paginationProgressbarClass: "pagination-progressbar",
                    paginationClickableClass: "pagination-clickable",
                    paginationModifierClass: "pagination-",
                    lazyLoadingClass: "lazy",
                    lazyStatusLoadingClass: "lazy-loading",
                    lazyStatusLoadedClass: "lazy-loaded",
                    lazyPreloaderClass: "lazy-preloader",
                    notificationClass: "notification",
                    preloaderClass: "preloader",
                    zoomContainerClass: "container-zoom",
                    observer: !1,
                    observeParents: !1,
                    a11y: !1,
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    runCallbacksOnInit: !0
                },
                g = s && s.virtualTranslate;
            s = s || {};
            var v = {};
            for (var w in s)
                if ("object" != typeof s[w] || null === s[w] || (s[w].nodeType || s[w] === window || s[w] === document || "undefined" != typeof i && s[w] instanceof i || "undefined" != typeof jQuery && s[w] instanceof jQuery)) v[w] = s[w];
                else {
                    v[w] = {};
                    for (var y in s[w]) v[w][y] = s[w][y]
                }
            for (var x in f)
                if ("undefined" == typeof s[x]) s[x] = f[x];
                else if ("object" == typeof s[x])
                for (var T in f[x]) "undefined" == typeof s[x][T] && (s[x][T] = f[x][T]);
            var b = this;
            if (b.params = s, b.originalParams = v, b.classNames = [], "undefined" != typeof t && "undefined" != typeof i && (t = i), ("undefined" != typeof t || (t = "undefined" == typeof i ? window.Dom7 || window.Zepto || window.jQuery : i)) && (b.$ = t, b.currentBreakpoint = void 0, b.getActiveBreakpoint = function() {
                    if (!b.params.breakpoints) return !1;
                    var e, t = !1,
                        a = [];
                    for (e in b.params.breakpoints) b.params.breakpoints.hasOwnProperty(e) && a.push(e);
                    a.sort(function(e, t) {
                        return parseInt(e, 10) > parseInt(t, 10)
                    });
                    for (var i = 0; i < a.length; i++) e = a[i], e >= window.innerWidth && !t && (t = e);
                    return t || "max"
                }, b.setBreakpoint = function() {
                    var e = b.getActiveBreakpoint();
                    if (e && b.currentBreakpoint !== e) {
                        var t = e in b.params.breakpoints ? b.params.breakpoints[e] : b.originalParams,
                            a = b.params.loop && t.slidesPerView !== b.params.slidesPerView;
                        for (var i in t) b.params[i] = t[i];
                        b.currentBreakpoint = e, a && b.destroyLoop && b.reLoop(!0)
                    }
                }, b.params.breakpoints && b.setBreakpoint(), b.container = t(e), 0 !== b.container.length)) {
                if (b.container.length > 1) {
                    var C = [];
                    return b.container.each(function() {
                        C.push(new a(this, s))
                    }), C
                }
                b.container[0].swiper = b, b.container.data("swiper", b), b.classNames.push(b.params.containerModifierClass + b.params.direction), b.params.freeMode && b.classNames.push(b.params.containerModifierClass + "free-mode"), b.support.flexbox || (b.classNames.push(b.params.containerModifierClass + "no-flexbox"), b.params.slidesPerColumn = 1), b.params.autoHeight && b.classNames.push(b.params.containerModifierClass + "autoheight"), (b.params.parallax || b.params.watchSlidesVisibility) && (b.params.watchSlidesProgress = !0), b.params.touchReleaseOnEdges && (b.params.resistanceRatio = 0), ["cube", "coverflow", "flip"].indexOf(b.params.effect) >= 0 && (b.support.transforms3d ? (b.params.watchSlidesProgress = !0, b.classNames.push(b.params.containerModifierClass + "3d")) : b.params.effect = "slide"), "slide" !== b.params.effect && b.classNames.push(b.params.containerModifierClass + b.params.effect), "cube" === b.params.effect && (b.params.resistanceRatio = 0, b.params.slidesPerView = 1, b.params.slidesPerColumn = 1, b.params.slidesPerGroup = 1, b.params.centeredSlides = !1, b.params.spaceBetween = 0, b.params.virtualTranslate = !0), "fade" !== b.params.effect && "flip" !== b.params.effect || (b.params.slidesPerView = 1, b.params.slidesPerColumn = 1, b.params.slidesPerGroup = 1, b.params.watchSlidesProgress = !0, b.params.spaceBetween = 0, "undefined" == typeof g && (b.params.virtualTranslate = !0)), b.params.grabCursor && b.support.touch && (b.params.grabCursor = !1), b.wrapper = b.container.children("." + b.params.wrapperClass), b.params.pagination && (b.paginationContainer = t(b.params.pagination), b.params.uniqueNavElements && "string" == typeof b.params.pagination && b.paginationContainer.length > 1 && 1 === b.container.find(b.params.pagination).length && (b.paginationContainer = b.container.find(b.params.pagination)), "bullets" === b.params.paginationType && b.params.paginationClickable ? b.paginationContainer.addClass(b.params.paginationModifierClass + "clickable") : b.params.paginationClickable = !1, b.paginationContainer.addClass(b.params.paginationModifierClass + b.params.paginationType)), (b.params.nextButton || b.params.prevButton) && (b.params.nextButton && (b.nextButton = t(b.params.nextButton), b.params.uniqueNavElements && "string" == typeof b.params.nextButton && b.nextButton.length > 1 && 1 === b.container.find(b.params.nextButton).length && (b.nextButton = b.container.find(b.params.nextButton))), b.params.prevButton && (b.prevButton = t(b.params.prevButton), b.params.uniqueNavElements && "string" == typeof b.params.prevButton && b.prevButton.length > 1 && 1 === b.container.find(b.params.prevButton).length && (b.prevButton = b.container.find(b.params.prevButton)))), b.isHorizontal = function() {
                    return "horizontal" === b.params.direction
                }, b.rtl = b.isHorizontal() && ("rtl" === b.container[0].dir.toLowerCase() || "rtl" === b.container.css("direction")), b.rtl && b.classNames.push(b.params.containerModifierClass + "rtl"), b.rtl && (b.wrongRTL = "-webkit-box" === b.wrapper.css("display")), b.params.slidesPerColumn > 1 && b.classNames.push(b.params.containerModifierClass + "multirow"), b.device.android && b.classNames.push(b.params.containerModifierClass + "android"), b.container.addClass(b.classNames.join(" ")), b.translate = 0, b.progress = 0, b.velocity = 0, b.lockSwipeToNext = function() {
                    b.params.allowSwipeToNext = !1, b.params.allowSwipeToPrev === !1 && b.params.grabCursor && b.unsetGrabCursor()
                }, b.lockSwipeToPrev = function() {
                    b.params.allowSwipeToPrev = !1, b.params.allowSwipeToNext === !1 && b.params.grabCursor && b.unsetGrabCursor()
                }, b.lockSwipes = function() {
                    b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !1, b.params.grabCursor && b.unsetGrabCursor()
                }, b.unlockSwipeToNext = function() {
                    b.params.allowSwipeToNext = !0, b.params.allowSwipeToPrev === !0 && b.params.grabCursor && b.setGrabCursor()
                }, b.unlockSwipeToPrev = function() {
                    b.params.allowSwipeToPrev = !0, b.params.allowSwipeToNext === !0 && b.params.grabCursor && b.setGrabCursor()
                }, b.unlockSwipes = function() {
                    b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !0, b.params.grabCursor && b.setGrabCursor()
                }, b.setGrabCursor = function(e) {
                    b.container[0].style.cursor = "move", isFirefox || (b.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"), b.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", b.container[0].style.cursor = e ? "grabbing" : "grab"
                }, b.unsetGrabCursor = function() {
                    b.container[0].style.cursor = ""
                }, b.params.grabCursor && b.setGrabCursor(), b.imagesToLoad = [], b.imagesLoaded = 0, b.loadImage = function(e, t, a, i, s, r) {
                    function n() {
                        r && r()
                    }
                    var o;
                    e.complete && s ? n() : t ? (o = new window.Image, o.onload = n, o.onerror = n, i && (o.sizes = i), a && (o.srcset = a), t && (o.src = t)) : n()
                }, b.preloadImages = function() {
                    function e() {
                        "undefined" != typeof b && null !== b && b && (void 0 !== b.imagesLoaded && b.imagesLoaded++, b.imagesLoaded === b.imagesToLoad.length && (b.params.updateOnImagesReady && b.update(), b.emit("onImagesReady", b)))
                    }
                    b.imagesToLoad = b.container.find("img");
                    for (var t = 0; t < b.imagesToLoad.length; t++) b.loadImage(b.imagesToLoad[t], b.imagesToLoad[t].currentSrc || b.imagesToLoad[t].getAttribute("src"), b.imagesToLoad[t].srcset || b.imagesToLoad[t].getAttribute("srcset"), b.imagesToLoad[t].sizes || b.imagesToLoad[t].getAttribute("sizes"), !0, e)
                }, b.autoplayTimeoutId = void 0, b.autoplaying = !1, b.autoplayPaused = !1, b.startAutoplay = function() {
                    return "undefined" != typeof b.autoplayTimeoutId ? !1 : b.params.autoplay ? b.autoplaying ? !1 : (b.autoplaying = !0, b.emit("onAutoplayStart", b), void n()) : !1
                }, b.stopAutoplay = function() {
                    b.autoplayTimeoutId && (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId), b.autoplaying = !1, b.autoplayTimeoutId = void 0, b.emit("onAutoplayStop", b))
                }, b.pauseAutoplay = function(e) {
                    b.autoplayPaused || (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId), b.autoplayPaused = !0, 0 === e ? (b.autoplayPaused = !1, n()) : b.wrapper.transitionEnd(function() {
                        b && (b.autoplayPaused = !1, b.autoplaying ? n() : b.stopAutoplay())
                    }))
                }, b.minTranslate = function() {
                    return -b.snapGrid[0]
                }, b.maxTranslate = function() {
                    return -b.snapGrid[b.snapGrid.length - 1]
                }, b.updateAutoHeight = function() {
                    var e, t = [],
                        a = 0;
                    if ("auto" !== b.params.slidesPerView && b.params.slidesPerView > 1)
                        for (e = 0; e < Math.ceil(b.params.slidesPerView); e++) {
                            var i = b.activeIndex + e;
                            if (i > b.slides.length) break;
                            t.push(b.slides.eq(i)[0])
                        } else t.push(b.slides.eq(b.activeIndex)[0]);
                    for (e = 0; e < t.length; e++)
                        if ("undefined" != typeof t[e]) {
                            var s = t[e].offsetHeight;
                            a = s > a ? s : a
                        }
                    a && b.wrapper.css("height", a + "px")
                }, b.updateContainerSize = function() {
                    var e, t;
                    e = "undefined" != typeof b.params.width ? b.params.width : b.container[0].clientWidth, t = "undefined" != typeof b.params.height ? b.params.height : b.container[0].clientHeight, 0 === e && b.isHorizontal() || 0 === t && !b.isHorizontal() || (e = e - parseInt(b.container.css("padding-left"), 10) - parseInt(b.container.css("padding-right"), 10), t = t - parseInt(b.container.css("padding-top"), 10) - parseInt(b.container.css("padding-bottom"), 10), b.width = e, b.height = t, b.size = b.isHorizontal() ? b.width : b.height)
                }, b.updateSlidesSize = function() {
                    b.slides = b.wrapper.children("." + b.params.slideClass), b.snapGrid = [], b.slidesGrid = [], b.slidesSizesGrid = [];
                    var e, t = b.params.spaceBetween,
                        a = -b.params.slidesOffsetBefore,
                        i = 0,
                        s = 0;
                    if ("undefined" != typeof b.size) {
                        "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * b.size), b.virtualSize = -t, b.rtl ? b.slides.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : b.slides.css({
                            marginRight: "",
                            marginBottom: ""
                        });
                        var n;
                        b.params.slidesPerColumn > 1 && (n = Math.floor(b.slides.length / b.params.slidesPerColumn) === b.slides.length / b.params.slidesPerColumn ? b.slides.length : Math.ceil(b.slides.length / b.params.slidesPerColumn) * b.params.slidesPerColumn, "auto" !== b.params.slidesPerView && "row" === b.params.slidesPerColumnFill && (n = Math.max(n, b.params.slidesPerView * b.params.slidesPerColumn)));
                        var o, l = b.params.slidesPerColumn,
                            p = n / l,
                            d = p - (b.params.slidesPerColumn * p - b.slides.length);
                        for (e = 0; e < b.slides.length; e++) {
                            o = 0;
                            var u = b.slides.eq(e);
                            if (b.params.slidesPerColumn > 1) {
                                var m, c, h;
                                "column" === b.params.slidesPerColumnFill ? (c = Math.floor(e / l), h = e - c * l, (c > d || c === d && h === l - 1) && ++h >= l && (h = 0, c++), m = c + h * n / l, u.css({
                                    "-webkit-box-ordinal-group": m,
                                    "-moz-box-ordinal-group": m,
                                    "-ms-flex-order": m,
                                    "-webkit-order": m,
                                    order: m
                                })) : (h = Math.floor(e / p), c = e - h * p), u.css("margin-" + (b.isHorizontal() ? "top" : "left"), 0 !== h && b.params.spaceBetween && b.params.spaceBetween + "px").attr("data-column", c).attr("data-row", h)
                            }
                            "none" !== u.css("display") && ("auto" === b.params.slidesPerView ? (o = b.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0), b.params.roundLengths && (o = r(o))) : (o = (b.size - (b.params.slidesPerView - 1) * t) / b.params.slidesPerView, b.params.roundLengths && (o = r(o)), b.isHorizontal() ? b.slides[e].style.width = o + "px" : b.slides[e].style.height = o + "px"), b.slides[e].swiperSlideSize = o, b.slidesSizesGrid.push(o), b.params.centeredSlides ? (a = a + o / 2 + i / 2 + t, 0 === i && 0 !== e && (a = a - b.size / 2 - t), 0 === e && (a = a - b.size / 2 - t), Math.abs(a) < .001 && (a = 0), s % b.params.slidesPerGroup === 0 && b.snapGrid.push(a), b.slidesGrid.push(a)) : (s % b.params.slidesPerGroup === 0 && b.snapGrid.push(a), b.slidesGrid.push(a), a = a + o + t), b.virtualSize += o + t, i = o, s++)
                        }
                        b.virtualSize = Math.max(b.virtualSize, b.size) + b.params.slidesOffsetAfter;
                        var f;
                        if (b.rtl && b.wrongRTL && ("slide" === b.params.effect || "coverflow" === b.params.effect) && b.wrapper.css({
                                width: b.virtualSize + b.params.spaceBetween + "px"
                            }), b.support.flexbox && !b.params.setWrapperSize || (b.isHorizontal() ? b.wrapper.css({
                                width: b.virtualSize + b.params.spaceBetween + "px"
                            }) : b.wrapper.css({
                                height: b.virtualSize + b.params.spaceBetween + "px"
                            })), b.params.slidesPerColumn > 1 && (b.virtualSize = (o + b.params.spaceBetween) * n, b.virtualSize = Math.ceil(b.virtualSize / b.params.slidesPerColumn) - b.params.spaceBetween, b.isHorizontal() ? b.wrapper.css({
                                width: b.virtualSize + b.params.spaceBetween + "px"
                            }) : b.wrapper.css({
                                height: b.virtualSize + b.params.spaceBetween + "px"
                            }), b.params.centeredSlides)) {
                            for (f = [], e = 0; e < b.snapGrid.length; e++) b.snapGrid[e] < b.virtualSize + b.snapGrid[0] && f.push(b.snapGrid[e]);
                            b.snapGrid = f
                        }
                        if (!b.params.centeredSlides) {
                            for (f = [], e = 0; e < b.snapGrid.length; e++) b.snapGrid[e] <= b.virtualSize - b.size && f.push(b.snapGrid[e]);
                            b.snapGrid = f, Math.floor(b.virtualSize - b.size) - Math.floor(b.snapGrid[b.snapGrid.length - 1]) > 1 && b.snapGrid.push(b.virtualSize - b.size)
                        }
                        0 === b.snapGrid.length && (b.snapGrid = [0]), 0 !== b.params.spaceBetween && (b.isHorizontal() ? b.rtl ? b.slides.css({
                            marginLeft: t + "px"
                        }) : b.slides.css({
                            marginRight: t + "px"
                        }) : b.slides.css({
                            marginBottom: t + "px"
                        })), b.params.watchSlidesProgress && b.updateSlidesOffset()
                    }
                }, b.updateSlidesOffset = function() {
                    for (var e = 0; e < b.slides.length; e++) b.slides[e].swiperSlideOffset = b.isHorizontal() ? b.slides[e].offsetLeft : b.slides[e].offsetTop
                }, b.currentSlidesPerView = function() {
                    var e, t, a = 1;
                    if (b.params.centeredSlides) {
                        var i, s = b.slides[b.activeIndex].swiperSlideSize;
                        for (e = b.activeIndex + 1; e < b.slides.length; e++) b.slides[e] && !i && (s += b.slides[e].swiperSlideSize, a++, s > b.size && (i = !0));
                        for (t = b.activeIndex - 1; t >= 0; t--) b.slides[t] && !i && (s += b.slides[t].swiperSlideSize, a++, s > b.size && (i = !0))
                    } else
                        for (e = b.activeIndex + 1; e < b.slides.length; e++) b.slidesGrid[e] - b.slidesGrid[b.activeIndex] < b.size && a++;
                    return a
                }, b.updateSlidesProgress = function(e) {
                    if ("undefined" == typeof e && (e = b.translate || 0), 0 !== b.slides.length) {
                        "undefined" == typeof b.slides[0].swiperSlideOffset && b.updateSlidesOffset();
                        var t = -e;
                        b.rtl && (t = e), b.slides.removeClass(b.params.slideVisibleClass);
                        for (var a = 0; a < b.slides.length; a++) {
                            var i = b.slides[a],
                                s = (t + (b.params.centeredSlides ? b.minTranslate() : 0) - i.swiperSlideOffset) / (i.swiperSlideSize + b.params.spaceBetween);
                            if (b.params.watchSlidesVisibility) {
                                var r = -(t - i.swiperSlideOffset),
                                    n = r + b.slidesSizesGrid[a],
                                    o = r >= 0 && r < b.size || n > 0 && n <= b.size || 0 >= r && n >= b.size;
                                o && b.slides.eq(a).addClass(b.params.slideVisibleClass)
                            }
                            i.progress = b.rtl ? -s : s
                        }
                    }
                }, b.updateProgress = function(e) {
                    "undefined" == typeof e && (e = b.translate || 0);
                    var t = b.maxTranslate() - b.minTranslate(),
                        a = b.isBeginning,
                        i = b.isEnd;
                    0 === t ? (b.progress = 0, b.isBeginning = b.isEnd = !0) : (b.progress = (e - b.minTranslate()) / t, b.isBeginning = b.progress <= 0, b.isEnd = b.progress >= 1), b.isBeginning && !a && b.emit("onReachBeginning", b), b.isEnd && !i && b.emit("onReachEnd", b), b.params.watchSlidesProgress && b.updateSlidesProgress(e), b.emit("onProgress", b, b.progress)
                }, b.updateActiveIndex = function() {
                    var e, t, a, i = b.rtl ? b.translate : -b.translate;
                    for (t = 0; t < b.slidesGrid.length; t++) "undefined" != typeof b.slidesGrid[t + 1] ? i >= b.slidesGrid[t] && i < b.slidesGrid[t + 1] - (b.slidesGrid[t + 1] - b.slidesGrid[t]) / 2 ? e = t : i >= b.slidesGrid[t] && i < b.slidesGrid[t + 1] && (e = t + 1) : i >= b.slidesGrid[t] && (e = t);
                    b.params.normalizeSlideIndex && (0 > e || "undefined" == typeof e) && (e = 0), a = Math.floor(e / b.params.slidesPerGroup), a >= b.snapGrid.length && (a = b.snapGrid.length - 1), e !== b.activeIndex && (b.snapIndex = a, b.previousIndex = b.activeIndex, b.activeIndex = e, b.updateClasses(), b.updateRealIndex())
                }, b.updateRealIndex = function() {
                    b.realIndex = parseInt(b.slides.eq(b.activeIndex).attr("data-item-index") || b.activeIndex, 10)
                }, b.updateClasses = function() {
                    b.slides.removeClass(b.params.slideActiveClass + " " + b.params.slideNextClass + " " + b.params.slidePrevClass + " " + b.params.slideDuplicateActiveClass + " " + b.params.slideDuplicateNextClass + " " + b.params.slideDuplicatePrevClass);
                    var e = b.slides.eq(b.activeIndex);
                    e.addClass(b.params.slideActiveClass), s.loop && (e.hasClass(b.params.slideDuplicateClass) ? b.wrapper.children("." + b.params.slideClass + ":not(." + b.params.slideDuplicateClass + ')[data-item-index="' + b.realIndex + '"]').addClass(b.params.slideDuplicateActiveClass) : b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass + '[data-item-index="' + b.realIndex + '"]').addClass(b.params.slideDuplicateActiveClass));
                    var a = e.next("." + b.params.slideClass).addClass(b.params.slideNextClass);
                    b.params.loop && 0 === a.length && (a = b.slides.eq(0), a.addClass(b.params.slideNextClass));
                    var i = e.prev("." + b.params.slideClass).addClass(b.params.slidePrevClass);
                    if (b.params.loop && 0 === i.length && (i = b.slides.eq(-1), i.addClass(b.params.slidePrevClass)), s.loop && (a.hasClass(b.params.slideDuplicateClass) ? b.wrapper.children("." + b.params.slideClass + ":not(." + b.params.slideDuplicateClass + ')[data-item-index="' + a.attr("data-item-index") + '"]').addClass(b.params.slideDuplicateNextClass) : b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass + '[data-item-index="' + a.attr("data-item-index") + '"]').addClass(b.params.slideDuplicateNextClass), i.hasClass(b.params.slideDuplicateClass) ? b.wrapper.children("." + b.params.slideClass + ":not(." + b.params.slideDuplicateClass + ')[data-item-index="' + i.attr("data-item-index") + '"]').addClass(b.params.slideDuplicatePrevClass) : b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass + '[data-item-index="' + i.attr("data-item-index") + '"]').addClass(b.params.slideDuplicatePrevClass)), b.paginationContainer && b.paginationContainer.length > 0) {
                        var r, n = b.params.loop ? Math.ceil((b.slides.length - 2 * b.loopedSlides) / b.params.slidesPerGroup) : b.snapGrid.length;
                        if (b.params.loop ? (r = Math.ceil((b.activeIndex - b.loopedSlides) / b.params.slidesPerGroup), r > b.slides.length - 1 - 2 * b.loopedSlides && (r -= b.slides.length - 2 * b.loopedSlides), r > n - 1 && (r -= n), 0 > r && "bullets" !== b.params.paginationType && (r = n + r)) : r = "undefined" != typeof b.snapIndex ? b.snapIndex : b.activeIndex || 0, "bullets" === b.params.paginationType && b.bullets && b.bullets.length > 0 && (b.bullets.removeClass(b.params.bulletActiveClass), b.paginationContainer.length > 1 ? b.bullets.each(function() {
                                t(this).index() === r && t(this).addClass(b.params.bulletActiveClass)
                            }) : b.bullets.eq(r).addClass(b.params.bulletActiveClass)), "fraction" === b.params.paginationType && (b.paginationContainer.find("." + b.params.paginationCurrentClass).text(r + 1), b.paginationContainer.find("." + b.params.paginationTotalClass).text(n)), "progress" === b.params.paginationType) {
                            var o = (r + 1) / n,
                                l = o,
                                p = 1;
                            b.isHorizontal() || (p = o, l = 1), b.paginationContainer.find("." + b.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + p + ")").transition(b.params.speed)
                        }
                        "custom" === b.params.paginationType && b.params.paginationCustomRender && (b.paginationContainer.html(b.params.paginationCustomRender(b, r + 1, n)), b.emit("onPaginationRendered", b, b.paginationContainer[0]))
                    }
                    b.params.loop || (b.params.prevButton && b.prevButton && b.prevButton.length > 0 && (b.isBeginning ? (b.prevButton.addClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.disable(b.prevButton)) : (b.prevButton.removeClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.enable(b.prevButton))), b.params.nextButton && b.nextButton && b.nextButton.length > 0 && (b.isEnd ? (b.nextButton.addClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.disable(b.nextButton)) : (b.nextButton.removeClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.enable(b.nextButton))))
                }, b.updatePagination = function() {
                    if (b.params.pagination && b.paginationContainer && b.paginationContainer.length > 0) {
                        var e = "";
                        if ("bullets" === b.params.paginationType) {
                            for (var t = b.params.loop ? Math.ceil((b.slides.length - 2 * b.loopedSlides) / b.params.slidesPerGroup) : b.snapGrid.length, a = 0; t > a; a++) e += b.params.paginationBulletRender ? b.params.paginationBulletRender(b, a, b.params.bulletClass) : "<" + b.params.paginationElement + ' class="' + b.params.bulletClass + '"><i></i></' + b.params.paginationElement + ">";
                            b.paginationContainer.html(e), b.bullets = b.paginationContainer.find("." + b.params.bulletClass), b.params.paginationClickable && b.params.a11y && b.a11y && b.a11y.initPagination()
                        }
                        "fraction" === b.params.paginationType && (e = b.params.paginationFractionRender ? b.params.paginationFractionRender(b, b.params.paginationCurrentClass, b.params.paginationTotalClass) : '<span class="' + b.params.paginationCurrentClass + '"></span> / <span class="' + b.params.paginationTotalClass + '"></span>', b.paginationContainer.html(e)), "progress" === b.params.paginationType && (e = b.params.paginationProgressRender ? b.params.paginationProgressRender(b, b.params.paginationProgressbarClass) : '<span class="' + b.params.paginationProgressbarClass + '"></span>', b.paginationContainer.html(e)), "custom" !== b.params.paginationType && b.emit("onPaginationRendered", b, b.paginationContainer[0])
                    }
                }, b.update = function(e) {
                    function t() {
                        b.rtl ? -b.translate : b.translate;
                        a = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate()), b.setWrapperTranslate(a), b.updateActiveIndex(), b.updateClasses()
                    }
                    if (b) {
                        b.updateContainerSize(), b.updateSlidesSize(), b.updateProgress(), b.updatePagination(), b.updateClasses(), b.params.scrollbar && b.scrollbar && b.scrollbar.set();
                        var a;
                        if (e) {
                            var i;
                            b.controller && b.controller.spline && (b.controller.spline = void 0), b.params.freeMode ? (t(), b.params.autoHeight && b.updateAutoHeight()) : (i = ("auto" === b.params.slidesPerView || b.params.slidesPerView > 1) && b.isEnd && !b.params.centeredSlides ? b.slideTo(b.slides.length - 1, 0, !1, !0) : b.slideTo(b.activeIndex, 0, !1, !0), i || t())
                        } else b.params.autoHeight && b.updateAutoHeight()
                    }
                }, b.onResize = function(e) {
                    b.params.onBeforeResize && b.params.onBeforeResize(b), b.params.breakpoints && b.setBreakpoint();
                    var t = b.params.allowSwipeToPrev,
                        a = b.params.allowSwipeToNext;
                    b.params.allowSwipeToPrev = b.params.allowSwipeToNext = !0, b.updateContainerSize(), b.updateSlidesSize(), ("auto" === b.params.slidesPerView || b.params.freeMode || e) && b.updatePagination(), b.params.scrollbar && b.scrollbar && b.scrollbar.set(), b.controller && b.controller.spline && (b.controller.spline = void 0);
                    var i = !1;
                    if (b.params.freeMode) {
                        var s = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate());
                        b.setWrapperTranslate(s), b.updateActiveIndex(), b.updateClasses(), b.params.autoHeight && b.updateAutoHeight()
                    } else b.updateClasses(), i = ("auto" === b.params.slidesPerView || b.params.slidesPerView > 1) && b.isEnd && !b.params.centeredSlides ? b.slideTo(b.slides.length - 1, 0, !1, !0) : b.slideTo(b.activeIndex, 0, !1, !0);
                    b.params.lazyLoading && !i && b.lazy && b.lazy.load(), b.params.allowSwipeToPrev = t, b.params.allowSwipeToNext = a, b.params.onAfterResize && b.params.onAfterResize(b)
                }, b.touchEventsDesktop = {
                    start: "mousedown",
                    move: "mousemove",
                    end: "mouseup"
                }, window.navigator.pointerEnabled ? b.touchEventsDesktop = {
                    start: "pointerdown",
                    move: "pointermove",
                    end: "pointerup"
                } : window.navigator.msPointerEnabled && (b.touchEventsDesktop = {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                }), b.touchEvents = {
                    start: b.support.touch || !b.params.simulateTouch ? "touchstart" : b.touchEventsDesktop.start,
                    move: b.support.touch || !b.params.simulateTouch ? "touchmove" : b.touchEventsDesktop.move,
                    end: b.support.touch || !b.params.simulateTouch ? "touchend" : b.touchEventsDesktop.end
                }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === b.params.touchEventsTarget ? b.container : b.wrapper).addClass("wp8-" + b.params.direction), b.initEvents = function(e) {
                    var t = e ? "off" : "on",
                        a = e ? "removeEventListener" : "addEventListener",
                        i = "container" === b.params.touchEventsTarget ? b.container[0] : b.wrapper[0],
                        r = b.support.touch ? i : document,
                        n = !!b.params.nested;
                    if (b.browser.ie) i[a](b.touchEvents.start, b.onTouchStart, !1), r[a](b.touchEvents.move, b.onTouchMove, n), r[a](b.touchEvents.end, b.onTouchEnd, !1);
                    else {
                        if (b.support.touch) {
                            var o = "touchstart" === b.touchEvents.start && b.support.passiveListener && b.params.passiveListeners ? {
                                passive: !0,
                                capture: !1
                            } : !1;
                            i[a](b.touchEvents.start, b.onTouchStart, o), i[a](b.touchEvents.move, b.onTouchMove, n), i[a](b.touchEvents.end, b.onTouchEnd, o)
                        }(s.simulateTouch && !b.device.ios && !b.device.android || s.simulateTouch && !b.support.touch && b.device.ios) && (i[a]("mousedown", b.onTouchStart, !1), document[a]("mousemove", b.onTouchMove, n), document[a]("mouseup", b.onTouchEnd, !1))
                    }
                    window[a]("resize", b.onResize), b.params.nextButton && b.nextButton && b.nextButton.length > 0 && (b.nextButton[t]("click", b.onClickNext), b.params.a11y && b.a11y && b.nextButton[t]("keydown", b.a11y.onEnterKey)), b.params.prevButton && b.prevButton && b.prevButton.length > 0 && (b.prevButton[t]("click", b.onClickPrev), b.params.a11y && b.a11y && b.prevButton[t]("keydown", b.a11y.onEnterKey)), b.params.pagination && b.params.paginationClickable && (b.paginationContainer[t]("click", "." + b.params.bulletClass, b.onClickIndex), b.params.a11y && b.a11y && b.paginationContainer[t]("keydown", "." + b.params.bulletClass, b.a11y.onEnterKey)), (b.params.preventClicks || b.params.preventClicksPropagation) && i[a]("click", b.preventClicks, !0)
                }, b.attachEvents = function() {
                    b.initEvents()
                }, b.detachEvents = function() {
                    b.initEvents(!0)
                }, b.allowClick = !0, b.preventClicks = function(e) {
                    b.allowClick || (b.params.preventClicks && e.preventDefault(), b.params.preventClicksPropagation && b.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                }, b.onClickNext = function(e) {
                    e.preventDefault(), b.isEnd && !b.params.loop || b.slideNext()
                }, b.onClickPrev = function(e) {
                    e.preventDefault(), b.isBeginning && !b.params.loop || b.slidePrev()
                }, b.onClickIndex = function(e) {
                    e.preventDefault();
                    var a = t(this).index() * b.params.slidesPerGroup;
                    b.params.loop && (a += b.loopedSlides), b.slideTo(a)
                }, b.updateClickedSlide = function(e) {
                    var a = o(e, "." + b.params.slideClass),
                        i = !1;
                    if (a)
                        for (var s = 0; s < b.slides.length; s++) b.slides[s] === a && (i = !0);
                    if (!a || !i) return b.clickedSlide = void 0, void(b.clickedIndex = void 0);
                    if (b.clickedSlide = a, b.clickedIndex = t(a).index(), b.params.slideToClickedSlide && void 0 !== b.clickedIndex && b.clickedIndex !== b.activeIndex) {
                        var r, n = b.clickedIndex,
                            l = "auto" === b.params.slidesPerView ? b.currentSlidesPerView() : b.params.slidesPerView;
                        if (b.params.loop) {
                            if (b.animating) return;
                            r = parseInt(t(b.clickedSlide).attr("data-item-index"), 10), b.params.centeredSlides ? n < b.loopedSlides - l / 2 || n > b.slides.length - b.loopedSlides + l / 2 ? (b.fixLoop(), n = b.wrapper.children("." + b.params.slideClass + '[data-item-index="' + r + '"]:not(.' + b.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                                b.slideTo(n)
                            }, 0)) : b.slideTo(n) : n > b.slides.length - l ? (b.fixLoop(), n = b.wrapper.children("." + b.params.slideClass + '[data-item-index="' + r + '"]:not(.' + b.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                                b.slideTo(n)
                            }, 0)) : b.slideTo(n)
                        } else b.slideTo(n)
                    }
                };
                var S, I, z, M, P, E, B, k, D, L, A = "input, select, textarea, button, video",
                    X = Date.now(),
                    H = [];
                b.animating = !1, b.touches = {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                };
                var W, Y;
                b.onTouchStart = function(e) {
                    if (e.originalEvent && (e = e.originalEvent), W = "touchstart" === e.type, W || !("which" in e) || 3 !== e.which) {
                        if (b.params.noSwiping && o(e, "." + b.params.noSwipingClass)) return void(b.allowClick = !0);
                        if (!b.params.swipeHandler || o(e, b.params.swipeHandler)) {
                            var a = b.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                i = b.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                            if (!(b.device.ios && b.params.iOSEdgeSwipeDetection && a <= b.params.iOSEdgeSwipeThreshold)) {
                                if (S = !0, I = !1, z = !0, P = void 0, Y = void 0, b.touches.startX = a, b.touches.startY = i, M = Date.now(), b.allowClick = !0, b.updateContainerSize(), b.swipeDirection = void 0, b.params.threshold > 0 && (k = !1), "touchstart" !== e.type) {
                                    var s = !0;
                                    t(e.target).is(A) && (s = !1), document.activeElement && t(document.activeElement).is(A) && document.activeElement.blur(), s && e.preventDefault()
                                }
                                b.emit("onTouchStart", b, e)
                            }
                        }
                    }
                }, b.onTouchMove = function(e) {
                    if (e.originalEvent && (e = e.originalEvent), !W || "mousemove" !== e.type) {
                        if (e.preventedByNestedSwiper) return b.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, void(b.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
                        if (b.params.onlyExternal) return b.allowClick = !1, void(S && (b.touches.startX = b.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, b.touches.startY = b.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, M = Date.now()));
                        if (W && b.params.touchReleaseOnEdges && !b.params.loop)
                            if (b.isHorizontal()) {
                                if (b.touches.currentX < b.touches.startX && b.translate <= b.maxTranslate() || b.touches.currentX > b.touches.startX && b.translate >= b.minTranslate()) return
                            } else if (b.touches.currentY < b.touches.startY && b.translate <= b.maxTranslate() || b.touches.currentY > b.touches.startY && b.translate >= b.minTranslate()) return;
                        if (W && document.activeElement && e.target === document.activeElement && t(e.target).is(A)) return I = !0, void(b.allowClick = !1);
                        if (z && b.emit("onTouchMove", b, e), !(e.targetTouches && e.targetTouches.length > 1)) {
                            if (b.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, b.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof P) {
                                var a;
                                b.isHorizontal() && b.touches.currentY === b.touches.startY || !b.isHorizontal() && b.touches.currentX === b.touches.startX ? P = !1 : (a = 180 * Math.atan2(Math.abs(b.touches.currentY - b.touches.startY), Math.abs(b.touches.currentX - b.touches.startX)) / Math.PI, P = b.isHorizontal() ? a > b.params.touchAngle : 90 - a > b.params.touchAngle)
                            }
                            if (P && b.emit("onTouchMoveOpposite", b, e), "undefined" == typeof Y && (b.touches.currentX === b.touches.startX && b.touches.currentY === b.touches.startY || (Y = !0)), S) {
                                if (P) return void(S = !1);
                                if (Y) {
                                    b.allowClick = !1, b.emit("onSliderMove", b, e), e.preventDefault(), b.params.touchMoveStopPropagation && !b.params.nested && e.stopPropagation(), I || (s.loop && b.fixLoop(), B = b.getWrapperTranslate(), b.setWrapperTransition(0), b.animating && b.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), b.params.autoplay && b.autoplaying && (b.params.autoplayDisableOnInteraction ? b.stopAutoplay() : b.pauseAutoplay()), L = !1, !b.params.grabCursor || b.params.allowSwipeToNext !== !0 && b.params.allowSwipeToPrev !== !0 || b.setGrabCursor(!0)), I = !0;
                                    var i = b.touches.diff = b.isHorizontal() ? b.touches.currentX - b.touches.startX : b.touches.currentY - b.touches.startY;
                                    i *= b.params.touchRatio, b.rtl && (i = -i), b.swipeDirection = i > 0 ? "prev" : "next", E = i + B;
                                    var r = !0;
                                    if (i > 0 && E > b.minTranslate() ? (r = !1, b.params.resistance && (E = b.minTranslate() - 1 + Math.pow(-b.minTranslate() + B + i, b.params.resistanceRatio))) : 0 > i && E < b.maxTranslate() && (r = !1, b.params.resistance && (E = b.maxTranslate() + 1 - Math.pow(b.maxTranslate() - B - i, b.params.resistanceRatio))), r && (e.preventedByNestedSwiper = !0), !b.params.allowSwipeToNext && "next" === b.swipeDirection && B > E && (E = B), !b.params.allowSwipeToPrev && "prev" === b.swipeDirection && E > B && (E = B), b.params.threshold > 0) {
                                        if (!(Math.abs(i) > b.params.threshold || k)) return void(E = B);
                                        if (!k) return k = !0, b.touches.startX = b.touches.currentX, b.touches.startY = b.touches.currentY, E = B, void(b.touches.diff = b.isHorizontal() ? b.touches.currentX - b.touches.startX : b.touches.currentY - b.touches.startY)
                                    }
                                    b.params.followFinger && ((b.params.freeMode || b.params.watchSlidesProgress) && b.updateActiveIndex(), b.params.freeMode && (0 === H.length && H.push({
                                        position: b.touches[b.isHorizontal() ? "startX" : "startY"],
                                        time: M
                                    }), H.push({
                                        position: b.touches[b.isHorizontal() ? "currentX" : "currentY"],
                                        time: (new window.Date).getTime()
                                    })), b.updateProgress(E), b.setWrapperTranslate(E))
                                }
                            }
                        }
                    }
                }, b.onTouchEnd = function(e) {
                    if (e.originalEvent && (e = e.originalEvent), z && b.emit("onTouchEnd", b, e), z = !1, S) {
                        b.params.grabCursor && I && S && (b.params.allowSwipeToNext === !0 || b.params.allowSwipeToPrev === !0) && b.setGrabCursor(!1);
                        var a = Date.now(),
                            i = a - M;
                        if (b.allowClick && (b.updateClickedSlide(e), b.emit("onTap", b, e), 300 > i && a - X > 300 && (D && clearTimeout(D), D = setTimeout(function() {
                                b && (b.params.paginationHide && b.paginationContainer.length > 0 && !t(e.target).hasClass(b.params.bulletClass) && b.paginationContainer.toggleClass(b.params.paginationHiddenClass), b.emit("onClick", b, e))
                            }, 300)), 300 > i && 300 > a - X && (D && clearTimeout(D), b.emit("onDoubleTap", b, e))), X = Date.now(), setTimeout(function() {
                                b && (b.allowClick = !0)
                            }, 0), !S || !I || !b.swipeDirection || 0 === b.touches.diff || E === B) return void(S = I = !1);
                        S = I = !1;
                        var s;
                        if (s = b.params.followFinger ? b.rtl ? b.translate : -b.translate : -E, b.params.freeMode) {
                            if (s < -b.minTranslate()) return void b.slideTo(b.activeIndex);
                            if (s > -b.maxTranslate()) return void(b.slides.length < b.snapGrid.length ? b.slideTo(b.snapGrid.length - 1) : b.slideTo(b.slides.length - 1));
                            if (b.params.freeModeMomentum) {
                                if (H.length > 1) {
                                    var r = H.pop(),
                                        n = H.pop(),
                                        o = r.position - n.position,
                                        l = r.time - n.time;
                                    b.velocity = o / l, b.velocity = b.velocity / 2, Math.abs(b.velocity) < b.params.freeModeMinimumVelocity && (b.velocity = 0), (l > 150 || (new window.Date).getTime() - r.time > 300) && (b.velocity = 0)
                                } else b.velocity = 0;
                                b.velocity = b.velocity * b.params.freeModeMomentumVelocityRatio, H.length = 0;
                                var p = 1e3 * b.params.freeModeMomentumRatio,
                                    d = b.velocity * p,
                                    u = b.translate + d;
                                b.rtl && (u = -u);
                                var m, c = !1,
                                    h = 20 * Math.abs(b.velocity) * b.params.freeModeMomentumBounceRatio;
                                if (u < b.maxTranslate()) b.params.freeModeMomentumBounce ? (u + b.maxTranslate() < -h && (u = b.maxTranslate() - h), m = b.maxTranslate(), c = !0, L = !0) : u = b.maxTranslate();
                                else if (u > b.minTranslate()) b.params.freeModeMomentumBounce ? (u - b.minTranslate() > h && (u = b.minTranslate() + h), m = b.minTranslate(), c = !0, L = !0) : u = b.minTranslate();
                                else if (b.params.freeModeSticky) {
                                    var f, g = 0;
                                    for (g = 0; g < b.snapGrid.length; g += 1)
                                        if (b.snapGrid[g] > -u) {
                                            f = g;
                                            break
                                        }
                                    u = Math.abs(b.snapGrid[f] - u) < Math.abs(b.snapGrid[f - 1] - u) || "next" === b.swipeDirection ? b.snapGrid[f] : b.snapGrid[f - 1], b.rtl || (u = -u)
                                }
                                if (0 !== b.velocity) p = b.rtl ? Math.abs((-u - b.translate) / b.velocity) : Math.abs((u - b.translate) / b.velocity);
                                else if (b.params.freeModeSticky) return void b.slideReset();
                                b.params.freeModeMomentumBounce && c ? (b.updateProgress(m), b.setWrapperTransition(p), b.setWrapperTranslate(u), b.onTransitionStart(), b.animating = !0, b.wrapper.transitionEnd(function() {
                                    b && L && (b.emit("onMomentumBounce", b), b.setWrapperTransition(b.params.speed), b.setWrapperTranslate(m), b.wrapper.transitionEnd(function() {
                                        b && b.onTransitionEnd();
                                    }))
                                })) : b.velocity ? (b.updateProgress(u), b.setWrapperTransition(p), b.setWrapperTranslate(u), b.onTransitionStart(), b.animating || (b.animating = !0, b.wrapper.transitionEnd(function() {
                                    b && b.onTransitionEnd()
                                }))) : b.updateProgress(u), b.updateActiveIndex()
                            }
                            return void((!b.params.freeModeMomentum || i >= b.params.longSwipesMs) && (b.updateProgress(), b.updateActiveIndex()))
                        }
                        var v, w = 0,
                            y = b.slidesSizesGrid[0];
                        for (v = 0; v < b.slidesGrid.length; v += b.params.slidesPerGroup) "undefined" != typeof b.slidesGrid[v + b.params.slidesPerGroup] ? s >= b.slidesGrid[v] && s < b.slidesGrid[v + b.params.slidesPerGroup] && (w = v, y = b.slidesGrid[v + b.params.slidesPerGroup] - b.slidesGrid[v]) : s >= b.slidesGrid[v] && (w = v, y = b.slidesGrid[b.slidesGrid.length - 1] - b.slidesGrid[b.slidesGrid.length - 2]);
                        var x = (s - b.slidesGrid[w]) / y;
                        if (i > b.params.longSwipesMs) {
                            if (!b.params.longSwipes) return void b.slideTo(b.activeIndex);
                            "next" === b.swipeDirection && (x >= b.params.longSwipesRatio ? b.slideTo(w + b.params.slidesPerGroup) : b.slideTo(w)), "prev" === b.swipeDirection && (x > 1 - b.params.longSwipesRatio ? b.slideTo(w + b.params.slidesPerGroup) : b.slideTo(w))
                        } else {
                            if (!b.params.shortSwipes) return void b.slideTo(b.activeIndex);
                            "next" === b.swipeDirection && b.slideTo(w + b.params.slidesPerGroup), "prev" === b.swipeDirection && b.slideTo(w)
                        }
                    }
                }, b._slideTo = function(e, t) {
                    return b.slideTo(e, t, !0, !0)
                }, b.slideTo = function(e, t, a, i) {
                    "undefined" == typeof a && (a = !0), "undefined" == typeof e && (e = 0), 0 > e && (e = 0), b.snapIndex = Math.floor(e / b.params.slidesPerGroup), b.snapIndex >= b.snapGrid.length && (b.snapIndex = b.snapGrid.length - 1);
                    var s = -b.snapGrid[b.snapIndex];
                    if (b.params.autoplay && b.autoplaying && (i || !b.params.autoplayDisableOnInteraction ? b.pauseAutoplay(t) : b.stopAutoplay()), b.updateProgress(s), b.params.normalizeSlideIndex)
                        for (var r = 0; r < b.slidesGrid.length; r++) - Math.floor(100 * s) >= Math.floor(100 * b.slidesGrid[r]) && (e = r);
                    return !b.params.allowSwipeToNext && s < b.translate && s < b.minTranslate() ? !1 : !b.params.allowSwipeToPrev && s > b.translate && s > b.maxTranslate() && (b.activeIndex || 0) !== e ? !1 : ("undefined" == typeof t && (t = b.params.speed), b.previousIndex = b.activeIndex || 0, b.activeIndex = e, b.updateRealIndex(), b.rtl && -s === b.translate || !b.rtl && s === b.translate ? (b.params.autoHeight && b.updateAutoHeight(), b.updateClasses(), "slide" !== b.params.effect && b.setWrapperTranslate(s), !1) : (b.updateClasses(), b.onTransitionStart(a), 0 === t || b.browser.lteIE9 ? (b.setWrapperTranslate(s), b.setWrapperTransition(0), b.onTransitionEnd(a)) : (b.setWrapperTranslate(s), b.setWrapperTransition(t), b.animating || (b.animating = !0, b.wrapper.transitionEnd(function() {
                        b && b.onTransitionEnd(a)
                    }))), !0))
                }, b.onTransitionStart = function(e) {
                    "undefined" == typeof e && (e = !0), b.params.autoHeight && b.updateAutoHeight(), b.lazy && b.lazy.onTransitionStart(), e && (b.emit("onTransitionStart", b), b.activeIndex !== b.previousIndex && (b.emit("onSlideChangeStart", b), b.activeIndex > b.previousIndex ? b.emit("onSlideNextStart", b) : b.emit("onSlidePrevStart", b)))
                }, b.onTransitionEnd = function(e) {
                    b.animating = !1, b.setWrapperTransition(0), "undefined" == typeof e && (e = !0), b.lazy && b.lazy.onTransitionEnd(), e && (b.emit("onTransitionEnd", b), b.activeIndex !== b.previousIndex && (b.emit("onSlideChangeEnd", b), b.activeIndex > b.previousIndex ? b.emit("onSlideNextEnd", b) : b.emit("onSlidePrevEnd", b))), b.params.history && b.history && b.history.setHistory(b.params.history, b.activeIndex), b.params.hashnav && b.hashnav && b.hashnav.setHash()
                }, b.slideNext = function(e, t, a) {
                    if (b.params.loop) {
                        if (b.animating) return !1;
                        b.fixLoop();
                        b.container[0].clientLeft;
                        return b.slideTo(b.activeIndex + b.params.slidesPerGroup, t, e, a)
                    }
                    return b.slideTo(b.activeIndex + b.params.slidesPerGroup, t, e, a)
                }, b._slideNext = function(e) {
                    return b.slideNext(!0, e, !0)
                }, b.slidePrev = function(e, t, a) {
                    if (b.params.loop) {
                        if (b.animating) return !1;
                        b.fixLoop();
                        b.container[0].clientLeft;
                        return b.slideTo(b.activeIndex - 1, t, e, a)
                    }
                    return b.slideTo(b.activeIndex - 1, t, e, a)
                }, b._slidePrev = function(e) {
                    return b.slidePrev(!0, e, !0)
                }, b.slideReset = function(e, t) {
                    return b.slideTo(b.activeIndex, t, e)
                }, b.disableTouchControl = function() {
                    return b.params.onlyExternal = !0, !0
                }, b.enableTouchControl = function() {
                    return b.params.onlyExternal = !1, !0
                }, b.setWrapperTransition = function(e, t) {
                    b.wrapper.transition(e), "slide" !== b.params.effect && b.effects[b.params.effect] && b.effects[b.params.effect].setTransition(e), b.params.parallax && b.parallax && b.parallax.setTransition(e), b.params.scrollbar && b.scrollbar && b.scrollbar.setTransition(e), b.params.control && b.controller && b.controller.setTransition(e, t), b.emit("onSetTransition", b, e)
                }, b.setWrapperTranslate = function(e, t, a) {
                    var i = 0,
                        s = 0,
                        n = 0;
                    b.isHorizontal() ? i = b.rtl ? -e : e : s = e, b.params.roundLengths && (i = r(i), s = r(s)), b.params.virtualTranslate || (b.support.transforms3d ? b.wrapper.transform("translate3d(" + i + "px, " + s + "px, " + n + "px)") : b.wrapper.transform("translate(" + i + "px, " + s + "px)")), b.translate = b.isHorizontal() ? i : s;
                    var o, l = b.maxTranslate() - b.minTranslate();
                    o = 0 === l ? 0 : (e - b.minTranslate()) / l, o !== b.progress && b.updateProgress(e), t && b.updateActiveIndex(), "slide" !== b.params.effect && b.effects[b.params.effect] && b.effects[b.params.effect].setTranslate(b.translate), b.params.parallax && b.parallax && b.parallax.setTranslate(b.translate), b.params.scrollbar && b.scrollbar && b.scrollbar.setTranslate(b.translate), b.params.control && b.controller && b.controller.setTranslate(b.translate, a), b.emit("onSetTranslate", b, b.translate)
                }, b.getTranslate = function(e, t) {
                    var a, i, s, r;
                    return "undefined" == typeof t && (t = "x"), b.params.virtualTranslate ? b.rtl ? -b.translate : b.translate : (s = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (i = s.transform || s.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(function(e) {
                        return e.replace(",", ".")
                    }).join(", ")), r = new window.WebKitCSSMatrix("none" === i ? "" : i)) : (r = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = r.toString().split(",")), "x" === t && (i = window.WebKitCSSMatrix ? r.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = window.WebKitCSSMatrix ? r.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), b.rtl && i && (i = -i), i || 0)
                }, b.getWrapperTranslate = function(e) {
                    return "undefined" == typeof e && (e = b.isHorizontal() ? "x" : "y"), b.getTranslate(b.wrapper[0], e)
                }, b.observers = [], b.initObservers = function() {
                    if (b.params.observeParents)
                        for (var e = b.container.parents(), t = 0; t < e.length; t++) l(e[t]);
                    l(b.container[0], {
                        childList: !1
                    }), l(b.wrapper[0], {
                        attributes: !1
                    })
                }, b.disconnectObservers = function() {
                    for (var e = 0; e < b.observers.length; e++) b.observers[e].disconnect();
                    b.observers = []
                }, b.createLoop = function() {
                    b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove();
                    var e = b.wrapper.children("." + b.params.slideClass);
                    "auto" !== b.params.slidesPerView || b.params.loopedSlides || (b.params.loopedSlides = e.length), b.loopedSlides = parseInt(b.params.loopedSlides || b.params.slidesPerView, 10), b.loopedSlides = b.loopedSlides + b.params.loopAdditionalSlides, b.loopedSlides > e.length && (b.loopedSlides = e.length);
                    var a, i = [],
                        s = [];
                    for (e.each(function(a, r) {
                            var n = t(this);
                            a < b.loopedSlides && s.push(r), a < e.length && a >= e.length - b.loopedSlides && i.push(r), n.attr("data-item-index", a)
                        }), a = 0; a < s.length; a++) b.wrapper.append(t(s[a].cloneNode(!0)).addClass(b.params.slideDuplicateClass));
                    for (a = i.length - 1; a >= 0; a--) b.wrapper.prepend(t(i[a].cloneNode(!0)).addClass(b.params.slideDuplicateClass))
                }, b.destroyLoop = function() {
                    b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove(), b.slides.removeAttr("data-item-index")
                }, b.reLoop = function(e) {
                    var t = b.activeIndex - b.loopedSlides;
                    b.destroyLoop(), b.createLoop(), b.updateSlidesSize(), e && b.slideTo(t + b.loopedSlides, 0, !1)
                }, b.fixLoop = function() {
                    var e;
                    b.activeIndex < b.loopedSlides ? (e = b.slides.length - 3 * b.loopedSlides + b.activeIndex, e += b.loopedSlides, b.slideTo(e, 0, !1, !0)) : ("auto" === b.params.slidesPerView && b.activeIndex >= 2 * b.loopedSlides || b.activeIndex > b.slides.length - 2 * b.params.slidesPerView) && (e = -b.slides.length + b.activeIndex + b.loopedSlides, e += b.loopedSlides, b.slideTo(e, 0, !1, !0))
                }, b.appendSlide = function(e) {
                    if (b.params.loop && b.destroyLoop(), "object" == typeof e && e.length)
                        for (var t = 0; t < e.length; t++) e[t] && b.wrapper.append(e[t]);
                    else b.wrapper.append(e);
                    b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0)
                }, b.prependSlide = function(e) {
                    b.params.loop && b.destroyLoop();
                    var t = b.activeIndex + 1;
                    if ("object" == typeof e && e.length) {
                        for (var a = 0; a < e.length; a++) e[a] && b.wrapper.prepend(e[a]);
                        t = b.activeIndex + e.length
                    } else b.wrapper.prepend(e);
                    b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0), b.slideTo(t, 0, !1)
                }, b.removeSlide = function(e) {
                    b.params.loop && (b.destroyLoop(), b.slides = b.wrapper.children("." + b.params.slideClass));
                    var t, a = b.activeIndex;
                    if ("object" == typeof e && e.length) {
                        for (var i = 0; i < e.length; i++) t = e[i], b.slides[t] && b.slides.eq(t).remove(), a > t && a--;
                        a = Math.max(a, 0)
                    } else t = e, b.slides[t] && b.slides.eq(t).remove(), a > t && a--, a = Math.max(a, 0);
                    b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0), b.params.loop ? b.slideTo(a + b.loopedSlides, 0, !1) : b.slideTo(a, 0, !1)
                }, b.removeAllSlides = function() {
                    for (var e = [], t = 0; t < b.slides.length; t++) e.push(t);
                    b.removeSlide(e)
                }, b.effects = {
                    fade: {
                        setTranslate: function() {
                            for (var e = 0; e < b.slides.length; e++) {
                                var t = b.slides.eq(e),
                                    a = t[0].swiperSlideOffset,
                                    i = -a;
                                b.params.virtualTranslate || (i -= b.translate);
                                var s = 0;
                                b.isHorizontal() || (s = i, i = 0);
                                var r = b.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                                t.css({
                                    opacity: r
                                }).transform("translate3d(" + i + "px, " + s + "px, 0px)")
                            }
                        },
                        setTransition: function(e) {
                            if (b.slides.transition(e), b.params.virtualTranslate && 0 !== e) {
                                var t = !1;
                                b.slides.transitionEnd(function() {
                                    if (!t && b) {
                                        t = !0, b.animating = !1;
                                        for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], a = 0; a < e.length; a++) b.wrapper.trigger(e[a])
                                    }
                                })
                            }
                        }
                    },
                    flip: {
                        setTranslate: function() {
                            for (var e = 0; e < b.slides.length; e++) {
                                var a = b.slides.eq(e),
                                    i = a[0].progress;
                                b.params.flip.limitRotation && (i = Math.max(Math.min(a[0].progress, 1), -1));
                                var s = a[0].swiperSlideOffset,
                                    r = -180 * i,
                                    n = r,
                                    o = 0,
                                    l = -s,
                                    p = 0;
                                if (b.isHorizontal() ? b.rtl && (n = -n) : (p = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(i)) + b.slides.length, b.params.flip.slideShadows) {
                                    var d = b.isHorizontal() ? a.find(".shadow-left") : a.find(".shadow-top"),
                                        u = b.isHorizontal() ? a.find(".shadow-right") : a.find(".shadow-bottom");
                                    0 === d.length && (d = t('<div class="shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), a.append(d)), 0 === u.length && (u = t('<div class="shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(u)), d.length && (d[0].style.opacity = Math.max(-i, 0)), u.length && (u[0].style.opacity = Math.max(i, 0))
                                }
                                a.transform("translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
                            }
                        },
                        setTransition: function(e) {
                            if (b.slides.transition(e).find(".shadow-top, .shadow-right, .shadow-bottom, .shadow-left").transition(e), b.params.virtualTranslate && 0 !== e) {
                                var a = !1;
                                b.slides.eq(b.activeIndex).transitionEnd(function() {
                                    if (!a && b && t(this).hasClass(b.params.slideActiveClass)) {
                                        a = !0, b.animating = !1;
                                        for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < e.length; i++) b.wrapper.trigger(e[i])
                                    }
                                })
                            }
                        }
                    },
                    cube: {
                        setTranslate: function() {
                            var e, a = 0;
                            b.params.cube.shadow && (b.isHorizontal() ? (e = b.wrapper.find(".cube-shadow"), 0 === e.length && (e = t('<div class="cube-shadow"></div>'), b.wrapper.append(e)), e.css({
                                height: b.width + "px"
                            })) : (e = b.container.find(".cube-shadow"), 0 === e.length && (e = t('<div class="cube-shadow"></div>'), b.container.append(e))));
                            for (var i = 0; i < b.slides.length; i++) {
                                var s = b.slides.eq(i),
                                    r = 90 * i,
                                    n = Math.floor(r / 360);
                                b.rtl && (r = -r, n = Math.floor(-r / 360));
                                var o = Math.max(Math.min(s[0].progress, 1), -1),
                                    l = 0,
                                    p = 0,
                                    d = 0;
                                i % 4 === 0 ? (l = 4 * -n * b.size, d = 0) : (i - 1) % 4 === 0 ? (l = 0, d = 4 * -n * b.size) : (i - 2) % 4 === 0 ? (l = b.size + 4 * n * b.size, d = b.size) : (i - 3) % 4 === 0 && (l = -b.size, d = 3 * b.size + 4 * b.size * n), b.rtl && (l = -l), b.isHorizontal() || (p = l, l = 0);
                                var u = "rotateX(" + (b.isHorizontal() ? 0 : -r) + "deg) rotateY(" + (b.isHorizontal() ? r : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + d + "px)";
                                if (1 >= o && o > -1 && (a = 90 * i + 90 * o, b.rtl && (a = 90 * -i - 90 * o)), s.transform(u), b.params.cube.slideShadows) {
                                    var m = b.isHorizontal() ? s.find(".shadow-left") : s.find(".shadow-top"),
                                        c = b.isHorizontal() ? s.find(".shadow-right") : s.find(".shadow-bottom");
                                    0 === m.length && (m = t('<div class="shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), s.append(m)), 0 === c.length && (c = t('<div class="shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), m.length && (m[0].style.opacity = Math.max(-o, 0)), c.length && (c[0].style.opacity = Math.max(o, 0))
                                }
                            }
                            if (b.wrapper.css({
                                    "-webkit-transform-origin": "50% 50% -" + b.size / 2 + "px",
                                    "-moz-transform-origin": "50% 50% -" + b.size / 2 + "px",
                                    "-ms-transform-origin": "50% 50% -" + b.size / 2 + "px",
                                    "transform-origin": "50% 50% -" + b.size / 2 + "px"
                                }), b.params.cube.shadow)
                                if (b.isHorizontal()) e.transform("translate3d(0px, " + (b.width / 2 + b.params.cube.shadowOffset) + "px, " + -b.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + b.params.cube.shadowScale + ")");
                                else {
                                    var h = Math.abs(a) - 90 * Math.floor(Math.abs(a) / 90),
                                        f = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
                                        g = b.params.cube.shadowScale,
                                        v = b.params.cube.shadowScale / f,
                                        w = b.params.cube.shadowOffset;
                                    e.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (b.height / 2 + w) + "px, " + -b.height / 2 / v + "px) rotateX(-90deg)")
                                }
                            var y = b.isSafari || b.isUiWebView ? -b.size / 2 : 0;
                            b.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (b.isHorizontal() ? 0 : a) + "deg) rotateY(" + (b.isHorizontal() ? -a : 0) + "deg)")
                        },
                        setTransition: function(e) {
                            b.slides.transition(e).find(".shadow-top, .shadow-right, .shadow-bottom, .shadow-left").transition(e), b.params.cube.shadow && !b.isHorizontal() && b.container.find(".cube-shadow").transition(e)
                        }
                    },
                    coverflow: {
                        setTranslate: function() {
                            for (var e = b.translate, a = b.isHorizontal() ? -e + b.width / 2 : -e + b.height / 2, i = b.isHorizontal() ? b.params.coverflow.rotate : -b.params.coverflow.rotate, s = b.params.coverflow.depth, r = 0, n = b.slides.length; n > r; r++) {
                                var o = b.slides.eq(r),
                                    l = b.slidesSizesGrid[r],
                                    p = o[0].swiperSlideOffset,
                                    d = (a - p - l / 2) / l * b.params.coverflow.modifier,
                                    u = b.isHorizontal() ? i * d : 0,
                                    m = b.isHorizontal() ? 0 : i * d,
                                    c = -s * Math.abs(d),
                                    h = b.isHorizontal() ? 0 : b.params.coverflow.stretch * d,
                                    f = b.isHorizontal() ? b.params.coverflow.stretch * d : 0;
                                Math.abs(f) < .001 && (f = 0), Math.abs(h) < .001 && (h = 0), Math.abs(c) < .001 && (c = 0), Math.abs(u) < .001 && (u = 0), Math.abs(m) < .001 && (m = 0);
                                var g = "translate3d(" + f + "px," + h + "px," + c + "px)  rotateX(" + m + "deg) rotateY(" + u + "deg)";
                                if (o.transform(g), o[0].style.zIndex = -Math.abs(Math.round(d)) + 1, b.params.coverflow.slideShadows) {
                                    var v = b.isHorizontal() ? o.find(".shadow-left") : o.find(".shadow-top"),
                                        w = b.isHorizontal() ? o.find(".shadow-right") : o.find(".shadow-bottom");
                                    0 === v.length && (v = t('<div class="shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), o.append(v)), 0 === w.length && (w = t('<div class="shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(w)), v.length && (v[0].style.opacity = d > 0 ? d : 0), w.length && (w[0].style.opacity = -d > 0 ? -d : 0)
                                }
                            }
                            if (b.browser.ie) {
                                var y = b.wrapper[0].style;
                                y.perspectiveOrigin = a + "px 50%"
                            }
                        },
                        setTransition: function(e) {
                            b.slides.transition(e).find(".shadow-top, .shadow-right, .shadow-bottom, .shadow-left").transition(e)
                        }
                    }
                }, b.lazy = {
                    initialImageLoaded: !1,
                    loadImageInSlide: function(e, a) {
                        if ("undefined" != typeof e && ("undefined" == typeof a && (a = !0), 0 !== b.slides.length)) {
                            var i = b.slides.eq(e),
                                s = i.find("." + b.params.lazyLoadingClass + ":not(." + b.params.lazyStatusLoadedClass + "):not(." + b.params.lazyStatusLoadingClass + ")");
                            !i.hasClass(b.params.lazyLoadingClass) || i.hasClass(b.params.lazyStatusLoadedClass) || i.hasClass(b.params.lazyStatusLoadingClass) || (s = s.add(i[0])), 0 !== s.length && s.each(function() {
                                var e = t(this);
                                e.addClass(b.params.lazyStatusLoadingClass);
                                var s = e.attr("data-background"),
                                    r = e.attr("data-src"),
                                    n = e.attr("data-srcset"),
                                    o = e.attr("data-sizes");
                                b.loadImage(e[0], r || s, n, o, !1, function() {
                                    if ("undefined" != typeof b && null !== b && b) {
                                        if (s ? (e.css("background-image", 'url("' + s + '")'), e.removeAttr("data-background")) : (n && (e.attr("srcset", n), e.removeAttr("data-srcset")), o && (e.attr("sizes", o), e.removeAttr("data-sizes")), r && (e.attr("src", r), e.removeAttr("data-src"))), e.addClass(b.params.lazyStatusLoadedClass).removeClass(b.params.lazyStatusLoadingClass), i.find("." + b.params.lazyPreloaderClass + ", ." + b.params.preloaderClass).remove(), b.params.loop && a) {
                                            var t = i.attr("data-item-index");
                                            if (i.hasClass(b.params.slideDuplicateClass)) {
                                                var l = b.wrapper.children('[data-item-index="' + t + '"]:not(.' + b.params.slideDuplicateClass + ")");
                                                b.lazy.loadImageInSlide(l.index(), !1)
                                            } else {
                                                var p = b.wrapper.children("." + b.params.slideDuplicateClass + '[data-item-index="' + t + '"]');
                                                b.lazy.loadImageInSlide(p.index(), !1)
                                            }
                                        }
                                        b.emit("onLazyImageReady", b, i[0], e[0])
                                    }
                                }), b.emit("onLazyImageLoad", b, i[0], e[0])
                            })
                        }
                    },
                    load: function() {
                        var e, a = b.params.slidesPerView;
                        if ("auto" === a && (a = 0), b.lazy.initialImageLoaded || (b.lazy.initialImageLoaded = !0), b.params.watchSlidesVisibility) b.wrapper.children("." + b.params.slideVisibleClass).each(function() {
                            b.lazy.loadImageInSlide(t(this).index())
                        });
                        else if (a > 1)
                            for (e = b.activeIndex; e < b.activeIndex + a; e++) b.slides[e] && b.lazy.loadImageInSlide(e);
                        else b.lazy.loadImageInSlide(b.activeIndex);
                        if (b.params.lazyLoadingInPrevNext)
                            if (a > 1 || b.params.lazyLoadingInPrevNextAmount && b.params.lazyLoadingInPrevNextAmount > 1) {
                                var i = b.params.lazyLoadingInPrevNextAmount,
                                    s = a,
                                    r = Math.min(b.activeIndex + s + Math.max(i, s), b.slides.length),
                                    n = Math.max(b.activeIndex - Math.max(s, i), 0);
                                for (e = b.activeIndex + a; r > e; e++) b.slides[e] && b.lazy.loadImageInSlide(e);
                                for (e = n; e < b.activeIndex; e++) b.slides[e] && b.lazy.loadImageInSlide(e)
                            } else {
                                var o = b.wrapper.children("." + b.params.slideNextClass);
                                o.length > 0 && b.lazy.loadImageInSlide(o.index());
                                var l = b.wrapper.children("." + b.params.slidePrevClass);
                                l.length > 0 && b.lazy.loadImageInSlide(l.index())
                            }
                    },
                    onTransitionStart: function() {
                        b.params.lazyLoading && (b.params.lazyLoadingOnTransitionStart || !b.params.lazyLoadingOnTransitionStart && !b.lazy.initialImageLoaded) && b.lazy.load()
                    },
                    onTransitionEnd: function() {
                        b.params.lazyLoading && !b.params.lazyLoadingOnTransitionStart && b.lazy.load()
                    }
                }, b.scrollbar = {
                    isTouched: !1,
                    setDragPosition: function(e) {
                        var t = b.scrollbar,
                            a = b.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
                            i = a - t.track.offset()[b.isHorizontal() ? "left" : "top"] - t.dragSize / 2,
                            s = -b.minTranslate() * t.moveDivider,
                            r = -b.maxTranslate() * t.moveDivider;
                        s > i ? i = s : i > r && (i = r), i = -i / t.moveDivider, b.updateProgress(i), b.setWrapperTranslate(i, !0)
                    },
                    dragStart: function(e) {
                        var t = b.scrollbar;
                        t.isTouched = !0, e.preventDefault(), e.stopPropagation(), t.setDragPosition(e), clearTimeout(t.dragTimeout), t.track.transition(0), b.params.scrollbarHide && t.track.css("opacity", 1), b.wrapper.transition(100), t.drag.transition(100), b.emit("onScrollbarDragStart", b)
                    },
                    dragMove: function(e) {
                        var t = b.scrollbar;
                        t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), b.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), b.emit("onScrollbarDragMove", b))
                    },
                    dragEnd: function() {
                        var e = b.scrollbar;
                        e.isTouched && (e.isTouched = !1, b.params.scrollbarHide && (clearTimeout(e.dragTimeout), e.dragTimeout = setTimeout(function() {
                            e.track.css("opacity", 0), e.track.transition(400)
                        }, 1e3)), b.emit("onScrollbarDragEnd", b), b.params.scrollbarSnapOnRelease && b.slideReset())
                    },
                    draggableEvents: function() {
                        return b.params.simulateTouch !== !1 || b.support.touch ? b.touchEvents : b.touchEventsDesktop
                    }(),
                    enableDraggable: function() {
                        var e = b.scrollbar,
                            a = b.support.touch ? e.track : document;
                        t(e.track).on(e.draggableEvents.start, e.dragStart), t(a).on(e.draggableEvents.move, e.dragMove), t(a).on(e.draggableEvents.end, e.dragEnd)
                    },
                    disableDraggable: function() {
                        var e = b.scrollbar,
                            a = b.support.touch ? e.track : document;
                        t(e.track).off(e.draggableEvents.start, e.dragStart), t(a).off(e.draggableEvents.move, e.dragMove), t(a).off(e.draggableEvents.end, e.dragEnd)
                    },
                    set: function() {
                        if (b.params.scrollbar) {
                            var e = b.scrollbar;
                            e.track = t(b.params.scrollbar), b.params.uniqueNavElements && "string" == typeof b.params.scrollbar && e.track.length > 1 && 1 === b.container.find(b.params.scrollbar).length && (e.track = b.container.find(b.params.scrollbar)), e.drag = e.track.find(".scrollbar-drag"), 0 === e.drag.length && (e.drag = t('<div class="scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = b.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = b.size / b.virtualSize, e.moveDivider = e.divider * (e.trackSize / b.size), e.dragSize = e.trackSize * e.divider, b.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.divider >= 1 ? e.track[0].style.display = "none" : e.track[0].style.display = "", b.params.scrollbarHide && (e.track[0].style.opacity = 0)
                        }
                    },
                    setTranslate: function() {
                        if (b.params.scrollbar) {
                            var e, t = b.scrollbar,
                                a = (b.translate || 0, t.dragSize);
                            e = (t.trackSize - t.dragSize) * b.progress, b.rtl && b.isHorizontal() ? (e = -e, e > 0 ? (a = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (a = t.trackSize + e)) : 0 > e ? (a = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (a = t.trackSize - e), b.isHorizontal() ? (b.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), t.drag[0].style.width = a + "px") : (b.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), t.drag[0].style.height = a + "px"), b.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function() {
                                t.track[0].style.opacity = 0, t.track.transition(400)
                            }, 1e3))
                        }
                    },
                    setTransition: function(e) {
                        b.params.scrollbar && b.scrollbar.drag.transition(e)
                    }
                }, b.controller = {
                    LinearSpline: function(e, t) {
                        var a = function() {
                            var e, t, a;
                            return function(i, s) {
                                for (t = -1, e = i.length; e - t > 1;) i[a = e + t >> 1] <= s ? t = a : e = a;
                                return e
                            }
                        }();
                        this.x = e, this.y = t, this.lastIndex = e.length - 1;
                        var i, s;
                        this.x.length;
                        this.interpolate = function(e) {
                            return e ? (s = a(this.x, e), i = s - 1, (e - this.x[i]) * (this.y[s] - this.y[i]) / (this.x[s] - this.x[i]) + this.y[i]) : 0
                        }
                    },
                    getInterpolateFunction: function(e) {
                        b.controller.spline || (b.controller.spline = b.params.loop ? new b.controller.LinearSpline(b.slidesGrid, e.slidesGrid) : new b.controller.LinearSpline(b.snapGrid, e.snapGrid))
                    },
                    setTranslate: function(e, t) {
                        function i(t) {
                            e = t.rtl && "horizontal" === t.params.direction ? -b.translate : b.translate, "slide" === b.params.controlBy && (b.controller.getInterpolateFunction(t), r = -b.controller.spline.interpolate(-e)), r && "container" !== b.params.controlBy || (s = (t.maxTranslate() - t.minTranslate()) / (b.maxTranslate() - b.minTranslate()), r = (e - b.minTranslate()) * s + t.minTranslate()), b.params.controlInverse && (r = t.maxTranslate() - r), t.updateProgress(r), t.setWrapperTranslate(r, !1, b), t.updateActiveIndex()
                        }
                        var s, r, n = b.params.control;
                        if (Array.isArray(n))
                            for (var o = 0; o < n.length; o++) n[o] !== t && n[o] instanceof a && i(n[o]);
                        else n instanceof a && t !== n && i(n)
                    },
                    setTransition: function(e, t) {
                        function i(t) {
                            t.setWrapperTransition(e, b), 0 !== e && (t.onTransitionStart(), t.wrapper.transitionEnd(function() {
                                r && (t.params.loop && "slide" === b.params.controlBy && t.fixLoop(), t.onTransitionEnd())
                            }))
                        }
                        var s, r = b.params.control;
                        if (Array.isArray(r))
                            for (s = 0; s < r.length; s++) r[s] !== t && r[s] instanceof a && i(r[s]);
                        else r instanceof a && t !== r && i(r)
                    }
                }, b.hashnav = {
                    onHashCange: function() {
                        var e = document.location.hash.replace("#", ""),
                            t = b.slides.eq(b.activeIndex).attr("data-hash");
                        e !== t && b.slideTo(b.wrapper.children("." + b.params.slideClass + '[data-hash="' + e + '"]').index())
                    },
                    attachEvents: function(e) {
                        var a = e ? "off" : "on";
                        t(window)[a]("hashchange", b.hashnav.onHashCange)
                    },
                    setHash: function() {
                        if (b.hashnav.initialized && b.params.hashnav)
                            if (b.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + b.slides.eq(b.activeIndex).attr("data-hash") || "");
                            else {
                                var e = b.slides.eq(b.activeIndex),
                                    t = e.attr("data-hash") || e.attr("data-history");
                                document.location.hash = t || ""
                            }
                    },
                    init: function() {
                        if (b.params.hashnav && !b.params.history) {
                            b.hashnav.initialized = !0;
                            var e = document.location.hash.replace("#", "");
                            if (e)
                                for (var t = 0, a = 0, i = b.slides.length; i > a; a++) {
                                    var s = b.slides.eq(a),
                                        r = s.attr("data-hash") || s.attr("data-history");
                                    if (r === e && !s.hasClass(b.params.slideDuplicateClass)) {
                                        var n = s.index();
                                        b.slideTo(n, t, b.params.runCallbacksOnInit, !0)
                                    }
                                }
                            b.params.hashnavWatchState && b.hashnav.attachEvents()
                        }
                    },
                    destroy: function() {
                        b.params.hashnavWatchState && b.hashnav.attachEvents(!0)
                    }
                }, b.history = {
                    init: function() {
                        if (b.params.history) {
                            if (!window.history || !window.history.pushState) return b.params.history = !1, void(b.params.hashnav = !0);
                            b.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, b.params.runCallbacksOnInit), b.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                        }
                    },
                    setHistoryPopState: function() {
                        b.history.paths = b.history.getPathValues(), b.history.scrollToSlide(b.params.speed, b.history.paths.value, !1)
                    },
                    getPathValues: function() {
                        var e = window.location.pathname.slice(1).split("/"),
                            t = e.length,
                            a = e[t - 2],
                            i = e[t - 1];
                        return {
                            key: a,
                            value: i
                        }
                    },
                    setHistory: function(e, t) {
                        if (b.history.initialized && b.params.history) {
                            var a = b.slides.eq(t),
                                i = this.slugify(a.attr("data-history"));
                            window.location.pathname.includes(e) || (i = e + "/" + i), b.params.replaceState ? window.history.replaceState(null, null, i) : window.history.pushState(null, null, i)
                        }
                    },
                    slugify: function(e) {
                        return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                    },
                    scrollToSlide: function(e, t, a) {
                        if (t)
                            for (var i = 0, s = b.slides.length; s > i; i++) {
                                var r = b.slides.eq(i),
                                    n = this.slugify(r.attr("data-history"));
                                if (n === t && !r.hasClass(b.params.slideDuplicateClass)) {
                                    var o = r.index();
                                    b.slideTo(o, e, a)
                                }
                            } else b.slideTo(0, e, a)
                    }
                }, b.disableKeyboardControl = function() {
                    b.params.keyboardControl = !1, t(document).off("keydown", p)
                }, b.enableKeyboardControl = function() {
                    b.params.keyboardControl = !0, t(document).on("keydown", p)
                }, b.mousewheel = {
                    event: !1,
                    lastScrollTime: (new window.Date).getTime()
                }, b.params.mousewheelControl && (b.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : d() ? "wheel" : "mousewheel"), b.disableMousewheelControl = function() {
                    if (!b.mousewheel.event) return !1;
                    var e = b.container;
                    return "container" !== b.params.mousewheelEventsTarged && (e = t(b.params.mousewheelEventsTarged)), e.off(b.mousewheel.event, m), b.params.mousewheelControl = !1, !0
                }, b.enableMousewheelControl = function() {
                    if (!b.mousewheel.event) return !1;
                    var e = b.container;
                    return "container" !== b.params.mousewheelEventsTarged && (e = t(b.params.mousewheelEventsTarged)), e.on(b.mousewheel.event, m), b.params.mousewheelControl = !0, !0
                }, b.parallax = {
                    setTranslate: function() {
                        b.container.children("[data-parallax], [data-parallax-x], [data-parallax-y]").each(function() {
                            c(this, b.progress)
                        }), b.slides.each(function() {
                            var e = t(this);
                            e.find("[data-parallax], [data-parallax-x], [data-parallax-y]").each(function() {
                                var t = Math.min(Math.max(e[0].progress, -1), 1);
                                c(this, t)
                            })
                        })
                    },
                    setTransition: function(e) {
                        "undefined" == typeof e && (e = b.params.speed), b.container.find("[data-parallax], [data-parallax-x], [data-parallax-y]").each(function() {
                            var a = t(this),
                                i = parseInt(a.attr("data-parallax-duration"), 10) || e;
                            0 === e && (i = 0), a.transition(i)
                        })
                    }
                }, b.zoom = {
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                        slide: void 0,
                        slideWidth: void 0,
                        slideHeight: void 0,
                        image: void 0,
                        imageWrap: void 0,
                        zoomMax: b.params.zoomMax
                    },
                    image: {
                        isTouched: void 0,
                        isMoved: void 0,
                        currentX: void 0,
                        currentY: void 0,
                        minX: void 0,
                        minY: void 0,
                        maxX: void 0,
                        maxY: void 0,
                        width: void 0,
                        height: void 0,
                        startX: void 0,
                        startY: void 0,
                        touchesStart: {},
                        touchesCurrent: {}
                    },
                    velocity: {
                        x: void 0,
                        y: void 0,
                        prevPositionX: void 0,
                        prevPositionY: void 0,
                        prevTime: void 0
                    },
                    getDistanceBetweenTouches: function(e) {
                        if (e.targetTouches.length < 2) return 1;
                        var t = e.targetTouches[0].pageX,
                            a = e.targetTouches[0].pageY,
                            i = e.targetTouches[1].pageX,
                            s = e.targetTouches[1].pageY,
                            r = Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
                        return r
                    },
                    onGestureStart: function(e) {
                        var a = b.zoom;
                        if (!b.support.gestures) {
                            if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                            a.gesture.scaleStart = a.getDistanceBetweenTouches(e)
                        }
                        return a.gesture.slide && a.gesture.slide.length || (a.gesture.slide = t(this), 0 === a.gesture.slide.length && (a.gesture.slide = b.slides.eq(b.activeIndex)), a.gesture.image = a.gesture.slide.find("img, svg, canvas"), a.gesture.imageWrap = a.gesture.image.parent("." + b.params.zoomContainerClass), a.gesture.zoomMax = a.gesture.imageWrap.attr("data-zoom") || b.params.zoomMax, 0 !== a.gesture.imageWrap.length) ? (a.gesture.image.transition(0), a.isScaling = !0, void((!isDesktop || t(window).width() <= 1100) && t(".close-album, .slide-pic-nav").addClass("level-index-out"))) : void(a.gesture.image = void 0)
                    },
                    onGestureChange: function(e) {
                        var t = b.zoom;
                        if (!b.support.gestures) {
                            if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                            t.gesture.scaleMove = t.getDistanceBetweenTouches(e)
                        }
                        t.gesture.image && 0 !== t.gesture.image.length && (b.support.gestures ? t.scale = e.scale * t.currentScale : t.scale = t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale, t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)), t.scale < b.params.zoomMin && (t.scale = b.params.zoomMin + 1 - Math.pow(b.params.zoomMin - t.scale + 1, .5)), t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
                    },
                    onGestureEnd: function(e) {
                        var a = b.zoom;
                        !b.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || a.gesture.image && 0 !== a.gesture.image.length && (a.scale = Math.max(Math.min(a.scale, a.gesture.zoomMax), b.params.zoomMin), a.gesture.image.transition(b.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (a.gesture.slide = void 0), t(".close-album, .slide-pic-nav").removeClass("level-index-out"))
                    },
                    onTouchStart: function(e, a) {
                        var i = e.zoom;
                        i.gesture.image && 0 !== i.gesture.image.length && (i.image.isTouched || ("android" === e.device.os && a.preventDefault(), i.image.isTouched = !0, i.image.touchesStart.x = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, i.image.touchesStart.y = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY, (!isDesktop || t(window).width() <= 1100) && t(".close-album, .slide-pic-nav").addClass("level-index-out")))
                    },
                    onTouchMove: function(e) {
                        var a = b.zoom;
                        if (a.gesture.image && 0 !== a.gesture.image.length && (b.allowClick = !1, a.image.isTouched && a.gesture.slide)) {
                            a.image.isMoved || (a.image.width = a.gesture.image[0].offsetWidth, a.image.height = a.gesture.image[0].offsetHeight, a.image.startX = b.getTranslate(a.gesture.imageWrap[0], "x") || 0, a.image.startY = b.getTranslate(a.gesture.imageWrap[0], "y") || 0, a.gesture.slideWidth = a.gesture.slide[0].offsetWidth, a.gesture.slideHeight = a.gesture.slide[0].offsetHeight, a.gesture.imageWrap.transition(0), b.rtl && (a.image.startX = -a.image.startX), b.rtl && (a.image.startY = -a.image.startY));
                            var i = a.image.width * a.scale,
                                s = a.image.height * a.scale;
                            if (!(i < a.gesture.slideWidth && s < a.gesture.slideHeight)) {
                                if (a.image.minX = Math.min(a.gesture.slideWidth / 2 - i / 2, 0), a.image.maxX = -a.image.minX, a.image.minY = Math.min(a.gesture.slideHeight / 2 - s / 2, 0), a.image.maxY = -a.image.minY, a.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, a.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !a.image.isMoved && !a.isScaling) {
                                    if (b.isHorizontal() && Math.floor(a.image.minX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x < a.image.touchesStart.x || Math.floor(a.image.maxX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x > a.image.touchesStart.x) return void(a.image.isTouched = !1);
                                    if (!b.isHorizontal() && Math.floor(a.image.minY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y < a.image.touchesStart.y || Math.floor(a.image.maxY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y > a.image.touchesStart.y) return void(a.image.isTouched = !1)
                                }
                                e.preventDefault(), e.stopPropagation(), a.image.isMoved = !0, a.image.currentX = a.image.touchesCurrent.x - a.image.touchesStart.x + a.image.startX, a.image.currentY = a.image.touchesCurrent.y - a.image.touchesStart.y + a.image.startY, a.image.currentX < a.image.minX && (a.image.currentX = a.image.minX + 1 - Math.pow(a.image.minX - a.image.currentX + 1, .8)), a.image.currentX > a.image.maxX && (a.image.currentX = a.image.maxX - 1 + Math.pow(a.image.currentX - a.image.maxX + 1, .8)), a.image.currentY < a.image.minY && (a.image.currentY = a.image.minY + 1 - Math.pow(a.image.minY - a.image.currentY + 1, .8)), a.image.currentY > a.image.maxY && (a.image.currentY = a.image.maxY - 1 + Math.pow(a.image.currentY - a.image.maxY + 1, .8)),
                                    a.velocity.prevPositionX || (a.velocity.prevPositionX = a.image.touchesCurrent.x), a.velocity.prevPositionY || (a.velocity.prevPositionY = a.image.touchesCurrent.y), a.velocity.prevTime || (a.velocity.prevTime = Date.now()), a.velocity.x = (a.image.touchesCurrent.x - a.velocity.prevPositionX) / (Date.now() - a.velocity.prevTime) / 2, a.velocity.y = (a.image.touchesCurrent.y - a.velocity.prevPositionY) / (Date.now() - a.velocity.prevTime) / 2, Math.abs(a.image.touchesCurrent.x - a.velocity.prevPositionX) < 2 && (a.velocity.x = 0), Math.abs(a.image.touchesCurrent.y - a.velocity.prevPositionY) < 2 && (a.velocity.y = 0), a.velocity.prevPositionX = a.image.touchesCurrent.x, a.velocity.prevPositionY = a.image.touchesCurrent.y, a.velocity.prevTime = Date.now(), a.gesture.imageWrap.transform("translate3d(" + a.image.currentX + "px, " + a.image.currentY + "px,0)"), (!isDesktop || t(window).width() <= 1100) && t(".close-album, .slide-pic-nav").addClass("level-index-out")
                            }
                        }
                    },
                    onTouchEnd: function(e) {
                        var a = e.zoom;
                        if (a.gesture.image && 0 !== a.gesture.image.length) {
                            if (!a.image.isTouched || !a.image.isMoved) return a.image.isTouched = !1, void(a.image.isMoved = !1);
                            a.image.isTouched = !1, a.image.isMoved = !1;
                            var i = 300,
                                s = 300,
                                r = a.velocity.x * i,
                                n = a.image.currentX + r,
                                o = a.velocity.y * s,
                                l = a.image.currentY + o;
                            0 !== a.velocity.x && (i = Math.abs((n - a.image.currentX) / a.velocity.x)), 0 !== a.velocity.y && (s = Math.abs((l - a.image.currentY) / a.velocity.y));
                            var p = Math.max(i, s);
                            a.image.currentX = n, a.image.currentY = l;
                            var d = a.image.width * a.scale,
                                u = a.image.height * a.scale;
                            a.image.minX = Math.min(a.gesture.slideWidth / 2 - d / 2, 0), a.image.maxX = -a.image.minX, a.image.minY = Math.min(a.gesture.slideHeight / 2 - u / 2, 0), a.image.maxY = -a.image.minY, a.image.currentX = Math.max(Math.min(a.image.currentX, a.image.maxX), a.image.minX), a.image.currentY = Math.max(Math.min(a.image.currentY, a.image.maxY), a.image.minY), a.gesture.imageWrap.transition(p).transform("translate3d(" + a.image.currentX + "px, " + a.image.currentY + "px,0)"), t(".close-album, .slide-pic-nav").removeClass("level-index-out")
                        }
                    },
                    onTransitionEnd: function(e) {
                        var t = e.zoom;
                        t.gesture.slide && e.previousIndex !== e.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"), t.gesture.imageWrap.transform("translate3d(0,0,0)"), t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0, t.scale = t.currentScale = 1)
                    },
                    toggleZoom: function(e, a) {
                        var i = e.zoom;
                        if (i.gesture.slide || (i.gesture.slide = e.clickedSlide ? t(e.clickedSlide) : e.slides.eq(e.activeIndex), i.gesture.image = i.gesture.slide.find("img, svg, canvas"), i.gesture.imageWrap = i.gesture.image.parent("." + e.params.zoomContainerClass)), i.gesture.image && 0 !== i.gesture.image.length) {
                            var s, r, n, o, l, p, d, u, m, c, h, f, g, v, w, y, x, T;
                            "undefined" == typeof i.image.touchesStart.x && a ? (s = "touchend" === a.type ? a.changedTouches[0].pageX : a.pageX, r = "touchend" === a.type ? a.changedTouches[0].pageY : a.pageY) : (s = i.image.touchesStart.x, r = i.image.touchesStart.y), i.scale && 1 !== i.scale ? (i.scale = i.currentScale = 1, i.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), i.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), i.gesture.slide = void 0, i.gesture.image.removeClass("zoomin"), i.gesture.image.parent().removeClass("zoomin"), t(".close-album, .slide-pic-nav").removeClass("level-index-out")) : (i.scale = i.currentScale = i.gesture.imageWrap.attr("data-zoom") || e.params.zoomMax, i.gesture.image.addClass("zoomin"), i.gesture.image.parent().addClass("zoomin"), (!isDesktop || t(window).width() <= 1100) && t(".close-album, .slide-pic-nav").addClass("level-index-out"), a ? (x = i.gesture.slide[0].offsetWidth, T = i.gesture.slide[0].offsetHeight, n = i.gesture.slide.offset().left, o = i.gesture.slide.offset().top, l = n + x / 2 - s, p = o + T / 2 - r, m = i.gesture.image[0].offsetWidth, c = i.gesture.image[0].offsetHeight, h = m * i.scale, f = c * i.scale, g = Math.min(x / 2 - h / 2, 0), v = Math.min(T / 2 - f / 2, 0), w = -g, y = -v, d = l * i.scale, u = p * i.scale, g > d && (d = g), d > w && (d = w), v > u && (u = v), u > y && (u = y)) : (d = 0, u = 0), i.gesture.imageWrap.transition(300).transform("translate3d(" + d + "px, " + u + "px,0)"), i.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + i.scale + ")"))
                        }
                    },
                    attachEvents: function(e) {
                        var a = e ? "off" : "on";
                        if (b.params.zoom) {
                            var i = (b.slides, "touchstart" === b.touchEvents.start && b.support.passiveListener && b.params.passiveListeners ? {
                                passive: !0,
                                capture: !1
                            } : !1);
                            b.support.gestures ? (b.slides[a]("gesturestart", b.zoom.onGestureStart, i), b.slides[a]("gesturechange", b.zoom.onGestureChange, i), b.slides[a]("gestureend", b.zoom.onGestureEnd, i)) : "touchstart" === b.touchEvents.start && (b.slides[a](b.touchEvents.start, b.zoom.onGestureStart, i), b.slides[a](b.touchEvents.move, b.zoom.onGestureChange, i), b.slides[a](b.touchEvents.end, b.zoom.onGestureEnd, i)), b[a]("touchStart", b.zoom.onTouchStart), b.slides.each(function(e, i) {
                                t(i).find("." + b.params.zoomContainerClass).length > 0 && t(i)[a](b.touchEvents.move, b.zoom.onTouchMove)
                            }), b[a]("touchEnd", b.zoom.onTouchEnd), b[a]("transitionEnd", b.zoom.onTransitionEnd), b.params.zoomToggle && (isDesktop || t(window).width() > 1100 ? (b.on("click", b.zoom.toggleZoom), b.on("doubleTap", b.zoom.toggleZoom)) : b.on("doubleTap", b.zoom.toggleZoom))
                        }
                    },
                    init: function() {
                        b.zoom.attachEvents()
                    },
                    destroy: function() {
                        b.zoom.attachEvents(!0)
                    }
                }, b._plugins = [];
                for (var N in b.plugins) {
                    var G = b.plugins[N](b, b.params[N]);
                    G && b._plugins.push(G)
                }
                return b.callPlugins = function(e) {
                    for (var t = 0; t < b._plugins.length; t++) e in b._plugins[t] && b._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, b.emitterEventListeners = {}, b.emit = function(e) {
                    b.params[e] && b.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    var t;
                    if (b.emitterEventListeners[e])
                        for (t = 0; t < b.emitterEventListeners[e].length; t++) b.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    b.callPlugins && b.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, b.on = function(e, t) {
                    return e = h(e), b.emitterEventListeners[e] || (b.emitterEventListeners[e] = []), b.emitterEventListeners[e].push(t), b
                }, b.off = function(e, t) {
                    var a;
                    if (e = h(e), "undefined" == typeof t) return b.emitterEventListeners[e] = [], b;
                    if (b.emitterEventListeners[e] && 0 !== b.emitterEventListeners[e].length) {
                        for (a = 0; a < b.emitterEventListeners[e].length; a++) b.emitterEventListeners[e][a] === t && b.emitterEventListeners[e].splice(a, 1);
                        return b
                    }
                }, b.once = function(e, t) {
                    e = h(e);
                    var a = function() {
                        t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), b.off(e, a)
                    };
                    return b.on(e, a), b
                }, b.a11y = {
                    makeFocusable: function(e) {
                        return e.attr("tabIndex", "0"), e
                    },
                    addRole: function(e, t) {
                        return e.attr("role", t), e
                    },
                    addLabel: function(e, t) {
                        return e.attr("aria-label", t), e
                    },
                    disable: function(e) {
                        return e.attr("aria-disabled", !0), e
                    },
                    enable: function(e) {
                        return e.attr("aria-disabled", !1), e
                    },
                    onEnterKey: function(e) {
                        13 === e.keyCode && (t(e.target).is(b.params.nextButton) ? (b.onClickNext(e), b.isEnd ? b.a11y.notify(b.params.lastSlideMessage) : b.a11y.notify(b.params.nextSlideMessage)) : t(e.target).is(b.params.prevButton) && (b.onClickPrev(e), b.isBeginning ? b.a11y.notify(b.params.firstSlideMessage) : b.a11y.notify(b.params.prevSlideMessage)), t(e.target).is("." + b.params.bulletClass) && t(e.target)[0].click())
                    },
                    liveRegion: t('<span class="' + b.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                    notify: function(e) {
                        var t = b.a11y.liveRegion;
                        0 !== t.length && (t.html(""), t.html(e))
                    },
                    init: function() {
                        b.params.nextButton && b.nextButton && b.nextButton.length > 0 && (b.a11y.makeFocusable(b.nextButton), b.a11y.addRole(b.nextButton, "button"), b.a11y.addLabel(b.nextButton, b.params.nextSlideMessage)), b.params.prevButton && b.prevButton && b.prevButton.length > 0 && (b.a11y.makeFocusable(b.prevButton), b.a11y.addRole(b.prevButton, "button"), b.a11y.addLabel(b.prevButton, b.params.prevSlideMessage)), t(b.container).append(b.a11y.liveRegion)
                    },
                    initPagination: function() {
                        b.params.pagination && b.params.paginationClickable && b.bullets && b.bullets.length && b.bullets.each(function() {
                            var e = t(this);
                            b.a11y.makeFocusable(e), b.a11y.addRole(e, "button"), b.a11y.addLabel(e, b.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                        })
                    },
                    destroy: function() {
                        b.a11y.liveRegion && b.a11y.liveRegion.length > 0 && b.a11y.liveRegion.remove()
                    }
                }, b.init = function() {
                    b.params.loop && b.createLoop(), b.updateContainerSize(), b.updateSlidesSize(), b.updatePagination(), b.params.scrollbar && b.scrollbar && (b.scrollbar.set(), b.params.scrollbarDraggable && b.scrollbar.enableDraggable()), "slide" !== b.params.effect && b.effects[b.params.effect] && (b.params.loop || b.updateProgress(), b.effects[b.params.effect].setTranslate()), b.params.loop ? b.slideTo(b.params.initialSlide + b.loopedSlides, 0, b.params.runCallbacksOnInit) : (b.slideTo(b.params.initialSlide, 0, b.params.runCallbacksOnInit), 0 === b.params.initialSlide && (b.parallax && b.params.parallax && b.parallax.setTranslate(), b.lazy && b.params.lazyLoading && (b.lazy.load(), b.lazy.initialImageLoaded = !0))), b.attachEvents(), b.params.observer && b.support.observer && b.initObservers(), b.params.preloadImages && !b.params.lazyLoading && b.preloadImages(), b.params.zoom && b.zoom && b.zoom.init(), b.params.autoplay && b.startAutoplay(), b.params.keyboardControl && b.enableKeyboardControl && b.enableKeyboardControl(), b.params.mousewheelControl && b.enableMousewheelControl && b.enableMousewheelControl(), b.params.hashnavReplaceState && (b.params.replaceState = b.params.hashnavReplaceState), b.params.history && b.history && b.history.init(), b.params.hashnav && b.hashnav && b.hashnav.init(), b.params.a11y && b.a11y && b.a11y.init(), b.emit("onInit", b)
                }, b.cleanupStyles = function() {
                    b.container.removeClass(b.classNames.join(" ")).removeAttr("style"), b.wrapper.removeAttr("style"), b.slides && b.slides.length && b.slides.removeClass([b.params.slideVisibleClass, b.params.slideActiveClass, b.params.slideNextClass, b.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-column").removeAttr("data-row"), b.paginationContainer && b.paginationContainer.length && b.paginationContainer.removeClass(b.params.paginationHiddenClass), b.bullets && b.bullets.length && b.bullets.removeClass(b.params.bulletActiveClass), b.params.prevButton && t(b.params.prevButton).removeClass(b.params.buttonDisabledClass), b.params.nextButton && t(b.params.nextButton).removeClass(b.params.buttonDisabledClass), b.params.scrollbar && b.scrollbar && (b.scrollbar.track && b.scrollbar.track.length && b.scrollbar.track.removeAttr("style"), b.scrollbar.drag && b.scrollbar.drag.length && b.scrollbar.drag.removeAttr("style"))
                }, b.destroy = function(e, t) {
                    b.detachEvents(), b.stopAutoplay(), b.params.scrollbar && b.scrollbar && b.params.scrollbarDraggable && b.scrollbar.disableDraggable(), b.params.loop && b.destroyLoop(), t && b.cleanupStyles(), b.disconnectObservers(), b.params.zoom && b.zoom && b.zoom.destroy(), b.params.keyboardControl && b.disableKeyboardControl && b.disableKeyboardControl(), b.params.mousewheelControl && b.disableMousewheelControl && b.disableMousewheelControl(), b.params.a11y && b.a11y && b.a11y.destroy(), b.params.history && !b.params.replaceState && window.removeEventListener("popstate", b.history.setHistoryPopState), b.params.hashnav && b.hashnav && b.hashnav.destroy(), b.emit("onDestroy"), e !== !1 && (b = null)
                }, b.init(), b
            }
        };
        a.prototype = {
            isSafari: function() {
                var e = window.navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
            isArray: function(e) {
                return "[object Array]" === Object.prototype.toString.apply(e)
            },
            browser: {
                ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
                lteIE9: function() {
                    var e = document.createElement("div");
                    return e.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->", 1 === e.getElementsByTagName("i").length
                }()
            },
            device: function() {
                var e = window.navigator.userAgent,
                    t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                    a = e.match(/(iPad).*OS\s([\d_]+)/),
                    i = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                    s = !a && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                return {
                    ios: a || s || i,
                    android: t
                }
            }(),
            support: {
                touch: window.Modernizr && Modernizr.touch === !0 || function() {
                    return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
                }(),
                transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                    var e = document.createElement("div").style;
                    return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
                }(),
                flexbox: function() {
                    for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a++)
                        if (t[a] in e) return !0
                }(),
                observer: function() {
                    return "MutationObserver" in window || "WebkitMutationObserver" in window
                }(),
                passiveListener: function() {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function() {
                                e = !0
                            }
                        });
                        window.addEventListener("testPassiveListener", null, t)
                    } catch (a) {}
                    return e
                }(),
                gestures: function() {
                    return "ongesturestart" in window
                }()
            },
            plugins: {}
        };
        for (var i = (function() {
                var e = function(e) {
                        var t = this,
                            a = 0;
                        for (a = 0; a < e.length; a++) t[a] = e[a];
                        return t.length = e.length, this
                    },
                    t = function(t, a) {
                        var i = [],
                            s = 0;
                        if (t && !a && t instanceof e) return t;
                        if (t)
                            if ("string" == typeof t) {
                                var r, n, o = t.trim();
                                if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                                    var l = "div";
                                    for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), n = document.createElement(l), n.innerHTML = t, s = 0; s < n.childNodes.length; s++) i.push(n.childNodes[s])
                                } else
                                    for (r = a || "#" !== t[0] || t.match(/[ .<>:~]/) ? (a || document).querySelectorAll(t) : [document.getElementById(t.split("#")[1])], s = 0; s < r.length; s++) r[s] && i.push(r[s])
                            } else if (t.nodeType || t === window || t === document) i.push(t);
                        else if (t.length > 0 && t[0].nodeType)
                            for (s = 0; s < t.length; s++) i.push(t[s]);
                        return new e(i)
                    };
                return e.prototype = {
                    addClass: function(e) {
                        if ("undefined" == typeof e) return this;
                        for (var t = e.split(" "), a = 0; a < t.length; a++)
                            for (var i = 0; i < this.length; i++) this[i].classList.add(t[a]);
                        return this
                    },
                    removeClass: function(e) {
                        for (var t = e.split(" "), a = 0; a < t.length; a++)
                            for (var i = 0; i < this.length; i++) this[i].classList.remove(t[a]);
                        return this
                    },
                    hasClass: function(e) {
                        return this[0] ? this[0].classList.contains(e) : !1
                    },
                    toggleClass: function(e) {
                        for (var t = e.split(" "), a = 0; a < t.length; a++)
                            for (var i = 0; i < this.length; i++) this[i].classList.toggle(t[a]);
                        return this
                    },
                    attr: function(e, t) {
                        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                        for (var a = 0; a < this.length; a++)
                            if (2 === arguments.length) this[a].setAttribute(e, t);
                            else
                                for (var i in e) this[a][i] = e[i], this[a].setAttribute(i, e[i]);
                        return this
                    },
                    removeAttr: function(e) {
                        for (var t = 0; t < this.length; t++) this[t].removeAttribute(e);
                        return this
                    },
                    data: function(e, t) {
                        if ("undefined" != typeof t) {
                            for (var a = 0; a < this.length; a++) {
                                var i = this[a];
                                i.dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t
                            }
                            return this
                        }
                        if (this[0]) {
                            var s = this[0].getAttribute("data-" + e);
                            return s ? s : this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0
                        }
                    },
                    transform: function(e) {
                        for (var t = 0; t < this.length; t++) {
                            var a = this[t].style;
                            a.webkitTransform = a.MsTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = e
                        }
                        return this
                    },
                    transition: function(e) {
                        "string" != typeof e && (e += "ms");
                        for (var t = 0; t < this.length; t++) {
                            var a = this[t].style;
                            a.webkitTransitionDuration = a.MsTransitionDuration = a.msTransitionDuration = a.MozTransitionDuration = a.OTransitionDuration = a.transitionDuration = e
                        }
                        return this
                    },
                    on: function(e, a, i, s) {
                        function r(e) {
                            var s = e.target;
                            if (t(s).is(a)) i.call(s, e);
                            else
                                for (var r = t(s).parents(), n = 0; n < r.length; n++) t(r[n]).is(a) && i.call(r[n], e)
                        }
                        var n, o, l = e.split(" ");
                        for (n = 0; n < this.length; n++)
                            if ("function" == typeof a || a === !1)
                                for ("function" == typeof a && (i = arguments[1], s = arguments[2] || !1), o = 0; o < l.length; o++) this[n].addEventListener(l[o], i, s);
                            else
                                for (o = 0; o < l.length; o++) this[n].dom7LiveListeners || (this[n].dom7LiveListeners = []), this[n].dom7LiveListeners.push({
                                    listener: i,
                                    liveListener: r
                                }), this[n].addEventListener(l[o], r, s);
                        return this
                    },
                    off: function(e, t, a, i) {
                        for (var s = e.split(" "), r = 0; r < s.length; r++)
                            for (var n = 0; n < this.length; n++)
                                if ("function" == typeof t || t === !1) "function" == typeof t && (a = arguments[1], i = arguments[2] || !1), this[n].removeEventListener(s[r], a, i);
                                else if (this[n].dom7LiveListeners)
                            for (var o = 0; o < this[n].dom7LiveListeners.length; o++) this[n].dom7LiveListeners[o].listener === a && this[n].removeEventListener(s[r], this[n].dom7LiveListeners[o].liveListener, i);
                        return this
                    },
                    once: function(e, t, a, i) {
                        function s(n) {
                            a(n), r.off(e, t, s, i)
                        }
                        var r = this;
                        "function" == typeof t && (t = !1, a = arguments[1], i = arguments[2]), r.on(e, t, s, i)
                    },
                    trigger: function(e, t) {
                        for (var a = 0; a < this.length; a++) {
                            var i;
                            try {
                                i = new window.CustomEvent(e, {
                                    detail: t,
                                    bubbles: !0,
                                    cancelable: !0
                                })
                            } catch (s) {
                                i = document.createEvent("Event"), i.initEvent(e, !0, !0), i.detail = t
                            }
                            this[a].dispatchEvent(i)
                        }
                        return this
                    },
                    transitionEnd: function(e) {
                        function t(r) {
                            if (r.target === this)
                                for (e.call(this, r), a = 0; a < i.length; a++) s.off(i[a], t)
                        }
                        var a, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                            s = this;
                        if (e)
                            for (a = 0; a < i.length; a++) s.on(i[a], t);
                        return this
                    },
                    width: function() {
                        return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
                    },
                    outerWidth: function(e) {
                        return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
                    },
                    height: function() {
                        return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
                    },
                    outerHeight: function(e) {
                        return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
                    },
                    offset: function() {
                        if (this.length > 0) {
                            var e = this[0],
                                t = e.getBoundingClientRect(),
                                a = document.body,
                                i = e.clientTop || a.clientTop || 0,
                                s = e.clientLeft || a.clientLeft || 0,
                                r = window.pageYOffset || e.scrollTop,
                                n = window.pageXOffset || e.scrollLeft;
                            return {
                                top: t.top + r - i,
                                left: t.left + n - s
                            }
                        }
                        return null
                    },
                    css: function(e, t) {
                        var a;
                        if (1 === arguments.length) {
                            if ("string" != typeof e) {
                                for (a = 0; a < this.length; a++)
                                    for (var i in e) this[a].style[i] = e[i];
                                return this
                            }
                            if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
                        }
                        if (2 === arguments.length && "string" == typeof e) {
                            for (a = 0; a < this.length; a++) this[a].style[e] = t;
                            return this
                        }
                        return this
                    },
                    each: function(e) {
                        for (var t = 0; t < this.length; t++) e.call(this[t], t, this[t]);
                        return this
                    },
                    html: function(e) {
                        if ("undefined" == typeof e) return this[0] ? this[0].innerHTML : void 0;
                        for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
                        return this
                    },
                    text: function(e) {
                        if ("undefined" == typeof e) return this[0] ? this[0].textContent.trim() : null;
                        for (var t = 0; t < this.length; t++) this[t].textContent = e;
                        return this
                    },
                    is: function(a) {
                        if (!this[0]) return !1;
                        var i, s;
                        if ("string" == typeof a) {
                            var r = this[0];
                            if (r === document) return a === document;
                            if (r === window) return a === window;
                            if (r.matches) return r.matches(a);
                            if (r.webkitMatchesSelector) return r.webkitMatchesSelector(a);
                            if (r.mozMatchesSelector) return r.mozMatchesSelector(a);
                            if (r.msMatchesSelector) return r.msMatchesSelector(a);
                            for (i = t(a), s = 0; s < i.length; s++)
                                if (i[s] === this[0]) return !0;
                            return !1
                        }
                        if (a === document) return this[0] === document;
                        if (a === window) return this[0] === window;
                        if (a.nodeType || a instanceof e) {
                            for (i = a.nodeType ? [a] : a, s = 0; s < i.length; s++)
                                if (i[s] === this[0]) return !0;
                            return !1
                        }
                        return !1
                    },
                    index: function() {
                        if (this[0]) {
                            for (var e = this[0], t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && t++;
                            return t
                        }
                    },
                    eq: function(t) {
                        if ("undefined" == typeof t) return this;
                        var a, i = this.length;
                        return t > i - 1 ? new e([]) : 0 > t ? (a = i + t, new e(0 > a ? [] : [this[a]])) : new e([this[t]])
                    },
                    append: function(t) {
                        var a, i;
                        for (a = 0; a < this.length; a++)
                            if ("string" == typeof t) {
                                var s = document.createElement("div");
                                for (s.innerHTML = t; s.firstChild;) this[a].appendChild(s.firstChild)
                            } else if (t instanceof e)
                            for (i = 0; i < t.length; i++) this[a].appendChild(t[i]);
                        else this[a].appendChild(t);
                        return this
                    },
                    prepend: function(t) {
                        var a, i;
                        for (a = 0; a < this.length; a++)
                            if ("string" == typeof t) {
                                var s = document.createElement("div");
                                for (s.innerHTML = t, i = s.childNodes.length - 1; i >= 0; i--) this[a].insertBefore(s.childNodes[i], this[a].childNodes[0])
                            } else if (t instanceof e)
                            for (i = 0; i < t.length; i++) this[a].insertBefore(t[i], this[a].childNodes[0]);
                        else this[a].insertBefore(t, this[a].childNodes[0]);
                        return this
                    },
                    insertBefore: function(e) {
                        for (var a = t(e), i = 0; i < this.length; i++)
                            if (1 === a.length) a[0].parentNode.insertBefore(this[i], a[0]);
                            else if (a.length > 1)
                            for (var s = 0; s < a.length; s++) a[s].parentNode.insertBefore(this[i].cloneNode(!0), a[s])
                    },
                    insertAfter: function(e) {
                        for (var a = t(e), i = 0; i < this.length; i++)
                            if (1 === a.length) a[0].parentNode.insertBefore(this[i], a[0].nextSibling);
                            else if (a.length > 1)
                            for (var s = 0; s < a.length; s++) a[s].parentNode.insertBefore(this[i].cloneNode(!0), a[s].nextSibling)
                    },
                    next: function(a) {
                        return new e(this.length > 0 ? a ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(a) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
                    },
                    nextAll: function(a) {
                        var i = [],
                            s = this[0];
                        if (!s) return new e([]);
                        for (; s.nextElementSibling;) {
                            var r = s.nextElementSibling;
                            a ? t(r).is(a) && i.push(r) : i.push(r), s = r
                        }
                        return new e(i)
                    },
                    prev: function(a) {
                        return new e(this.length > 0 ? a ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(a) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
                    },
                    prevAll: function(a) {
                        var i = [],
                            s = this[0];
                        if (!s) return new e([]);
                        for (; s.previousElementSibling;) {
                            var r = s.previousElementSibling;
                            a ? t(r).is(a) && i.push(r) : i.push(r), s = r
                        }
                        return new e(i)
                    },
                    parent: function(e) {
                        for (var a = [], i = 0; i < this.length; i++) e ? t(this[i].parentNode).is(e) && a.push(this[i].parentNode) : a.push(this[i].parentNode);
                        return t(t.unique(a))
                    },
                    parents: function(e) {
                        for (var a = [], i = 0; i < this.length; i++)
                            for (var s = this[i].parentNode; s;) e ? t(s).is(e) && a.push(s) : a.push(s), s = s.parentNode;
                        return t(t.unique(a))
                    },
                    find: function(t) {
                        for (var a = [], i = 0; i < this.length; i++)
                            for (var s = this[i].querySelectorAll(t), r = 0; r < s.length; r++) a.push(s[r]);
                        return new e(a)
                    },
                    children: function(a) {
                        for (var i = [], s = 0; s < this.length; s++)
                            for (var r = this[s].childNodes, n = 0; n < r.length; n++) a ? 1 === r[n].nodeType && t(r[n]).is(a) && i.push(r[n]) : 1 === r[n].nodeType && i.push(r[n]);
                        return new e(t.unique(i))
                    },
                    remove: function() {
                        for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                        return this
                    },
                    add: function() {
                        var e, a, i = this;
                        for (e = 0; e < arguments.length; e++) {
                            var s = t(arguments[e]);
                            for (a = 0; a < s.length; a++) i[i.length] = s[a], i.length++
                        }
                        return i
                    }
                }, t.fn = e.prototype, t.unique = function(e) {
                    for (var t = [], a = 0; a < e.length; a++) - 1 === t.indexOf(e[a]) && t.push(e[a]);
                    return t
                }, t
            }()), s = ["jQuery", "Zepto", "Dom7"], r = 0; r < s.length; r++) window[s[r]] && e(window[s[r]]);
        var n;
        n = "undefined" == typeof i ? window.Dom7 || window.Zepto || window.jQuery : i, n && ("transitionEnd" in n.fn || (n.fn.transitionEnd = function(e) {
            function t(r) {
                if (r.target === this)
                    for (e.call(this, r), a = 0; a < i.length; a++) s.off(i[a], t)
            }
            var a, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                s = this;
            if (e)
                for (a = 0; a < i.length; a++) s.on(i[a], t);
            return this
        }), "transform" in n.fn || (n.fn.transform = function(e) {
            for (var t = 0; t < this.length; t++) {
                var a = this[t].style;
                a.webkitTransform = a.MsTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = e
            }
            return this
        }), "transition" in n.fn || (n.fn.transition = function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t++) {
                var a = this[t].style;
                a.webkitTransitionDuration = a.MsTransitionDuration = a.msTransitionDuration = a.MozTransitionDuration = a.OTransitionDuration = a.transitionDuration = e
            }
            return this
        }), "outerWidth" in n.fn || (n.fn.outerWidth = function(e) {
            return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
        })), window.Swiper = a
    }(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
        "use strict";
        return window.Swiper
    });