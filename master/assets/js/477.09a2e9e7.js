(window.webpackJsonp=window.webpackJsonp||[]).push([[477],{864:function(_,e,v){"use strict";v.r(e);var t=v(43),o=Object(t.a)({},(function(){var _=this,e=_.$createElement,v=_._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"变量"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[_._v("#")]),_._v(" 变量")]),_._v(" "),v("p",[_._v("本文档主要介绍当前支持的变量（variables）。")]),_._v(" "),v("p",[_._v("Doris 中的变量参考 MySQL 中的变量设置。但部分变量仅用于兼容一些 MySQL 客户端协议，并不产生其在 MySQL 数据库中的实际意义。")]),_._v(" "),v("h2",{attrs:{id:"变量设置与查看"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#变量设置与查看"}},[_._v("#")]),_._v(" 变量设置与查看")]),_._v(" "),v("h3",{attrs:{id:"查看"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#查看"}},[_._v("#")]),_._v(" 查看")]),_._v(" "),v("p",[_._v("可以通过 "),v("code",[_._v("SHOW VARIABLES [LIKE 'xxx'];")]),_._v(" 查看所有或指定的变量。如：")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("SHOW VARIABLES;\nSHOW VARIABLES LIKE '%time_zone%';\n")])])]),v("h3",{attrs:{id:"设置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置"}},[_._v("#")]),_._v(" 设置")]),_._v(" "),v("p",[_._v("部分变量可以设置全局生效或仅当前会话生效。设置全局生效后，后续新的会话连接中会沿用设置值。而设置仅当前会话生效，则变量仅对当前会话产生作用。")]),_._v(" "),v("p",[_._v("仅当前会话生效，通过 "),v("code",[_._v("SET var_name=xxx;")]),_._v(" 语句来设置。如：")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v('SET exec_mem_limit = 137438953472;\nSET forward_to_master = true;\nSET time_zone = "Asia/Shanghai";\n')])])]),v("p",[_._v("全局生效，通过 "),v("code",[_._v("SET GLOBAL var_name=xxx;")]),_._v(" 设置。如：")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("SET GLOBAL exec_mem_limit = 137438953472\n")])])]),v("blockquote",[v("p",[_._v("注1：只有 ADMIN 用户可以设置变量的全局生效。\n注2：全局生效的变量不影响当前会话的变量值，仅影响新的会话中的变量。")])]),_._v(" "),v("p",[_._v("既支持当前会话生效又支持全局生效的变量包括：")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("time_zone")])]),_._v(" "),v("li",[v("code",[_._v("wait_timeout")])]),_._v(" "),v("li",[v("code",[_._v("sql_mode")])]),_._v(" "),v("li",[v("code",[_._v("is_report_success")])]),_._v(" "),v("li",[v("code",[_._v("query_timeout")])]),_._v(" "),v("li",[v("code",[_._v("exec_mem_limit")])]),_._v(" "),v("li",[v("code",[_._v("batch_size")])]),_._v(" "),v("li",[v("code",[_._v("allow_partition_column_nullable")])]),_._v(" "),v("li",[v("code",[_._v("insert_visible_timeout_ms")])]),_._v(" "),v("li",[v("code",[_._v("enable_fold_constant_by_be")])])]),_._v(" "),v("p",[_._v("只支持全局生效的变量包括：")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("default_rowset_type")])])]),_._v(" "),v("p",[_._v("同时，变量设置也支持常量表达式。如：")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("SET exec_mem_limit = 10 * 1024 * 1024 * 1024;\nSET forward_to_master = concat('tr', 'u', 'e');\n")])])]),v("h3",{attrs:{id:"在查询语句中设置变量"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#在查询语句中设置变量"}},[_._v("#")]),_._v(" 在查询语句中设置变量")]),_._v(" "),v("p",[_._v("在一些场景中，我们可能需要对某些查询有针对性的设置变量。\n通过使用SET_VAR提示可以在查询中设置会话变量（在单个语句内生效）。例子：")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("SELECT /*+ SET_VAR(exec_mem_limit = 8589934592) */ name FROM people ORDER BY name;\nSELECT /*+ SET_VAR(query_timeout = 1, enable_partition_cache=true) */ sleep(3);\n")])])]),v("p",[_._v("注意注释必须以/*+ 开头，并且只能跟随在SELECT之后。")]),_._v(" "),v("h2",{attrs:{id:"支持的变量"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#支持的变量"}},[_._v("#")]),_._v(" 支持的变量")]),_._v(" "),v("ul",[v("li",[v("p",[v("code",[_._v("SQL_AUTO_IS_NULL")])]),_._v(" "),v("p",[_._v("用于兼容 JDBC 连接池 C3P0。 无实际作用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("auto_increment_increment")])]),_._v(" "),v("p",[_._v("用于兼容 MySQL 客户端。无实际作用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("autocommit")])]),_._v(" "),v("p",[_._v("用于兼容 MySQL 客户端。无实际作用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("batch_size")])]),_._v(" "),v("p",[_._v("用于指定在查询执行过程中，各个节点传输的单个数据包的行数。默认一个数据包的行数为 1024 行，即源端节点每产生 1024 行数据后，打包发给目的节点。")]),_._v(" "),v("p",[_._v("较大的行数，会在扫描大数据量场景下提升查询的吞吐，但可能会在小查询场景下增加查询延迟。同时，也会增加查询的内存开销。建议设置范围 1024 至 4096。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("character_set_client")])]),_._v(" "),v("p",[_._v("用于兼容 MySQL 客户端。无实际作用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("character_set_connection")])]),_._v(" "),v("p",[_._v("用于兼容 MySQL 客户端。无实际作用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("character_set_results")])]),_._v(" "),v("p",[_._v("用于兼容 MySQL 客户端。无实际作用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("character_set_server")])]),_._v(" "),v("p",[_._v("用于兼容 MySQL 客户端。无实际作用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("codegen_level")])]),_._v(" "),v("p",[_._v("用于设置 LLVM codegen 的等级。（当前未生效）。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("collation_connection")])]),_._v(" "),v("p",[_._v("用于兼容 MySQL 客户端。无实际作用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("collation_database")])]),_._v(" "),v("p",[_._v("用于兼容 MySQL 客户端。无实际作用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("collation_server")])]),_._v(" "),v("p",[_._v("用于兼容 MySQL 客户端。无实际作用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("delete_without_partition")])]),_._v(" "),v("p",[_._v("设置为 true 时。当使用 delete 命令删除分区表数据时，可以不指定分区。delete 操作将会自动应用到所有分区。")]),_._v(" "),v("p",[_._v("但注意，自动应用到所有分区可能到导致 delete 命令耗时触发大量子任务导致耗时较长。如无必要，不建议开启。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("disable_colocate_join")])]),_._v(" "),v("p",[_._v("控制是否启用 "),v("RouterLink",{attrs:{to:"/zh-CN/administrator-guide/colocation-join.html"}},[_._v("Colocation Join")]),_._v(" 功能。默认为 false，表示启用该功能。true 表示禁用该功能。当该功能被禁用后，查询规划将不会尝试执行 Colocation Join。")],1)]),_._v(" "),v("li",[v("p",[v("code",[_._v("enable_bucket_shuffle_join")])]),_._v(" "),v("p",[_._v("控制是否启用 "),v("RouterLink",{attrs:{to:"/zh-CN/administrator-guide/bucket-shuffle-join.html"}},[_._v("Bucket Shuffle Join")]),_._v(" 功能。默认为 true，表示启用该功能。false 表示禁用该功能。当该功能被禁用后，查询规划将不会尝试执行 Bucket Shuffle Join。")],1)]),_._v(" "),v("li",[v("p",[v("code",[_._v("disable_streaming_preaggregations")])]),_._v(" "),v("p",[_._v("控制是否开启流式预聚合。默认为 false，即开启。当前不可设置，且默认开启。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("enable_insert_strict")])]),_._v(" "),v("p",[_._v("用于设置通过 INSERT 语句进行数据导入时，是否开启 "),v("code",[_._v("strict")]),_._v(" 模式。默认为 false，即不开启 "),v("code",[_._v("strict")]),_._v(" 模式。关于该模式的介绍，可以参阅 "),v("RouterLink",{attrs:{to:"/zh-CN/administrator-guide/load-data/insert-into-manual.html"}},[_._v("这里")]),_._v("。")],1)]),_._v(" "),v("li",[v("p",[v("code",[_._v("enable_spilling")])]),_._v(" "),v("p",[_._v("用于设置是否开启大数据量落盘排序。默认为 false，即关闭该功能。当用户未指定 ORDER BY 子句的 LIMIT 条件，同时设置 "),v("code",[_._v("enable_spilling")]),_._v(" 为 true 时，才会开启落盘排序。该功能启用后，会使用 BE 数据目录下 "),v("code",[_._v("doris-scratch/")]),_._v(" 目录存放临时的落盘数据，并在查询结束后，清空临时数据。")]),_._v(" "),v("p",[_._v("该功能主要用于使用有限的内存进行大数据量的排序操作。")]),_._v(" "),v("p",[_._v("注意，该功能为实验性质，不保证稳定性，请谨慎开启。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("exec_mem_limit")])]),_._v(" "),v("p",[_._v("用于设置单个查询的内存限制。默认为 2GB，单位为B/K/KB/M/MB/G/GB/T/TB/P/PB, 默认为B。")]),_._v(" "),v("p",[_._v("该参数用于限制一个查询计划中，单个查询计划的实例所能使用的内存。一个查询计划可能有多个实例，一个 BE 节点可能执行一个或多个实例。所以该参数并不能准确限制一个查询在整个集群的内存使用，也不能准确限制一个查询在单一 BE 节点上的内存使用。具体需要根据生成的查询计划判断。")]),_._v(" "),v("p",[_._v("通常只有在一些阻塞节点（如排序节点、聚合节点、Join 节点）上才会消耗较多的内存，而其他节点（如扫描节点）中，数据为流式通过，并不会占用较多的内存。")]),_._v(" "),v("p",[_._v("当出现 "),v("code",[_._v("Memory Exceed Limit")]),_._v(" 错误时，可以尝试指数级增加该参数，如 4G、8G、16G 等。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("forward_to_master")])]),_._v(" "),v("p",[_._v("用户设置是否将一些命令转发到 Master FE 节点执行。默认为 false，即不转发。Doris 中存在多个 FE 节点，其中一个为 Master 节点。通常用户可以连接任意 FE 节点进行全功能操作。但部分信息查看指令，只有从 Master FE 节点才能获取详细信息。")]),_._v(" "),v("p",[_._v("如 "),v("code",[_._v("SHOW BACKENDS;")]),_._v(" 命令，如果不转发到 Master FE 节点，则仅能看到节点是否存活等一些基本信息，而转发到 Master FE 则可以获取包括节点启动时间、最后一次心跳时间等更详细的信息。")]),_._v(" "),v("p",[_._v("当前受该参数影响的命令如下：")]),_._v(" "),v("ol",[v("li",[v("p",[v("code",[_._v("SHOW FRONTENDS;")])]),_._v(" "),v("p",[_._v("转发到 Master 可以查看最后一次心跳信息。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("SHOW BACKENDS;")])]),_._v(" "),v("p",[_._v("转发到 Master 可以查看启动时间、最后一次心跳信息、磁盘容量信息。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("SHOW BROKER;")])]),_._v(" "),v("p",[_._v("转发到 Master 可以查看启动时间、最后一次心跳信息。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("SHOW TABLET;")]),_._v("/"),v("code",[_._v("ADMIN SHOW REPLICA DISTRIBUTION;")]),_._v("/"),v("code",[_._v("ADMIN SHOW REPLICA STATUS;")])]),_._v(" "),v("p",[_._v("转发到 Master 可以查看 Master FE 元数据中存储的 tablet 信息。正常情况下，不同 FE 元数据中 tablet 信息应该是一致的。当出现问题时，可以通过这个方法比较当前 FE 和 Master FE 元数据的差异。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("SHOW PROC;")])]),_._v(" "),v("p",[_._v("转发到 Master 可以查看 Master FE 元数据中存储的相关 PROC 的信息。主要用于元数据比对。")])])])]),_._v(" "),v("li",[v("p",[v("code",[_._v("init_connect")])]),_._v(" "),v("p",[_._v("用于兼容 MySQL 客户端。无实际作用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("interactive_timeout")])]),_._v(" "),v("p",[_._v("用于兼容 MySQL 客户端。无实际作用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("is_report_success")])]),_._v(" "),v("p",[_._v("用于设置是否需要查看查询的 profile。默认为 false，即不需要 profile。")]),_._v(" "),v("p",[_._v("默认情况下，只有在查询发生错误时，BE 才会发送 profile 给 FE，用于查看错误。正常结束的查询不会发送 profile。发送 profile 会产生一定的网络开销，对高并发查询场景不利。\n当用户希望对一个查询的 profile 进行分析时，可以将这个变量设为 true 后，发送查询。查询结束后，可以通过在当前连接的 FE 的 web 页面查看到 profile：")]),_._v(" "),v("p",[v("code",[_._v("fe_host:fe_http_port/query")])]),_._v(" "),v("p",[_._v("其中会显示最近100条，开启 "),v("code",[_._v("is_report_success")]),_._v(" 的查询的 profile。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("language")])]),_._v(" "),v("p",[_._v("用于兼容 MySQL 客户端。无实际作用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("license")])]),_._v(" "),v("p",[_._v("显示 Doris 的 License。无其他作用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("load_mem_limit")])]),_._v(" "),v("p",[_._v("用于指定导入操作的内存限制。默认为 0，即表示不使用该变量，而采用 "),v("code",[_._v("exec_mem_limit")]),_._v(" 作为导入操作的内存限制。")]),_._v(" "),v("p",[_._v("这个变量仅用于 INSERT 操作。因为 INSERT 操作设计查询和导入两个部分，如果用户不设置此变量，则查询和导入操作各自的内存限制均为 "),v("code",[_._v("exec_mem_limit")]),_._v("。否则，INSERT 的查询部分内存限制为 "),v("code",[_._v("exec_mem_limit")]),_._v("，而导入部分限制为 "),v("code",[_._v("load_mem_limit")]),_._v("。")]),_._v(" "),v("p",[_._v("其他导入方式，如 BROKER LOAD，STREAM LOAD 的内存限制依然使用 "),v("code",[_._v("exec_mem_limit")]),_._v("。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("lower_case_table_names")])]),_._v(" "),v("p",[_._v("用于兼容 MySQL 客户端。不可设置。当前 Doris 中的表名默认为大小写敏感。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("max_allowed_packet")])]),_._v(" "),v("p",[_._v("用于兼容 JDBC 连接池 C3P0。 无实际作用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("max_pushdown_conditions_per_column")])]),_._v(" "),v("p",[_._v("该变量的具体含义请参阅 "),v("RouterLink",{attrs:{to:"/zh-CN/administrator-guide/config/be_config.html"}},[_._v("BE 配置项")]),_._v(" 中 "),v("code",[_._v("max_pushdown_conditions_per_column")]),_._v(" 的说明。该变量默认置为 -1，表示使用 "),v("code",[_._v("be.conf")]),_._v(" 中的配置值。如果设置大于 0，则当前会话中的查询会使用该变量值，而忽略 "),v("code",[_._v("be.conf")]),_._v(" 中的配置值。")],1)]),_._v(" "),v("li",[v("p",[v("code",[_._v("max_scan_key_num")])]),_._v(" "),v("p",[_._v("该变量的具体含义请参阅 "),v("RouterLink",{attrs:{to:"/zh-CN/administrator-guide/config/be_config.html"}},[_._v("BE 配置项")]),_._v(" 中 "),v("code",[_._v("doris_max_scan_key_num")]),_._v(" 的说明。该变量默认置为 -1，表示使用 "),v("code",[_._v("be.conf")]),_._v(" 中的配置值。如果设置大于 0，则当前会话中的查询会使用该变量值，而忽略 "),v("code",[_._v("be.conf")]),_._v(" 中的配置值。")],1)]),_._v(" "),v("li",[v("p",[v("code",[_._v("net_buffer_length")])]),_._v(" "),v("p",[_._v("用于兼容 MySQL 客户端。无实际作用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("net_read_timeout")])]),_._v(" "),v("p",[_._v("用于兼容 MySQL 客户端。无实际作用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("net_write_timeout")])]),_._v(" "),v("p",[_._v("用于兼容 MySQL 客户端。无实际作用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("parallel_exchange_instance_num")])]),_._v(" "),v("p",[_._v("用于设置执行计划中，一个上层节点接收下层节点数据所使用的 exchange node 数量。默认为 -1，即表示 exchange node 数量等于下层节点执行实例的个数（默认行为）。当设置大于0，并且小于下层节点执行实例的个数，则 exchange node 数量等于设置值。")]),_._v(" "),v("p",[_._v("在一个分布式的查询执行计划中，上层节点通常有一个或多个 exchange node 用于接收来自下层节点在不同 BE 上的执行实例的数据。通常 exchange node 数量等于下层节点执行实例数量。")]),_._v(" "),v("p",[_._v("在一些聚合查询场景下，如果底层需要扫描的数据量较大，但聚合之后的数据量很小，则可以尝试修改此变量为一个较小的值，可以降低此类查询的资源开销。如在 DUPLICATE KEY 明细模型上进行聚合查询的场景。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("parallel_fragment_exec_instance_num")])]),_._v(" "),v("p",[_._v("针对扫描节点，设置其在每个 BE 节点上，执行实例的个数。默认为 1。")]),_._v(" "),v("p",[_._v("一个查询计划通常会产生一组 scan range，即需要扫描的数据范围。这些数据分布在多个 BE 节点上。一个 BE 节点会有一个或多个 scan range。默认情况下，每个 BE 节点的一组 scan range 只由一个执行实例处理。当机器资源比较充裕时，可以将增加该变量，让更多的执行实例同时处理一组 scan range，从而提升查询效率。")]),_._v(" "),v("p",[_._v("而 scan 实例的数量决定了上层其他执行节点，如聚合节点，join 节点的数量。因此相当于增加了整个查询计划执行的并发度。修改该参数会对大查询效率提升有帮助，但较大数值会消耗更多的机器资源，如CPU、内存、磁盘IO。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("query_cache_size")])]),_._v(" "),v("p",[_._v("用于兼容 MySQL 客户端。无实际作用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("query_cache_type")])]),_._v(" "),v("p",[_._v("用于兼容 JDBC 连接池 C3P0。 无实际作用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("query_timeout")])]),_._v(" "),v("p",[_._v("用于设置查询超时。该变量会作用于当前连接中所有的查询语句，以及 INSERT 语句。默认为 5 分钟，单位为秒。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("resource_group")])]),_._v(" "),v("p",[_._v("暂不使用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("sql_mode")])]),_._v(" "),v("p",[_._v("用于指定 SQL 模式，以适应某些 SQL 方言。关于 SQL 模式，可参阅 "),v("RouterLink",{attrs:{to:"/zh-CN/administrator-guide/sql-mode.html"}},[_._v("这里")]),_._v("。")],1)]),_._v(" "),v("li",[v("p",[v("code",[_._v("sql_safe_updates")])]),_._v(" "),v("p",[_._v("用于兼容 MySQL 客户端。无实际作用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("sql_select_limit")])]),_._v(" "),v("p",[_._v("用于兼容 MySQL 客户端。无实际作用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("system_time_zone")])]),_._v(" "),v("p",[_._v("显示当前系统时区。不可更改。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("time_zone")])]),_._v(" "),v("p",[_._v("用于设置当前会话的时区。时区会对某些时间函数的结果产生影响。关于时区，可以参阅 "),v("RouterLink",{attrs:{to:"/zh-CN/administrator-guide/time-zone.html"}},[_._v("这里")]),_._v("。")],1)]),_._v(" "),v("li",[v("p",[v("code",[_._v("tx_isolation")])]),_._v(" "),v("p",[_._v("用于兼容 MySQL 客户端。无实际作用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("version")])]),_._v(" "),v("p",[_._v("用于兼容 MySQL 客户端。无实际作用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("performance_schema")])]),_._v(" "),v("p",[_._v("用于兼容 8.0.16及以上版本的MySQL JDBC。无实际作用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("version_comment")])]),_._v(" "),v("p",[_._v("用于显示 Doris 的版本。不可更改。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("wait_timeout")])]),_._v(" "),v("p",[_._v("用于设置空闲连接的连接时长。当一个空闲连接在该时长内与 Doris 没有任何交互，则 Doris 会主动断开这个链接。默认为 8 小时，单位为秒。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("default_rowset_type")])]),_._v(" "),v("p",[_._v("用于设置计算节点存储引擎默认的存储格式。当前支持的存储格式包括：alpha/beta。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("use_v2_rollup")])]),_._v(" "),v("p",[_._v("用于控制查询使用segment v2存储格式的rollup索引获取数据。该变量用于上线segment v2的时候，进行验证使用；其他情况，不建议使用。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("rewrite_count_distinct_to_bitmap_hll")])]),_._v(" "),v("p",[_._v("是否将 bitmap 和 hll 类型的 count distinct 查询重写为 bitmap_union_count 和 hll_union_agg 。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("prefer_join_method")])]),_._v(" "),v("p",[_._v("在选择join的具体实现方式是broadcast join还是shuffle join时，如果broadcast join cost和shuffle join cost相等时，优先选择哪种join方式。")]),_._v(" "),v("p",[_._v('目前该变量的可选值为"broadcast" 或者 "shuffle"。')])]),_._v(" "),v("li",[v("p",[v("code",[_._v("allow_partition_column_nullable")])]),_._v(" "),v("p",[_._v("建表时是否允许分区列为NULL。默认为true，表示允许为NULL。false 表示分区列必须被定义为NOT NULL")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("insert_visible_timeout_ms")])]),_._v(" "),v("p",[_._v("在执行insert语句时，导入动作(查询和插入)完成后，还需要等待事务提交，使数据可见。此参数控制等待数据可见的超时时间，默认为10000，最小为1000。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("enable_exchange_node_parallel_merge")])]),_._v(" "),v("p",[_._v("在一个排序的查询之中，一个上层节点接收下层节点有序数据时，会在exchange node上进行对应的排序来保证最终的数据是有序的。但是单线程进行多路数据归并时，如果数据量过大，会导致exchange node的单点的归并瓶颈。")]),_._v(" "),v("p",[_._v("Doris在这部分进行了优化处理，如果下层的数据节点过多。exchange node会启动多线程进行并行归并来加速排序过程。该参数默认为False，即表示 exchange node 不采取并行的归并排序，来减少额外的CPU和内存消耗。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("extract_wide_range_expr")])]),_._v(" "),v("p",[_._v("用于控制是否开启 「宽泛公因式提取」的优化。取值有两种：true 和 false 。默认情况下开启。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("enable_fold_constant_by_be")])]),_._v(" "),v("p",[_._v("用于控制常量折叠的计算方式。默认是 "),v("code",[_._v("false")]),_._v("，即在 "),v("code",[_._v("FE")]),_._v(" 进行计算；若设置为 "),v("code",[_._v("true")]),_._v("，则通过 "),v("code",[_._v("RPC")]),_._v(" 请求经 "),v("code",[_._v("BE")]),_._v(" 计算。")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);