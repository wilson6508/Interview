<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'經歷'">
          <template v-slot:sourceCode>
            <pre>
TEL [2018/10 - 2020/02]

              </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'學歷'">
          <template v-slot:sourceCode>
            <pre>
NCTU [2014/09 - 2017/02]
              </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'證照'">
          <template v-slot:sourceCode>
            <pre>
1234
              </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'說明'">
          <template v-slot:sourceCode>
            <pre>
5678
              </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import CodeContainer from "@/components/shared/CodeContainer.vue";
import Footer from "@/components/shared/Footer.vue";

export default {
  name: "Self",
  components: {
    CodeContainer,
    Footer
  },
};
</script>