$(function(){$.fn.form=function(n){var i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"}[Modernizr.prefixed("transition")],t=$(this),e=0,s=t.find(".questions > li"),o=s.eq(e).find("input"),r=t.find(".progress"),a=t.find(".next"),d=t.find(".number-current"),l=t.find(".error-message"),u=$.extend({validate:function(n){return""!==n.val()},error:function(n){return n.validationMessage?n.validationMessage:"Invalid Input"},submit:function(){}},n),f=function(){a.addClass("show")},c=function(n){return n.preventDefault(),u.validate(o)?(e+=1,r.css("width","p%".replace("p",e*(100/s.length))),l.removeClass("show"),e===s.length?(a.off("click"),u.submit(this)):(t.addClass("show-next"),s.eq(e-1).removeClass("current"),void(o=s.eq(e).addClass("current").find("input").focus()))):!l.html(u.error(o)).addClass("show")},h=function(){t.removeClass("show-next"),d.html(e)};t.find(".number-total").html(s.length),o.on("focus",f),a.on("click",c),r.on(i,h)}});