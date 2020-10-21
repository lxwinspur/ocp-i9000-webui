(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b2c168b0"],{"4ddb":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view-content",{attrs:{message:"sysInfo"},on:{refresh:t.refresh}},[a("a-row",{staticStyle:{"margin-bottom":"20px"}},[a("a-form",[a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:t.$t("message.common.select_node"),labelCol:{span:3},wrapperCol:{span:4}}},[a("a-select",{on:{change:t.onSystemChange},model:{value:t.system,callback:function(e){t.system=e},expression:"system"}},t._l(t.systemList,function(e,s){return a("a-select-option",{key:s,attrs:{value:e}},[t._v(t._s("node "+s))])}),1)],1)],1)],1)],1),a("a-tabs",{attrs:{tabPosition:"left"}},[a("a-tab-pane",{key:"cpu",attrs:{tab:t.$t("message.sysInfo.cpu")}},[a("cpu-info",{attrs:{cpuInfo:t.cpuInfo}})],1),a("a-tab-pane",{key:"mem",attrs:{tab:t.$t("message.sysInfo.mem")}},[a("mem-info",{attrs:{memInfo:t.memInfo}})],1)],1)],1)},n=[],r=a("a34a"),o=a.n(r),i=a("a396"),l=a("2f62"),c=a("a9da"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-table",{attrs:{columns:t.columns,dataSource:t.cpuInfo,size:"small",rowKey:"name"}})},m=[],f={name:"cpuInfo",props:["cpuInfo"],data:function(){return{columns:[{title:this.$t("message.sysInfo.thead_name"),dataIndex:"name"},{title:this.$t("message.sysInfo.thead_manufacturer"),dataIndex:"vendor",align:"center"},{title:this.$t("message.sysInfo.thead_model"),dataIndex:"model",align:"center"},{title:this.$t("message.sysInfo.thead_status"),dataIndex:"health",align:"center"},{title:this.$t("message.sysInfo.thead_speed"),dataIndex:"maxSpeed",align:"center"},{title:this.$t("message.sysInfo.thead_core"),dataIndex:"cores",align:"center"},{title:this.$t("message.sysInfo.thead_tdp"),dataIndex:"tdp",align:"center"}]}}},h=f,p=a("2877"),d=Object(p["a"])(h,u,m,!1,null,null,null);d.options.__file="cpuInfo.vue";var g=d.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-table",{attrs:{columns:t.columns,dataSource:t.memInfo,size:"small",rowKey:"name"}})},v=[],b={name:"memInfo",props:["memInfo"],data:function(){return{columns:[{title:this.$t("message.sysInfo.thead_name"),dataIndex:"name"},{title:this.$t("message.sysInfo.thead_manufacturer"),dataIndex:"vendor",align:"center"},{title:this.$t("message.sysInfo.thead_size"),dataIndex:"capacity",align:"center"},{title:this.$t("message.sysInfo.thead_status"),dataIndex:"health",align:"center"},{title:this.$t("message.sysInfo.thead_mf"),dataIndex:"speed",align:"center"},{title:this.$t("message.sysInfo.thead_sn"),dataIndex:"sn",align:"center"}]}}},I=b,_=Object(p["a"])(I,y,v,!1,null,null,null);_.options.__file="memInfo.vue";var w=_.exports;function x(t,e){return S(t)||$(t,e)||O()}function O(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function $(t,e){var a=[],s=!0,n=!1,r=void 0;try{for(var o,i=t[Symbol.iterator]();!(s=(o=i.next()).done);s=!0)if(a.push(o.value),e&&a.length===e)break}catch(l){n=!0,r=l}finally{try{s||null==i["return"]||i["return"]()}finally{if(n)throw r}}return a}function S(t){if(Array.isArray(t))return t}function U(t,e,a,s,n,r,o){try{var i=t[r](o),l=i.value}catch(c){return void a(c)}i.done?e(l):Promise.resolve(l).then(s,n)}function j(t){return function(){var e=this,a=arguments;return new Promise(function(s,n){var r=t.apply(e,a);function o(t){U(r,s,n,o,i,"next",t)}function i(t){U(r,s,n,o,i,"throw",t)}o(void 0)})}}function C(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),s.forEach(function(e){P(t,e,a[e])})}return t}function P(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var k={name:"systemInfo",data:function(){return{cpuInfo:[],memInfo:[],systemList:[],systemUrls:[],system:void 0,memUrls:[],cpuUrls:[]}},methods:C({},Object(l["c"])(["setRefreshFlag"]),{refresh:function(){var t=j(o.a.mark(function t(){var e,a,s,n,r;return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.cpuInfo=[],this.memInfo=[],this.systemList=[],this.systemUrls=[],this.memUrls=[],this.cpuUrls=[],t.prev=6,t.next=9,Object(c["k"])();case 9:return e=t.sent,this.parseSystemList(e.data),this.system=this.systemList[0],t.next=14,Object(c["i"])(this.systemList[0]);case 14:a=t.sent,s=x(a,2),n=s[0],r=s[1],this.parseMemUrls(n.data),this.parseCPUUrls(r.data),this.getAllCPU(),this.getALLMem(),t.next=27;break;case 24:t.prev=24,t.t0=t["catch"](6),Object(c["c"])(this,t.t0,this.$t("message.sysInfo.get_err_msg"));case 27:this.setRefreshFlag({refreshFlag:!1});case 28:case"end":return t.stop()}},t,this,[[6,24]])}));function e(){return t.apply(this,arguments)}return e}(),onSystemChange:function(){var t=j(o.a.mark(function t(){var e,a,s,n;return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.systemUrls=[],this.memUrls=[],this.cpuUrls=[],this.cpuInfo=[],this.memInfo=[],t.prev=5,t.next=8,Object(c["i"])(this.system);case 8:e=t.sent,a=x(e,2),s=a[0],n=a[1],this.parseMemUrls(s.data),this.parseCPUUrls(n.data),this.getAllCPU(),this.getALLMem(),t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](5),Object(c["c"])(this,t.t0,this.$t("message.sysInfo.get_err_msg"));case 21:case"end":return t.stop()}},t,this,[[5,18]])}));function e(){return t.apply(this,arguments)}return e}(),parseSystemList:function(t){var e=this;t.Members.forEach(function(t,a){var s=t["@odata.id"].split("/"),n=s.pop();e.systemList.push(n),e.systemUrls.push(t["@odata.id"])})},parseMemUrls:function(t){var e=this;t.Members.forEach(function(t,a){e.memUrls.push(t["@odata.id"])})},parseCPUUrls:function(t){var e=this;t.Members.forEach(function(t,a){e.cpuUrls.push(t["@odata.id"])})},getAllCPU:function(){var t=j(o.a.mark(function t(){var e,a,s=this;return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=[],this.cpuUrls.forEach(function(t,a){e.push(Object(c["h"])(t))}),t.next=4,Promise.all(e);case 4:a=t.sent,a.forEach(function(t,e){s.cpuInfo.push({name:t.data["@odata.id"].split("/").pop(),vendor:t.data.Manufacturer,model:t.data.Model,maxSpeed:t.data.MaxSpeedMHz,tdp:t.data.TDPWatts,cores:t.data.TotalCores,health:t.data.Status.Health,enable:t.data.Status.State})});case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getALLMem:function(){var t=j(o.a.mark(function t(){var e,a,s=this;return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=[],this.memUrls.forEach(function(t,a){e.push(Object(c["h"])(t))}),t.next=4,Promise.all(e);case 4:a=t.sent,a.forEach(function(t,e){s.memInfo.push({name:t.data["@odata.id"].split("/").pop(),vendor:t.data.Meanufacturer,sn:t.data.SerialNumber,health:t.data.Status.Health,enable:t.data.Status.State,speed:t.data.AllowedSpeedsMHz,capacity:t.data.CapacityMiB/1024})});case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}),components:{ViewContent:i["a"],CpuInfo:g,MemInfo:w}},E=k,F=Object(p["a"])(E,s,n,!1,null,null,null);F.options.__file="systemInfo.vue";e["default"]=F.exports},a396:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-row",[a("a-col",{attrs:{span:24}},[a("h1",{staticStyle:{display:"inline-block","margin-right":"10px"}},[t._v(t._s(t.$t("message."+t.message+".title")))]),a("span",{staticStyle:{color:"#9E9E9E"}},[t._v(t._s(t.$t("message."+t.message+".sub_title")))]),a("a-tooltip",{attrs:{placement:"top"}},[a("template",{slot:"title"},[a("span",[t._v(t._s(t.$t("message.common.help")))])])],2)],1)],1),a("a-row",[a("a-col",{attrs:{span:24}},[a("a-card",{attrs:{bordered:!1,loading:t.refreshFlag}},[t._t("default")],2)],1)],1)],1)},n=[],r={watch:{lang:function(t){var e=this.$route.path+"?t=".concat(+new Date);this.$router.push({path:e})}}},o={data:function(){return{helpFlag:!1}},methods:{toggleHelp:function(){this.helpFlag=!this.helpFlag}}},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated fadeIn"}},[t.helpFlag?a("a-row",{staticClass:"help-msg"},[a("a-col",{attrs:{span:24}},[a("a-card",{attrs:{bordered:!1,bodyStyle:t.helpCardStyle}},[t._t("default")],2)],1)],1):t._e()],1)],1)},l=[],c={name:"helpCard",props:["helpFlag"],data:function(){return{helpCardStyle:{backgroundColor:"#E0F2F1",color:"#0277BD"}}}},u=c,m=a("2877"),f=Object(m["a"])(u,i,l,!1,null,null,null);f.options.__file="helpCard.vue";var h=f.exports,p=a("2f62");function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),s.forEach(function(e){g(t,e,a[e])})}return t}function g(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var y={name:"viewContent",mixins:[r,o],props:["message"],created:function(){this.setRefreshFlag({refreshFlag:!0})},computed:d({},Object(p["b"])({refreshFlag:"getRefreshFlag",lang:"getLang"})),watch:{refreshFlag:function(t){t&&this.$emit("refresh")}},methods:d({},Object(p["c"])(["setRefreshFlag"])),components:{HelpCard:h}},v=y,b=Object(m["a"])(v,s,n,!1,null,null,null);b.options.__file="viewContent.vue";e["a"]=b.exports}}]);