(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(t,e,c){t.exports={Statistics__text:"Statistics_Statistics__text__nF3G9"}},,,,function(t,e,c){t.exports={Section:"Section_Section__1clwL"}},function(t,e,c){t.exports={Notification__title:"Notification_Notification__title__2bfzM"}},function(t,e,c){t.exports={FeedbackOptions__button:"FeedbackOptions_FeedbackOptions__button__1etRl"}},,,,,function(t,e,c){},,function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),i=c(5),s=c.n(i),o=(c(13),c(3)),r=c(6),b=c.n(r),u=c(0),l=function(t){var e=t.children,c=t.title;return Object(u.jsxs)("section",{className:b.a.Section,children:[c&&Object(u.jsx)("h1",{children:c}),e]})},d=c(7),j=c.n(d),_=function(t){var e=t.message;return e&&Object(u.jsx)("h2",{className:j.a.Notification__title,children:e})},f=c(2),x=c.n(f),O=function(t){var e=t.good,c=t.neutral,n=t.bad,a=t.total,i=t.positivePercentage;return 0===e&&0===c&&0===n?Object(u.jsx)(_,{message:"No feedback given"}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{className:x.a.Statistics__text,children:["Good: ",e]}),Object(u.jsxs)("p",{className:x.a.Statistics__text,children:["Neutral: ",c]}),Object(u.jsxs)("p",{className:x.a.Statistics__text,children:["Bad: ",n]}),Object(u.jsxs)("p",{className:x.a.Statistics__text,children:["Total: ",a()]}),Object(u.jsxs)("p",{className:x.a.Statistics__text,children:["Positive feedback: ",i(),"%"]})]})},h=c(8),p=c.n(h),k=function(t){var e=t.options,c=t.onLeaveFeedback;return Object.keys(e).map((function(t,e){return Object(u.jsx)("button",{className:p.a.FeedbackOptions__button,value:t,type:"button",onClick:c,children:t},t)}))};var v=function(){var t=Object(n.useState)(0),e=Object(o.a)(t,2),c=e[0],a=e[1],i=Object(n.useState)(0),s=Object(o.a)(i,2),r=s[0],b=s[1],d=Object(n.useState)(0),j=Object(o.a)(d,2),_=j[0],f=j[1],x=function(){return c+r+_};return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(l,{title:"Please leave feedback",children:Object(u.jsx)(k,{options:{good:c,neutral:r,bad:_},onLeaveFeedback:function(t){switch(t.currentTarget.value){case"good":a((function(t){return t+1}));break;case"neutral":b((function(t){return t+1}));break;case"bad":f((function(t){return t+1}));break;default:return}}})}),Object(u.jsx)(l,{title:"Statistics",children:Object(u.jsx)(O,{good:c,neutral:r,bad:_,total:x,positivePercentage:function(){return Math.round(100*c/x())}})})]})};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.98446120.chunk.js.map