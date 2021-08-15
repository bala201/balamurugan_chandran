(this.webpackJsonpbalamurugan_chandran=this.webpackJsonpbalamurugan_chandran||[]).push([[0],{52:function(n,e,t){"use strict";t.r(e);var a,r,i=t(1),o=t(30),c=t.n(o),s=t(11),l=t(8),d=t(4),m=t(5),b=t(0),j=m.b.div(a||(a=Object(d.a)(["\n  .heading {\n    font-size: 2.4rem;\n    margin-bottom: 2rem;\n  }\n  li {\n    margin-bottom: 1rem;\n  }\n  a {\n    font-size: 1.8rem;\n  }\n"])));function h(n){var e=n.heading,t=void 0===e?"Col Heading":e,a=n.links,r=void 0===a?[{type:"Link",title:"Home",path:"/home"},{type:"Link",title:"About",path:"/about"}]:a;return Object(b.jsxs)(j,{children:[Object(b.jsx)("h2",{className:"heading",children:t}),Object(b.jsx)("ul",{children:r.map((function(n,e){return Object(b.jsx)("li",{children:"Link"===n.type?Object(b.jsx)(s.b,{to:n.path,children:n.title}):Object(b.jsx)("a",{href:n.path,target:"_blank",rel:"noreferrer",children:n.title})},e)}))})]})}var p,x=m.b.div(r||(r=Object(d.a)(["\n  max-width: 500px;\n  margin: 0 auto;\n  font-size: 1.9rem;\n  line-height: 1.3em;\n  @media only screen and (max-width: 768px) {\n    font-size: 1.4rem;\n  }\n"])));function g(n){var e=n.children;return Object(b.jsx)(x,{className:"para",children:Object(b.jsx)("p",{children:e})})}var u=m.b.div(p||(p=Object(d.a)(["\n  background-color: var(--deep-dark);\n  padding-top: 10rem;\n  .container {\n    display: flex;\n    gap: 3rem;\n  }\n  .footer__col1 {\n    flex: 2;\n  }\n  .footer__col2,\n  .footer__col3,\n  .footer__col4 {\n    flex: 1;\n  }\n  .footer__col1__title {\n    font-size: 3.5rem;\n    margin-bottom: 1rem;\n  }\n  .copyright {\n    background-color: var(--dark-bg);\n    text-align: left;\n    padding: 1rem 0;\n    margin-top: 5rem;\n    .para {\n      margin-left: 0;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      gap: 0rem;\n      & > div {\n        margin-top: 5rem;\n      }\n    }\n    .footer__col1 .para {\n      max-width: 100%;\n    }\n    .copyright {\n      .container {\n        div {\n          margin-top: 0;\n        }\n      }\n    }\n  }\n"])));function f(){return Object(b.jsxs)(u,{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"footer__col1",children:[Object(b.jsx)("h1",{className:"footer__col1__title",children:"Balamurugan Chandran"}),Object(b.jsx)(g,{children:"A web designer and developer from Tamilnadu, India. I always make websites that have unique designs and also has a good performance rate."})]}),Object(b.jsx)("div",{className:"footer__col2",children:Object(b.jsx)(h,{heading:"Important Links",links:[{title:"Home",path:"/",type:"Link"},{type:"Link",title:"About",path:"/about"},{type:"Link",title:"Projects",path:"/projects"},{type:"Link",title:"Contact",path:"/contact"}]})}),Object(b.jsx)("div",{className:"footer__col3",children:Object(b.jsx)(h,{heading:"Contact Info",links:[{title:"+91 8778224246",path:"tel:+91 8778224246"},{title:"chamirbala@gmail.com",path:"mailto:chamirbala@gmail.com"},{title:"Madurai, Tamilnadu, India",path:"http://google.com/maps"}]})}),Object(b.jsx)("div",{className:"footer__col4",children:Object(b.jsx)(h,{heading:"social Links",links:[{title:"Facebook",path:"http://facebook.com"},{title:"Twitter",path:"http://twitter.com"},{title:"Instagram",path:"http://instagram.com"}]})})]}),Object(b.jsx)("div",{className:"copyright",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(g,{children:["\xa9 2021 - Balamurugan | Designed By"," ",Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:"http://chamir.com",children:"chamir"})," "]})})})]})}var _,O,v=t(15),w=t(10),y=m.b.nav(_||(_=Object(d.a)(["\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 1rem 0;\n  background: var(--dark-bg);\n  ul {\n    max-width: 1200px;\n    margin: 0 auto;\n    width: 90%;\n    text-align: center;\n    li {\n      display: inline-block;\n      border-radius: 8px;\n      transition: 0.3s ease background-color;\n      &:hover {\n        background-color: var(--deep-dark);\n      }\n    }\n    a {\n      display: inline-block;\n      font-family: 'RobotoMono Regular';\n      padding: 1rem 2rem;\n      font-size: 2rem;\n      color: var(--gray-1);\n      outline: none;\n    }\n    .active {\n      color: var(--white);\n    }\n  }\n  .mobile-menu-icon {\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    width: 4rem;\n    cursor: pointer;\n    display: none;\n    outline: none;\n    * {\n      pointer-events: none;\n    }\n  }\n  .navItems .closeNavIcon {\n    display: none;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 0;\n    .hide-item {\n      transform: translateY(calc(-100% - var(--top)));\n    }\n    .mobile-menu-icon {\n      display: block;\n    }\n    .navItems {\n      --top: 1rem;\n      transition: 0.3s ease transform;\n      background-color: var(--deep-dark);\n      padding: 2rem;\n      width: 90%;\n      max-width: 300px;\n      border-radius: 12px;\n      position: absolute;\n      right: 1rem;\n      top: var(--top);\n      .closeNavIcon {\n        display: block;\n        width: 3rem;\n        margin: 0 0 0 auto;\n        cursor: pointer;\n        * {\n          pointer-events: none;\n        }\n      }\n      li {\n        display: block;\n        margin-bottom: 1rem;\n      }\n    }\n  }\n"])));function k(){var n=Object(i.useState)(!1),e=Object(v.a)(n,2),t=e[0],a=e[1];return Object(b.jsxs)(y,{children:[Object(b.jsx)("div",{className:"mobile-menu-icon",onClick:function(){return a(!t)},role:"button",onKeyDown:function(){return a(!t)},tabIndex:0,children:Object(b.jsx)(w.f,{})}),Object(b.jsxs)("ul",{className:t?"navItems":"navItems hide-item",children:[Object(b.jsx)("div",{className:"closeNavIcon",onClick:function(){return a(!t)},role:"button",onKeyDown:function(){return a(!t)},tabIndex:0,children:Object(b.jsx)(w.a,{})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/",exact:!0,onClick:function(){return a(!t)},role:"button",onKeyDown:function(){return a(!t)},tabIndex:0,children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/about",onClick:function(){return a(!t)},role:"button",onKeyDown:function(){return a(!t)},tabIndex:0,children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/projects",onClick:function(){return a(!t)},role:"button",onKeyDown:function(){return a(!t)},tabIndex:0,children:"Projects"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/contact",onClick:function(){return a(!t)},role:"button",onKeyDown:function(){return a(!t)},tabIndex:0,children:"Contact"})})]})]})}function N(){var n=Object(l.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[n]),null}var I=m.b.div(O||(O=Object(d.a)(["\n  margin-top: 2rem;\n  .button {\n    font-size: 2.2rem;\n    background-color: ",";\n    padding: 0.7em 2em;\n    border: 2px solid var(--gray-1);\n    border-radius: 8px;\n    display: inline-block;\n    color: ",";\n  }\n  @media only screen and (max-width: 768px) {\n    .button {\n      font-size: 1.8rem;\n    }\n  }\n"])),(function(n){return n.outline?"transperant":"var(--gray-1)"}),(function(n){return n.outline?"var(--gary-1)":"black"}));function z(n){var e=n.btnText,t=void 0===e?"test":e,a=n.btnLink,r=void 0===a?"test":a,i=n.outline,o=void 0!==i&&i;return Object(b.jsx)(I,{outline:o,className:"button-wrapper",children:Object(b.jsx)(s.b,{className:"button",to:r,children:t})})}var S,B,C=t.p+"static/media/hero.746da1df.jpg",L=m.b.div(S||(S=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: relative;\n  /* gap: 5rem; */\n  margin-top: 3rem;\n  .title {\n    font-size: 2.4rem;\n  }\n  .items {\n    display: flex;\n    gap: 1.5rem;\n    position: absolute;\n    left: 18rem;\n  }\n  .item {\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 8px;\n  }\n  @media only screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    .items {\n      position: initial;\n      gap: 1rem;\n    }\n    .title {\n      font-size: 2rem;\n    }\n  }\n"])));function T(n){var e=n.title,t=void 0===e?"Title":e,a=n.items,r=void 0===a?["HTML","CSS"]:a;return Object(b.jsxs)(L,{children:[Object(b.jsx)("h1",{className:"title",children:t}),Object(b.jsx)("div",{className:"items",children:r.map((function(n,e){return Object(b.jsx)("div",{className:"item",children:Object(b.jsx)(g,{children:n})},e)}))})]})}var M=m.b.div(B||(B=Object(d.a)(["\n  padding: 5rem 0;\n  .contactBanner__wrapper {\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    padding: 5rem 0rem;\n    text-align: center;\n  }\n  .contactBanner__heading {\n    font-size: 4rem;\n    margin-bottom: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .contactBanner__heading {\n      font-size: 2.8rem;\n    }\n  }\n"])));function D(){return Object(b.jsx)(M,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"contactBanner__wrapper",children:[Object(b.jsx)(g,{children:"Have a project in mind"}),Object(b.jsx)("h3",{className:"contactBanner__heading",children:"Let me help you"}),Object(b.jsx)(z,{btnText:"Contact Now",btnLink:"/contact"})]})})})}t.p;var R,E,F=m.b.div(R||(R=Object(d.a)(["\n  padding: 20rem 0 10rem 0;\n\n  .top-section {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n  }\n  .left {\n    flex: 3;\n  }\n  .right {\n    flex: 2;\n  }\n  .about__subheading {\n    font-size: 2.2rem;\n    margin-bottom: 2rem;\n    span {\n      background-color: var(--deep-dark);\n      padding: 0.5rem;\n      border-radius: 8px;\n    }\n  }\n  .about__heading {\n    font-size: 3.6rem;\n    margin-bottom: 3rem;\n  }\n  .about__info {\n    margin-bottom: 4rem;\n    .para {\n      max-width: 100%;\n    }\n  }\n  .right {\n    img {\n      border: 2px solid var(--gray-1);\n    }\n  }\n  .about__info__items {\n    margin-top: 15rem;\n  }\n  .about__info__item {\n    margin-bottom: 10rem;\n  }\n  .about__info__heading {\n    font-size: 3.6rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 10rem 0;\n    .top-section {\n      flex-direction: column;\n      gap: 5rem;\n    }\n    .about__subheading {\n      font-size: 1.8rem;\n    }\n    .about__heading {\n      font-size: 2.8rem;\n    }\n    .about__info__heading {\n      font-size: 3rem;\n    }\n  }\n"])));function A(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(F,{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"top-section",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsxs)("p",{className:"about__subheading",children:["Hi, I am ",Object(b.jsx)("span",{children:"Balamurugan Chandran"})]}),Object(b.jsx)("h2",{className:"about__heading",children:"A freelance Web developer"}),Object(b.jsx)("div",{className:"about__info",children:Object(b.jsxs)(g,{children:["I am from Tamilnadu, India. A place of beauty and nature. Since my childhood, i love art and design. I always try to design stuff with my unique point of view. I also love to create things that can be usefull to others.",Object(b.jsx)("br",{})," ",Object(b.jsx)("br",{}),"I started coding since I was in high school. Coding is also an art for me. I love it and now I have the opportunity to design along with the coding. I find it really interesting and I enjoyed the process a lot.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"My vision is to make the world a better place. Now almost everything is becoming better than ever. It is time for us to create more good stuff that helps the world to become a better place."]})}),Object(b.jsx)(z,{btnText:"Download CV",btnLink:"#"})]}),Object(b.jsx)("div",{className:"right",children:Object(b.jsx)("img",{src:C,alt:"me"})})]}),Object(b.jsxs)("div",{className:"about__info__items",children:[Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"Education"}),Object(b.jsx)(T,{title:"School",items:["Sethupathi Govt.Hr.Sec School, Thiruchuli, Tamilnadu"]}),Object(b.jsx)(T,{title:"College",items:["University college of Engineering BIT campus, Trichy, Tamilnadu"]})]}),Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"My Skills"}),Object(b.jsx)(T,{title:"FrontEnd",items:["HTML","CSS","JavaScript","REACT"]}),Object(b.jsx)(T,{title:"BackEnd",items:["Node","Express"]}),Object(b.jsx)(T,{title:"Database",items:["MongoDB"]}),Object(b.jsx)(T,{title:"Framework",items:["React Native"]}),Object(b.jsx)(T,{title:"Language",items:["Java","C"]})]}),Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"Projects"}),Object(b.jsx)(T,{title:"E-commerce",items:["Ordinary people can easily sell or buy product with fast& securely."]}),Object(b.jsx)(T,{title:"Weather",items:["A timeline feature, which shows the weather at regular points along your path."]})]})]})]}),Object(b.jsx)(D,{})]})})}var H,P=m.b.form(E||(E=Object(d.a)(["\n  width: 100%;\n  .form-group {\n    width: 100%;\n    margin-bottom: 2rem;\n  }\n  label {\n    font-size: 1.8rem;\n  }\n  input,\n  textarea {\n    width: 100%;\n    font-size: 2rem;\n    padding: 1.2rem;\n    color: var(--gray-1);\n    background-color: var(--deep-dark);\n    outline: none;\n    border: none;\n    border-radius: 8px;\n    margin-top: 1rem;\n  }\n  textarea {\n    min-height: 250px;\n    resize: vertical;\n  }\n  button[type='submit'] {\n    background-color: var(--gray-1);\n    color: var(--black);\n    font-size: 2rem;\n    display: inline-block;\n    outline: none;\n    border: none;\n    padding: 1rem 4rem;\n    border-radius: 8px;\n    cursor: pointer;\n  }\n"])));function W(){var n=Object(i.useState)(""),e=Object(v.a)(n,2),t=e[0],a=e[1],r=Object(i.useState)(""),o=Object(v.a)(r,2),c=o[0],s=o[1],l=Object(i.useState)(""),d=Object(v.a)(l,2),m=d[0],j=d[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(P,{children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"name",children:["Your Name",Object(b.jsx)("input",{type:"text",id:"name",name:"name",value:t,onChange:function(n){return a(n.target.value)}})]})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"email",children:["Your Email",Object(b.jsx)("input",{type:"email",id:"email",name:"email",value:c,onChange:function(n){return s(n.target.value)}})]})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"message",children:["Your message",Object(b.jsx)("textarea",{type:"text",id:"message",name:"message",value:m,onChange:function(n){return j(n.target.value)}})]})}),Object(b.jsx)("button",{type:"submit",children:"Send"})]})})}var K,Y=m.b.div(H||(H=Object(d.a)(["\n  padding: 2rem;\n  background-color: var(--deep-dark);\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n  .icon {\n    color: var(--white);\n    background-color: var(--gray-2);\n    padding: 1.3rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n  }\n  svg {\n    width: 3.5rem;\n  }\n"])));function V(n){var e=n.icon,t=void 0===e?Object(b.jsx)(w.h,{}):e,a=n.text,r=void 0===a?"I need text ":a;return Object(b.jsxs)(Y,{children:[Object(b.jsx)("div",{className:"icon",children:t}),Object(b.jsx)("div",{className:"info",children:Object(b.jsx)(g,{children:r})})]})}var q,J=m.b.div(K||(K=Object(d.a)(["\n  text-align: center;\n  p {\n    font-family: 'RobotoMono Regular';\n    font-size: 2rem;\n  }\n  h2 {\n    font-family: 'Montserrat Bold';\n    font-size: 6rem;\n    margin-top: 0.5rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    text-align: center;\n    p {\n      font-size: 1.2rem;\n    }\n    h2 {\n      font-size: 3.6rem;\n    }\n  }\n"])));function G(n){var e=n.subheading,t=void 0===e?"Need Subheading":e,a=n.heading,r=void 0===a?"need heading":a;return Object(b.jsxs)(J,{className:"section-title",children:[Object(b.jsx)("p",{children:t}),Object(b.jsx)("h2",{children:r})]})}var U=m.b.div(q||(q=Object(d.a)(["\n  padding: 10rem 0;\n  .contactSection__wrapper {\n    display: flex;\n    gap: 5rem;\n    margin-top: 7rem;\n    justify-content: space-between;\n    position: relative;\n  }\n  .contactSection__wrapper::after {\n    position: absolute;\n    content: '';\n    width: 2px;\n    height: 50%;\n    background-color: var(--gray-1);\n    left: 50%;\n    top: 30%;\n    transform: translate(-50%, -50%);\n  }\n  .left {\n    width: 100%;\n    max-width: 500px;\n  }\n  .right {\n    max-width: 500px;\n    width: 100%;\n    border-radius: 12px;\n    /* padding-left: 3rem; */\n  }\n  @media only screen and (max-width: 768px) {\n    .contactSection__wrapper {\n      flex-direction: column;\n    }\n    .contactSection__wrapper::after {\n      display: none;\n    }\n    .left,\n    .right {\n      max-width: 100%;\n    }\n    .right {\n      padding: 4rem 2rem 2rem 2rem;\n    }\n  }\n"])));function Z(){return Object(b.jsx)(U,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(G,{heading:"contact",subheading:"get in touch"}),Object(b.jsxs)("div",{className:"contactSection__wrapper",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsx)(V,{icon:Object(b.jsx)(w.e,{}),text:"+91 8778224246"}),Object(b.jsx)(V,{icon:Object(b.jsx)(w.d,{}),text:"chamirbala@gmail.com"}),Object(b.jsx)(V,{text:"Tamilnadu, India"})]}),Object(b.jsx)("div",{className:"right",children:Object(b.jsx)(W,{})})]})]})})}var Q,X=t.p+"static/media/map.08ffdce1.png",$=m.b.div(Q||(Q=Object(d.a)(["\n  background: url(",") no-repeat;\n  background-position: center;\n  background-size: cover;\n  min-height: 400px;\n  .container {\n    position: relative;\n    min-height: 400px;\n  }\n  .map__card {\n    position: absolute;\n    right: 10%;\n    bottom: 10%;\n    padding: 2rem;\n    background: var(--deep-dark);\n    width: 100%;\n    max-width: 300px;\n    border-radius: 12px;\n  }\n  .map__card__heading {\n    font-size: 3rem;\n    margin-bottom: 1rem;\n  }\n  .map__card__link {\n    display: inline-block;\n    font-size: 1.6rem;\n    margin-top: 3rem;\n    text-decoration: underline;\n  }\n  @media only screen and (max-width: 768px) {\n    background-position: 80% center;\n  }\n  @media only screen and (max-width: 400px) {\n    .map__card {\n      max-width: none;\n      right: auto;\n    }\n  }\n"])),X);function nn(){return Object(b.jsx)($,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"map__card",children:[Object(b.jsx)("h3",{className:"map__card__heading",children:"Here is me"}),Object(b.jsx)(g,{children:"Madurai, Tamilnadu, India"}),Object(b.jsx)("a",{className:"map__card__link",href:"https://www.google.co.in/maps/place/Tamil+Nadu+623608/@9.562136,78.3970981,15z/data=!4m5!3m4!1s0x3b011b0340562bc5:0xf4faf885165aa0a4!8m2!3d9.5632939!4d78.4638274?hl=authuseren&=0",target:"_blank",rel:"noreferrer",children:"Open in google map"})]})})})}function en(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Z,{}),Object(b.jsx)(nn,{})]})}var tn,an,rn=t.p+"static/media/about-sec-img.81c1b1ab.jpg",on=m.b.div(tn||(tn=Object(d.a)(["\n  padding: 10rem 0;\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    text-align: left;\n  }\n  .aboutSection__left,\n  .aboutSection__right {\n    flex: 1;\n  }\n  .section-title {\n    text-align: left;\n  }\n  .para {\n    margin-top: 2rem;\n    margin-left: 0;\n  }\n  .aboutSection__buttons {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 2rem;\n    margin-top: 2rem;\n  }\n  @media only screen and (max-width: 950px) {\n    .aboutSection__left {\n      flex: 4;\n    }\n    .aboutSection__right {\n      flex: 3;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      text-align: center;\n    }\n    .aboutSection__left,\n    .aboutSection__right {\n      width: 100%;\n    }\n    .aboutSection__right {\n      margin-top: 3rem;\n    }\n    .section-title {\n      text-align: center;\n    }\n    .para {\n      margin: 0 auto;\n      margin-top: 2rem;\n    }\n    .aboutSection__buttons {\n      flex-direction: column;\n      gap: 0rem;\n      .button-wrapper,\n      a {\n        width: 100%;\n        text-align: center;\n      }\n    }\n  }\n"])));function cn(){return Object(b.jsx)(on,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"aboutSection__left",children:[Object(b.jsx)(G,{subheading:"Let me introduce myself",heading:"About Me"}),Object(b.jsx)(g,{children:"I am a website designer and developer from Tamilnadu,India. I create professional websites. I love art and always try to show unique views to the audience through my design."}),Object(b.jsxs)("div",{className:"aboutSection__buttons",children:[Object(b.jsx)(z,{btnText:"Works",btnLink:"/projects"}),Object(b.jsx)(z,{btnText:"Read More",btnLink:"/about",outline:!0})]})]}),Object(b.jsx)("div",{className:"aboutSection__right",children:Object(b.jsx)("img",{className:"aboutImg",src:rn,alt:"Img"})})]})})}var sn,ln=m.b.div(an||(an=Object(d.a)(["\n  text-align: center;\n  .servicesItem__icon {\n    svg {\n      width: 3rem;\n    }\n  }\n  .servicesItem__title {\n    font-size: 2.5rem;\n    font-family: 'Montserrat SemiBold';\n  }\n  .para {\n    margin-top: 2rem;\n  }\n"])));function dn(n){var e=n.icon,t=void 0===e?Object(b.jsx)(w.c,{}):e,a=n.title,r=void 0===a?"Web Design":a,i=n.desc,o=void 0===i?"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok":i;return Object(b.jsxs)(ln,{className:"servicesItem",children:[Object(b.jsx)("div",{className:"servicesItem__icon",children:t}),Object(b.jsx)("div",{className:"servicesItem__title",children:r}),Object(b.jsx)(g,{children:o})]})}var mn=m.b.div(sn||(sn=Object(d.a)(["\n  padding: 10rem 0;\n  .services__allItems {\n    display: flex;\n    gap: 10rem;\n    justify-content: space-between;\n    margin-top: 5rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .services__allItems {\n      flex-direction: column;\n      max-width: 350px;\n      margin: 0 auto;\n      margin-top: 5rem;\n      gap: 5rem;\n    }\n  }\n"])));function bn(){return Object(b.jsx)(mn,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(G,{subheading:"What i will do for you",heading:"Services"}),Object(b.jsxs)("div",{className:"services__allItems",children:[Object(b.jsx)(dn,{icon:Object(b.jsx)(w.c,{}),title:"web design",desc:"I do ui/ux design for the website that helps website to get a unique look."}),Object(b.jsx)(dn,{icon:Object(b.jsx)(w.b,{}),title:"web dev",desc:"I also develop the websites. I create high performance website with blazing fast speed."}),Object(b.jsx)(dn,{icon:Object(b.jsx)(w.g,{}),title:"app Dev",desc:"I develop mobile application. I create mobile app with eye catching ui. "})]})]})})}var jn,hn=t(57),pn=t(55),xn=t(56),gn=t(54),un=t.p+"static/media/projectImg.771236e1.png",fn=m.b.div(jn||(jn=Object(d.a)(["\n  .projectItem__img {\n    width: 100%;\n    height: 400px;\n    border-radius: 12px;\n    overflow: hidden;\n    display: inline-block;\n    border: 3px solid var(--gray-2);\n    img {\n      height: 100%;\n    }\n  }\n  .projectItem__info {\n    margin-top: 1rem;\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 12px;\n  }\n  .projectItem__title {\n    font-size: 2.2rem;\n  }\n  .projectItem__desc {\n    font-size: 1.6rem;\n    font-family: 'RobotoMono Regular';\n    margin-top: 1rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projectItem__img {\n      height: 350px;\n    }\n  }\n"])));function _n(n){var e=n.img,t=void 0===e?un:e,a=n.title,r=void 0===a?"Project Name":a,i=n.desc,o=void 0===i?"Lorem Ipsum is simply dummy text of the printing and typesetting industry.":i;return Object(b.jsxs)(fn,{children:[Object(b.jsx)(s.b,{to:"/projects",className:"projectItem__img",children:Object(b.jsx)("img",{src:t,alt:"project img"})}),Object(b.jsxs)("div",{className:"projectItem__info",children:[Object(b.jsx)(s.b,{to:"#",children:Object(b.jsx)("h3",{className:"projectItem__title",children:r})}),Object(b.jsx)("p",{className:"projectItem__desc",children:o})]})]})}t(49);var On,vn=t(26),wn=t.p+"static/media/utracker.be1fe64a.jpg",yn=t.p+"static/media/greenctg.e51b3bbd.jpg",kn=[{id:Object(vn.v4)(),name:"E-Commerce",desc:"Ordinary people can easily sell or buy product with fast& securely.",img:wn},{id:Object(vn.v4)(),name:"Weather-app",desc:"A timeline feature, which shows the weather at regular points along your path.",img:yn}];xn.a.use([gn.a]);var Nn=m.b.div(On||(On=Object(d.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: flex;\n    gap: 3rem;\n    margin-top: 5rem;\n  }\n  .swiper-container {\n    padding-top: 8rem;\n    max-width: 100%;\n  }\n  .swiper-button-prev,\n  .swiper-button-next {\n    position: absolute;\n    height: 50px;\n    width: 50px;\n    background: var(--deep-dark);\n    z-index: 10;\n    right: 60px;\n    left: auto;\n    top: 0;\n    transform: translateY(50%);\n    color: var(--gray-1);\n    border-radius: 8px;\n  }\n  .swiper-button-next {\n    right: 0;\n  }\n  .swiper-button-prev::after,\n  .swiper-button-next::after {\n    font-size: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__allItems {\n      flex-direction: column;\n      max-width: 400px;\n      margin: 0 auto;\n      margin-top: 7rem;\n      gap: 5rem;\n      .projectItem__img {\n        width: 100%;\n      }\n    }\n  }\n"])));function In(){return Object(b.jsx)(Nn,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(G,{subheading:"some of my recent works",heading:"Projects"}),Object(b.jsx)("div",{className:"projects__allItems",children:Object(b.jsx)(hn.a,{spaceBetween:30,slidesPerView:1,navigation:!0,breakpoints:{640:{slidesPerView:1},768:{slidesPerView:2},1200:{slidesPerView:3}},children:kn.map((function(n,e){if(!(e>=5))return Object(b.jsx)(pn.a,{children:Object(b.jsx)(_n,{title:n.name,img:n.img,desc:n.desc})},n.id)}))})})]})})}var zn,Sn,Bn=t.p+"static/media/about-page-img.43fc7da0.jpg",Cn=t.p+"static/media/social-media-arrow.ecc0133c.svg",Ln=t.p+"static/media/scroll-down-arrow.8ad25c53.svg",Tn=m.b.div(zn||(zn=Object(d.a)(["\n  .hero {\n    height: 100vh;\n    min-height: 1000px;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n  .hero__heading {\n    font-size: 2rem;\n    margin-bottom: -4rem;\n    position: relative;\n    span {\n      display: inline-block;\n      width: 100%;\n    }\n    .hero__name {\n      font-family: 'Montserrat SemiBold';\n      font-size: 7rem;\n      color: #191970;\n    }\n  }\n  .hero__img {\n    max-width: 900px;\n    width: 100%;\n    height: 600px;\n    margin: 0 auto;\n    border: 2px solid var(--gray-1);\n  }\n  .hero__info {\n    margin-top: -18rem;\n    background: transparent;\n    color: white;\n  }\n  .hero__social,\n  .hero__scrollDown {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    position: absolute;\n\n    bottom: 20px;\n    width: 50px;\n  }\n  .hero__social {\n    left: 50px;\n  }\n  .hero__scrollDown {\n    right: 50px;\n  }\n\n  .hero__social__indicator,\n  .hero__scrollDown {\n    width: 50px;\n    p {\n      font-size: 1.6rem;\n      transform: translateY(-70px) rotate(90deg);\n      letter-spacing: 0.7rem;\n      text-transform: uppercase;\n    }\n    img {\n      max-height: 45px;\n      width: 16px;\n      margin: 0 auto;\n      object-fit: contain;\n    }\n  }\n  .hero__scrollDown {\n    img {\n      max-height: 70px;\n    }\n  }\n\n  .hero__social__text {\n    ul {\n      li {\n        margin-bottom: 1rem;\n        a {\n          display: inline-block;\n          font-size: 1.6rem;\n          transform: rotate(-90deg);\n          letter-spacing: 5px;\n          margin-bottom: 2rem;\n        }\n      }\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    .hero {\n      min-height: 750px;\n    }\n    .hero__heading {\n      font-size: 1.4rem;\n      margin-bottom: -3rem;\n      .hero__name {\n        font-size: 4.5rem;\n      }\n    }\n    .hero__img {\n      height: 300px;\n    }\n    .hero__info {\n      margin-top: 3rem;\n    }\n    .hero__social {\n      left: 0px;\n      bottom: -15%;\n      width: 20px;\n      .hero__social__indicator {\n        width: 20px;\n        p {\n          font-size: 1.2rem;\n        }\n        img {\n          max-height: 22px;\n        }\n      }\n      .hero__social__text {\n        ul {\n          li {\n            a {\n              font-size: 1.2rem;\n              margin-bottom: 1rem;\n            }\n          }\n        }\n      }\n    }\n    .hero__scrollDown {\n      right: 0;\n      width: 20px;\n      gap: 1rem;\n      p {\n        font-size: 1.3rem;\n      }\n    }\n    .red {\n      color: red;\n    }\n  }\n"])));function Mn(){return Object(b.jsx)(Tn,{children:Object(b.jsx)("div",{className:"hero",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("h1",{className:"hero__heading",children:[Object(b.jsx)("span",{children:"Hello, This is"}),Object(b.jsx)("span",{className:"hero__name",children:"Balamurugan"})]}),Object(b.jsx)("div",{className:"hero__img",children:Object(b.jsx)("img",{src:Bn,alt:""})}),Object(b.jsxs)("div",{className:"hero__info",children:[Object(b.jsx)(g,{children:"I am a web designer and developer. I love to design and make new web experiences for the people."}),Object(b.jsx)(z,{btnText:"see my works",btnLink:"/projects"})]}),Object(b.jsxs)("div",{className:"hero__social",children:[Object(b.jsxs)("div",{className:"hero__social__indicator",children:[Object(b.jsx)("p",{children:"Follow"}),Object(b.jsx)("img",{src:Cn,alt:"icon"})]}),Object(b.jsx)("div",{className:"hero__social__text",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.facebook.com/balamuruganc.c.54/",target:"_blank",rel:"noreferrer",children:"FB"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://twitter.com/FreakZ75079305",target:"_blank",rel:"noreferrer",children:"TW"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.instagram.com/balamuruganc.c/",target:"_blank",rel:"noreferrer",children:"IG"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"http://chamirbala.com",target:"_blank",rel:"noreferrer",children:"LI"})})]})})]}),Object(b.jsxs)("div",{className:"hero__scrollDown",children:[Object(b.jsx)("p",{children:"Scroll"}),Object(b.jsx)("img",{src:Ln,alt:"ScrollDown Arrow"})]})]})})})}function Dn(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(Mn,{}),Object(b.jsx)(cn,{}),Object(b.jsx)(bn,{}),Object(b.jsx)(In,{}),"'.",".'",Object(b.jsx)(D,{})]})}var Rn,En=m.b.div(Sn||(Sn=Object(d.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 5rem;\n    margin-top: 5rem;\n  }\n  .projects__searchBar {\n    position: relative;\n    width: 300px;\n    margin-top: 5rem;\n  }\n  .projects__searchBar input {\n    width: 100%;\n    font-size: 2rem;\n    padding: 0.8rem;\n    color: var(--black);\n    border-radius: 6px;\n    outline: none;\n    border: none;\n  }\n  .projects__searchBar .searchIcon {\n    position: absolute;\n    width: 2rem;\n\n    right: 1rem;\n  }\n  .projects__searchBar .searchIcon path {\n    color: var(--deep-dark);\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__searchBar,\n    .projects__searchBar form,\n    .projects__searchBar input {\n      width: 100%;\n    }\n  }\n"])));function Fn(){var n=Object(i.useState)(""),e=Object(v.a)(n,2),t=e[0],a=e[1],r=Object(i.useState)(kn),o=Object(v.a)(r,2),c=o[0],s=o[1];Object(i.useEffect)((function(){""!==t&&s((function(){return kn.filter((function(n){return n.name.toLowerCase().match(t.toLowerCase())}))}))}),[t]);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(En,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(G,{heading:"Projects",subheading:"some of my recent works"}),Object(b.jsx)("div",{className:"projects__searchBar",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"text",value:t,onChange:function(n){n.preventDefault(),a(n.target.value),!n.target.value.length>0&&s(kn)},placeholder:"Project Name"}),Object(b.jsx)(w.i,{className:"searchIcon"})]})}),Object(b.jsx)("div",{className:"projects__allItems",children:c.map((function(n){return Object(b.jsx)(_n,{title:n.name,desc:n.desc,img:n.img},n.id)}))})]})})})}function An(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(s.a,{children:[Object(b.jsx)(k,{}),Object(b.jsx)(N,{}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/about",children:Object(b.jsx)(A,{})}),Object(b.jsx)(l.a,{path:"/contact",children:Object(b.jsx)(en,{})}),Object(b.jsx)(l.a,{path:"/projects",children:Object(b.jsx)(Fn,{})}),Object(b.jsx)(l.a,{path:"/",children:Object(b.jsx)(Dn,{})})]}),Object(b.jsx)(f,{})]})})}var Hn,Pn=Object(m.a)(Rn||(Rn=Object(d.a)(["\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  :root{\n    --dark-bg: #262626;\n    --gray-1: #BCB4B4;\n    --deep-dark: #1E1E1E;\n    --gray-2: #363636;\n    --white : white;\n    --black: black;\n  }\n  html{\n    font-size: 10px;\n    font-family: 'Roboto Mono';\n    background-color: var(--dark-bg);\n  }\n  ul,li{\n    list-style: none;\n  }\n  a{\n    text-decoration: none;\n  }\n  img, svg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  button{\n    outline: none\n  }\n  .container {\n    max-width: 1200px;\n    width: 90%;\n    margin: 0 auto;\n  }\n/* Smooth Scroll  */\n  [data-scrollbar] {\n    height: 100vh;\n    overflow: hidden;\n    background-color: var(--gray-1);\n    .scroll-content {\n      background-color: var(--dark-bg);\n    }\n    .scrollbar-track.scrollbar-track-y {\n      background: var(--deep-dark);\n      .scrollbar-thumb-y {\n        background: var(--gray-1);\n      }\n    }\n  }\n"]))),Wn=t.p+"static/media/RobotoMono-Regular.418a8f9f.ttf",Kn=t.p+"static/media/Montserrat-SemiBold.fa8441f3.ttf",Yn=t.p+"static/media/Montserrat-Bold.079ca05d.ttf",Vn=Object(m.a)(Hn||(Hn=Object(d.a)(["\n  @font-face {\n    font-family: 'RobotoMono Regular';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat SemiBold';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat Bold';\n    src: url(",");\n    font-style: normal;\n  }\n  html{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  *{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  h1,h2,h3,h4,h5,h6{\n    font-family: 'Montserrat SemiBold'\n  }\n\n"])),Wn,Kn,Yn);c.a.render(Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Pn,{}),Object(b.jsx)(Vn,{}),Object(b.jsx)(An,{})]}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.a7338b6b.chunk.js.map