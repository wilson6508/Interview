<template>
    <div>
      <div class="row m-4">
        <div class="col-md-8 col-12">
          <CodeContainer :title="''">
            <template v-slot:sourceCode>
              <pre>
# 安裝ssh-agent指令
command -v ssh-agent >/dev/null || ( apt-get update -y && apt-get install openssh-client -y )

# 啟動SSH代理: 不需要每次都手動輸入密碼或金鑰
eval $(ssh-agent -s)

# 把私鑰加到ssh-agent
cat 私鑰檔案 | tr -d '\r' | ssh-add -

# 把要連線機器的指紋放到known_hosts
ssh-keyscan 10.10.10.99 >> ~/.ssh/known_hosts # 寫入一次即可

# 下指令
ssh user@10.10.10.99 "cat /etc/hostname"
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
    name: "SshAgent.vue",
    components: {
      CodeContainer,
    },
  };
  </script>