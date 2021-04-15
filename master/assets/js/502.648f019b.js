(window.webpackJsonp=window.webpackJsonp||[]).push([[502],{889:function(t,a,s){"use strict";s.r(a);var r=s(43),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"bitmap-from-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-from-string"}},[t._v("#")]),t._v(" bitmap_from_string")]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),s("h3",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("p",[s("code",[t._v("BITMAP BITMAP_FROM_STRING(VARCHAR input)")])]),t._v(" "),s("p",[t._v('将一个字符串转化为一个BITMAP，字符串是由逗号分隔的一组UINT32数字组成.\n比如"0, 1, 2"字符串会转化为一个Bitmap，其中的第0, 1, 2位被设置.\n当输入字段不合法时，返回NULL')]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mysql> select bitmap_to_string(bitmap_empty());\n+----------------------------------+\n| bitmap_to_string(bitmap_empty()) |\n+----------------------------------+\n|                                  |\n+----------------------------------+\n\nmysql> select bitmap_to_string(bitmap_from_string(\"0, 1, 2\"));\n+-------------------------------------------------+\n| bitmap_to_string(bitmap_from_string('0, 1, 2')) |\n+-------------------------------------------------+\n| 0,1,2                                           |\n+-------------------------------------------------+\n\nmysql> select bitmap_from_string(\"-1, 0, 1, 2\");\n+-----------------------------------+\n| bitmap_from_string('-1, 0, 1, 2') |\n+-----------------------------------+\n| NULL                              |\n+-----------------------------------+\n")])])]),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("BITMAP_FROM_STRING,BITMAP\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);