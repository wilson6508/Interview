<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'下載檔案'">
          <template v-slot:sourceCode>
            <pre>
1. 在前台網頁，下載伺服器上的檔案。
2. 利用docker啟動nginx服務。
3. 透過docker volume，將container的nginx.conf掛載到物理機。
4. 透過docker volume，將物理機的檔案映射到container中。
              </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'Nginx'">
          <template v-slot:sourceCode>
            <pre>
# 啟動nginx服務 並設定具名掛載
docker run -d -p 8081:8081 -v v-nginx:/etc/nginx --name my_nginx nginx:latest
docker volume inspect v-nginx

# 產生一個要下載的測試檔案
mkdir -p   /var/lib/docker/volumes/v-nginx/_data/files/20241201
echo log > /var/lib/docker/volumes/v-nginx/_data/files/20241201/log.txt

# 編寫nginx.conf
vim        /var/lib/docker/volumes/v-nginx/_data/conf.d/download.conf

server {
    listen 8081;
    # 會去下載container裡 /etc/nginx/files資料夾下的檔案
    location /files/ {
        root /etc/nginx;
        add_header Content-Disposition attachment;
        add_header Content-Type application/octet-stream;
        sendfile on;
        autoindex on;
        autoindex_exact_size on;
        autoindex_localtime on;
        charset utf-8;
    }
}
              </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'測試'">
          <template v-slot:sourceCode>
            <pre>
docker restart my_nginx
http://192.168.X.X:8081/files/20241201/log.txt
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
  name: "Download",
  components: {
    CodeContainer,
    Footer
  },
};
</script>