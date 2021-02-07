(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{566:function(t,e,n){"use strict";n.r(e);var s=n(42),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"from-unixtime"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#from-unixtime"}},[t._v("#")]),t._v(" from_unixtime")]),t._v(" "),n("h2",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),n("h3",{attrs:{id:"syntax"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" syntax")]),t._v(" "),n("p",[n("code",[t._v("DATETIME FROM UNIXTIME (INT unix timestamp [, VARCHAR string format]")])]),t._v(" "),n("p",[t._v("Convert the UNIX timestamp to the corresponding time format of bits, and the format returned is specified by "),n("code",[t._v("string_format")])]),t._v(" "),n("p",[t._v("Input is an integer and return is a string type")]),t._v(" "),n("p",[t._v("Currently, "),n("code",[t._v("string_format")]),t._v(" supports following formats：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("%Y: Year. \teg. 2014，1900\n%m: Month. \teg. 12，09\n%d: Day.    eg. 11，01\n%H: Hour.   eg. 23，01，12\n%i: Minute. eg. 05，11\n%s: Second. eg. 59，01\n")])])]),n("p",[t._v("Default is "),n("code",[t._v("%Y-%m-%d %H:%i:%s")])]),t._v(" "),n("p",[t._v("Other "),n("code",[t._v("string_format")]),t._v(" is illegal and will returns NULL.")]),t._v(" "),n("h2",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("mysql> select from_unixtime(1196440219);\n+---------------------------+\n| from_unixtime(1196440219) |\n+---------------------------+\n| 2007-12-01 00:30:19       |\n+---------------------------+\n\nmysql> select from_unixtime(1196440219, '%Y-%m-%d');\n+-----------------------------------------+\n| from_unixtime(1196440219, '%Y-%m-%d')   |\n+-----------------------------------------+\n| 2007-12-01                              |\n+-----------------------------------------+\n\nmysql> select from_unixtime(1196440219, '%Y-%m-%d %H:%i:%s');\n+--------------------------------------------------+\n|From unixtime (1196440219,'%Y-%m-%d %H:%i:%s')    |\n+--------------------------------------------------+\n| 2007-12-01 00:30:19                              |\n+--------------------------------------------------+\n\n## keyword\n\n    FROM_UNIXTIME,FROM,UNIXTIME\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);