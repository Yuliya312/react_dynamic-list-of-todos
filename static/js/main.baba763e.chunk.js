(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),l=a.n(r),o=a(4),s=a(7),u=a(2),m=a(1),i=a.n(m),b=a(3);a(14);function p(e){return d.apply(this,arguments)}function d(){return(d=Object(b.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a(15);var f=function(e){var t=e.todo,a=t.id,n=t.title,r=t.completed,l=t.user;return c.a.createElement(c.a.Fragment,null,c.a.createElement("td",{className:"table__cell"},a),c.a.createElement("td",{className:"table__cell"},l?l.name:""),c.a.createElement("td",{className:"table__cell"},n),c.a.createElement("td",{className:"table__cell"},r?"done":"not done"))},E=function(e){var t=e.todos;return c.a.createElement("table",{className:"table"},c.a.createElement("thead",{className:"table__title"},c.a.createElement("tr",null,c.a.createElement("th",{className:"table__cell",scope:"col"},"ID"),c.a.createElement("th",{className:"table__cell",scope:"col"},"User"),c.a.createElement("th",{className:"table__cell",scope:"col"},"Title"),c.a.createElement("th",{className:"table__cell",scope:"col"},"Status"))),c.a.createElement("tbody",null,t.map((function(e){return c.a.createElement("tr",{className:"table__row",key:e.id},c.a.createElement(f,{todo:e}))}))))},h=function(){var e=Object(b.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p("https://jsonplaceholder.typicode.com/users"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(b.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p("https://jsonplaceholder.typicode.com/todos"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),m=Object(u.a)(l,2)[1],i=Object(n.useState)([]),b=Object(u.a)(i,2),p=b[0],d=b[1],f=Object(n.useState)(!1),_=Object(u.a)(f,2),y=_[0],O=_[1];return a.length?c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"title"},"Dynamic list of TODOs"),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{type:"button",className:"button",onClick:function(){d(Object(o.a)(p).sort((function(e,t){return e.user&&t.user?e.user.name.localeCompare(t.user.name):0})))}},"Sort by name"),c.a.createElement("button",{type:"button",className:"button",onClick:function(){d(Object(o.a)(p).sort((function(e,t){return e.title.localeCompare(t.title)})))}},"Sort by title"),c.a.createElement("button",{type:"button",className:"button",onClick:function(){d(Object(o.a)(p).sort((function(e,t){return Number(e.completed)-Number(t.completed)})))}},"Sort by readiness")),c.a.createElement(E,{todos:p})):c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"title"},"Dynamic list of TODOs"),c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{type:"button",className:"button button-start",onClick:function(){O(!0),Promise.all([h(),N()]).then((function(e){var t=Object(u.a)(e,2),a=t[0],n=t[1];m(a),r(n),d(n.map((function(e){return Object(s.a)({},e,{user:a.find((function(t){return t.id===e.userId}))})})))})).finally((function(){return O(!1)}))},disabled:y},"Load")),y&&c.a.createElement("p",{className:"text"},"Loading..."))};l.a.render(c.a.createElement(_,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.baba763e.chunk.js.map