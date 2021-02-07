(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{434:function(t,a,e){"use strict";e.r(a);var s=e(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"get-load-info-action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-load-info-action"}},[t._v("#")]),t._v(" Get Load Info Action")]),t._v(" "),e("h2",{attrs:{id:"request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),e("p",[e("code",[t._v("GET /api/<db>/_load_info")])]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("p",[t._v("Used to obtain the information of the load job of the specified label.")]),t._v(" "),e("h2",{attrs:{id:"path-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("<db>")])]),t._v(" "),e("p",[t._v("Specify database")])])]),t._v(" "),e("h2",{attrs:{id:"query-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("label")])]),t._v(" "),e("p",[t._v("Specify load label")])])]),t._v(" "),e("h2",{attrs:{id:"request-body"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),e("p",[t._v("None")]),t._v(" "),e("h2",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"dbName": "default_cluster:db1",\n\t\t"tblNames": ["tbl1"],\n\t\t"label": "my_label",\n\t\t"clusterName": "default_cluster",\n\t\t"state": "FINISHED",\n\t\t"failMsg": "",\n\t\t"trackingUrl": ""\n\t},\n\t"count": 0\n}\n')])])]),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Get the load job information of the specified label")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('GET /api/example_db/_load_info?label=my_label\n\nResponse\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"dbName": "default_cluster:db1",\n\t\t"tblNames": ["tbl1"],\n\t\t"label": "my_label",\n\t\t"clusterName": "default_cluster",\n\t\t"state": "FINISHED",\n\t\t"failMsg": "",\n\t\t"trackingUrl": ""\n\t},\n\t"count": 0\n}\n')])])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);