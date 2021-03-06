(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1088:function(e,t,a){"use strict";a.r(t);var o=a(43),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"rollup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollup"}},[e._v("#")]),e._v(" Rollup")]),e._v(" "),a("p",[e._v("Users can speed up queries by creating rollup tables. For the concept and usage of Rollup, please refer to "),a("RouterLink",{attrs:{to:"/en/getting-started/data-model-rollup_EN.html"}},[e._v("Data\nModel, ROLLUP and Prefix Index")]),e._v(" and\n"),a("RouterLink",{attrs:{to:"/en/getting-started/hit-the-rollup_EN.html"}},[e._v("Rollup and query")]),e._v(".")],1),e._v(" "),a("p",[e._v("This document focuses on how to create a Rollup job, as well as some considerations and frequently asked questions about creating a Rollup.")]),e._v(" "),a("h2",{attrs:{id:"glossary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[e._v("#")]),e._v(" Glossary")]),e._v(" "),a("ul",[a("li",[e._v("Base Table：When each table is created, it corresponds to a base table. The base table stores the complete data of this table. Rollups are usually created based on the data in the base table (and can also be created from other rollups).")]),e._v(" "),a("li",[e._v("Index：Materialized index. Rollup or Base Table are both called materialized indexes.")]),e._v(" "),a("li",[e._v("Transaction：Each import task is a transaction, and each transaction has a unique incrementing Transaction ID.")])]),e._v(" "),a("h2",{attrs:{id:"basic-principles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-principles"}},[e._v("#")]),e._v(" Basic Principles")]),e._v(" "),a("p",[e._v("The basic process of creating a Rollup is to generate a new Rollup data containing the specified column from the data in the Base table. Among them, two parts of data conversion are needed. One is the conversion of existing historical data, and the other is the conversion of newly arrived imported data during Rollup execution.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("+----------+\n| Load Job |\n+----+-----+\n     |\n     | Load job generates both base and rollup index data\n     |\n     |      +------------------+ +---------------+\n     |      | Base Index       | | Base Index    |\n     +------\x3e New Incoming Data| | History Data  |\n     |      +------------------+ +------+--------+\n     |                                  |\n     |                                  | Convert history data\n     |                                  |\n     |      +------------------+ +------v--------+\n     |      | Rollup Index     | | Rollup Index  |\n     +------\x3e New Incoming Data| | History Data  |\n            +------------------+ +---------------+\n")])])]),a("p",[e._v("Before starting the conversion of historical data, Doris will obtain a latest transaction ID. And wait for all import transactions before this Transaction ID to complete. This Transaction ID becomes a watershed. This means that Doris guarantees that all import tasks after the watershed will generate data for the Rollup Index at the same time. In this way, after the historical data conversion is completed, the data of the Rollup and Base tables can be guaranteed to be flush.")]),e._v(" "),a("h2",{attrs:{id:"create-job"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-job"}},[e._v("#")]),e._v(" Create Job")]),e._v(" "),a("p",[e._v("The specific syntax for creating a Rollup can be found in the description of the Rollup section in the help "),a("code",[e._v("HELP ALTER TABLE")]),e._v(".")]),e._v(" "),a("p",[e._v("The creation of Rollup is an asynchronous process. After the job is submitted successfully, the user needs to use the "),a("code",[e._v("SHOW ALTER TABLE ROLLUP")]),e._v(" command to view the progress of the job.")]),e._v(" "),a("h2",{attrs:{id:"view-job"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view-job"}},[e._v("#")]),e._v(" View Job")]),e._v(" "),a("p",[a("code",[e._v("SHOW ALTER TABLE ROLLUP")]),e._v(" You can view rollup jobs that are currently executing or completed. For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("          JobId: 20037\n      TableName: tbl1\n     CreateTime: 2019-08-06 15:38:49\n   FinishedTime: N/A\n  BaseIndexName: tbl1\nRollupIndexName: r1\n       RollupId: 20038\n  TransactionId: 10034\n          State: PENDING\n            Msg:\n       Progress: N/A\n        Timeout: 86400\n")])])]),a("ul",[a("li",[e._v("JobId: A unique ID for each Rollup job.")]),e._v(" "),a("li",[e._v("TableName: The table name of the base table corresponding to Rollup.")]),e._v(" "),a("li",[e._v("CreateTime: Job creation time.")]),e._v(" "),a("li",[e._v('FinishedTime: The end time of the job. If it is not finished, "N / A" is displayed.')]),e._v(" "),a("li",[e._v("BaseIndexName: The name of the source Index corresponding to Rollup.")]),e._v(" "),a("li",[e._v("RollupIndexName: The name of the Rollup.")]),e._v(" "),a("li",[e._v("RollupId: The unique ID of the Rollup.")]),e._v(" "),a("li",[e._v("TransactionId: the watershed transaction ID of the conversion history data.")]),e._v(" "),a("li",[e._v("State: The phase of the operation.\n     * PENDING: The job is waiting in the queue to be scheduled.\n     * WAITING_TXN: Wait for the import task before the watershed transaction ID to complete.\n     * RUNNING: Historical data conversion.\n     * FINISHED: The operation was successful.\n     * CANCELLED: The job failed.")]),e._v(" "),a("li",[e._v("Msg: If the job fails, a failure message is displayed here.")]),e._v(" "),a("li",[e._v("Progress: operation progress. Progress is displayed only in the RUNNING state. Progress is displayed in M / N. Where N is the total number of copies of Rollup. M is the number of copies of historical data conversion completed.")]),e._v(" "),a("li",[e._v("Timeout: Job timeout time. Unit of second.")])]),e._v(" "),a("h2",{attrs:{id:"cancel-job"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cancel-job"}},[e._v("#")]),e._v(" Cancel Job")]),e._v(" "),a("p",[e._v("In the case that the job status is not FINISHED or CANCELLED, you can cancel the Rollup job with the following command:")]),e._v(" "),a("p",[a("code",[e._v("CANCEL ALTER TABLE ROLLUP FROM tbl_name;")])]),e._v(" "),a("h2",{attrs:{id:"notice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notice"}},[e._v("#")]),e._v(" Notice")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("A table can have only one Rollup job running at a time. And only one rollup can be created in a job.")])]),e._v(" "),a("li",[a("p",[e._v("Rollup operations do not block import and query operations.")])]),e._v(" "),a("li",[a("p",[e._v("If a DELETE operation has a Key column in a where condition that does not exist in a Rollup, the DELETE is not allowed.")])])]),e._v(" "),a("p",[e._v("If a Key column does not exist in a Rollup, the DELETE operation cannot delete data from the Rollup, so the data consistency between the Rollup table and the Base table cannot be guaranteed.")]),e._v(" "),a("ul",[a("li",[e._v("Rollup columns must exist in the Base table.")])]),e._v(" "),a("p",[e._v("Rollup columns are always a subset of the Base table columns. Columns that do not exist in the Base table cannot appear.")]),e._v(" "),a("ul",[a("li",[e._v("If a rollup contains columns of the REPLACE aggregation type, the rollup must contain all the key columns.")])]),e._v(" "),a("p",[e._v("Assume the structure of the Base table is as follows:\n    \n    "),a("code",[e._v("`(k1 INT, k2 INT, v1 INT REPLACE, v2 INT SUM)`")]),e._v("\n    \n    If you need to create a Rollup that contains "),a("code",[e._v("v1")]),e._v(" columns, you must include the"),a("code",[e._v("k1")]),e._v(", "),a("code",[e._v("k2")]),e._v(" columns. Otherwise, the system cannot determine the value of "),a("code",[e._v("v1")]),e._v(" listed in Rollup.\n    \n    Note that all Value columns in the Unique data model table are of the REPLACE aggregation type.")]),e._v(" "),a("ul",[a("li",[e._v("Rollup of the DUPLICATE data model table, you can specify the DUPLICATE KEY of the rollup.")])]),e._v(" "),a("p",[e._v("The DUPLICATE KEY in the DUPLICATE data model table is actually sorted. Rollup can specify its own sort order, but the sort order must be a prefix of the Rollup column order. If not specified, the system will check if the Rollup contains all sort columns of the Base table, and if it does not, it will report an error. For example:\n    \n    Base table structure: "),a("code",[e._v("(k1 INT, k2 INT, k3 INT) DUPLICATE KEY (k1, k2)")]),e._v("\n    \n    Rollup can be: "),a("code",[e._v("(k2 INT, k1 INT) DUPLICATE KEY (k2)")])]),e._v(" "),a("ul",[a("li",[e._v("Rollup does not need to include partitioned or bucket columns for the Base table.")])]),e._v(" "),a("h2",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),a("ul",[a("li",[e._v("How many rollups can a table create")])]),e._v(" "),a("p",[e._v("There is theoretically no limit to the number of rollups a table can create, but too many rollups can affect import performance. Because when importing, data will be generated for all rollups at the same time. At the same time, Rollup will take up physical storage space. Usually the number of rollups for a table is less than 10.")]),e._v(" "),a("ul",[a("li",[e._v("Rollup creation speed")])]),e._v(" "),a("p",[e._v("Rollup creation speed is currently estimated at about 10MB / s based on the worst efficiency. To be conservative, users can set the timeout for jobs based on this rate.")]),e._v(" "),a("ul",[a("li",[e._v("Submitting job error "),a("code",[e._v("Table xxx is not stable. ...")])])]),e._v(" "),a("p",[e._v("Rollup can start only when the table data is complete and unbalanced. If some data shard copies of the table are incomplete, or if some copies are undergoing an equalization operation, the submission is rejected.\n    \n    Whether the data shard copy is complete can be checked with the following command:\n    \n    "),a("code",[e._v('ADMIN SHOW REPLICA STATUS FROM tbl WHERE STATUS! =" OK ";')]),e._v("\n    \n    If a result is returned, there is a problem with the copy. These problems are usually fixed automatically by the system. You can also use the following commands to repair this table first:\n    \n    "),a("code",[e._v("ADMIN REPAIR TABLE tbl1;")]),e._v("\n    \n    You can check if there are running balancing tasks with the following command:\n    \n    "),a("code",[e._v('SHOW PROC" / cluster_balance / pending_tablets ";')]),e._v("\n    \n    You can wait for the balancing task to complete, or temporarily disable the balancing operation with the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('```ADMIN SET FRONTEND CONFIG ("disable_balance" = "true");```\n')])])]),a("h2",{attrs:{id:"configurations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurations"}},[e._v("#")]),e._v(" Configurations")]),e._v(" "),a("h3",{attrs:{id:"fe-configurations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fe-configurations"}},[e._v("#")]),e._v(" FE Configurations")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("alter_table_timeout_second")]),e._v("：The default timeout for the job is 86400 seconds.")])]),e._v(" "),a("h3",{attrs:{id:"be-configurations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#be-configurations"}},[e._v("#")]),e._v(" BE Configurations")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("alter_tablet_worker_count")]),e._v("：Number of threads used to perform historical data conversion on the BE side. The default is 3. If you want to speed up the rollup job, you can increase this parameter appropriately and restart the BE. But too many conversion threads can cause increased IO pressure and affect other operations. This thread is shared with the Schema Change job.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);