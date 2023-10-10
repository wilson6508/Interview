<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
.
├── Application.java
├── dao
│   └── BookDao.java
└── entity
    └── Book.java
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
&lt;dependency&gt;
	&lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;
	&lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;
	&lt;version&gt;2.3.0&lt;/version&gt;
&lt;/dependency&gt;
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
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface BookDao {
    @Select("select * from book where id = #{id}")
    Book getById(Integer id);
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
@Data
public class Book {
    private Integer id;
    private String type;
    private String name;
    private String description;
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
This annotation @Select
specifies the SQL query that should be executed when this method is called.

MyBatis uses a dynamic proxy to generate an implementation for the BookDao interface.
This generated implementation will include the logic to
execute the SQL query defined in the @Select annotation when you call the getById method.
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
  name: "MyBatis",
  components: {
    CodeContainer,
  },
};
</script>
