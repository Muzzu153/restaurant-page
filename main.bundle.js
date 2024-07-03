(()=>{"use strict";var n={743:(n,e,t)=>{t.d(e,{A:()=>A});var r=t(354),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,'* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-size: 1.6rem;\n  line-height: 1.2;\n}\n\n#wrapper {\n  margin: auto;\n}\n\n#contact-us {\n  width: min(85%, 60rem);\n  display: flex;\n  margin: 2rem auto;\n  position: relative;\n  border: white 2px solid;\n  flex-direction: column;\n  background: rgba(255, 255, 255, 0.59);\n  border-radius: 10px 0px 10px 0px;\n  border: 5px solid white;\n  padding: 1rem;\n\n  .info-div{\n    display: flex;\n    margin: 0.5rem;\n    /* padding: 0.5rem; */\n\n    img{\n      display: inline;\n      width: 20px;\n    }\n  }\n\n  #staff-members{\n    margin: 2rem auto 0 auto;\n    /* border: 5px solid rgb(255, 0, 0); */\n    /* width: 40rem; */\n    /* display: grid; */\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\n    flex-direction: column;\n    /* justify-content: center; */\n    /* align-items: center; */\n\n      .staff-info {\n        display: flex;\n        flex-direction: column;\n        width: 50%;\n        margin: auto;\n        /* border: 2px solid black; */\n        /* background: wheat; */\n        img {\n          border-radius: 5%;\n          width: 50%;\n          /* height: 50%; */\n          border: 2px solid black;\n          margin: auto;\n        }\n\n        .staff-name{\n          margin: auto;\n        }\n      }\n  }\n\n}\n\n#contact-us::before {\n  content: "";\n  position: absolute;\n  display: block;\n  top: -15px;\n  bottom: -15px;\n  right: -15px;\n  left: -15px;\n  /* background-color: var(--black); */\n  border: 5px solid white;\n  border-radius: 15px 0px 15px 0px;\n}\n',"",{version:3,sources:["webpack://./src/css/contactUs.css"],names:[],mappings:"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,uBAAuB;EACvB,sBAAsB;EACtB,qCAAqC;EACrC,gCAAgC;EAChC,uBAAuB;EACvB,aAAa;;EAEb;IACE,aAAa;IACb,cAAc;IACd,qBAAqB;;IAErB;MACE,eAAe;MACf,WAAW;IACb;EACF;;EAEA;IACE,wBAAwB;IACxB,sCAAsC;IACtC,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,2DAA2D;IAC3D,sBAAsB;IACtB,6BAA6B;IAC7B,yBAAyB;;MAEvB;QACE,aAAa;QACb,sBAAsB;QACtB,UAAU;QACV,YAAY;QACZ,6BAA6B;QAC7B,uBAAuB;QACvB;UACE,iBAAiB;UACjB,UAAU;UACV,iBAAiB;UACjB,uBAAuB;UACvB,YAAY;QACd;;QAEA;UACE,YAAY;QACd;MACF;EACJ;;AAEF;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,UAAU;EACV,aAAa;EACb,YAAY;EACZ,WAAW;EACX,oCAAoC;EACpC,uBAAuB;EACvB,gCAAgC;AAClC",sourcesContent:['* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-size: 1.6rem;\n  line-height: 1.2;\n}\n\n#wrapper {\n  margin: auto;\n}\n\n#contact-us {\n  width: min(85%, 60rem);\n  display: flex;\n  margin: 2rem auto;\n  position: relative;\n  border: white 2px solid;\n  flex-direction: column;\n  background: rgba(255, 255, 255, 0.59);\n  border-radius: 10px 0px 10px 0px;\n  border: 5px solid white;\n  padding: 1rem;\n\n  .info-div{\n    display: flex;\n    margin: 0.5rem;\n    /* padding: 0.5rem; */\n\n    img{\n      display: inline;\n      width: 20px;\n    }\n  }\n\n  #staff-members{\n    margin: 2rem auto 0 auto;\n    /* border: 5px solid rgb(255, 0, 0); */\n    /* width: 40rem; */\n    /* display: grid; */\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\n    flex-direction: column;\n    /* justify-content: center; */\n    /* align-items: center; */\n\n      .staff-info {\n        display: flex;\n        flex-direction: column;\n        width: 50%;\n        margin: auto;\n        /* border: 2px solid black; */\n        /* background: wheat; */\n        img {\n          border-radius: 5%;\n          width: 50%;\n          /* height: 50%; */\n          border: 2px solid black;\n          margin: auto;\n        }\n\n        .staff-name{\n          margin: auto;\n        }\n      }\n  }\n\n}\n\n#contact-us::before {\n  content: "";\n  position: absolute;\n  display: block;\n  top: -15px;\n  bottom: -15px;\n  right: -15px;\n  left: -15px;\n  /* background-color: var(--black); */\n  border: 5px solid white;\n  border-radius: 15px 0px 15px 0px;\n}\n'],sourceRoot:""}]);const A=a},64:(n,e,t)=>{t.d(e,{A:()=>A});var r=t(354),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,"#header {\n    background: var(--white);\n    position: relative;\n    margin-top: 1.5rem;\n    z-index: 100;\n    padding: 0.8rem;\n    color: var(--navFontColor);\n  \n    .navbar {\n      display: flex;\n      justify-content: space-around;\n      max-width: 100rem;\n      margin: auto;\n  \n      button {\n        border: var(--white);\n        background: none;\n        font-weight: bolder;\n        font-size: 1.5rem;\n        padding: 0.8rem 1.2rem;\n        border-bottom: 2px solid transparent;\n      }\n  \n      button:hover{\n        border-bottom: var(--black) groove 2px;\n      }\n  \n      button:active, button:focus {\n        background-color: var(--black);\n        border-bottom: var(--black) groove 2px;\n        color: var(--white);\n        transition: 0.2s;\n      }\n    }\n  }","",{version:3,sources:["webpack://./src/css/header.css"],names:[],mappings:"AAAA;IACI,wBAAwB;IACxB,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,0BAA0B;;IAE1B;MACE,aAAa;MACb,6BAA6B;MAC7B,iBAAiB;MACjB,YAAY;;MAEZ;QACE,oBAAoB;QACpB,gBAAgB;QAChB,mBAAmB;QACnB,iBAAiB;QACjB,sBAAsB;QACtB,oCAAoC;MACtC;;MAEA;QACE,sCAAsC;MACxC;;MAEA;QACE,8BAA8B;QAC9B,sCAAsC;QACtC,mBAAmB;QACnB,gBAAgB;MAClB;IACF;EACF",sourcesContent:["#header {\n    background: var(--white);\n    position: relative;\n    margin-top: 1.5rem;\n    z-index: 100;\n    padding: 0.8rem;\n    color: var(--navFontColor);\n  \n    .navbar {\n      display: flex;\n      justify-content: space-around;\n      max-width: 100rem;\n      margin: auto;\n  \n      button {\n        border: var(--white);\n        background: none;\n        font-weight: bolder;\n        font-size: 1.5rem;\n        padding: 0.8rem 1.2rem;\n        border-bottom: 2px solid transparent;\n      }\n  \n      button:hover{\n        border-bottom: var(--black) groove 2px;\n      }\n  \n      button:active, button:focus {\n        background-color: var(--black);\n        border-bottom: var(--black) groove 2px;\n        color: var(--white);\n        transition: 0.2s;\n      }\n    }\n  }"],sourceRoot:""}]);const A=a},310:(n,e,t)=>{t.d(e,{A:()=>b});var r=t(354),o=t.n(r),i=t(314),a=t.n(i),A=t(417),s=t.n(A),d=new URL(t(407),t.b),c=new URL(t(343),t.b),m=new URL(t(31),t.b),l=new URL(t(412),t.b),p=a()(o()),u=s()(d),g=s()(c),C=s()(m),B=s()(l);p.push([n.id,`:root {\n  --white: rgb(255, 255, 255);\n  --black: rgb(0, 0, 0);\n  --mainFontColor: rgb(0, 0, 0);\n  --navFontColor: rgb(0, 0, 0);\n}\n\n@font-face {\n  font-family: "UVN-Co-dien";\n  src: url(${u}),\n    url(${g});\n}\n\n@font-face {\n  font-family: "IBMPlexMono";\n  src: url(${C}),\n    url(${B});\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-size: 1.6rem;\n  line-height: 1.2;\n  background: #66524a;\n}\n\n#wrapper {\n  margin: auto;\n}\n\n#main {\n  width: min(85%, 60rem);\n  color: var(--mainFontColor);\n  position: relative;\n  padding-bottom: 3rem;\n  margin: 5rem auto;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  background: rgba(255, 255, 255, 0.59);\n  border-radius: 10px 0px 10px 0px;\n  border: 5px solid var(--white);\n\n  .staffImg {\n    margin: auto;\n    min-height: 9.375em;\n    border: 0.3rem solid black;\n    width: min(50rem, 85%);\n    border-radius: 2%;\n  }\n\n  #name {\n    margin-top: 1rem;\n    padding-bottom: 2rem;\n    padding-top: 0.5rem;\n    text-align: center;\n\n    #japName {\n      font-size: 3rem;\n    }\n\n    #engName {\n      font-size: 1.7rem;\n      font-weight: bold;\n    }\n  }\n\n  #about {\n    width: min(90%, 50rem);\n    text-align: center;\n    margin: 2rem auto 0 auto;\n\n    #description {\n      text-align: center;\n    }\n  }\n}\n\n#main::before {\n  content: "";\n  position: absolute;\n  display: block;\n  top: -15px;\n  bottom: -15px;\n  right: -15px;\n  left: -15px;\n  /* background-color: var(--black); */\n  border: 5px solid var(--white);\n  border-radius: 15px 0px 15px 0px;\n}\n`,"",{version:3,sources:["webpack://./src/css/home.css"],names:[],mappings:"AAAA;EACE,2BAA2B;EAC3B,qBAAqB;EACrB,6BAA6B;EAC7B,4BAA4B;AAC9B;;AAEA;EACE,0BAA0B;EAC1B;2CACsD;AACxD;;AAEA;EACE,0BAA0B;EAC1B;2CACwD;AAC1D;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,2BAA2B;EAC3B,kBAAkB;EAClB,oBAAoB;EACpB,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,qCAAqC;EACrC,gCAAgC;EAChC,8BAA8B;;EAE9B;IACE,YAAY;IACZ,mBAAmB;IACnB,0BAA0B;IAC1B,sBAAsB;IACtB,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;IAChB,oBAAoB;IACpB,mBAAmB;IACnB,kBAAkB;;IAElB;MACE,eAAe;IACjB;;IAEA;MACE,iBAAiB;MACjB,iBAAiB;IACnB;EACF;;EAEA;IACE,sBAAsB;IACtB,kBAAkB;IAClB,wBAAwB;;IAExB;MACE,kBAAkB;IACpB;EACF;AACF;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,UAAU;EACV,aAAa;EACb,YAAY;EACZ,WAAW;EACX,oCAAoC;EACpC,8BAA8B;EAC9B,gCAAgC;AAClC",sourcesContent:[':root {\n  --white: rgb(255, 255, 255);\n  --black: rgb(0, 0, 0);\n  --mainFontColor: rgb(0, 0, 0);\n  --navFontColor: rgb(0, 0, 0);\n}\n\n@font-face {\n  font-family: "UVN-Co-dien";\n  src: url("../fonts/UVN-Co-dien/UVN\\ Co\\ Dien\\ Bold.woff2"),\n    url("../fonts/UVN-Co-dien/UVN\\ Co\\ Dien\\ Bold.woff");\n}\n\n@font-face {\n  font-family: "IBMPlexMono";\n  src: url("../fonts/IBM_Plex_Mono/IBMPlexMono-Regular.woff2"),\n    url("../fonts/IBM_Plex_Mono/IBMPlexMono-Regular.woff");\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-size: 1.6rem;\n  line-height: 1.2;\n  background: #66524a;\n}\n\n#wrapper {\n  margin: auto;\n}\n\n#main {\n  width: min(85%, 60rem);\n  color: var(--mainFontColor);\n  position: relative;\n  padding-bottom: 3rem;\n  margin: 5rem auto;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  background: rgba(255, 255, 255, 0.59);\n  border-radius: 10px 0px 10px 0px;\n  border: 5px solid var(--white);\n\n  .staffImg {\n    margin: auto;\n    min-height: 9.375em;\n    border: 0.3rem solid black;\n    width: min(50rem, 85%);\n    border-radius: 2%;\n  }\n\n  #name {\n    margin-top: 1rem;\n    padding-bottom: 2rem;\n    padding-top: 0.5rem;\n    text-align: center;\n\n    #japName {\n      font-size: 3rem;\n    }\n\n    #engName {\n      font-size: 1.7rem;\n      font-weight: bold;\n    }\n  }\n\n  #about {\n    width: min(90%, 50rem);\n    text-align: center;\n    margin: 2rem auto 0 auto;\n\n    #description {\n      text-align: center;\n    }\n  }\n}\n\n#main::before {\n  content: "";\n  position: absolute;\n  display: block;\n  top: -15px;\n  bottom: -15px;\n  right: -15px;\n  left: -15px;\n  /* background-color: var(--black); */\n  border: 5px solid var(--white);\n  border-radius: 15px 0px 15px 0px;\n}\n'],sourceRoot:""}]);const b=p},22:(n,e,t)=>{t.d(e,{A:()=>u});var r=t(354),o=t.n(r),i=t(314),a=t.n(i),A=t(417),s=t.n(A),d=new URL(t(31),t.b),c=new URL(t(412),t.b),m=a()(o()),l=s()(d),p=s()(c);m.push([n.id,`@font-face {\n  font-family: "IBMPlexMono";\n  src: url(${l}),\n    url(${p});\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-size: 1.6rem;\n  line-height: 1.2;\n  background: #66524a;\n}\n\n#wrapper {\n  margin: auto;\n}\n\n/* #background-menu {\n  display: flex;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-image: url("../images/menu-bg2.png");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n} */\n\n#menu-div {\n  width: min(90%, 60rem);\n  position: relative;\n  background: rgba(255, 255, 255, 0.59);\n  padding: 1rem;\n  margin: 2rem auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));\n  border-radius: 10px 0px 10px 0px;\n  /* border: 5px solid rgb(255, 255, 255); */\n}\n\n.single-dish {\n  margin: 1rem;\n  width: 90%;\n  display: flex;\n  padding: 1.5rem;\n  border-radius: 8px 0px 8px 0px;\n  flex-direction: column;\n  background-color: rgb(243, 239, 239);\n  border: solid ;\n  .whole-dish{\n    display: flex;\n  }\n\n  button{\n    width: 48%;\n    padding: 1.2rem;\n    color: white;\n    border: none;\n    background: #ce2525;\n    margin: 1rem auto;\n  }\n\n  button:hover{\n    background: #c02020;\n  }\n\n  button:active{\n    transform: scale(0.9);\n    transition: 0.5s;\n  }\n\n  .dish-image{\n    width: 50%;\n    border: 2px solid white;\n    border-radius: 8px 0px 8px 0px;\n  }\n\n  .dish-info{\n    text-align: center ;\n    display: block;\n    margin: auto;\n\n    .dish-price{\n      margin-top: 1rem;\n      background: goldenrod;\n      width: 50%;\n      padding: 0.6rem;\n      margin: 1rem auto;\n\n    }\n  }\n}\n`,"",{version:3,sources:["webpack://./src/css/menu.css"],names:[],mappings:"AAAA;EACE,0BAA0B;EAC1B;2CACwD;AAC1D;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;;;;;;;;;;;GAWG;;AAEH;EACE,sBAAsB;EACtB,kBAAkB;EAClB,qCAAqC;EACrC,aAAa;EACb,iBAAiB;EACjB,aAAa;EACb,2DAA2D;EAC3D,gCAAgC;EAChC,0CAA0C;AAC5C;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,aAAa;EACb,eAAe;EACf,8BAA8B;EAC9B,sBAAsB;EACtB,oCAAoC;EACpC,cAAc;EACd;IACE,aAAa;EACf;;EAEA;IACE,UAAU;IACV,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;EACnB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,qBAAqB;IACrB,gBAAgB;EAClB;;EAEA;IACE,UAAU;IACV,uBAAuB;IACvB,8BAA8B;EAChC;;EAEA;IACE,mBAAmB;IACnB,cAAc;IACd,YAAY;;IAEZ;MACE,gBAAgB;MAChB,qBAAqB;MACrB,UAAU;MACV,eAAe;MACf,iBAAiB;;IAEnB;EACF;AACF",sourcesContent:['@font-face {\n  font-family: "IBMPlexMono";\n  src: url("../fonts/IBM_Plex_Mono/IBMPlexMono-Regular.woff2"),\n    url("../fonts/IBM_Plex_Mono/IBMPlexMono-Regular.woff");\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-size: 1.6rem;\n  line-height: 1.2;\n  background: #66524a;\n}\n\n#wrapper {\n  margin: auto;\n}\n\n/* #background-menu {\n  display: flex;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-image: url("../images/menu-bg2.png");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n} */\n\n#menu-div {\n  width: min(90%, 60rem);\n  position: relative;\n  background: rgba(255, 255, 255, 0.59);\n  padding: 1rem;\n  margin: 2rem auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));\n  border-radius: 10px 0px 10px 0px;\n  /* border: 5px solid rgb(255, 255, 255); */\n}\n\n.single-dish {\n  margin: 1rem;\n  width: 90%;\n  display: flex;\n  padding: 1.5rem;\n  border-radius: 8px 0px 8px 0px;\n  flex-direction: column;\n  background-color: rgb(243, 239, 239);\n  border: solid ;\n  .whole-dish{\n    display: flex;\n  }\n\n  button{\n    width: 48%;\n    padding: 1.2rem;\n    color: white;\n    border: none;\n    background: #ce2525;\n    margin: 1rem auto;\n  }\n\n  button:hover{\n    background: #c02020;\n  }\n\n  button:active{\n    transform: scale(0.9);\n    transition: 0.5s;\n  }\n\n  .dish-image{\n    width: 50%;\n    border: 2px solid white;\n    border-radius: 8px 0px 8px 0px;\n  }\n\n  .dish-info{\n    text-align: center ;\n    display: block;\n    margin: auto;\n\n    .dish-price{\n      margin-top: 1rem;\n      background: goldenrod;\n      width: 50%;\n      padding: 0.6rem;\n      margin: 1rem auto;\n\n    }\n  }\n}\n'],sourceRoot:""}]);const u=m},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);r&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),e.push(c))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],A=0;A<n.length;A++){var s=n[A],d=r.base?s[0]+r.base:s[0],c=i[d]||0,m="".concat(d," ").concat(c);i[d]=c+1;var l=t(m),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(p);else{var u=o(p,r);r.byIndex=A,e.splice(A,0,{identifier:m,updater:u,references:1})}a.push(m)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var A=t(i[a]);e[A].references--}for(var s=r(n,o),d=0;d<i.length;d++){var c=t(i[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},412:(n,e,t)=>{n.exports=t.p+"./fonts/IBMPlexMono-Regular.woff"},31:(n,e,t)=>{n.exports=t.p+"./fonts/IBMPlexMono-Regular.woff2"},343:(n,e,t)=>{n.exports=t.p+"./fonts/UVN Co Dien Bold.woff"},407:(n,e,t)=>{n.exports=t.p+"./fonts/UVN Co Dien Bold.woff2"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),o=t.n(r),i=t(825),a=t.n(i),A=t(659),s=t.n(A),d=t(56),c=t.n(d),m=t(540),l=t.n(m),p=t(113),u=t.n(p),g=t(310),C={};C.styleTagTransform=u(),C.setAttributes=c(),C.insert=s().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=l(),o()(g.A,C),g.A&&g.A.locals&&g.A.locals;var B=t(64),b={};b.styleTagTransform=u(),b.setAttributes=c(),b.insert=s().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=l(),o()(B.A,b),B.A&&B.A.locals&&B.A.locals;const f=t.p+"./images/staffImg.png",E=function(){const n=document.getElementById("wrapper");return n.append(function(){const n=document.createElement("main");n.setAttribute("id","main");const e=document.createElement("div");e.setAttribute("id","name");const t=document.createElement("div");t.textContent="Dungeon Meshi",t.setAttribute("id","japName");const r=document.createElement("div");r.textContent="Delicious in Dungeon",r.setAttribute("id","engName"),e.append(t,r);const o=document.createElement("div");o.setAttribute("id","about"),o.textContent="Moving restaurant for the dungeon dwellers!!";const i=new Image;i.src=f,i.classList.add("staffImg"),n.append(e,i,o);const a=document.createElement("div");return a.textContent="With Senshi's culinary expertuse, and we struggling through the dungeon learning about gourmet dining, come pay us and eat with us!",o.appendChild(a),a.setAttribute("id","description"),n}()),n};var h=t(22),x={};x.styleTagTransform=u(),x.setAttributes=c(),x.insert=s().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=l(),o()(h.A,x),h.A&&h.A.locals&&h.A.locals;const v=t.p+"./images/hot_pot_img.png",w=t.p+"./images/Roast_Basilisk_anime.png",I=t.p+"./images/kakiage.png",k=t.p+"./images/Fruit_Pie_anime.png",y=t.p+"./images/Living_Armor_Stir_Fry_anime.png",M=t.p+"./images/Living_Armor_Soup.png",U=t.p+"./images/Living_Armor_Grilled_anime.png",S=t.p+"./images/Steamed_Living_Armor.png",R=()=>{const n=document.getElementById("wrapper");return n.append((()=>{const{getDishes:n,makeSingleDishDiv:e}=(()=>{const n=[{name:"SCORPION & MUSHROOM HOTPOT",src:v,price:"5000¥"},{name:"ROAST BASILISK",src:w,price:"4500¥"},{name:"MANDRAKE KAKIAGE & BAT TEMPURA",src:I,price:"6000¥"},{name:"MAN-EATING PLANT TART",src:k,price:"2850¥"},{name:"LIVING ARMOR STIR-FRY",src:y,price:"7200¥"},{name:"LIVIN ARMOR SOUP",src:M,price:"6750¥"},{name:"GRILLED LIVING ARMOR",src:U,price:"7500¥"},{name:"STEAMED LIVING ARMOR",src:S,price:"7800¥"}];return{getDishes:()=>n,addDishes:(e,t)=>n.push({dishName:e,dishSrc:t}),makeSingleDishDiv:(n,e)=>{for(let t of n){const n=document.createElement("div"),r=document.createElement("img"),o=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div");r.src=t.src,i.textContent=t.name,a.textContent=t.price;const A=document.createElement("div");A.classList.add("whole-dish"),r.classList.add("dish-image"),o.classList.add("dish-info"),a.classList.add("dish-price");const s=document.createElement("button");s.classList.add("order-btn"),s.textContent="ORDER NOW",n.classList.add("single-dish"),o.append(i,a),A.append(r,o),n.append(A,s),e.append(n)}return e}}})(),t=n(),r=document.createElement("main");return r.setAttribute("id","menu-div"),e(t,r),r})()),n};var L=t(743),T={};T.styleTagTransform=u(),T.setAttributes=c(),T.insert=s().bind(null,"head"),T.domAPI=a(),T.insertStyleElement=l(),o()(L.A,T),L.A&&L.A.locals&&L.A.locals;const j=t.p+"./images/location.png",D=t.p+"./images/clock.png",N=t.p+"./images/email.png",Y=t.p+"./images/phone.png",z=t.p+"./images/senshi.jpg",_=t.p+"./images/laios.jpg",P=t.p+"./images/marcille.jpg",F=t.p+"./images/chilchuck.jpg",Q=t.p+"./images/izutsumi.png",O=()=>{const n=document.getElementById("wrapper");return n.append((()=>{const{createStaffList:n}=(()=>{const n=[{name:"Senshi",src:z},{name:"Laios",src:_},{name:"Marcille",src:P},{name:"Chilchuck",src:F},{name:"Izutsumi",src:Q}];return{getStaff:()=>n,createStaffList:e=>{for(let t of n){const n=document.createElement("div"),r=document.createElement("div"),o=new Image;n.classList.add("staff-info"),r.classList.add("staff-name"),r.textContent=t.name,o.src=t.src,n.append(o,r),e.appendChild(n)}return e}}})(),e=[{name:"The ever changing dungeon",icon:j},{name:"Open 24x7",icon:D},{name:"(222)-888 5555",icon:Y},{name:"Message us",icon:N}],t=document.createElement("main");t.setAttribute("id","contact-us");const r=document.createElement("div");r.textContent="Our staff members";const o=document.createElement("div");return o.setAttribute("id","staff-members"),(n=>{for(let t of e){const e=document.createElement("div"),r=document.createElement("div"),o=new Image;o.src=t.icon,r.textContent=t.name,e.classList.add("info-div"),e.append(o,r),n.append(e)}})(t),n(o),t.append(r,o),t})()),n},V=()=>{const n=document.getElementById("wrapper");for(;"header"!==n.lastChild.id;)n.removeChild(n.lastChild);return n};document.getElementById("wrapper").append(function(){const n=document.createElement("header");n.setAttribute("id","header");const e=document.createElement("div");e.classList.add("navbar"),n.append(e);const t=document.createElement("button"),r=document.createElement("button"),o=document.createElement("button");return t.setAttribute("id","home-btn"),r.setAttribute("id","menu-btn"),o.setAttribute("id","contactUs-btn"),t.textContent="Home",r.textContent="Menu",o.textContent="Contact Us",e.append(t,r,o),n}()),E();const{homeButton:q,menuButton:W,contactUsButtton:Z}={homeButton:document.querySelector("#home-btn"),menuButton:document.querySelector("#menu-btn"),contactUsButtton:document.querySelector("#contactUs-btn")};q.addEventListener("click",(function(){console.log("home loaded"),V(),E()})),W.addEventListener("click",(function(){console.log("menu loaded"),V(),R()})),Z.addEventListener("click",(function(){console.log("contactUs loaded"),V(),O()}))})();
//# sourceMappingURL=main.bundle.js.map