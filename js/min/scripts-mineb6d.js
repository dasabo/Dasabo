$(document).ready(function(){var e;(new HashTabber).run();var i=$(".accordion__data"),a=$(".accordion__link");if($(".accordion__link").click(function(){return $this=$(this),$target=$this.parent().next(),$link=$this,$target.hasClass("active")?($target.removeClass("active"),$link.removeClass("active")):(i.removeClass("active"),a.removeClass("active"),$target.addClass("active"),$link.addClass("active")),!1}),$(".tip").tipr({}),$("#contentNav").length){var t=new ScrollMagic.Controller,n=new ScrollMagic.Scene({triggerElement:"#contentNav",triggerHook:0,reverse:!0}).setPin("#contentNav").setClassToggle("#contentNav","active").addTo(t),r=new ScrollMagic.Controller({globalSceneOptions:{offset:-100,reverse:!0,triggerHook:"onLeave"}}),o;for(var l in scenes)if(scenes.hasOwnProperty(l)){var s=scenes[l];for(var c in s)s.hasOwnProperty(c)&&new ScrollMagic.Scene({triggerElement:"#"+c,triggerHook:0,duration:$("#"+c).outerHeight(!0)}).setClassToggle("#"+s[c],"active").addTo(r)}if($("body").hasClass("promo--on"))var m=100;else var m=60;r.scrollTo(function(e){TweenMax.to(window,1,{scrollTo:{y:e-m,autoKill:!0},ease:Cubic.easeInOut})}),document.querySelector("#contentNav").addEventListener("click",function(e){var i,a=e.target.getAttribute("href");null!==a&&a.length>0&&(e.preventDefault(),r.scrollTo(a),window.history&&window.history.pushState&&history.pushState("",document.title,a))})}var g=new ScrollMagic.Controller;if($(".animateme").each(function(){var e=new ScrollMagic.Scene({triggerElement:this,reverse:!1}).setClassToggle(this,"active").addTo(g)}),$("#security-anim").length){var p=$(".scanner-sec"),y=new TimelineMax({repeat:-1,repeatDelay:5});y.set(".svg--anim .security-anim circle, .svg--anim .security-anim polygon, .svg--anim .security-anim polyline, .svg--anim .security-anim line, .svg--anim .security-anim polygon, .svg--anim .security-anim path, .svg--anim .security-anim rect",{visibility:"visible"}),y.from(p,2,{y:-42,ease:Power3.easeInOut}).to(p,.5,{opacity:1,repeat:5,repeatDelay:0,yoyo:!0,ease:Power0.easeInOut},.5,"-=0.5").from(p,2,{y:0,ease:Power3.easeInOut,delay:1}).to(p,.5,{opacity:1,repeat:5,repeatDelay:0,yoyo:!0,ease:Power0.easeInOut},"-=0.5").to(p,2,{y:-20,ease:Power3.easeInOut}).to(p,2,{y:0,ease:Power3.easeInOut,delay:8}).to(p,2,{y:-42,ease:Power3.easeInOut})}if($("#reliability-anim").length){var v=$(".reliability-anim .star"),u=new TimelineMax({repeat:-1,repeatDelay:15});u.set(".reliability-anim circle, .reliability-anim polygon, .reliability-anim polyline, .reliability-anim line, .reliability-anim polygon, .reliability-anim path, .reliability-anim rect",{visibility:"visible"}),u.from(v,1,{rotation:-360,transformOrigin:"center center",ease:Linear.easeNone,repeat:6})}if($("#performance-anim").length){var f=new TimelineLite;tlAnimIconPerformance=new TimelineMax({repeat:-1}),f.set(".perf-pointer",{rotation:-95,transformOrigin:"4px 10px"}),tlAnimIconPerformance.set(".performance-anim circle, .performance-anim polygon, .performance-anim polyline, .performance-anim line, .performance-anim polygon, .performance-anim path, .performance-anim rect",{visibility:"visible"}),tlAnimIconPerformance.from(".perf-scale-front",2,{drawSVG:"100% 100%",ease:Power3.easeInOut}).to(".perf-pointer",2,{rotation:10,ease:Power3.easeInOut},"-=2").to(".perf-scale-front",.5,{opacity:0,ease:Power3.easeInOut},15).to(".perf-pointer",.5,{rotation:-90,ease:Power1.easeIn},"-=0.5")}if($("#piggybank_anim").length){var w=new TimelineLite;tlTailSetup=new TimelineLite,tlPigGroupSetup=new TimelineLite,tlAnimPiggy=new TimelineMax({repeat:-1,repeatDelay:7}),tlTailSetup.set(".tail",{transformOrigin:"0 100%"}),tlPigGroupSetup.set(".group",{y:10}),w.set(".svg--anim .piggybank_anim circle, .svg--anim .piggybank_anim polygon, .svg--anim .piggybank_anim polyline, .svg--anim .piggybank_anim line, .svg--anim .piggybank_anim polygon, .svg--anim .piggybank_anim path, .svg--anim .piggybank_anim rect",{visibility:"visible"}),tlAnimPiggy.from(".coin",.75,{opacity:1,y:-40}).to(".tail",.1,{rotation:10,ease:Power3.easeInOut}).to(".tail",.1,{rotation:0,ease:Power3.easeInOut}).to(".tail",.1,{rotation:10,ease:Power3.easeInOut}).to(".tail",.1,{rotation:0,ease:Power3.easeInOut}).to(".tail",.1,{rotation:10,ease:Power3.easeInOut}).to(".tail",.1,{rotation:0,ease:Power3.easeInOut})}});