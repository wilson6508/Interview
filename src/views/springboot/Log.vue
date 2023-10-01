<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'default'">
          <template v-slot:sourceCode>
            <pre>
project:
  location: "D:/test"

logging:
  level:
    root: info
  pattern:
    dateformat: yyyy-MM-dd HH:mm:ss
  file:
    name: "${project.location}/logs/Log"
  logback:
    rollingpolicy:
      file-name-pattern: "${LOG_FILE}_%d{yyyyMMdd}_%i.txt"
      max-file-size: 10MB
      total-size-cap: 300MB
      max-history: 7
              </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'log4j2'">
          <template v-slot:sourceCode>
            <pre>
resources/log4j2-spring.xml

&lt;dependency&gt;
  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot-starter&lt;/artifactId&gt;
  &lt;exclusions&gt;
    &lt;exclusion&gt;
      &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
      &lt;artifactId&gt;spring-boot-starter-logging&lt;/artifactId&gt;
    &lt;/exclusion&gt;
  &lt;/exclusions&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot-starter-log4j2&lt;/artifactId&gt;
&lt;/dependency&gt;
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
  name: "Log",
  components: {
    CodeContainer,
  },
};
</script>