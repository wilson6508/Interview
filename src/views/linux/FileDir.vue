<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'cp'">
          <template v-slot:sourceCode>
            <pre>
cp [-r] source dest

cp abc.txt dirName/
cp -r dirName/ otherDirName/
cp -r dirName/* otherDirName/

有則覆蓋 無則創建
cp 123.txt 456.txt
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
  name: "FileDir",
  components: {
    CodeContainer,
  },
};
</script>