(this.webpackJsonptoggleapp=this.webpackJsonptoggleapp||[]).push([[0],{122:function(e,t,c){},123:function(e,t,c){},124:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(79),s=c.n(r),i=(c(69),c(89),c(9)),l=(c(1),c(5),c(70),c(71),c(23)),o=c(11),j=c(80),b=c(20),d=Object(j.a)({apiKey:"AIzaSyBak97Kjb9TEnRexxTD0kfmimDdzfpbhXc",authDomain:"teachercomdb.firebaseapp.com",databaseURL:"https://teachercomdb-default-rtdb.firebaseio.com",projectId:"teachercomdb",storageBucket:"teachercomdb.appspot.com",messagingSenderId:"735998735764",appId:"1:735998735764:web:82d17425482f1e8d7e4b81",measurementId:"G-1FTBSYGJ2G"}),u=(Object(b.a)(),Object(l.c)(d)),h=c(126),O=c(57),m=c(2),x=void 0,g=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),c=(t[0],t[1],Object(a.useState)("")),n=Object(i.a)(c,2),r=n[0],s=n[1],j=Object(a.useState)(!1),b=Object(i.a)(j,2),d=(b[0],b[1]),g=Object(o.m)(),p=new l.a,v=function(e){d(e)};return Object(m.jsx)("div",{className:"limiter",children:Object(m.jsx)("div",{className:"container-login100",children:Object(m.jsxs)("div",{className:"wrap-login100",children:[Object(m.jsx)("div",{className:"login100-form-title",children:Object(m.jsx)("span",{className:"login100-form-title-1",children:"Sign In"})}),Object(m.jsxs)("form",{className:"login100-form validate-form",onSubmit:function(e){e.preventDefault();var t=e.target.elements,c=t.email,a=t.password;console.log(c.value),Object(l.d)(u,c.value,a.value).then((function(e){var t=e.user;if(console.log(t),null!=t.accessToken){v(!0);var c=t.uid;g("/teacherslist/".concat(c))}else v(!1)})).catch((function(e){var t=e.message;s("Unable to Login User ID password Not correct"),v(!1),console.log(t)}))},children:[Object(m.jsxs)("div",{className:"wrap-input100 validate-input m-b-26","data-validate":"Username is required",children:[Object(m.jsx)("span",{className:"label-input100",children:"Username"}),Object(m.jsx)("input",{className:"input100",type:"text",name:"email",placeholder:"Enter username"}),Object(m.jsx)("span",{className:"focus-input100"})]}),Object(m.jsxs)("div",{className:"wrap-input100 validate-input m-b-18","data-validate":"Password is required",children:[Object(m.jsx)("span",{className:"label-input100",children:"Password"}),Object(m.jsx)("input",{className:"input100",type:"password",name:"password",placeholder:"Enter password"}),Object(m.jsx)("span",{className:"focus-input100"})]}),Object(m.jsx)("div",{className:"flex-sb-m w-full p-b-30",children:Object(m.jsxs)("div",{className:"contact100-form-checkbox",children:[Object(m.jsx)("input",{className:"input-checkbox100",id:"ckb1",type:"checkbox",name:"remember-me"}),Object(m.jsx)("label",{className:"label-checkbox100",children:"Remember me"})]})}),Object(m.jsx)("div",{className:"p-danger",children:Object(m.jsx)("h4",{children:r})}),Object(m.jsxs)("div",{className:"container-login100-form-btn",children:[Object(m.jsx)("div",{className:"container-login100-form-btn",children:Object(m.jsx)(h.a,{variant:"success",type:"submit",children:"Submit"})}),"\xa0 \xa0 Or \xa0 \xa0 \xa0 \xa0 \xa0 \xa0",Object(m.jsxs)("div",{className:"container-login100-form-btn",children:[Object(m.jsx)(h.a,{type:"button",variant:"dark",children:"Apple Login"}),Object(m.jsx)("b",{})]}),"\xa0 \xa0 \xa0 \xa0",Object(m.jsx)("div",{className:"container-login100-form-btn",children:Object(m.jsx)(O.a,{onSuccess:function(e){e&&g("/teachers/".concat("1vlXRxopDGNTzJgtPBy53PoUHDj1")),console.log(e)},onError:r})}),"\xa0 \xa0 \xa0 \xa0",Object(m.jsx)("div",{type:"button",className:"container-login100-form-btn",children:Object(m.jsx)(h.a,{onClick:function(e){Object(l.e)(u,p).then((function(e){e.user;var t=l.a.credentialFromResult(e).accessToken;v(!0),g("/teachers/".concat(t))})).catch((function(e){var t=e.code;x.currentErrorMessage="Unable to Login Facebook User ID Password or Credentials Not matched",console.log(t);e.message,e.customData.email,l.a.credentialFromError(e)}))},variant:"primary",children:"Facebook Login"})})]})]})]})})})},p=c(25),v=(c(91),c(127));var f=function(){var e=Object(o.o)().teacherId;console.log(e);var t=Object(a.useState)([]),c=Object(i.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(!0),l=Object(i.a)(s,2),j=(l[0],l[1]),d=Object(a.useState)(""),u=Object(i.a)(d,2),h=u[0],O=u[1],x=Object(b.a)(),g=Object(a.useCallback)((function(e){if(!e){console.log(e);var t=Object(b.c)(x,"/Teacher"),c=[];if(Object(b.b)(t,(function(e){e.forEach((function(e){var t=e.key,a=e.val();console.log(a),c.push({key:t,data:a})})),r(c),j(!1)})),""===e)return}n=n.filter((function(t){return t.data.TeacherName.includes(e)})),r(n),console.log(n)}));return Object(a.useEffect)((function(){console.log(e);var t=Object(b.c)(x,"/Teacher/"),c=[];Object(b.b)(t,(function(e){e.forEach((function(e){var t=e.key,a=e.val();c.push({key:t,data:a})})),r(c),j(!1)}))}),[r]),Object(m.jsxs)("div",{className:"MainDiv",children:[Object(m.jsx)("div",{className:"jumbotron text-center bg-sky",children:Object(m.jsx)("h2",{children:"Teachers Information"})}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-10 mx-auto col-md-8 mt-5 text-center",children:Object(m.jsxs)("form",{className:"mt-4",onSubmit:function(e){O(e.target.value)},children:[Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{type:"text",name:"search",placeholder:"Type Here to Search By Teacher Name or Language",value:h,onChange:function(e){O(e.target.value),g(e.target.value)}})}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:"button-orange",size:"lg",type:"submit",children:"Search"})}),Object(m.jsx)("div",{children:"\xa0 \xa0 \xa0"})]})})})})})}),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)(v.a,{className:"display table",children:[Object(m.jsx)("thead",{className:"thead-dark",children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Teacher Name"}),Object(m.jsx)("th",{children:"Created Date"}),Object(m.jsx)("th",{children:"View Course Content"}),Object(m.jsx)("th",{children:"Picture"})]})}),Object(m.jsx)("tbody",{children:n.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.data.TeacherName}),Object(m.jsx)("td",{children:e.data.CreatedDate}),Object(m.jsx)("td",{children:Object(m.jsx)(p.b,{id:t,className:"navbar-item",to:"/contents",children:"   Contents"})}),Object(m.jsxs)("td",{children:[" ",Object(m.jsx)("img",{id:e.data.ID,src:e.data.imageUrl,"background-repeat":"none",width:"100",height:"100"})]})]},t)}))})]})})]})},N=c(66),y=c(129),S=c(128);c(92);var k=function(e){var t=Object(o.o)().helm;return console.log(t),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(S.a,{bg:"light",variant:"light",children:Object(m.jsxs)(N.a,{children:[Object(m.jsx)(S.a.Brand,{href:"#home",children:"Documents"}),Object(m.jsxs)(y.a,{className:"me-auto",children:[Object(m.jsx)(y.a.Link,{href:"https://firebasestorage.googleapis.com/v0/b/teachercomdb.appspot.com/o/Documents%2FReport%20Analysis%20Algorithms%20.docx?alt=media&token=06c70225-87a1-493b-bad8-eba52dcb50d7",children:"Lecture001.docx "}),Object(m.jsx)(y.a.Link,{href:"https://firebasestorage.googleapis.com/v0/b/teachercomdb.appspot.com/o/Documents%2FStatement%20of%20Purpose.pdf?alt=media&token=dec4a462-c5a8-44cf-ae0a-c428447f9381",children:"Lecture002.dox"}),Object(m.jsx)(y.a.Link,{href:"#pricing",children:"Lecture003.docx"})]})]})}),Object(m.jsx)("br",{}),Object(m.jsx)(S.a,{bg:"light",variant:"light",children:Object(m.jsxs)(N.a,{children:[Object(m.jsx)(S.a.Brand,{href:"#home",children:"Videos"}),Object(m.jsxs)(y.a,{className:"me-auto",children:[Object(m.jsx)(y.a.Link,{href:"#home",children:"Basic Chinese"}),Object(m.jsx)(y.a.Link,{href:"#features",children:"Intermediate Chinese"}),Object(m.jsx)(y.a.Link,{href:"#pricing",children:"Advanced Chinese"})]})]})}),Object(m.jsx)("br",{}),Object(m.jsx)(S.a,{bg:"light",variant:"light",children:Object(m.jsxs)(N.a,{children:[Object(m.jsx)(S.a.Brand,{href:"#home",children:"Evaluate Your Skills"}),Object(m.jsxs)(y.a,{className:"me-auto",children:[Object(m.jsx)(y.a.Link,{href:"#home",children:"Level 1 Evaluate"}),Object(m.jsx)(y.a.Link,{href:"#features",children:"Level 1.1 Evaluate"}),Object(m.jsx)(y.a.Link,{href:"#pricing",children:"Level 1.2 Evaluate"})]})]})})]})},C=c(67),w=c(68);function E(e){return Object(m.jsx)("div",{className:"FancyBorder FancyBorder-"+e.color,children:Object(m.jsx)(N.a,{style:{backgroundColor:"lightblue"},children:e.children})})}function D(e){return Object(m.jsxs)(E,{color:"blue",children:[Object(m.jsx)("h1",{className:"Dialog-title",children:e.title}),Object(m.jsx)("p",{className:"Dialog-message",children:e.message})]})}function I(){return Object(m.jsx)("div",{children:Object(m.jsx)(D,{message:"Powered by Blue Machines Inc "})})}var T=function(){return Object(m.jsxs)(N.a,{children:[Object(m.jsx)(C.a,{children:Object(m.jsx)(w.a,{children:Object(m.jsx)(D,{title:"TeacherCom",message:"Language Learning Platform using AI"})})}),Object(m.jsx)(C.a,{children:Object(m.jsx)(w.a,{children:"\xa0"})})]})},F=c(130),L=function(){var e=Object(o.m)();return Object(m.jsxs)(F.a,{gap:3,children:[Object(m.jsx)(N.a,{children:Object(m.jsx)(C.a,{children:Object(m.jsxs)(w.a,{children:[Object(m.jsx)(h.a,{className:"success",onClick:function(){e("studentsignup/")},children:"Student Sign Up"}),Object(m.jsx)(h.a,{className:"primary",onClick:function(){e("login/")},children:"Login"}),Object(m.jsx)(h.a,{variant:"info",onClick:function(){e("signup/")},children:"Teacher Sign Up"})]})})}),Object(m.jsx)(N.a,{children:Object(m.jsxs)(C.a,{children:[Object(m.jsx)(w.a,{children:Object(m.jsx)("img",{src:"../../intro.png",width:"400px",height:"400px"})}),Object(m.jsxs)(w.a,{children:[Object(m.jsxs)("label",{children:[" Determination and untiring efforts to achieve our goals by using great technology and tools suits for your business and functional requirements.",Object(m.jsx)("label",{children:" This platform will provide educational courses , the unique feature is you can communicate with your instructor without knowing his language by just using microphone or text . "}),Object(m.jsx)("p",{children:" We are new but we have synergy to deliver to customer. "}),Object(m.jsx)("p",{children:" Implmentation using Advanced technology Stack "}),Object(m.jsx)("p",{children:" Microsoft .Net Stack "}),Object(m.jsx)("p",{children:" Google Cloud Stack with Realtime Database"})]}),Object(m.jsx)(y.a,{children:Object(m.jsx)(y.a.Item,{children:Object(m.jsx)(y.a.Link,{href:"https://http.bluemachines-inc.com/",children:" Company Site "})})})]})]})})]})},U=function(){var e=Object(o.m)(),t=Object(a.useState)(""),c=Object(i.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(""),j=Object(i.a)(s,2),b=j[0],d=j[1];return Object(m.jsx)(N.a,{children:Object(m.jsx)("main",{children:Object(m.jsx)("section",{children:Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"signuplogo",children:"Teacher Sign Up Credentials Required"}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"email-address",children:"Email address"}),Object(m.jsx)("input",{type:"email",label:"Email address",value:n,onChange:function(e){return r(e.target.value)},required:!0,placeholder:"Email address"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password"}),Object(m.jsx)("input",{type:"password",label:"Create password",value:b,onChange:function(e){return d(e.target.value)},required:!0,placeholder:"Password"})]}),Object(m.jsx)("button",{className:"btn btn-primary",type:"submit",onClick:function(t){t.preventDefault(),Object(l.b)(u,n,b).then((function(t){var c=t.user;console.log(c.uid);var a=c.uid;e("/teachersignup/".concat(a))})).catch((function(e){var t=e.code,c=e.message;console.log(t,c)}))},children:"Sign up"})]}),Object(m.jsxs)("p",{children:["Already have an account?"," ",Object(m.jsx)(p.c,{to:"/login",children:"Sign in"})]})]})]})})})})};var P=function(e){var t=e.title,c=e.children,n=Object(a.useState)(!1),r=Object(i.a)(n,2),s=r[0],l=r[1];return Object(m.jsxs)("section",{className:"panel",children:[Object(m.jsx)("h3",{children:t}),s?Object(m.jsx)("p",{children:c}):Object(m.jsx)("button",{onClick:function(){return l(!0)},children:"Click to see Important Update"})]})},A=c(60),B=c(81),q=c(59),R=c.n(q),Y=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),j=s[0],d=s[1],h=Object(a.useState)(""),O=Object(i.a)(h,2),x=O[0],g=O[1],v=Object(a.useState)(""),f=Object(i.a)(v,2),y=f[0],S=f[1],k=Object(a.useState)(""),C=Object(i.a)(k,2),w=C[0],E=C[1],D=Object(a.useState)(""),I=Object(i.a)(D,2),T=I[0],L=I[1],U=Object(a.useState)(""),q=Object(i.a)(U,2),Y=q[0],z=q[1],M=Object(a.useState)(""),J=Object(i.a)(M,2),W=J[0],G=J[1],H=Object(a.useState)(""),V=Object(i.a)(H,2),K=V[0],X=V[1],Q=Object(a.useMemo)((function(){return R()().getData()}),[]),Z=Object(o.m)(),$=Object(b.a)();return Object(m.jsx)(N.a,{children:Object(m.jsx)(F.a,{gap:3,children:Object(m.jsx)(N.a,{children:Object(m.jsx)("main",{children:Object(m.jsx)("section",{children:Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"signuplogo",children:"Student Sign Up"}),Object(m.jsx)(P,{isActive:!0,children:"Please make sure you enter enough information to be know about your study goals"}),Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"langauge",children:"What Langauage you want to choose to communicate"}),Object(m.jsx)("div",{children:Object(m.jsx)(B.a,{className:"dropdownlanguage",names:"international",defaultLanguage:"en",value:Y,placeholder:"Select Language",optionsSize:12,selectedSize:15,onSelect:function(e){z(Y)}})})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"email-address",children:"Email address"}),Object(m.jsx)("input",{type:"email",label:"Email address",value:w,onChange:function(e){return E(e.target.value)},required:!0,placeholder:"Email address"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password"}),Object(m.jsx)("input",{type:"password",label:"Create password",value:T,onChange:function(e){return L(e.target.value)},required:!0,placeholder:"Password"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"phoneNumber",children:"Phone Number"}),Object(m.jsx)("input",{type:"phoneNumber",label:"Phone Number",value:c,onChange:function(e){return n(e.target.value)},required:!0,placeholder:"Enter Phone Number"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"password",children:"Enter Availibility From"}),Object(m.jsx)("input",{type:"date",label:"Enter Availibility From",value:x,onChange:function(e){return g(e.target.value)},required:!0,placeholder:"Enter Availibility"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name"}),Object(m.jsx)("input",{type:"text",label:"Enter Your Name",value:y,onChange:function(e){return S(e.target.value)},required:!0,placeholder:"Enter your first and Last Name only"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"details",children:"What you want to achieve , Enter goals details"}),Object(m.jsx)("textarea",{name:"details",type:"textarea",placeholder:"Enter Details",rows:5,cols:80,value:j,onChange:function(e){return d(e.target.value)}})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"country",children:"Select Country"}),Object(m.jsx)(A.a,{options:Q,value:K,onChange:function(e){X(e)}})]}),Object(m.jsx)("button",{className:"btn btn-primary",type:"submit",onClick:function(e){e.preventDefault();var t="";Object(l.b)(u,w,T).then((function(e){var c=e.user;t=c.uid})).catch((function(e){var t=e.code,c=e.message;console.log(t,c)})),G(t),console.log(W),console.log(c),Object(b.d)(Object(b.c)($,"/Student/"+W),{CreatedBy:"",CreatedDate:"",studentClassificationID:11,StudentName:y,Phone:c,WhatToLearn:j,StartDate:x,UID:W,CountryCode:K,PreferedLanguage:Y,imageUrl:"https://firebasestorage.googleapis.com/v0/b/cubmessenger.appspot.com/o/fcIuzRj0uATpOm5Rb8HL4bbiRB03%2F613433863438.jpg?alt=media&token=542ad057-2856-45d1-9420-393989dd7fe5"}),Z("/login")},children:"Submit"})]}),Object(m.jsxs)("p",{children:["Already have an account?"," ",Object(m.jsx)(p.c,{to:"/login",children:"Sign in"})]})]})})})})})})},z=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),l=s[0],j=s[1],d=Object(a.useState)(""),u=Object(i.a)(d,2),h=u[0],O=u[1],x=Object(a.useState)(""),g=Object(i.a)(x,2),v=g[0],f=g[1],y=Object(a.useState)(""),S=Object(i.a)(y,2),k=S[0],C=S[1],w=Object(a.useState)(""),E=Object(i.a)(w,2),D=E[0],I=E[1],T=Object(a.useMemo)((function(){return R()().getData()}),[]),L=(Object(a.useRef)(null),Object(o.m)()),U=Object(o.o)().userId;console.log(U);var B=Object(b.a)(),q=U;return Object(m.jsx)(N.a,{children:Object(m.jsx)(F.a,{gap:3,children:Object(m.jsx)(N.a,{children:Object(m.jsx)("main",{children:Object(m.jsxs)("section",{children:[Object(m.jsx)("div",{className:"signuplogo",children:"Teacher Sign Up Additional Information"}),Object(m.jsx)(P,{isActive:!0,children:"Please make sure you enter enough information to be qualified for teacher."}),Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"phoneNumber",children:"Phone Number"}),Object(m.jsx)("input",{type:"phoneNumber",label:"Phone Number",value:c,onChange:function(e){return n(e.target.value)},required:!0,placeholder:"Enter Phone Number"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password"}),Object(m.jsx)("input",{type:"date",label:"Enter Availibility From",value:h,onChange:function(e){return O(e.target.value)},required:!0,placeholder:"Enter Availibility"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name"}),Object(m.jsx)("input",{type:"text",label:"Enter Your Name",value:k,onChange:function(e){return C(e.target.value)},required:!0,placeholder:"Enter your first and Last Name only"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"details",children:"Enter Details"}),Object(m.jsx)("textarea",{name:"details",type:"textarea",placeholder:"Enter Details",rows:5,cols:80,value:l,onChange:function(e){return j(e.target.value)}})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"details",children:"Enter Years of Teaching Experience"}),Object(m.jsx)("input",{type:"number",label:"Enter Years",value:v,onChange:function(e){return f(e.target.value)},required:!0,placeholder:"Enter Years"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"country",children:"Select Country"}),Object(m.jsx)(A.a,{options:T,value:D,onChange:function(e){I(e)}})]})]}),Object(m.jsx)("button",{className:"btn btn-primary",type:"submit",onClick:function(e){e.preventDefault(),console.log(c),Object(b.d)(Object(b.c)(B,"/Teacher/"+U),{CreatedBy:"",CreatedDate:"",TeacherClassificationID:11,TeacherName:k,Phone:c,Experience:l,YearsOfTeaching:v,StartDate:h,UID:q,CountryCode:D,imageUrl:"https://firebasestorage.googleapis.com/v0/b/cubmessenger.appspot.com/o/fcIuzRj0uATpOm5Rb8HL4bbiRB03%2F613433863438.jpg?alt=media&token=542ad057-2856-45d1-9420-393989dd7fe5"}),L("/login")},children:"Submit"})]}),Object(m.jsxs)("p",{children:["Already have an account?"," ",Object(m.jsx)(p.c,{to:"/login",children:"Sign in"})]})]})})})})})};c(122);var M=function(){var e=Object(o.o)(),t=Object(o.m)(),c=e.teacherId;console.log(c);var n=Object(a.useState)([]),r=Object(i.a)(n,2),s=r[0],l=r[1],j=Object(a.useState)(""),d=Object(i.a)(j,2),u=(d[0],d[1]),O=Object(a.useState)(!0),x=Object(i.a)(O,2),g=(x[0],x[1]),p=Object(a.useState)(""),v=Object(i.a)(p,2),f=v[0],N=v[1],y=Object(b.a)(),S=function(e){console.log(e.target.value);var c=e.target.value;u(c),t("/teacherselected/".concat(c))},k=Object(a.useCallback)((function(e){if(!e){console.log(e);var t=Object(b.c)(y,"/Teacher"),c=[];if(Object(b.b)(t,(function(e){e.forEach((function(e){var t=e.key,a=e.val();console.log(a),c.push({key:t,data:a})})),l(c),g(!1)})),""===e)return}s=s.filter((function(t){return t.data.TeacherName.includes(e)})),l(s),console.log(s)}));return Object(a.useEffect)((function(){console.log(c);var e=Object(b.c)(y,"/Teacher/"),t=[];Object(b.b)(e,(function(e){e.forEach((function(e){var c=e.key,a=e.val();t.push({key:c,data:a})})),l(t),g(!1)}))}),[l]),Object(m.jsxs)("div",{className:"MainDiv",children:[Object(m.jsx)("div",{className:"jumbotron text-center bg-sky",children:Object(m.jsx)("h2",{children:"Teachers Information"})}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-10 mx-auto col-md-8 mt-5 text-center",children:Object(m.jsxs)("form",{className:"mt-4",onSubmit:function(e){N(e.target.value)},children:[Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{type:"text",name:"search",placeholder:"Type Here to Search By Teacher Name or Language",value:f,onChange:function(e){N(e.target.value),k(e.target.value)}})}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:"button-orange",size:"lg",type:"submit",children:"Search"})}),Object(m.jsx)("div",{children:"\xa0 \xa0 \xa0"})]})})})})})}),Object(m.jsx)("div",{className:"container",children:s.map((function(e,t){return Object(m.jsxs)("li",{value:e.data.UID,children:[Object(m.jsx)("img",{id:e.data.ID,src:e.data.imageUrl,"background-repeat":"none",width:"100",height:"100"}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:e.data.TeacherName})," "+e.data.Experience+" ","having ",e.data.YearsOfTeaching," years of expereince."]}),"        ",Object(m.jsxs)("span",{children:[" ",Object(m.jsx)(h.a,{variant:"primary",value:e.data.UID,onClick:S,children:" Select Me "})," "]})]},t)}))})]})},J=(c(123),function(e){var t=e.props,c=t,a=c.videoUrl;t.disabled;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("video",{disabled:c.disabled,src:a,controls:!0,width:"100%",children:"Sorry, your browser doesn't support embedded videos."})})});var W=function(){var e=Object(o.o)().teacherId,t=(Object(o.m)(),Object(b.a)()),c=Object(a.useState)([]),n=Object(i.a)(c,2),r=n[0],s=n[1],l=Object(a.useState)(undefined),j=Object(i.a)(l,2),d=j[0],u=j[1],O=Object(a.useState)(""),x=Object(i.a)(O,2),g=x[0],p=x[1],v=Object(a.useState)(!0),f=Object(i.a)(v,2),N=f[0],y=f[1],S=Object(a.useState)("Enable"),k=Object(i.a)(S,2),C=k[0],w=k[1];return Object(a.useEffect)((function(){var c=[],a=Object(b.c)(t,"/Teacher");Object(b.b)(a,(function(t){t.forEach((function(t){var a=t.key;console.log(a);var n=t.val();console.log(n),console.log(e),a===e&&c.push({key:a,data:n})})),u(c[0]),s(c)}))}),[s]),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Teacher Description"}),r.map((function(e,t){return Object(m.jsxs)("section",{className:"profile",children:[Object(m.jsx)("h2",{children:e.data.TeacherName}),Object(m.jsx)("img",{className:"avatar",src:e.data.imageUrl,alt:e.data.TeacherName,width:70,height:70}),Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("b",{children:"Experience: "}),e.data.Experience]}),Object(m.jsxs)("li",{children:[Object(m.jsxs)("b",{children:["Year of Experience : ",e.data.YearsOfTeaching," "]}),e.data.CountryCode.label]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("b",{children:"Available From: "}),e.data.StartDate]})]})]},t)})),Object(m.jsx)("section",{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col0 col-sm",children:Object(m.jsx)(h.a,{variant:"primary",children:" Register Demo "})}),Object(m.jsxs)("div",{className:"col0 col-sm",children:[Object(m.jsx)(J,{props:{videoUrl:g,disabled:N}}),Object(m.jsxs)(h.a,{onClick:function(){var e=d.data.videoUrl;p(e),!0===N?(y(!1),w("Disable")):(y(!0),w("Enable"))},variant:"success",children:[" ",C," Video Introduction "]})]})]})})]})},G=Object(a.createContext)();function H(e){var t=e.children,c=Object(a.useState)(),n=Object(i.a)(c,2),r=n[0],s=n[1],l=Object(a.useState)(!0),o=Object(i.a)(l,2),j=o[0],b=o[1];Object(a.useEffect)((function(){return u.onAuthStateChanged((function(e){s(e),b(!1)}))}),[]);var d={currentUser:r,getUser:function(){return u.currentUser},login:function(e,t){return u.signInWithEmailAndPassword(e,t)},signOut:function(){return u.signOut()},signUp:function(e,t){return u.createUserWithEmailAndPassword(e,t)}};return Object(m.jsx)(G.Provider,{value:d,children:!j&&t})}var V=function(){var e=Object(a.useState)((function(){return JSON.parse(localStorage.getItem("auth"))||!1})),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){localStorage.setItem("auth",JSON.stringify(c)),n(c)}),[c]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(H,{children:[Object(m.jsx)(T,{}),Object(m.jsx)(p.a,{children:Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{exact:!0,path:"/",element:Object(m.jsx)(L,{})}),"\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002 \u2002\u2002",Object(m.jsx)(o.a,{exact:!0,path:"/login",element:Object(m.jsx)(g,{})}),Object(m.jsx)(o.a,{exact:!0,path:"/signup",element:Object(m.jsx)(U,{})}),Object(m.jsx)(o.a,{exact:!0,path:"/studentsignup",element:Object(m.jsx)(Y,{})}),Object(m.jsx)(o.a,{exact:!0,path:"/teachersignup/:userId",element:Object(m.jsx)(z,{})}),"\u2002\u2002\u2002",Object(m.jsx)(o.a,{exact:!0,path:"/teachers/:teacherId",element:Object(m.jsx)(f,{})}),"\u2002\u2002\u2002",Object(m.jsx)(o.a,{exact:!0,path:"/teacherselected/:teacherId",element:Object(m.jsx)(W,{})}),"\u2002\u2002\u2002",Object(m.jsx)(o.a,{exact:!0,path:"/teacherslist/:teacherId",element:Object(m.jsx)(M,{})}),Object(m.jsx)(o.a,{exact:!0,path:"/contents",element:Object(m.jsx)(k,{})}),"\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002"]})})]}),Object(m.jsx)(I,{})]})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,131)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.createRoot(document.getElementById("root")).render(Object(m.jsx)(O.b,{clientId:"221869384055-jo745ppfdidkklaqltrlrnklbh10nk72.apps.googleusercontent.com",children:Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(V,{})})})),K()},70:function(e,t,c){},71:function(e,t,c){},89:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){}},[[124,1,2]]]);
//# sourceMappingURL=main.c49564fc.chunk.js.map