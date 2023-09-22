<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
              <pre>
$ cat hello.sh
echo Hello ${name}

$ name=Tom sh hello.sh
Hello Tom

$ cat template.txt
Hello ${name}

$ name=Tom envsubst &lt; template.txt
Hello Tom
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
  name: "Envsubst",
  components: {
    CodeContainer,
  },
};
</script>