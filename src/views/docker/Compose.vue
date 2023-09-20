<template>
    <div>
      <div class="row m-4">
        <div class="col-md-8 col-12">
          <CodeContainer :title="''">
            <template v-slot:sourceCode>
              <pre>
version: "3"

java_api:
    image: ./java_test
    ports:
        - "8081:8080"
my_nginx:
    image: nginx:1.18
    volume: nginx_etc:/etc/nginx
    ports:
        - "80:80"
        - "81:81"
    depent_on:
        java_api
volumes:
    nginx_etc:
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
    name: "Compose.vue",
    components: {
      CodeContainer,
    },
  };
  </script>