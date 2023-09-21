<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
FROM
WORKDIR: 預設是根目錄(/)
ENV: 參數(run時 --> 用 -e key=value 覆蓋)
ARG: 參數(build時 --> 用 --build-arg key=value 覆蓋)
RUN
COPY
ADD: COPY文件 會自動解壓
VOLUME
EXPOSE: 容器運行的端口
CMD: 容器啟動要執行的命令 可被替換
ENTRYPOINT: 容器啟動要執行的命令 可被追加
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
ARG VERSION=1.24
FROM nginx:$VERSION

COPY abc.txt /usr/share/nginx/html
RUN echo test >> /usr/share/nginx/html/abc.txt
VOLUME ["/usr/share/nginx/html"]

docker build -f dockerfile_name -t image_name:ver .
docker build --build-arg VERSION=1.25 -t test:1.0 .
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
  name: "Dockerfile",
  components: {
    CodeContainer,
  },
};
</script>
