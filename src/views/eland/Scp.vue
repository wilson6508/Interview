<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
客戶希望每周一早上，我們將產製的報表，傳送到他們的SFTP伺服器上面。
使用Linux Server 上的命令達成自動化(不手動輸入客戶伺服器的帳密)。

1. 自家的伺服器ssh-keygen產生公私鑰
2. 將產生的公鑰放到要連線的伺服器上
3. 設定crontab定時傳送檔案
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
ssh-keygen
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
ssh-copy-id 公鑰檔案 user@192.168.X.X
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
crontab -e
0 6 * * 1 ssh -i 私鑰檔案 user@192.168.X.X "cat /etc/hostname"
0 6 * * 1 scp -i 私鑰檔案 要傳送的檔案 user@192.168.X.X:/home/user/
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
  name: "Scp",
  components: {
    CodeContainer,
  },
};
</script>