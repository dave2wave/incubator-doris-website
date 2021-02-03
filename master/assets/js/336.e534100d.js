(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{1098:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"insert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insert"}},[t._v("#")]),t._v(" INSERT")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("INSERT INTO table_name\n[ PARTITION (p1, ...)]\n[ WITH LABEL label]\n[ (column [, ...]) ]\n[ [ hint [, ...] ] ]\n{ VALUES ( { expression | DEFAULT } [, ...] ) [, ...] | query }\n")])])]),a("h3",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("blockquote",[a("p",[t._v("tablet_name: Target table for loading data. It can be in the form of "),a("code",[t._v("db_name.table_name")]),t._v(".")]),t._v(" "),a("p",[t._v("partitions: Specifies the partitions to be loaded, with multiple partition names separated by commas. The partitions must exist in "),a("code",[t._v("table_name")]),t._v(",")]),t._v(" "),a("p",[t._v("label: Specifies a label for Insert job.")]),t._v(" "),a("p",[t._v("column_name: The specified destination columns must be columns that exists in "),a("code",[t._v("table_name")]),t._v(".")]),t._v(" "),a("p",[t._v("expression: The corresponding expression that needs to be assigned to a column.")]),t._v(" "),a("p",[t._v("DEFAULT: Let the corresponding columns use default values")]),t._v(" "),a("p",[t._v("query: A common query whose results are written to the target")]),t._v(" "),a("p",[t._v("hint: Indicators used to indicate "),a("code",[t._v("INSERT")]),t._v(" execution. "),a("code",[t._v("Both streaming")]),t._v("and default non "),a("code",[t._v("streaming'methods use synchronization to complete")]),t._v("INSERT' statement execution\nThe non "),a("code",[t._v("streaming'mode returns a label after execution to facilitate users to query the imported status through")]),t._v("SHOW LOAD'.")])]),t._v(" "),a("h3",{attrs:{id:"note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[t._v("#")]),t._v(" Note")]),t._v(" "),a("p",[t._v("When the "),a("code",[t._v("INSERT'statement is currently executed, the default behavior for data that does not conform to the target table is filtering, such as string length. However, for business scenarios where data is not filtered, the session variable")]),t._v("enable_insert_strict'can be set to "),a("code",[t._v("true' to ensure that")]),t._v("INSERT` will not be successfully executed when data is filtered out.")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("p",[a("code",[t._v("The test")]),t._v("table contains two columns "),a("code",[t._v("c1',")]),t._v("c2'.")]),t._v(" "),a("ol",[a("li",[t._v("Import a row of data into the "),a("code",[t._v("test")]),t._v(" table")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("INSERT INTO test VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT);\nINSERT INTO test (c1) VALUES (1);\n")])])]),a("p",[t._v("The first and second sentences have the same effect. When the target column is not specified, the column order in the table is used as the default target column.\nThe third and fourth statements express the same meaning, using the default value of `c2'column to complete data import.")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Import multiline data into the "),a("code",[t._v("test")]),t._v(" table at one time")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("INSERT INTO test VALUES (1, 2), (3, 2 + 2)\nINSERT INTO test (c1, c2) VALUES (1, 2), (3, 2 * 2)\nINSERT INTO test (c1) VALUES (1), (3)\nInsert in test (C1, C2) values (1, Default), (3, Default)\n")])])]),a("p",[t._v("The effect of the first and second statements is the same, and two data are imported into the "),a("code",[t._v("test'table at one time. The effect of the third and fourth statements is known, using the default value of the")]),t._v("c2'column to import two data into the `test' table.")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Insert into table "),a("code",[t._v("test")]),t._v(" with a query stmt.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("INSERT INTO test SELECT * FROM test2\nINSERT INTO test (c1, c2) SELECT * from test2\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Insert into table "),a("code",[t._v("test")]),t._v(" with specified partition and label")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("INSERT INTO test PARTITION(p1, p2) WITH LABEL `label1` SELECT * FROM test2;\nINSERT INTO test WITH LABEL `label1` (c1, c2) SELECT * from test2;\n")])])]),a("p",[t._v("Asynchronous imports are, in fact, encapsulated asynchronously by a synchronous import. Filling in streaming is as efficient as not filling in * execution.")]),t._v(" "),a("p",[t._v("Since Doris used to import asynchronously, in order to be compatible with the old usage habits, the "),a("code",[t._v("INSERT'statement without streaming will still return a label. Users need to view the status of the")]),t._v("label' import job through the `SHOW LOAD command.")]),t._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("p",[t._v("INSERT")])])}),[],!1,null,null,null);e.default=n.exports}}]);