<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
              <pre>
image_name=javaweb
image_ver=3.0
whole_image=$image_name:$image_ver
container_name=web
work_dir=/root/demoproject

echo "delete container"
target_container=`docker ps -a | grep -w $container_name | awk '{print $NF}'`
if [ ! -z $target_container ]; then docker rm -f $target_container; fi

echo "delete image"
target_image=`docker images | grep "$image_name      $image_ver" | awk '{print $1":"$2}'`
if [ ! -z $target_image ]; then docker rmi $target_image; fi

echo "generate jar"
cd $work_dir
git pull
mvn clean package -Dmaven.test.skip=true

echo "generate image"
docker build -t $whole_image .

echo "start container"
docker run --name=$container_name -d -p 80:8080 $whole_image
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
  name: "Flow",
  components: {
    CodeContainer,
  },
};
</script>