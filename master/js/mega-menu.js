function menu_toggle() {
    $(".showhide").click(function(e) {
        $(".main-menu").stop().slideToggle("slow")
    }), $(document).innerWidth() < 940 && $(".main-menu .nav-item a").click(function(e) {
        $(this).next("div").stop().slideToggle("slow")
    })
}

function menu_re_position() {
    var e = $(".megamenu-wraper .container").width(),
        t = 0;
    $(".main-menu>ul>li").each(function(s, a) {
        t += $(this).width(), t > e - 120 && ($(this).hasClass("moreNav") || ($(this).remove(), $("#overflowMenu .ofMenu>ul").append("<li>" + $(this).html() + "</li>")))
    }), $(".main-menu ul .moreNav").length > 0 || $(".main-menu>ul").append('<li class="nav-item moreNav"><a href="#"><span class="icon-menu"></span>More</a></li>')
}! function(e, t, s) {
    "use strict";

    function a(t, s) {
        this.element = t, this.settings = e.extend({}, o, s), this._defaults = o, this._name = l, this.mouseTimeoutID = null, this.focusTimeoutID = null, this.mouseFocused = !1, this.justFocused = !1, this.init()
    }

    function n(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }

    function i(t, s) {
        var a, i, l, o = t.nodeName.toLowerCase();
        return "area" === o ? (a = t.parentNode, i = a.name, t.href && i && "map" === a.nodeName.toLowerCase() ? (l = e("img[usemap=#" + i + "]")[0], !!l && n(l)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || s : s) && n(t)
    }
    var l = "accessibleMegaMenu",
        o = {
            uuidPrefix: "accessible-megamenu",
            menuClass: "accessible-megamenu",
            topNavItemClass: "accessible-megamenu-top-nav-item",
            panelClass: "accessible-megamenu-panel",
            panelGroupClass: "accessible-megamenu-panel-group",
            hoverClass: "hover",
            focusClass: "focus",
            openClass: "open"
        },
        r = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            keyMap: {
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                59: ";",
                65: "a",
                66: "b",
                67: "c",
                68: "d",
                69: "e",
                70: "f",
                71: "g",
                72: "h",
                73: "i",
                74: "j",
                75: "k",
                76: "l",
                77: "m",
                78: "n",
                79: "o",
                80: "p",
                81: "q",
                82: "r",
                83: "s",
                84: "t",
                85: "u",
                86: "v",
                87: "w",
                88: "x",
                89: "y",
                90: "z",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9",
                190: "."
            }
        };
    a.prototype = function() {
        var n, i, o, u, c, f, h, d, p, m, g, b, C, v = 0,
            x = 1e3,
            y = "",
            $ = "function" == typeof t.hasOwnProperty && !!t.hasOwnProperty("ontouchstart");
        return n = function(t) {
            return e(t).closest(":data(plugin_" + l + ")").data("plugin_" + l)
        }, i = function(t) {
            t = e(t);
            var s = this.settings;
            t.attr("id") || t.attr("id", s.uuidPrefix + "-" + (new Date).getTime() + "-" + ++v)
        }, o = function(t, a) {
            var n, i = e(t.target),
                l = this,
                o = this.settings,
                u = this.menu,
                c = i.closest("." + o.topNavItemClass),
                f = i.hasClass(o.panelClass) ? i : i.closest("." + o.panelClass);
            if (C.call(this, !0), a)
                if (c = u.find("." + o.topNavItemClass + " ." + o.openClass + ":first").closest("." + o.topNavItemClass), c.is(t.relatedTarget) || c.has(t.relatedTarget).length > 0) 0 === c.length && u.find("[aria-expanded=true]").attr("aria-expanded", "false").removeClass(o.openClass).filter("." + o.panelClass).attr("aria-hidden", "true");
                else {
                    if (("mouseout" === t.type || "focusout" === t.type) && c.has(s.activeElement).length > 0) return;
                    c.find("[aria-expanded]").attr("aria-expanded", "false").removeClass(o.openClass).filter("." + o.panelClass).attr("aria-hidden", "true"), ("keydown" === t.type && t.keyCode === r.ESCAPE || "DOMAttrModified" === t.type) && (n = c.find(":tabbable:first"), setTimeout(function() {
                        u.find("[aria-expanded]." + l.settings.panelClass).off("DOMAttrModified.accessible-megamenu"), n.focus(), l.justFocused = !1
                    }, 99))
                } else clearTimeout(l.focusTimeoutID), c.siblings().find("[aria-expanded]").attr("aria-expanded", "false").removeClass(o.openClass).filter("." + o.panelClass).attr("aria-hidden", "true"), c.find("[aria-expanded]").attr("aria-expanded", "true").addClass(o.openClass).filter("." + o.panelClass).attr("aria-hidden", "false"), "mouseover" === t.type && i.is(":tabbable") && 1 === c.length && 0 === f.length && u.has(s.activeElement).length > 0 && (i.focus(), l.justFocused = !1), C.call(l)
        }, u = function(t) {
            var s = e(t.currentTarget),
                a = s.closest("." + this.settings.topNavItemClass),
                n = s.closest("." + this.settings.panelClass);
            1 === a.length && 0 === n.length && 1 === a.find("." + this.settings.panelClass).length && (s.hasClass(this.settings.openClass) ? this.justFocused ? (t.preventDefault(), t.stopPropagation(), this.justFocused = !1) : $ && (t.preventDefault(), t.stopPropagation(), o.call(this, t, s.hasClass(this.settings.openClass))) : (t.preventDefault(), t.stopPropagation(), o.call(this, t), this.justFocused = !1))
        }, c = function(t) {
            0 === e(t.target).closest(this.menu).length && (t.preventDefault(), t.stopPropagation(), o.call(this, t, !0))
        }, f = function(t) {
            "aria-expanded" === t.originalEvent.attrName && "false" === t.originalEvent.newValue && e(t.target).hasClass(this.settings.openClass) && (t.preventDefault(), t.stopPropagation(), o.call(this, t, !0))
        }, h = function(t) {
            clearTimeout(this.focusTimeoutID);
            var s = e(t.target),
                a = s.closest("." + this.settings.panelClass);
            s.addClass(this.settings.focusClass).on("click.accessible-megamenu", e.proxy(u, this)), this.justFocused = !this.mouseFocused, this.mouseFocused = !1, this.panels.not(a).filter("." + this.settings.openClass).length && o.call(this, t)
        }, d = function(s) {
            this.justFocused = !1;
            var a = this,
                n = e(s.target),
                i = n.closest("." + this.settings.topNavItemClass);
            n.removeClass(this.settings.focusClass).off("click.accessible-megamenu"), t.cvox ? a.focusTimeoutID = setTimeout(function() {
                t.cvox.Api.getCurrentNode(function(e) {
                    i.has(e).length ? clearTimeout(a.focusTimeoutID) : a.focusTimeoutID = setTimeout(function(e, t, s) {
                        o.call(e, t, s)
                    }, 275, a, s, !0)
                })
            }, 25) : a.focusTimeoutID = setTimeout(function() {
                o.call(a, s, !0)
            }, 300)
        }, p = function(s) {
            var i, l, c, f, h, d, p = this.constructor === a ? this : n(this),
                m = p.settings,
                g = e(e(this).is("." + m.hoverClass + ":tabbable") ? this : s.target),
                b = p.menu,
                C = p.topnavitems,
                v = g.closest("." + m.topNavItemClass),
                $ = b.find(":tabbable"),
                w = g.hasClass(m.panelClass) ? g : g.closest("." + m.panelClass),
                T = w.find("." + m.panelGroupClass),
                D = g.closest("." + m.panelGroupClass),
                k = s.keyCode || s.which,
                M = !1,
                E = r.keyMap[s.keyCode] || "",
                N = 1 === v.length && 0 === w.length;
            if (!g.is("input:focus, select:focus, textarea:focus, button:focus")) {
                switch (g.is("." + m.hoverClass + ":tabbable") && e("html").off("keydown.accessible-megamenu"), k) {
                    case r.ESCAPE:
                        o.call(p, s, !0);
                        break;
                    case r.DOWN:
                        s.preventDefault(), N ? (o.call(p, s), M = 1 === v.find("." + m.panelClass + " :tabbable:first").focus().length) : M = 1 === $.filter(":gt(" + $.index(g) + "):first").focus().length, !M && t.opera && "[object Opera]" === opera.toString() && (s.ctrlKey || s.metaKey) && ($ = e(":tabbable"), c = $.index(g), M = 1 === e(":tabbable:gt(" + e(":tabbable").index(g) + "):first").focus().length);
                        break;
                    case r.UP:
                        s.preventDefault(), N && g.hasClass(m.openClass) ? (o.call(p, s, !0), i = C.filter(":lt(" + C.index(v) + "):last"), i.children("." + m.panelClass).length && (M = 1 === i.children().attr("aria-expanded", "true").addClass(m.openClass).filter("." + m.panelClass).attr("aria-hidden", "false").find(":tabbable:last").focus())) : N || (M = 1 === $.filter(":lt(" + $.index(g) + "):last").focus().length), !M && t.opera && "[object Opera]" === opera.toString() && (s.ctrlKey || s.metaKey) && ($ = e(":tabbable"), c = $.index(g), M = 1 === e(":tabbable:lt(" + e(":tabbable").index(g) + "):first").focus().length);
                        break;
                    case r.RIGHT:
                        s.preventDefault(), N ? M = 1 === C.filter(":gt(" + C.index(v) + "):first").find(":tabbable:first").focus().length : (T.length && D.length && (M = 1 === T.filter(":gt(" + T.index(D) + "):first").find(":tabbable:first").focus().length), M || (M = 1 === v.find(":tabbable:first").focus().length));
                        break;
                    case r.LEFT:
                        s.preventDefault(), N ? M = 1 === C.filter(":lt(" + C.index(v) + "):last").find(":tabbable:first").focus().length : (T.length && D.length && (M = 1 === T.filter(":lt(" + T.index(D) + "):last").find(":tabbable:first").focus().length), M || (M = 1 === v.find(":tabbable:first").focus().length));
                        break;
                    case r.TAB:
                        c = $.index(g), s.shiftKey && N && g.hasClass(m.openClass) ? (o.call(p, s, !0), i = C.filter(":lt(" + C.index(v) + "):last"), i.children("." + m.panelClass).length && (M = i.children().attr("aria-expanded", "true").addClass(m.openClass).filter("." + m.panelClass).attr("aria-hidden", "false").find(":tabbable:last").focus())) : s.shiftKey && c > 0 ? M = 1 === $.filter(":lt(" + c + "):last").focus().length : !s.shiftKey && c < $.length - 1 ? M = 1 === $.filter(":gt(" + c + "):first").focus().length : t.opera && "[object Opera]" === opera.toString() && ($ = e(":tabbable"), c = $.index(g), M = s.shiftKey ? 1 === e(":tabbable:lt(" + e(":tabbable").index(g) + "):last").focus().length : 1 === e(":tabbable:gt(" + e(":tabbable").index(g) + "):first").focus().length), M && s.preventDefault();
                        break;
                    case r.SPACE:
                        if (!N) return !0;
                        s.preventDefault(), u.call(p, s);
                        break;
                    case r.ENTER:
                        return !0;
                    default:
                        if (clearTimeout(this.keydownTimeoutID), y += E !== y ? E : "", 0 === y.length) return;
                        for (this.keydownTimeoutID = setTimeout(function() {
                                y = ""
                            }, x), $ = N && !g.hasClass(m.openClass) ? $.filter(":not(." + m.panelClass + " :tabbable)") : v.find(":tabbable"), s.shiftKey && ($ = e($.get().reverse())), c = 0; c < $.length; c++)
                            if (f = $.eq(c), f.is(g)) {
                                l = 1 === y.length ? c + 1 : c;
                                break
                            }
                        for (d = new RegExp("^" + y.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), "i"), c = l; c < $.length; c++)
                            if (f = $.eq(c), h = e.trim(f.text()), d.test(h)) {
                                M = !0, f.focus();
                                break
                            }
                        if (!M)
                            for (c = 0; l > c; c++)
                                if (f = $.eq(c), h = e.trim(f.text()), d.test(h)) {
                                    f.focus();
                                    break
                                }
                }
                p.justFocused = !1
            }
        }, m = function(t) {
            (e(t.target).is(this.settings.panelClass) || e(t.target).closest(":focusable").length) && (this.mouseFocused = !0), this.mouseTimeoutID = setTimeout(function() {
                clearTimeout(this.focusTimeoutID)
            }, 1)
        }, g = function(t) {
            clearTimeout(this.mouseTimeoutID), e(t.target).addClass(this.settings.hoverClass), o.call(this, t), e(t.target).is(":tabbable") && e("html").on("keydown.accessible-megamenu", e.proxy(p, t.target))
        }, b = function(t) {
            var s = this;
            e(t.target).removeClass(s.settings.hoverClass), s.mouseTimeoutID = setTimeout(function() {
                o.call(s, t, !0)
            }, 250), e(t.target).is(":tabbable") && e("html").off("keydown.accessible-megamenu")
        }, C = function(t) {
            var s = this.menu;
            t ? (e("html").off("mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu,  pointerup.outside-accessible-megamenu"), s.find("[aria-expanded]." + this.settings.panelClass).off("DOMAttrModified.accessible-megamenu")) : (e("html").on("mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu,  pointerup.outside-accessible-megamenu", e.proxy(c, this)), s.find("[aria-expanded=true]." + this.settings.panelClass).on("DOMAttrModified.accessible-megamenu", e.proxy(f, this)))
        }, {
            constructor: a,
            init: function() {
                var t = this.settings,
                    s = e(this.element),
                    a = s.children().first(),
                    n = a.children();
                this.start(t, s, a, n)
            },
            start: function(t, a, n, l) {
                var o = this;
                this.settings = t, this.menu = n, this.topnavitems = l, a.attr("role", "navigation"), n.addClass(t.menuClass), l.each(function(s, a) {
                    var n, l;
                    a = e(a), a.addClass(t.topNavItemClass), n = a.find(":tabbable:first"), l = a.children(":not(:tabbable):last"), i.call(o, n), l.length && (i.call(o, l), n.attr({
                        "aria-haspopup": !0,
                        "aria-controls": l.attr("id"),
                        "aria-expanded": !1
                    }), l.attr({
                        role: "group",
                        "aria-expanded": !1,
                        "aria-hidden": !0
                    }).addClass(t.panelClass).not("[aria-labelledby]").attr("aria-labelledby", n.attr("id")))
                }), this.panels = n.find("." + t.panelClass), n.on("focusin.accessible-megamenu", ":focusable, ." + t.panelClass, e.proxy(h, this)).on("focusout.accessible-megamenu", ":focusable, ." + t.panelClass, e.proxy(d, this)).on("keydown.accessible-megamenu", e.proxy(p, this)).on("mouseover.accessible-megamenu", e.proxy(g, this)).on("mouseout.accessible-megamenu", e.proxy(b, this)).on("mousedown.accessible-megamenu", e.proxy(m, this)), $ && n.on("touchstart.accessible-megamenu", e.proxy(u, this)), n.find("hr").attr("role", "separator"), e(s.activeElement).closest(n).length && e(s.activeElement).trigger("focusin.accessible-megamenu")
            },
            getDefaults: function() {
                return this._defaults
            },
            getOption: function(e) {
                return this.settings[e]
            },
            getAllOptions: function() {
                return this.settings
            },
            setOption: function(e, t, s) {
                this.settings[e] = t, s && this.init()
            }
        }
    }(), e.fn[l] = function(t) {
        return this.each(function() {
            e.data(this, "plugin_" + l) || e.data(this, "plugin_" + l, new e.fn[l].AccessibleMegaMenu(this, t))
        })
    }, e.fn[l].AccessibleMegaMenu = a, e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(s) {
                return !!e.data(s, t)
            }
        }) : function(t, s, a) {
            return !!e.data(t, a[3])
        },
        focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var s = e.attr(t, "tabindex"),
                a = isNaN(s);
            return (a || s >= 0) && i(t, !a)
        }
    })
}(jQuery, window, document), $(".main-menu").accessibleMegaMenu({
    uuidPrefix: "accessible-megamenu",
    menuClass: "nav-menu",
    topNavItemClass: "nav-item",
    panelClass: "sub-nav",
    panelGroupClass: "sub-nav-group",
    hoverClass: "hover",
    focusClass: "focus",
    openClass: "open"
}), $(document).ready(function(e) {
    $(".main-menu li").each(function(e, t) {
        $(this).children("div").length > 0 && ($(this).find("> a").append('<span class="indicator">+</span>'), $(this).children("a").click(function(e) {
            e.preventDefault()
        }))
    }), $(".main-menu .nav-item a").focus(function(e) {
        $(this).parent().children("div").length > 0 && $(document).innerWidth() > 940 && $(this).click()
    })
}), $(window).resize(function(e) {
    $(document).innerWidth() > 940 && ($(".main-menu .nav-item").each(function(e, t) {
        $(this).children("a").removeClass("sub-nav")
    }), $(".main-menu").show(), $(".main-menu").attr("style", ""))
}), window.onload = menu_toggle(), $(document).ready(function(e) {
    menu_re_position(), $(".closeMenu").on("click focus", function(e) {
        e.preventDefault();
        var t = $("#overflowMenu").width();
        $(this).parent("#overflowMenu").stop().animate({
            right: -t
        })
    }), $(".moreNav a").on("click focus", function(e) {
        e.preventDefault(), e.stopPropagation(), $("#overflowMenu").animate({
            right: "0px"
        })
    }), $(".wrapper").click(function(e) {
        var t = $("#overflowMenu").width();
        $("#overflowMenu").stop().animate({
            right: -t
        })
    }), $(".ofMenu ul li a").on("click focus", function(e) {
        $(this).parent().children(".sub-nav").length > 0 && (e.preventDefault(), $(".ofMenu ul li .sub-nav").stop().slideUp(), $(this).next(".sub-nav").stop().slideToggle())
    })
}), $(window).resize(function(e) {
    menu_re_position()
});