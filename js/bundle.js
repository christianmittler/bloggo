!function(){"use strict";var e=document.querySelector(".menu-toggle"),t=document.querySelector(".icon-menu"),n=document.querySelector(".site-menu"),o=document.querySelector(".social-menu");e&&e.addEventListener("click",function(){n.classList.toggle("collapsed"),o.classList.toggle("collapsed"),t.classList.toggle("icon-menu"),t.classList.toggle("icon-close")});for(var s=document.querySelectorAll(".unhide"),c=0;c<s.length;c+=1)!function(e){var t=s[e];t.addEventListener("click",function(){var e=document.getElementById(t.dataset.unhide);e.classList.contains("hidden")?(e.classList.remove("hidden"),t.dataset.reshow=t.innerText,t.innerText=t.dataset.rehide):(e.classList.add("hidden"),t.innerText=t.dataset.reshow)})}(c);if(!navigator||"1"!==navigator.doNotTrack){var i=new XMLHttpRequest;i.open("GET","https://node.vero.site/l/"+encodeURIComponent(window.location),!0),i.send()}}();
//# sourceMappingURL=bundle.js.map
