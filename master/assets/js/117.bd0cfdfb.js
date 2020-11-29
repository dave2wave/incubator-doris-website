(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{1073:function(e,a,t){"use strict";t.r(a);var s=t(43),i=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"best-practices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[e._v("#")]),e._v(" Best Practices")]),e._v(" "),t("h2",{attrs:{id:"_1-tabulation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-tabulation"}},[e._v("#")]),e._v(" 1 tabulation")]),e._v(" "),t("h3",{attrs:{id:"_1-1-data-model-selection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-data-model-selection"}},[e._v("#")]),e._v(" 1.1 Data Model Selection")]),e._v(" "),t("p",[e._v("Doris data model is currently divided into three categories: AGGREGATE KEY, UNIQUE KEY, DUPLICATE KEY. Data in all three models are sorted by KEY.")]),e._v(" "),t("p",[e._v("1.1.1. AGGREGATE KEY")]),e._v(" "),t("p",[e._v("When AGGREGATE KEY is the same, old and new records are aggregated. The aggregation functions currently supported are SUM, MIN, MAX, REPLACE.")]),e._v(" "),t("p",[e._v("AGGREGATE KEY model can aggregate data in advance and is suitable for reporting and multi-dimensional analysis business.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("CREATE TABLE site_visit\n(\nsiteid      INT,\nCity: SMALLINT,\nusername VARCHAR (32),\npv BIGINT   SUM DEFAULT '0'\n)\nAGGREGATE KEY(siteid, city, username)\nDISTRIBUTED BY HASH(siteid) BUCKETS 10;\n")])])]),t("p",[e._v("1.1.2. KEY UNIQUE")]),e._v(" "),t("p",[e._v("When UNIQUE KEY is the same, the new record covers the old record. At present, UNIQUE KEY implements the same REPLACE aggregation method as AGGREGATE KEY, and they are essentially the same. Suitable for analytical business with updated requirements.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("CREATE TABLE sales_order\n(\norderid     BIGINT,\nstatus      TINYINT,\nusername VARCHAR (32),\namount      BIGINT DEFAULT '0'\n)\nKEY (orderid) UNIT\nDISTRIBUTED BY HASH(orderid) BUCKETS 10;\n")])])]),t("p",[e._v("1.1.3. DUPLICATE KEY")]),e._v(" "),t("p",[e._v("Only sort columns are specified, and the same rows are not merged. It is suitable for the analysis business where data need not be aggregated in advance.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("CREATE TABLE session_data\n(\nvisitorid SMALLINT,\nsessionid   BIGINT,\nvisit time DATETIME,\nCity CHAR (20),\nprovince    CHAR(20),\nip. varchar (32),\nbrower      CHAR(20),\nurl: VARCHAR (1024)\n)\nDUPLICATE KEY (visitor time, session time)\nDISTRIBUTED BY HASH(sessionid, visitorid) BUCKETS 10;\n")])])]),t("h3",{attrs:{id:"_1-2-wide-table-vs-star-schema"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-wide-table-vs-star-schema"}},[e._v("#")]),e._v(" 1.2 Wide Table vs. Star Schema")]),e._v(" "),t("p",[e._v("In order to adapt to the front-end business, business side often does not distinguish dimension information from indicator information, but defines Schema as a wide table. For Doris, the performance of such wide gauges is often unsatisfactory:")]),e._v(" "),t("ul",[t("li",[e._v("There are many fields in Schema, and there may be more key columns in the aggregation model. The number of columns that need to be sorted in the import process will increase.")]),e._v(" "),t("li",[e._v("Dimensional information updates are reflected in the whole table, and the frequency of updates directly affects the efficiency of queries.")])]),e._v(" "),t("p",[e._v("In the process of using Star Schema, users are advised to use Star Schema to distinguish dimension tables from indicator tables as much as possible. Frequently updated dimension tables can also be placed in MySQL external tables. If there are only a few updates, they can be placed directly in Doris. When storing dimension tables in Doris, more copies of dimension tables can be set up to improve Join's performance.")]),e._v(" "),t("h3",{attrs:{id:"_1-3-partitioning-and-bucketing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-partitioning-and-bucketing"}},[e._v("#")]),e._v(" 1.3 Partitioning and Bucketing")]),e._v(" "),t("p",[e._v("Doris supports two-level partitioned storage. The first layer is RANGE partition and the second layer is HASH bucket.")]),e._v(" "),t("p",[e._v("1.3.1. RANGE Partitioning")]),e._v(" "),t("p",[e._v("The RANGE partition is used to divide data into different intervals, which can be logically understood as dividing the original table into multiple sub-tables. In business, most users will choose to partition on time, which has the following advantages:")]),e._v(" "),t("ul",[t("li",[e._v("Differentiable heat and cold data")]),e._v(" "),t("li",[e._v("Availability of Doris Hierarchical Storage (SSD + SATA)")]),e._v(" "),t("li",[e._v("Delete data by partition more quickly")])]),e._v(" "),t("p",[e._v("1.3.2. Hash Bucketing")]),e._v(" "),t("p",[e._v("The data is divided into different buckets according to the hash value.")]),e._v(" "),t("ul",[t("li",[e._v("It is suggested that columns with large differentiation should be used as buckets to avoid data skew.")]),e._v(" "),t("li",[e._v("In order to facilitate data recovery, it is suggested that the size of a single bucket should not be too large and should be kept within 10GB. Therefore, the number of buckets should be considered reasonably when building tables or increasing partitions, among which different partitions can specify different buckets.")])]),e._v(" "),t("h3",{attrs:{id:"_1-4-sparse-index-and-bloom-filter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-sparse-index-and-bloom-filter"}},[e._v("#")]),e._v(" 1.4 Sparse Index and Bloom Filter")]),e._v(" "),t("p",[e._v("Doris stores the data in an orderly manner, and builds a sparse index for Doris on the basis of ordered data. The index granularity is block (1024 rows).")]),e._v(" "),t("p",[e._v("Sparse index chooses fixed length prefix in schema as index content, and Doris currently chooses 36 bytes prefix as index.")]),e._v(" "),t("ul",[t("li",[e._v("When building tables, it is suggested that the common filter fields in queries should be placed in front of Schema. The more distinguishable the query fields are, the more frequent the query fields are.")]),e._v(" "),t("li",[e._v("One particular feature of this is the varchar type field. The varchar type field can only be used as the last field of the sparse index. The index is truncated at varchar, so if varchar appears in front, the length of the index may be less than 36 bytes. Specifically, you can refer to [data model, ROLLUP and prefix index] (. / data-model-rollup. md).")]),e._v(" "),t("li",[e._v("In addition to sparse index, Doris also provides bloomfilter index. Bloomfilter index has obvious filtering effect on columns with high discrimination. If you consider that varchar cannot be placed in a sparse index, you can create a bloomfilter index.")])]),e._v(" "),t("h3",{attrs:{id:"_1-5-physical-and-chemical-view-rollup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-physical-and-chemical-view-rollup"}},[e._v("#")]),e._v(" 1.5 Physical and Chemical View (rollup)")]),e._v(" "),t("p",[e._v("Rollup can essentially be understood as a physical index of the original table. When creating Rollup, only some columns in Base Table can be selected as Schema. The order of fields in Schema can also be different from that in Base Table.")]),e._v(" "),t("p",[e._v("Rollup can be considered in the following cases:")]),e._v(" "),t("p",[e._v("1.5.1. Low ratio of data aggregation in the Base Table")]),e._v(" "),t("p",[e._v("This is usually due to the fact that Base Table has more differentiated fields. At this point, you can consider selecting some columns and establishing Rollup.")]),e._v(" "),t("p",[e._v("For the `site_visit'table:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("site -u visit (siteid, city, username, pv)\n")])])]),t("p",[e._v("Siteid may lead to a low degree of data aggregation. If business parties often base their PV needs on city statistics, they can build a city-only, PV-based rollup:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("ALTER TABLE site_visit ADD ROLLUP rollup_city(city, pv);\n")])])]),t("p",[e._v("1.5.2. The prefix index in Base Table cannot be hit")]),e._v(" "),t("p",[e._v("Generally, the way Base Table is constructed cannot cover all query modes. At this point, you can consider adjusting the column order and establishing Rollup.")]),e._v(" "),t("p",[e._v("Database Session")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("session -u data (visitorid, sessionid, visittime, city, province, ip, browser, url)\n")])])]),t("p",[e._v("In addition to visitorid analysis, there are Brower and province analysis cases, Rollup can be established separately.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("ALTER TABLE session_data ADD ROLLUP rollup_brower(brower,province,ip,url) DUPLICATE KEY(brower,province);\n")])])]),t("h2",{attrs:{id:"_2-schema-change"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-schema-change"}},[e._v("#")]),e._v(" 2 Schema Change")]),e._v(" "),t("p",[e._v("There are three Schema Change in doris：Sorted Schema Change，Direct Schema Change, Linked Schema Change。")]),e._v(" "),t("p",[e._v("2.1. Sorted Schema Change")]),e._v(" "),t("p",[e._v("The sorting of columns has been changed and the data needs to be reordered. For example, delete a column in a sorted column and reorder the fields.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("ALTER TABLE site_visit DROP COLUMN city;\n")])])]),t("p",[e._v("2.2. Direct Schema Change: There is no need to reorder, but there is a need to convert the data. For example, modify\nthe type of column, add a column to the sparse index, etc.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("ALTER TABLE site_visit MODIFY COLUMN username varchar(64);\n")])])]),t("p",[e._v("2.3. Linked Schema Change: No need to transform data, for example add columns.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("ALTER TABLE site_visit ADD COLUMN click bigint SUM default '0';\n")])])]),t("p",[e._v("Schema is recommended to be considered when creating tables so that Schema can be changed more quickly.")])])}),[],!1,null,null,null);a.default=i.exports}}]);