(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{114:function(t,e,s){"use strict";s.d(e,"a",(function(){return u}));var n=s(2),c=s(46),a=(s(0),s(49)),o=s(147),r=s(1),i=o.a().shape({message:o.b().required("Required")}),u=function(t){var e=t.sendMessage,s=t.placeholder;return Object(r.jsx)("div",{children:Object(r.jsx)(a.a,{initialValues:{message:""},validationSchema:i,onSubmit:function(t,s){e(t.message),s.resetForm()},render:function(t){var e=t.handleSubmit;return Object(r.jsxs)("form",{onSubmit:e,onKeyDown:function(t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),e())},children:[Object(r.jsx)(j,{name:"message",placeholder:s}),Object(r.jsx)("button",{type:"submit",children:"Submit"})]})}})})},j=function(t){var e=Object.assign({},t),s=Object(a.b)(e),o=Object(c.a)(s,1)[0];return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("textarea",Object(n.a)(Object(n.a)({},o),e))})}},123:function(t,e,s){"use strict";s.d(e,"a",(function(){return u}));var n=s(2),c=s(148),a=(s(0),s(6)),o=s(8),r=s(1),i=function(t){return{isAuth:t.auth.isAuth}};function u(t){return Object(o.b)(i)((function(e){var s=e.isAuth,o=Object(c.a)(e,["isAuth"]);return s?Object(r.jsx)(t,Object(n.a)({},o)):Object(r.jsx)(a.a,{to:"/login"})}))}},149:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__-zbKX",coverContainer:"ProfileInfo_coverContainer__13772",userDescription:"ProfileInfo_userDescription__3Ii8_",userAvatar:"ProfileInfo_userAvatar__1GctN",userNameBlock:"ProfileInfo_userNameBlock__1JeFC"}},150:function(t,e,s){t.exports={posts:"MyPosts_posts__17IVp",postsBlock:"MyPosts_postsBlock__1A0vy"}},151:function(t,e,s){t.exports={item:"Post_item__1tiVM",active:"Post_active__3k2z5"}},257:function(t,e,s){"use strict";s.r(e);var n=s(2),c=s(23),a=s(24),o=s(25),r=s(26),i=s(0),u=s.n(i),j=s(61),l=s(149),b=s.n(l),h=s(29),d=s(46),p=s(1),O=u.a.memo((function(t){var e=Object(i.useState)(!1),s=Object(d.a)(e,2),n=s[0],c=s[1],a=Object(i.useState)(t.status),o=Object(d.a)(a,2),r=o[0],u=o[1];return Object(p.jsxs)(p.Fragment,{children:[!n&&Object(p.jsx)("div",{children:Object(p.jsx)("span",{onDoubleClick:function(){c(!0)},children:t.status||"----"})}),n&&Object(p.jsx)("div",{children:Object(p.jsx)("input",{autoFocus:!0,onBlur:function(){c(!1),r&&t.updateStatus(r)},onChange:function(t){return function(t){u(t.currentTarget.value)}(t)},value:r||""})})]})})),f=u.a.memo((function(t){var e=t.profile,s=t.status,n=t.updateStatus,c=t.isOwner,a=t.savePhoto;return 0===e.userId?Object(p.jsx)(h.a,{}):Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:b.a.coverContainer}),Object(p.jsxs)("div",{className:b.a.descriptionBlock,children:[Object(p.jsxs)("div",{className:b.a.userDescription,children:[Object(p.jsx)("img",{className:b.a.userAvatar,src:e.photos.large||j.a,alt:"user-avatar"}),c&&Object(p.jsx)("input",{type:"file",onChange:function(t){t.target.files&&a(t.target.files[0])}}),Object(p.jsxs)("div",{className:b.a.userNameBlock,children:[Object(p.jsx)("h3",{children:e.fullName}),Object(p.jsx)("p",{children:e.aboutMe}),Object(p.jsx)(O,{status:s,updateStatus:n})]})]}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:e.contacts.github?e.contacts.github:"Don't have one"}),Object(p.jsx)("li",{children:e.contacts.vk?e.contacts.vk:"Don't have one"}),Object(p.jsx)("li",{children:e.contacts.facebook?e.contacts.facebook:"Don't have one"}),Object(p.jsx)("li",{children:e.contacts.instagram?e.contacts.instagram:"Don't have one"}),Object(p.jsx)("li",{children:e.contacts.twitter?e.contacts.twitter:"Don't have one"}),Object(p.jsx)("li",{children:e.contacts.website?e.contacts.website:"Don't have one"}),Object(p.jsxs)("li",{children:[e.contacts.youtube?e.contacts.youtube:"Don't have one"," "]}),Object(p.jsx)("li",{children:e.contacts.mainLink?e.contacts.mainLink:"Don't have one"})]}),Object(p.jsx)("div",{children:"Looking for a job: ".concat(e.lookingForAJob?"yes":"no")}),e.lookingForAJob&&Object(p.jsx)("p",{children:e.lookingForAJobDescription})]})]})})),m=s(150),v=s.n(m),x=s(151),g=s.n(x),k=u.a.memo((function(t){var e=t.message,s=t.likesCount;return Object(p.jsxs)("div",{className:g.a.item,children:[Object(p.jsx)("img",{src:"https://www.cheltv.ru/wp-content/uploads/2018/05/egikG.jpg",alt:""}),e,Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:"like"}),Object(p.jsx)("span",{children:s})]})]})})),_=s(114),P=u.a.memo((function(t){var e=t.posts,s=t.addPost,n=e.map((function(t){return Object(p.jsx)(k,{message:t.message,likesCount:t.likesCount},t.id)}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{className:v.a.postsBlock,children:"My posts"}),Object(p.jsx)("div",{children:Object(p.jsx)(_.a,{sendMessage:s,placeholder:"What's new? Tell us!"})}),Object(p.jsx)("div",{className:v.a.posts,children:n})]})})),y=s(8),D=s(4).a.addPost,w=Object(y.b)((function(t){return{posts:t.profile.posts}}),{addPost:D})(P),S=u.a.memo((function(t){var e=t.profile,s=t.status,n=t.updateStatus,c=t.isOwner,a=t.savePhoto;return Object(p.jsxs)("div",{children:[Object(p.jsx)(f,{profile:e,status:s,updateStatus:n,isOwner:c,savePhoto:a}),Object(p.jsx)(w,{})]})})),I=s(6),N=s(62),A=s(123),C=s(22),B=function(t){return t.profile.profile},F=function(t){return t.profile.status},M=s(41),J=function(t){Object(o.a)(s,t);var e=Object(r.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(a.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId,e=this.props.authorizedUserId;t||e||this.props.history.push("/login"),!t&&e&&(t=e.toString()),t&&(this.props.getUserProfile(t),this.props.getStatus(t))}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e,s){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(p.jsx)(S,Object(n.a)(Object(n.a)({},this.props),{},{isOwner:!this.props.match.params.userId}))}}]),s}(u.a.Component);e.default=Object(C.c)(Object(y.b)((function(t){return{profile:B(t),isAuth:Object(M.b)(t),status:F(t),authorizedUserId:Object(M.a)(t)}}),{getUserProfile:N.c,getStatus:N.b,updateStatus:N.e,savePhoto:N.d}),I.f,A.a)(J)}}]);
//# sourceMappingURL=5.f48223a0.chunk.js.map