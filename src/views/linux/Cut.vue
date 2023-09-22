<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
vim text
Bob:16:160:60:aaaa
Amy:17:170:70:bbbb
Tom:18:180:80:cccc
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
$ cat text | cut -d ":" -f 1-4
Bob:16:160:60
Amy:17:170:70
Tom:18:180:80
---------------------------------------------------
$ cat text | cut -d ":" -f 2-
16:160:60:aaaa
17:170:70:bbbb
18:180:80:cccc
---------------------------------------------------
$ cat text | cut -d ":" -f -4
Bob:16:160:60
Amy:17:170:70
Tom:18:180:80
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
$ cut -d ":" -f 2 text
16
17
18
---------------------------------------------------
$ cut -d ":" -f 2,3,4 text
16:160:60
17:170:70
18:180:80
---------------------------------------------------
# grep 相當於提取列
$ cat text | grep Amy | cut -d ":" -f 2
17
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
  name: "Cut",
  components: {
    CodeContainer,
  },
};
</script>