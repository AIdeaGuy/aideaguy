/* Plays the wordmark once; reduced-motion = static final state. Header copy is static on repeat visits in a session; the big one always plays. */
(function(){var r=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches,seen=false;
try{seen=sessionStorage.getItem("ag.wm")==="1"}catch(e){}
window.initWm=function(){document.querySelectorAll(".wm:not(.go):not(.still)").forEach(function(w){
 if(r||(seen&&!w.classList.contains("big")))w.classList.add("still");else w.classList.add("go")});
 try{sessionStorage.setItem("ag.wm","1")}catch(e){}};
window.replayWm=function(){document.querySelectorAll(".wm").forEach(function(w){w.classList.remove("go","still");void w.offsetWidth;w.classList.add("go")})};
window.initWm()})();
