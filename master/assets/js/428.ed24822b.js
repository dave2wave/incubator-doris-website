(window.webpackJsonp=window.webpackJsonp||[]).push([[428],{815:function(e,a,t){"use strict";t.r(a);var o=t(43),_=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"查询执行的统计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询执行的统计"}},[e._v("#")]),e._v(" 查询执行的统计")]),e._v(" "),t("p",[e._v("本文档主要介绍Doris在查询执行的统计结果。利用这些统计的信息，可以更好的帮助我们了解Doris的执行情况，并有针对性的进行相应"),t("strong",[e._v("Debug与调优工作")]),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"名词解释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[e._v("#")]),e._v(" 名词解释")]),e._v(" "),t("ul",[t("li",[e._v("FE：Frontend，Doris 的前端节点。负责元数据管理和请求接入。")]),e._v(" "),t("li",[e._v("BE：Backend，Doris 的后端节点。负责查询执行和数据存储。")]),e._v(" "),t("li",[e._v("Fragment：FE会将具体的SQL语句的执行转化为对应的Fragment并下发到BE进行执行。BE上执行对应Fragment，并将结果汇聚返回给FE。")])]),e._v(" "),t("h2",{attrs:{id:"基本原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本原理"}},[e._v("#")]),e._v(" 基本原理")]),e._v(" "),t("p",[e._v("FE将查询计划拆分成为Fragment下发到BE进行任务执行。BE在执行Fragment时记录了"),t("strong",[e._v("运行状态时的统计值")]),e._v("，并将Fragment执行的统计信息输出到日志之中。 FE也可以通过开关将各个Fragment记录的这些统计值进行搜集，并在FE的Web页面上打印结果。")]),e._v(" "),t("h2",{attrs:{id:"操作流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作流程"}},[e._v("#")]),e._v(" 操作流程")]),e._v(" "),t("p",[e._v("通过Mysql命令，将FE上的Report的开关打开")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mysql> set is_report_success=true; \n")])])]),t("p",[e._v("之后执行对应的SQL语句之后，在FE的Web页面就可以看到对应SQL语句执行的Report信息：\n"),t("img",{attrs:{src:e.$withBase("/images/running_profile.png"),alt:"image.png"}})]),e._v(" "),t("p",[e._v("这里会列出最新执行完成的"),t("strong",[e._v("100条语句")]),e._v("，我们可以通过Profile查看详细的统计信息。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Query:\n  Summary:\n    Query ID: 9664061c57e84404-85ae111b8ba7e83a\n    Start Time: 2020-05-02 10:34:57\n    End Time: 2020-05-02 10:35:08\n    Total: 10s323ms\n    Query Type: Query\n    Query State: EOF\n    Doris Version: trunk\n    User: root\n    Default Db: default_cluster:test\n    Sql Statement: select max(Bid_Price) from quotes group by Symbol\n")])])]),t("p",[e._v("这里详尽的列出了"),t("strong",[e._v("查询的ID，执行时间，执行语句")]),e._v("等等的总结信息。接下来内容是打印从BE收集到的各个Fragment的详细信息。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("   Fragment 0:\n     Instance 9664061c57e84404-85ae111b8ba7e83d (host=TNetworkAddress(hostname:192.168.0.1, port:9060)):(Active: 10s270ms, % non-child: 0.14%)\n        - MemoryLimit: 2.00 GB\n        - BytesReceived: 168.08 KB\n        - PeakUsedReservation: 0.00 \n        - SendersBlockedTimer: 0ns\n        - DeserializeRowBatchTimer: 501.975us\n        - PeakMemoryUsage: 577.04 KB\n        - RowsProduced: 8.322K (8322)\n       EXCHANGE_NODE (id=4):(Active: 10s256ms, % non-child: 99.35%)\n          - ConvertRowBatchTime: 180.171us\n          - PeakMemoryUsage: 0.00 \n          - RowsReturned: 8.322K (8322)\n          - MemoryUsed: 0.00 \n          - RowsReturnedRate: 811\n")])])]),t("p",[e._v("这里列出了Fragment的ID；"),t("code",[e._v("hostname")]),e._v("指的是执行Fragment的BE节点；"),t("code",[e._v("Active：10s270ms")]),e._v("表示该节点的执行总时间；"),t("code",[e._v("non-child: 0.14%")]),e._v("表示执行节点自身的执行时间，不包含子节点的执行时间。后续依次打印子节点的统计信息，"),t("strong",[e._v("这里可以通过缩进区分节点之间的父子关系")]),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"profile参数解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#profile参数解析"}},[e._v("#")]),e._v(" Profile参数解析")]),e._v(" "),t("p",[e._v("BE端收集的统计信息较多，下面列出了各个参数的对应含义：")]),e._v(" "),t("h4",{attrs:{id:"fragment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fragment"}},[e._v("#")]),e._v(" "),t("code",[e._v("Fragment")])]),e._v(" "),t("ul",[t("li",[e._v("AverageThreadTokens: 执行Fragment使用线程数目，不包含线程池的使用情况")]),e._v(" "),t("li",[e._v("Buffer Pool PeakReservation: Buffer Pool使用的内存的峰值")]),e._v(" "),t("li",[e._v("MemoryLimit: 查询时的内存限制")]),e._v(" "),t("li",[e._v("PeakMemoryUsage: 整个Instance在查询时内存使用的峰值")]),e._v(" "),t("li",[e._v("RowsProduced: 处理列的行数")])]),e._v(" "),t("h4",{attrs:{id:"blockmgr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blockmgr"}},[e._v("#")]),e._v(" "),t("code",[e._v("BlockMgr")])]),e._v(" "),t("ul",[t("li",[e._v("BlocksCreated: BlockMgr创建的Blocks数目")]),e._v(" "),t("li",[e._v("BlocksRecycled: 重用的Blocks数目")]),e._v(" "),t("li",[e._v("BytesWritten: 总的落盘写数据量")]),e._v(" "),t("li",[e._v("MaxBlockSize: 单个Block的大小")]),e._v(" "),t("li",[e._v("TotalReadBlockTime: 读Block的总耗时")])]),e._v(" "),t("h4",{attrs:{id:"datastreamsender"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#datastreamsender"}},[e._v("#")]),e._v(" "),t("code",[e._v("DataStreamSender")])]),e._v(" "),t("ul",[t("li",[e._v("BytesSent: 发送的总数据量 = 接受者 * 发送数据量")]),e._v(" "),t("li",[e._v("IgnoreRows: 过滤的行数")]),e._v(" "),t("li",[e._v("OverallThroughput: 总的吞吐量 = BytesSent / 时间")]),e._v(" "),t("li",[e._v("SerializeBatchTime: 发送数据序列化消耗的时间")]),e._v(" "),t("li",[e._v("UncompressedRowBatchSize: 发送数据压缩前的RowBatch的大小")])]),e._v(" "),t("h4",{attrs:{id:"exchange-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exchange-node"}},[e._v("#")]),e._v(" "),t("code",[e._v("EXCHANGE_NODE")])]),e._v(" "),t("ul",[t("li",[e._v("BytesReceived: 通过网络接收的数据量大小")]),e._v(" "),t("li",[e._v("DataArrivalWaitTime: 等待Sender发送数据的总时间")]),e._v(" "),t("li",[e._v("FirstBatchArrivalWaitTime: 等待第一个batch从Sender获取的时间")]),e._v(" "),t("li",[e._v("DeserializeRowBatchTimer: 反序列化网络数据的耗时")]),e._v(" "),t("li",[e._v("SendersBlockedTotalTimer(*): DataStreamRecv的队列的内存被打满，Sender端等待的耗时")]),e._v(" "),t("li",[e._v("ConvertRowBatchTime: 接收数据转为RowBatch的耗时")]),e._v(" "),t("li",[e._v("RowsReturned: 接收行的数目")]),e._v(" "),t("li",[e._v("RowsReturnedRate: 接收行的速率")])]),e._v(" "),t("h4",{attrs:{id:"sort-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sort-node"}},[e._v("#")]),e._v(" "),t("code",[e._v("SORT_NODE")])]),e._v(" "),t("ul",[t("li",[e._v("InMemorySortTime: 内存之中的排序耗时")]),e._v(" "),t("li",[e._v("InitialRunsCreated: 初始化排序的趟数（如果内存排序的话，该数为1）")]),e._v(" "),t("li",[e._v("SortDataSize: 总的排序数据量")]),e._v(" "),t("li",[e._v("MergeGetNext: MergeSort从多个sort_run获取下一个batch的耗时 (仅在落盘时计时）")]),e._v(" "),t("li",[e._v("MergeGetNextBatch: MergeSort提取下一个sort_run的batch的耗时 (仅在落盘时计时）")]),e._v(" "),t("li",[e._v("TotalMergesPerformed: 进行外排merge的次数")])]),e._v(" "),t("h4",{attrs:{id:"aggregation-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aggregation-node"}},[e._v("#")]),e._v(" "),t("code",[e._v("AGGREGATION_NODE")])]),e._v(" "),t("ul",[t("li",[e._v("PartitionsCreated: 聚合查询拆分成Partition的个数")]),e._v(" "),t("li",[e._v("GetResultsTime: 从各个partition之中获取聚合结果的时间")]),e._v(" "),t("li",[e._v("HTResizeTime:  HashTable进行resize消耗的时间")]),e._v(" "),t("li",[e._v("HTResize:  HashTable进行resize的次数")]),e._v(" "),t("li",[e._v("HashBuckets:  HashTable中Buckets的个数")]),e._v(" "),t("li",[e._v("HashBucketsWithDuplicate:  HashTable有DuplicateNode的Buckets的个数")]),e._v(" "),t("li",[e._v("HashCollisions:  HashTable产生哈希冲突的次数")]),e._v(" "),t("li",[e._v("HashDuplicateNodes:  HashTable出现Buckets相同DuplicateNode的个数")]),e._v(" "),t("li",[e._v("HashFailedProbe:  HashTable Probe操作失败的次数")]),e._v(" "),t("li",[e._v("HashFilledBuckets:  HashTable填入数据的Buckets数目")]),e._v(" "),t("li",[e._v("HashProbe:  HashTable查询的次数")]),e._v(" "),t("li",[e._v("HashTravelLength:  HashTable查询时移动的步数")])]),e._v(" "),t("h4",{attrs:{id:"olap-scan-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#olap-scan-node"}},[e._v("#")]),e._v(" "),t("code",[e._v("OLAP_SCAN_NODE")])]),e._v(" "),t("p",[t("code",[e._v("OLAP_SCAN_NODE")]),e._v(" 节点负责具体的数据扫描任务。一个 "),t("code",[e._v("OLAP_SCAN_NODE")]),e._v(" 会生成一个或多个 "),t("code",[e._v("OlapScanner")]),e._v(" 。每个 Scanner 线程负责扫描部分数据。")]),e._v(" "),t("p",[e._v("查询中的部分或全部谓词条件会推送给 "),t("code",[e._v("OLAP_SCAN_NODE")]),e._v("。这些谓词条件中一部分会继续下推给存储引擎，以便利用存储引擎的索引进行数据过滤。另一部分会保留在 "),t("code",[e._v("OLAP_SCAN_NODE")]),e._v(" 中，用于过滤从存储引擎中返回的数据。")]),e._v(" "),t("p",[t("code",[e._v("OLAP_SCAN_NODE")]),e._v(" 节点的 Profile 通常用于分析数据扫描的效率，依据调用关系分为 "),t("code",[e._v("OLAP_SCAN_NODE")]),e._v("、"),t("code",[e._v("OlapScanner")]),e._v("、"),t("code",[e._v("SegmentIterator")]),e._v(" 三层。")]),e._v(" "),t("p",[e._v("一个典型的 "),t("code",[e._v("OLAP_SCAN_NODE")]),e._v(" 节点的 Profile 如下。部分指标会因存储格式的不同（V1 或 V2）而有不同含义。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("OLAP_SCAN_NODE (id=0):(Active: 1.2ms, % non-child: 0.00%)\n  - BytesRead: 265.00 B                 # 从数据文件中读取到的数据量。假设读取到了是10个32位整型，则数据量为 10 * 4B = 40 Bytes。这个数据仅表示数据在内存中全展开的大小，并不代表实际的 IO 大小。 \n  - NumDiskAccess: 1                    # 该 ScanNode 节点涉及到的磁盘数量。\n  - NumScanners: 20                     # 该 ScanNode 生成的 Scanner 数量。\n  - PeakMemoryUsage: 0.00               # 查询时内存使用的峰值，暂未使用\n  - RowsRead: 7                         # 从存储引擎返回到 Scanner 的行数，不包括经 Scanner 过滤的行数。\n  - RowsReturned: 7                     # 从 ScanNode 返回给上层节点的行数。\n  - RowsReturnedRate: 6.979K /sec       # RowsReturned/ActiveTime\n  - TabletCount : 20                    # 该 ScanNode 涉及的 Tablet 数量。\n  - TotalReadThroughput: 74.70 KB/sec   # BytesRead除以该节点运行的总时间（从Open到Close），对于IO受限的查询，接近磁盘的总吞吐量。\n  OlapScanner:\n    - BlockConvertTime: 8.941us         # 将向量化Block转换为行结构的 RowBlock 的耗时。向量化 Block 在 V1 中为 VectorizedRowBatch，V2中为 RowBlockV2。\n    - BlockFetchTime: 468.974us         # Rowset Reader 获取 Block 的时间。\n    - ReaderInitTime: 5.475ms           # OlapScanner 初始化 Reader 的时间。V1 中包括组建 MergeHeap 的时间。V2 中包括生成各级 Iterator 并读取第一组Block的时间。\n    - RowsDelFiltered: 0                # 包括根据 Tablet 中存在的 Delete 信息过滤掉的行数，以及 unique key 模型下对被标记的删除行过滤的行数。\n    - RowsPushedCondFiltered: 0         # 根据传递下推的谓词过滤掉的条件，比如 Join 计算中从 BuildTable 传递给 ProbeTable 的条件。该数值不准确，因为如果过滤效果差，就不再过滤了。\n    - ScanTime: 39.24us                 # 从 ScanNode 返回给上层节点的行数。\n    - ShowHintsTime_V1: 0ns             # V2 中无意义。V1 中读取部分数据来进行 ScanRange 的切分。\n    SegmentIterator:\n      - BitmapIndexFilterTimer: 779ns   # 利用 bitmap 索引过滤数据的耗时。\n      - BlockLoadTime: 415.925us        # SegmentReader(V1) 或 SegmentIterator(V2) 获取 block 的时间。\n      - BlockSeekCount: 12              # 读取 Segment 时进行 block seek 的次数。\n      - BlockSeekTime: 222.556us        # 读取 Segment 时进行 block seek 的耗时。\n      - BlocksLoad: 6                   # 读取 Block 的数量\n      - CachedPagesNum: 30              # 仅 V2 中，当开启 PageCache 后，命中 Cache 的 Page 数量。\n      - CompressedBytesRead: 0.00       # V1 中，从文件中读取的解压前的数据大小。V2 中，读取到的没有命中 PageCache 的 Page 的压缩前的大小。\n      - DecompressorTimer: 0ns          # 数据解压耗时。\n      - IOTimer: 0ns                    # 实际从操作系统读取数据的 IO 时间。\n      - IndexLoadTime_V1: 0ns           # 仅 V1 中，读取 Index Stream 的耗时。\n      - NumSegmentFiltered: 0           # 在生成 Segment Iterator 时，通过列统计信息和查询条件，完全过滤掉的 Segment 数量。\n      - NumSegmentTotal: 6              # 查询涉及的所有 Segment 数量。\n      - RawRowsRead: 7                  # 存储引擎中读取的原始行数。详情见下文。\n      - RowsBitmapIndexFiltered: 0      # 仅 V2 中，通过 Bitmap 索引过滤掉的行数。\n      - RowsBloomFilterFiltered: 0      # 仅 V2 中，通过 BloomFilter 索引过滤掉的行数。\n      - RowsKeyRangeFiltered: 0         # 仅 V2 中，通过 SortkeyIndex 索引过滤掉的行数。\n      - RowsStatsFiltered: 0            # V2 中，通过 ZoneMap 索引过滤掉的行数，包含删除条件。V1 中还包含通过 BloomFilter 过滤掉的行数。\n      - RowsConditionsFiltered: 0       # 仅 V2 中，通过各种列索引过滤掉的行数。\n      - RowsVectorPredFiltered: 0       # 通过向量化条件过滤操作过滤掉的行数。\n      - TotalPagesNum: 30               # 仅 V2 中，读取的总 Page 数量。\n      - UncompressedBytesRead: 0.00     # V1 中为读取的数据文件解压后的大小（如果文件无需解压，则直接统计文件大小）。V2 中，仅统计未命中 PageCache 的 Page 解压后的大小（如果Page无需解压，直接统计Page大小）\n      - VectorPredEvalTime: 0ns         # 向量化条件过滤操作的耗时。\n")])])]),t("p",[e._v("通过 Profile 中数据行数相关指标可以推断谓词条件下推和索引使用情况。以下仅针对 Segment V2 格式数据读取流程中的 Profile 进行说明。Segment V1 格式中，这些指标的含义略有不同。")]),e._v(" "),t("ul",[t("li",[e._v("当读取一个 V2 格式的 Segment 时，若查询存在 key_ranges（前缀key组成的查询范围），首先通过 SortkeyIndex 索引过滤数据，过滤的行数记录在 "),t("code",[e._v("RowsKeyRangeFiltered")]),e._v("。")]),e._v(" "),t("li",[e._v("之后，对查询条件中含有 bitmap 索引的列，使用 Bitmap 索引进行精确过滤，过滤的行数记录在 "),t("code",[e._v("RowsBitmapIndexFiltered")]),e._v("。")]),e._v(" "),t("li",[e._v("之后，按查询条件中的等值（eq，in，is）条件，使用BloomFilter索引过滤数据，记录在 "),t("code",[e._v("RowsBloomFilterFiltered")]),e._v("。"),t("code",[e._v("RowsBloomFilterFiltered")]),e._v(" 的值是 Segment 的总行数（而不是Bitmap索引过滤后的行数）和经过 BloomFilter 过滤后剩余行数的差值，因此 BloomFilter 过滤的数据可能会和 Bitmap 过滤的数据有重叠。")]),e._v(" "),t("li",[e._v("之后，按查询条件和删除条件，使用 ZoneMap 索引过滤数据，记录在 "),t("code",[e._v("RowsStatsFiltered")]),e._v("。")]),e._v(" "),t("li",[t("code",[e._v("RowsConditionsFiltered")]),e._v(" 是各种索引过滤的行数，包含了 "),t("code",[e._v("RowsBloomFilterFiltered")]),e._v(" 和 "),t("code",[e._v("RowsStatsFiltered")]),e._v(" 的值。")]),e._v(" "),t("li",[e._v("至此 Init 阶段完成，Next 阶段删除条件过滤的行数，记录在 "),t("code",[e._v("RowsDelFiltered")]),e._v("。因此删除条件实际过滤的行数，分别记录在 "),t("code",[e._v("RowsStatsFiltered")]),e._v(" 和 "),t("code",[e._v("RowsDelFiltered")]),e._v(" 中。")]),e._v(" "),t("li",[t("code",[e._v("RawRowsRead")]),e._v(" 是经过上述过滤后，最终需要读取的行数。")]),e._v(" "),t("li",[t("code",[e._v("RowsRead")]),e._v(" 是最终返回给 Scanner 的行数。"),t("code",[e._v("RowsRead")]),e._v(" 通常小于 "),t("code",[e._v("RawRowsRead")]),e._v("，是因为从存储引擎返回到 Scanner，可能会经过一次数据聚合。如果 "),t("code",[e._v("RawRowsRead")]),e._v(" 和 "),t("code",[e._v("RowsRead")]),e._v(" 差距较大，则说明大量的行被聚合，而聚合可能比较耗时。")]),e._v(" "),t("li",[t("code",[e._v("RowsReturned")]),e._v(" 是 ScanNode 最终返回给上层节点的行数。"),t("code",[e._v("RowsReturned")]),e._v(" 通常也会小于"),t("code",[e._v("RowsRead")]),e._v("。因为在 Scanner 上会有一些没有下推给存储引擎的谓词条件，会进行一次过滤。如果 "),t("code",[e._v("RowsRead")]),e._v(" 和 "),t("code",[e._v("RowsReturned")]),e._v(" 差距较大，则说明很多行在 Scanner 中进行了过滤。这说明很多选择度高的谓词条件并没有推送给存储引擎。而在 Scanner 中的过滤效率会比在存储引擎中过滤效率差。")])]),e._v(" "),t("p",[e._v("通过以上指标，可以大致分析出存储引擎处理的行数以及最终过滤后的结果行数大小。通过 "),t("code",[e._v("Rows***Filtered")]),e._v(" 这组指标，也可以分析查询条件是否下推到了存储引擎，以及不同索引的过滤效果。此外还可以通过以下几个方面进行简单的分析。")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("OlapScanner")]),e._v(" 下的很多指标，如 "),t("code",[e._v("IOTimer")]),e._v("，"),t("code",[e._v("BlockFetchTime")]),e._v(" 等都是所有 Scanner 线程指标的累加，因此数值可能会比较大。并且因为 Scanner 线程是异步读取数据的，所以这些累加指标只能反映 Scanner 累加的工作时间，并不直接代表 ScanNode 的耗时。ScanNode 在整个查询计划中的耗时占比为 "),t("code",[e._v("Active")]),e._v(" 字段记录的值。有时会出现比如 "),t("code",[e._v("IOTimer")]),e._v(" 有几十秒，而 "),t("code",[e._v("Active")]),e._v(" 实际只有几秒钟。这种情况通常因为：\n"),t("ul",[t("li",[t("code",[e._v("IOTimer")]),e._v(" 为多个 Scanner 的累加时间，而 Scanner 数量较多。")]),e._v(" "),t("li",[e._v("上层节点比较耗时。比如上层节点耗时 100秒，而底层 ScanNode 只需 10秒。则反映在 "),t("code",[e._v("Active")]),e._v(" 的字段可能只有几毫秒。因为在上层处理数据的同时，ScanNode 已经异步的进行了数据扫描并准备好了数据。当上层节点从 ScanNode 获取数据时，可以获取到已经准备好的数据，因此 Active 时间很短。")])])]),e._v(" "),t("li",[t("code",[e._v("NumScanners")]),e._v(" 表示 Scanner 提交到线程池的Task个数，由 "),t("code",[e._v("RuntimeState")]),e._v(" 中的线程池调度，"),t("code",[e._v("doris_scanner_thread_pool_thread_num")]),e._v(" 和 "),t("code",[e._v("doris_scanner_thread_pool_queue_size")]),e._v(" 两个参数分别控制线程池的大小和队列长度。线程数过多或过少都会影响查询效率。同时可以用一些汇总指标除以线程数来大致的估算每个线程的耗时。")]),e._v(" "),t("li",[t("code",[e._v("TabletCount")]),e._v(" 表示需要扫描的 tablet 数量。数量过多可能意味着需要大量的随机读取和数据合并操作。")]),e._v(" "),t("li",[t("code",[e._v("UncompressedBytesRead")]),e._v(" 间接反映了读取的数据量。如果该数值较大，说明可能有大量的 IO 操作。")]),e._v(" "),t("li",[t("code",[e._v("CachedPagesNum")]),e._v(" 和 "),t("code",[e._v("TotalPagesNum")]),e._v(" 可以查看命中 PageCache 的情况。命中率越高，说明 IO 和解压操作耗时越少。")])]),e._v(" "),t("h4",{attrs:{id:"buffer-pool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#buffer-pool"}},[e._v("#")]),e._v(" "),t("code",[e._v("Buffer pool")])]),e._v(" "),t("ul",[t("li",[e._v("AllocTime: 内存分配耗时")]),e._v(" "),t("li",[e._v("CumulativeAllocationBytes: 累计内存分配的量")]),e._v(" "),t("li",[e._v("CumulativeAllocations: 累计的内存分配次数")]),e._v(" "),t("li",[e._v("PeakReservation: Reservation的峰值")]),e._v(" "),t("li",[e._v("PeakUnpinnedBytes: unpin的内存数据量")]),e._v(" "),t("li",[e._v("PeakUsedReservation: Reservation的内存使用量")]),e._v(" "),t("li",[e._v("ReservationLimit: BufferPool的Reservation的限制量")])])])}),[],!1,null,null,null);a.default=_.exports}}]);