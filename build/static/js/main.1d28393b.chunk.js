(this.webpackJsonptoggleapp=this.webpackJsonptoggleapp||[]).push([[0],{121:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(78),r=c.n(s),i=(c(88),c(89),c(1),c(5),c(9)),l=(c(69),c(70),c(22)),j=Object(a.createContext)(),o=c(11),b=c(79),d=c(24),u=Object(b.a)({apiKey:"AIzaSyBak97Kjb9TEnRexxTD0kfmimDdzfpbhXc",authDomain:"teachercomdb.firebaseapp.com",databaseURL:"https://teachercomdb-default-rtdb.firebaseio.com",projectId:"teachercomdb",storageBucket:"teachercomdb.appspot.com",messagingSenderId:"735998735764",appId:"1:735998735764:web:82d17425482f1e8d7e4b81",measurementId:"G-1FTBSYGJ2G"}),h=(Object(d.a)(),Object(l.c)(u)),O=c(123),m=c(57),x=c(2),p=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),c=(t[0],t[1],Object(o.m)()),n=new l.a,s=Object(a.useContext)(j);if(s){var r=s.uuid;c("/teachers/".concat(r,"/"))}return Object(x.jsx)("div",{className:"limiter",children:Object(x.jsx)("div",{className:"container-login100",children:Object(x.jsxs)("div",{className:"wrap-login100",children:[Object(x.jsx)("div",{className:"login100-form-title",children:Object(x.jsx)("span",{className:"login100-form-title-1",children:"Sign In"})}),Object(x.jsxs)("form",{className:"login100-form validate-form",onSubmit:function(e){e.preventDefault();var t=e.target.elements,a=t.email,n=t.password;console.log(a.value),Object(l.d)(h,a.value,n.value).then((function(e){var t=e.user;if(console.log(t),null!=t.accessToken){var a=t.uid;c("/teachers/".concat(a,"/"))}})).catch((function(e){var t=e.message;console.log(t)}))},children:[Object(x.jsxs)("div",{className:"wrap-input100 validate-input m-b-26","data-validate":"Username is required",children:[Object(x.jsx)("span",{className:"label-input100",children:"Username"}),Object(x.jsx)("input",{className:"input100",type:"text",name:"email",placeholder:"Enter username"}),Object(x.jsx)("span",{className:"focus-input100"})]}),Object(x.jsxs)("div",{className:"wrap-input100 validate-input m-b-18","data-validate":"Password is required",children:[Object(x.jsx)("span",{className:"label-input100",children:"Password"}),Object(x.jsx)("input",{className:"input100",type:"password",name:"password",placeholder:"Enter password"}),Object(x.jsx)("span",{className:"focus-input100"})]}),Object(x.jsx)("div",{className:"flex-sb-m w-full p-b-30",children:Object(x.jsxs)("div",{className:"contact100-form-checkbox",children:[Object(x.jsx)("input",{className:"input-checkbox100",id:"ckb1",type:"checkbox",name:"remember-me"}),Object(x.jsx)("label",{className:"label-checkbox100",children:"Remember me"})]})}),Object(x.jsxs)("div",{className:"container-login100-form-btn",children:[Object(x.jsx)("div",{className:"container-login100-form-btn",children:Object(x.jsx)(O.a,{variant:"success",type:"submit",children:"Submit"})}),"\xa0 \xa0 Or \xa0 \xa0 \xa0 \xa0 \xa0 \xa0",Object(x.jsxs)("div",{className:"container-login100-form-btn",children:[Object(x.jsx)(O.a,{type:"button",variant:"dark",children:"Apple Login"}),Object(x.jsx)("b",{})]}),"\xa0 \xa0 \xa0 \xa0",Object(x.jsx)("div",{className:"container-login100-form-btn",children:Object(x.jsx)(m.a,{onSuccess:function(e){e&&c("/teachers/".concat("1vlXRxopDGNTzJgtPBy53PoUHDj1")),console.log(e)},onError:function(e){console.log(e)}})}),"\xa0 \xa0 \xa0 \xa0",Object(x.jsx)("div",{type:"button",className:"container-login100-form-btn",children:Object(x.jsx)(O.a,{onClick:function(e){Object(l.e)(h,n).then((function(e){e.user,l.a.credentialFromResult(e).accessToken})).catch((function(e){e.code,e.message,e.customData.email,l.a.credentialFromError(e)}))},variant:"primary",children:"Facebook Login"})})]})]})]})})})},g=c(25),v=(c(91),c(124));var f=function(){var e=Object(o.o)().teacherId;console.log(e);var t=Object(a.useState)([]),c=Object(i.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(!0),l=Object(i.a)(r,2),j=(l[0],l[1]),b=Object(a.useState)(""),u=Object(i.a)(b,2),h=u[0],O=u[1],m=Object(d.a)(),p=Object(a.useCallback)((function(e){if(!e){var t=Object(d.c)(m,"/Teacher"),c=[];Object(d.b)(t,(function(e){e.forEach((function(e){var t=e.key,a=e.val();console.log(a),c.push({key:t,data:a})})),s(c),j(!1)}))}console.log(n),n=n.filter((function(t){return t.data.TeacherName.includes(e)})),s(n)}));return Object(a.useEffect)((function(){console.log(e);var t=Object(d.c)(m,"/Teacher/"),c=[];Object(d.b)(t,(function(e){e.forEach((function(e){var t=e.key,a=e.val();c.push({key:t,data:a})})),s(c),j(!1)}))}),[s]),Object(x.jsxs)("div",{className:"MainDiv",children:[Object(x.jsx)("div",{className:"jumbotron text-center bg-sky",children:Object(x.jsx)("h2",{children:"Teachers Information"})}),Object(x.jsx)("div",{className:"container",children:Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"row",children:Object(x.jsx)("div",{className:"col-10 mx-auto col-md-8 mt-5 text-center",children:Object(x.jsxs)("form",{className:"mt-4",onSubmit:function(e){O(e.target.value)},children:[Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{type:"text",name:"search",placeholder:"Type Here to Search By Teacher Name or Language",value:h,onChange:function(e){O(e.target.value),p(e.target.value)}})}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{className:"button-orange",size:"lg",type:"submit",children:"Search"})}),Object(x.jsx)("div",{children:"\xa0 \xa0 \xa0"})]})})})})})}),Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)(v.a,{className:"display table",children:[Object(x.jsx)("thead",{className:"thead-dark",children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Teacher Name"}),Object(x.jsx)("th",{children:"Created Date"}),Object(x.jsx)("th",{children:"View Course Content"}),Object(x.jsx)("th",{children:"Picture"})]})}),Object(x.jsx)("tbody",{children:n.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:e.data.TeacherName}),Object(x.jsx)("td",{children:e.data.CreatedDate}),Object(x.jsx)("td",{children:Object(x.jsx)(g.b,{id:t,className:"navbar-item",to:"/contents",children:"   Contents"})}),Object(x.jsxs)("td",{children:[" ",Object(x.jsx)("img",{id:e.data.ID,src:e.data.imageUrl,"background-repeat":"none",width:"100",height:"100"})]})]},t)}))})]})})]})},y=c(66),N=c(126),k=c(125);var S=function(e){var t=Object(o.o)().helm;return console.log(t),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(k.a,{bg:"dark",variant:"dark",children:Object(x.jsxs)(y.a,{children:[Object(x.jsx)(k.a.Brand,{href:"#home",children:"Documents"}),Object(x.jsxs)(N.a,{className:"me-auto",children:[Object(x.jsx)(N.a.Link,{href:"https://firebasestorage.googleapis.com/v0/b/teachercomdb.appspot.com/o/Documents%2FReport%20Analysis%20Algorithms%20.docx?alt=media&token=06c70225-87a1-493b-bad8-eba52dcb50d7",children:"Lecture001.docx "}),Object(x.jsx)(N.a.Link,{href:"https://firebasestorage.googleapis.com/v0/b/teachercomdb.appspot.com/o/Documents%2FStatement%20of%20Purpose.pdf?alt=media&token=dec4a462-c5a8-44cf-ae0a-c428447f9381",children:"Lecture002.dox"}),Object(x.jsx)(N.a.Link,{href:"#pricing",children:"Lecture003.docx"})]})]})}),Object(x.jsx)("br",{}),Object(x.jsx)(k.a,{bg:"primary",variant:"dark",children:Object(x.jsxs)(y.a,{children:[Object(x.jsx)(k.a.Brand,{href:"#home",children:"Videos"}),Object(x.jsxs)(N.a,{className:"me-auto",children:[Object(x.jsx)(N.a.Link,{href:"#home",children:"Basic Chinese"}),Object(x.jsx)(N.a.Link,{href:"#features",children:"Intermediate Chinese"}),Object(x.jsx)(N.a.Link,{href:"#pricing",children:"Advanced Chinese"})]})]})}),Object(x.jsx)("br",{}),Object(x.jsx)(k.a,{bg:"light",variant:"light",children:Object(x.jsxs)(y.a,{children:[Object(x.jsx)(k.a.Brand,{href:"#home",children:"Evaluate Your Skills"}),Object(x.jsxs)(N.a,{className:"me-auto",children:[Object(x.jsx)(N.a.Link,{href:"#home",children:"Level 1 Evaluate"}),Object(x.jsx)(N.a.Link,{href:"#features",children:"Level 1.1 Evaluate"}),Object(x.jsx)(N.a.Link,{href:"#pricing",children:"Level 1.2 Evaluate"})]})]})})]})},C=c(67),w=c(68);function E(e){return Object(x.jsx)("div",{className:"FancyBorder FancyBorder-"+e.color,children:Object(x.jsx)(y.a,{style:{backgroundColor:"lightblue"},children:e.children})})}function F(e){return Object(x.jsxs)(E,{color:"blue",children:[Object(x.jsx)("h1",{className:"Dialog-title",children:e.title}),Object(x.jsx)("p",{className:"Dialog-message",children:e.message})]})}function D(){return Object(x.jsx)("div",{children:Object(x.jsx)(F,{message:"Powered by Blue Machines Inc "})})}var L=function(){return Object(x.jsxs)(y.a,{children:[Object(x.jsx)(C.a,{children:Object(x.jsx)(w.a,{children:Object(x.jsx)(F,{title:"TeacherCom",message:"Language Learning Platform using AI"})})}),Object(x.jsx)(C.a,{children:Object(x.jsx)(w.a,{children:"\xa0"})})]})},T=c(127),I=function(){var e=Object(o.m)();return Object(x.jsxs)(T.a,{gap:3,children:[Object(x.jsx)(y.a,{children:Object(x.jsx)(C.a,{children:Object(x.jsxs)(w.a,{children:[Object(x.jsx)(O.a,{className:"success",onClick:function(){e("studentsignup/")},children:"Student Sign Up"}),Object(x.jsx)(O.a,{className:"primary",onClick:function(){e("login/")},children:"Login"}),Object(x.jsx)(O.a,{variant:"info",onClick:function(){e("signup/")},children:"Teacher Sign Up"})]})})}),Object(x.jsx)(y.a,{children:Object(x.jsxs)(C.a,{children:[Object(x.jsx)(w.a,{children:Object(x.jsx)("img",{src:"../../intro.png",width:"400px",height:"400px"})}),Object(x.jsxs)(w.a,{children:[Object(x.jsxs)("label",{children:[" Determination and untiring efforts to achieve our goals by using great technology and tools suits for your business and functional requirements.",Object(x.jsx)("label",{children:" This platform will provide educational courses , the unique feature is you can communicate with your instructor without knowing his language by just using microphone or text . "}),Object(x.jsx)("p",{children:" We are new but we have synergy to deliver to customer. "}),Object(x.jsx)("p",{children:" Implmentation using Advanced technology Stack "}),Object(x.jsx)("p",{children:" Microsoft .Net Stack "}),Object(x.jsx)("p",{children:" Google Cloud Stack with Realtime Database"})]}),Object(x.jsx)(N.a,{children:Object(x.jsx)(N.a.Item,{children:Object(x.jsx)(N.a.Link,{href:"https://http.bluemachines-inc.com/",children:" Company Site "})})})]})]})})]})},P=function(){var e=Object(o.m)(),t=Object(a.useState)(""),c=Object(i.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(""),j=Object(i.a)(r,2),b=j[0],d=j[1];return Object(x.jsx)(y.a,{children:Object(x.jsx)("main",{children:Object(x.jsx)("section",{children:Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"signuplogo",children:"Teacher Sign Up Credentials Required"}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("form",{children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"email-address",children:"Email address"}),Object(x.jsx)("input",{type:"email",label:"Email address",value:n,onChange:function(e){return s(e.target.value)},required:!0,placeholder:"Email address"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"password",children:"Password"}),Object(x.jsx)("input",{type:"password",label:"Create password",value:b,onChange:function(e){return d(e.target.value)},required:!0,placeholder:"Password"})]}),Object(x.jsx)("button",{className:"btn btn-primary",type:"submit",onClick:function(t){t.preventDefault(),Object(l.b)(h,n,b).then((function(t){var c=t.user;console.log(c.uid);var a=c.uid;e("/teachersignup/".concat(a))})).catch((function(e){var t=e.code,c=e.message;console.log(t,c)}))},children:"Sign up"})]}),Object(x.jsxs)("p",{children:["Already have an account?"," ",Object(x.jsx)(g.c,{to:"/login",children:"Sign in"})]})]})]})})})})};var A=function(e){var t=e.title,c=e.children,n=Object(a.useState)(!1),s=Object(i.a)(n,2),r=s[0],l=s[1];return Object(x.jsxs)("section",{className:"panel",children:[Object(x.jsx)("h3",{children:t}),r?Object(x.jsx)("p",{children:c}):Object(x.jsx)("button",{onClick:function(){return l(!0)},children:"Click to see Important Update"})]})},q=c(60),B=c(80),R=c(59),U=c.n(R),Y=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),j=r[0],b=r[1],u=Object(a.useState)(""),O=Object(i.a)(u,2),m=O[0],p=O[1],v=Object(a.useState)(""),f=Object(i.a)(v,2),N=f[0],k=f[1],S=Object(a.useState)(""),C=Object(i.a)(S,2),w=C[0],E=C[1],F=Object(a.useState)(""),D=Object(i.a)(F,2),L=D[0],I=D[1],P=Object(a.useState)(""),R=Object(i.a)(P,2),Y=R[0],z=R[1],M=Object(a.useState)(""),G=Object(i.a)(M,2),H=G[0],J=G[1],W=Object(a.useState)(""),K=Object(i.a)(W,2),V=K[0],X=K[1],Q=Object(a.useMemo)((function(){return U()().getData()}),[]),Z=Object(o.m)(),$=Object(d.a)();return Object(x.jsx)(y.a,{children:Object(x.jsx)(T.a,{gap:3,children:Object(x.jsx)(y.a,{children:Object(x.jsx)("main",{children:Object(x.jsx)("section",{children:Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"signuplogo",children:"Student Sign Up"}),Object(x.jsx)(A,{isActive:!0,children:"Please make sure you enter enough information to be know about your study goals"}),Object(x.jsxs)("form",{children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"langauge",children:"What Langauage you want to choose to communicate"}),Object(x.jsx)(B.a,{defaultLanguage:"en",onSelect:function(e){z(Y)}})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"email-address",children:"Email address"}),Object(x.jsx)("input",{type:"email",label:"Email address",value:w,onChange:function(e){return E(e.target.value)},required:!0,placeholder:"Email address"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"password",children:"Password"}),Object(x.jsx)("input",{type:"password",label:"Create password",value:L,onChange:function(e){return I(e.target.value)},required:!0,placeholder:"Password"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"phoneNumber",children:"Phone Number"}),Object(x.jsx)("input",{type:"phoneNumber",label:"Phone Number",value:c,onChange:function(e){return n(e.target.value)},required:!0,placeholder:"Enter Phone Number"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"password",children:"Enter Availibility From"}),Object(x.jsx)("input",{type:"date",label:"Enter Availibility From",value:m,onChange:function(e){return p(e.target.value)},required:!0,placeholder:"Enter Availibility"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"name",children:"Name"}),Object(x.jsx)("input",{type:"text",label:"Enter Your Name",value:N,onChange:function(e){return k(e.target.value)},required:!0,placeholder:"Enter your first and Last Name only"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"details",children:"What you want to achieve , Enter goals details"}),Object(x.jsx)("textarea",{name:"details",type:"textarea",placeholder:"Enter Details",rows:5,cols:80,value:j,onChange:function(e){return b(e.target.value)}})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"country",children:"Select Country"}),Object(x.jsx)(q.a,{options:Q,value:V,onChange:function(e){X(e)}})]}),Object(x.jsx)("button",{className:"btn btn-primary",type:"submit",onClick:function(e){e.preventDefault(),Object(l.b)(h,w,L).then((function(e){var t=e.user;console.log(t.uid);var c=t.uid;J(c)})).catch((function(e){var t=e.code,c=e.message;console.log(t,c)})),console.log(c),Object(d.d)(Object(d.c)($,"/Student/"+H),{CreatedBy:"",CreatedDate:"",studentClassificationID:11,StudentName:N,Phone:c,WhatToLearn:j,StartDate:m,UID:H,CountryCode:V,PreferedLanguage:Y,imageUrl:"https://firebasestorage.googleapis.com/v0/b/cubmessenger.appspot.com/o/fcIuzRj0uATpOm5Rb8HL4bbiRB03%2F613433863438.jpg?alt=media&token=542ad057-2856-45d1-9420-393989dd7fe5"}),Z("/login")},children:"Submit"})]}),Object(x.jsxs)("p",{children:["Already have an account?"," ",Object(x.jsx)(g.c,{to:"/login",children:"Sign in"})]})]})})})})})})},z=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),l=r[0],j=r[1],b=Object(a.useState)(""),u=Object(i.a)(b,2),h=u[0],O=u[1],m=Object(a.useState)(""),p=Object(i.a)(m,2),v=p[0],f=p[1],N=Object(a.useState)(""),k=Object(i.a)(N,2),S=k[0],C=k[1],w=Object(a.useState)(""),E=Object(i.a)(w,2),F=E[0],D=E[1],L=Object(a.useMemo)((function(){return U()().getData()}),[]),I=(Object(a.useRef)(null),Object(o.m)()),P=Object(o.o)().userId;console.log(P);var B=Object(d.a)(),R=P;return Object(x.jsx)(y.a,{children:Object(x.jsx)(T.a,{gap:3,children:Object(x.jsx)(y.a,{children:Object(x.jsx)("main",{children:Object(x.jsxs)("section",{children:[Object(x.jsx)("div",{className:"signuplogo",children:"Teacher Sign Up Additional Information"}),Object(x.jsx)(A,{isActive:!0,children:"Please make sure you enter enough information to be qualified for teacher."}),Object(x.jsxs)("form",{children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"phoneNumber",children:"Phone Number"}),Object(x.jsx)("input",{type:"phoneNumber",label:"Phone Number",value:c,onChange:function(e){return n(e.target.value)},required:!0,placeholder:"Enter Phone Number"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"password",children:"Password"}),Object(x.jsx)("input",{type:"date",label:"Enter Availibility From",value:h,onChange:function(e){return O(e.target.value)},required:!0,placeholder:"Enter Availibility"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"name",children:"Name"}),Object(x.jsx)("input",{type:"text",label:"Enter Your Name",value:S,onChange:function(e){return C(e.target.value)},required:!0,placeholder:"Enter your first and Last Name only"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"details",children:"Enter Details"}),Object(x.jsx)("textarea",{name:"details",type:"textarea",placeholder:"Enter Details",rows:5,cols:80,value:l,onChange:function(e){return j(e.target.value)}})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"details",children:"Enter Years of Teaching Experience"}),Object(x.jsx)("input",{type:"number",label:"Enter Years",value:v,onChange:function(e){return f(e.target.value)},required:!0,placeholder:"Enter Years"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"country",children:"Select Country"}),Object(x.jsx)(q.a,{options:L,value:F,onChange:function(e){D(e)}})]})]}),Object(x.jsx)("button",{className:"btn btn-primary",type:"submit",onClick:function(e){e.preventDefault(),console.log(c),Object(d.d)(Object(d.c)(B,"/Teacher/"+P),{CreatedBy:"",CreatedDate:"",TeacherClassificationID:11,TeacherName:S,Phone:c,Experience:l,YearsOfTeaching:v,StartDate:h,UID:R,CountryCode:F,imageUrl:"https://firebasestorage.googleapis.com/v0/b/cubmessenger.appspot.com/o/fcIuzRj0uATpOm5Rb8HL4bbiRB03%2F613433863438.jpg?alt=media&token=542ad057-2856-45d1-9420-393989dd7fe5"}),I("/login")},children:"Submit"})]}),Object(x.jsxs)("p",{children:["Already have an account?"," ",Object(x.jsx)(g.c,{to:"/login",children:"Sign in"})]})]})})})})})};var M=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(L,{}),Object(x.jsx)(g.a,{children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{exact:!0,path:"/",element:Object(x.jsx)(I,{})}),"\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002 \u2002\u2002",Object(x.jsx)(o.a,{exact:!0,path:"/login",element:Object(x.jsx)(p,{})}),Object(x.jsx)(o.a,{exact:!0,path:"/signup",element:Object(x.jsx)(P,{})}),Object(x.jsx)(o.a,{exact:!0,path:"/studentsignup",element:Object(x.jsx)(Y,{})}),Object(x.jsx)(o.a,{exact:!0,path:"/teachersignup/:userId",element:Object(x.jsx)(z,{})}),"\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002 \u2002\u2002\u2002",Object(x.jsx)(o.a,{exact:!0,path:"/teachers/:teacherId",element:Object(x.jsx)(f,{})}),Object(x.jsx)(o.a,{exact:!0,path:"/contents",element:Object(x.jsx)(S,{})})]})}),Object(x.jsx)(D,{})]})},G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,128)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.createRoot(document.getElementById("root")).render(Object(x.jsx)(m.b,{clientId:"221869384055-jo745ppfdidkklaqltrlrnklbh10nk72.apps.googleusercontent.com",children:Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(M,{})})})),G()},69:function(e,t,c){},70:function(e,t,c){},89:function(e,t,c){},91:function(e,t,c){}},[[121,1,2]]]);
//# sourceMappingURL=main.1d28393b.chunk.js.map