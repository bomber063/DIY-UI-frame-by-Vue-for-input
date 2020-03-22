!function(s){
    var t,
        l='<svg><symbol id="i-loading" viewBox="0 0 1024 1024"><path d="M1016.501677 568.154839S1073.845677 104.778323 529.209806 43.371355c0 0 453.400774 171.998968 337.358452 487.291871 0 0 26.557935 114.093419 149.933419 37.491613zM193.436903 910.864516s377.55871 274.696258 695.130839-171.965935c0 0-370.192516 313.277935-589.757936 58.96258 0.099097 0-112.540903-32.074323-105.372903 113.003355zM326.292645 30.620903S-113.763097 186.66529 74.983226 701.208774c0 0-49.052903-482.469161 284.870193-519.729548 0 0 90.145032-74.752-33.560774-150.858323z"  ></path></symbol><symbol id="i-info" viewBox="0 0 1024 1024"><path d="M512 85.333333C277.333333 85.333333 85.333333 277.333333 85.333333 512s192 426.666667 426.666667 426.666667c234.666667 0 426.666667-192 426.666667-426.666667S746.666667 85.333333 512 85.333333zM554.666667 725.333333l-85.333333 0 0-256 85.333333 0L554.666667 725.333333zM554.666667 384l-85.333333 0L469.333333 298.666667l85.333333 0L554.666667 384z"  ></path></symbol><symbol id="i-error" viewBox="0 0 1024 1024"><path d="M512 85.333333C276.48 85.333333 85.333333 276.266667 85.333333 512s191.146667 426.666667 426.666667 426.666667 426.666667-190.933333 426.666667-426.666667S747.52 85.333333 512 85.333333z m42.666667 640h-85.333334v-85.333333h85.333334v85.333333z m0-170.666666h-85.333334V298.666667h85.333334v256z"  ></path></symbol><symbol id="i-right" viewBox="0 0 1024 1024"><path d="M626.176 524.8l-365.56800001-379.904c-13.824-13.824-13.824-36.352 1e-8-50.176s35.84-13.824 49.664 0l400.896 404.992c13.824 13.824 13.824 36.352 0 50.176l-400.896 404.992c-13.824 13.824-35.84 13.824-49.664 0s-13.824-36.352-1e-8-50.176L626.176 524.8z"  ></path></symbol><symbol id="i-left" viewBox="0 0 1024 1024"><path d="M397.824 499.2l365.568 379.904c13.824 13.824 13.824 36.352 0 50.176s-35.84 13.824-49.664 0l-400.896-404.992c-13.824-13.824-13.824-36.352 0-50.176l400.896-404.992c13.824-13.824 35.84-13.824 49.664 0s13.824 36.352 0 50.176L397.824 499.2z"  ></path></symbol><symbol id="i-thumbs-up" viewBox="0 0 1024 1024"><path d="M840.787 409.371H631.021c81.271-300.918-56.01-316.294-56.01-316.294-58.206 0-46.126 46.126-50.518 53.814 0 147.164-155.951 262.48-155.951 262.48v417.334c0 41.184 56.01 56.01 77.975 56.01h315.197c29.653 0 53.813-77.976 53.813-77.976 77.976-265.774 77.976-344.848 77.976-344.848 0-54.912-52.716-50.52-52.716-50.52zM282.467 409.509H156.855c-25.946 0-26.358 25.534-26.358 25.534l25.946 420.902c0 26.77 26.77 26.77 26.77 26.77h108.726c22.651 0 22.445-17.709 22.445-17.709V441.427c0-32.33-31.917-31.918-31.917-31.918z"  ></path></symbol><symbol id="i-down" viewBox="0 0 1024 1024"><path d="M904 332c0-8.189-3.124-16.379-9.372-22.628-12.497-12.496-32.759-12.496-45.256 0L512 646.745 174.628 309.372c-12.497-12.496-32.758-12.496-45.255 0-12.497 12.498-12.497 32.758 0 45.256l360 360c12.497 12.496 32.758 12.496 45.255 0l360-360C900.876 348.379 904 340.189 904 332z"  ></path></symbol><symbol id="i-download" viewBox="0 0 1024 1024"><path d="M816.8 742.8h-90.5c-13.1 0-23.8-10.7-23.8-23.8s10.7-23.8 23.8-23.8h90.5c27.8 0 54.3-11 74.1-30l16.5-21.3c3-4.9 5.6-10.1 7.8-15.4 8.5-20.4 8.9-37.5 9.2-47.8 0.4-17.3 1.4-57.7-24.6-94.1-35-48.6-105.8-55.2-126.7-56-12.5-0.5-22.6-10.6-23-23.1-0.2-2.1 0-4.3 0.5-6.4 4.3-17.5 6.5-35.8 6.5-54.4 0-113.9-84.5-206.5-188.4-206.5s-188.4 92.6-188.4 206.3c0 4.4 0.1 8.6 0.4 12.9 0.4 8.2-3.4 16.1-10.1 20.9-6.8 4.7-15.5 5.6-23.1 2.3-22.9-9.9-47.3-14.9-72.6-14.9-96.8 0-175.5 74.9-175.5 166.9 0 39.7 8.7 76 25.1 105.1l18.9 22.4c20.5 21.4 47.9 33.2 77.3 33.2h95.9c13.1 0 23.8 10.7 23.8 23.8s-10.7 23.8-23.8 23.8h-95.9c-42.5 0-82.1-17-111.7-47.9l-3.2-3.5-19.2-22.9c-0.9-1-1.6-2.2-2.3-3.3-21.2-36.6-32.5-81.8-32.5-130.6C51.9 416.3 152 320.1 275 320.1c20 0 39.6 2.5 58.5 7.4 9-131.2 111.1-234.9 235.3-234.9 130.1 0 236 114 236 254.1 0 13.1-0.9 26-2.7 38.8 40.3 5.6 100 22.6 136.3 73.5 35.3 49.4 34 102.8 33.5 123-0.3 11.8-0.9 36.3-12.9 64.9-1.7 4.1-3.5 8-5.5 11.9-0.5 2.1-1.3 4.1-2.5 6-27.8 48.2-79.2 78-134.2 78z"  ></path><path d="M520.6 936.5c-13.1 0-23.8-10.7-23.8-23.8V542.1c0-13.1 10.7-23.8 23.8-23.8 13.1 0 23.8 10.7 23.8 23.8v370.6c0 13.2-10.7 23.8-23.8 23.8z"  ></path><path d="M520.6 951.5c-5.7 0-11.3-2-15.9-6.1L371.9 826.1c-9.8-8.8-10.6-23.8-1.8-33.6 8.8-9.8 23.8-10.6 33.6-1.8l132.8 119.2c9.8 8.8 10.6 23.8 1.8 33.6-4.7 5.3-11.2 8-17.7 8z"  ></path><path d="M520.6 951.5c-6.5 0-13-2.7-17.7-7.9-8.8-9.8-8-24.8 1.8-33.6l132.8-119.2c9.8-8.8 24.8-8 33.6 1.8s8 24.8-1.8 33.6L536.5 945.4c-4.5 4-10.2 6.1-15.9 6.1z"  ></path></symbol><symbol id="i-setting" viewBox="0 0 1024 1024"><path d="M881 512c0-52.4 32.9-96.8 79-114.5-11-43.2-28-83.9-50.2-121.3C864.6 296.3 810 288.1 773 251c-37-37-45.2-91.7-25.1-136.8C710.4 92 669.7 75 626.5 64c-17.8 46.1-62.2 79-114.5 79-52.4 0-96.8-32.9-114.5-79-43.2 11-83.9 28-121.3 50.2 20.1 45.2 11.9 99.8-25.1 136.8-37 37-91.7 45.2-136.8 25.2C92 313.6 75 354.3 64 397.5c46.1 17.8 79 62.2 79 114.5 0 52.4-32.9 96.8-79 114.5 11 43.2 28 83.9 50.2 121.3C159.4 727.7 214 735.9 251 773c37 37 45.2 91.7 25.1 136.8C313.6 932 354.3 949 397.5 960c17.8-46.1 62.2-79 114.5-79 52.4 0 96.8 32.9 114.5 79 43.2-11 83.9-28 121.3-50.2-20.1-45.2-11.9-99.8 25.1-136.8 37-37 91.7-45.2 136.8-25.2C932 710.4 949 669.7 960 626.5c-46.1-17.7-79-62.1-79-114.5zM512 635c-67.9 0-123-55.1-123-123s55.1-123 123-123 123 55.1 123 123-55.1 123-123 123z"  ></path></symbol></svg>',
        e=(t=document.getElementsByTagName("script"))[t.length-1].getAttribute("data-injectcss");
    if(e&&!s.__iconfont__svg__cssinject__){
        s.__iconfont__svg__cssinject__=!0;
    try{document.write("<style>.svgfont {" +
        "display: inline-block;" +
        "width: 1em;" +
        "height: 1em;" +
        "fill: currentColor;" +
        "vertical-align: -0.1em;" +
        "font-size:16px;}</style>")}
        catch(t){console&&console.log(t)}}
    !function(t){
        if(document.addEventListener)
            if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(t,0);
            else{var e=function(){document.removeEventListener("DOMContentLoaded",e,!1),
                t()
            };
            document.addEventListener("DOMContentLoaded",e,!1)}
            else document.attachEvent&&(
                o=t,i=s.document,n=!1,
                    (l=function(){
                        try{
                            i.documentElement.doScroll("left")}
                            catch(t){
                            return void setTimeout(l,50)}c()})(),
                    i.onreadystatechange=function(){
                    "complete"==i.readyState&&(i.onreadystatechange=null,c())});
            function c(){n||(n=!0,o())}var o,i,n,l
    }
    (function(){
        var t,e,c,o,i,n;
        (t=document.createElement("div")).innerHTML=l,
            l=null,
        (e=t.getElementsByTagName("svg")[0])&&(e.setAttribute("aria-hidden","true"),
            e.style.position="absolute",e.style.width=0,e.style.height=0,
            e.style.overflow="hidden",
            c=e,(o=document.body).firstChild?(i=c,(n=o.firstChild).parentNode.insertBefore(i,n)):o.appendChild(c))})}(window);