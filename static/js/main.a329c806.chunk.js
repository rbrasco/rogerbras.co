(this.webpackJsonpcv_page=this.webpackJsonpcv_page||[]).push([[0],{31:function(e,t,a){e.exports=a(45)},36:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(23),c=a.n(r),o=(a(36),a(24)),l=a(25),s=a(29),m=a(28),d=a(2),u=a(10),v=a(11),p={title:"About me",author:{name:"Roger",study:"Mathmatics"},"strong points":["Responsible","Persistent","Hard-working","Learning facility"],motivations:["Eager to start new projects","Step out my comfort zone"],skills:{"team-wise":"Great communication and networking skills. Comfortable workingin a team environment","personal-wise":"Ability to not crack under pressure"},"coding knowladge":["Python, Selenium webdriver","Reactjs, JavaScript, HTML, CSS & SASS","JAVA","C family"]},f={info:p,experience:{title:"Work experience by importance",top:{company:"Scytl",position:"Software developer intern",duration:"1 year",job:["Took part in the team of managers on the services Bitbucket, Jira, Jenkins and Nexus","Continuous integration and process automation scripts","Fullstack developer in Internal Tools team"]},mid:{company:"Snorkel DC",position:"Divemaster",duration:"4 months",job:["Diving guide","Shop attendant"]},low:{company:"ICM CSIC",position:"Electronic technic intern",duration:"2 months",job:["Provided help to the technical team of the Technology Laboratory in ICM CSIC Biology Institute"]}},education:{title:"Education level and lenguages","Field studies":{university:"Universitat de Barcelona",degree:"Mathematics",duration:"2016 - Present"},"Professional studies":{organization:"PADI",level:"Divemaster",issued_date:"2017"},"Health studies":{organization:"Rescatadores SL",degree:"Beach Lifeguard",issued_date:"2016"},lenguages:{catalan:"Native",spanish:"Native",english:"Advanced"}},teaching:p,contact:{title:"Please contact me from the options below",home:"Barcelona",mail:"brascoroger@gmail.com",linkedIn:"linkedin.com/in/roger-brasco-garces"}},y={info:{dir:"about_me",key:"info",label:"info.yml"},experience:{dir:"work",key:"experience",label:"experience.yml"},education:{dir:"accomplishment",key:"education",label:"education.yml"},teaching:{dir:"teaching",key:"teaching",label:"teaching.yml"},contact:{dir:"for_you",key:"contact",label:"contact.yml"}},h=a(12),E=a.n(h),b=function(e){return i.a.createElement("div",{className:"tabBar",id:"tB"},e.map((function(e){return function(e){var t=e.key,a=e.label,n=e.active,r=void 0!==n&&n;return i.a.createElement("div",{className:r?"tab":"tab shadow",key:t},i.a.createElement(v.a,{className:"link",to:"/"+t},i.a.createElement("button",{className:"tabBttn"},i.a.createElement("div",{className:"tabLabel"},a))),i.a.createElement(v.a,{className:r?"linkX":"linkX dis",to:"/"},i.a.createElement(E.a,{className:r?"xBttn":"xBttn shadow",fontSize:"small"})))}(e)})))},g=function(e){var t=Object(d.g)().pathname.replace("/",""),a=Object.keys(y).map((function(e){return e})),n=Object.keys(y).map((function(e){return Object(u.a)(Object(u.a)({},y[e]),{},{active:t===e})})),r=!!document.getElementById("tB")&&document.getElementById("tB").scrollWidth>document.getElementById("tB").clientWidth;return i.a.useEffect((function(){window.addEventListener("resize",(function(){console.log("hey",r)}))})),i.a.createElement("div",{className:"tabComponent"},b(n),""===t?null:function(e,t){var a=e.dir,n=e.label;return i.a.createElement("div",{className:t?"path moved":"path"},i.a.createElement("div",{className:"path_text"},"rogerbras.co >"),i.a.createElement("div",{className:"path_text"},a+" >"),i.a.createElement("div",{className:"path_text"},n))}(n[a.indexOf(t)],r))},k=a(19),N=a.n(k),w=a(20),x=a.n(w),j=function(){return i.a.createElement("div",{className:"wBttns"},i.a.createElement("div",{className:"trans"},i.a.createElement(N.a,{className:"wIcons",fontSize:"small"}),i.a.createElement(x.a,{className:"wIcons",fontSize:"small"}),i.a.createElement(E.a,{className:"wIcons red",fontSize:"small"})),i.a.createElement("div",{className:"wTitle"},"Personal Page Project - CODE EDITOR"),i.a.createElement("div",{className:"wIconsWrapper"},i.a.createElement(N.a,{className:"wIcons",fontSize:"small"}),i.a.createElement(x.a,{className:"wIcons",fontSize:"small"}),i.a.createElement(E.a,{className:"wIcons red",fontSize:"small"})))},S=function(e){var t=e.i,a=e.key,n=e.label,r=e.depth,c=void 0===r?0:r,o=e.array,l=void 0!==o&&o;return i.a.createElement("div",{className:"line",key:t},i.a.createElement("div",{className:0===c?"n_line":"n_line moved"},t),i.a.createElement("div",{className:"key_text"+c},a),""===a?null:i.a.createElement("div",{className:"dots"},":"),l?i.a.createElement("div",{className:"dash"}," - "):null,i.a.createElement("div",{className:"label_text"},n))},I=function(e,t,a,n){return i.a.createElement("div",{key:t+a},S({i:a++,key:t,label:"",depth:n}),Object.keys(e).map((function(t){return S({i:a++,key:e instanceof Array?"":t,label:e[t],depth:n+1,array:e instanceof Array})})))},O=function(e){var t=e.info;return i.a.createElement("div",{className:"page"},function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Object.keys(e).map((function(n){return"string"===typeof e[n]?S({i:t++,key:n,label:e[n],depth:a}):i.a.createElement("div",{key:n+t},S({i:t++,key:n,label:""}),Object.keys(e[n]).map((function(i){return"string"===typeof e[n][i]?S({i:t++,key:e[n]instanceof Array?"":i,label:e[n][i],depth:a+1,array:e[n]instanceof Array}):I(e[n][i],i,t,a+1)})))}))}(t,1))},B=function(){return i.a.createElement("div",{className:"default"},i.a.createElement("div",{className:"dLogo"}," Logo "),i.a.createElement("div",{className:"dTextWrapper"},i.a.createElement("div",{className:"dText"},"rogerbras.co"),i.a.createElement("div",{className:"dText"},"Wellcome to my OG idea for a CV page"),i.a.createElement("div",{className:"dText"},"It pretends to be a window of a code editor"),i.a.createElement("div",{className:"dText"},"Whereas every .yml file displays information in nice way"),i.a.createElement("div",{className:"dText"},"Complitly done with Reactjs, full code @Github"),i.a.createElement("div",{className:"dText"},"Click on a tab to start"),i.a.createElement("div",{className:"dText"},"PDF version"),i.a.createElement("div",{className:"dText"},"JUNE 2020")))},C=function(e){var t=e.dict;return i.a.createElement("div",{className:"window"},i.a.createElement(j,null),i.a.createElement(g,null),i.a.createElement(d.d,null,i.a.createElement(d.b,{path:"/",exact:!0},i.a.createElement(B,null)),Object.keys(t).map((function(e){return i.a.createElement(d.b,{path:"/"+e,key:e},i.a.createElement(O,{info:t[e]}))}))))},z=a(14),T=a(26),_=a.n(T),A=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},P=function(e,t){return{x:A(-e,e),y:A(-t,t),z:A(0,e)}},W=function(){var e=window.innerHeight,t=document.body.clientWidth,a=Array(2e3).fill(),n={};a.forEach((function(a,i){return n=Object(u.a)(Object(u.a)({},n),{},Object(z.a)({},"".concat(i),P(t,e)))}));var r=function(e,a){e.fill(255),e.noStroke();var i=e.map(n[a].x/n[a].z,0,1,0,t),r=e.map(n[a].y/n[a].z,0,1,0,t),c=e.map(n[a].z,0,t,6,0);e.ellipse(i,r,c,c)},c=function(a,i){n[i].z-=.13,n[i].z<1&&(n[i]=P(t,e))};return i.a.createElement(_.a,{setup:function(a,n){a.createCanvas(t,e).parent(n)},draw:function(n){t=document.body.clientWidth,e=window.innerHeight,n.resizeCanvas(t,e,!0),n.background("#090b14"),n.translate(t/2,e/2);for(var i=0;i<a.length;i++)c(0,i),r(n,i)}})},D=a(27),L=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(C,{dict:f}),D.isMobile?null:i.a.createElement(W,null))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.a329c806.chunk.js.map