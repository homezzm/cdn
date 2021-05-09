/*
 * Fork: https://github.com/zhoufengjob/SuiNav
 * 
 * Date: 2019-08-18 - 2021-04-27
 * 
 */

(function (window) {

    var csnav = function (se) { return new csnav.fn.init(se); };

    csnav.fn = csnav.prototype = {
        init: function (se) {
            var that = this;
            this.ele = $(se);
            this.eventCount = 0;
            this.isHiding = false;

            if (that.ele.hasClass('horizontal')) {
                that.ele.find('li').hover(function () {
                    $(this).children('ul').show();
                }, function () {
                    $(this).children('ul').hide();
                });
            } else {
                that.ele.find('li').click(function () {
                    if (that.eventCount != 0) {
                        if ($(this).parent().parent().parent().hasClass('csnav')) {
                            that.eventCount = 0;
                        }
                        return;
                    }
                    if ($(this).children('ul').is(":hidden"))
                        $(this).children('ul').show();
                    else {
                        $(this).find('ul').hide();
                    }
                    that.eventCount++;
                    if ($(this).parent().parent().parent().hasClass('csnav')) {
                        that.eventCount = 0;
                    }
                });
            }
            return this;
        }
    };

    csnav.show = function (that) {
        if (!that.isHiding) {
            $(document.body).append('<div class="csnav slide-csnav"></div><div class="csnav csnav-mask"></div>');
            $('.slide-csnav').html(that.ele.html()).find('li').click(function () {
                if (that.eventCount != 0) {
                    if ($(this).parent().parent().parent().hasClass('csnav')) {
                        that.eventCount = 0;
                    }
                    return;
                }
                if ($(this).children('ul').is(":hidden"))
                    $(this).children('ul').show();
                else {
                    $(this).find('ul').hide();
                }
                that.eventCount++;
                if ($(this).parent().parent().parent().hasClass('csnav')) {
                    that.eventCount = 0;
                }
            });
            $('.csnav-mask').click(function () {
                csnav.hide(that);
            });
            setTimeout(function () {
                $('.slide-csnav').toggleClass('active');
                $('.csnav-mask').toggleClass('active');
            }, 20);
        }
    };

    csnav.hide = function (that) {
        if (!that.isHiding) {
            that.isHiding = true;
            $('.slide-csnav').find('li').unbind();
            $('.slide-csnav').removeClass('active');
            $('.csnav-mask').removeClass('active');
            setTimeout(function () {
                $('.slide-csnav').remove();
                $('.csnav-mask').remove();
                that.isHiding = false;
            }, 600);
        }
    };

    csnav.toggle = function (that) {
        $('.slide-csnav').length > 0 ? csnav.hide(that) : csnav.show(that)
    }

    csnav.fn.init.prototype = csnav.fn;

    window.csnav = csnav;

    csnav.css = `.csnav{position:relative;color:#333;z-index:10}.csnav a{color:#333;text-decoration:none}.csnav a:active,.csnav a:hover{color:#333;text-decoration:none}.csnav a:focus{outline:0;text-decoration:none}@media (max-width:768px){.csnav{display:none}}.csnav .csnav-wrapper-fluid>ul,.csnav .csnav-wrapper>ul{padding-left:0;margin-bottom:15px}.csnav .csnav-wrapper-fluid>ul.float-right,.csnav .csnav-wrapper>ul.float-right{float:none!important}.csnav ul li a{width:100%;height:100%;white-space:nowrap;display:inline-block}.csnav ul li a:hover{color:orange;background-color:#f5f5f5}.csnav ul{cursor:pointer;list-style:none;padding-left:15px}.csnav ul>li{line-height:45px;position:relative}.csnav ul>li.divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.csnav ul>li>a{padding:0 15px}.csnav ul>li span.indicator{width:15px;float:right;margin-top:10px;text-align:right}.csnav li>ul{display:none}.csnav li>ul>li{float:none;position:relative}.csnav li>ul>li:hover{background-color:#fff}.csnav li.active>ul{display:block}@media (max-width:768px){.hide-in-mobile{display:none}}.show-in-mobile{display:none!important}@media (max-width:768px){.show-in-mobile{display:block!important}}.csnav .show-in-horizontal{display:none}.csnav.slide-csnav{position:fixed;top:0;left:0;z-index:9999;background-color:#fff;width:100%;height:100%;overflow-y:auto;box-shadow:none;-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);-webkit-transition:-webkit-transform .4s,box-shadow .4s;transition:transform .4s,box-shadow .4s;max-width:260px}@media (max-width:768px){.csnav.slide-csnav{display:block}}.csnav.slide-csnav.active{box-shadow:0 2px 8px rgba(0,0,0,.8);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}.csnav.csnav-mask{display:block;position:fixed;top:-50%;left:-50%;z-index:9090;width:200%;height:200%;background-color:rgba(0,0,0,.8);visibility:hidden;opacity:0;-webkit-transition:opacity .4s,visibility .4s;transition:opacity .4s,visibility .4s}.csnav.csnav-mask.active{visibility:visible;opacity:.6}.csnav.horizontal{width:100%;clear:both;z-index:999;min-height:48px;border-top:3px solid orange;box-shadow:0 0 8px 0 rgba(0,0,0,.1),0 1px rgba(0,0,0,.1)}.csnav.horizontal ul{padding:0!important;background-color:#fff;margin-bottom:0}.csnav.horizontal ul>li{line-height:45px}.csnav.horizontal .csnav-wrapper{margin:0 auto;max-width:99%}.csnav.horizontal .csnav-wrapper-fluid>ul,.csnav.horizontal .csnav-wrapper>ul{position:relative;float:left;list-style:none;background-color:transparent}.csnav.horizontal .csnav-wrapper-fluid>ul>li,.csnav.horizontal .csnav-wrapper>ul>li{position:relative;float:left;cursor:pointer;border-bottom:none;min-width:initial}.csnav.horizontal .csnav-wrapper-fluid>ul>li>a,.csnav.horizontal .csnav-wrapper>ul>li>a{padding:0 15px}.csnav.horizontal .csnav-wrapper-fluid>ul>li>ul,.csnav.horizontal .csnav-wrapper>ul>li>ul{float:none;position:absolute;left:0;border:1px solid #e5e5e5}.csnav.horizontal .csnav-wrapper-fluid>ul>li>ul>li,.csnav.horizontal .csnav-wrapper>ul>li>ul>li{float:none}.csnav.horizontal .csnav-wrapper-fluid>ul>li>ul>li ul,.csnav.horizontal .csnav-wrapper>ul>li>ul>li ul{position:absolute;left:100%;top:0;border:1px solid #e5e5e5}.csnav.horizontal .csnav-wrapper-fluid>ul.float-right,.csnav.horizontal .csnav-wrapper>ul.float-right{float:right!important}.csnav.horizontal .csnav-wrapper-fluid>ul.float-right>li>ul,.csnav.horizontal .csnav-wrapper>ul.float-right>li>ul{right:0;left:auto}.csnav.horizontal .csnav-wrapper-fluid>ul.float-right>li>ul>li ul,.csnav.horizontal .csnav-wrapper>ul.float-right>li>ul>li ul{left:-101%}.csnav.horizontal .show-in-horizontal{display:block!important}.csnav.horizontal .hide-in-horizontal{display:none!important}`;

    csnav.addStyle = function (css) {
        var s = document.createElement('style');
        s.innerHTML = css;
        document.head.appendChild(s);
    }
    csnav.addStyle(csnav.css);

})(window);

$(function () {
    $.nrnav = csnav(".csnav");
    $('.MenuToggle').click(function () {
        csnav.toggle($.nrnav);
    });
});