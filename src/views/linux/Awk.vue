<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
vim text
Bob:16:160:60:aaaa
Amy:17:170:70:bbbb
Tom:18:180:80:cccc
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
$ awk -F ":" '{print $2}' text
16
17
18
-----------------------------------------------------------------------
$ awk -F ":" '{print $2 $3 $4}' text
1616060
1717070
1818080
-----------------------------------------------------------------------
$ awk -F ":" '{print $2, $3, $4}' text
16 160 60
17 170 70
18 180 80
-----------------------------------------------------------------------
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
awk [options] '/pattern/{action}' fileName
-F: 指定輸入文件分隔符
-----------------------------------------------------------------------
$ cat text | awk -F ":" '/Amy/{print $2}'
17
-----------------------------------------------------------------------
cat fileName | awk '/^$/{print NR}'
-----------------------------------------------------------------------
$ cat text | awk -F ":" '{print NF, $(NF-1)+1}'
5 61
5 71
5 81
-----------------------------------------------------------------------
-v: 賦值1個變量
p1="$1" p2="$2"
awk -v p1="$p1" -v p2="$p2" '{print p1 $var p2}' fileName
-----------------------------------------------------------------------
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
  name: "Awk",
  components: {
    CodeContainer,
  },
};
</script>