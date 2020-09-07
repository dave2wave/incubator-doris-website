(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{699:function(t,a,_){"use strict";_.r(a);var e=_(43),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"动态分区"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#动态分区"}},[t._v("#")]),t._v(" 动态分区")]),t._v(" "),_("p",[t._v("动态分区是在 Doris 0.12 版本中引入的新功能。旨在对表级别的分区实现生命周期管理(TTL)，减少用户的使用负担。")]),t._v(" "),_("p",[t._v("目前实现了动态添加分区及动态删除分区的功能。")]),t._v(" "),_("h2",{attrs:{id:"名词解释"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[t._v("#")]),t._v(" 名词解释")]),t._v(" "),_("ul",[_("li",[t._v("FE：Frontend，Doris 的前端节点。负责元数据管理和请求接入。")]),t._v(" "),_("li",[t._v("BE：Backend，Doris 的后端节点。负责查询执行和数据存储。")])]),t._v(" "),_("h2",{attrs:{id:"原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),_("p",[t._v("在某些使用场景下，用户会将表按照天进行分区划分，每天定时执行例行任务，这时需要使用方手动管理分区，否则可能由于使用方没有创建分区导致数据导入失败，这给使用方带来了额外的维护成本。")]),t._v(" "),_("p",[t._v("通过动态分区功能，用户可以在建表时设定动态分区的规则。FE 会启动一个后台线程，根据用户指定的规则创建或删除分区。用户也可以在运行时对现有规则进行变更。")]),t._v(" "),_("h2",{attrs:{id:"使用方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[t._v("#")]),t._v(" 使用方式")]),t._v(" "),_("p",[t._v("动态分区的规则可以在建表时指定，或者在运行时进行修改。当前仅支持对单分区列的分区表设定动态分区规则。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("建表时指定：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('CREATE TABLE tbl1\n(...)\nPROPERTIES\n(\n    "dynamic_partition.prop1" = "value1",\n    "dynamic_partition.prop2" = "value2",\n    ...\n)\n')])])])]),t._v(" "),_("li",[_("p",[t._v("运行时修改")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('ALTER TABLE tbl1 SET\n(\n    "dynamic_partition.prop1" = "value1",\n    "dynamic_partition.prop2" = "value2",\n    ...\n)\n')])])])])]),t._v(" "),_("h3",{attrs:{id:"动态分区规则参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#动态分区规则参数"}},[t._v("#")]),t._v(" 动态分区规则参数")]),t._v(" "),_("p",[t._v("动态分区的规则参数都以 "),_("code",[t._v("dynamic_partition.")]),t._v(" 为前缀：")]),t._v(" "),_("ul",[_("li",[_("p",[_("code",[t._v("dynamic_partition.enable")])]),t._v(" "),_("p",[t._v("是否开启动态分区特性。可指定为 "),_("code",[t._v("TRUE")]),t._v(" 或 "),_("code",[t._v("FALSE")]),t._v("。如果不填写，默认为 "),_("code",[t._v("TRUE")]),t._v("。如果为 "),_("code",[t._v("FALSE")]),t._v("，则 Doris 会忽略该表的动态分区规则。")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("dynamic_partition.time_unit")])]),t._v(" "),_("p",[t._v("动态分区调度的单位。可指定为 "),_("code",[t._v("DAY")]),t._v("、"),_("code",[t._v("WEEK")]),t._v("、"),_("code",[t._v("MONTH")]),t._v("。分别表示按天、按星期、按月进行分区创建或删除。")]),t._v(" "),_("p",[t._v("当指定为 "),_("code",[t._v("DAY")]),t._v(" 时，动态创建的分区名后缀格式为 "),_("code",[t._v("yyyyMMdd")]),t._v("，例如"),_("code",[t._v("20200325")]),t._v("。")]),t._v(" "),_("p",[t._v("当指定为 "),_("code",[t._v("WEEK")]),t._v(" 时，动态创建的分区名后缀格式为"),_("code",[t._v("yyyy_ww")]),t._v("。即当前日期属于这一年的第几周，例如 "),_("code",[t._v("2020-03-25")]),t._v(" 创建的分区名后缀为 "),_("code",[t._v("2020_13")]),t._v(", 表明目前为2020年第13周。")]),t._v(" "),_("p",[t._v("当指定为 "),_("code",[t._v("MONTH")]),t._v(" 时，动态创建的分区名后缀格式为 "),_("code",[t._v("yyyyMM")]),t._v("，例如 "),_("code",[t._v("202003")]),t._v("。")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("dynamic_partition.time_zone")])]),t._v(" "),_("p",[t._v("动态分区的时区，如果不填写，则默认为当前机器的系统的时区，例如 "),_("code",[t._v("Asia/Shanghai")]),t._v("，如果想获取当前支持的时区设置，可以参考 "),_("code",[t._v("https://en.wikipedia.org/wiki/List_of_tz_database_time_zones")]),t._v("。")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("dynamic_partition.start")])]),t._v(" "),_("p",[t._v("动态分区的起始偏移，为负数。根据 "),_("code",[t._v("time_unit")]),t._v(" 属性的不同，以当天（星期/月）为基准，分区范围在此偏移之前的分区将会被删除。如果不填写，则默认为 "),_("code",[t._v("-2147483648")]),t._v("，即不删除历史分区。")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("dynamic_partition.end")])]),t._v(" "),_("p",[t._v("动态分区的结束偏移，为正数。根据 "),_("code",[t._v("time_unit")]),t._v(" 属性的不同，以当天（星期/月）为基准，提前创建对应范围的分区。")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("dynamic_partition.prefix")])]),t._v(" "),_("p",[t._v("动态创建的分区名前缀。")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("dynamic_partition.buckets")])]),t._v(" "),_("p",[t._v("动态创建的分区所对应的分桶数量。")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("dynamic_partition.replication_num")])]),t._v(" "),_("p",[t._v("动态创建的分区所对应的副本数量，如果不填写，则默认为该表创建时指定的副本数量。")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("dynamic_partition.start_day_of_week")])]),t._v(" "),_("p",[t._v("当 "),_("code",[t._v("time_unit")]),t._v(" 为 "),_("code",[t._v("WEEK")]),t._v(" 时，该参数用于指定每周的起始点。取值为 1 到 7。其中 1 表示周一，7 表示周日。默认为 1，即表示每周以周一为起始点。")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("dynamic_partition.start_day_of_month")])]),t._v(" "),_("p",[t._v("当 "),_("code",[t._v("time_unit")]),t._v(" 为 "),_("code",[t._v("MONTH")]),t._v(" 时，该参数用于指定每月的起始日期。取值为 1 到 28。其中 1 表示每月1号，28 表示每月28号。默认为 1，即表示每月以1号位起始点。暂不支持以29、30、31号为起始日，以避免因闰年或闰月带来的歧义。")])])]),t._v(" "),_("h2",{attrs:{id:"示例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("表 tbl1 分区列 k1 类型为 DATE，创建一个动态分区规则。按天分区，只保留最近7天的分区，并且预先创建未来3天的分区。")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('CREATE TABLE tbl1\n(\n    k1 DATE,\n    ...\n)\nPARTITION BY RANGE(k1) ()\nDISTRIBUTED BY HASH(k1)\nPROPERTIES\n(\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-7",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "32"\n);\n')])])]),_("p",[t._v("假设当前日期为 2020-05-29。则根据以上规则，tbl1 会产生以下分区：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('p20200529: ["2020-05-29", "2020-05-30")\np20200530: ["2020-05-30", "2020-05-31")\np20200531: ["2020-05-31", "2020-06-01")\np20200601: ["2020-06-01", "2020-06-02")\n')])])]),_("p",[t._v("在第二天，即 2020-05-30，会创建新的分区 "),_("code",[t._v('p20200602: ["2020-06-02", "2020-06-03")')])]),t._v(" "),_("p",[t._v("在 2020-06-06 时，因为 "),_("code",[t._v("dynamic_partition.start")]),t._v(" 设置为 7，则将删除7天前的分区，即删除分区 "),_("code",[t._v("p20200529")]),t._v("。")])]),t._v(" "),_("li",[_("p",[t._v("表 tbl1 分区列 k1 类型为 DATETIME，创建一个动态分区规则。按星期分区，只保留最近2个星期的分区，并且预先创建未来2个星期的分区。")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('CREATE TABLE tbl1\n(\n    k1 DATETIME,\n    ...\n)\nPARTITION BY RANGE(k1) ()\nDISTRIBUTED BY HASH(k1)\nPROPERTIES\n(\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "WEEK",\n    "dynamic_partition.start" = "-2",\n    "dynamic_partition.end" = "2",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "8"\n);\n')])])]),_("p",[t._v("假设当前日期为 2020-05-29，是 2020 年的第 22 周。默认每周起始为星期一。则根于以上规则，tbl1 会产生以下分区：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('p2020_22: ["2020-05-25 00:00:00", "2020-06-01 00:00:00")\np2020_23: ["2020-06-01 00:00:00", "2020-06-08 00:00:00")\np2020_24: ["2020-06-08 00:00:00", "2020-06-15 00:00:00")\n')])])]),_("p",[t._v("其中每个分区的起始日期为当周的周一。同时，因为分区列 k1 的类型为 DATETIME，则分区值会补全时分秒部分，且皆为 0。")]),t._v(" "),_("p",[t._v("在 2020-06-15，即第25周时，会删除2周前的分区，即删除 "),_("code",[t._v("p2020_22")]),t._v("。")]),t._v(" "),_("p",[t._v("在上面的例子中，假设用户指定了周起始日为 "),_("code",[t._v('"dynamic_partition.start_day_of_week" = "3"')]),t._v("，即以每周三为起始日。则分区如下：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('p2020_22: ["2020-05-27 00:00:00", "2020-06-03 00:00:00")\np2020_23: ["2020-06-03 00:00:00", "2020-06-10 00:00:00")\np2020_24: ["2020-06-10 00:00:00", "2020-06-17 00:00:00")\n')])])]),_("p",[t._v("即分区范围为当周的周三到下周的周二。")]),t._v(" "),_("ul",[_("li",[t._v("注：2019-12-31 和 2020-01-01 在同一周内，如果分区的起始日期为 2019-12-31，则分区名为 "),_("code",[t._v("p2019_53")]),t._v("，如果分区的起始日期为 2020-01-01，则分区名为 "),_("code",[t._v("p2020_01")]),t._v("。")])])]),t._v(" "),_("li",[_("p",[t._v("表 tbl1 分区列 k1 类型为 DATE，创建一个动态分区规则。按月分区，不删除历史分区，并且预先创建未来2个月的分区。同时设定以每月3号为起始日。")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('CREATE TABLE tbl1\n(\n    k1 DATE,\n    ...\n)\nPARTITION BY RANGE(k1) ()\nDISTRIBUTED BY HASH(k1)\nPROPERTIES\n(\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "MONTH",\n    "dynamic_partition.end" = "2",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "8",\n    "dynamic_partition.start_day_of_month" = "3"\n);\n')])])]),_("p",[t._v("假设当前日期为 2020-05-29。则根于以上规则，tbl1 会产生以下分区：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('p202005: ["2020-05-03", "2020-06-03")\np202006: ["2020-06-03", "2020-07-03")\np202007: ["2020-07-03", "2020-08-03")\n')])])]),_("p",[t._v("因为没有设置 "),_("code",[t._v("dynamic_partition.start")]),t._v("，则不会删除历史分区。")]),t._v(" "),_("p",[t._v("假设今天为 2020-05-20，并设置以每月28号为起始日，则分区范围为：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('p202004: ["2020-04-28", "2020-05-28")\np202005: ["2020-05-28", "2020-06-28")\np202006: ["2020-06-28", "2020-07-28")\n')])])])])]),t._v(" "),_("h2",{attrs:{id:"修改动态分区属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#修改动态分区属性"}},[t._v("#")]),t._v(" 修改动态分区属性")]),t._v(" "),_("p",[t._v("通过如下命令可以修改动态分区的属性：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('ALTER TABLE tbl1 SET\n(\n    "dynamic_partition.prop1" = "value1",\n    ...\n);\n')])])]),_("p",[t._v("某些属性的修改可能会可能会产生冲突。假设之前分区粒度为 DAY，并且已经创建了如下分区：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('p20200519: ["2020-05-19", "2020-05-20")\np20200520: ["2020-05-20", "2020-05-21")\np20200521: ["2020-05-21", "2020-05-22")\n')])])]),_("p",[t._v("如果此时将分区粒度改为 MONTH，则系统会尝试创建范围为 "),_("code",[t._v('["2020-05-01", "2020-06-01")')]),t._v(" 的分区，而该分区的分区范围和已有分区冲突，所以无法创建。而范围为 "),_("code",[t._v('["2020-06-01", "2020-07-01")')]),t._v(" 的分区可以正常创建。因此，2020-05-22 到 2020-05-30 时间段的分区，需要自行填补。")]),t._v(" "),_("h3",{attrs:{id:"查看动态分区表调度情况"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查看动态分区表调度情况"}},[t._v("#")]),t._v(" 查看动态分区表调度情况")]),t._v(" "),_("p",[t._v("通过以下命令可以进一步查看当前数据库下，所有动态分区表的调度情况：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("mysql> SHOW DYNAMIC PARTITION TABLES;\n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+\n| TableName | Enable | TimeUnit | Start       | End  | Prefix | Buckets | StartOf   | LastUpdateTime | LastSchedulerTime   | State  | LastCreatePartitionMsg | LastDropPartitionMsg |\n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+\n| d3        | true   | WEEK     | -3          | 3    | p      | 1       | MONDAY    | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  |\n| d5        | true   | DAY      | -7          | 3    | p      | 32      | N/A       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  |\n| d4        | true   | WEEK     | -3          | 3    | p      | 1       | WEDNESDAY | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  |\n| d6        | true   | MONTH    | -2147483648 | 2    | p      | 8       | 3rd       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  |\n| d2        | true   | DAY      | -3          | 3    | p      | 32      | N/A       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  |\n| d7        | true   | MONTH    | -2147483648 | 5    | p      | 8       | 24th      | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  |\n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+\n7 rows in set (0.02 sec)\n")])])]),_("ul",[_("li",[t._v("LastUpdateTime: 最后一次修改动态分区属性的时间")]),t._v(" "),_("li",[t._v("LastSchedulerTime:   最后一次执行动态分区调度的时间")]),t._v(" "),_("li",[t._v("State: 最后一次执行动态分区调度的状态")]),t._v(" "),_("li",[t._v("LastCreatePartitionMsg:  最后一次执行动态添加分区调度的错误信息")]),t._v(" "),_("li",[t._v("LastDropPartitionMsg:  最后一次执行动态删除分区调度的错误信息")])]),t._v(" "),_("h2",{attrs:{id:"高级操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#高级操作"}},[t._v("#")]),t._v(" 高级操作")]),t._v(" "),_("h3",{attrs:{id:"fe-配置项"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#fe-配置项"}},[t._v("#")]),t._v(" FE 配置项")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("dynamic_partition_enable")]),t._v(" "),_("p",[t._v("是否开启 Doris 的动态分区功能。默认为 false，即关闭。该参数只影响动态分区表的分区操作，不影响普通表。可以通过修改 fe.conf 中的参数并重启 FE 生效。也可以在运行时执行以下命令生效：")]),t._v(" "),_("p",[t._v("MySQL 协议：")]),t._v(" "),_("p",[_("code",[t._v('ADMIN SET FRONTEND CONFIG ("dynamic_partition_enable" = "true")')])]),t._v(" "),_("p",[t._v("HTTP 协议：")]),t._v(" "),_("p",[_("code",[t._v("curl --location-trusted -u username:password -XGET http://fe_host:fe_http_port/api/_set_config?dynamic_partition_enable=true")])]),t._v(" "),_("p",[t._v("若要全局关闭动态分区，则设置此参数为 false 即可。")])]),t._v(" "),_("li",[_("p",[t._v("dynamic_partition_check_interval_seconds")]),t._v(" "),_("p",[t._v("动态分区线程的执行频率，默认为3600(1个小时)，即每1个小时进行一次调度。可以通过修改 fe.conf 中的参数并重启 FE 生效。也可以在运行时执行以下命令修改：")]),t._v(" "),_("p",[t._v("MySQL 协议：")]),t._v(" "),_("p",[_("code",[t._v('ADMIN SET FRONTEND CONFIG ("dynamic_partition_check_interval_seconds" = "7200")')])]),t._v(" "),_("p",[t._v("HTTP 协议：")]),t._v(" "),_("p",[_("code",[t._v("curl --location-trusted -u username:password -XGET http://fe_host:fe_http_port/api/_set_config?dynamic_partition_check_interval_seconds=432000")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);