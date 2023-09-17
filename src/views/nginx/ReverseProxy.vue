<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
http {

    ip_hash;
    least_conn;

    upstream targetserver {
        server 10.10.10.99:9001 weight=2;
        server 10.10.10.99:9002 weight=1;
    }

    server {
        listen 82;
        server_name localhost;
        location / {
            proxy_pass http://targetserver;
        }
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
  name: "ReverseProxy",
  components: {
    CodeContainer,
  },
};
</script>
  