(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{444:function(t,a,e){"use strict";e.r(a);var s=e(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"meta-action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meta-action"}},[t._v("#")]),t._v(" Meta Action")]),t._v(" "),e("p",[t._v("Meta Info Action is used to obtain metadata information in the cluster. Such as database list, table structure, etc.")]),t._v(" "),e("h2",{attrs:{id:"list-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list-database"}},[t._v("#")]),t._v(" List Database")]),t._v(" "),e("h3",{attrs:{id:"request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET /api/meta/namespaces/<ns_name>/databases\n")])])]),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("p",[t._v("Get a list of all database names, arranged in alphabetical order.")]),t._v(" "),e("h3",{attrs:{id:"path-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),e("p",[t._v("None")]),t._v(" "),e("h3",{attrs:{id:"query-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("limit")])]),t._v(" "),e("p",[t._v("Limit the number of result rows returned")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("offset")])]),t._v(" "),e("p",[t._v("Pagination information, need to be used with "),e("code",[t._v("limit")])])])]),t._v(" "),e("h3",{attrs:{id:"request-body"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),e("p",[t._v("None")]),t._v(" "),e("h3",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n\t"msg": "OK",\n\t"code": 0,\n\t"data": [\n\t   "db1", "db2", "db3", ...  \n\t],\n\t"count": 3\n}\n')])])]),e("ul",[e("li",[t._v("The data field returns a list of database names.")])]),t._v(" "),e("h2",{attrs:{id:"list-table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list-table"}},[t._v("#")]),t._v(" List Table")]),t._v(" "),e("h3",{attrs:{id:"request-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-2"}},[t._v("#")]),t._v(" Request")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET /api/meta/namespaces/<ns_name>/databases/<db_name>/tables\n")])])]),e("h3",{attrs:{id:"description-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("p",[t._v("Get a list of tables in the specified database, arranged in alphabetical order.")]),t._v(" "),e("h3",{attrs:{id:"path-parameters-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters-2"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("<db_name>")])]),t._v(" "),e("p",[t._v("Specify database")])])]),t._v(" "),e("h3",{attrs:{id:"query-parameters-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters-2"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("limit")])]),t._v(" "),e("p",[t._v("Limit the number of result rows returned")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("offset")])]),t._v(" "),e("p",[t._v("Pagination information, need to be used with "),e("code",[t._v("limit")])])])]),t._v(" "),e("h3",{attrs:{id:"request-body-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-body-2"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),e("p",[t._v("None")]),t._v(" "),e("h3",{attrs:{id:"response-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n\t"msg": "OK",\n\t"code": 0,\n\t"data": [\n\t   "tbl1", "tbl2", "tbl3", ...  \n\t],\n\t"count": 0\n}\n')])])]),e("ul",[e("li",[t._v("The data field returns a list of table names.")])]),t._v(" "),e("h2",{attrs:{id:"schema-info"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#schema-info"}},[t._v("#")]),t._v(" Schema Info")]),t._v(" "),e("h3",{attrs:{id:"request-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-3"}},[t._v("#")]),t._v(" Request")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET /api/meta/namespaces/<ns_name>/databases/<db_name>/tables/<tbl_name>/schema\n")])])]),e("h3",{attrs:{id:"description-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description-3"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("p",[t._v("Get the table structure information of the specified table in the specified database.")]),t._v(" "),e("h3",{attrs:{id:"path-parameters-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters-3"}},[t._v("#")]),t._v(" Path parameters")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("<db_name>")])]),t._v(" "),e("p",[t._v("Specify the database name")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("<tbl_name>")])]),t._v(" "),e("p",[t._v("Specify table name")])])]),t._v(" "),e("h3",{attrs:{id:"query-parameters-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters-3"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("with_mv")])]),t._v(" "),e("p",[t._v("Optional. If not specified, the table structure of the base table is returned by default. If specified, all rollup index will also be returned.")])])]),t._v(" "),e("h3",{attrs:{id:"request-body-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-body-3"}},[t._v("#")]),t._v(" Request body")]),t._v(" "),e("p",[t._v("None")]),t._v(" "),e("h3",{attrs:{id:"response-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('GET /api/meta/namespaces/default/databases/db1/tables/tbl1/schema\n\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"tbl1": {\n\t\t\t"schema": [{\n\t\t\t\t\t"Field": "k1",\n\t\t\t\t\t"Type": "INT",\n\t\t\t\t\t"Null": "Yes",\n\t\t\t\t\t"Extra": "",\n\t\t\t\t\t"Default": null,\n\t\t\t\t\t"Key": "true"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t"Field": "k2",\n\t\t\t\t\t"Type": "INT",\n\t\t\t\t\t"Null": "Yes",\n\t\t\t\t\t"Extra": "",\n\t\t\t\t\t"Default": null,\n\t\t\t\t\t"Key": "true"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"is_base": true\n\t\t}\n\t},\n\t"count": 0\n}\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('GET /api/meta/namespaces/default/databases/db1/tables/tbl1/schema?with_mv?=1\n\n{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"tbl1": {\n\t\t\t"schema": [{\n\t\t\t\t\t"Field": "k1",\n\t\t\t\t\t"Type": "INT",\n\t\t\t\t\t"Null": "Yes",\n\t\t\t\t\t"Extra": "",\n\t\t\t\t\t"Default": null,\n\t\t\t\t\t"Key": "true"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t"Field": "k2",\n\t\t\t\t\t"Type": "INT",\n\t\t\t\t\t"Null": "Yes",\n\t\t\t\t\t"Extra": "",\n\t\t\t\t\t"Default": null,\n\t\t\t\t\t"Key": "true"\n\t\t\t\t}\n\t\t\t],\n\t\t\t"is_base": true\n\t\t},\n\t\t"rollup1": {\n\t\t\t"schema": [{\n\t\t\t\t"Field": "k1",\n\t\t\t\t"Type": "INT",\n\t\t\t\t"Null": "Yes",\n\t\t\t\t"Extra": "",\n\t\t\t\t"Default": null,\n\t\t\t\t"Key": "true"\n\t\t\t}],\n\t\t\t"is_base": false\n\t\t}\n\t},\n\t"count": 0\n}\n')])])]),e("ul",[e("li",[t._v("The data field returns the table structure information of the base table or rollup table.")])])])}),[],!1,null,null,null);a.default=r.exports}}]);