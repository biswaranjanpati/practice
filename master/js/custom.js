function _getCookie(e){for(var t=e+"=",i=t.length,o=document.cookie.length,n=0;o>n;){var a=n+i;if(document.cookie.substring(n,a)==t)return _getCookieVal(a);if(n=document.cookie.indexOf(" ",n)+1,0==n)break}return null}function _deleteCookie(e,t,i){_getCookie(e)&&(document.cookie=e+"="+(t?"; path="+t:"")+(i?"; domain="+i:"")+"; expires=Thu, 01-Jan-70 00:00:01 GMT")}function _setCookie(e,t,i,o,n,a){var s=!0;""!=o&&void 0!=o&&(s=validUrl(o)),"string"==jQuery.type(e)&&s&&(document.cookie=e+"="+escape(t)+(i?"; expires="+i.toGMTString():"")+(o?"; path="+o:"")+(n?"; domain="+n:"")+(a?"; secure":""))}function _getCookieVal(e){var t=document.cookie.indexOf(";",e);return-1==t&&(t=document.cookie.length),unescape(document.cookie.substring(e,t))}function addFocusClass(){$("#accessibility").find("li").each(function(e,t){$(this).children("a").focus(function(e){$(this).parent("li").addClass("mFocus")})}),$("#accessibilityMenu>li>a").focusin(function(e){$("#accessibilityMenu").find("li").each(function(e,t){$(this).removeClass("mFocus")}),$(this).addClass("mFocus")})}$(document).ready(function(e){function t(e){"increase"==e?18>i&&(i=parseInt(i)+2):"decrease"==e?i>10&&(i=parseInt(i)-2):i=14,_setCookie("fontSize",i),jQuery("body").css("font-size",i+"px")}if($("a[href*=Skip").click(function(e){e.preventDefault(),$target=$(this).attr("href"),$targetCountTop=$($target).offset().top,$("html, body").animate({scrollTop:$targetCountTop+"px"},500,function(){})}),$("#flexSlider").flexslider({animation:"slide",controlNav:!0}),$("#footerScrollbar").flexslider({animation:"slide",animationLoop:!1,controlNav:!1,itemWidth:200,itemMargin:10}),$(".fancybox").fancybox(),$("#infotab").easyResponsiveTabs({type:"default",width:"auto",fit:!0,tabidentify:"hor_1",activate:function(e){var t=$(this),i=$("#nested-tabInfo"),o=$("span",i);o.text(t.text()),i.show()}}),$("#galleryTab").easyResponsiveTabs({type:"default",width:"auto",fit:!0,tabidentify:"hor_1",activate:function(e){var t=$(this),i=$("#nested-tabInfo"),o=$("span",i);o.text(t.text()),i.show()}}),$("img.svg").each(function(){var e=$(this),t=e.attr("id"),i=e.attr("class"),o=e.attr("src");$.get(o,function(o){var n=$(o).find("svg");"undefined"!=typeof t&&(n=n.attr("id",t)),"undefined"!=typeof i&&(n=n.attr("class",i+" replaced-svg")),n=n.removeAttr("xmlns:a"),e.replaceWith(n)},"xml")}),$(".textSizing ul li").eq(0).click(function(e){t("increase")}),$(".textSizing ul li").eq(1).click(function(e){t()}),$(".textSizing ul li").eq(2).click(function(e){t("decrease")}),addFocusClass(),null!=_getCookie("fontSize"))var i=_getCookie("fontSize");else var i=14;jQuery("body").css("font-size",i+"px")});