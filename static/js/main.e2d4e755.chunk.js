(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{21:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(14),s=n.n(r),c=n(16),i=(n(21),n(22),n(4)),l=n(5),o=n(7),u=n(6),d=n(12),j=n(1),h=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={list:[]},t.HandleAdd=function(e){if(e.preventDefault(),""===e.target.task.value)window.alert("empty input");else{var n=Object(d.a)(t.state.list);n.push({id:Math.random(),phrase:e.target.task.value}),t.setState({list:n})}e.target.task.value=""},t.HandleDelete=function(e){var n=Object(d.a)(t.state.list).filter((function(t){return t.id!==e}));t.setState({list:n})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.state.list.length?this.state.list.map((function(e){return Object(j.jsxs)("li",{children:[e.phrase," ",Object(j.jsx)("i",{class:"fas fa-trash-alt",onClick:function(){return t.HandleDelete(e.id)}})]},e.id)})):Object(j.jsx)("p",{children:"No todos"});return Object(j.jsxs)("section",{children:[Object(j.jsxs)("form",{onSubmit:this.HandleAdd,children:[Object(j.jsx)("label",{htmlFor:"",children:"Put your todo"}),Object(j.jsx)("input",{type:"text",name:"task"}),Object(j.jsx)("button",{children:"Add"})]}),e]})}}]),n}(a.Component),b=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Todo App"}),Object(j.jsx)(h,{})]})}}]),n}(a.Component);n(24);s.a.render(Object(j.jsx)(c.a,{children:Object(j.jsx)(b,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.e2d4e755.chunk.js.map