<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
.
├── docker-compose.override.yml
└── docker-compose.yml
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
$ cat docker-compose.yml
version: '3'

services:
  my_nginx:
    image: nginx:1.18
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
$ cat docker-compose.override.yml
services:
  my_nginx:
    ports:
      - "8080:80"
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
$ docker compose config
name: only
services:
  my_nginx:
    image: nginx:1.18
    networks:
      default: null
    ports:
    - mode: ingress
      target: 80
      published: "8080"
      protocol: tcp
networks:
  default:
    name: only_default
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
  name: "Override1",
  components: {
    CodeContainer,
  },
};
</script>
