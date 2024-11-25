<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'用Redis保存一次性密碼'">
          <template v-slot:sourceCode>
            <pre>
1. 以手機號碼為key，一次性密碼為value，存入Redis服務器。
2. 接收使用者輸入的一次性密碼，並做比對。
3. 利用到期時間，自動刪除鍵值對。
            </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'存讀'">
          <template v-slot:sourceCode>
            <pre>
set key value ex 300
stringRedisTemplate.opsForValue().set("09XXXXXXXX", "123456", 5, TimeUnit.MINUTES);

get key
String cacheCode = stringRedisTemplate.opsForValue().get("09XXXXXXXX");
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
  name: "String",
  components: {
    CodeContainer,
    Footer
  },
};
</script>
