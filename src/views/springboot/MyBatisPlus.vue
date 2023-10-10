<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
.
├── Application.java
├── controller
│    └── TwTradeLogController.java
├── dao
│   └── TwTradeLogDao.java
├── entity
│   └── TwTradeLog.java
└── service
    ├── ITwTradeLogService.java
    └── impl
        └── TwTradeLogImpl.java
              </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
server:
  port: 8079
spring:
  main:
    banner-mode: off
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://127.0.0.1:3306/db_name?serverTimezone=Asia/Taipei
    username: root
    password: 1234
mybatis-plus:
  global-config:
    banner: false
  configuration:
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
    map-underscore-to-camel-case: true
              </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
@RestController
@RequestMapping("/twTradeLog")
public class TwTradeLogController {
    @Resource
    private ITwTradeLogService twTradeLogService;
    @GetMapping
    public List&lt;TwTradeLog&gt; getList() {
        return twTradeLogService.list();
    }
    @GetMapping("/{id}")
    public TwTradeLog getById(@PathVariable Integer id) {
        return twTradeLogService.getById(id);
    }
}
              </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
import cn.itcast.user.entity.TwTradeLog;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TwTradeLogDao extends BaseMapper&lt;TwTradeLog&gt; {}
              </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class TwTradeLog {
    @TableId(type = IdType.AUTO)
    private Integer id;
    private String tradeDate;
    private String stockId;
    private Integer quantity;
    private Integer payment;
}
              </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
import com.baomidou.mybatisplus.extension.service.IService;

public interface ITwTradeLogService extends IService&lt;TwTradeLog&gt; {}
              </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class TwTradeLogImpl extends ServiceImpl&lt;TwTradeLogDao, TwTradeLog&gt; implements ITwTradeLogService {}
              </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
  </div>
</template>

<script>
import CodeContainer from "@/components/shared/CodeContainer.vue";

export default {
  name: "MyBatisPlus",
  components: {
    CodeContainer,
  },
};
</script>
