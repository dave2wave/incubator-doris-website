(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{837:function(s,e,a){"use strict";a.r(e);var o=a(42),l=Object(o.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"sql-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-mode"}},[s._v("#")]),s._v(" SQL MODE")]),s._v(" "),a("p",[s._v("Doris新支持的sql mode参照了 Mysql 的sql mode管理机制，每个客户端都能设置自己的sql mode，拥有Admin权限的数据库管理员可以设置全局sql mode。")]),s._v(" "),a("h2",{attrs:{id:"sql-mode-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-mode-介绍"}},[s._v("#")]),s._v(" sql mode 介绍")]),s._v(" "),a("p",[s._v("sql mode使用户能在不同风格的sql语法和数据校验严格度间做切换，使Doris对其他数据库有更好的兼容性。例如在一些数据库里，'||'符号是一个字符串连接符，但在Doris里却是与'or'等价的，这时用户只需要使用sql mode切换到自己想要的风格。每个客户端都能设置sql mode，并在当前对话中有效，只有拥有Admin权限的用户可以设置全局sql mode。")]),s._v(" "),a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),a("p",[s._v("sql mode用一个64位的Long型存储在SessionVariables中，这个地址的每一位都代表一个mode的开启/禁用(1表示开启，0表示禁用)状态，只要知道每一种mode具体是在哪一位，我们就可以通过位运算方便快速的对sql mode进行校验和操作。")]),s._v(" "),a("p",[s._v("每一次对sql mode的查询，都会对此Long型进行一次解析，变成用户可读的字符串形式，同理，用户发送给服务器的sql mode字符串，会被解析成能够存储在SessionVariables中的Long型。")]),s._v(" "),a("p",[s._v("已被设置好的全局sql mode会被持久化，因此对全局sql mode的操作总是只需一次，即使程序重启后仍可以恢复上一次的全局sql mode。")]),s._v(" "),a("h2",{attrs:{id:"操作方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作方式"}},[s._v("#")]),s._v(" 操作方式")]),s._v(" "),a("p",[s._v("1、设置sql mode")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('set global sql_mode = "DEFAULT"\nset session sql_mode = "DEFAULT"\n')])])]),a("blockquote",[a("p",[s._v("目前Doris的默认sql mode是DEFAULT（但马上会在后续修改中会改变）。\n设置global sql mode需要Admin权限，并会影响所有在此后连接的客户端。\n设置session sql mode只会影响当前对话客户端，默认为session方式。")])]),s._v(" "),a("p",[s._v("2、查询sql mode")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("select @@global.sql_mode\nselect @@session.sql_mode\n")])])]),a("blockquote",[a("p",[s._v("除了这种方式，你还可以通过下面方式返回所有session variables来查看当前sql mode")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("show global variables\nshow session variables\n")])])]),a("h2",{attrs:{id:"已支持mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#已支持mode"}},[s._v("#")]),s._v(" 已支持mode")]),s._v(" "),a("ol",[a("li",[a("p",[a("code",[s._v("PIPES_AS_CONCAT")])]),s._v(" "),a("p",[s._v("在此模式下，'||'符号是一种字符串连接符号（同CONCAT()函数），而不是'OR'符号的同义词。(e.g., "),a("code",[s._v("'a'||'b' = 'ab'")]),s._v(", "),a("code",[s._v("1||0 = '10'")]),s._v(")")])])]),s._v(" "),a("h2",{attrs:{id:"复合mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复合mode"}},[s._v("#")]),s._v(" 复合mode")]),s._v(" "),a("p",[s._v("（后续补充）")])])}),[],!1,null,null,null);e.default=l.exports}}]);