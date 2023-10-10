(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8c81"],{"8b78":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"row m-4"},[n("div",{staticClass:"col-md-8 col-12"},[n("CodeContainer",{attrs:{title:""},scopedSlots:e._u([{key:"sourceCode",fn:function(){return[n("pre",[e._v(".\n├── Application.java\n├── controller\n│    └── TwTradeLogController.java\n├── dao\n│   └── TwTradeLogDao.java\n├── entity\n│   └── TwTradeLog.java\n└── service\n    ├── ITwTradeLogService.java\n    └── impl\n        └── TwTradeLogImpl.java\n              ")])]},proxy:!0}])})],1)]),n("div",{staticClass:"row m-4"},[n("div",{staticClass:"col-md-8 col-12"},[n("CodeContainer",{attrs:{title:""},scopedSlots:e._u([{key:"sourceCode",fn:function(){return[n("pre",[e._v("server:\n  port: 8079\nspring:\n  main:\n    banner-mode: off\n  datasource:\n    driver-class-name: com.mysql.cj.jdbc.Driver\n    url: jdbc:mysql://127.0.0.1:3306/db_name?serverTimezone=Asia/Taipei\n    username: root\n    password: 1234\nmybatis-plus:\n  global-config:\n    banner: false\n  configuration:\n    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl\n    map-underscore-to-camel-case: true\n              ")])]},proxy:!0}])})],1)]),n("div",{staticClass:"row m-4"},[n("div",{staticClass:"col-md-8 col-12"},[n("CodeContainer",{attrs:{title:""},scopedSlots:e._u([{key:"sourceCode",fn:function(){return[n("pre",[e._v('@RestController\n@RequestMapping("/twTradeLog")\npublic class TwTradeLogController {\n    @Resource\n    private ITwTradeLogService twTradeLogService;\n    @GetMapping\n    public List<TwTradeLog> getList() {\n        return twTradeLogService.list();\n    }\n    @GetMapping("/{id}")\n    public TwTradeLog getById(@PathVariable Integer id) {\n        return twTradeLogService.getById(id);\n    }\n}\n              ')])]},proxy:!0}])})],1)]),n("div",{staticClass:"row m-4"},[n("div",{staticClass:"col-md-8 col-12"},[n("CodeContainer",{attrs:{title:""},scopedSlots:e._u([{key:"sourceCode",fn:function(){return[n("pre",[e._v("import cn.itcast.user.entity.TwTradeLog;\nimport com.baomidou.mybatisplus.core.mapper.BaseMapper;\nimport org.apache.ibatis.annotations.Mapper;\n\n@Mapper\npublic interface TwTradeLogDao extends BaseMapper<TwTradeLog> {}\n              ")])]},proxy:!0}])})],1)]),n("div",{staticClass:"row m-4"},[n("div",{staticClass:"col-md-8 col-12"},[n("CodeContainer",{attrs:{title:""},scopedSlots:e._u([{key:"sourceCode",fn:function(){return[n("pre",[e._v("import com.baomidou.mybatisplus.annotation.IdType;\nimport com.baomidou.mybatisplus.annotation.TableId;\nimport lombok.Data;\n\n@Data\npublic class TwTradeLog {\n    @TableId(type = IdType.AUTO)\n    private Integer id;\n    private String tradeDate;\n    private String stockId;\n    private Integer quantity;\n    private Integer payment;\n}\n              ")])]},proxy:!0}])})],1)]),n("div",{staticClass:"row m-4"},[n("div",{staticClass:"col-md-8 col-12"},[n("CodeContainer",{attrs:{title:""},scopedSlots:e._u([{key:"sourceCode",fn:function(){return[n("pre",[e._v("import com.baomidou.mybatisplus.extension.service.IService;\n\npublic interface ITwTradeLogService extends IService<TwTradeLog> {}\n              ")])]},proxy:!0}])})],1)]),n("div",{staticClass:"row m-4"},[n("div",{staticClass:"col-md-8 col-12"},[n("CodeContainer",{attrs:{title:""},scopedSlots:e._u([{key:"sourceCode",fn:function(){return[n("pre",[e._v("import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;\nimport org.springframework.stereotype.Service;\n\n@Service\npublic class TwTradeLogImpl extends ServiceImpl<TwTradeLogDao, TwTradeLog> implements ITwTradeLogService {}\n              ")])]},proxy:!0}])})],1)])])},r=[],a=n("32f4"),i={name:"MyBatisPlus",components:{CodeContainer:a["a"]}},s=i,c=n("2877"),d=Object(c["a"])(s,o,r,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0e8c81.b48c44d5.js.map