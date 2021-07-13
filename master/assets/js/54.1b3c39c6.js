(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1130:function(t,a,s){"use strict";s.r(a);var e=s(43),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"show-proc-action"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-proc-action"}},[t._v("#")]),t._v(" Show Proc Action")]),t._v(" "),s("h2",{attrs:{id:"request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),s("p",[s("code",[t._v("GET /api/show_proc")])]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("Used to obtain PROC information.")]),t._v(" "),s("h2",{attrs:{id:"path-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),s("p",[t._v("None")]),t._v(" "),s("h2",{attrs:{id:"query-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("path")]),t._v(" "),s("p",[t._v("Specify Proc Path")])]),t._v(" "),s("li",[s("p",[t._v("forward")]),t._v(" "),s("p",[t._v("Whether to forward to Master FE for execution")])])]),t._v(" "),s("h2",{attrs:{id:"request-body"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),s("p",[t._v("None")]),t._v(" "),s("h2",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": [\n\t\tproc infos ...\n\t],\n\t"count": 0\n}\n')])])]),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("View "),s("code",[t._v("/statistic")]),t._v(" information")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('GET /api/show_proc?path=/statistic\n\nResponse:\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": [\n\t\t["10003", "default_cluster:db1", "2", "3", "3", "3", "3", "0", "0", "0"],\n\t\t["10013", "default_cluster:doris_audit_db__", "1", "4", "4", "4", "4", "0", "0", "0"],\n\t\t["Total", "2", "3", "7", "7", "7", "7", "0", "0", "0"]\n\t],\n\t"count": 0\n}\n')])])])]),t._v(" "),s("li",[s("p",[t._v("Forward to Master for execution")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('GET /api/show_proc?path=/statistic&forward=true\n\nResponse:\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": [\n\t\t["10003", "default_cluster:db1", "2", "3", "3", "3", "3", "0", "0", "0"],\n\t\t["10013", "default_cluster:doris_audit_db__", "1", "4", "4", "4", "4", "0", "0", "0"],\n\t\t["Total", "2", "3", "7", "7", "7", "7", "0", "0", "0"]\n\t],\n\t"count": 0\n}\n')])])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);