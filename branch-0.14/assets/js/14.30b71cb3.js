(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{413:function(e,a,t){"use strict";t.r(a);var o=t(42),n=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"schema-change"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schema-change"}},[e._v("#")]),e._v(" Schema Change")]),e._v(" "),t("p",[e._v("Users can modify the schema of existing tables through the Schema Change operation. Doris currently supports the following modifications:")]),e._v(" "),t("ul",[t("li",[e._v("Add and delete columns")]),e._v(" "),t("li",[e._v("Modify column type")]),e._v(" "),t("li",[e._v("Adjust column order")]),e._v(" "),t("li",[e._v("Add and modify Bloom Filter")]),e._v(" "),t("li",[e._v("Add and delete bitmap index")])]),e._v(" "),t("p",[e._v("This document mainly describes how to create a Schema Change job, as well as some considerations and frequently asked questions about Schema Change.")]),e._v(" "),t("h2",{attrs:{id:"glossary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[e._v("#")]),e._v(" Glossary")]),e._v(" "),t("ul",[t("li",[e._v("Base Table：When each table is created, it corresponds to a base table. The base table stores the complete data of this table. Rollups are usually created based on the data in the base table (and can also be created from other rollups).")]),e._v(" "),t("li",[e._v("Index：Materialized index. Rollup or Base Table are both called materialized indexes.")]),e._v(" "),t("li",[e._v("Transaction：Each import task is a transaction, and each transaction has a unique incrementing Transaction ID.")]),e._v(" "),t("li",[e._v("Rollup：Roll-up tables based on base tables or other rollups.")])]),e._v(" "),t("h2",{attrs:{id:"basic-principles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-principles"}},[e._v("#")]),e._v(" Basic Principles")]),e._v(" "),t("p",[e._v("The basic process of executing a Schema Change is to generate a copy of the index data of the new schema from the data of the original index. Among them, two parts of data conversion are required. One is the conversion of existing historical data, and the other is the conversion of newly arrived imported data during the execution of Schema Change.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+----------+\n| Load Job |\n+----+-----+\n     |\n     | Load job generates both origin and new index data\n     |\n     |      +------------------+ +---------------+\n     |      | Origin Index     | | Origin Index  |\n     +------\x3e New Incoming Data| | History Data  |\n     |      +------------------+ +------+--------+\n     |                                  |\n     |                                  | Convert history data\n     |                                  |\n     |      +------------------+ +------v--------+\n     |      | New Index        | | New Index     |\n     +------\x3e New Incoming Data| | History Data  |\n            +------------------+ +---------------+\n")])])]),t("p",[e._v("Before starting the conversion of historical data, Doris will obtain a latest transaction ID. And wait for all import transactions before this Transaction ID to complete. This Transaction ID becomes a watershed. This means that Doris guarantees that all import tasks after the watershed will generate data for both the original Index and the new Index. In this way, when the historical data conversion is completed, the data in the new Index can be guaranteed to be complete.")]),e._v(" "),t("h2",{attrs:{id:"create-job"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-job"}},[e._v("#")]),e._v(" Create Job")]),e._v(" "),t("p",[e._v("The specific syntax for creating a Schema Change can be found in the description of the Schema Change section in the help "),t("code",[e._v("HELP ALTER TABLE")]),e._v(".")]),e._v(" "),t("p",[e._v("The creation of Schema Change is an asynchronous process. After the job is submitted successfully, the user needs to view the job progress through the "),t("code",[e._v("SHOW ALTER TABLE COLUMN")]),e._v(" command.")]),e._v(" "),t("h2",{attrs:{id:"view-job"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-job"}},[e._v("#")]),e._v(" View Job")]),e._v(" "),t("p",[t("code",[e._v("SHOW ALTER TABLE COLUMN")]),e._v(" You can view the Schema Change jobs that are currently executing or completed. When multiple indexes are involved in a Schema Change job, the command displays multiple lines, each corresponding to an index. For example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("        JobId: 20021\n    TableName: tbl1\n   CreateTime: 2019-08-05 23:03:13\n   FinishTime: 2019-08-05 23:03:42\n    IndexName: tbl1\n      IndexId: 20022\nOriginIndexId: 20017\nSchemaVersion: 2:792557838\nTransactionId: 10023\n        State: FINISHED\n          Msg:\n     Progress: N/A\n      Timeout: 86400\n")])])]),t("ul",[t("li",[e._v("JobId: A unique ID for each Schema Change job.")]),e._v(" "),t("li",[e._v("TableName: The table name of the base table corresponding to Schema Change.")]),e._v(" "),t("li",[e._v("CreateTime: Job creation time.")]),e._v(" "),t("li",[e._v('FinishedTime: The end time of the job. If it is not finished, "N / A" is displayed.')]),e._v(" "),t("li",[e._v("IndexName: The name of an Index involved in this modification.")]),e._v(" "),t("li",[e._v("IndexId: The unique ID of the new Index.")]),e._v(" "),t("li",[e._v("OriginIndexId: The unique ID of the old Index.")]),e._v(" "),t("li",[e._v("SchemaVersion: Displayed in M: N format. M is the version of this Schema Change, and N is the corresponding hash value. With each Schema Change, the version is incremented.")]),e._v(" "),t("li",[e._v("TransactionId: the watershed transaction ID of the conversion history data.")]),e._v(" "),t("li",[e._v("State: The phase of the operation.\n    * PENDING: The job is waiting in the queue to be scheduled.\n    * WAITING_TXN: Wait for the import task before the watershed transaction ID to complete.\n    * RUNNING: Historical data conversion.\n    * FINISHED: The operation was successful.\n    * CANCELLED: The job failed.")]),e._v(" "),t("li",[e._v("Msg: If the job fails, a failure message is displayed here.")]),e._v(" "),t("li",[e._v("Progress: operation progress. Progress is displayed only in the RUNNING state. Progress is displayed in M ​​/ N. Where N is the total number of copies involved in the Schema Change. M is the number of copies of historical data conversion completed.")]),e._v(" "),t("li",[e._v("Timeout: Job timeout time. Unit of second.")])]),e._v(" "),t("h2",{attrs:{id:"cancel-job"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cancel-job"}},[e._v("#")]),e._v(" Cancel Job")]),e._v(" "),t("p",[e._v("In the case that the job status is not FINISHED or CANCELLED, you can cancel the Schema Change job with the following command:\n"),t("code",[e._v("CANCEL ALTER TABLE COLUMN FROM tbl_name;")])]),e._v(" "),t("h2",{attrs:{id:"best-practice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[e._v("#")]),e._v(" Best Practice")]),e._v(" "),t("p",[e._v("Schema Change can make multiple changes to multiple indexes in one job. For example:\nSource Schema：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+-----------+-------+------+------+------+---------+-------+\n| IndexName | Field | Type | Null | Key  | Default | Extra |\n+-----------+-------+------+------+------+---------+-------+\n| tbl1      | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n|           | k3    | INT  | No   | true | N/A     |       |\n|           |       |      |      |      |         |       |\n| rollup2   | k2    | INT  | No   | true | N/A     |       |\n|           |       |      |      |      |         |       |\n| rollup1   | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n+-----------+-------+------+------+------+---------+-------+\n")])])]),t("p",[e._v("You can add a row k4 to both rollup1 and rollup2 by adding the following k5 to rollup2:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('ALTER TABLE tbl1\nADD COLUMN k4 INT default "1" to rollup1,\nADD COLUMN k4 INT default "1" to rollup2,\nADD COLUMN k5 INT default "1" to rollup2;\n')])])]),t("p",[e._v("When completion, the Schema becomes:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+-----------+-------+------+------+------+---------+-------+\n| IndexName | Field | Type | Null | Key  | Default | Extra |\n+-----------+-------+------+------+------+---------+-------+\n| tbl1      | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n|           | k3    | INT  | No   | true | N/A     |       |\n|           | k4    | INT  | No   | true | 1       |       |\n|           | k5    | INT  | No   | true | 1       |       |\n|           |       |      |      |      |         |       |\n| rollup2   | k2    | INT  | No   | true | N/A     |       |\n|           | k4    | INT  | No   | true | 1       |       |\n|           | k5    | INT  | No   | true | 1       |       |\n|           |       |      |      |      |         |       |\n| rollup1   | k1    | INT  | No   | true | N/A     |       |\n|           | k2    | INT  | No   | true | N/A     |       |\n|           | k4    | INT  | No   | true | 1       |       |\n+-----------+-------+------+------+------+---------+-------+\n")])])]),t("p",[e._v("As you can see, the base table tbl1 also automatically added k4, k5 columns. That is, columns added to any rollup are automatically added to the Base table.")]),e._v(" "),t("p",[e._v("At the same time, columns that already exist in the Base table are not allowed to be added to Rollup. If you need to do this, you can re-create a Rollup with the new columns and then delete the original Rollup.")]),e._v(" "),t("h2",{attrs:{id:"notice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notice"}},[e._v("#")]),e._v(" Notice")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Only one Schema Change job can be running on a table at a time.")])]),e._v(" "),t("li",[t("p",[e._v("Schema Change operation does not block import and query operations.")])]),e._v(" "),t("li",[t("p",[e._v("The partition column and bucket column cannot be modified.")])]),e._v(" "),t("li",[t("p",[e._v("If there is a value column aggregated by REPLACE in the schema, the Key column is not allowed to be deleted.")])])]),e._v(" "),t("p",[e._v("If the Key column is deleted, Doris cannot determine the value of the REPLACE column.\n    \n     All non-Key columns of the Unique data model table are REPLACE aggregated.")]),e._v(" "),t("ul",[t("li",[e._v("When adding a value column whose aggregation type is SUM or REPLACE, the default value of this column has no meaning to historical data.")])]),e._v(" "),t("p",[e._v("Because the historical data has lost the detailed information, the default value cannot actually reflect the aggregated value.")]),e._v(" "),t("ul",[t("li",[e._v("When modifying the column type, fields other than Type need to be completed according to the information on the original column.")])]),e._v(" "),t("p",[e._v("If you modify the column "),t("code",[e._v('k1 INT SUM NULL DEFAULT" 1 "')]),e._v(" as type BIGINT, you need to execute the following command:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('```ALTER TABLE tbl1 MODIFY COLUMN `k1` BIGINT SUM NULL DEFAULT "1"; ```\n')])])]),t("p",[e._v("Note that in addition to the new column types, such as the aggregation mode, Nullable attributes, and default values must be completed according to the original information.")]),e._v(" "),t("ul",[t("li",[e._v("Modifying column names, aggregation types, nullable attributes, default values, and column comments is not supported.")])]),e._v(" "),t("h2",{attrs:{id:"faq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("the execution speed of Schema Change")]),e._v(" "),t("p",[e._v("At present, the execution speed of Schema Change is estimated to be about 10MB / s according to the worst efficiency. To be conservative, users can set the timeout for jobs based on this rate.")])]),e._v(" "),t("li",[t("p",[e._v("Submit job error "),t("code",[e._v("Table xxx is not stable. ...")])]),e._v(" "),t("p",[e._v("Schema Change can only be started when the table data is complete and unbalanced. If some data shard copies of the table are incomplete, or if some copies are undergoing an equalization operation, the submission is rejected.\n    \nWhether the data shard copy is complete can be checked with the following command:\n"),t("code",[e._v('ADMIN SHOW REPLICA STATUS FROM tbl WHERE STATUS != "OK";')])]),e._v(" "),t("p",[e._v("If a result is returned, there is a problem with the copy. These problems are usually fixed automatically by the system. You can also use the following commands to repair this table first:"),t("br"),e._v(" "),t("code",[e._v("ADMIN REPAIR TABLE tbl1;")])]),e._v(" "),t("p",[e._v("You can check if there are running balancing tasks with the following command:")]),e._v(" "),t("p",[t("code",[e._v('SHOW PROC "/cluster_balance/pending_tablets";')])]),e._v(" "),t("p",[e._v("You can wait for the balancing task to complete, or temporarily disable the balancing operation with the following command:")]),e._v(" "),t("p",[t("code",[e._v('ADMIN SET FRONTEND CONFIG ("disable_balance" = "true");')])])])]),e._v(" "),t("h2",{attrs:{id:"configurations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configurations"}},[e._v("#")]),e._v(" Configurations")]),e._v(" "),t("h3",{attrs:{id:"fe-configurations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fe-configurations"}},[e._v("#")]),e._v(" FE Configurations")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("alter_table_timeout_second")]),e._v("：The default timeout for the job is 86400 seconds.")])]),e._v(" "),t("h3",{attrs:{id:"be-configurations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#be-configurations"}},[e._v("#")]),e._v(" BE Configurations")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("alter_tablet_worker_count")]),e._v("：Number of threads used to perform historical data conversion on the BE side. The default is 3. If you want to speed up the Schema Change job, you can increase this parameter appropriately and restart the BE. But too many conversion threads can cause increased IO pressure and affect other operations. This thread is shared with the Rollup job.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);