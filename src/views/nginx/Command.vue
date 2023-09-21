<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
cd /usr/local/nginx/sbin

# 查看版本
./nginx -v

# 檢查conf/nginx.conf文件配置
./nginx -t

# 啟動
./nginx

# 重新加載配置
./nginx -s reload

# 快速停止
./nginx -s stop

# 退出前完成已經接受的請求
./nginx -s quit
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
  name: "Command",
  components: {
    CodeContainer,
  },
};
</script>