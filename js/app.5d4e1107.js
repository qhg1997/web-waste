(function(e){function t(t){for(var n,r,s=t[0],l=t[1],c=t[2],f=0,d=[];f<s.length;f++)r=s[f],a[r]&&d.push(a[r][0]),a[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,s=1;s<o.length;s++){var l=o[s];0!==a[l]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},a={app:0},i=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"00bc":function(e,t,o){"use strict";var n=o("1a1a"),a=o.n(n);a.a},"0a2c":function(e,t,o){"use strict";var n=o("45d8"),a=o.n(n);a.a},"1a1a":function(e,t,o){},"1d5d":function(e,t,o){},"22d2":function(e,t,o){"use strict";var n=o("1d5d"),a=o.n(n);a.a},3342:function(e,t,o){"use strict";var n=o("ece7"),a=o.n(n);a.a},"45d8":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),a=o("8c4f"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",[o("el-tag",{attrs:{type:"success",size:"large"}},[e._v("\n      当前所拥有的垃圾桶数量: \n      "+e._s(e.selfWasteList?e.selfWasteList.length:0)+"\n    ")]),o("el-divider"),o("div",{staticStyle:{"margin-top":"15px"},attrs:{align:"center"}},[o("el-autocomplete",{staticClass:"inline-input",attrs:{"fetch-suggestions":e.querySearch,placeholder:"请输入内容 回车搜素"},on:{select:e.handleSelect,change:e.handleSelect},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}})],1)],1),o("div",{attrs:{id:"allWaste"}},[o("div",{staticClass:"main"},[e._l(e.selfWasteList,function(t,n){return o("div",{key:n},[o("Waste",{ref:t.name,refInFor:!0,attrs:{name:t.name,nameColor:t.nameColor,bucketColor:t.bucketColor,coverColor:t.coverColor,circleColor:t.circleColor},on:{create:e.add,remove:e.remove}})],1)}),o("div",[o("Waste",{attrs:{empty:""},on:{create:e.add}})],1)],2)]),o("div",{directives:[{name:"show",rawName:"v-show",value:Array.isArray(!this.selfWasteList)||0===this.selfWasteList.length,expression:"\n      Array.isArray(!this.selfWasteList) || this.selfWasteList.length === 0\n    "}],attrs:{align:"center"}},[o("el-row",[o("el-button",{on:{click:e.comeDefault}},[e._v("来些默认的")])],1)],1)])},r=[],s=(o("ac6a"),o("f3e2"),o("6d67"),o("2caf"),o("57e7"),o("d25f"),o("7f7f"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.empty?o("div",{staticClass:"trush",on:{click:e.create}},[o("div",{staticClass:"gaizi"},[o("div",{staticClass:"circle",style:{borderTop:"10px solid "+e.colorEmpty,borderRight:"10px solid "+e.colorEmpty,borderLeft:"10px solid "+e.colorEmpty,borderBottom:e.circleColorNull}}),o("div",{staticClass:"cover",style:{backgroundColor:e.colorEmpty}})]),o("div",{staticClass:"trapezoid",style:{width:"175px",borderTop:"275px solid "+e.colorEmpty}}),o("div",{staticClass:"name-div",on:{click:e.create}},[o("div",{staticClass:"name"},[o("font",{attrs:{size:"6",color:"white"}},[e._v("点我创建一个")])],1)])]):o("div",{staticClass:"trush",on:{focus:e.contextmenuFocus,contextmenu:function(t){return t.preventDefault(),e.contextmenuClick(t)}}},[o("div",{staticClass:"gaizi",class:{pick:e.pickbr}},[o("div",{staticClass:"circle",style:{borderTop:"10px solid "+e.circleColor,borderRight:"10px solid "+e.circleColor,borderLeft:"10px solid "+e.circleColor,borderBottom:e.circleColorNull}}),o("div",{staticClass:"cover",style:{backgroundColor:e.coverColor}})]),o("div",{staticClass:"trapezoid",style:{width:"175px",borderTop:"275px solid "+e.bucketColor}}),o("div",{staticClass:"name-div",on:{click:e.active}},[o("div",{staticClass:"name"},[o("font",{attrs:{size:"6",color:e.nameColor}},[e._v(e._s(""===e.name.trim()?"XX垃圾桶":e.name.trim()))])],1)]),o("ul",{directives:[{name:"show",rawName:"v-show",value:e.contextmenu.visible&&!e.disableContextmenu,expression:"contextmenu.visible && !disableContextmenu"}],staticClass:"contextmenu",style:{left:e.contextmenu.left+"px",top:e.contextmenu.top+"px"}},[o("li",{on:{click:e.create}},[e._v("再去创建一个")]),o("li",{on:{click:e.active}},[e._v("盖子动一下")]),o("li",{on:{click:e.edit}},[e._v("修改一下")]),o("li",{on:{click:e.showList}},[e._v("有啥可以扔的")]),o("li",{on:{click:e.remove}},[e._v("不要这个了")])])])])}),l=[],c={name:"Waste",data:function(){return{contextmenu:{visible:!1,top:0,left:0},pickbr:!1,circleColorNull:"none",colorEmpty:"#a1a3a6"}},props:{empty:{type:Boolean,default:!1},disableContextmenu:{type:Boolean,default:!1},name:{type:String,default:"XX垃圾桶"},nameColor:{type:String,default:"#ffffff"},bucketColor:{type:String,default:"#329649"},coverColor:{type:String,default:"#00aa00"},circleColor:{type:String,default:"#555555"}},methods:{showList:function(){alert("showme")},remove:function(){this.$emit("remove",this.name)},create:function(){this.$emit("create")},edit:function(){this.$emit("edit")},contextmenuFocus:function(){this.contextmenu.visible=!1},contextmenuClick:function(e){this.contextmenu.visible=!0,this.contextmenu.top=e.y,this.contextmenu.left=e.x},active:function(){var e=this;this.pickbr=!0,setTimeout(function(){e.pickbr=!1},500)}},mounted:function(){var e=this;document.addEventListener("click",function(t){e.$el.contains(t.target),e.contextmenu.visible=!1}),document.addEventListener("contextmenu",function(t){e.$el.contains(t.target)?e.contextmenu.visible=!0:e.contextmenu.visible=!1})}},u=c,f=(o("3342"),o("2877")),d=Object(f["a"])(u,s,l,!1,null,"cc8d8832",null),m=d.exports,h={name:"index",data:function(){return{documentObj:null,restaurants:[],searchValue:"",selfWasteList:[],defaultWasteList:[]}},methods:{handleSelect:function(e){var t=this;try{this.$refs[e.name][0].active()}catch(o){this.$confirm("该垃圾没有所对应的垃圾筐,是否去创建","提示一下",{distinguishCancelAndClose:!0,confirmButtonText:"去创建",cancelButtonText:"不了"}).then(function(){t.searchValue="",t.add()}).catch(function(e){t.searchValue="","cancel"===e?t.$message({type:"warn",message:"您选择了不处理"}):t.$message({type:"warn",message:"你放弃了选择"})})}},querySearch:function(e,t){var o=this.restaurants,n=e?o.filter(function(t){return t.value.indexOf(e)>=0}):o;t(n)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},init:function(){this.defaultWasteList=[{name:"可回收垃圾",bucketColor:"#0000cc",coverColor:"#0000aa",contains:["废报纸","金属制品","塑料"]},{name:"厨余垃圾",bucketColor:"#006600",coverColor:"#005500",contains:["香蕉皮","瓜果壳","餐后垃圾"]},{name:"有害垃圾",bucketColor:"#cc0000",coverColor:"#aa0000",contains:["医疗垃圾","电池","酸类物质"]},{name:"其他垃圾",bucketColor:"#ff9900",coverColor:"#ff8800",contains:["建筑垃圾","砖块","其他"]}],this.selfWasteList=JSON.parse(localStorage.getItem("selfWasteList"))},comeDefault:function(){localStorage.removeItem("selfWasteList"),location.reload()},remove:function(e){var t=this;this.$confirm("要删我吗?","确认一下",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(function(){for(var o=0;o<t.selfWasteList.length;o++)console.log(o,t.selfWasteList[o]),t.selfWasteList[o].name===e&&t.selfWasteList.splice(o,1);localStorage.setItem("selfWasteList",JSON.stringify(t.selfWasteList)),t.$message({type:"success",message:"删除完成!"})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},add:function(){this.$router.push({path:"/add"})},setScroolFun:function(){this.documentObj=document.getElementById("allWaste"),this.documentObj.addEventListener("DOMMouseScroll",this.handlerMouserScroll,!1),this.documentObj.addEventListener("mousewheel",this.handlerMouserScroll,!1)},handlerMouserScroll:function(e){var t=e.wheelDelta||e.detail,o=-1,n=1,a=0;a=t>0?35*o:35*n,this.documentObj.scrollLeft=this.documentObj.scrollLeft+a}},components:{Waste:m},beforeDestroy:function(){this.documentObj&&(this.documentObj.removeEventListener("DOMMouseScroll",this.handlerMouserScroll),this.documentObj.removeEventListener("mousewheel",this.handlerMouserScroll))},beforeMount:function(){if(this.init(),Array.isArray(this.selfWasteList)||(this.selfWasteList=this.defaultWasteList.slice(),localStorage.setItem("selfWasteList",JSON.stringify(this.selfWasteList))),this.$route.params.needLoadLS){var e=JSON.parse(localStorage.getItem("selfWasteList"));this.selfWasteList=e}},mounted:function(){this.setScroolFun();var e=this.selfWasteList.map(function(e){var t=e.contains.map(function(t){return{value:t,name:e.name}});return t}),t=[];e.forEach(function(e){return t=t.concat(e)}),this.restaurants=t}},p=h,v=(o("00bc"),o("22d2"),Object(f["a"])(p,i,r,!1,null,"41962ec9",null)),b=v.exports,C=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"addBox"}},[o("div",{staticClass:"preview"},[o("Waste",{attrs:{disableContextmenu:"",name:e.waste.name,nameColor:e.waste.nameColor,bucketColor:e.waste.bucketColor,coverColor:e.waste.coverColor,circleColor:e.waste.circleColor}})],1),o("div",{staticClass:"line"}),o("div",{attrs:{id:"param"}},[o("div",{attrs:{id:"from"}},[o("el-form",{attrs:{"label-width":"80px"}},[o("el-form-item",{attrs:{label:"垃圾桶名称","label-width":e.labelWidth}},[o("el-input",{attrs:{width:e.inputWidth,placeholder:"垃圾桶名称"},model:{value:e.waste.name,callback:function(t){e.$set(e.waste,"name",t)},expression:"waste.name"}})],1),o("el-form-item",{attrs:{label:"手把颜色","label-width":e.labelWidth}},[o("el-color-picker",{attrs:{"show-alpha":"",predefine:e.waste.predefine.circleColor},on:{change:function(t){return e.colorChange(t,"circleColor")},"active-change":function(t){return e.colorActiveChange(t,"circleColor")}},model:{value:e.waste.circleColor,callback:function(t){e.$set(e.waste,"circleColor",t)},expression:"waste.circleColor"}})],1),o("el-form-item",{attrs:{label:"盖子颜色","label-width":e.labelWidth}},[o("el-color-picker",{attrs:{"show-alpha":"",predefine:e.waste.predefine.coverColor},on:{change:function(t){return e.colorChange(t,"coverColor")},"active-change":function(t){return e.colorActiveChange(t,"coverColor")}},model:{value:e.waste.coverColor,callback:function(t){e.$set(e.waste,"coverColor",t)},expression:"waste.coverColor"}})],1),o("el-form-item",{attrs:{label:"名称颜色","label-width":e.labelWidth}},[o("el-color-picker",{attrs:{"show-alpha":"",predefine:e.waste.predefine.nameColor},on:{change:function(t){return e.colorChange(t,"nameColor")},"active-change":function(t){return e.colorActiveChange(t,"nameColor")}},model:{value:e.waste.nameColor,callback:function(t){e.$set(e.waste,"nameColor",t)},expression:"waste.nameColor"}})],1),o("el-form-item",{attrs:{label:"桶颜色","label-width":e.labelWidth}},[o("el-color-picker",{attrs:{"show-alpha":"",predefine:e.waste.predefine.bucketColor},on:{change:function(t){return e.colorChange(t,"bucketColor")},"active-change":function(t){return e.colorActiveChange(t,"bucketColor")}},model:{value:e.waste.bucketColor,callback:function(t){e.$set(e.waste,"bucketColor",t)},expression:"waste.bucketColor"}})],1),o("el-form-item",{attrs:{label:"可投放垃圾","label-width":e.labelWidth}},[o("el-select",{attrs:{width:e.inputWidth,size:"large",clearable:"",multiple:"",filterable:"","allow-create":"","default-first-option":"","remote-method":e.remoteSearchMethod,placeholder:"输入物品名称，回车添加"},on:{change:e.selectLibChange},model:{value:e.waste.contains,callback:function(t){e.$set(e.waste,"contains",t)},expression:"waste.contains"}},e._l(e.lib,function(e,t){return o("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1)],1)],1),o("el-button-group",[o("el-button",{attrs:{type:"success"},on:{click:e.add}},[e._v("添加")]),o("el-button",{on:{click:e.back}},[e._v("返回")])],1)],1)])},g=[],w=(o("4f37"),o("759f"),{name:"add",data:function(){return{counter:{name:{num:0,toast:function(){return this.num++,this.num<10?"给垃圾桶命个名吧!":this.num<20?"命个名那么难吗?":this.num<30?"你怕是有病!!!":this.num<70?(setTimeout(function(){document.write("                <h1 align='center'>滚</h1>"),setTimeout(function(){document.close()},1e3)},1e3),"滚你妈的"):void 0}},contains:{num:0,toast:function(){return this.num++,this.num<10?"垃圾桶不能放点东西吗?":this.num<20?"需要预设点垃圾":this.num<30?"你怕是有病!!!":this.num<70?(setTimeout(function(){document.write("                <h1 align='center'>滚</h1>"),setTimeout(function(){window.top.close()},1e3)},1e3),"滚你妈的"):void 0}}},inputWidth:"300px",labelWidth:"100px",lib:[{label:"知识点1",value:"知识点1"},{label:"知识点2",value:"知识点2"},{label:"知识点3",value:"知识点3"}],waste:{contains:[],name:"",predefine:{nameColor:["#ffffff"],bucketColor:["#00aa00"],coverColor:["#329649"],circleColor:["#555555"]},nameColor:"#ffffff",bucketColor:"#329649",coverColor:"#00aa00",circleColor:"#555555"}}},methods:{back:function(){window.history.back()},add:function(){var e=this;if(null!==this.waste.name&&""!==this.waste.name)if(null!==this.waste.contains&&0!==this.waste.contains.length){var t=JSON.parse(localStorage.getItem("selfWasteList"));if(t.some(function(t){return t.name===e.waste.name}))this.$message({message:"已经有这个了,换个名字吧!",type:"warning"});else{var o=this.$loading({lock:!0,text:"请稍等...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});t.push(this.waste),localStorage.setItem("selfWasteList",JSON.stringify(t)),o.close(),this.$router.push({path:"/",name:"index",params:{needLoadLS:!0}})}}else this.$message({message:this.counter.contains.toast(),type:"warning"});else this.$message({message:this.counter.name.toast(),type:"warning"})},remoteSearchMethod:function(e){console.log("远程 "+e)},selectLibChange:function(e){var t=e[e.length-1];""===t.trim()?this.waste.contains.remove(t):this.lib.some(function(e){return e.label===t})||this.lib.push({label:t,value:t})},print:function(){},colorChange:function(e,t){this.waste[t]=e,this.waste.predefine[t].indexOf(e)<0&&this.waste.predefine[t].unshift(e)},colorActiveChange:function(e,t){this.waste[t]=e}},components:{Waste:m},beforeDestroy:function(){},mounted:function(){Array.prototype.remove=function(e){var t=this.indexOf(e);t>-1&&this.splice(t,1)}}}),x=w,y=(o("b394"),o("0a2c"),Object(f["a"])(x,C,g,!1,null,"352851b1",null)),k=y.exports;n["default"].use(a["a"]);var L=new a["a"]({routes:[{path:"/",name:"index",component:b},{path:"/add",name:"add",component:k}]}),W=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},S=[],O={name:"app"},$=O,_=Object(f["a"])($,W,S,!1,null,"2c6a2a8a",null),j=_.exports,E=o("5c96"),M=o.n(E);o("0fae");n["default"].config.productionTip=!1,n["default"].use(M.a),new n["default"]({router:L,render:function(e){return e(j)}}).$mount("#app")},"9e84":function(e,t,o){},b394:function(e,t,o){"use strict";var n=o("9e84"),a=o.n(n);a.a},ece7:function(e,t,o){}});
//# sourceMappingURL=app.5d4e1107.js.map