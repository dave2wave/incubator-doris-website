(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{670:function(e,a,t){"use strict";t.r(a);var n=t(42),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"backup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backup"}},[e._v("#")]),e._v(" BACKUP")]),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("p",[e._v("This statement is used to backup data under the specified database. This command is an asynchronous operation. After successful submission, you need to check progress through the SHOW BACKUP command. Only tables of OLAP type are backed up.\nGrammar:\nBACKUP SNAPSHOT [db_name].{snapshot_name}\nTO "),t("code",[e._v("repository_name")]),e._v("\nON (\n"),t("code",[e._v("Table_name")]),e._v(' [partition (`P1\',...)],\n...\n)\nPROPERTIES ("key"="value", ...);')]),e._v(" "),t("p",[e._v("Explain:")]),e._v(" "),t("ol",[t("li",[e._v("Only one BACKUP or RESTORE task can be performed under the same database.")]),e._v(" "),t("li",[e._v("The ON clause identifies the tables and partitions that need to be backed up. If no partition is specified, all partitions of the table are backed up by default.")]),e._v(" "),t("li",[e._v('PROPERTIES currently supports the following attributes:\n"Type" = "full": means that this is a full update (default).\n"Timeout" = "3600": Task timeout, default to one day. Unit seconds.')])]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),t("ol",[t("li",[t("p",[e._v('Back up the table example_tbl under example_db in full to the warehouse example_repo:\nBACKUP SNAPSHOT example_db.snapshot_label1\nTO example repo\nOn (example tbl)\nPROPERTIES ("type" = "full");')])]),e._v(" "),t("li",[t("p",[e._v("Under full backup example_db, the P1 and P2 partitions of table example_tbl, and table example_tbl2 to warehouse example_repo:\nBACKUP SNAPSHOT example_db.snapshot_label2\nTO example repo\nON\n(\nexample_tbl PARTITION (p1,p2),\nExample:\n);")])])]),e._v(" "),t("h2",{attrs:{id:"keyword"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),t("p",[e._v("BACKUP")])])}),[],!1,null,null,null);a.default=s.exports}}]);