/*!
 * jquery-dice-menu v1.0.0 (https://github.com/ssmak/jquery-dice-menu)
 * Author: Steve Mak (https://github.com/ssmak)
 * Licensed under the MIT license
 */

(function(a){a(function(){a(".dice-menu li").click(function(){if(a(this).find("span").attr("class")==a(this).parent().find("li:first-child > span").attr("class"))0==a(this).parent().find("li:nth-child(2)").css("opacity")?a(this).parent().find("li:nth-child(1n+2) > span").each(function(){a(this).parent().animate({opacity:0.8},150)}):a(this).parent().find("li:nth-child(1n+2) > span").each(function(){a(this).parent().animate({opacity:0},150)});else{var b=a(this).find("span").attr("href"),c=a(this).find("span").attr("target");
/^http|https/.test(b)?"_blank"==c?window.open(b):self.location.href=b:a("html, body").animate({scrollTop:a(b).offset().top},{duration:"slow",easing:"easeInOutCubic"});a(this).parent().find("li:nth-child(1n+2) > span").each(function(){a(this).parent().animate({opacity:0},150)})}});a(".dice-menu li").mouseenter(function(){a(this).find("span").attr("class")!=a(this).parent().find("li:first-child > span").attr("class")&&0.8==a(this).css("opacity")&&(a(this).parent().find("li:nth-child(1n+2) > span").each(function(){a(this).parent().animate({opacity:0.8},
150)}),a(this).animate({opacity:1},150))});a(".dice-menu li").mouseout(function(){a(this).find("span").attr("class")!=a(this).parent().find("li:first-child > span").attr("class")&&1==a(this).css("opacity")&&a(this).animate({opacity:0.8},150)})})})(jQuery);
