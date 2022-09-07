(function(){"use strict";var e={2195:function(e,t,a){var s=a(6369),i=function(){var e=this,t=e._self._c;return t("MyHome")},l=[],r=function(){var e=this,t=e._self._c;return t("el-container",[t("el-header",[e._v("用户管理")]),t("el-main",[t("el-row",{attrs:{type:"flex"}},[t("el-col",{attrs:{span:4}},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("新建")])],1),t("el-col",{attrs:{span:8}},[t("el-input",{attrs:{placeholder:"请输入搜索内容"},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}})],1),t("el-col",{attrs:{span:8}},[t("el-button",{attrs:{type:"primary"},on:{click:e.searchUser}},[e._v("搜索")])],1),t("el-col",{attrs:{span:4}},[t("el-button",{attrs:{type:"primary"},on:{click:e.goBack}},[e._v("撤销")])],1)],1),t("el-dialog",{attrs:{title:"新建/编辑用户",visible:e.dialogVisible,width:"60%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"姓名"}},[t("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"性别"}},[t("el-select",{attrs:{placeholder:""},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[t("el-option",{attrs:{label:"男",value:"男"}}),t("el-option",{attrs:{label:"女",value:"女"}})],1)],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"年龄"}},[t("el-input",{model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"联系电话"}},[t("el-input",{model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:24}},[t("div",{staticClass:"block"},[t("span",{staticClass:"demonstration"},[e._v("详细地址")]),t("el-cascader",{key:e.modalKey,attrs:{options:e.options},on:{change:e.handleChange},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),t("el-col",{attrs:{span:18}},[t("el-form-item",[t("el-input",{attrs:{placeholder:"请输入详细地址"},model:{value:e.form.detailadr,callback:function(t){e.$set(e.form,"detailadr",t)},expression:"form.detailadr"}})],1)],1)],1)])],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.cancelEditUser}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("确 定")])],1)],1),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[t("el-table-column",{attrs:{label:"","min-width":"55"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-checkbox",{attrs:{label:a.row},on:{change:function(t){return e.changeChecked(a.row)}},model:{value:a.row.checked,callback:function(t){e.$set(a.row,"checked",t)},expression:"scope.row.checked"}},[e._v(" ")])]}}])}),e._l(e.tableLabel,(function(a){return t("el-table-column",{key:a.prop,attrs:{label:a.label,width:a.width?a.width:125},scopedSlots:e._u([{key:"default",fn:function(s){return[t("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(s.row[a.prop]))])]}}],null,!0)})})),t("el-table-column",{attrs:{label:"操作","min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{staticStyle:{},on:{click:function(t){return e.handleEdit(a.row)}}},[e._v("编辑")]),t("el-button",{staticStyle:{},attrs:{type:"danger"},on:{click:function(t){return e.delUser(a.row)}}},[e._v("删除")])]}}])})],2),t("el-row",{attrs:{type:"flex"}},[t("el-col",{attrs:{span:6}},[t("el-button",{staticStyle:{},attrs:{type:"danger"},on:{click:function(t){return e.delMulUser()}}},[e._v("批量删除")])],1)],1)],1)],1)},o=[],n=a(3822),d={data(){return{dialogVisible:!1,searchKey:"",searchList:[],searchEdit:!1,dialogTitle:"",modalKey:0,checkedList:[],address:[],form:{checked:"",name:"",sex:"",age:"",phone:"",address:"",detailadr:""},tableLabel:[{prop:"name",label:"姓名"},{prop:"age",label:"年龄"},{prop:"sex",label:"性别"},{prop:"phone",label:"手机号码",width:200},{prop:"address",label:"地址",width:520}],options:[{value:"广东省",label:"广东省",children:[{value:"广州市",label:"广州市",children:[{value:"番禺区",label:"番禺区"},{value:"越秀区",label:"越秀区"},{value:"花都区",label:"花都区"},{value:"天河区",label:"天河区"},{value:"海珠区",label:"海珠区"}]}]}]}},methods:{handleEdit(e){this.dialogTitle="edit",this.dialogVisible=!0;let t=e.address.slice(0,3),a=e.address.slice(3,6),s=e.address.slice(6,9);this.address.push(t,a,s),this.modalKey++,this.form=JSON.parse(JSON.stringify(e)),console.log(this.form,"form")},handleChange(e){this.form.address=e.join("")},changeChecked(e){e.checked&&this.checkedList.push(e)},judgeUserInfo(e){let t=new RegExp("^[0-9]*$");""===e.age||""===e.name||""===e.address||""===e.phone||""===e.detailadr||""===e.sex?alert("请输入完整信息"):!0!==t.test(e.age)||!0!==t.test(e.phone)||t.test(e.name)?alert("请输入正确的年龄或手机号码或姓名"):"edit"==this.dialogTitle?(this.dialogVisible=!1,this.address=[],this.dialogTitle="",this.$message({type:"success",message:"已编辑完成"}),sessionStorage.setItem("goBackList",JSON.stringify(this.tableData)),this.editUser(e)):(this.dialogVisible=!1,this.address=[],this.$message({type:"success",message:"已添加成功"}),sessionStorage.setItem("goBackList",JSON.stringify(this.tableData)),this.$store.commit("addUser",e))},cancelEditUser(){this.dialogVisible=!1},editUser(e){this.tableData.some((t=>{t.id==e.id&&(t.address=e.address.slice(0,9)+e.detailadr,t.age=e.age,t.checked=e.checked,t.detailadr=e.detailadr,t.name=e.name,t.sex=e.sex,t.phone=e.phone)}))},addUser(){this.form.checked=!1,"edit"==this.dialogTitle?1==this.searchEdit?this.handleSearchEdit():(this.judgeUserInfo(this.form),sessionStorage.setItem("tableData",JSON.stringify(this.tableData))):(this.form.id=this.id,this.form.address+=this.form.detailadr,this.judgeUserInfo(this.form),sessionStorage.setItem("tableData",JSON.stringify(this.tableData)))},delUser(e){this.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{sessionStorage.setItem("goBackList",JSON.stringify(this.tableData)),this.tableData.splice(this.tableData.indexOf(this.tableData.find((t=>t.id===e.id))),1),sessionStorage.setItem("tableData",JSON.stringify(this.tableData)),this.$message({type:"success",message:"删除成功!"})})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},delMulUser(){0!==this.checkedList.length?this.$confirm("此操作将永久删除选中用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.checkedList.forEach((e=>{this.tableData.splice(this.tableData.indexOf(this.tableData.find((t=>t.id===e.id))),1)})),sessionStorage.setItem("tableData",JSON.stringify(this.tableData)),this.$message({type:"success",message:"删除成功!"})})).catch((()=>{this.$message({type:"info",message:"已取消删除"})})):this.$message("未选择用户，请选择用户再删除")},searchUser(){if(""==this.searchKey)alert("请输入搜索内容");else{this.searchEdit=!0;var e=new RegExp(this.searchKey);this.tableData.find((t=>{(e.test(t.age)||e.test(t.name)||e.test(t.sex)||e.test(t.address)||e.test(t.detailadr)||e.test(t.phone))&&(this.searchList.unshift(t),this.$store.commit("updataTableData",JSON.parse(JSON.stringify(this.searchList))))})),console.log(this.searchList,"111"),this.searchList=[]}},handleSearchEdit(){let e=JSON.parse(sessionStorage.getItem("tableData"));e.some((e=>{e.id==this.form.id&&(e.address=this.form.address.slice(0,9)+this.form.detailadr,e.age=this.form.age,e.checked=this.form.checked,e.detailadr=this.form.detailadr,e.name=this.form.name,e.sex=this.form.sex,e.phone=this.form.phone)})),console.log(e,"sel1"),sessionStorage.setItem("tableData",JSON.stringify(e)),this.editUser(this.form),this.dialogVisible=!1},goBack(){this.$store.commit("goBackList",JSON.parse(sessionStorage.getItem("goBackList"))),sessionStorage.setItem("tableData",JSON.stringify(this.tableData)),this.$message({type:"success",message:"已撤销"})}},created(){null!=window.sessionStorage.getItem("tableData")&&(this.$store.commit("updataTableData",JSON.parse(sessionStorage.getItem("tableData"))),this.$store.commit("updataUserId",JSON.parse(sessionStorage.getItem("id"))))},computed:{...(0,n.rn)(["tableData","id"])},watch:{dialogVisible(){0==this.dialogVisible&&(this.address=[],this.form={name:"",sex:"",age:"",phone:"",address:"",detailadr:"",checked:""})},searchKey(){this.searchEdit=!1,this.$store.commit("updataTableData",JSON.parse(sessionStorage.getItem("tableData")))}}},c=d,u=a(1001),h=(0,u.Z)(c,r,o,!1,null,null,null),f=h.exports,m={name:"App",components:{MyHome:f}},p=m,g=(0,u.Z)(p,i,l,!1,null,null,null),b=g.exports,y=a(8499);s["default"].use(n.ZP);var v=new n.ZP.Store({state:{id:3,tableData:[{address:"",age:"",checked:!1,detailadr:"",id:0,name:"",phone:"",sex:""},{address:"",age:"",checked:!1,detailadr:"",id:1,name:"",phone:"",sex:""},{address:"",age:"",checked:!1,detailadr:"",id:2,name:"",phone:"",sex:""}]},mutations:{addUser(e,t){e.tableData.unshift(t),e.id++,sessionStorage.setItem("id",JSON.stringify(e.id))},updataTableData(e,t){e.tableData=t},updataUserId(e,t){e.id=t},goBackList(e,t){e.tableData=t}}});s["default"].config.productionTip=!1,s["default"].use(y.Header),s["default"].use(y.Container),s["default"].use(y.Main),s["default"].use(y.Button),s["default"].use(y.Row),s["default"].use(y.Col),s["default"].use(y.Input),s["default"].use(y.Table),s["default"].use(y.TableColumn),s["default"].use(y.Form),s["default"].use(y.Option),s["default"].use(y.Select),s["default"].use(y.FormItem),s["default"].use(y.Dialog),s["default"].use(y.Cascader),s["default"].use(y.Checkbox),s["default"].prototype.$message=y.Message,s["default"].prototype.$confirm=y.MessageBox.confirm,new s["default"]({store:v,render:e=>e(b)}).$mount("#app")}},t={};function a(s){var i=t[s];if(void 0!==i)return i.exports;var l=t[s]={exports:{}};return e[s](l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,s,i,l){if(!s){var r=1/0;for(c=0;c<e.length;c++){s=e[c][0],i=e[c][1],l=e[c][2];for(var o=!0,n=0;n<s.length;n++)(!1&l||r>=l)&&Object.keys(a.O).every((function(e){return a.O[e](s[n])}))?s.splice(n--,1):(o=!1,l<r&&(r=l));if(o){e.splice(c--,1);var d=i();void 0!==d&&(t=d)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[s,i,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,l,r=s[0],o=s[1],n=s[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(n)var c=n(a)}for(t&&t(s);d<r.length;d++)l=r[d],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(c)},s=self["webpackChunkmanager_vue2"]=self["webpackChunkmanager_vue2"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(2195)}));s=a.O(s)})();
//# sourceMappingURL=app.cfc881aa.js.map