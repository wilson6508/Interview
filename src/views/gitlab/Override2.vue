<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
.
├── dev
│   └── docker-compose.override.yml
├── main
│   └── docker-compose.override.yml
├── docker-compose.yml
└── test.sh
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
$ cat dev/docker-compose.override.yml
services:
  my_nginx:
    ports:
      - "8080:80"

$ cat main/docker-compose.override.yml
services:
  my_nginx:
    ports:
      - "80:80"
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
# cat test.sh

#!/bin/bash
cp ./$1/docker-compose.override.yml .
docker compose up -d

sh test.sh dev
sh test.sh main
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
  name: "Override2",
  components: {
    CodeContainer,
  },
};
</script>
