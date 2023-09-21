<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
docker compose version
docker compose config
docker compose pull

docker compose up -d
docker compose ps
docker-compose down

docker compose start web
docker compose exec web bash
docker compose logs web
docker compose stop web
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
└── user
    ├── docker-compose.yml
    └── java_test
        ├── Dockerfile
        └── HelloWorld-1.0.jar
                </pre>
          </template>
        </CodeContainer>
      </div>
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
version: '3'

services:
  my_java:
    build: ./java_test
    ports:
      - "8081:8080"
  my_nginx:
    image: nginx:1.18
    volumes:
      - etc_nginx:/etc/nginx
    ports:
      - "80:80"
      - "81:81"
    depends_on:
      - my_java

volumes:
  etc_nginx:
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
  name: "Compose",
  components: {
    CodeContainer,
  },
};
</script>
