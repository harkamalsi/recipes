(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(55)},38:function(e,t,a){},46:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),l=a.n(r),i=(a(35),a(58)),o=a(60),s=a(59),m=a(6),u=a.n(m),p=a(9),h=a(10),d=a(11),C=a(15),f=a(12),v=a(16),E=(a(38),function(e){return c.a.createElement("form",{onSubmit:e.getRecipe,style:{marginBottom:"2rem"}},c.a.createElement("input",{className:"form__input",type:"text",name:"recipeName"}),c.a.createElement("button",{className:"form__button"},"Search"))}),g=a(28),w=a.n(g),H=a(57),k=function(e){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},null!==e.recipes&&e.recipes.slice(0,e.count).map(function(e){return c.a.createElement("div",{key:e.title,className:"col-md-4",style:{marginBottom:"2rem"}},c.a.createElement("div",{className:"recipes__box"},c.a.createElement(w.a,null,c.a.createElement("img",{className:"recipes__box-img",src:e.image_url,alt:e.title})),c.a.createElement("div",{className:"recipe__text"},c.a.createElement("h5",{className:"recipes__title"},e.title.length<20?"".concat(e.title):"".concat(e.title.substring(0,25),"...")),c.a.createElement("p",{className:"recipes__subtitle"},"Publisher: ",c.a.createElement("span",null,e.publisher))),c.a.createElement("button",{className:"recipe_buttons"},c.a.createElement(H.a,{to:{pathname:"/recipe/".concat(e.recipe_id),state:{recipe:e.title}}},"View Recipe"))))})))},b=(a(46),function(){return c.a.createElement("div",{className:"svgLoader"},c.a.createElement("svg",{id:"logo",width:"1100",height:"150",viewBox:"0 0 1040 104",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M52.936 102L29.032 60.96H13.192V102H0.0880127V1.632H32.488C40.072 1.632 46.456 2.928 51.64 5.52C56.92 8.112 60.856 11.616 63.448 16.032C66.04 20.448 67.336 25.488 67.336 31.152C67.336 38.064 65.32 44.16 61.288 49.44C57.352 54.72 51.4 58.224 43.432 59.952L68.632 102H52.936ZM13.192 50.448H32.488C39.592 50.448 44.92 48.72 48.472 45.264C52.024 41.712 53.8 37.008 53.8 31.152C53.8 25.104 52.072 20.4 48.616 17.04C45.16 13.68 39.784 12 32.488 12H13.192V50.448Z",fill:"white"}),c.a.createElement("path",{d:"M100.801 11.856V46.272H137.377V56.352H100.801V91.632H141.697V102H87.6974V1.488H141.697V11.856H100.801Z",fill:"white"}),c.a.createElement("path",{d:"M156.63 51.744C156.63 41.952 158.838 33.168 163.254 25.392C167.67 17.52 173.67 11.376 181.254 6.96C188.934 2.544 197.43 0.335999 206.742 0.335999C217.686 0.335999 227.238 2.976 235.398 8.256C243.558 13.536 249.51 21.024 253.254 30.72H237.558C234.774 24.864 230.742 20.352 225.462 17.184C220.278 13.92 214.038 12.288 206.742 12.288C199.734 12.288 193.446 13.92 187.878 17.184C182.31 20.352 177.942 24.96 174.774 31.008C171.606 36.96 170.022 43.872 170.022 51.744C170.022 59.616 171.606 66.528 174.774 72.48C177.942 78.432 182.31 83.04 187.878 86.304C193.446 89.472 199.734 91.056 206.742 91.056C214.038 91.056 220.278 89.472 225.462 86.304C230.742 83.136 234.774 78.624 237.558 72.768H253.254C249.51 82.368 243.558 89.808 235.398 95.088C227.238 100.272 217.686 102.864 206.742 102.864C197.43 102.864 188.934 100.704 181.254 96.384C173.67 91.968 167.67 85.872 163.254 78.096C158.838 70.32 156.63 61.536 156.63 51.744Z",fill:"white"}),c.a.createElement("path",{d:"M285.864 1.632V102H272.76V1.632H285.864Z",fill:"white"}),c.a.createElement("path",{d:"M375.301 31.008C375.301 39.36 372.421 46.32 366.661 51.888C360.997 57.36 352.309 60.096 340.597 60.096H321.301V102H308.197V1.632H340.597C351.925 1.632 360.517 4.368 366.373 9.84C372.325 15.312 375.301 22.368 375.301 31.008ZM340.597 49.728C347.797 49.728 353.125 48.096 356.581 44.832C360.133 41.472 361.909 36.864 361.909 31.008C361.909 24.96 360.181 20.304 356.725 17.04C353.269 13.68 347.893 12 340.597 12H321.301V49.728H340.597Z",fill:"white"}),c.a.createElement("path",{d:"M404.692 11.856V46.272H441.268V56.352H404.692V91.632H445.588V102H391.588V1.488H445.588V11.856H404.692Z",fill:"white"}),c.a.createElement("path",{d:"M540.131 103.008C533.507 103.008 527.555 101.856 522.275 99.552C517.091 97.152 513.011 93.888 510.035 89.76C507.059 85.536 505.523 80.688 505.427 75.216H519.395C519.875 80.016 521.843 84.096 525.299 87.456C528.755 90.72 533.699 92.352 540.131 92.352C546.275 92.352 551.171 90.768 554.819 87.6C558.467 84.336 560.291 80.208 560.291 75.216C560.291 71.376 559.235 68.256 557.123 65.856C555.011 63.456 552.371 61.632 549.203 60.384C546.035 59.136 541.763 57.792 536.387 56.352C529.763 54.624 524.435 52.896 520.403 51.168C516.467 49.44 513.059 46.752 510.179 43.104C507.395 39.36 506.003 34.368 506.003 28.128C506.003 22.656 507.395 17.808 510.179 13.584C512.963 9.36 516.851 6.09599 521.843 3.792C526.931 1.488 532.739 0.335999 539.267 0.335999C548.675 0.335999 556.355 2.688 562.307 7.392C568.355 12.096 571.763 18.336 572.531 26.112H558.131C557.651 21.984 555.635 18.48 552.083 15.6C548.627 12.624 543.923 11.136 537.971 11.136C532.499 11.136 528.035 12.576 524.579 15.456C521.123 18.336 519.395 22.416 519.395 27.696C519.395 31.344 520.403 34.32 522.419 36.624C524.531 38.928 527.075 40.704 530.051 41.952C533.123 43.104 537.395 44.448 542.867 45.984C549.491 47.808 554.819 49.632 558.851 51.456C562.883 53.184 566.339 55.92 569.219 59.664C572.099 63.312 573.539 68.304 573.539 74.64C573.539 79.536 572.243 84.144 569.651 88.464C567.059 92.784 563.219 96.288 558.131 98.976C553.043 101.664 547.043 103.008 540.131 103.008Z",fill:"white"}),c.a.createElement("path",{d:"M605.926 11.856V46.272H642.502V56.352H605.926V91.632H646.822V102H592.822V1.488H646.822V11.856H605.926Z",fill:"white"}),c.a.createElement("path",{d:"M725.979 79.68H682.203L674.138 102H660.315L696.602 2.208H711.722L747.867 102H734.042L725.979 79.68ZM722.378 69.456L704.091 18.336L685.802 69.456H722.378Z",fill:"white"}),c.a.createElement("path",{d:"M816.53 102L792.626 60.96H776.786V102H763.682V1.632H796.082C803.666 1.632 810.05 2.928 815.234 5.52C820.514 8.112 824.45 11.616 827.042 16.032C829.634 20.448 830.93 25.488 830.93 31.152C830.93 38.064 828.914 44.16 824.882 49.44C820.946 54.72 814.994 58.224 807.026 59.952L832.226 102H816.53ZM776.786 50.448H796.082C803.186 50.448 808.514 48.72 812.066 45.264C815.618 41.712 817.394 37.008 817.394 31.152C817.394 25.104 815.666 20.4 812.21 17.04C808.754 13.68 803.378 12 796.082 12H776.786V50.448Z",fill:"white"}),c.a.createElement("path",{d:"M846.395 51.744C846.395 41.952 848.603 33.168 853.019 25.392C857.435 17.52 863.435 11.376 871.019 6.96C878.699 2.544 887.195 0.335999 896.507 0.335999C907.451 0.335999 917.003 2.976 925.163 8.256C933.323 13.536 939.275 21.024 943.019 30.72H927.323C924.539 24.864 920.507 20.352 915.227 17.184C910.043 13.92 903.803 12.288 896.507 12.288C889.499 12.288 883.211 13.92 877.643 17.184C872.075 20.352 867.707 24.96 864.539 31.008C861.371 36.96 859.787 43.872 859.787 51.744C859.787 59.616 861.371 66.528 864.539 72.48C867.707 78.432 872.075 83.04 877.643 86.304C883.211 89.472 889.499 91.056 896.507 91.056C903.803 91.056 910.043 89.472 915.227 86.304C920.507 83.136 924.539 78.624 927.323 72.768H943.019C939.275 82.368 933.323 89.808 925.163 95.088C917.003 100.272 907.451 102.864 896.507 102.864C887.195 102.864 878.699 100.704 871.019 96.384C863.435 91.968 857.435 85.872 853.019 78.096C848.603 70.32 846.395 61.536 846.395 51.744Z",fill:"white"}),c.a.createElement("path",{d:"M1039.85 1.632V102H1026.75V56.208H975.63V102H962.526V1.632H975.63V45.984H1026.75V1.632H1039.85Z",fill:"white"})))}),N=a(4),V="08ee1b4613c342c86f1bf5d398502cff",y=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(C.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).state={recipes:[],count:5},a.getRecipe=function(){var e=Object(p.a)(u.a.mark(function e(t){var n,c,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.elements.recipeName.value,t.preventDefault(),e.next=4,fetch("https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=".concat(V,"&q=").concat(n,"&count=").concat(a.state.count));case 4:return c=e.sent,e.next=7,c.json();case 7:r=e.sent,console.log(r),a.setState({recipes:r.recipes});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.componentDidMount=function(e){var t=localStorage.getItem("recipes"),n=JSON.parse(t);a.setState({recipes:n})},a.componentDidUpdate=function(){var e=JSON.stringify(a.state.recipes);localStorage.setItem("recipes",e)},a.componentWillUnmount=function(e){e.scrollEvent.remove("begin"),e.scrollEvent.remove("end")},a.handleChange=function(e){a.setState({count:e.target.value})},a.scrollToRecipes=function(){N.animateScroll.scrollTo()},a.scrollToWithContainer=function(e){new Promise(function(t,a){e.scrollEvent.register("end",function(){t(),e.scrollEvent.remove("end")}),N.animateScroll.scrollTo("scroll-container",{duration:800,delay:0,smooth:"easeInOutQuart"})}).then(function(){return N.animateScroll.scrollTo("scroll-container-second-element",{duration:800,delay:0,smooth:"easeInOutQuart",containerId:"scroll-container"})})},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"scrollToTop",value:function(){N.animateScroll.scrollToTop()}},{key:"scrollTo",value:function(){N.animateScroll.scrollTo("scroll-to-element",{duration:1100,delay:0,smooth:"easeInOutQuart"})}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{align:"center"},c.a.createElement(b,{id:"landing"}),c.a.createElement(N.Link,{activeClass:"active",to:"recipes",spy:!0,smooth:!0,duration:1100},c.a.createElement("a",{className:"buttonExplore",style:{textDecoration:"none"}},"Click here to explore"))),c.a.createElement(N.Element,{name:"recipes"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",{className:"App-title"},c.a.createElement("a",{style:{cursor:"pointer"},onClick:this.scrollToTop},"Recipe Search"))," ")," ",c.a.createElement(E,{getRecipe:this.getRecipe})," ",c.a.createElement("div",{className:"radioButtons",style:{marginBottom:"1rem"}},c.a.createElement("input",{type:"radio",value:"5",defaultChecked:!0,name:"count",onChange:this.handleChange}),"5"," ",c.a.createElement("input",{type:"radio",value:"10",name:"count",onChange:this.handleChange}),"10"," ",c.a.createElement("input",{type:"radio",value:"20",name:"count",onChange:this.handleChange}),"20"," ",c.a.createElement("input",{type:"radio",value:"30",name:"count",onChange:this.handleChange}),"30"," ")," ",c.a.createElement(k,{recipes:this.state.recipes,count:this.state.count})," "))}}]),t}(n.Component),_=(a(53),function(){return c.a.createElement("div",{className:"sk-circle overflow-hidden"},c.a.createElement("div",{className:"sk-circle1 sk-child"}),c.a.createElement("div",{className:"sk-circle2 sk-child"}),c.a.createElement("div",{className:"sk-circle3 sk-child"}),c.a.createElement("div",{className:"sk-circle4 sk-child"}),c.a.createElement("div",{className:"sk-circle5 sk-child"}),c.a.createElement("div",{className:"sk-circle6 sk-child"}),c.a.createElement("div",{className:"sk-circle7 sk-child"}),c.a.createElement("div",{className:"sk-circle8 sk-child"}),c.a.createElement("div",{className:"sk-circle9 sk-child"}),c.a.createElement("div",{className:"sk-circle10 sk-child"}),c.a.createElement("div",{className:"sk-circle11 sk-child"}),c.a.createElement("div",{className:"sk-circle12 sk-child"}))}),x="08ee1b4613c342c86f1bf5d398502cff",M=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(C.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).state={activeRecipe:[]},a.componentDidMount=Object(p.a)(u.a.mark(function e(){var t,n,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.location.state.recipe,e.next=3,fetch("https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=".concat(x,"&q=").concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,console.log(c),a.setState({activeRecipe:c.recipes[0]});case 9:case"end":return e.stop()}},e)})),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.activeRecipe;return c.a.createElement("div",null,c.a.createElement("div",{className:"container"},0===this.state.activeRecipe.length&&c.a.createElement(_,null),0!==this.state.activeRecipe.length&&c.a.createElement("div",{className:"active-recipe"},c.a.createElement("img",{className:"active-recipe__img",src:e.image_url,alt:e.title}),c.a.createElement("h3",{className:"active-recipe__title"},e.title),c.a.createElement("h4",{className:"active-recipe__title"},"Publisher: ",c.a.createElement("span",null,e.publisher)),c.a.createElement("p",{className:"active-recipe__website"},"Website: ",c.a.createElement("span",null,c.a.createElement("a",{href:e.publisher_url,target:"_blank",rel:"noopener noreferrer"},e.publisher_url))),c.a.createElement("button",{className:"active-recipe__button"},c.a.createElement(H.a,{to:"/"},"Go Home")))))}}]),t}(c.a.Component),O=function(){return c.a.createElement(i.a,null,c.a.createElement(o.a,null,c.a.createElement(s.a,{path:"/",component:y,exact:!0}),c.a.createElement(s.a,{path:"/recipe/:id",component:M})))},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(c.a.createElement(O,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/recipes",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/recipes","/service-worker.js");S?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):j(e)})}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.8fdf1316.chunk.js.map