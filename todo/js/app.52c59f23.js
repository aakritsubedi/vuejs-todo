(function(t){function e(e){for(var o,s,l=e[0],u=e[1],i=e[2],d=0,p=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);c&&c(e);while(p.length)p.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},r=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var i=0;i<l.length;i++)e(l[i]);var c=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0c79":function(t,e,n){"use strict";var o=n("69b0"),a=n.n(o);a.a},4204:function(t,e,n){},"53af":function(t,e,n){"use strict";var o=n("4204"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("Header"),n("ToDo",{attrs:{todos:t.todo},on:{"del-todo":t.deleteToDo}}),n("Button",{staticClass:"todo-add-btn",attrs:{title:"Add ToDo"}}),n("AddForm",{staticClass:"todo-add-form"})],1)},r=[],s=(n("4de4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.todos,(function(e){return n("div",{key:e.id},[n("ToDoItem",{attrs:{todo:e},on:{"del-todo":function(n){return t.$emit("del-todo",e.id)}}})],1)})),0)}),l=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"item clearfix",class:{"is-completed":t.todo.status}},[n("button",{staticClass:"delete-btn",on:{click:function(e){return t.$emit("del-todo")}}},[t._v("Delete")]),n("input",{attrs:{type:"checkbox"},on:{change:t.toggleStatus}}),n("span",{staticClass:"todo-title"},[t._v(t._s(t.todo.title))]),n("span",{staticClass:"float-right"},[n("span",{staticClass:"todo-date"},[t._v("🕑 "+t._s(t.date(t.todo.created_at)))])])])},i=[],c={name:"ToDoItem",props:["todo"],methods:{toggleStatus:function(){this.todo.status=!this.todo.status},date:function(t){var e=new Date(t).getDate();e=e<9?"0"+e:e;var n=new Date(t).getMonth()+1;n=n<9?"0"+n:n;var o=new Date(t).getFullYear(),a=e+"/"+n+"/"+o;return console.log(a),a}}},d=c,p=(n("0c79"),n("2877")),f=Object(p["a"])(d,u,i,!1,null,"5f538d58",null),v=f.exports,m={name:"ToDo",props:["todos"],components:{ToDoItem:v}},_=m,b=Object(p["a"])(_,s,l,!1,null,null,null),h=b.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",[t._v(t._s(t.title))])},D=[],g={name:"Button",props:["title"]},w=g,x=Object(p["a"])(w,y,D,!1,null,null,null),O=x.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"add-form"},[n("div",[n("label",{attrs:{for:"title"}},[t._v("Title: ")]),n("input",{attrs:{type:"text",name:"title",placeholder:"Enter Title"}})]),n("div",[n("input",{attrs:{type:"text",name:"status",value:"false"}}),n("input",{attrs:{type:"text",name:"created_at",value:"123"}}),n("input",{attrs:{type:"text",name:"updated_at",value:"123"}})]),n("div",[n("input",{attrs:{type:"submit",value:"Add"}})])])}],j={},$=j,E=(n("53af"),Object(p["a"])($,C,T,!1,null,"01f1274d",null)),S=E.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-title"},[t._v("ToDo Application")])},k=[],A=(n("9b57"),{}),M=Object(p["a"])(A,P,k,!1,null,"63219041",null),B=M.exports,F={name:"app",components:{ToDo:h,Header:B,AddForm:S,Button:O},data:function(){return{todo:[{id:1,title:"Complete Vue Crash Course",status:!1,created_at:Date.now(),updated_at:Date.now()},{id:2,title:"Complete 3Star Hotel Website",status:!1,created_at:Date.now(),updated_at:Date.now()},{id:3,title:"Complete EJ-Note Website",status:!1,created_at:Date.now(),updated_at:Date.now()},{id:4,title:"Complete Vue ToDo App",status:!1,created_at:Date.now(),updated_at:Date.now()}]}},methods:{deleteToDo:function(t){this.todos=this.todos.filter((function(e){return e.id!==t}))}}},H=F,I=(n("69fc"),Object(p["a"])(H,a,r,!1,null,"1b92de9e",null)),J=I.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(J)}}).$mount("#app")},"69b0":function(t,e,n){},"69fc":function(t,e,n){"use strict";var o=n("e271"),a=n.n(o);a.a},"9b57":function(t,e,n){"use strict";var o=n("f417"),a=n.n(o);a.a},e271:function(t,e,n){},f417:function(t,e,n){}});
//# sourceMappingURL=app.52c59f23.js.map