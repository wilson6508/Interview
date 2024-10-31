<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'簡易自動化部署'">
          <template v-slot:sourceCode>
            <pre>
本機
1. 在SpringBoot框架下，進行程式開發。
2. 利用Git Hooks在程式碼後提交後，自動執行指定的腳本。
3. 自動打包，傳送jar檔。

伺服器
1. 重啟服務。
            </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'post-commit'">
          <template v-slot:sourceCode>
            <pre>
#!/bin/bash

base_dir="/d/my_project/HelloJava"
key_path="$base_dir/.git/hooks/enter_key"
jar_path="$base_dir/target/demo-0.0.1-SNAPSHOT.jar"

server_info="user@192.168.X.X"
target_dir="/home/user/java_project"

# 在本機打包
mvn clean package

# 傳送jar檔到指定伺服器
scp -i "$key_path" "$jar_path" "$server_info:$target_dir"

# 執行伺服器上的腳本
ssh -i "$key_path" "$server_info" "cd $target_dir; ./deployment.sh"
            </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'deployment.sh'">
          <template v-slot:sourceCode>
            <pre>
#!/bin/bash

app_name="my_test"
image_ver="1.0"
port=8081

# 刪掉原本的container
check_docker_ps=$(docker ps | grep "$app_name" | wc -l)
if [ "$check_docker_ps" = 1 ]; then
    docker rm -f "$app_name"
fi

# 刪掉原本的image
check_docker_images=$(docker images | grep "$app_name" | wc -l)
if [ "$check_docker_images" = 1 ]; then
    docker rmi "$app_name:$image_ver"
fi

# 製作新的image
docker build -t "$app_name:$image_ver" .

# 執行新的container
docker run -d -p "$port:$port" --name "$app_name" "$app_name:$image_ver"

# 刪掉原本的jar
if [ -f ./demo-0.0.1-SNAPSHOT.jar ]; then
    rm -f ./demo-0.0.1-SNAPSHOT.jar
fi
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
  name: "Deployment",
  components: {
    CodeContainer,
    Footer
  },
};
</script>