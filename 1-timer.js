import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as l,i as m}from"./assets/vendor-BbbuE1sJ.js";let s=null;const e=document.querySelector("button[data-start]"),a=document.querySelector("#datetime-picker");e.disabled=!0;function f(t){const i=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),d=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:c,minutes:u,seconds:d}}function h(t){return t.toString().padStart(2,"0")}const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(t[0].getTime()<=Date.now()){m.show({message:"&#x2716; Please choose a date in the future",position:"topRight",color:"#EF4040",messageColor:"#fff"}),e.disabled=!0;return}e.disabled=!1,e.classList.add("button-normal"),s=t[0]}};e.addEventListener("click",b);function b(){e.disabled=!0,a.disabled=!0;const t=setInterval(()=>{const o=s.getTime()-Date.now();if(o<=0){a.disabled=!1,clearInterval(t);return}const n=f(o);Object.keys(n).forEach(r=>{document.querySelector(`.value[data-${r}]`).textContent=h(n[r])})},1e3)}l("#datetime-picker",p);
//# sourceMappingURL=1-timer.js.map