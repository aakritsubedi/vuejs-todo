(function(t){function e(e){for(var n,s,u=e[0],i=e[1],l=e[2],d=0,p=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);c&&c(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,u=1;u<o.length;u++){var i=o[u];0!==a[i]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},a={app:0},r=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var c=i;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"00e4":function(t,e,o){"use strict";var n=o("b09b"),a=o.n(n);a.a},"239e":function(t,e,o){"use strict";var n=o("d671"),a=o.n(n);a.a},"484a":function(t,e,o){"use strict";var n=o("e6f2"),a=o.n(n);a.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app"},[o("Header"),o("ToDo",{attrs:{todos:t.todo},on:{"del-todo":t.deleteToDo,"toggle-status":t.toggleStatus}}),o("Button",{staticClass:"todo-add-btn",attrs:{title:"Add ToDo"},on:{"display-form":t.displayForm}}),o("AddForm",{staticClass:"todo-add-form"})],1)},r=[],s=(o("4de4"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",t._l(t.todos,(function(e){return o("div",{key:e.id},[o("ToDoItem",{attrs:{todo:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)},"toggle-status":function(o){return t.$emit("toggle-status",e.id)}}})],1)})),0)}),u=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{staticClass:"item clearfix",class:{"is-completed":t.todo.status}},[o("button",{staticClass:"delete-btn",on:{click:function(e){return t.$emit("del-todo")}}},[t._v("Delete")]),o("Checkbox",{attrs:{status:t.todo.status},on:{"toggle-status":function(e){return t.$emit("toggle-status")}}}),o("span",{staticClass:"todo-title"},[t._v(t._s(t.todo.title))]),o("span",{staticClass:"float-right"},[o("span",{staticClass:"todo-date"},[t._v("🕑 "+t._s(t.date(t.todo.created_at)))])])],1)},l=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"checkbox",class:{checked:t.status},on:{click:function(e){return t.$emit("toggle-status")}}},[t.status?o("i",{staticClass:"fa fa-check"}):t._e()])},d=[],p={name:"Checkbox",props:["status"]},f=p,m=(o("484a"),o("2877")),b=Object(m["a"])(f,c,d,!1,null,"69746af4",null),v=b.exports,h={name:"ToDoItem",props:["todo"],components:{Checkbox:v},methods:{toggleStatus:function(){this.todo.status=!this.todo.status},date:function(t){var e=new Date(t).getDate();e=e<9?"0"+e:e;var o=new Date(t).getMonth()+1;o=o<9?"0"+o:o;var n=new Date(t).getFullYear(),a=e+"/"+o+"/"+n;return a}}},_=h,g=(o("00e4"),Object(m["a"])(_,i,l,!1,null,"9b26d02c",null)),y=g.exports,D={name:"ToDo",props:["todos"],components:{ToDoItem:y}},w=D,x=Object(m["a"])(w,s,u,!1,null,null,null),C=x.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{on:{click:function(e){return t.$emit("display-form")}}},[t._v(t._s(t.title))])},j=[],T={name:"Button",props:["title"]},$=T,k=Object(m["a"])($,O,j,!1,null,null,null),E=k.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"add-form"},[o("div",[o("label",{attrs:{for:"title"}},[t._v("Title: ")]),o("input",{attrs:{type:"text",name:"title",placeholder:"Enter Title"}})]),o("div",[o("input",{attrs:{type:"text",name:"status",value:"false"}}),o("input",{attrs:{type:"text",name:"created_at",value:"123"}}),o("input",{attrs:{type:"text",name:"updated_at",value:"123"}})]),o("div",[o("input",{attrs:{type:"submit",value:"Add"}})])])}],F={name:"AddForm"},P=F,M=(o("84b2"),Object(m["a"])(P,S,A,!1,null,"36c05fa5",null)),B=M.exports,H=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-title"},[t._v("ToDo Application")])},I=[],J=(o("9b57"),{}),V=Object(m["a"])(J,H,I,!1,null,"63219041",null),W=V.exports,N={name:"app",components:{ToDo:C,Header:W,AddForm:B,Button:E},data:function(){return{todo:[{id:1,title:"Complete Vue Crash Course",status:!0,created_at:Date.now(),updated_at:Date.now()},{id:2,title:"Complete 3Star Hotel Website",status:!1,created_at:Date.now(),updated_at:Date.now()},{id:3,title:"Complete EJ-Note Website",status:!1,created_at:Date.now(),updated_at:Date.now()},{id:4,title:"Complete Vue ToDo App",status:!1,created_at:Date.now(),updated_at:Date.now()}]}},methods:{deleteToDo:function(t){this.todo=this.todo.filter((function(e){return e.id!==t}))},toggleStatus:function(t){for(var e=0;e<this.todo.length;e++)if(this.todo[e].id===t){this.todo[e].status=!this.todo[e].status;break}},displayForm:function(){console.log("Add Form",B)}}},Y=N,q=(o("239e"),Object(m["a"])(Y,a,r,!1,null,"a44d1b56",null)),z=q.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(z)}}).$mount("#app")},"84b2":function(t,e,o){"use strict";var n=o("b1c5"),a=o.n(n);a.a},"9b57":function(t,e,o){"use strict";var n=o("f417"),a=o.n(n);a.a},b09b:function(t,e,o){},b1c5:function(t,e,o){},d671:function(t,e,o){},e6f2:function(t,e,o){},f417:function(t,e,o){}});
//# sourceMappingURL=app.9a6374c6.js.map