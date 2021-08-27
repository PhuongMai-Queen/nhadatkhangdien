! function(t) {
    function e(e, i, s, n) {
        var r = e.text().split(i),
            a = "";
        r.length && (t(r).each(function(t, e) {
            a += '<span class="' + s + (t + 1) + '">' + e + "</span>" + n
        }), e.empty().append(a))
    }
    var i = {
        init: function() {
            return this.each(function() {
                e(t(this), "", "char", "")
            })
        },
        words: function() {
            return this.each(function() {
                e(t(this), " ", "word", " ")
            })
        },
        lines: function() {
            return this.each(function() {
                var i = "eefec303079ad17405c889e092e105b0";
                e(t(this).children("br").replaceWith(i).end(), i, "line", "")
            })
        }
    };
    t.fn.lettering = function(e) {
        return e && i[e] ? i[e].apply(this, [].slice.call(arguments, 1)) : "letters" !== e && e ? (t.error("Method " + e + " does not exist on jQuery.lettering"), this) : i.init.apply(this, [].slice.call(arguments, 0))
    }
}(jQuery),
function(t) {
    t.easing.jswing = t.easing.swing, t.extend(t.easing, {
        def: "easeOutQuad",
        swing: function(e, i, s, n, r) {
            return t.easing[t.easing.def](e, i, s, n, r)
        },
        easeInQuad: function(t, e, i, s, n) {
            return s * (e /= n) * e + i
        },
        easeOutQuad: function(t, e, i, s, n) {
            return -s * (e /= n) * (e - 2) + i
        },
        easeInOutQuad: function(t, e, i, s, n) {
            return (e /= n / 2) < 1 ? s / 2 * e * e + i : -s / 2 * (--e * (e - 2) - 1) + i
        },
        easeInCubic: function(t, e, i, s, n) {
            return s * (e /= n) * e * e + i
        },
        easeOutCubic: function(t, e, i, s, n) {
            return s * ((e = e / n - 1) * e * e + 1) + i
        },
        easeInOutCubic: function(t, e, i, s, n) {
            return (e /= n / 2) < 1 ? s / 2 * e * e * e + i : s / 2 * ((e -= 2) * e * e + 2) + i
        },
        easeInQuart: function(t, e, i, s, n) {
            return s * (e /= n) * e * e * e + i
        },
        easeOutQuart: function(t, e, i, s, n) {
            return -s * ((e = e / n - 1) * e * e * e - 1) + i
        },
        easeInOutQuart: function(t, e, i, s, n) {
            return (e /= n / 2) < 1 ? s / 2 * e * e * e * e + i : -s / 2 * ((e -= 2) * e * e * e - 2) + i
        },
        easeInQuint: function(t, e, i, s, n) {
            return s * (e /= n) * e * e * e * e + i
        },
        easeOutQuint: function(t, e, i, s, n) {
            return s * ((e = e / n - 1) * e * e * e * e + 1) + i
        },
        easeInOutQuint: function(t, e, i, s, n) {
            return (e /= n / 2) < 1 ? s / 2 * e * e * e * e * e + i : s / 2 * ((e -= 2) * e * e * e * e + 2) + i
        },
        easeInSine: function(t, e, i, s, n) {
            return -s * Math.cos(e / n * (Math.PI / 2)) + s + i
        },
        easeOutSine: function(t, e, i, s, n) {
            return s * Math.sin(e / n * (Math.PI / 2)) + i
        },
        easeInOutSine: function(t, e, i, s, n) {
            return -s / 2 * (Math.cos(Math.PI * e / n) - 1) + i
        },
        easeInExpo: function(t, e, i, s, n) {
            return 0 == e ? i : s * Math.pow(2, 10 * (e / n - 1)) + i
        },
        easeOutExpo: function(t, e, i, s, n) {
            return e == n ? i + s : s * (-Math.pow(2, -10 * e / n) + 1) + i
        },
        easeInOutExpo: function(t, e, i, s, n) {
            return 0 == e ? i : e == n ? i + s : (e /= n / 2) < 1 ? s / 2 * Math.pow(2, 10 * (e - 1)) + i : s / 2 * (-Math.pow(2, -10 * --e) + 2) + i
        },
        easeInCirc: function(t, e, i, s, n) {
            return -s * (Math.sqrt(1 - (e /= n) * e) - 1) + i
        },
        easeOutCirc: function(t, e, i, s, n) {
            return s * Math.sqrt(1 - (e = e / n - 1) * e) + i
        },
        easeInOutCirc: function(t, e, i, s, n) {
            return (e /= n / 2) < 1 ? -s / 2 * (Math.sqrt(1 - e * e) - 1) + i : s / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
        },
        easeInElastic: function(t, e, i, s, n) {
            var r = 1.70158,
                a = 0,
                o = s;
            if (0 == e) return i;
            if (1 == (e /= n)) return i + s;
            if (a || (a = .3 * n), o < Math.abs(s)) {
                o = s;
                var r = a / 4
            } else var r = a / (2 * Math.PI) * Math.asin(s / o);
            return -(o * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - r) * (2 * Math.PI) / a)) + i
        },
        easeOutElastic: function(t, e, i, s, n) {
            var r = 1.70158,
                a = 0,
                o = s;
            if (0 == e) return i;
            if (1 == (e /= n)) return i + s;
            if (a || (a = .3 * n), o < Math.abs(s)) {
                o = s;
                var r = a / 4
            } else var r = a / (2 * Math.PI) * Math.asin(s / o);
            return o * Math.pow(2, -10 * e) * Math.sin((e * n - r) * (2 * Math.PI) / a) + s + i
        },
        easeInOutElastic: function(t, e, i, s, n) {
            var r = 1.70158,
                a = 0,
                o = s;
            if (0 == e) return i;
            if (2 == (e /= n / 2)) return i + s;
            if (a || (a = n * (.3 * 1.5)), o < Math.abs(s)) {
                o = s;
                var r = a / 4
            } else var r = a / (2 * Math.PI) * Math.asin(s / o);
            return 1 > e ? -.5 * (o * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - r) * (2 * Math.PI) / a)) + i : o * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * n - r) * (2 * Math.PI) / a) * .5 + s + i
        },
        easeInBack: function(t, e, i, s, n, r) {
            return void 0 == r && (r = 1.70158), s * (e /= n) * e * ((r + 1) * e - r) + i
        },
        easeOutBack: function(t, e, i, s, n, r) {
            return void 0 == r && (r = 1.70158), s * ((e = e / n - 1) * e * ((r + 1) * e + r) + 1) + i
        },
        easeInOutBack: function(t, e, i, s, n, r) {
            return void 0 == r && (r = 1.70158), (e /= n / 2) < 1 ? s / 2 * (e * e * (((r *= 1.525) + 1) * e - r)) + i : s / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + i
        },
        easeInBounce: function(e, i, s, n, r) {
            return n - t.easing.easeOutBounce(e, r - i, 0, n, r) + s
        },
        easeOutBounce: function(t, e, i, s, n) {
            return (e /= n) < 1 / 2.75 ? s * (7.5625 * e * e) + i : 2 / 2.75 > e ? s * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? s * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : s * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
        },
        easeInOutBounce: function(e, i, s, n, r) {
            return r / 2 > i ? .5 * t.easing.easeInBounce(e, 2 * i, 0, n, r) + s : .5 * t.easing.easeOutBounce(e, 2 * i - r, 0, n, r) + .5 * n + s
        }
    })
}(jQuery),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
}(function(t) {
    function e(e) {
        var a = e || window.event,
            o = h.call(arguments, 1),
            l = 0,
            u = 0,
            c = 0,
            f = 0;
        if (e = t.event.fix(a), e.type = "mousewheel", "detail" in a && (c = -1 * a.detail), "wheelDelta" in a && (c = a.wheelDelta), "wheelDeltaY" in a && (c = a.wheelDeltaY), "wheelDeltaX" in a && (u = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (u = -1 * c, c = 0), l = 0 === c ? u : c, "deltaY" in a && (c = -1 * a.deltaY, l = c), "deltaX" in a && (u = a.deltaX, 0 === c && (l = -1 * u)), 0 !== c || 0 !== u) {
            if (1 === a.deltaMode) {
                var p = t.data(this, "mousewheel-line-height");
                l *= p, c *= p, u *= p
            } else if (2 === a.deltaMode) {
                var _ = t.data(this, "mousewheel-page-height");
                l *= _, c *= _, u *= _
            }
            return f = Math.max(Math.abs(c), Math.abs(u)), (!r || r > f) && (r = f, s(a, f) && (r /= 40)), s(a, f) && (l /= 40, u /= 40, c /= 40), l = Math[l >= 1 ? "floor" : "ceil"](l / r), u = Math[u >= 1 ? "floor" : "ceil"](u / r), c = Math[c >= 1 ? "floor" : "ceil"](c / r), e.deltaX = u, e.deltaY = c, e.deltaFactor = r, e.deltaMode = 0, o.unshift(e, l, u, c), n && clearTimeout(n), n = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, o)
        }
    }

    function i() {
        r = null
    }

    function s(t, e) {
        return u.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
    }
    var n, r, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        o = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        h = Array.prototype.slice;
    if (t.event.fixHooks)
        for (var l = a.length; l;) t.event.fixHooks[a[--l]] = t.event.mouseHooks;
    var u = t.event.special.mousewheel = {
        version: "3.1.9",
        setup: function() {
            if (this.addEventListener)
                for (var i = o.length; i;) this.addEventListener(o[--i], e, !1);
            else this.onmousewheel = e;
            t.data(this, "mousewheel-line-height", u.getLineHeight(this)), t.data(this, "mousewheel-page-height", u.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var t = o.length; t;) this.removeEventListener(o[--t], e, !1);
            else this.onmousewheel = null
        },
        getLineHeight: function(e) {
            return parseInt(t(e)["offsetParent" in t.fn ? "offsetParent" : "parent"]().css("fontSize"), 10)
        },
        getPageHeight: function(e) {
            return t(e).height()
        },
        settings: {
            adjustOldDeltas: !0
        }
    };
    t.fn.extend({
        mousewheel: function(t) {
            return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
        },
        unmousewheel: function(t) {
            return this.unbind("mousewheel", t)
        }
    })
}),
function(t) {
    function e(t) {
        var e = t.data("_ARS_data");
        return e || (e = {
            rotateUnits: "deg",
            scale: 1,
            rotate: 0
        }, t.data("_ARS_data", e)), e
    }

    function i(t, e) {
        t.css("transform", "rotate(" + e.rotate + e.rotateUnits + ") scale(" + e.scale + "," + e.scale + ")")
    }
    t.fn.rotate = function(s) {
        var n, r = t(this),
            a = e(r);
        return "undefined" == typeof s ? a.rotate + a.rotateUnits : (n = s.toString().match(/^(-?\d+(\.\d+)?)(.+)?$/), n && (n[3] && (a.rotateUnits = n[3]), a.rotate = n[1], i(r, a)), this)
    }, t.fn.scale = function(s) {
        var n = t(this),
            r = e(n);
        return "undefined" == typeof s ? r.scale : (r.scale = s, i(n, r), this)
    };
    var s = t.fx.prototype.cur;
    t.fx.prototype.cur = function() {
        return "rotate" == this.prop ? parseFloat(t(this.elem).rotate()) : "scale" == this.prop ? parseFloat(t(this.elem).scale()) : s.apply(this, arguments)
    }, t.fx.step.rotate = function(i) {
        var s = e(t(i.elem));
        t(i.elem).rotate(i.now + s.rotateUnits)
    }, t.fx.step.scale = function(e) {
        t(e.elem).scale(e.now)
    };
    var n = t.fn.animate;
    t.fn.animate = function(i) {
        if ("undefined" != typeof i.rotate) {
            var s, r, a = i.rotate.toString().match(/^(([+-]=)?(-?\d+(\.\d+)?))(.+)?$/);
            a && a[5] && (s = t(this), r = e(s), r.rotateUnits = a[5]), i.rotate = a[1]
        }
        return n.apply(this, arguments)
    }
}(jQuery),
function(t) {
    "use strict";
    var e = "draptouch-active";
    window.requestAnimationFrame || (window.requestAnimationFrame = function() {
        return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
            window.setTimeout(t, 1e3 / 60)
        }
    }()), t.support = t.support || {}, t.extend(t.support, {
        touch: "ontouchend" in document
    });
    var i = function() {
            return !1
        },
        s = function(e, i) {
            return this.settings = i, this.el = e, this.$el = t(e), this._initElements(), this
        };
    s.DATA_KEY = "draptouch", s.DEFAULTS = {
        cursor: "",
        decelerate: !0,
        triggerHardware: !1,
        threshold: 0,
        y: !0,
        x: !0,
        slowdown: .9,
        maxvelocity: 40,
        throttleFPS: 60,
        movingClass: {
            up: "draptouch-moving-up",
            down: "draptouch-moving-down",
            left: "draptouch-moving-left",
            right: "draptouch-moving-right"
        },
        deceleratingClass: {
            up: "draptouch-decelerating-up",
            down: "draptouch-decelerating-down",
            left: "draptouch-decelerating-left",
            right: "draptouch-decelerating-right"
        }
    }, s.prototype.start = function(e) {
        this.settings = t.extend(this.settings, e), this.velocity = e.velocity || this.velocity, this.velocityY = e.velocityY || this.velocityY, this.settings.decelerate = !1, this._move()
    }, s.prototype.end = function() {
        this.settings.decelerate = !0
    }, s.prototype.stop = function() {
        this.velocity = 0, this.velocityY = 0, this.settings.decelerate = !0, t.isFunction(this.settings.stopped) && this.settings.stopped.call(this)
    }, s.prototype.detach = function() {
        this._detachListeners(), this.$el.removeClass(e).css("cursor", "")
    }, s.prototype.attach = function() {
        this.$el.hasClass(e) || (this._attachListeners(this.$el), this.$el.addClass(e).css("cursor", this.settings.cursor))
    }, s.prototype._initElements = function() {
        this.$el.addClass(e), t.extend(this, {
            xpos: null,
            prevXPos: !1,
            ypos: null,
            prevYPos: !1,
            mouseDown: !1,
            throttleTimeout: 1e3 / this.settings.throttleFPS,
            lastMove: null,
            elementFocused: null
        }), this.velocity = 0, this.velocityY = 0, t(document).mouseup(t.proxy(this._resetMouse, this)).click(t.proxy(this._resetMouse, this)), this._initEvents(), this.$el.css("cursor", this.settings.cursor), this.settings.triggerHardware && this.$el.css({
            "-webkit-transform": "translate3d(0,0,0)",
            "-webkit-perspective": "1000",
            "-webkit-backface-visibility": "hidden"
        })
    }, s.prototype._initEvents = function() {
        var e = this;
        this.settings.events = {
            touchStart: function(t) {
                var i;
                e._useTarget(t.target, t) && (i = t.originalEvent.touches[0], e.threshold = e._threshold(t.target, t), e._start(i.clientX, i.clientY), t.stopPropagation())
            },
            touchMove: function(t) {
                var i;
                e.mouseDown && (i = t.originalEvent.touches[0], e._inputmove(i.clientX, i.clientY), t.preventDefault && t.preventDefault())
            },
            inputDown: function(t) {
                e._useTarget(t.target, t) && (e.threshold = e._threshold(t.target, t), e._start(t.clientX, t.clientY), e.elementFocused = t.target, "IMG" === t.target.nodeName && t.preventDefault(), t.stopPropagation())
            },
            inputEnd: function(t) {
                e._useTarget(t.target, t) && (e._end(), e.elementFocused = null, t.preventDefault && t.preventDefault())
            },
            inputMove: function(t) {
                e.mouseDown && (e._inputmove(t.clientX, t.clientY), t.preventDefault && t.preventDefault())
            },
            scroll: function(i) {
                t.isFunction(e.settings.moved) && e.settings.moved.call(e, e.settings), i.preventDefault && i.preventDefault()
            },
            inputClick: function(t) {
                return Math.abs(e.velocity) > 0 ? (t.preventDefault(), !1) : void 0
            },
            dragStart: function(t) {
                return e._useTarget(t.target, t) && e.elementFocused ? !1 : void 0
            }
        }, this._attachListeners(this.$el, this.settings)
    }, s.prototype._inputmove = function(e, i) {
        var s = this.$el;
        this.el;
        if ((!this.lastMove || new Date > new Date(this.lastMove.getTime() + this.throttleTimeout)) && (this.lastMove = new Date, this.mouseDown && (this.xpos || this.ypos))) {
            var n = e - this.xpos,
                r = i - this.ypos;
            if (this.threshold > 0) {
                var a = Math.sqrt(n * n + r * r);
                if (this.threshold > a) return;
                this.threshold = 0
            }
            this.elementFocused && (t(this.elementFocused).blur(), this.elementFocused = null, s.focus()), this.settings.decelerate = !1, this.velocity = this.velocityY = 0;
            var o = this.scrollLeft(),
                h = this.scrollTop();
            this.scrollLeft(this.settings.x ? o - n : o), this.scrollTop(this.settings.y ? h - r : h), this.prevXPos = this.xpos, this.prevYPos = this.ypos, this.xpos = e, this.ypos = i, this._calculateVelocities(), this._setMoveClasses(this.settings.movingClass), t.isFunction(this.settings.moved) && this.settings.moved.call(this, this.settings)
        }
    }, s.prototype._calculateVelocities = function() {
        this.velocity = this._capVelocity(this.prevXPos - this.xpos, this.settings.maxvelocity), this.velocityY = this._capVelocity(this.prevYPos - this.ypos, this.settings.maxvelocity)
    }, s.prototype._end = function() {
        this.xpos && this.prevXPos && this.settings.decelerate === !1 && (this.settings.decelerate = !0, this._calculateVelocities(), this.xpos = this.prevXPos = this.mouseDown = !1, this._move())
    }, s.prototype._useTarget = function(e, i) {
        return t.isFunction(this.settings.filterTarget) ? this.settings.filterTarget.call(this, e, i) !== !1 : !0
    }, s.prototype._threshold = function(e, i) {
        return t.isFunction(this.settings.threshold) ? this.settings.threshold.call(this, e, i) : this.settings.threshold
    }, s.prototype._start = function(t, e) {
        this.mouseDown = !0, this.velocity = this.prevXPos = 0, this.velocityY = this.prevYPos = 0, this.xpos = t, this.ypos = e
    }, s.prototype._resetMouse = function() {
        this.xpos = !1, this.ypos = !1, this.mouseDown = !1
    }, s.prototype._decelerateVelocity = function(t, e) {
        return 0 === Math.floor(Math.abs(t)) ? 0 : t * e
    }, s.prototype._capVelocity = function(t, e) {
        var i = t;
        return t > 0 ? t > e && (i = e) : 0 - e > t && (i = 0 - e), i
    }, s.prototype._setMoveClasses = function(t) {
        var e = this.settings,
            i = this.$el;
        i.removeClass(e.movingClass.up).removeClass(e.movingClass.down).removeClass(e.movingClass.left).removeClass(e.movingClass.right).removeClass(e.deceleratingClass.up).removeClass(e.deceleratingClass.down).removeClass(e.deceleratingClass.left).removeClass(e.deceleratingClass.right), this.velocity > 0 && i.addClass(t.right), this.velocity < 0 && i.addClass(t.left), this.velocityY > 0 && i.addClass(t.down), this.velocityY < 0 && i.addClass(t.up)
    }, s.prototype._move = function() {
        var e = (this.$el, this.el),
            i = this,
            s = i.settings;
        s.x && e.scrollWidth > 0 ? (this.scrollLeft(this.scrollLeft() + this.velocity), Math.abs(this.velocity) > 0 && (this.velocity = s.decelerate ? i._decelerateVelocity(this.velocity, s.slowdown) : this.velocity)) : this.velocity = 0, s.y && e.scrollHeight > 0 ? (this.scrollTop(this.scrollTop() + this.velocityY), Math.abs(this.velocityY) > 0 && (this.velocityY = s.decelerate ? i._decelerateVelocity(this.velocityY, s.slowdown) : this.velocityY)) : this.velocityY = 0, i._setMoveClasses(s.deceleratingClass), t.isFunction(s.moved) && s.moved.call(this, s), Math.abs(this.velocity) > 0 || Math.abs(this.velocityY) > 0 ? this.moving || (this.moving = !0, window.requestAnimationFrame(function() {
            i.moving = !1, i._move()
        })) : i.stop()
    }, s.prototype._getScroller = function() {
        var e = this.$el;
        return (this.$el.is("body") || this.$el.is("html")) && (e = t(window)), e
    }, s.prototype.scrollLeft = function(t) {
        var e = this._getScroller();
        return "number" != typeof t ? e.scrollLeft() : (e.scrollLeft(t), void(this.settings.scrollLeft = t))
    }, s.prototype.scrollTop = function(t) {
        var e = this._getScroller();
        return "number" != typeof t ? e.scrollTop() : (e.scrollTop(t), void(this.settings.scrollTop = t))
    }, s.prototype._attachListeners = function() {
        var e = this.$el,
            s = this.settings;
        t.support.touch && e.bind("touchstart", s.events.touchStart).bind("touchend", s.events.inputEnd).bind("touchmove", s.events.touchMove), e.mousedown(s.events.inputDown).mouseup(s.events.inputEnd).mousemove(s.events.inputMove), e.click(s.events.inputClick).scroll(s.events.scroll).bind("selectstart", i).bind("dragstart", s.events.dragStart)
    }, s.prototype._detachListeners = function() {
        var e = this.$el,
            s = this.settings;
        t.support.touch && e.unbind("touchstart", s.events.touchStart).unbind("touchend", s.events.inputEnd).unbind("touchmove", s.events.touchMove), e.unbind("mousedown", s.events.inputDown).unbind("mouseup", s.events.inputEnd).unbind("mousemove", s.events.inputMove), e.unbind("click", s.events.inputClick).unbind("scroll", s.events.scroll).unbind("selectstart", i).unbind("dragstart", s.events.dragStart)
    }, t.DrapTouch = s, t.fn.draptouch = function(e, i) {
        return this.each(function() {
            var n = t(this),
                r = n.data(s.DATA_KEY),
                a = t.extend({}, s.DEFAULTS, n.data(), "object" == typeof e && e);
            r || n.data(s.DATA_KEY, r = new s(this, a)), "string" == typeof e && r[e](i)
        })
    }
}(window.jQuery || window.Zepto),
function() {
    "use strict";
    "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
        value: function(t) {
            if (null == t) throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), i = 1; i < arguments.length; i++) {
                var s = arguments[i];
                if (null != s)
                    for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
            }
            return e
        },
        writable: !0,
        configurable: !0
    }), "function" != typeof Array.from && (Array.from = function(t) {
        return [].slice.call(t)
    });
    var t = function(t) {
            var e = document.implementation.createHTMLDocument("");
            return e.body.innerHTML = t, Array.from(e.body.children)[0]
        },
        e = function(t, e) {
            var i = document.createEvent("HTMLEvents");
            i.initEvent(e, !0, !1), t.dispatchEvent(i)
        },
        i = function() {
            var i = function(t, e) {
                    this.el = t, this.zoomFactor = 1, this.lastScale = 1, this.offset = {
                        x: 0,
                        y: 0
                    }, this.options = Object.assign({}, this.defaults, e), this.setupMarkup(), this.bindEvents(), this.update(), this.enable()
                },
                s = function(t, e) {
                    return t + e
                },
                n = function(t, e) {
                    return t > e - .01 && e + .01 > t
                };
            i.prototype = {
                defaults: {
                    tapZoomFactor: 2,
                    zoomOutFactor: 1.3,
                    animationDuration: 300,
                    maxZoom: 4,
                    minZoom: .5,
                    lockDragAxis: !1,
                    use2d: !0,
                    zoomStartEventName: "pz_zoomstart",
                    zoomEndEventName: "pz_zoomend",
                    dragStartEventName: "pz_dragstart",
                    dragEndEventName: "pz_dragend",
                    doubleTapEventName: "pz_doubletap"
                },
                handleDragStart: function(t) {
                    e(this.el, this.options.dragStartEventName), this.stopAnimation(), this.lastDragPosition = !1, this.hasInteraction = !0, this.handleDrag(t)
                },
                handleDrag: function(t) {
                    if (this.zoomFactor > 1) {
                        var e = this.getTouches(t)[0];
                        this.drag(e, this.lastDragPosition), this.offset = this.sanitizeOffset(this.offset), this.lastDragPosition = e
                    }
                },
                handleDragEnd: function() {
                    e(this.el, this.options.dragEndEventName), this.end()
                },
                handleZoomStart: function() {
                    e(this.el, this.options.zoomStartEventName), this.stopAnimation(), this.lastScale = 1, this.nthZoom = 0, this.lastZoomCenter = !1, this.hasInteraction = !0
                },
                handleZoom: function(t, e) {
                    var i = this.getTouchCenter(this.getTouches(t)),
                        s = e / this.lastScale;
                    this.lastScale = e, this.nthZoom += 1, this.nthZoom > 3 && (this.scale(s, i), this.drag(i, this.lastZoomCenter)), this.lastZoomCenter = i
                },
                handleZoomEnd: function() {
                    e(this.el, this.options.zoomEndEventName), this.end()
                },
                handleDoubleTap: function(t) {
                    var i = this.getTouches(t)[0],
                        s = this.zoomFactor > 1 ? 1 : this.options.tapZoomFactor,
                        n = this.zoomFactor,
                        r = function(t) {
                            this.scaleTo(n + t * (s - n), i)
                        }.bind(this);
                    this.hasInteraction || (n > s && (i = this.getCurrentZoomCenter()), this.animate(this.options.animationDuration, r, this.swing), e(this.el, this.options.doubleTapEventName))
                },
                sanitizeOffset: function(t) {
                    var e = (this.zoomFactor - 1) * this.getContainerX(),
                        i = (this.zoomFactor - 1) * this.getContainerY(),
                        s = Math.max(e, 0),
                        n = Math.max(i, 0),
                        r = Math.min(e, 0),
                        a = Math.min(i, 0);
                    return {
                        x: Math.min(Math.max(t.x, r), s),
                        y: Math.min(Math.max(t.y, a), n)
                    }
                },
                scaleTo: function(t, e) {
                    this.scale(t / this.zoomFactor, e)
                },
                scale: function(t, e) {
                    t = this.scaleZoomFactor(t), this.addOffset({
                        x: (t - 1) * (e.x + this.offset.x),
                        y: (t - 1) * (e.y + this.offset.y)
                    })
                },
                scaleZoomFactor: function(t) {
                    var e = this.zoomFactor;
                    return this.zoomFactor *= t, this.zoomFactor = Math.min(this.options.maxZoom, Math.max(this.zoomFactor, this.options.minZoom)), this.zoomFactor / e
                },
                drag: function(t, e) {
                    e && (this.options.lockDragAxis ? Math.abs(t.x - e.x) > Math.abs(t.y - e.y) ? this.addOffset({
                        x: -(t.x - e.x),
                        y: 0
                    }) : this.addOffset({
                        y: -(t.y - e.y),
                        x: 0
                    }) : this.addOffset({
                        y: -(t.y - e.y),
                        x: -(t.x - e.x)
                    }))
                },
                getTouchCenter: function(t) {
                    return this.getVectorAvg(t)
                },
                getVectorAvg: function(t) {
                    return {
                        x: t.map(function(t) {
                            return t.x
                        }).reduce(s) / t.length,
                        y: t.map(function(t) {
                            return t.y
                        }).reduce(s) / t.length
                    }
                },
                addOffset: function(t) {
                    this.offset = {
                        x: this.offset.x + t.x,
                        y: this.offset.y + t.y
                    }
                },
                sanitize: function() {
                    this.zoomFactor < this.options.zoomOutFactor ? this.zoomOutAnimation() : this.isInsaneOffset(this.offset) && this.sanitizeOffsetAnimation()
                },
                isInsaneOffset: function(t) {
                    var e = this.sanitizeOffset(t);
                    return e.x !== t.x || e.y !== t.y
                },
                sanitizeOffsetAnimation: function() {
                    var t = this.sanitizeOffset(this.offset),
                        e = {
                            x: this.offset.x,
                            y: this.offset.y
                        },
                        i = function(i) {
                            this.offset.x = e.x + i * (t.x - e.x), this.offset.y = e.y + i * (t.y - e.y), this.update()
                        }.bind(this);
                    this.animate(this.options.animationDuration, i, this.swing)
                },
                zoomOutAnimation: function() {
                    var t = this.zoomFactor,
                        e = 1,
                        i = this.getCurrentZoomCenter(),
                        s = function(s) {
                            this.scaleTo(t + s * (e - t), i)
                        }.bind(this);
                    this.animate(this.options.animationDuration, s, this.swing)
                },
                updateAspectRatio: function() {
                    this.setContainerY(this.getContainerX() / this.getAspectRatio())
                },
                getInitialZoomFactor: function() {
                    return this.container.offsetWidth / this.el.offsetWidth
                },
                getAspectRatio: function() {
                    return this.el.offsetWidth / this.el.offsetHeight
                },
                getCurrentZoomCenter: function() {
                    var t = this.container.offsetWidth * this.zoomFactor,
                        e = this.offset.x,
                        i = t - e - this.container.offsetWidth,
                        s = e / i,
                        n = s * this.container.offsetWidth / (s + 1),
                        r = this.container.offsetHeight * this.zoomFactor,
                        a = this.offset.y,
                        o = r - a - this.container.offsetHeight,
                        h = a / o,
                        l = h * this.container.offsetHeight / (h + 1);
                    return 0 === i && (n = this.container.offsetWidth), 0 === o && (l = this.container.offsetHeight), {
                        x: n,
                        y: l
                    }
                },
                canDrag: function() {
                    return !n(this.zoomFactor, 1)
                },
                getTouches: function(t) {
                    var e = this.container.getBoundingClientRect(),
                        i = e.top + document.body.scrollTop,
                        s = e.left + document.body.scrollLeft;
                    return Array.prototype.slice.call(t.touches).map(function(t) {
                        return {
                            x: t.pageX - s,
                            y: t.pageY - i
                        }
                    })
                },
                animate: function(t, e, i, s) {
                    var n = (new Date).getTime(),
                        r = function() {
                            if (this.inAnimation) {
                                var a = (new Date).getTime() - n,
                                    o = a / t;
                                a >= t ? (e(1), s && s(), this.update(), this.stopAnimation(), this.update()) : (i && (o = i(o)), e(o), this.update(), requestAnimationFrame(r))
                            }
                        }.bind(this);
                    this.inAnimation = !0, requestAnimationFrame(r)
                },
                stopAnimation: function() {
                    this.inAnimation = !1
                },
                swing: function(t) {
                    return -Math.cos(t * Math.PI) / 2 + .5
                },
                getContainerX: function() {
                    return this.container.offsetWidth
                },
                getContainerY: function() {
                    return this.container.offsetHeight
                },
                setContainerY: function(t) {
                    return this.container.style.height = t + "px"
                },
                setupMarkup: function() {
                    this.container = t('<div class="pinch-zoom-container"></div>'), this.el.parentNode.insertBefore(this.container, this.el), this.container.appendChild(this.el), this.container.style.overflow = "hidden", this.container.style.position = "relative", this.el.style.webkitTransformOrigin = "0% 0%", this.el.style.mozTransformOrigin = "0% 0%", this.el.style.msTransformOrigin = "0% 0%", this.el.style.oTransformOrigin = "0% 0%", this.el.style.transformOrigin = "0% 0%", this.el.style.position = "absolute"
                },
                end: function() {
                    this.hasInteraction = !1, this.sanitize(), this.update()
                },
                bindEvents: function() {
                    var t = this;
                    r(this.container, this), window.addEventListener("resize", this.update.bind(this)), Array.from(this.el.querySelectorAll("img")).forEach(function(e) {
                        e.addEventListener("load", t.update.bind(t))
                    }), "IMG" === this.el.nodeName && this.el.addEventListener("load", this.update.bind(this))
                },
                update: function() {
                    this.updatePlaned || (this.updatePlaned = !0, setTimeout(function() {
                        this.updatePlaned = !1, this.updateAspectRatio();
                        var t = this.getInitialZoomFactor() * this.zoomFactor,
                            e = -this.offset.x / t,
                            i = -this.offset.y / t,
                            s = "scale3d(" + t + ", " + t + ",1) translate3d(" + e + "px," + i + "px,0px)",
                            n = "scale(" + t + ", " + t + ") translate(" + e + "px," + i + "px)",
                            r = function() {
                                this.clone && (this.clone.parentNode.removeChild(this.clone), delete this.clone)
                            }.bind(this);
                        !this.options.use2d || this.hasInteraction || this.inAnimation ? (this.is3d = !0, r(), this.el.style.webkitTransform = s, this.el.style.mozTransform = n, this.el.style.msTransform = n, this.el.style.oTransform = n, this.el.style.transform = s) : (this.is3d && (this.clone = this.el.cloneNode(!0), this.clone.style.pointerEvents = "none", this.container.appendChild(this.clone), setTimeout(r, 200)), this.el.style.webkitTransform = n, this.el.style.mozTransform = n, this.el.style.msTransform = n, this.el.style.oTransform = n, this.el.style.transform = n, this.is3d = !1)
                    }.bind(this), 0))
                },
                enable: function() {
                    this.enabled = !0
                },
                disable: function() {
                    this.enabled = !1
                }
            };
            var r = function(t, e) {
                var i = null,
                    s = 0,
                    n = null,
                    r = null,
                    a = function(t, s) {
                        if (i !== t) {
                            if (i && !t) switch (i) {
                                case "zoom":
                                    e.handleZoomEnd(s);
                                    break;
                                case "drag":
                                    e.handleDragEnd(s)
                            }
                            switch (t) {
                                case "zoom":
                                    e.handleZoomStart(s);
                                    break;
                                case "drag":
                                    e.handleDragStart(s)
                            }
                        }
                        i = t
                    },
                    o = function(t) {
                        2 === s ? a("zoom") : 1 === s && e.canDrag() ? a("drag", t) : a(null, t)
                    },
                    h = function(t) {
                        return Array.from(t).map(function(t) {
                            return {
                                x: t.pageX,
                                y: t.pageY
                            }
                        })
                    },
                    l = function(t, e) {
                        var i, s;
                        return i = t.x - e.x, s = t.y - e.y, Math.sqrt(i * i + s * s)
                    },
                    u = function(t, e) {
                        var i = l(t[0], t[1]),
                            s = l(e[0], e[1]);
                        return s / i
                    },
                    c = function(t) {
                        t.stopPropagation(), t.preventDefault()
                    },
                    f = function(t) {
                        var r = (new Date).getTime();
                        if (s > 1 && (n = null), 300 > r - n) switch (c(t), e.handleDoubleTap(t), i) {
                            case "zoom":
                                e.handleZoomEnd(t);
                                break;
                            case "drag":
                                e.handleDragEnd(t)
                        }
                        1 === s && (n = r)
                    },
                    p = !0;
                t.addEventListener("touchstart", function(t) {
                    e.enabled && (p = !0, s = t.touches.length, f(t))
                }), t.addEventListener("touchmove", function(t) {
                    if (e.enabled) {
                        if (p) o(t), i && c(t), r = h(t.touches);
                        else {
                            switch (i) {
                                case "zoom":
                                    e.handleZoom(t, u(r, h(t.touches)));
                                    break;
                                case "drag":
                                    e.handleDrag(t)
                            }
                            i && (c(t), e.update())
                        }
                        p = !1
                    }
                }), t.addEventListener("touchend", function(t) {
                    e.enabled && (s = t.touches.length, o(t))
                })
            };
            return i
        };
    "undefined" != typeof define && define.amd ? define(function() {
        return i()
    }) : window.PinchZoom = i()
}.call(this),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["jquery"], function(i) {
            return e(t, i)
        }) : "object" == typeof exports ? e(t, require("jquery")) : e(t, t.jQuery)
    }("undefined" != typeof window ? window : this, function(t, e) {
        "use strict";

        function i(t, e) {
            for (var i = t.length; --i;)
                if (Math.round(+t[i]) !== Math.round(+e[i])) return !1;
            return !0
        }

        function s(t) {
            var i = {
                range: !0,
                animate: !0
            };
            return "boolean" == typeof t ? i.animate = t : e.extend(i, t), i
        }

        function n(t, i, s, n, r, a, o, h, l) {
            "array" === e.type(t) ? this.elements = [+t[0], +t[2], +t[4], +t[1], +t[3], +t[5], 0, 0, 1] : this.elements = [t, i, s, n, r, a, o || 0, h || 0, l || 1]
        }

        function r(t, e, i) {
            this.elements = [t, e, i]
        }

        function a(t, i) {
            if (!(this instanceof a)) return new a(t, i);
            1 !== t.nodeType && e.error("Panzoom called on non-Element node"), e.contains(o, t) || e.error("Panzoom element must be attached to the document");
            var s = e.data(t, h);
            if (s) return s;
            this.options = i = e.extend({}, a.defaults, i), this.elem = t;
            var n = this.$elem = e(t);
            this.$set = i.$set && i.$set.length ? i.$set : n, this.$doc = e(t.ownerDocument || o), this.$parent = n.parent(), this.parent = this.$parent[0], this.isSVG = p.test(t.namespaceURI) && "svg" !== t.nodeName.toLowerCase(), this.panning = !1, this._buildTransform(), this._transform = e.cssProps.transform.replace(f, "-$1").toLowerCase(), this._buildTransition(), this.resetDimensions();
            var r = e(),
                l = this;
            e.each(["$zoomIn", "$zoomOut", "$zoomRange", "$reset"], function(t, e) {
                l[e] = i[e] || r
            }), this.enable(), this.scale = this.getMatrix()[0], this._checkPanWhenZoomed(), e.data(t, h, this)
        }
        var o = t.document,
            h = "__pz__",
            l = Array.prototype.slice,
            u = /trident\/7./i,
            c = function() {
                if (u.test(navigator.userAgent)) return !1;
                var t = o.createElement("input");
                return t.setAttribute("oninput", "return"), "function" == typeof t.oninput
            }(),
            f = /([A-Z])/g,
            p = /^http:[\w\.\/]+svg$/,
            _ = "(\\-?\\d[\\d\\.e-]*)",
            d = "\\,?\\s*",
            m = new RegExp("^matrix\\(" + _ + d + _ + d + _ + d + _ + d + _ + d + _ + "\\)$");
        return n.prototype = {
            x: function(t) {
                var e = t instanceof r,
                    i = this.elements,
                    s = t.elements;
                return e && 3 === s.length ? new r(i[0] * s[0] + i[1] * s[1] + i[2] * s[2], i[3] * s[0] + i[4] * s[1] + i[5] * s[2], i[6] * s[0] + i[7] * s[1] + i[8] * s[2]) : s.length === i.length ? new n(i[0] * s[0] + i[1] * s[3] + i[2] * s[6], i[0] * s[1] + i[1] * s[4] + i[2] * s[7], i[0] * s[2] + i[1] * s[5] + i[2] * s[8], i[3] * s[0] + i[4] * s[3] + i[5] * s[6], i[3] * s[1] + i[4] * s[4] + i[5] * s[7], i[3] * s[2] + i[4] * s[5] + i[5] * s[8], i[6] * s[0] + i[7] * s[3] + i[8] * s[6], i[6] * s[1] + i[7] * s[4] + i[8] * s[7], i[6] * s[2] + i[7] * s[5] + i[8] * s[8]) : !1
            },
            inverse: function() {
                var t = 1 / this.determinant(),
                    e = this.elements;
                return new n(t * (e[8] * e[4] - e[7] * e[5]), t * -(e[8] * e[1] - e[7] * e[2]), t * (e[5] * e[1] - e[4] * e[2]), t * -(e[8] * e[3] - e[6] * e[5]), t * (e[8] * e[0] - e[6] * e[2]), t * -(e[5] * e[0] - e[3] * e[2]), t * (e[7] * e[3] - e[6] * e[4]), t * -(e[7] * e[0] - e[6] * e[1]), t * (e[4] * e[0] - e[3] * e[1]))
            },
            determinant: function() {
                var t = this.elements;
                return t[0] * (t[8] * t[4] - t[7] * t[5]) - t[3] * (t[8] * t[1] - t[7] * t[2]) + t[6] * (t[5] * t[1] - t[4] * t[2])
            }
        }, r.prototype.e = n.prototype.e = function(t) {
            return this.elements[t]
        }, a.rmatrix = m, a.defaults = {
            eventNamespace: ".panzoom",
            transition: !0,
            cursor: "",
            disablePan: !1,
            disableZoom: !1,
            disableXAxis: !1,
            disableYAxis: !1,
            which: 1,
            increment: .3,
            linearZoom: !1,
            panOnlyWhenZoomed: !1,
            minScale: .3,
            maxScale: 6,
            rangeStep: .05,
            duration: 200,
            easing: "ease-in-out",
            contain: !1
        }, a.prototype = {
            constructor: a,
            instance: function() {
                return this
            },
            enable: function() {
                this._initStyle(), this._bind(), this.disabled = !1
            },
            disable: function() {
                this.disabled = !0, this._resetStyle(), this._unbind()
            },
            isDisabled: function() {
                return this.disabled
            },
            destroy: function() {
                this.disable(), e.removeData(this.elem, h)
            },
            resetDimensions: function() {
                this.container = this.parent.getBoundingClientRect();
                var t = this.elem,
                    i = t.getBoundingClientRect(),
                    s = Math.abs(this.scale);
                this.dimensions = {
                    width: i.width,
                    height: i.height,
                    left: e.css(t, "left", !0) || 0,
                    top: e.css(t, "top", !0) || 0,
                    border: {
                        top: e.css(t, "borderTopWidth", !0) * s || 0,
                        bottom: e.css(t, "borderBottomWidth", !0) * s || 0,
                        left: e.css(t, "borderLeftWidth", !0) * s || 0,
                        right: e.css(t, "borderRightWidth", !0) * s || 0
                    },
                    margin: {
                        top: e.css(t, "marginTop", !0) * s || 0,
                        left: e.css(t, "marginLeft", !0) * s || 0
                    }
                }
            },
            reset: function(t) {
                t = s(t);
                var e = this.setMatrix(this._origTransform, t);
                t.silent || this._trigger("reset", e)
            },
            resetZoom: function(t) {
                t = s(t);
                var e = this.getMatrix(this._origTransform);
                t.dValue = e[3], this.zoom(e[0], t)
            },
            resetPan: function(t) {
                var e = this.getMatrix(this._origTransform);
                this.pan(e[4], e[5], s(t))
            },
            setTransform: function(t) {
                for (var i = this.$set, s = i.length; s--;) e.style(i[s], "transform", t), this.isSVG && i[s].setAttribute("transform", t)
            },
            getTransform: function(t) {
                var i = this.$set,
                    s = i[0];
                return t ? this.setTransform(t) : (t = e.style(s, "transform"), !this.isSVG || t && "none" !== t || (t = e.attr(s, "transform") || "none")), "none" === t || m.test(t) || this.setTransform(t = e.css(s, "transform")), t || "none"
            },
            getMatrix: function(t) {
                var e = m.exec(t || this.getTransform());
                return e && e.shift(), e || [1, 0, 0, 1, 0, 0]
            },
            setMatrix: function(t, i) {
                if (!this.disabled) {
                    i || (i = {}), "string" == typeof t && (t = this.getMatrix(t));
                    var s = +t[0],
                        n = "undefined" != typeof i.contain ? i.contain : this.options.contain;
                    if (n) {
                        var r = i.dims;
                        r || (this.resetDimensions(), r = this.dimensions);
                        var a, o, h, l = this.container,
                            u = r.width,
                            c = r.height,
                            f = l.width,
                            p = l.height,
                            _ = f / u,
                            d = p / c;
                        "center" !== this.$parent.css("textAlign") || "inline" !== e.css(this.elem, "display") ? (h = (u - this.elem.offsetWidth) / 2, a = h - r.border.left, o = u - f - h + r.border.right) : a = o = (u - f) / 2;
                        var m = (c - p) / 2 + r.border.top,
                            g = (c - p) / 2 - r.border.top - r.border.bottom;
                        "invert" === n || "automatic" === n && 1.01 > _ ? t[4] = Math.max(Math.min(t[4], a - r.border.left), -o) : t[4] = Math.min(Math.max(t[4], a), -o), "invert" === n || "automatic" === n && 1.01 > d ? t[5] = Math.max(Math.min(t[5], m - r.border.top), -g) : t[5] = Math.min(Math.max(t[5], m), -g)
                    }
                    if ("skip" !== i.animate && this.transition(!i.animate), i.range && this.$zoomRange.val(s), this.options.disableXAxis || this.options.disableYAxis) {
                        var v = this.getMatrix();
                        this.options.disableXAxis && (t[4] = v[4]), this.options.disableYAxis && (t[5] = v[5])
                    }
                    return this.setTransform("matrix(" + t.join(",") + ")"), this.scale = s, this._checkPanWhenZoomed(s), i.silent || this._trigger("change", t), t
                }
            },
            isPanning: function() {
                return this.panning
            },
            transition: function(t) {
                if (this._transition)
                    for (var i = t || !this.options.transition ? "none" : this._transition, s = this.$set, n = s.length; n--;) e.style(s[n], "transition") !== i && e.style(s[n], "transition", i)
            },
            pan: function(t, e, i) {
                if (!this.options.disablePan) {
                    i || (i = {});
                    var s = i.matrix;
                    s || (s = this.getMatrix()), i.relative && (t += +s[4], e += +s[5]), s[4] = t, s[5] = e, this.setMatrix(s, i), i.silent || this._trigger("pan", s[4], s[5])
                }
            },
            zoom: function(t, i) {
                "object" == typeof t ? (i = t, t = null) : i || (i = {});
                var s = e.extend({}, this.options, i);
                if (!s.disableZoom) {
                    var a = !1,
                        o = s.matrix || this.getMatrix(),
                        h = +o[0];
                    "number" != typeof t && (t = s.linearZoom ? h + s.increment * (t ? -1 : 1) : t ? h / (1 + s.increment) : h * (1 + s.increment), a = !0), t = Math.max(Math.min(t, s.maxScale), s.minScale);
                    var l = s.focal;
                    if (l && !s.disablePan) {
                        this.resetDimensions();
                        var u = s.dims = this.dimensions,
                            c = l.clientX,
                            f = l.clientY;
                        this.isSVG || (c -= u.width / h / 2, f -= u.height / h / 2);
                        var p = new r(c, f, 1),
                            _ = new n(o),
                            d = this.parentOffset || this.$parent.offset(),
                            m = new n(1, 0, d.left - this.$doc.scrollLeft(), 0, 1, d.top - this.$doc.scrollTop()),
                            g = _.inverse().x(m.inverse().x(p)),
                            v = t / o[0];
                        _ = _.x(new n([v, 0, 0, v, 0, 0])), p = m.x(_.x(g)), o[4] = +o[4] + (c - p.e(0)), o[5] = +o[5] + (f - p.e(1))
                    }
                    o[0] = t, o[3] = "number" == typeof s.dValue ? s.dValue : t, this.setMatrix(o, {
                        animate: "undefined" != typeof s.animate ? s.animate : a,
                        range: !s.noSetRange
                    }), s.silent || this._trigger("zoom", o[0], s)
                }
            },
            option: function(t, i) {
                var s;
                if (!t) return e.extend({}, this.options);
                if ("string" == typeof t) {
                    if (1 === arguments.length) return void 0 !== this.options[t] ? this.options[t] : null;
                    s = {}, s[t] = i
                } else s = t;
                this._setOptions(s)
            },
            _setOptions: function(t) {
                e.each(t, e.proxy(function(t, i) {
                    switch (t) {
                        case "disablePan":
                            this._resetStyle();
                        case "$zoomIn":
                        case "$zoomOut":
                        case "$zoomRange":
                        case "$reset":
                        case "disableZoom":
                        case "onStart":
                        case "onChange":
                        case "onZoom":
                        case "onPan":
                        case "onEnd":
                        case "onReset":
                        case "eventNamespace":
                            this._unbind()
                    }
                    switch (this.options[t] = i, t) {
                        case "disablePan":
                            this._initStyle();
                        case "$zoomIn":
                        case "$zoomOut":
                        case "$zoomRange":
                        case "$reset":
                            this[t] = i;
                        case "disableZoom":
                        case "onStart":
                        case "onChange":
                        case "onZoom":
                        case "onPan":
                        case "onEnd":
                        case "onReset":
                        case "eventNamespace":
                            this._bind();
                            break;
                        case "cursor":
                            e.style(this.elem, "cursor", i);
                            break;
                        case "minScale":
                            this.$zoomRange.attr("min", i);
                            break;
                        case "maxScale":
                            this.$zoomRange.attr("max", i);
                            break;
                        case "rangeStep":
                            this.$zoomRange.attr("step", i);
                            break;
                        case "startTransform":
                            this._buildTransform();
                            break;
                        case "duration":
                        case "easing":
                            this._buildTransition();
                        case "transition":
                            this.transition();
                            break;
                        case "panOnlyWhenZoomed":
                            this._checkPanWhenZoomed();
                            break;
                        case "$set":
                            i instanceof e && i.length && (this.$set = i, this._initStyle(), this._buildTransform())
                    }
                }, this))
            },
            _checkPanWhenZoomed: function(t) {
                var e = this.options;
                if (e.panOnlyWhenZoomed) {
                    t || (t = this.getMatrix()[0]);
                    var i = t <= e.minScale;
                    e.disablePan !== i && this.option("disablePan", i)
                }
            },
            _initStyle: function() {
                var t = {
                    "transform-origin": this.isSVG ? "0 0" : "50% 50%"
                };
                this.options.disablePan || (t.cursor = this.options.cursor), this.$set.css(t);
                var i = this.$parent;
                i.length && !e.nodeName(this.parent, "body") && (t = {
                    overflow: "hidden"
                }, "static" === i.css("position") && (t.position = "relative"), i.css(t))
            },
            _resetStyle: function() {
                this.$elem.css({
                    cursor: "",
                    transition: ""
                }), this.$parent.css({
                    overflow: "",
                    position: ""
                })
            },
            _bind: function() {
                var t = this,
                    i = this.options,
                    s = i.eventNamespace,
                    n = "mousedown" + s + " pointerdown" + s + " MSPointerDown" + s,
                    r = "touchstart" + s + " " + n,
                    o = "touchend" + s + " click" + s + " pointerup" + s + " MSPointerUp" + s,
                    h = {},
                    l = this.$reset,
                    u = this.$zoomRange;
                if (e.each(["Start", "Change", "Zoom", "Pan", "End", "Reset"], function() {
                        var t = i["on" + this];
                        e.isFunction(t) && (h["panzoom" + this.toLowerCase() + s] = t)
                    }), i.disablePan && i.disableZoom || (h[r] = function(e) {
                        var s;
                        ("touchstart" === e.type ? !(s = e.touches || e.originalEvent.touches) || (1 !== s.length || i.disablePan) && 2 !== s.length : i.disablePan || (e.which || e.originalEvent.which) !== i.which) || (e.preventDefault(), e.stopPropagation(), t._startMove(e, s))
                    }, 3 === i.which && (h.contextmenu = !1)), this.$elem.on(h), l.length && l.on(o, function(e) {
                        e.preventDefault(), t.reset()
                    }), u.length && u.attr({
                        step: i.rangeStep === a.defaults.rangeStep && u.attr("step") || i.rangeStep,
                        min: i.minScale,
                        max: i.maxScale
                    }).prop({
                        value: this.getMatrix()[0]
                    }), !i.disableZoom) {
                    var f = this.$zoomIn,
                        p = this.$zoomOut;
                    f.length && p.length && (f.on(o, function(e) {
                        e.preventDefault(), t.zoom()
                    }), p.on(o, function(e) {
                        e.preventDefault(), t.zoom(!0)
                    })), u.length && (h = {}, h[n] = function() {
                        t.transition(!0)
                    }, h[(c ? "input" : "change") + s] = function() {
                        t.zoom(+this.value, {
                            noSetRange: !0
                        })
                    }, u.on(h))
                }
            },
            _unbind: function() {
                this.$elem.add(this.$zoomIn).add(this.$zoomOut).add(this.$reset).off(this.options.eventNamespace)
            },
            _buildTransform: function() {
                return this._origTransform = this.getTransform(this.options.startTransform)
            },
            _buildTransition: function() {
                if (this._transform) {
                    var t = this.options;
                    this._transition = this._transform + " " + t.duration + "ms " + t.easing
                }
            },
            _getDistance: function(t) {
                var e = t[0],
                    i = t[1];
                return Math.sqrt(Math.pow(Math.abs(i.clientX - e.clientX), 2) + Math.pow(Math.abs(i.clientY - e.clientY), 2))
            },
            _getMiddle: function(t) {
                var e = t[0],
                    i = t[1];
                return {
                    clientX: (i.clientX - e.clientX) / 2 + e.clientX,
                    clientY: (i.clientY - e.clientY) / 2 + e.clientY
                }
            },
            _trigger: function(t) {
                "string" == typeof t && (t = "panzoom" + t), this.$elem.triggerHandler(t, [this].concat(l.call(arguments, 1)))
            },
            _startMove: function(t, s) {
                if (!this.panning) {
                    var n, r, a, h, l, u, c, f, p = this,
                        _ = this.options,
                        d = _.eventNamespace,
                        m = this.getMatrix(),
                        g = m.slice(0),
                        v = +g[4],
                        y = +g[5],
                        x = {
                            matrix: m,
                            animate: "skip"
                        },
                        T = t.type;
                    "pointerdown" === T ? (n = "pointermove", r = "pointerup") : "touchstart" === T ? (n = "touchmove", r = "touchend") : "MSPointerDown" === T ? (n = "MSPointerMove", r = "MSPointerUp") : (n = "mousemove", r = "mouseup"), n += d, r += d, this.transition(!0), this.panning = !0, this._trigger("start", t, s);
                    var b = function(t, e) {
                        if (e) {
                            if (2 === e.length) {
                                if (null != a) return;
                                return a = p._getDistance(e), h = +m[0], void(l = p._getMiddle(e))
                            }
                            if (null != u) return;
                            (f = e[0]) && (u = f.pageX, c = f.pageY)
                        }
                        null == u && (u = t.pageX, c = t.pageY)
                    };
                    b(t, s);
                    var w = function(t) {
                        var e;
                        if (t.preventDefault(), s = t.touches || t.originalEvent.touches, b(t, s), s) {
                            if (2 === s.length) {
                                var i = p._getMiddle(s),
                                    n = p._getDistance(s) - a;
                                return p.zoom(n * (_.increment / 100) + h, {
                                    focal: i,
                                    matrix: m,
                                    animate: "skip"
                                }), p.pan(+m[4] + i.clientX - l.clientX, +m[5] + i.clientY - l.clientY, x), void(l = i)
                            }
                            e = s[0] || {
                                pageX: 0,
                                pageY: 0
                            }
                        }
                        e || (e = t), p.pan(v + e.pageX - u, y + e.pageY - c, x)
                    };
                    e(o).off(d).on(n, w).on(r, function(t) {
                        t.preventDefault(), e(this).off(d), p.panning = !1, t.type = "panzoomend", p._trigger(t, m, !i(m, g))
                    })
                }
            }
        }, e.Panzoom = a, e.fn.panzoom = function(t) {
            var i, s, n, r;
            return "string" == typeof t ? (r = [], s = l.call(arguments, 1), this.each(function() {
                i = e.data(this, h), i ? "_" !== t.charAt(0) && "function" == typeof(n = i[t]) && void 0 !== (n = n.apply(i, s)) && r.push(n) : r.push(void 0)
            }), r.length ? 1 === r.length ? r[0] : r : this) : this.each(function() {
                new a(this, t)
            })
        }, a
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    s = i[t] = i[t] || [];
                return -1 == s.indexOf(e) && s.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {},
                    s = i[t] = i[t] || {};
                return s[e] = !0, this
            }
        }, e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var s = i.indexOf(e);
                return -1 != s && i.splice(s, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var s = 0,
                    n = i[s];
                e = e || [];
                for (var r = this._onceEvents && this._onceEvents[t]; n;) {
                    var a = r && r[n];
                    a && (this.off(t, n), delete r[n]), n.apply(this, e), s += a ? 0 : 1, n = i[s]
                }
                return this
            }
        }, t
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
    }(window, function(t, e) {
        function i(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function s(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function n(t, e, r) {
            return this instanceof n ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = s(t), this.options = i({}, this.options), "function" == typeof e ? r = e : i(this.options, e), r && this.on("always", r), this.getImages(), o && (this.jqDeferred = new o.Deferred), void setTimeout(function() {
                this.check()
            }.bind(this))) : new n(t, e, r)
        }

        function r(t) {
            this.img = t
        }

        function a(t, e) {
            this.url = t, this.element = e, this.img = new Image
        }
        var o = t.jQuery,
            h = t.console;
        n.prototype = Object.create(e.prototype), n.prototype.options = {}, n.prototype.getImages = function() {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, n.prototype.addElementImages = function(t) {
            "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && l[e]) {
                for (var i = t.querySelectorAll("img"), s = 0; s < i.length; s++) {
                    var n = i[s];
                    this.addImage(n)
                }
                if ("string" == typeof this.options.background) {
                    var r = t.querySelectorAll(this.options.background);
                    for (s = 0; s < r.length; s++) {
                        var a = r[s];
                        this.addElementBackgroundImages(a)
                    }
                }
            }
        };
        var l = {
            1: !0,
            9: !0,
            11: !0
        };
        return n.prototype.addElementBackgroundImages = function(t) {
            var e = getComputedStyle(t);
            if (e)
                for (var i = /url\((['"])?(.*?)\1\)/gi, s = i.exec(e.backgroundImage); null !== s;) {
                    var n = s && s[2];
                    n && this.addBackground(n, t), s = i.exec(e.backgroundImage)
                }
        }, n.prototype.addImage = function(t) {
            var e = new r(t);
            this.images.push(e)
        }, n.prototype.addBackground = function(t, e) {
            var i = new a(t, e);
            this.images.push(i)
        }, n.prototype.check = function() {
            function t(t, i, s) {
                setTimeout(function() {
                    e.progress(t, i, s)
                })
            }
            var e = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) {
                e.once("progress", t), e.check()
            }) : void this.complete()
        }, n.prototype.progress = function(t, e, i) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && h && h.log("progress: " + i, t, e)
        }, n.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this)
            }
        }, r.prototype = Object.create(e.prototype), r.prototype.check = function() {
            var t = this.getIsImageComplete();
            return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
        }, r.prototype.getIsImageComplete = function() {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, r.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
        }, r.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, r.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, r.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, r.prototype.unbindEvents = function() {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, a.prototype = Object.create(r.prototype), a.prototype.check = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
            var t = this.getIsImageComplete();
            t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, a.prototype.unbindEvents = function() {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, a.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
        }, n.makeJQueryPlugin = function(e) {
            e = e || t.jQuery, e && (o = e, o.fn.imagesLoaded = function(t, e) {
                var i = new n(this, t, e);
                return i.jqDeferred.promise(o(this))
            })
        }, n.makeJQueryPlugin(), n
    });
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    n = function(t, e, i) {
                        var s, n, r = t.cycle;
                        for (s in r) n = r[s], t[s] = "function" == typeof n ? n(i, e[i]) : n[i % n.length];
                        delete t.cycle
                    },
                    r = function(t, e, s) {
                        i.call(this, t, e, s), this._cycle = 0, this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
                    },
                    a = 1e-10,
                    o = i._internals,
                    h = o.isSelector,
                    l = o.isArray,
                    u = r.prototype = i.to({}, .1, {}),
                    c = [];
                r.version = "1.20.2", u.constructor = r, u.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, u.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this)
                }, u.updateTo = function(t, e) {
                    var s, n = this.ratio,
                        r = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (s in t) this.vars[s] = t[s];
                    if (this._initted || r)
                        if (e) this._initted = !1, r && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var a = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || r)
                        for (var o, h = 1 / (1 - n), l = this._firstPT; l;) o = l.s + l.c, l.c *= h, l.s = o - l.c, l = l._next;
                    return this
                }, u.render = function(t, e, s) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var n, r, h, l, u, c, f, p, _, d = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._time,
                        g = this._totalTime,
                        v = this._cycle,
                        y = this._duration,
                        x = this._rawPrevTime;
                    if (t >= d - 1e-7 && t >= 0 ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete", s = s || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || s) && (this._startTime === this._timeline._duration && (t = 0), (0 > x || 0 >= t && t >= -1e-7 || x === a && "isPause" !== this.data) && x !== t && (s = !0, x > a && (r = "onReverseComplete")), this._rawPrevTime = p = !e || t || x === t ? t : a)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === y && x > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || s) && (x >= 0 && (s = !0), this._rawPrevTime = p = !e || t || x === t ? t : a)), this._initted || (s = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = y + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && t >= g && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = y - this._time, _ = this._yoyoEase || this.vars.yoyoEase, _ && (this._yoyoEase || (_ !== !0 || this._initted ? this._yoyoEase = _ = _ === !0 ? this._ease : _ instanceof Ease ? _ : Ease.map[_] : (_ = this.vars.ease, this._yoyoEase = _ = _ ? _ instanceof Ease ? _ : "function" == typeof _ ? new Ease(_, this.vars.easeParams) : Ease.map[_] || i.defaultEase : i.defaultEase)), this.ratio = _ ? 1 - _.getRatio((y - this._time) / y) : 0)), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType && !_ ? (u = this._time / y, c = this._easeType, f = this._easePower, (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), 1 === c ? this.ratio = 1 - u : 2 === c ? this.ratio = u : this._time / y < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2) : _ || (this.ratio = this._ease.getRatio(this._time / y))), m === this._time && !s && v === this._cycle) return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!s && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = g, this._rawPrevTime = x, this._cycle = v, o.lazyTweens.push(this), void(this._lazy = [t, e]);
                        !this._time || n || _ ? n && this._ease._calcEnd && !_ && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / y)
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, s) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === y) && (e || this._callback("onStart"))), h = this._firstPT; h;) h.f ? h.t[h.p](h.c * this.ratio + h.s) : h.t[h.p] = h.c * this.ratio + h.s, h = h._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, s), e || (this._totalTime !== g || r) && this._callback("onUpdate")), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || s) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, s), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === y && this._rawPrevTime === a && p !== a && (this._rawPrevTime = 0))
                }, r.to = function(t, e, i) {
                    return new r(t, e, i)
                }, r.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
                }, r.fromTo = function(t, e, i, s) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new r(t, e, s)
                }, r.staggerTo = r.allTo = function(t, e, a, o, u, f, p) {
                    o = o || 0;
                    var _, d, m, g, v = 0,
                        y = [],
                        x = function() {
                            a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), u.apply(p || a.callbackScope || this, f || c)
                        },
                        T = a.cycle,
                        b = a.startAt && a.startAt.cycle;
                    for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), h(t) && (t = s(t))), t = t || [], 0 > o && (t = s(t), t.reverse(), o *= -1), _ = t.length - 1, m = 0; _ >= m; m++) {
                        d = {};
                        for (g in a) d[g] = a[g];
                        if (T && (n(d, t, m), null != d.duration && (e = d.duration, delete d.duration)), b) {
                            b = d.startAt = {};
                            for (g in a.startAt) b[g] = a.startAt[g];
                            n(d.startAt, t, m)
                        }
                        d.delay = v + (d.delay || 0), m === _ && u && (d.onComplete = x), y[m] = new r(t[m], e, d), v += o
                    }
                    return y
                }, r.staggerFrom = r.allFrom = function(t, e, i, s, n, a, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, s, n, a, o)
                }, r.staggerFromTo = r.allFromTo = function(t, e, i, s, n, a, o, h) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, s, n, a, o, h)
                }, r.delayedCall = function(t, e, i, s, n) {
                    return new r(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: s,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: n,
                        overwrite: 0
                    })
                }, r.set = function(t, e) {
                    return new r(t, 0, e)
                }, r.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var f = function(t, e) {
                        for (var s = [], n = 0, r = t._first; r;) r instanceof i ? s[n++] = r : (e && (s[n++] = r), s = s.concat(f(r, e)), n = s.length), r = r._next;
                        return s
                    },
                    p = r.getAllTweens = function(e) {
                        return f(t._rootTimeline, e).concat(f(t._rootFramesTimeline, e))
                    };
                r.killAll = function(t, i, s, n) {
                    null == i && (i = !0), null == s && (s = !0);
                    var r, a, o, h = p(0 != n),
                        l = h.length,
                        u = i && s && n;
                    for (o = 0; l > o; o++) a = h[o], (u || a instanceof e || (r = a.target === a.vars.onComplete) && s || i && !r) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                }, r.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var n, a, u, c, f, p = o.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), h(t) && (t = s(t)), l(t))
                            for (c = t.length; --c > -1;) r.killChildTweensOf(t[c], e);
                        else {
                            n = [];
                            for (u in p)
                                for (a = p[u].target.parentNode; a;) a === t && (n = n.concat(p[u].tweens)), a = a.parentNode;
                            for (f = n.length, c = 0; f > c; c++) e && n[c].totalTime(n[c].totalDuration()), n[c]._enabled(!1, !1)
                        }
                    }
                };
                var _ = function(t, i, s, n) {
                    i = i !== !1, s = s !== !1, n = n !== !1;
                    for (var r, a, o = p(n), h = i && s && n, l = o.length; --l > -1;) a = o[l], (h || a instanceof e || (r = a.target === a.vars.onComplete) && s || i && !r) && a.paused(t)
                };
                return r.pauseAll = function(t, e, i) {
                    _(!0, t, e, i)
                }, r.resumeAll = function(t, e, i) {
                    _(!1, t, e, i)
                }, r.globalTimeScale = function(e) {
                    var s = t._rootTimeline,
                        n = i.ticker.time;
                    return arguments.length ? (e = e || a, s._startTime = n - (n - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, n = i.ticker.frame, s._startTime = n - (n - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
                }, u.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, u.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, u.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, u.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, u.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, u.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, r
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, s, n = this.vars;
                        for (s in n) i = n[s], h(i) && -1 !== i.join("").indexOf("{self}") && (n[s] = this._swapSelfInParams(i));
                        h(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
                    },
                    n = 1e-10,
                    r = i._internals,
                    a = s._internals = {},
                    o = r.isSelector,
                    h = r.isArray,
                    l = r.lazyTweens,
                    u = r.lazyRender,
                    c = _gsScope._gsDefine.globals,
                    f = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    p = function(t, e, i) {
                        var s, n, r = t.cycle;
                        for (s in r) n = r[s], t[s] = "function" == typeof n ? n(i, e[i]) : n[i % n.length];
                        delete t.cycle
                    },
                    _ = a.pauseCallback = function() {},
                    d = function(t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    m = s.prototype = new e;
                return s.version = "1.20.2", m.constructor = s, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, m.to = function(t, e, s, n) {
                    var r = s.repeat && c.TweenMax || i;
                    return e ? this.add(new r(t, e, s), n) : this.set(t, s, n)
                }, m.from = function(t, e, s, n) {
                    return this.add((s.repeat && c.TweenMax || i).from(t, e, s), n)
                }, m.fromTo = function(t, e, s, n, r) {
                    var a = n.repeat && c.TweenMax || i;
                    return e ? this.add(a.fromTo(t, e, s, n), r) : this.set(t, n, r)
                }, m.staggerTo = function(t, e, n, r, a, h, l, u) {
                    var c, _, m = new s({
                            onComplete: h,
                            onCompleteParams: l,
                            callbackScope: u,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        g = n.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = d(t)), r = r || 0, 0 > r && (t = d(t), t.reverse(), r *= -1), _ = 0; _ < t.length; _++) c = f(n), c.startAt && (c.startAt = f(c.startAt), c.startAt.cycle && p(c.startAt, t, _)), g && (p(c, t, _), null != c.duration && (e = c.duration, delete c.duration)), m.to(t[_], e, c, _ * r);
                    return this.add(m, a)
                }, m.staggerFrom = function(t, e, i, s, n, r, a, o) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, n, r, a, o)
                }, m.staggerFromTo = function(t, e, i, s, n, r, a, o, h) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, n, r, a, o, h)
                }, m.call = function(t, e, s, n) {
                    return this.add(i.delayedCall(0, t, e, s), n)
                }, m.set = function(t, e, s) {
                    return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
                }, s.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var n, r, a = new s(t),
                        o = a._timeline;
                    for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, n = o._first; n;) r = n._next, e && n instanceof i && n.target === n.vars.onComplete || a.add(n, n._startTime - n._delay), n = r;
                    return o.add(a, 0), a
                }, m.add = function(n, r, a, o) {
                    var l, u, c, f, p, _;
                    if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, n)), !(n instanceof t)) {
                        if (n instanceof Array || n && n.push && h(n)) {
                            for (a = a || "normal", o = o || 0, l = r, u = n.length, c = 0; u > c; c++) h(f = n[c]) && (f = new s({
                                tweens: f
                            })), this.add(f, l), "string" != typeof f && "function" != typeof f && ("sequence" === a ? l = f._startTime + f.totalDuration() / f._timeScale : "start" === a && (f._startTime -= f.delay())), l += o;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof n) return this.addLabel(n, r);
                        if ("function" != typeof n) throw "Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
                        n = i.delayedCall(0, n)
                    }
                    if (e.prototype.add.call(this, n, r), n._time && n.render((this.rawTime() - n._startTime) * n._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (p = this, _ = p.rawTime() > n._startTime; p._timeline;) _ && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                    return this
                }, m.remove = function(e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && h(e)) {
                        for (var s = e.length; --s > -1;) this.remove(e[s]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, m._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var s = this._last;
                    return s ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, m.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, m.insert = m.insertMultiple = function(t, e, i, s) {
                    return this.add(t, e || 0, i, s)
                }, m.appendMultiple = function(t, e, i, s) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
                }, m.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, m.addPause = function(t, e, s, n) {
                    var r = i.delayedCall(0, _, s, n || this);
                    return r.vars.onComplete = r.vars.onReverseComplete = e, r.data = "isPause", this._hasPause = !0, this.add(r, t)
                }, m.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, m.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, m._parseTimeOrLabel = function(e, i, s, n) {
                    var r, a;
                    if (n instanceof t && n.timeline === this) this.remove(n);
                    else if (n && (n instanceof Array || n.push && h(n)))
                        for (a = n.length; --a > -1;) n[a] instanceof t && n[a].timeline === this && this.remove(n[a]);
                    if (r = this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration, "string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - r : 0, s);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = r);
                    else {
                        if (a = e.indexOf("="), -1 === a) return null == this._labels[e] ? s ? this._labels[e] = r + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(a - 1) + "1", 10) * Number(e.substr(a + 1)), e = a > 1 ? this._parseTimeOrLabel(e.substr(0, a - 1), 0, s) : r
                    }
                    return Number(e) + i
                }, m.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, m.stop = function() {
                    return this.paused(!0)
                }, m.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, m.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, m.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, r, a, o, h, c, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        _ = this._time,
                        d = this._startTime,
                        m = this._timeScale,
                        g = this._paused;
                    if (t >= p - 1e-7 && t >= 0) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (r = !0, o = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === n) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > n && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, t = p + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== _ || 0 === this._duration && this._rawPrevTime !== n && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", r = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = r = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, 0 === t && r)
                                for (s = this._first; s && 0 === s._startTime;) s._duration || (r = !1), s = s._next;
                            t = 0, this._initted || (h = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= _)
                                for (s = this._first; s && s._startTime <= t && !c;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (c = s), s = s._next;
                            else
                                for (s = this._last; s && s._startTime >= t && !c;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (c = s), s = s._prev;
                            c && (this._time = t = c._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== _ && this._first || i || h || c) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== _ && t > 0 && (this._active = !0), 0 === _ && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), f = this._time, f >= _)
                            for (s = this._first; s && (a = s._next, f === this._time && (!this._paused || g));)(s._active || s._startTime <= f && !s._paused && !s._gc) && (c === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        else
                            for (s = this._last; s && (a = s._prev, f === this._time && (!this._paused || g));) {
                                if (s._active || s._startTime <= _ && !s._paused && !s._gc) {
                                    if (c === s) {
                                        for (c = s._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, i), c = c._prev;
                                        c = null, this.pause()
                                    }
                                    s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                                }
                                s = a
                            }
                        this._onUpdate && (e || (l.length && u(), this._callback("onUpdate"))), o && (this._gc || (d === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (r && (l.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
                    }
                }, m._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, m.getChildren = function(t, e, s, n) {
                    n = n || -9999999999;
                    for (var r = [], a = this._first, o = 0; a;) a._startTime < n || (a instanceof i ? e !== !1 && (r[o++] = a) : (s !== !1 && (r[o++] = a), t !== !1 && (r = r.concat(a.getChildren(!0, e, s)), o = r.length))), a = a._next;
                    return r
                }, m.getTweensOf = function(t, e) {
                    var s, n, r = this._gc,
                        a = [],
                        o = 0;
                    for (r && this._enabled(!0, !0), s = i.getTweensOf(t), n = s.length; --n > -1;)(s[n].timeline === this || e && this._contains(s[n])) && (a[o++] = s[n]);
                    return r && this._enabled(!1, !0), a
                }, m.recent = function() {
                    return this._recent
                }, m._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, m.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var s, n = this._first, r = this._labels; n;) n._startTime >= i && (n._startTime += t), n = n._next;
                    if (e)
                        for (s in r) r[s] >= i && (r[s] += t);
                    return this._uncache(!0)
                }, m._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, n = !1; --s > -1;) i[s]._kill(t, e) && (n = !0);
                    return n
                }, m.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, m.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, m._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                    return e.prototype._enabled.call(this, t, i)
                }, m.totalTime = function() {
                    this._forcingPlayhead = !0;
                    var e = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, e
                }, m.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, m.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, s = 0, n = this._last, r = 999999999999; n;) e = n._prev, n._dirty && n.totalDuration(), n._startTime > r && this._sortChildren && !n._paused ? this.add(n, n._startTime - n._delay) : r = n._startTime, n._startTime < 0 && !n._paused && (s -= n._startTime, this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale), this.shiftChildren(-n._startTime, !1, -9999999999), r = 0), i = n._startTime + n._totalDuration / n._timeScale, i > s && (s = i), n = e;
                            this._duration = this._totalDuration = s, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                }, m.paused = function(e) {
                    if (!e)
                        for (var i = this._first, s = this._time; i;) i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, m.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, m.rawTime = function(t) {
                    return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                }, s
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var s = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    n = 1e-10,
                    r = e._internals,
                    a = r.lazyTweens,
                    o = r.lazyRender,
                    h = _gsScope._gsDefine.globals,
                    l = new i(null, null, 1, 0),
                    u = s.prototype = new t;
                return u.constructor = s, u.kill()._gc = !1, s.version = "1.20.2", u.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, u.addCallback = function(t, i, s, n) {
                    return this.add(e.delayedCall(0, t, s, n), i)
                }, u.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), s = i.length, n = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === n && i[s]._enabled(!1, !1);
                    return this
                }, u.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, u.tweenTo = function(t, i) {
                    i = i || {};
                    var s, n, r, a = {
                            ease: l,
                            useFrames: this.usesFrames(),
                            immediateRender: !1
                        },
                        o = i.repeat && h.TweenMax || e;
                    for (n in i) a[n] = i[n];
                    return a.time = this._parseTimeOrLabel(t), s = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, r = new o(this, s, a), a.onStart = function() {
                        r.target.paused(!0), r.vars.time !== r.target.time() && s === r.duration() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || r, i.onStartParams || [])
                    }, r
                }, u.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var s = this.tweenTo(e, i);
                    return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
                }, u.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, r, h, l, u, c, f, p, _ = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._duration,
                        m = this._time,
                        g = this._totalTime,
                        v = this._startTime,
                        y = this._timeScale,
                        x = this._rawPrevTime,
                        T = this._paused,
                        b = this._cycle;
                    if (t >= _ - 1e-7 && t >= 0) this._locked || (this._totalTime = _, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, l = "onComplete", u = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > x || x === n) && x !== t && this._first && (u = !0, x > n && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = d, t = d + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === d && x !== n && (x > 0 || 0 > t && x >= 0) && !this._locked) && (l = "onReverseComplete", r = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (u = r = !0, l = "onReverseComplete") : x >= 0 && this._first && (u = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : n, 0 === t && r)
                                for (s = this._first; s && 0 === s._startTime;) s._duration || (r = !1), s = s._next;
                            t = 0, this._initted || (u = !0)
                        }
                    else if (0 === d && 0 > x && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (c = d + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && t >= g && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 !== (1 & this._cycle) && (this._time = d - this._time), this._time > d ? (this._time = d, t = d + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                        if (t = this._time, t >= m || this._repeat && b !== this._cycle)
                            for (s = this._first; s && s._startTime <= t && !f;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (f = s), s = s._next;
                        else
                            for (s = this._last; s && s._startTime >= t && !f;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (f = s), s = s._prev;
                        f && f._startTime < d && (this._time = t = f._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== b && !this._locked) {
                        var w = this._yoyo && 0 !== (1 & b),
                            P = w === (this._yoyo && 0 !== (1 & this._cycle)),
                            S = this._totalTime,
                            O = this._cycle,
                            k = this._rawPrevTime,
                            M = this._time;
                        if (this._totalTime = b * d, this._cycle < b ? w = !w : this._totalTime += d, this._time = m, this._rawPrevTime = 0 === d ? x - 1e-4 : x, this._cycle = b, this._locked = !0, m = w ? 0 : d, this.render(m, e, 0 === d), e || this._gc || this.vars.onRepeat && (this._cycle = O, this._locked = !1, this._callback("onRepeat")), m !== this._time) return;
                        if (P && (this._cycle = b, this._locked = !0, m = w ? d + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !T) return;
                        this._time = M, this._totalTime = S, this._cycle = O, this._rawPrevTime = k
                    }
                    if (!(this._time !== m && this._first || i || u || f)) return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), p = this._time, p >= m)
                        for (s = this._first; s && (h = s._next, p === this._time && (!this._paused || T));)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (f === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = h;
                    else
                        for (s = this._last; s && (h = s._prev, p === this._time && (!this._paused || T));) {
                            if (s._active || s._startTime <= m && !s._paused && !s._gc) {
                                if (f === s) {
                                    for (f = s._prev; f && f.endTime() > this._time;) f.render(f._reversed ? f.totalDuration() - (t - f._startTime) * f._timeScale : (t - f._startTime) * f._timeScale, e, i), f = f._prev;
                                    f = null, this.pause()
                                }
                                s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                            }
                            s = h
                        }
                    this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))), l && (this._locked || this._gc || (v === this._startTime || y !== this._timeScale) && (0 === this._time || _ >= this.totalDuration()) && (r && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
                }, u.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var s, n, r = [],
                        a = this.getChildren(t, e, i),
                        o = 0,
                        h = a.length;
                    for (s = 0; h > s; s++) n = a[s], n.isActive() && (r[o++] = n);
                    return r
                }, u.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        s = i.length;
                    for (e = 0; s > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, u.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (e[i].time < t) return e[i].name;
                    return null
                }, u.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, u.invalidate = function() {
                    return this._locked = !1, t.prototype.invalidate.call(this)
                }, u.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
                }, u.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
                }, u.totalDuration = function(e) {
                    return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, u.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, u.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, u.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, s
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    s = [],
                    n = {},
                    r = _gsScope._gsDefine.globals,
                    a = function(t, e, i, s) {
                        i === s && (i = s - (s - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
                    },
                    o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    h = function(t, e, i, s) {
                        var n = {
                                a: t
                            },
                            r = {},
                            a = {},
                            o = {
                                c: s
                            },
                            h = (t + e) / 2,
                            l = (e + i) / 2,
                            u = (i + s) / 2,
                            c = (h + l) / 2,
                            f = (l + u) / 2,
                            p = (f - c) / 8;
                        return n.b = h + (t - h) / 4, r.b = c + p, n.c = r.a = (n.b + r.b) / 2, r.c = a.a = (c + f) / 2, a.b = f - p, o.b = u + (s - u) / 4, a.c = o.a = (a.b + o.b) / 2, [n, r, a, o]
                    },
                    l = function(t, n, r, a, o) {
                        var l, u, c, f, p, _, d, m, g, v, y, x, T, b = t.length - 1,
                            w = 0,
                            P = t[0].a;
                        for (l = 0; b > l; l++) p = t[w], u = p.a, c = p.d, f = t[w + 1].d, o ? (y = e[l], x = i[l], T = (x + y) * n * .25 / (a ? .5 : s[l] || .5), _ = c - (c - u) * (a ? .5 * n : 0 !== y ? T / y : 0), d = c + (f - c) * (a ? .5 * n : 0 !== x ? T / x : 0), m = c - (_ + ((d - _) * (3 * y / (y + x) + .5) / 4 || 0))) : (_ = c - (c - u) * n * .5, d = c + (f - c) * n * .5, m = c - (_ + d) / 2), _ += m, d += m, p.c = g = _, 0 !== l ? p.b = P : p.b = P = p.a + .6 * (p.c - p.a), p.da = c - u, p.ca = g - u, p.ba = P - u, r ? (v = h(u, P, g, c), t.splice(w, 1, v[0], v[1], v[2], v[3]), w += 4) : w++, P = d;
                        p = t[w], p.b = P, p.c = P + .4 * (p.d - P), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = P - p.a, r && (v = h(p.a, P, p.c, p.d), t.splice(w, 1, v[0], v[1], v[2], v[3]))
                    },
                    u = function(t, s, n, r) {
                        var o, h, l, u, c, f, p = [];
                        if (r)
                            for (t = [r].concat(t), h = t.length; --h > -1;) "string" == typeof(f = t[h][s]) && "=" === f.charAt(1) && (t[h][s] = r[s] + Number(f.charAt(0) + f.substr(2)));
                        if (o = t.length - 2, 0 > o) return p[0] = new a(t[0][s], 0, 0, t[0][s]), p;
                        for (h = 0; o > h; h++) l = t[h][s], u = t[h + 1][s], p[h] = new a(l, 0, 0, u), n && (c = t[h + 2][s], e[h] = (e[h] || 0) + (u - l) * (u - l), i[h] = (i[h] || 0) + (c - u) * (c - u));
                        return p[h] = new a(t[h][s], 0, 0, t[h + 1][s]), p
                    },
                    c = function(t, r, a, h, c, f) {
                        var p, _, d, m, g, v, y, x, T = {},
                            b = [],
                            w = f || t[0];
                        c = "string" == typeof c ? "," + c + "," : o, null == r && (r = 1);
                        for (_ in t[0]) b.push(_);
                        if (t.length > 1) {
                            for (x = t[t.length - 1], y = !0, p = b.length; --p > -1;)
                                if (_ = b[p], Math.abs(w[_] - x[_]) > .05) {
                                    y = !1;
                                    break
                                }
                            y && (t = t.concat(), f && t.unshift(f), t.push(t[1]), f = t[t.length - 3])
                        }
                        for (e.length = i.length = s.length = 0, p = b.length; --p > -1;) _ = b[p], n[_] = -1 !== c.indexOf("," + _ + ","), T[_] = u(t, _, n[_], f);
                        for (p = e.length; --p > -1;) e[p] = Math.sqrt(e[p]), i[p] = Math.sqrt(i[p]);
                        if (!h) {
                            for (p = b.length; --p > -1;)
                                if (n[_])
                                    for (d = T[b[p]], v = d.length - 1, m = 0; v > m; m++) g = d[m + 1].da / i[m] + d[m].da / e[m] || 0, s[m] = (s[m] || 0) + g * g;
                            for (p = s.length; --p > -1;) s[p] = Math.sqrt(s[p])
                        }
                        for (p = b.length, m = a ? 4 : 1; --p > -1;) _ = b[p], d = T[_], l(d, r, a, h, n[_]), y && (d.splice(0, m), d.splice(d.length - m, m));
                        return T
                    },
                    f = function(t, e, i) {
                        e = e || "soft";
                        var s, n, r, o, h, l, u, c, f, p, _, d = {},
                            m = "cubic" === e ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data";
                        for (f in t[0]) v.push(f);
                        for (l = v.length; --l > -1;) {
                            for (f = v[l], d[f] = h = [], p = 0, c = t.length, u = 0; c > u; u++) s = null == i ? t[u][f] : "string" == typeof(_ = t[u][f]) && "=" === _.charAt(1) ? i[f] + Number(_.charAt(0) + _.substr(2)) : Number(_), g && u > 1 && c - 1 > u && (h[p++] = (s + h[p - 2]) / 2), h[p++] = s;
                            for (c = p - m + 1, p = 0, u = 0; c > u; u += m) s = h[u], n = h[u + 1], r = h[u + 2], o = 2 === m ? 0 : h[u + 3], h[p++] = _ = 3 === m ? new a(s, n, r, o) : new a(s, (2 * n + s) / 3, (2 * n + r) / 3, r);
                            h.length = p
                        }
                        return d
                    },
                    p = function(t, e, i) {
                        for (var s, n, r, a, o, h, l, u, c, f, p, _ = 1 / i, d = t.length; --d > -1;)
                            for (f = t[d], r = f.a, a = f.d - r, o = f.c - r, h = f.b - r, s = n = 0, u = 1; i >= u; u++) l = _ * u, c = 1 - l, s = n - (n = (l * l * a + 3 * c * (l * o + c * h)) * l), p = d * i + u - 1, e[p] = (e[p] || 0) + s * s
                    },
                    _ = function(t, e) {
                        e = e >> 0 || 6;
                        var i, s, n, r, a = [],
                            o = [],
                            h = 0,
                            l = 0,
                            u = e - 1,
                            c = [],
                            f = [];
                        for (i in t) p(t[i], a, e);
                        for (n = a.length, s = 0; n > s; s++) h += Math.sqrt(a[s]), r = s % e, f[r] = h, r === u && (l += h, r = s / e >> 0, c[r] = f, o[r] = l, h = 0, f = []);
                        return {
                            length: l,
                            lengths: o,
                            segments: c
                        }
                    },
                    d = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.8",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var s, n, r, a, o, h = e.values || [],
                                l = {},
                                u = h[0],
                                p = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = p ? p instanceof Array ? p : [
                                ["x", "y", "rotation", p === !0 ? 0 : Number(p) || 0]
                            ] : null;
                            for (s in u) this._props.push(s);
                            for (r = this._props.length; --r > -1;) s = this._props[r], this._overwriteProps.push(s), n = this._func[s] = "function" == typeof t[s], l[s] = n ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || l[s] !== h[0][s] && (o = l);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? c(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : f(h, e.type, l), this._segCount = this._beziers[s].length, this._timeRes) {
                                var d = _(this._beziers, this._timeRes);
                                this._length = d.length, this._lengths = d.lengths, this._segments = d.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (p = this._autoRotate)
                                for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), r = p.length; --r > -1;) {
                                    for (a = 0; 3 > a; a++) s = p[r][a], this._func[s] = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)] : !1;
                                    s = p[r][2], this._initialRotations[r] = (this._func[s] ? this._func[s].call(this._target) : this._target[s]) || 0, this._overwriteProps.push(s)
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, s, n, r, a, o, h, l, u, c, f = this._segCount,
                                p = this._func,
                                _ = this._target,
                                d = e !== this._startRatio;
                            if (this._timeRes) {
                                if (u = this._lengths, c = this._curSeg, e *= this._length, n = this._li, e > this._l2 && f - 1 > n) {
                                    for (l = f - 1; l > n && (this._l2 = u[++n]) <= e;);
                                    this._l1 = u[n - 1], this._li = n, this._curSeg = c = this._segments[n], this._s2 = c[this._s1 = this._si = 0]
                                } else if (e < this._l1 && n > 0) {
                                    for (; n > 0 && (this._l1 = u[--n]) >= e;);
                                    0 === n && e < this._l1 ? this._l1 = 0 : n++, this._l2 = u[n], this._li = n, this._curSeg = c = this._segments[n], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                                }
                                if (i = n, e -= this._l1, n = this._si, e > this._s2 && n < c.length - 1) {
                                    for (l = c.length - 1; l > n && (this._s2 = c[++n]) <= e;);
                                    this._s1 = c[n - 1], this._si = n
                                } else if (e < this._s1 && n > 0) {
                                    for (; n > 0 && (this._s1 = c[--n]) >= e;);
                                    0 === n && e < this._s1 ? this._s1 = 0 : n++, this._s2 = c[n], this._si = n
                                }
                                o = (n + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                            } else i = 0 > e ? 0 : e >= 1 ? f - 1 : f * e >> 0, o = (e - i * (1 / f)) * f;
                            for (s = 1 - o, n = this._props.length; --n > -1;) r = this._props[n], a = this._beziers[r][i], h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._mod[r] && (h = this._mod[r](h, _)), p[r] ? _[r](h) : _[r] = h;
                            if (this._autoRotate) {
                                var m, g, v, y, x, T, b, w = this._autoRotate;
                                for (n = w.length; --n > -1;) r = w[n][2], T = w[n][3] || 0, b = w[n][4] === !0 ? 1 : t, a = this._beziers[w[n][0]], m = this._beziers[w[n][1]], a && m && (a = a[i], m = m[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = m.a + (m.b - m.a) * o, x = m.b + (m.c - m.b) * o, v += (x - v) * o, x += (m.c + (m.d - m.c) * o - x) * o, h = d ? Math.atan2(x - v, y - g) * b + T : this._initialRotations[n], this._mod[r] && (h = this._mod[r](h, _)), p[r] ? _[r](h) : _[r] = h)
                            }
                        }
                    }),
                    m = d.prototype;
                d.bezierThrough = c, d.cubicToQuadratic = h, d._autoCSS = !0, d.quadraticToCubic = function(t, e, i) {
                    return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, d._cssRegister = function() {
                    var t = r.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            s = e._setPluginRatio,
                            n = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, r, a, o, h) {
                                e instanceof Array && (e = {
                                    values: e
                                }), h = new d;
                                var l, u, c, f = e.values,
                                    p = f.length - 1,
                                    _ = [],
                                    m = {};
                                if (0 > p) return o;
                                for (l = 0; p >= l; l++) c = i(t, f[l], a, o, h, p !== l), _[l] = c.end;
                                for (u in e) m[u] = e[u];
                                return m.values = _, o = new n(t, "bezier", 0, 0, c.pt, 2), o.data = c, o.plugin = h, o.setRatio = s, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (l = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != c.end.left ? [
                                    ["left", "top", "rotation", l, !1]
                                ] : null != c.end.x ? [
                                    ["x", "y", "rotation", l, !1]
                                ] : !1), m.autoRotate && (a._transform || a._enableTransforms(!1), c.autoRotate = a._target._gsTransform, c.proxy.rotation = c.autoRotate.rotation || 0, a._overwriteProps.push("rotation")), h._onInitTween(c.proxy, m, a._tween), o
                            }
                        })
                    }
                }, m._mod = function(t) {
                    for (var e, i = this._overwriteProps, s = i.length; --s > -1;) e = t[i[s]], e && "function" == typeof e && (this._mod[i[s]] = e)
                }, m._kill = function(t) {
                    var e, i, s = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
                    if (s = this._autoRotate)
                        for (i = s.length; --i > -1;) t[s[i][2]] && s.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, s, n, r, a = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                    },
                    o = _gsScope._gsDefine.globals,
                    h = {},
                    l = a.prototype = new t("css");
                l.constructor = a, a.version = "1.20.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, l = "px", a.suffixMap = {
                    top: l,
                    right: l,
                    bottom: l,
                    left: l,
                    width: l,
                    height: l,
                    fontSize: l,
                    padding: l,
                    margin: l,
                    perspective: l,
                    lineHeight: ""
                };
                var u, c, f, p, _, d, m, g, v = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    T = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    b = /(?:\d|\-|\+|=|#|\.)*/g,
                    w = /opacity *= *([^)]*)/i,
                    P = /opacity:([^;]*)/i,
                    S = /alpha\(opacity *=.+?\)/i,
                    O = /^(rgb|hsl)/,
                    k = /([A-Z])/g,
                    M = /-([a-z])/gi,
                    A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    C = function(t, e) {
                        return e.toUpperCase()
                    },
                    R = /(?:Left|Right|Width)/i,
                    D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    E = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    z = /,(?=[^\)]*(?:\(|$))/gi,
                    F = /[\s,\(]/i,
                    I = Math.PI / 180,
                    L = 180 / Math.PI,
                    X = {},
                    Y = {
                        style: {}
                    },
                    N = _gsScope.document || {
                        createElement: function() {
                            return Y
                        }
                    },
                    j = function(t, e) {
                        return N.createElementNS ? N.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : N.createElement(t)
                    },
                    B = j("div"),
                    $ = j("img"),
                    Z = a._internals = {
                        _specialProps: h
                    },
                    q = (_gsScope.navigator || {}).userAgent || "",
                    V = function() {
                        var t = q.indexOf("Android"),
                            e = j("a");
                        return f = -1 !== q.indexOf("Safari") && -1 === q.indexOf("Chrome") && (-1 === t || parseFloat(q.substr(t + 8, 2)) > 3), _ = f && parseFloat(q.substr(q.indexOf("Version/") + 8, 2)) < 6, p = -1 !== q.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(q) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(q)) && (d = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
                    }(),
                    W = function(t) {
                        return w.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    U = function(t) {
                        _gsScope.console && console.log(t)
                    },
                    H = "",
                    Q = "",
                    G = function(t, e) {
                        e = e || B;
                        var i, s, n = e.style;
                        if (void 0 !== n[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === n[i[s] + t];);
                        return s >= 0 ? (Q = 3 === s ? "ms" : i[s], H = "-" + Q.toLowerCase() + "-", Q + t) : null
                    },
                    K = N.defaultView ? N.defaultView.getComputedStyle : function() {},
                    J = a.getStyle = function(t, e, i, s, n) {
                        var r;
                        return V || "opacity" !== e ? (!s && t.style[e] ? r = t.style[e] : (i = i || K(t)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]), null == n || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : n) : W(t)
                    },
                    tt = Z.convertToPixels = function(t, i, s, n, r) {
                        if ("px" === n || !n && "lineHeight" !== i) return s;
                        if ("auto" === n || !s) return 0;
                        var o, h, l, u = R.test(i),
                            c = t,
                            f = B.style,
                            p = 0 > s,
                            _ = 1 === s;
                        if (p && (s = -s), _ && (s *= 100), "lineHeight" !== i || n)
                            if ("%" === n && -1 !== i.indexOf("border")) o = s / 100 * (u ? t.clientWidth : t.clientHeight);
                            else {
                                if (f.cssText = "border:0 solid red;position:" + J(t, "position") + ";line-height:0;", "%" !== n && c.appendChild && "v" !== n.charAt(0) && "rem" !== n) f[u ? "borderLeftWidth" : "borderTopWidth"] = s + n;
                                else {
                                    if (c = t.parentNode || N.body, -1 !== J(c, "display").indexOf("flex") && (f.position = "absolute"), h = c._gsCache, l = e.ticker.frame, h && u && h.time === l) return h.width * s / 100;
                                    f[u ? "width" : "height"] = s + n
                                }
                                c.appendChild(B), o = parseFloat(B[u ? "offsetWidth" : "offsetHeight"]), c.removeChild(B), u && "%" === n && a.cacheWidths !== !1 && (h = c._gsCache = c._gsCache || {}, h.time = l, h.width = o / s * 100), 0 !== o || r || (o = tt(t, i, s, n, !0))
                            }
                        else h = K(t).lineHeight, t.style.lineHeight = s, o = parseFloat(K(t).lineHeight), t.style.lineHeight = h;
                        return _ && (o /= 100), p ? -o : o
                    },
                    et = Z.calculateOffset = function(t, e, i) {
                        if ("absolute" !== J(t, "position", i)) return 0;
                        var s = "left" === e ? "Left" : "Top",
                            n = J(t, "margin" + s, i);
                        return t["offset" + s] - (tt(t, e, parseFloat(n), n.replace(b, "")) || 0)
                    },
                    it = function(t, e) {
                        var i, s, n, r = {};
                        if (e = e || K(t, null))
                            if (i = e.length)
                                for (; --i > -1;) n = e[i], (-1 === n.indexOf("-transform") || At === n) && (r[n.replace(M, C)] = e.getPropertyValue(n));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || Mt === i) && (r[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(M, C)] = e[i]);
                        return V || (r.opacity = W(t)), s = $t(t, e, !1), r.rotation = s.rotation, r.skewX = s.skewX, r.scaleX = s.scaleX, r.scaleY = s.scaleY, r.x = s.x, r.y = s.y, Rt && (r.z = s.z, r.rotationX = s.rotationX, r.rotationY = s.rotationY, r.scaleZ = s.scaleZ), r.filters && delete r.filters, r
                    },
                    st = function(t, e, i, s, n) {
                        var r, a, o, h = {},
                            l = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (r = i[a]) || n && n[a]) && -1 === a.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (h[a] = "auto" !== r || "left" !== a && "top" !== a ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[a] || "" === e[a].replace(T, "") ? r : 0 : et(t, a), void 0 !== l[a] && (o = new vt(l, a, l[a], o)));
                        if (s)
                            for (a in s) "className" !== a && (h[a] = s[a]);
                        return {
                            difs: h,
                            firstMPT: o
                        }
                    },
                    nt = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    rt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    at = function(t, e, i) {
                        if ("svg" === (t.nodeName + "").toLowerCase()) return (i || K(t))[e] || 0;
                        if (t.getCTM && Nt(t)) return t.getBBox()[e] || 0;
                        var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            n = nt[e],
                            r = n.length;
                        for (i = i || K(t, null); --r > -1;) s -= parseFloat(J(t, "padding" + n[r], i, !0)) || 0, s -= parseFloat(J(t, "border" + n[r] + "Width", i, !0)) || 0;
                        return s
                    },
                    ot = function(t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        (null == t || "" === t) && (t = "0 0");
                        var i, s = t.split(" "),
                            n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : s[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : s[1];
                        if (s.length > 3 && !e) {
                            for (s = t.split(", ").join(",").split(","), t = [], i = 0; i < s.length; i++) t.push(ot(s[i]));
                            return t.join(",")
                        }
                        return null == r ? r = "center" === n ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + r + (s.length > 2 ? " " + s[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(T, "")), e.oy = parseFloat(r.replace(T, "")), e.v = t), e || t
                    },
                    ht = function(t, e) {
                        return "function" == typeof t && (t = t(g, m)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                    },
                    lt = function(t, e) {
                        return "function" == typeof t && (t = t(g, m)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                    },
                    ut = function(t, e, i, s) {
                        var n, r, a, o, h, l = 1e-6;
                        return "function" == typeof t && (t = t(g, m)), null == t ? o = e : "number" == typeof t ? o = t : (n = 360, r = t.split("_"), h = "=" === t.charAt(1), a = (h ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === t.indexOf("rad") ? 1 : L) - (h ? 0 : e), r.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= n, a !== a % (n / 2) && (a = 0 > a ? a + n : a - n)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * n) % n - (a / n | 0) * n : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * n) % n - (a / n | 0) * n)), o = e + a), l > o && o > -l && (o = 0), o
                    },
                    ct = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ft = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    },
                    pt = a.parseColor = function(t, e) {
                        var i, s, n, r, a, o, h, l, u, c, f;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ct[t]) i = ct[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (s = t.charAt(1), n = t.charAt(2), r = t.charAt(3), t = "#" + s + s + n + n + r + r), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = f = t.match(v), e) {
                                        if (-1 !== t.indexOf("=")) return t.match(y)
                                    } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, h = Number(i[2]) / 100, n = .5 >= h ? h * (o + 1) : h + o - h * o, s = 2 * h - n, i.length > 3 && (i[3] = Number(t[3])), i[0] = ft(a + 1 / 3, s, n), i[1] = ft(a, s, n), i[2] = ft(a - 1 / 3, s, n);
                                else i = t.match(v) || ct.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            }
                        else i = ct.black;
                        return e && !f && (s = i[0] / 255, n = i[1] / 255, r = i[2] / 255, l = Math.max(s, n, r), u = Math.min(s, n, r), h = (l + u) / 2, l === u ? a = o = 0 : (c = l - u, o = h > .5 ? c / (2 - l - u) : c / (l + u), a = l === s ? (n - r) / c + (r > n ? 6 : 0) : l === n ? (r - s) / c + 2 : (s - n) / c + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * o + .5 | 0, i[2] = 100 * h + .5 | 0), i
                    },
                    _t = function(t, e) {
                        var i, s, n, r = t.match(dt) || [],
                            a = 0,
                            o = "";
                        if (!r.length) return t;
                        for (i = 0; i < r.length; i++) s = r[i], n = t.substr(a, t.indexOf(s, a) - a), a += n.length + s.length, s = pt(s, e), 3 === s.length && s.push(1), o += n + (e ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] : "rgba(" + s.join(",")) + ")";
                        return o + t.substr(a)
                    },
                    dt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (l in ct) dt += "|" + l + "\\b";
                dt = new RegExp(dt + ")", "gi"), a.colorStringFilter = function(t) {
                    var e, i = t[0] + " " + t[1];
                    dt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = _t(t[0], e), t[1] = _t(t[1], e)), dt.lastIndex = 0
                }, e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
                var mt = function(t, e, i, s) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var n, r = e ? (t.match(dt) || [""])[0] : "",
                            a = t.split(r).join("").match(x) || [],
                            o = t.substr(0, t.indexOf(a[0])),
                            h = ")" === t.charAt(t.length - 1) ? ")" : "",
                            l = -1 !== t.indexOf(" ") ? " " : ",",
                            u = a.length,
                            c = u > 0 ? a[0].replace(v, "") : "";
                        return u ? n = e ? function(t) {
                            var e, f, p, _;
                            if ("number" == typeof t) t += c;
                            else if (s && z.test(t)) {
                                for (_ = t.replace(z, "|").split("|"), p = 0; p < _.length; p++) _[p] = n(_[p]);
                                return _.join(",")
                            }
                            if (e = (t.match(dt) || [r])[0], f = t.split(e).join("").match(x) || [], p = f.length, u > p--)
                                for (; ++p < u;) f[p] = i ? f[(p - 1) / 2 | 0] : a[p];
                            return o + f.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, r, f;
                            if ("number" == typeof t) t += c;
                            else if (s && z.test(t)) {
                                for (r = t.replace(z, "|").split("|"), f = 0; f < r.length; f++) r[f] = n(r[f]);
                                return r.join(",")
                            }
                            if (e = t.match(x) || [], f = e.length, u > f--)
                                for (; ++f < u;) e[f] = i ? e[(f - 1) / 2 | 0] : a[f];
                            return o + e.join(l) + h
                        } : function(t) {
                            return t
                        }
                    },
                    gt = function(t) {
                        return t = t.split(","),
                            function(e, i, s, n, r, a, o) {
                                var h, l = (i + "").split(" ");
                                for (o = {}, h = 0; 4 > h; h++) o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                                return n.parse(e, o, r, a)
                            }
                    },
                    vt = (Z._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, s, n, r, a = this.data, o = a.proxy, h = a.firstMPT, l = 1e-6; h;) e = o[h.v], h.r ? e = Math.round(e) : l > e && e > -l && (e = 0), h.t[h.p] = e, h = h._next;
                        if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod(o.rotation, this.t) : o.rotation), 1 === t || 0 === t)
                            for (h = a.firstMPT, r = 1 === t ? "e" : "b"; h;) {
                                if (i = h.t, i.type) {
                                    if (1 === i.type) {
                                        for (n = i.xs0 + i.s + i.xs1, s = 1; s < i.l; s++) n += i["xn" + s] + i["xs" + (s + 1)];
                                        i[r] = n
                                    }
                                } else i[r] = i.s + i.xs0;
                                h = h._next
                            }
                    }, function(t, e, i, s, n) {
                        this.t = t, this.p = e, this.v = i, this.r = n, s && (s._prev = this, this._next = s)
                    }),
                    yt = (Z._parseToProxy = function(t, e, i, s, n, r) {
                        var a, o, h, l, u, c = s,
                            f = {},
                            p = {},
                            _ = i._transform,
                            d = X;
                        for (i._transform = null, X = e, s = u = i.parse(t, e, s, n), X = d, r && (i._transform = _, c && (c._prev = null, c._prev && (c._prev._next = null))); s && s !== c;) {
                            if (s.type <= 1 && (o = s.p, p[o] = s.s + s.c, f[o] = s.s, r || (l = new vt(s, "s", o, l, s.r), s.c = 0), 1 === s.type))
                                for (a = s.l; --a > 0;) h = "xn" + a, o = s.p + "_" + h, p[o] = s.data[h], f[o] = s[h], r || (l = new vt(s, h, o, l, s.rxp[h]));
                            s = s._next
                        }
                        return {
                            proxy: f,
                            end: p,
                            firstMPT: l,
                            pt: u
                        }
                    }, Z.CSSPropTween = function(t, e, s, n, a, o, h, l, u, c, f) {
                        this.t = t, this.p = e, this.s = s, this.c = n, this.n = h || e, t instanceof yt || r.push(this.n), this.r = l, this.type = o || 0, u && (this.pr = u, i = !0), this.b = void 0 === c ? s : c, this.e = void 0 === f ? s + n : f, a && (this._next = a, a._prev = this)
                    }),
                    xt = function(t, e, i, s, n, r) {
                        var a = new yt(t, e, i, s - i, n, -1, r);
                        return a.b = i, a.e = a.xs0 = s, a
                    },
                    Tt = a.parseComplex = function(t, e, i, s, n, r, o, h, l, c) {
                        i = i || r || "", "function" == typeof s && (s = s(g, m)), o = new yt(t, e, 0, 0, o, c ? 2 : 1, null, !1, h, i, s), s += "", n && dt.test(s + i) && (s = [i, s], a.colorStringFilter(s), i = s[0], s = s[1]);
                        var f, p, _, d, x, T, b, w, P, S, O, k, M, A = i.split(", ").join(",").split(" "),
                            C = s.split(", ").join(",").split(" "),
                            R = A.length,
                            D = u !== !1;
                        for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (A = A.join(" ").replace(z, ", ").split(" "), C = C.join(" ").replace(z, ", ").split(" "), R = A.length), R !== C.length && (A = (r || "").split(" "), R = A.length), o.plugin = l, o.setRatio = c, dt.lastIndex = 0, f = 0; R > f; f++)
                            if (d = A[f], x = C[f], w = parseFloat(d), w || 0 === w) o.appendXtra("", w, ht(x, w), x.replace(y, ""), D && -1 !== x.indexOf("px"), !0);
                            else if (n && dt.test(d)) k = x.indexOf(")") + 1, k = ")" + (k ? x.substr(k) : ""), M = -1 !== x.indexOf("hsl") && V, S = x, d = pt(d, M), x = pt(x, M), P = d.length + x.length > 6, P && !V && 0 === x[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(C[f]).join("transparent")) : (V || (P = !1), M ? o.appendXtra(S.substr(0, S.indexOf("hsl")) + (P ? "hsla(" : "hsl("), d[0], ht(x[0], d[0]), ",", !1, !0).appendXtra("", d[1], ht(x[1], d[1]), "%,", !1).appendXtra("", d[2], ht(x[2], d[2]), P ? "%," : "%" + k, !1) : o.appendXtra(S.substr(0, S.indexOf("rgb")) + (P ? "rgba(" : "rgb("), d[0], x[0] - d[0], ",", !0, !0).appendXtra("", d[1], x[1] - d[1], ",", !0).appendXtra("", d[2], x[2] - d[2], P ? "," : k, !0), P && (d = d.length < 4 ? 1 : d[3], o.appendXtra("", d, (x.length < 4 ? 1 : x[3]) - d, k, !1))), dt.lastIndex = 0;
                        else if (T = d.match(v)) {
                            if (b = x.match(y), !b || b.length !== T.length) return o;
                            for (_ = 0, p = 0; p < T.length; p++) O = T[p], S = d.indexOf(O, _), o.appendXtra(d.substr(_, S - _), Number(O), ht(b[p], O), "", D && "px" === d.substr(S + O.length, 2), 0 === p), _ = S + O.length;
                            o["xs" + o.l] += d.substr(_)
                        } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + x : x;
                        if (-1 !== s.indexOf("=") && o.data) {
                            for (k = o.xs0 + o.data.s, f = 1; f < o.l; f++) k += o["xs" + f] + o.data["xn" + f];
                            o.e = k + o["xs" + f]
                        }
                        return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                    },
                    bt = 9;
                for (l = yt.prototype, l.l = l.pr = 0; --bt > 0;) l["xn" + bt] = 0, l["xs" + bt] = "";
                l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, i, s, n, r) {
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += r && (o || a["xs" + o]) ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = n, a["xn" + o] = e, a.plugin || (a.xfirst = new yt(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, n, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: e + i
                    }, a.rxp = {}, a.s = e, a.c = i, a.r = n, a)) : (a["xs" + o] += e + (s || ""), a)
                };
                var wt = function(t, e) {
                        e = e || {}, this.p = e.prefix ? G(t) || t : t, h[t] = h[this.p] = this, this.format = e.formatter || mt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    Pt = Z._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var s, n, r = t.split(","),
                            a = e.defaultValue;
                        for (i = i || [a], s = 0; s < r.length; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, n = new wt(r[s], e)
                    },
                    St = Z._registerPluginProp = function(t) {
                        if (!h[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            Pt(t, {
                                parser: function(t, i, s, n, r, a, l) {
                                    var u = o.com.greensock.plugins[e];
                                    return u ? (u._cssRegister(), h[s].parse(t, i, s, n, r, a, l)) : (U("Error: " + e + " js file not loaded."), r)
                                }
                            })
                        }
                    };
                l = wt.prototype, l.parseComplex = function(t, e, i, s, n, r) {
                    var a, o, h, l, u, c, f = this.keyword;
                    if (this.multi && (z.test(i) || z.test(e) ? (o = e.replace(z, "|").split("|"), h = i.replace(z, "|").split("|")) : f && (o = [e], h = [i])), h) {
                        for (l = h.length > o.length ? h.length : o.length, a = 0; l > a; a++) e = o[a] = o[a] || this.dflt, i = h[a] = h[a] || this.dflt, f && (u = e.indexOf(f), c = i.indexOf(f), u !== c && (-1 === c ? o[a] = o[a].split(f).join("") : -1 === u && (o[a] += " " + f)));
                        e = o.join(", "), i = h.join(", ")
                    }
                    return Tt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, n, r)
                }, l.parse = function(t, e, i, s, r, a) {
                    return this.parseComplex(t.style, this.format(J(t, this.p, n, !1, this.dflt)), this.format(e), r, a)
                }, a.registerSpecialProp = function(t, e, i) {
                    Pt(t, {
                        parser: function(t, s, n, r, a, o) {
                            var h = new yt(t, n, 0, 0, a, 2, n, !1, i);
                            return h.plugin = o, h.setRatio = e(t, s, r._tween, n), h
                        },
                        priority: i
                    })
                }, a.useSVGTransformAttr = !0;
                var Ot, kt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Mt = G("transform"),
                    At = H + "transform",
                    Ct = G("transformOrigin"),
                    Rt = null !== G("perspective"),
                    Dt = Z.Transform = function() {
                        this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && Rt ? a.defaultForce3D || "auto" : !1
                    },
                    Et = _gsScope.SVGElement,
                    zt = function(t, e, i) {
                        var s, n = N.createElementNS("http://www.w3.org/2000/svg", t),
                            r = /([a-z])([A-Z])/g;
                        for (s in i) n.setAttributeNS(null, s.replace(r, "$1-$2").toLowerCase(), i[s]);
                        return e.appendChild(n), n
                    },
                    Ft = N.documentElement || {},
                    It = function() {
                        var t, e, i, s = d || /Android/i.test(q) && !_gsScope.chrome;
                        return N.createElementNS && !s && (t = zt("svg", Ft), e = zt("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[Ct] = "50% 50%", e.style[Mt] = "scaleX(0.5)", s = i === e.getBoundingClientRect().width && !(p && Rt), Ft.removeChild(t)), s
                    }(),
                    Lt = function(t, e, i, s, n, r) {
                        var o, h, l, u, c, f, p, _, d, m, g, v, y, x, T = t._gsTransform,
                            b = Bt(t, !0);
                        T && (y = T.xOrigin, x = T.yOrigin), (!s || (o = s.split(" ")).length < 2) && (p = t.getBBox(), 0 === p.x && 0 === p.y && p.width + p.height === 0 && (p = {
                            x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                            y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                            width: 0,
                            height: 0
                        }), e = ot(e).split(" "), o = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width : parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height : parseFloat(e[1])) + p.y]), i.xOrigin = u = parseFloat(o[0]), i.yOrigin = c = parseFloat(o[1]), s && b !== jt && (f = b[0], p = b[1], _ = b[2], d = b[3], m = b[4], g = b[5], v = f * d - p * _, v && (h = u * (d / v) + c * (-_ / v) + (_ * g - d * m) / v, l = u * (-p / v) + c * (f / v) - (f * g - p * m) / v, u = i.xOrigin = o[0] = h, c = i.yOrigin = o[1] = l)), T && (r && (i.xOffset = T.xOffset, i.yOffset = T.yOffset, T = i), n || n !== !1 && a.defaultSmoothOrigin !== !1 ? (h = u - y, l = c - x, T.xOffset += h * b[0] + l * b[2] - h, T.yOffset += h * b[1] + l * b[3] - l) : T.xOffset = T.yOffset = 0), r || t.setAttribute("data-svg-origin", o.join(" "))
                    },
                    Xt = function(t) {
                        var e, i = j("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                            s = this.parentNode,
                            n = this.nextSibling,
                            r = this.style.cssText;
                        if (Ft.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                            e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Xt
                        } catch (a) {} else this._originalGetBBox && (e = this._originalGetBBox());
                        return n ? s.insertBefore(this, n) : s.appendChild(this), Ft.removeChild(i), this.style.cssText = r, e
                    },
                    Yt = function(t) {
                        try {
                            return t.getBBox()
                        } catch (e) {
                            return Xt.call(t, !0)
                        }
                    },
                    Nt = function(t) {
                        return !(!(Et && t.getCTM && Yt(t)) || t.parentNode && !t.ownerSVGElement)
                    },
                    jt = [1, 0, 0, 1, 0, 0],
                    Bt = function(t, e) {
                        var i, s, n, r, a, o, h = t._gsTransform || new Dt,
                            l = 1e5,
                            u = t.style;
                        if (Mt ? s = J(t, At, null, !0) : t.currentStyle && (s = t.currentStyle.filter.match(D), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), h.x || 0, h.y || 0].join(",") : ""), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, !Mt || !(o = "none" === K(t).display) && t.parentNode || (o && (r = u.display, u.display = "block"), t.parentNode || (a = 1, Ft.appendChild(t)), s = J(t, At, null, !0), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, r ? u.display = r : o && Wt(u, "display"), a && Ft.removeChild(t)), (h.svg || t.getCTM && Nt(t)) && (i && -1 !== (u[Mt] + "").indexOf("matrix") && (s = u[Mt], i = 0), n = t.getAttribute("transform"), i && n && (-1 !== n.indexOf("matrix") ? (s = n, i = 0) : -1 !== n.indexOf("translate") && (s = "matrix(1,0,0,1," + n.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return jt;
                        for (n = (s || "").match(v) || [], bt = n.length; --bt > -1;) r = Number(n[bt]), n[bt] = (a = r - (r |= 0)) ? (a * l + (0 > a ? -.5 : .5) | 0) / l + r : r;
                        return e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n
                    },
                    $t = Z.getTransform = function(t, i, s, n) {
                        if (t._gsTransform && s && !n) return t._gsTransform;
                        var r, o, h, l, u, c, f = s ? t._gsTransform || new Dt : new Dt,
                            p = f.scaleX < 0,
                            _ = 2e-5,
                            d = 1e5,
                            m = Rt ? parseFloat(J(t, Ct, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
                            g = parseFloat(a.defaultTransformPerspective) || 0;
                        if (f.svg = !(!t.getCTM || !Nt(t)), f.svg && (Lt(t, J(t, Ct, i, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), Ot = a.useSVGTransformAttr || It), r = Bt(t), r !== jt) {
                            if (16 === r.length) {
                                var v, y, x, T, b, w = r[0],
                                    P = r[1],
                                    S = r[2],
                                    O = r[3],
                                    k = r[4],
                                    M = r[5],
                                    A = r[6],
                                    C = r[7],
                                    R = r[8],
                                    D = r[9],
                                    E = r[10],
                                    z = r[12],
                                    F = r[13],
                                    I = r[14],
                                    X = r[11],
                                    Y = Math.atan2(A, E);
                                f.zOrigin && (I = -f.zOrigin, z = R * I - r[12], F = D * I - r[13], I = E * I + f.zOrigin - r[14]), f.rotationX = Y * L, Y && (T = Math.cos(-Y), b = Math.sin(-Y), v = k * T + R * b, y = M * T + D * b, x = A * T + E * b, R = k * -b + R * T, D = M * -b + D * T, E = A * -b + E * T, X = C * -b + X * T, k = v, M = y, A = x), Y = Math.atan2(-S, E), f.rotationY = Y * L, Y && (T = Math.cos(-Y), b = Math.sin(-Y), v = w * T - R * b, y = P * T - D * b, x = S * T - E * b, D = P * b + D * T, E = S * b + E * T, X = O * b + X * T, w = v, P = y, S = x), Y = Math.atan2(P, w), f.rotation = Y * L, Y && (T = Math.cos(Y), b = Math.sin(Y), v = w * T + P * b, y = k * T + M * b, x = R * T + D * b, P = P * T - w * b, M = M * T - k * b, D = D * T - R * b, w = v, k = y, R = x), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), Y = Math.atan2(k, M), f.scaleX = (Math.sqrt(w * w + P * P + S * S) * d + .5 | 0) / d, f.scaleY = (Math.sqrt(M * M + A * A) * d + .5 | 0) / d, f.scaleZ = (Math.sqrt(R * R + D * D + E * E) * d + .5 | 0) / d, w /= f.scaleX, k /= f.scaleY, P /= f.scaleX, M /= f.scaleY, Math.abs(Y) > _ ? (f.skewX = Y * L, k = 0, "simple" !== f.skewType && (f.scaleY *= 1 / Math.cos(Y))) : f.skewX = 0, f.perspective = X ? 1 / (0 > X ? -X : X) : 0, f.x = z, f.y = F, f.z = I, f.svg && (f.x -= f.xOrigin - (f.xOrigin * w - f.yOrigin * k), f.y -= f.yOrigin - (f.yOrigin * P - f.xOrigin * M))
                            } else if (!Rt || n || !r.length || f.x !== r[4] || f.y !== r[5] || !f.rotationX && !f.rotationY) {
                                var N = r.length >= 6,
                                    j = N ? r[0] : 1,
                                    B = r[1] || 0,
                                    $ = r[2] || 0,
                                    Z = N ? r[3] : 1;
                                f.x = r[4] || 0, f.y = r[5] || 0, h = Math.sqrt(j * j + B * B), l = Math.sqrt(Z * Z + $ * $), u = j || B ? Math.atan2(B, j) * L : f.rotation || 0, c = $ || Z ? Math.atan2($, Z) * L + u : f.skewX || 0, f.scaleX = h, f.scaleY = l, f.rotation = u, f.skewX = c, Rt && (f.rotationX = f.rotationY = f.z = 0, f.perspective = g, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * j + f.yOrigin * $), f.y -= f.yOrigin - (f.xOrigin * B + f.yOrigin * Z))
                            }
                            Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (p ? (f.scaleX *= -1, f.skewX += f.rotation <= 0 ? 180 : -180, f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1, f.skewX += f.skewX <= 0 ? 180 : -180)), f.zOrigin = m;
                            for (o in f) f[o] < _ && f[o] > -_ && (f[o] = 0)
                        }
                        return s && (t._gsTransform = f, f.svg && (Ot && t.style[Mt] ? e.delayedCall(.001, function() {
                            Wt(t.style, Mt)
                        }) : !Ot && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), f
                    },
                    Zt = function(t) {
                        var e, i, s = this.data,
                            n = -s.rotation * I,
                            r = n + s.skewX * I,
                            a = 1e5,
                            o = (Math.cos(n) * s.scaleX * a | 0) / a,
                            h = (Math.sin(n) * s.scaleX * a | 0) / a,
                            l = (Math.sin(r) * -s.scaleY * a | 0) / a,
                            u = (Math.cos(r) * s.scaleY * a | 0) / a,
                            c = this.t.style,
                            f = this.t.currentStyle;
                        if (f) {
                            i = h, h = -l, l = -i, e = f.filter, c.filter = "";
                            var p, _, m = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== f.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + u,
                                x = s.x + m * s.xPercent / 100,
                                T = s.y + g * s.yPercent / 100;
                            if (null != s.ox && (p = (s.oxp ? m * s.ox * .01 : s.ox) - m / 2, _ = (s.oyp ? g * s.oy * .01 : s.oy) - g / 2, x += p - (p * o + _ * h), T += _ - (p * l + _ * u)), v ? (p = m / 2, _ = g / 2, y += ", Dx=" + (p - (p * o + _ * h) + x) + ", Dy=" + (_ - (p * l + _ * u) + T) + ")") : y += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = e.replace(E, y) : c.filter = y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === u && (v && -1 === y.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), !v) {
                                var P, S, O, k = 8 > d ? 1 : -1;
                                for (p = s.ieOffsetX || 0, _ = s.ieOffsetY || 0, s.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > h ? -h : h) * g)) / 2 + x), s.ieOffsetY = Math.round((g - ((0 > u ? -u : u) * g + (0 > l ? -l : l) * m)) / 2 + T), bt = 0; 4 > bt; bt++) S = rt[bt], P = f[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : tt(this.t, S, parseFloat(P), P.replace(b, "")) || 0, O = i !== s[S] ? 2 > bt ? -s.ieOffsetX : -s.ieOffsetY : 2 > bt ? p - s.ieOffsetX : _ - s.ieOffsetY, c[S] = (s[S] = Math.round(i - O * (0 === bt || 2 === bt ? 1 : k))) + "px"
                            }
                        }
                    },
                    qt = Z.set3DTransformRatio = Z.setTransformRatio = function(t) {
                        var e, i, s, n, r, a, o, h, l, u, c, f, _, d, m, g, v, y, x, T, b, w, P, S = this.data,
                            O = this.t.style,
                            k = S.rotation,
                            M = S.rotationX,
                            A = S.rotationY,
                            C = S.scaleX,
                            R = S.scaleY,
                            D = S.scaleZ,
                            E = S.x,
                            z = S.y,
                            F = S.z,
                            L = S.svg,
                            X = S.perspective,
                            Y = S.force3D,
                            N = S.skewY,
                            j = S.skewX;
                        if (N && (j += N, k += N), ((1 === t || 0 === t) && "auto" === Y && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !Y) && !F && !X && !A && !M && 1 === D || Ot && L || !Rt) return void(k || j || L ? (k *= I, w = j * I, P = 1e5, i = Math.cos(k) * C, r = Math.sin(k) * C, s = Math.sin(k - w) * -R, a = Math.cos(k - w) * R, w && "simple" === S.skewType && (e = Math.tan(w - N * I), e = Math.sqrt(1 + e * e), s *= e, a *= e, N && (e = Math.tan(N * I), e = Math.sqrt(1 + e * e), i *= e, r *= e)), L && (E += S.xOrigin - (S.xOrigin * i + S.yOrigin * s) + S.xOffset, z += S.yOrigin - (S.xOrigin * r + S.yOrigin * a) + S.yOffset, Ot && (S.xPercent || S.yPercent) && (m = this.t.getBBox(), E += .01 * S.xPercent * m.width, z += .01 * S.yPercent * m.height), m = 1e-6, m > E && E > -m && (E = 0), m > z && z > -m && (z = 0)), x = (i * P | 0) / P + "," + (r * P | 0) / P + "," + (s * P | 0) / P + "," + (a * P | 0) / P + "," + E + "," + z + ")", L && Ot ? this.t.setAttribute("transform", "matrix(" + x) : O[Mt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + x) : O[Mt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + R + "," + E + "," + z + ")");
                        if (p && (m = 1e-4, m > C && C > -m && (C = D = 2e-5), m > R && R > -m && (R = D = 2e-5), !X || S.z || S.rotationX || S.rotationY || (X = 0)), k || j) k *= I, g = i = Math.cos(k), v = r = Math.sin(k), j && (k -= j * I, g = Math.cos(k), v = Math.sin(k), "simple" === S.skewType && (e = Math.tan((j - N) * I), e = Math.sqrt(1 + e * e), g *= e, v *= e, S.skewY && (e = Math.tan(N * I), e = Math.sqrt(1 + e * e), i *= e, r *= e))), s = -v, a = g;
                        else {
                            if (!(A || M || 1 !== D || X || L)) return void(O[Mt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + E + "px," + z + "px," + F + "px)" + (1 !== C || 1 !== R ? " scale(" + C + "," + R + ")" : ""));
                            i = a = 1, s = r = 0
                        }
                        u = 1, n = o = h = l = c = f = 0, _ = X ? -1 / X : 0, d = S.zOrigin, m = 1e-6, T = ",", b = "0", k = A * I, k && (g = Math.cos(k), v = Math.sin(k), h = -v, c = _ * -v, n = i * v, o = r * v, u = g, _ *= g, i *= g, r *= g), k = M * I, k && (g = Math.cos(k), v = Math.sin(k), e = s * g + n * v, y = a * g + o * v, l = u * v, f = _ * v, n = s * -v + n * g, o = a * -v + o * g, u *= g, _ *= g, s = e, a = y), 1 !== D && (n *= D, o *= D, u *= D, _ *= D), 1 !== R && (s *= R, a *= R, l *= R, f *= R), 1 !== C && (i *= C, r *= C, h *= C, c *= C), (d || L) && (d && (E += n * -d, z += o * -d, F += u * -d + d), L && (E += S.xOrigin - (S.xOrigin * i + S.yOrigin * s) + S.xOffset, z += S.yOrigin - (S.xOrigin * r + S.yOrigin * a) + S.yOffset), m > E && E > -m && (E = b), m > z && z > -m && (z = b), m > F && F > -m && (F = 0)), x = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", x += (m > i && i > -m ? b : i) + T + (m > r && r > -m ? b : r) + T + (m > h && h > -m ? b : h), x += T + (m > c && c > -m ? b : c) + T + (m > s && s > -m ? b : s) + T + (m > a && a > -m ? b : a), M || A || 1 !== D ? (x += T + (m > l && l > -m ? b : l) + T + (m > f && f > -m ? b : f) + T + (m > n && n > -m ? b : n), x += T + (m > o && o > -m ? b : o) + T + (m > u && u > -m ? b : u) + T + (m > _ && _ > -m ? b : _) + T) : x += ",0,0,0,0,1,0,", x += E + T + z + T + F + T + (X ? 1 + -F / X : 1) + ")", O[Mt] = x
                    };
                l = Dt.prototype, l.x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = l.xOffset = l.yOffset = 0, l.scaleX = l.scaleY = l.scaleZ = 1, Pt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, s, r, o, h) {
                        if (s._lastParsedTransform === h) return r;
                        s._lastParsedTransform = h;
                        var l, u = h.scale && "function" == typeof h.scale ? h.scale : 0;
                        "function" == typeof h[i] && (l = h[i], h[i] = e), u && (h.scale = u(g, t));
                        var c, f, p, _, d, v, y, x, T, b = t._gsTransform,
                            w = t.style,
                            P = 1e-6,
                            S = kt.length,
                            O = h,
                            k = {},
                            M = "transformOrigin",
                            A = $t(t, n, !0, O.parseTransform),
                            C = O.transform && ("function" == typeof O.transform ? O.transform(g, m) : O.transform);
                        if (A.skewType = O.skewType || A.skewType || a.defaultSkewType, s._transform = A, C && "string" == typeof C && Mt) f = B.style, f[Mt] = C, f.display = "block", f.position = "absolute", N.body.appendChild(B), c = $t(B, null, !1), "simple" === A.skewType && (c.scaleY *= Math.cos(c.skewX * I)), A.svg && (v = A.xOrigin, y = A.yOrigin, c.x -= A.xOffset, c.y -= A.yOffset, (O.transformOrigin || O.svgOrigin) && (C = {}, Lt(t, ot(O.transformOrigin), C, O.svgOrigin, O.smoothOrigin, !0), v = C.xOrigin, y = C.yOrigin, c.x -= C.xOffset - A.xOffset, c.y -= C.yOffset - A.yOffset), (v || y) && (x = Bt(B, !0), c.x -= v - (v * x[0] + y * x[2]), c.y -= y - (v * x[1] + y * x[3]))), N.body.removeChild(B), c.perspective || (c.perspective = A.perspective), null != O.xPercent && (c.xPercent = lt(O.xPercent, A.xPercent)), null != O.yPercent && (c.yPercent = lt(O.yPercent, A.yPercent));
                        else if ("object" == typeof O) {
                            if (c = {
                                    scaleX: lt(null != O.scaleX ? O.scaleX : O.scale, A.scaleX),
                                    scaleY: lt(null != O.scaleY ? O.scaleY : O.scale, A.scaleY),
                                    scaleZ: lt(O.scaleZ, A.scaleZ),
                                    x: lt(O.x, A.x),
                                    y: lt(O.y, A.y),
                                    z: lt(O.z, A.z),
                                    xPercent: lt(O.xPercent, A.xPercent),
                                    yPercent: lt(O.yPercent, A.yPercent),
                                    perspective: lt(O.transformPerspective, A.perspective)
                                }, d = O.directionalRotation, null != d)
                                if ("object" == typeof d)
                                    for (f in d) O[f] = d[f];
                                else O.rotation = d;
                            "string" == typeof O.x && -1 !== O.x.indexOf("%") && (c.x = 0, c.xPercent = lt(O.x, A.xPercent)), "string" == typeof O.y && -1 !== O.y.indexOf("%") && (c.y = 0, c.yPercent = lt(O.y, A.yPercent)), c.rotation = ut("rotation" in O ? O.rotation : "shortRotation" in O ? O.shortRotation + "_short" : "rotationZ" in O ? O.rotationZ : A.rotation, A.rotation, "rotation", k), Rt && (c.rotationX = ut("rotationX" in O ? O.rotationX : "shortRotationX" in O ? O.shortRotationX + "_short" : A.rotationX || 0, A.rotationX, "rotationX", k), c.rotationY = ut("rotationY" in O ? O.rotationY : "shortRotationY" in O ? O.shortRotationY + "_short" : A.rotationY || 0, A.rotationY, "rotationY", k)), c.skewX = ut(O.skewX, A.skewX), c.skewY = ut(O.skewY, A.skewY)
                        }
                        for (Rt && null != O.force3D && (A.force3D = O.force3D, _ = !0), p = A.force3D || A.z || A.rotationX || A.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, p || null == O.scale || (c.scaleZ = 1); --S > -1;) T = kt[S], C = c[T] - A[T], (C > P || -P > C || null != O[T] || null != X[T]) && (_ = !0, r = new yt(A, T, A[T], C, r), T in k && (r.e = k[T]), r.xs0 = 0, r.plugin = o, s._overwriteProps.push(r.n));
                        return C = O.transformOrigin, A.svg && (C || O.svgOrigin) && (v = A.xOffset, y = A.yOffset, Lt(t, ot(C), c, O.svgOrigin, O.smoothOrigin), r = xt(A, "xOrigin", (b ? A : c).xOrigin, c.xOrigin, r, M), r = xt(A, "yOrigin", (b ? A : c).yOrigin, c.yOrigin, r, M), (v !== A.xOffset || y !== A.yOffset) && (r = xt(A, "xOffset", b ? v : A.xOffset, A.xOffset, r, M), r = xt(A, "yOffset", b ? y : A.yOffset, A.yOffset, r, M)), C = "0px 0px"), (C || Rt && p && A.zOrigin) && (Mt ? (_ = !0, T = Ct, C = (C || J(t, T, n, !1, "50% 50%")) + "", r = new yt(w, T, 0, 0, r, -1, M), r.b = w[T], r.plugin = o, Rt ? (f = A.zOrigin, C = C.split(" "), A.zOrigin = (C.length > 2 && (0 === f || "0px" !== C[2]) ? parseFloat(C[2]) : f) || 0, r.xs0 = r.e = C[0] + " " + (C[1] || "50%") + " 0px", r = new yt(A, "zOrigin", 0, 0, r, -1, r.n), r.b = f, r.xs0 = r.e = A.zOrigin) : r.xs0 = r.e = C) : ot(C + "", A)), _ && (s._transformType = A.svg && Ot || !p && 3 !== this._transformType ? 2 : 3), l && (h[i] = l), u && (h.scale = u), r
                    },
                    prefix: !0
                }), Pt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), Pt("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, r, a) {
                        e = this.format(e);
                        var o, h, l, u, c, f, p, _, d, m, g, v, y, x, T, b, w = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            P = t.style;
                        for (d = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), o = e.split(" "), h = 0; h < w.length; h++) this.p.indexOf("border") && (w[h] = G(w[h])), c = u = J(t, w[h], n, !1, "0px"), -1 !== c.indexOf(" ") && (u = c.split(" "), c = u[0], u = u[1]), f = l = o[h], p = parseFloat(c), v = c.substr((p + "").length), y = "=" === f.charAt(1), y ? (_ = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), _ *= parseFloat(f), g = f.substr((_ + "").length - (0 > _ ? 1 : 0)) || "") : (_ = parseFloat(f), g = f.substr((_ + "").length)), "" === g && (g = s[i] || v), g !== v && (x = tt(t, "borderLeft", p, v), T = tt(t, "borderTop", p, v), "%" === g ? (c = x / d * 100 + "%", u = T / m * 100 + "%") : "em" === g ? (b = tt(t, "borderLeft", 1, "em"), c = x / b + "em", u = T / b + "em") : (c = x + "px", u = T + "px"), y && (f = parseFloat(c) + _ + g, l = parseFloat(u) + _ + g)), a = Tt(P, w[h], c + " " + u, f + " " + l, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: mt("0px 0px 0px 0px", !1, !0)
                }), Pt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, s, r) {
                        return Tt(t.style, i, this.format(J(t, i, n, !1, "0px 0px")), this.format(e), !1, "0px", r)
                    },
                    prefix: !0,
                    formatter: mt("0px 0px", !1, !0)
                }), Pt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, s, r, a) {
                        var o, h, l, u, c, f, p = "background-position",
                            _ = n || K(t, null),
                            m = this.format((_ ? d ? _.getPropertyValue(p + "-x") + " " + _.getPropertyValue(p + "-y") : _.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (f = J(t, "backgroundImage").replace(A, ""), f && "none" !== f)) {
                            for (o = m.split(" "), h = g.split(" "), $.setAttribute("src", f), l = 2; --l > -1;) m = o[l], u = -1 !== m.indexOf("%"), u !== (-1 !== h[l].indexOf("%")) && (c = 0 === l ? t.offsetWidth - $.width : t.offsetHeight - $.height, o[l] = u ? parseFloat(m) / 100 * c + "px" : parseFloat(m) / c * 100 + "%");
                            m = o.join(" ")
                        }
                        return this.parseComplex(t.style, m, g, r, a)
                    },
                    formatter: ot
                }), Pt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function(t) {
                        return t += "", ot(-1 === t.indexOf(" ") ? t + " " + t : t)
                    }
                }), Pt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), Pt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), Pt("transformStyle", {
                    prefix: !0
                }), Pt("backfaceVisibility", {
                    prefix: !0
                }), Pt("userSelect", {
                    prefix: !0
                }), Pt("margin", {
                    parser: gt("marginTop,marginRight,marginBottom,marginLeft")
                }), Pt("padding", {
                    parser: gt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), Pt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, s, r, a) {
                        var o, h, l;
                        return 9 > d ? (h = t.currentStyle, l = 8 > d ? " " : ",", o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(J(t, this.p, n, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, r, a)
                    }
                }), Pt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), Pt("autoRound,strictUnits", {
                    parser: function(t, e, i, s, n) {
                        return n
                    }
                }), Pt("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, s, r, a) {
                        var o = J(t, "borderTopWidth", n, !1, "0px"),
                            h = this.format(e).split(" "),
                            l = h[0].replace(b, "");
                        return "px" !== l && (o = parseFloat(o) / tt(t, "borderTopWidth", 1, l) + l), this.parseComplex(t.style, this.format(o + " " + J(t, "borderTopStyle", n, !1, "solid") + " " + J(t, "borderTopColor", n, !1, "#000")), h.join(" "), r, a)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(dt) || ["#000"])[0]
                    }
                }), Pt("borderWidth", {
                    parser: gt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), Pt("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, s, n) {
                        var r = t.style,
                            a = "cssFloat" in r ? "cssFloat" : "styleFloat";
                        return new yt(r, a, 0, 0, n, -1, i, !1, 0, r[a], e)
                    }
                });
                var Vt = function(t) {
                    var e, i = this.t,
                        s = i.filter || J(this.data, "filter") || "",
                        n = this.s + this.c * t | 0;
                    100 === n && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !J(this.data, "filter")) : (i.filter = s.replace(S, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + n + ")"), -1 === s.indexOf("pacity") ? 0 === n && this.xn1 || (i.filter = s + " alpha(opacity=" + n + ")") : i.filter = s.replace(w, "opacity=" + n))
                };
                Pt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, s, r, a) {
                        var o = parseFloat(J(t, "opacity", n, !1, "1")),
                            h = t.style,
                            l = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), l && 1 === o && "hidden" === J(t, "visibility", n) && 0 !== e && (o = 0), V ? r = new yt(h, "opacity", o, e - o, r) : (r = new yt(h, "opacity", 100 * o, 100 * (e - o), r), r.xn1 = l ? 1 : 0, h.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = a, r.setRatio = Vt), l && (r = new yt(h, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), r.xs0 = "inherit", s._overwriteProps.push(r.n), s._overwriteProps.push(i)), r
                    }
                });
                var Wt = function(t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Ut = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Wt(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                Pt("className", {
                    parser: function(t, e, s, r, a, o, h) {
                        var l, u, c, f, p, _ = t.getAttribute("class") || "",
                            d = t.style.cssText;
                        if (a = r._classNamePT = new yt(t, s, 0, 0, a, 2), a.setRatio = Ut, a.pr = -11, i = !0, a.b = _, u = it(t, n), c = t._gsClassPT) {
                            for (f = {}, p = c.data; p;) f[p.p] = 1, p = p._next;
                            c.setRatio(1)
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : _.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), l = st(t, u, it(t), h, f), t.setAttribute("class", _), a.data = l.firstMPT, t.style.cssText = d, a = a.xfirst = r.parse(t, l.difs, a, o)
                    }
                });
                var Ht = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, s, n, r, a = this.t.style,
                            o = h.transform.parse;
                        if ("all" === this.e) a.cssText = "", n = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), s = e.length; --s > -1;) i = e[s], h[i] && (h[i].parse === o ? n = !0 : i = "transformOrigin" === i ? Ct : h[i].p), Wt(a, i);
                        n && (Wt(a, Mt), r = this.t._gsTransform, r && (r.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (Pt("clearProps", {
                        parser: function(t, e, s, n, r) {
                            return r = new yt(t, s, 0, 0, r, 2), r.setRatio = Ht, r.e = e, r.pr = -10, r.data = n._tween, i = !0, r
                        }
                    }), l = "bezier,throwProps,physicsProps,physics2D".split(","), bt = l.length; bt--;) St(l[bt]);
                l = a.prototype, l._firstPT = l._lastParsedTransform = l._transform = null, l._onInitTween = function(t, e, o, l) {
                    if (!t.nodeType) return !1;
                    this._target = m = t, this._tween = o, this._vars = e, g = l, u = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, n = K(t, ""), r = this._overwriteProps;
                    var p, d, v, y, x, T, b, w, S, O = t.style;
                    if (c && "" === O.zIndex && (p = J(t, "zIndex", n), ("auto" === p || "" === p) && this._addLazySet(O, "zIndex", 0)), "string" == typeof e && (y = O.cssText, p = it(t, n), O.cssText = y + ";" + e, p = st(t, p, it(t)).difs, !V && P.test(e) && (p.opacity = parseFloat(RegExp.$1)), e = p, O.cssText = y), e.className ? this._firstPT = d = h.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = d = this.parse(t, e, null), this._transformType) {
                        for (S = 3 === this._transformType, Mt ? f && (c = !0, "" === O.zIndex && (b = J(t, "zIndex", n), ("auto" === b || "" === b) && this._addLazySet(O, "zIndex", 0)), _ && this._addLazySet(O, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (S ? "visible" : "hidden"))) : O.zoom = 1, v = d; v && v._next;) v = v._next;
                        w = new yt(t, "transform", 0, 0, null, 2), this._linkCSSP(w, null, v), w.setRatio = Mt ? qt : Zt, w.data = this._transform || $t(t, n, !0), w.tween = o, w.pr = -1, r.pop()
                    }
                    if (i) {
                        for (; d;) {
                            for (T = d._next, v = y; v && v.pr > d.pr;) v = v._next;
                            (d._prev = v ? v._prev : x) ? d._prev._next = d: y = d, (d._next = v) ? v._prev = d : x = d, d = T
                        }
                        this._firstPT = y
                    }
                    return !0
                }, l.parse = function(t, e, i, r) {
                    var a, o, l, c, f, p, _, d, v, y, x = t.style;
                    for (a in e) {
                        if (p = e[a], "function" == typeof p && (p = p(g, m)), o = h[a]) i = o.parse(t, p, a, this, i, r, e);
                        else {
                            if ("--" === a.substr(0, 2)) {
                                this._tween._propLookup[a] = this._addTween.call(this._tween, t.style, "setProperty", K(t).getPropertyValue(a) + "", p + "", a, !1, a);
                                continue
                            }
                            f = J(t, a, n) + "", v = "string" == typeof p, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || v && O.test(p) ? (v || (p = pt(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = Tt(x, a, f, p, !0, "transparent", i, 0, r)) : v && F.test(p) ? i = Tt(x, a, f, p, !0, null, i, 0, r) : (l = parseFloat(f), _ = l || 0 === l ? f.substr((l + "").length) : "", ("" === f || "auto" === f) && ("width" === a || "height" === a ? (l = at(t, a, n), _ = "px") : "left" === a || "top" === a ? (l = et(t, a, n), _ = "px") : (l = "opacity" !== a ? 0 : 1, _ = "")), y = v && "=" === p.charAt(1), y ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), d = p.replace(b, "")) : (c = parseFloat(p), d = v ? p.replace(b, "") : ""), "" === d && (d = a in s ? s[a] : _), p = c || 0 === c ? (y ? c + l : c) + d : e[a], _ !== d && ("" !== d || "lineHeight" === a) && (c || 0 === c) && l && (l = tt(t, a, l, _), "%" === d ? (l /= tt(t, a, 100, "%") / 100, e.strictUnits !== !0 && (f = l + "%")) : "em" === d || "rem" === d || "vw" === d || "vh" === d ? l /= tt(t, a, 1, d) : "px" !== d && (c = tt(t, a, c, d), d = "px"), y && (c || 0 === c) && (p = c + l + d)), y && (c += l), !l && 0 !== l || !c && 0 !== c ? void 0 !== x[a] && (p || p + "" != "NaN" && null != p) ? (i = new yt(x, a, c || l || 0, 0, i, -1, a, !1, 0, f, p), i.xs0 = "none" !== p || "display" !== a && -1 === a.indexOf("Style") ? p : f) : U("invalid " + a + " tween value: " + e[a]) : (i = new yt(x, a, l, c - l, i, 0, a, u !== !1 && ("px" === d || "zIndex" === a), 0, f, p), i.xs0 = d))
                        }
                        r && i && !i.plugin && (i.plugin = r)
                    }
                    return i
                }, l.setRatio = function(t) {
                    var e, i, s, n = this._firstPT,
                        r = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; n;) {
                                if (e = n.c * t + n.s, n.r ? e = Math.round(e) : r > e && e > -r && (e = 0), n.type)
                                    if (1 === n.type)
                                        if (s = n.l, 2 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
                                        else if (3 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                                else if (4 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                                else if (5 === s) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                                else {
                                    for (i = n.xs0 + e + n.xs1, s = 1; s < n.l; s++) i += n["xn" + s] + n["xs" + (s + 1)];
                                    n.t[n.p] = i
                                } else -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(t);
                                else n.t[n.p] = e + n.xs0;
                                n = n._next
                            } else
                                for (; n;) 2 !== n.type ? n.t[n.p] = n.b : n.setRatio(t), n = n._next;
                        else
                            for (; n;) {
                                if (2 !== n.type)
                                    if (n.r && -1 !== n.type)
                                        if (e = Math.round(n.s + n.c), n.type) {
                                            if (1 === n.type) {
                                                for (s = n.l, i = n.xs0 + e + n.xs1, s = 1; s < n.l; s++) i += n["xn" + s] + n["xs" + (s + 1)];
                                                n.t[n.p] = i
                                            }
                                        } else n.t[n.p] = e + n.xs0;
                                else n.t[n.p] = n.e;
                                else n.setRatio(t);
                                n = n._next
                            }
                }, l._enableTransforms = function(t) {
                    this._transform = this._transform || $t(this._target, n, !0), this._transformType = this._transform.svg && Ot || !t && 3 !== this._transformType ? 2 : 3
                };
                var Qt = function() {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                l._addLazySet = function(t, e, i) {
                    var s = this._firstPT = new yt(t, e, 0, 0, this._firstPT, 2);
                    s.e = i, s.setRatio = Qt, s.data = this
                }, l._linkCSSP = function(t, e, i, s) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, l._mod = function(t) {
                    for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
                }, l._kill = function(e) {
                    var i, s, n, r = e;
                    if (e.autoAlpha || e.alpha) {
                        r = {};
                        for (s in e) r[s] = e[s];
                        r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                    }
                    for (e.className && (i = this._classNamePT) && (n = i.xfirst, n && n._prev ? this._linkCSSP(n._prev, i._next, n._prev._prev) : n === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, n._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== s && i.plugin._kill && (i.plugin._kill(e), s = i.plugin), i = i._next;
                    return t.prototype._kill.call(this, r)
                };
                var Gt = function(t, e, i) {
                    var s, n, r, a;
                    if (t.slice)
                        for (n = t.length; --n > -1;) Gt(t[n], e, i);
                    else
                        for (s = t.childNodes, n = s.length; --n > -1;) r = s[n], a = r.type, r.style && (e.push(it(r)), i && i.push(r)), 1 !== a && 9 !== a && 11 !== a || !r.childNodes.length || Gt(r, e, i)
                };
                return a.cascadeTo = function(t, i, s) {
                    var n, r, a, o, h = e.to(t, i, s),
                        l = [h],
                        u = [],
                        c = [],
                        f = [],
                        p = e._internals.reservedProps;
                    for (t = h._targets || h.target, Gt(t, u, f), h.render(i, !0, !0), Gt(t, c), h.render(0, !0, !0), h._enabled(!0), n = f.length; --n > -1;)
                        if (r = st(f[n], u[n], c[n]), r.firstMPT) {
                            r = r.difs;
                            for (a in s) p[a] && (r[a] = s[a]);
                            o = {};
                            for (a in r) o[a] = u[n][a];
                            l.push(e.fromTo(f[n], i, o, r))
                        }
                    return l
                }, t.activate([a]), a
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.6.0",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = function(t) {
                        for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
                    },
                    i = t.prototype;
                i._onInitAllProps = function() {
                    for (var t, i, s, n = this._tween, r = n.vars.roundProps.join ? n.vars.roundProps : n.vars.roundProps.split(","), a = r.length, o = {}, h = n._propLookup.roundProps; --a > -1;) o[r[a]] = Math.round;
                    for (a = r.length; --a > -1;)
                        for (t = r[a], i = n._firstPT; i;) s = i._next, i.pg ? i.t._mod(o) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), s && (s._prev = i._prev), i._prev ? i._prev._next = s : n._firstPT === i && (n._firstPT = s), i._next = i._prev = null, n._propLookup[t] = h)), i = s;
                    return !1
                }, i._add = function(t, e, i, s) {
                    this._addTween(t, e, i, i + s, e, Math.round), this._overwriteProps.push(e)
                }
            }(),
            function() {
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.6.1",
                    init: function(t, e, i, s) {
                        var n, r;
                        if ("function" != typeof t.setAttribute) return !1;
                        for (n in e) r = e[n], "function" == typeof r && (r = r(s, t)), this._addTween(t, "setAttribute", t.getAttribute(n) + "", r + "", n, !1, n), this._overwriteProps.push(n);
                        return !0
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.1",
                API: 2,
                init: function(t, e, i, s) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var n, r, a, o, h, l, u = e.useRadians === !0 ? 2 * Math.PI : 360,
                        c = 1e-6;
                    for (n in e) "useRadians" !== n && (o = e[n], "function" == typeof o && (o = o(s, t)), l = (o + "").split("_"), r = l[0], a = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), o = this.finals[n] = "string" == typeof r && "=" === r.charAt(1) ? a + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, h = o - a, l.length && (r = l.join("_"), -1 !== r.indexOf("short") && (h %= u, h !== h % (u / 2) && (h = 0 > h ? h + u : h - u)), -1 !== r.indexOf("_cw") && 0 > h ? h = (h + 9999999999 * u) % u - (h / u | 0) * u : -1 !== r.indexOf("ccw") && h > 0 && (h = (h - 9999999999 * u) % u - (h / u | 0) * u)), (h > c || -c > h) && (this._addTween(t, n, a, a + h, n), this._overwriteProps.push(n)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, s, n = _gsScope.GreenSockGlobals || _gsScope,
                    r = n.com.greensock,
                    a = 2 * Math.PI,
                    o = Math.PI / 2,
                    h = r._class,
                    l = function(e, i) {
                        var s = h("easing." + e, function() {}, !0),
                            n = s.prototype = new t;
                        return n.constructor = s, n.getRatio = i, s
                    },
                    u = t.register || function() {},
                    c = function(t, e, i, s) {
                        var n = h("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new s
                        }, !0);
                        return u(n, t), n
                    },
                    f = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    p = function(e, i) {
                        var s = h("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            n = s.prototype = new t;
                        return n.constructor = s, n.getRatio = i, n.config = function(t) {
                            return new s(t)
                        }, s
                    },
                    _ = c("Back", p("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), p("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), p("BackInOut", function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    d = h("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    m = d.prototype = new t;
                return m.constructor = d, m.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, d.ease = new d(.7, .7), m.config = d.config = function(t, e, i) {
                    return new d(t, e, i)
                }, e = h("easing.SteppedEase", function(t, e) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
                }, !0), m = e.prototype = new t, m.constructor = e, m.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
                }, m.config = e.config = function(t, i) {
                    return new e(t, i)
                }, i = h("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, s, n, r, a, o, h = e.taper || "none", l = [], u = 0, c = 0 | (e.points || 20), p = c, _ = e.randomize !== !1, d = e.clamp === !0, m = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = _ ? Math.random() : 1 / c * p, s = m ? m.getRatio(i) : i, "none" === h ? n = g : "out" === h ? (r = 1 - i, n = r * r * g) : "in" === h ? n = i * i * g : .5 > i ? (r = 2 * i, n = r * r * .5 * g) : (r = 2 * (1 - i), n = r * r * .5 * g), _ ? s += Math.random() * n - .5 * n : p % 2 ? s += .5 * n : s -= .5 * n, d && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[u++] = {
                        x: i,
                        y: s
                    };
                    for (l.sort(function(t, e) {
                            return t.x - e.x
                        }), o = new f(1, 1, null), p = c; --p > -1;) a = l[p], o = new f(a.x, a.y, o);
                    this._prev = new f(0, 0, 0 !== o.t ? o : o.next)
                }, !0), m = i.prototype = new t, m.constructor = i, m.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, m.config = function(t) {
                    return new i(t)
                }, i.ease = new i, c("Bounce", l("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), l("BounceIn", function(t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), l("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), c("Circ", l("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), l("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), l("CircInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), s = function(e, i, s) {
                    var n = h("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || s) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                        }, !0),
                        r = n.prototype = new t;
                    return r.constructor = n, r.getRatio = i, r.config = function(t, e) {
                        return new n(t, e)
                    }, n
                }, c("Elastic", s("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), s("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                }, .3), s("ElasticInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                }, .45)), c("Expo", l("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), l("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), l("ExpoInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), c("Sine", l("SineOut", function(t) {
                    return Math.sin(t * o)
                }), l("SineIn", function(t) {
                    return -Math.cos(t * o) + 1
                }), l("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), h("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), u(n.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(e, "SteppedEase", "ease,"), _
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = {},
            s = t.document,
            n = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!n.TweenLite) {
            var r, a, o, h, l, u = function(t) {
                    var e, i = t.split("."),
                        s = n;
                    for (e = 0; e < i.length; e++) s[i[e]] = s = s[i[e]] || {};
                    return s
                },
                c = u("com.greensock"),
                f = 1e-10,
                p = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                _ = function() {},
                d = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                m = {},
                g = function(s, r, a, o) {
                    this.sc = m[s] ? m[s].sc : [], m[s] = this, this.gsClass = null, this.func = a;
                    var h = [];
                    this.check = function(l) {
                        for (var c, f, p, _, d = r.length, v = d; --d > -1;)(c = m[r[d]] || new g(r[d], [])).gsClass ? (h[d] = c.gsClass, v--) : l && c.sc.push(this);
                        if (0 === v && a) {
                            if (f = ("com.greensock." + s).split("."), p = f.pop(), _ = u(f.join("."))[p] = this.gsClass = a.apply(a, h), o)
                                if (n[p] = i[p] = _, "undefined" != typeof module && module.exports)
                                    if (s === e) {
                                        module.exports = i[e] = _;
                                        for (d in i) _[d] = i[d]
                                    } else i[e] && (i[e][p] = _);
                            else "function" == typeof define && define.amd && define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function() {
                                return _
                            });
                            for (d = 0; d < this.sc.length; d++) this.sc[d].check()
                        }
                    }, this.check(!0)
                },
                v = t._gsDefine = function(t, e, i, s) {
                    return new g(t, e, i, s)
                },
                y = c._class = function(t, e, i) {
                    return e = e || function() {}, v(t, [], function() {
                        return e
                    }, i), e
                };
            v.globals = n;
            var x = [0, 0, 1, 1],
                T = y("easing.Ease", function(t, e, i, s) {
                    this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? x.concat(e) : x
                }, !0),
                b = T.map = {},
                w = T.register = function(t, e, i, s) {
                    for (var n, r, a, o, h = e.split(","), l = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --l > -1;)
                        for (r = h[l], n = s ? y("easing." + r, null, !0) : c.easing[r] || {}, a = u.length; --a > -1;) o = u[a], b[r + "." + o] = b[o + r] = n[o] = t.getRatio ? t : t[o] || new t
                };
            for (o = T.prototype, o._calcEnd = !1, o.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
                }, r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], a = r.length; --a > -1;) o = r[a] + ",Power" + a, w(new T(null, null, 1, a), o, "easeOut", !0), w(new T(null, null, 2, a), o, "easeIn" + (0 === a ? ",easeNone" : "")), w(new T(null, null, 3, a), o, "easeInOut");
            b.linear = c.easing.Linear.easeIn, b.swing = c.easing.Quad.easeInOut;
            var P = y("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            o = P.prototype, o.addEventListener = function(t, e, i, s, n) {
                n = n || 0;
                var r, a, o = this._listeners[t],
                    u = 0;
                for (this !== h || l || h.wake(), null == o && (this._listeners[t] = o = []), a = o.length; --a > -1;) r = o[a], r.c === e && r.s === i ? o.splice(a, 1) : 0 === u && r.pr < n && (u = a + 1);
                o.splice(u, 0, {
                    c: e,
                    s: i,
                    up: s,
                    pr: n
                })
            }, o.removeEventListener = function(t, e) {
                var i, s = this._listeners[t];
                if (s)
                    for (i = s.length; --i > -1;)
                        if (s[i].c === e) return void s.splice(i, 1)
            }, o.dispatchEvent = function(t) {
                var e, i, s, n = this._listeners[t];
                if (n)
                    for (e = n.length, e > 1 && (n = n.slice(0)), i = this._eventTarget; --e > -1;) s = n[e], s && (s.up ? s.c.call(s.s || i, {
                        type: t,
                        target: i
                    }) : s.c.call(s.s || i))
            };
            var S = t.requestAnimationFrame,
                O = t.cancelAnimationFrame,
                k = Date.now || function() {
                    return (new Date).getTime()
                },
                M = k();
            for (r = ["ms", "moz", "webkit", "o"], a = r.length; --a > -1 && !S;) S = t[r[a] + "RequestAnimationFrame"], O = t[r[a] + "CancelAnimationFrame"] || t[r[a] + "CancelRequestAnimationFrame"];
            y("Ticker", function(t, e) {
                var i, n, r, a, o, u = this,
                    c = k(),
                    p = e !== !1 && S ? "auto" : !1,
                    d = 500,
                    m = 33,
                    g = "tick",
                    v = function(t) {
                        var e, s, h = k() - M;
                        h > d && (c += h - m), M += h, u.time = (M - c) / 1e3, e = u.time - o, (!i || e > 0 || t === !0) && (u.frame++, o += e + (e >= a ? .004 : a - e), s = !0), t !== !0 && (r = n(v)), s && u.dispatchEvent(g)
                    };
                P.call(u), u.time = u.frame = 0, u.tick = function() {
                    v(!0)
                }, u.lagSmoothing = function(t, e) {
                    d = t || 1 / f, m = Math.min(e, d, 0)
                }, u.sleep = function() {
                    null != r && (p && O ? O(r) : clearTimeout(r), n = _, r = null, u === h && (l = !1))
                }, u.wake = function(t) {
                    null !== r ? u.sleep() : t ? c += -M + (M = k()) : u.frame > 10 && (M = k() - d + 5), n = 0 === i ? _ : p && S ? S : function(t) {
                        return setTimeout(t, 1e3 * (o - u.time) + 1 | 0)
                    }, u === h && (l = !0), v(2)
                }, u.fps = function(t) {
                    return arguments.length ? (i = t, a = 1 / (i || 60), o = this.time + a, void u.wake()) : i
                }, u.useRAF = function(t) {
                    return arguments.length ? (u.sleep(), p = t, void u.fps(i)) : p
                }, u.fps(t), setTimeout(function() {
                    "auto" === p && u.frame < 5 && "hidden" !== s.visibilityState && u.useRAF(!1)
                }, 1500)
            }), o = c.Ticker.prototype = new c.events.EventDispatcher, o.constructor = c.Ticker;
            var A = y("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, H) {
                    l || h.wake();
                    var i = this.vars.useFrames ? U : H;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            h = A.ticker = new c.Ticker, o = A.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
            var C = function() {
                l && k() - M > 2e3 && "hidden" !== s.visibilityState && h.wake();
                var t = setTimeout(C, 2e3);
                t.unref && t.unref()
            };
            C(), o.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, o.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, o.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, o.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, o.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, o.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, o.render = function() {}, o.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, o.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
            }, o._enabled = function(t, e) {
                return l || h.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, o._kill = function() {
                return this._enabled(!1, !1)
            }, o.kill = function(t, e) {
                return this._kill(t, e), this
            }, o._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, o._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, o._callback = function(t) {
                var e = this.vars,
                    i = e[t],
                    s = e[t + "Params"],
                    n = e[t + "Scope"] || e.callbackScope || this,
                    r = s ? s.length : 0;
                switch (r) {
                    case 0:
                        i.call(n);
                        break;
                    case 1:
                        i.call(n, s[0]);
                        break;
                    case 2:
                        i.call(n, s[0], s[1]);
                        break;
                    default:
                        i.apply(n, s)
                }
            }, o.eventCallback = function(t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var n = this.vars;
                    if (1 === arguments.length) return n[t];
                    null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = d(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, o.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, o.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, o.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, o.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, o.totalTime = function(t, e, i) {
                if (l || h.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            n = this._timeline;
                        if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? s - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                            for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (F.length && G(), this.render(t, e, !1), F.length && G())
                }
                return this
            }, o.progress = o.totalProgress = function(t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, o.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, o.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, o.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || f, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, o.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, o.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, s = this._timeline;
                return t != this._paused && s && (l || t || h.wake(), e = s.rawTime(), i = e - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var R = y("core.SimpleTimeline", function(t) {
                A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            o = R.prototype = new A, o.constructor = R, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function(t, e) {
                var i, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (s = t._startTime; i && i._startTime > s;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
            }, o._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, o.render = function(t, e, i) {
                var s, n = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; n;) s = n._next, (n._active || t >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s
            }, o.rawTime = function() {
                return l || h.wake(), this._totalTime
            };
            var D = y("TweenLite", function(e, i, s) {
                    if (A.call(this, i, s), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                    var n, r, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        h = this.vars.overwrite;
                    if (this._overwrite = h = null == h ? W[D.defaultOverwrite] : "number" == typeof h ? h >> 0 : W[h], (o || e instanceof Array || e.push && d(e)) && "number" != typeof e[0])
                        for (this._targets = a = p(e), this._propLookup = [], this._siblings = [], n = 0; n < a.length; n++) r = a[n], r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (a.splice(n--, 1), this._targets = a = a.concat(p(r))) : (this._siblings[n] = K(r, this, !1), 1 === h && this._siblings[n].length > 1 && tt(r, this, null, 1, this._siblings[n])) : (r = a[n--] = D.selector(r), "string" == typeof r && a.splice(n + 1, 1)) : a.splice(n--, 1);
                    else this._propLookup = {}, this._siblings = K(e, this, !1), 1 === h && this._siblings.length > 1 && tt(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -f, this.render(Math.min(0, -this._delay)))
                }, !0),
                E = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                z = function(t, e) {
                    var i, s = {};
                    for (i in t) V[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!$[i] || $[i] && $[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                    t.css = s
                };
            o = D.prototype = new A, o.constructor = D, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, D.version = "1.20.2", D.defaultEase = o._ease = new T(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = h, D.autoSleep = 120, D.lagSmoothing = function(t, e) {
                h.lagSmoothing(t, e)
            }, D.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (D.selector = i, i(e)) : "undefined" == typeof s ? e : s.querySelectorAll ? s.querySelectorAll(e) : s.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var F = [],
                I = {},
                L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                X = /[\+-]=-?[\.\d]/,
                Y = function(t) {
                    for (var e, i = this._firstPT, s = 1e-6; i;) e = i.blob ? 1 === t && this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : s > e && e > -s && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                },
                N = function(t, e, i, s) {
                    var n, r, a, o, h, l, u, c = [],
                        f = 0,
                        p = "",
                        _ = 0;
                    for (c.start = t, c.end = e, t = c[0] = t + "", e = c[1] = e + "", i && (i(c), t = c[0], e = c[1]), c.length = 0, n = t.match(L) || [], r = e.match(L) || [], s && (s._next = null, s.blob = 1, c._firstPT = c._applyPT = s), h = r.length, o = 0; h > o; o++) u = r[o], l = e.substr(f, e.indexOf(u, f) - f), p += l || !o ? l : ",", f += l.length, _ ? _ = (_ + 1) % 5 : "rgba(" === l.substr(-5) && (_ = 1), u === n[o] || n.length <= o ? p += u : (p && (c.push(p), p = ""), a = parseFloat(n[o]), c.push(a), c._firstPT = {
                        _next: c._firstPT,
                        t: c,
                        p: c.length - 1,
                        s: a,
                        c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - a) || 0,
                        f: 0,
                        m: _ && 4 > _ ? Math.round : 0
                    }), f += u.length;
                    return p += e.substr(f), p && c.push(p), c.setRatio = Y, X.test(e) && (c.end = 0), c
                },
                j = function(t, e, i, s, n, r, a, o, h) {
                    "function" == typeof s && (s = s(h || 0, t));
                    var l, u = typeof t[e],
                        c = "function" !== u ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                        f = "get" !== i ? i : c ? a ? t[c](a) : t[c]() : t[e],
                        p = "string" == typeof s && "=" === s.charAt(1),
                        _ = {
                            t: t,
                            p: e,
                            s: f,
                            f: "function" === u,
                            pg: 0,
                            n: n || e,
                            m: r ? "function" == typeof r ? r : Math.round : 0,
                            pr: 0,
                            c: p ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - f || 0
                        };
                    return ("number" != typeof f || "number" != typeof s && !p) && (a || isNaN(f) || !p && isNaN(s) || "boolean" == typeof f || "boolean" == typeof s ? (_.fp = a, l = N(f, p ? parseFloat(_.s) + _.c : s, o || D.defaultStringFilter, _), _ = {
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: n || e,
                        pr: 0,
                        m: 0
                    }) : (_.s = parseFloat(f), p || (_.c = parseFloat(s) - _.s || 0))), _.c ? ((_._next = this._firstPT) && (_._next._prev = _), this._firstPT = _, _) : void 0
                },
                B = D._internals = {
                    isArray: d,
                    isSelector: E,
                    lazyTweens: F,
                    blobDif: N
                },
                $ = D._plugins = {},
                Z = B.tweenLookup = {},
                q = 0,
                V = B.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1,
                    yoyoEase: 1
                },
                W = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                U = A._rootFramesTimeline = new R,
                H = A._rootTimeline = new R,
                Q = 30,
                G = B.lazyRender = function() {
                    var t, e = F.length;
                    for (I = {}; --e > -1;) t = F[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    F.length = 0
                };
            H._startTime = h.time, U._startTime = h.frame, H._active = U._active = !0, setTimeout(G, 1), A._updateRoot = D.render = function() {
                var t, e, i;
                if (F.length && G(), H.render((h.time - H._startTime) * H._timeScale, !1, !1), U.render((h.frame - U._startTime) * U._timeScale, !1, !1), F.length && G(), h.frame >= Q) {
                    Q = h.frame + (parseInt(D.autoSleep, 10) || 120);
                    for (i in Z) {
                        for (e = Z[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete Z[i]
                    }
                    if (i = H._first, (!i || i._paused) && D.autoSleep && !U._first && 1 === h._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || h.sleep()
                    }
                }
            }, h.addEventListener("tick", A._updateRoot);
            var K = function(t, e, i) {
                    var s, n, r = t._gsTweenID;
                    if (Z[r || (t._gsTweenID = r = "t" + q++)] || (Z[r] = {
                            target: t,
                            tweens: []
                        }), e && (s = Z[r].tweens, s[n = s.length] = e, i))
                        for (; --n > -1;) s[n] === e && s.splice(n, 1);
                    return Z[r].tweens
                },
                J = function(t, e, i, s) {
                    var n, r, a = t.vars.onOverwrite;
                    return a && (n = a(t, e, i, s)), a = D.onOverwrite, a && (r = a(t, e, i, s)), n !== !1 && r !== !1
                },
                tt = function(t, e, i, s, n) {
                    var r, a, o, h;
                    if (1 === s || s >= 4) {
                        for (h = n.length, r = 0; h > r; r++)
                            if ((o = n[r]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                            else if (5 === s) break;
                        return a
                    }
                    var l, u = e._startTime + f,
                        c = [],
                        p = 0,
                        _ = 0 === e._duration;
                    for (r = n.length; --r > -1;)(o = n[r]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || et(e, 0, _), 0 === et(o, l, _) && (c[p++] = o)) : o._startTime <= u && o._startTime + o.totalDuration() / o._timeScale > u && ((_ || !o._initted) && u - o._startTime <= 2e-10 || (c[p++] = o)));
                    for (r = p; --r > -1;)
                        if (o = c[r], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
                            if (2 !== s && !J(o, e)) continue;
                            o._enabled(!1, !1) && (a = !0)
                        }
                    return a
                },
                et = function(t, e, i) {
                    for (var s = t._timeline, n = s._timeScale, r = t._startTime; s._timeline;) {
                        if (r += s._startTime, n *= s._timeScale, s._paused) return -100;
                        s = s._timeline
                    }
                    return r /= n, r > e ? r - e : i && r === e || !t._initted && 2 * f > r - e ? f : (r += t.totalDuration() / t._timeScale / n) > e + f ? 0 : r - e - f
                };
            o._init = function() {
                var t, e, i, s, n, r, a = this.vars,
                    o = this._overwrittenProps,
                    h = this._duration,
                    l = !!a.immediateRender,
                    u = a.ease;
                if (a.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), n = {};
                    for (s in a.startAt) n[s] = a.startAt[s];
                    if (n.overwrite = !1, n.immediateRender = !0, n.lazy = l && a.lazy !== !1, n.startAt = n.delay = null, n.onUpdate = a.onUpdate, n.onUpdateScope = a.onUpdateScope || a.callbackScope || this, this._startAt = D.to(this.target, 0, n), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== h) return
                } else if (a.runBackwards && 0 !== h)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (s in a) V[s] && "autoCSS" !== s || (i[s] = a[s]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && a.lazy !== !1, i.immediateRender = l, this._startAt = D.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = u = u ? u instanceof T ? u : "function" == typeof u ? new T(u, a.easeParams) : b[u] || D.defaultEase : D.defaultEase, a.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (r = this._targets.length, t = 0; r > t; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
                if (e && D._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = a.onUpdate, this._initted = !0
            }, o._initProps = function(e, i, s, n, r) {
                var a, o, h, l, u, c;
                if (null == e) return !1;
                I[e._gsTweenID] && G(), this.vars.css || e.style && e !== t && e.nodeType && $.css && this.vars.autoCSS !== !1 && z(this.vars, e);
                for (a in this.vars)
                    if (c = this.vars[a], V[a]) c && (c instanceof Array || c.push && d(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[a] = c = this._swapSelfInParams(c, this));
                    else if ($[a] && (l = new $[a])._onInitTween(e, this.vars[a], this, r)) {
                    for (this._firstPT = u = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: a,
                            pg: 1,
                            pr: l._priority,
                            m: 0
                        }, o = l._overwriteProps.length; --o > -1;) i[l._overwriteProps[o]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (h = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
                } else i[a] = j.call(this, e, a, "get", c, a, 0, null, this.vars.stringFilter, r);
                return n && this._kill(n, e) ? this._initProps(e, i, s, n, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && tt(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (I[e._gsTweenID] = !0), h)
            }, o.render = function(t, e, i) {
                var s, n, r, a, o = this._time,
                    h = this._duration,
                    l = this._rawPrevTime;
                if (t >= h - 1e-7 && t >= 0) this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === h && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > l || 0 >= t && t >= -1e-7 || l === f && "isPause" !== this.data) && l !== t && (i = !0, l > f && (n = "onReverseComplete")), this._rawPrevTime = a = !e || t || l === t ? t : f);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === h && l > 0) && (n = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === h && (this._initted || !this.vars.lazy || i) && (l >= 0 && (l !== f || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || l === t ? t : f)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / h,
                        c = this._easeType,
                        p = this._easePower;
                    (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === p ? u *= u : 2 === p ? u *= u * u : 3 === p ? u *= u * u * u : 4 === p && (u *= u * u * u * u), 1 === c ? this.ratio = 1 - u : 2 === c ? this.ratio = u : .5 > t / h ? this.ratio = u / 2 : this.ratio = 1 - u / 2
                } else this.ratio = this._ease.getRatio(t / h);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = l, F.push(this), void(this._lazy = [t, e]);
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / h) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === h) && (e || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s || i) && this._callback("onUpdate")), n && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === h && this._rawPrevTime === f && a !== f && (this._rawPrevTime = 0))
                }
            }, o._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                var s, n, r, a, o, h, l, u, c, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((d(e) || E(e)) && "number" != typeof e[0])
                    for (s = e.length; --s > -1;) this._kill(t, e[s], i) && (h = !0);
                else {
                    if (this._targets) {
                        for (s = this._targets.length; --s > -1;)
                            if (e === this._targets[s]) {
                                o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        o = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (o) {
                        if (l = t || o, u = t !== n && "all" !== n && t !== o && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                            for (r in l) o[r] && (c || (c = []), c.push(r));
                            if ((c || !t) && !J(this, i, e, c)) return !1
                        }
                        for (r in l)(a = o[r]) && (f && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, h = !0), a.pg && a.t._kill(l) && (h = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[r]), u && (n[r] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return h
            }, o.invalidate = function() {
                return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -f, this.render(Math.min(0, -this._delay))), this
            }, o._enabled = function(t, e) {
                if (l || h.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s)
                        for (i = s.length; --i > -1;) this._siblings[i] = K(s[i], this, !0);
                    else this._siblings = K(this.target, this, !0)
                }
                return A.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, D.to = function(t, e, i) {
                return new D(t, e, i)
            }, D.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
            }, D.fromTo = function(t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new D(t, e, s)
            }, D.delayedCall = function(t, e, i, s, n) {
                return new D(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: n,
                    overwrite: 0
                })
            }, D.set = function(t, e) {
                return new D(t, 0, e)
            }, D.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : D.selector(t) || t;
                var i, s, n, r;
                if ((d(t) || E(t)) && "number" != typeof t[0]) {
                    for (i = t.length, s = []; --i > -1;) s = s.concat(D.getTweensOf(t[i], e));
                    for (i = s.length; --i > -1;)
                        for (r = s[i], n = i; --n > -1;) r === s[n] && s.splice(i, 1)
                } else if (t._gsTweenID)
                    for (s = K(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                return s || []
            }, D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var s = D.getTweensOf(t, e), n = s.length; --n > -1;) s[n]._kill(i, t)
            };
            var it = y("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = it.prototype
            }, !0);
            if (o = it.prototype, it.version = "1.19.0", it.API = 2, o._firstPT = null, o._addTween = j, o.setRatio = Y, o._kill = function(t) {
                    var e, i = this._overwriteProps,
                        s = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1
                }, o._mod = o._roundProps = function(t) {
                    for (var e, i = this._firstPT; i;) e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                }, D._onPluginEvent = function(t, e) {
                    var i, s, n, r, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, s = n; s && s.pr > o.pr;) s = s._next;
                            (o._prev = s ? s._prev : r) ? o._prev._next = o: n = o, (o._next = s) ? s._prev = o : r = o, o = a
                        }
                        o = e._firstPT = n
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, it.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === it.API && ($[(new t[e])._propName] = t[e]);
                    return !0
                }, v.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        s = t.priority || 0,
                        n = t.overwriteProps,
                        r = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_mod",
                            mod: "_mod",
                            initAll: "_onInitAllProps"
                        },
                        a = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            it.call(this, i, s), this._overwriteProps = n || []
                        }, t.global === !0),
                        o = a.prototype = new it(i);
                    o.constructor = a, a.API = t.API;
                    for (e in r) "function" == typeof t[e] && (o[r[e]] = t[e]);
                    return a.version = t.version, it.activate([a]), a
                }, r = t._gsQueue) {
                for (a = 0; a < r.length; a++) r[a]();
                for (o in m) m[o].func || t.console.log("GSAP encountered missing dependency: " + o)
            }
            l = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");