/*
 * csnav v1.1.1
 * 
 * Fork: https://github.com/zhoufengjob/SuiNav
 * 
 * Date: 2019-08-18 - 2021-03-12
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

})(window);

$(function () {
    $.nrnav = csnav(".csnav");
    $('.MenuToggle').click(function () {
        csnav.toggle($.nrnav);
    });
});