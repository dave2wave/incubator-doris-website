(window.webpackJsonp=window.webpackJsonp||[]).push([[594],{991:function(a,t,e){"use strict";e.r(t);var s=e(42),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"admin-set-replica-status"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#admin-set-replica-status"}},[a._v("#")]),a._v(" ADMIN SET REPLICA STATUS")]),a._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('该语句用于设置指定副本的状态。\n该命令目前仅用于手动将某些副本状态设置为 BAD 或 OK，从而使得系统能够自动修复这些副本。\n\n语法：\n\n    ADMIN SET REPLICA STATUS\n    PROPERTIES ("key" = "value", ...);\n\n    目前支持如下属性：\n    "tablet_id"：必需。指定一个 Tablet Id.\n    "backend_id"：必需。指定 Backend Id.\n    "status"：必需。指定状态。当前仅支持 "bad" 或 "ok"\n\n    如果指定的副本不存在，或状态已经是 bad，则会被忽略。\n\n注意：\n\n    设置为 Bad 状态的副本可能立刻被删除，请谨慎操作。\n')])])]),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('1. 设置 tablet 10003 在 BE 10001 上的副本状态为 bad。\n\n    ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "bad");\n\n2. 设置 tablet 10003 在 BE 10001 上的副本状态为 ok。\n\n    ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "ok");\n')])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("ADMIN,SET,REPLICA,STATUS\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);