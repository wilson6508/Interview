<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
客戶希望每周一早上，我們將產製的報表，傳送到他們的SFTP伺服器上面。
不寫Shell Scripts，不使用Linux Server上的Cron Jobs，單純使用SpringBoot專案去達成。

1. 引入jsch套件
2. 利用@Scheduled排程
3. 設定相關參數
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
dependencies {
	implementation 'com.jcraft:jsch:0.1.55'
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
@Scheduled(cron = "00 00 06 ? * MON")
public void handleReport() { ... }
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
public static boolean transferFile(String host, String user, String password, int port,
            String sourceFile, String targetFile) {
    try {
        JSch jsch = new JSch();
        Session session = jsch.getSession(user, host, port);
        session.setPassword(password);
        session.setConfig("StrictHostKeyChecking", "no");
        session.connect();
        Channel channel = session.openChannel("sftp");
        channel.connect();
        ChannelSftp channelSftp = (ChannelSftp) channel;
        channelSftp.put(sourceFile, targetFile, ChannelSftp.OVERWRITE);
        channelSftp.exit();
        session.disconnect();
        return true;
    } catch (JSchException | SftpException e) {
        log.error("SftpUtils TransferFile Error: ", e);
        return false;
    }
}
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
  name: "Jsch",
  components: {
    CodeContainer,
  },
};
</script>