(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b2bcced0"],{"9fb3":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view-content",{attrs:{message:"fanCtrl"},on:{refresh:e.refresh}},[n("a-row",{staticStyle:{"margin-bottom":"20px"}},[n("a-form",[n("a-col",{attrs:{span:24}},[n("a-form-item",{attrs:{label:e.$t("message.common.select_node"),labelCol:{span:3},wrapperCol:{span:4}}},[n("a-select",{on:{change:e.onChassisChange},model:{value:e.node,callback:function(t){e.node=t},expression:"node"}},e._l(e.nodeList,function(t,a){return n("a-select-option",{key:a,attrs:{value:t}},[e._v(e._s("node "+a))])}),1)],1)],1)],1)],1),n("a-table",{attrs:{columns:e.columns,dataSource:e.currentFanInfo,rowKey:"id",size:"small"},scopedSlots:e._u([{key:"action",fn:function(t){return n("span",{},[n("a-button-group",[n("a-button",[e._v("25%")]),n("a-button",[e._v("50%")]),n("a-button",[e._v("75%")]),n("a-button",[e._v("100%")])],1)],1)}}])}),n("a-row",{staticStyle:{"margin-bottom":"20px"}},[n("a-col",{attrs:{span:2}},[n("a-icon",{staticStyle:{color:"green","font-size":"1.2em","margin-right":"10px"},attrs:{type:"check-circle"}}),e._v("在位\n    ")],1),n("a-col",{attrs:{span:2}},[n("a-icon",{staticStyle:{color:"grey","font-size":"1.2em","margin-right":"10px"},attrs:{type:"close-circle"}}),e._v("不在位\n    ")],1)],1)],1)},s=[],r=n("a34a"),o=n.n(r),c=n("a396"),i=n("2f62"),l=n("f8c8"),u=n("a9da");function h(e,t,n,a,s,r,o){try{var c=e[r](o),i=c.value}catch(l){return void n(l)}c.done?t(i):Promise.resolve(i).then(a,s)}function p(e){return function(){var t=this,n=arguments;return new Promise(function(a,s){var r=e.apply(t,n);function o(e){h(r,a,s,o,c,"next",e)}function c(e){h(r,a,s,o,c,"throw",e)}o(void 0)})}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){d(e,t,n[t])})}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m={name:"fanController",data:function(){return{node:void 0,nodeList:[],chassisReqs:{},currentFanInfo:[],columns:[{title:"No.",dataIndex:"id"},{title:this.$t("message.fanCtrl.thead_name"),dataIndex:"name",align:"center"},{title:this.$t("message.fanCtrl.thead_status"),dataIndex:"health",align:"center",scopedSlots:{customRender:"status"}},{title:this.$t("message.fanCtrl.thead_rpm"),dataIndex:"rpm",align:"center"},{title:this.$t("message.fanCtrl.thead_action"),align:"center",scopedSlots:{customRender:"action"}}]}},methods:f({},Object(i["c"])(["setRefreshFlag"]),{refresh:function(){var e=p(o.a.mark(function e(){var t,n,a=this;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.nodeList=[],this.chassisReqs={},e.prev=2,e.next=5,Object(u["e"])();case 5:return t=e.sent,t.data.Members.forEach(function(e){var t=e["@odata.id"].split("/"),n=t[t.length-1];a.nodeList.push(n),a.chassisReqs[n]="/redfish/v1/Chassis/".concat(n,"/Thermal")}),this.node=this.nodeList[0],e.next=10,Object(l["a"])("get",this.chassisReqs[this.node]);case 10:n=e.sent,this.parseData(n.data.Fans),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](2),Object(u["c"])(this,e.t0,this.$t("message.sensor.get_err_msg"));case 17:this.setRefreshFlag({refreshFlag:!1});case 18:case"end":return e.stop()}},e,this,[[2,14]])}));function t(){return e.apply(this,arguments)}return t}(),onChassisChange:function(){var e=p(o.a.mark(function e(t){var n;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.currentFanInfo=[],e.prev=1,this.node=t,e.next=5,Object(l["a"])("get",this.chassisReqs[this.node]);case 5:n=e.sent,this.parseData(n.data.Fans),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),Object(u["c"])(this,e.t0,this.$t("message.sensor.get_err_msg"));case 12:this.setRefreshFlag({refreshFlag:!1});case 13:case"end":return e.stop()}},e,this,[[1,9]])}));function t(t){return e.apply(this,arguments)}return t}(),parseData:function(e){var t=this;e.forEach(function(e){t.currentFanInfo.push({id:e["@odata.id"].split("/").pop(),name:e.Name,rpm:e.Reading,health:e.Status.Health})})},setRpm:function(e,t){console.log(e+", "+t)}}),components:{ViewContent:c["a"]}},g=m,b=n("2877"),v=Object(b["a"])(g,a,s,!1,null,"9ebd3596",null);v.options.__file="fanController.vue";t["default"]=v.exports},a396:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a-row",[n("a-col",{attrs:{span:24}},[n("h1",{staticStyle:{display:"inline-block","margin-right":"10px"}},[e._v(e._s(e.$t("message."+e.message+".title")))]),n("span",{staticStyle:{color:"#9E9E9E"}},[e._v(e._s(e.$t("message."+e.message+".sub_title")))]),n("a-tooltip",{attrs:{placement:"top"}},[n("template",{slot:"title"},[n("span",[e._v(e._s(e.$t("message.common.help")))])])],2)],1)],1),n("a-row",[n("a-col",{attrs:{span:24}},[n("a-card",{attrs:{bordered:!1,loading:e.refreshFlag}},[e._t("default")],2)],1)],1)],1)},s=[],r={watch:{lang:function(e){var t=this.$route.path+"?t=".concat(+new Date);this.$router.push({path:t})}}},o={data:function(){return{helpFlag:!1}},methods:{toggleHelp:function(){this.helpFlag=!this.helpFlag}}},c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated fadeIn"}},[e.helpFlag?n("a-row",{staticClass:"help-msg"},[n("a-col",{attrs:{span:24}},[n("a-card",{attrs:{bordered:!1,bodyStyle:e.helpCardStyle}},[e._t("default")],2)],1)],1):e._e()],1)],1)},i=[],l={name:"helpCard",props:["helpFlag"],data:function(){return{helpCardStyle:{backgroundColor:"#E0F2F1",color:"#0277BD"}}}},u=l,h=n("2877"),p=Object(h["a"])(u,c,i,!1,null,null,null);p.options.__file="helpCard.vue";var f=p.exports,d=n("2f62");function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){g(e,t,n[t])})}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b={name:"viewContent",mixins:[r,o],props:["message"],created:function(){this.setRefreshFlag({refreshFlag:!0})},computed:m({},Object(d["b"])({refreshFlag:"getRefreshFlag",lang:"getLang"})),watch:{refreshFlag:function(e){e&&this.$emit("refresh")}},methods:m({},Object(d["c"])(["setRefreshFlag"])),components:{HelpCard:f}},v=b,_=Object(h["a"])(v,a,s,!1,null,null,null);_.options.__file="viewContent.vue";t["a"]=_.exports}}]);