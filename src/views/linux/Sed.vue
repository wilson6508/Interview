<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
              <pre>
-i: 直接修改文件内容
$ sed -i '$ a # This is a test' testfile
------------------------------------------------------------------
-e: 以指定的script來處理輸入的文件
s: substitution operation
g: globally

$ echo "develop/v1.0" | sed -e 's/d/D/g'
Develop/v1.0
$ echo "develop/v1.0" | sed -e 's/\//-/g'
develop-v1.0
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
$ cat testfile
HELLO LINUX!
Linux is a free unix-type opterating system.
This is a linux testfile!
Linux test
Google
Taobao
Runoob
Tesetfile
Wiki
------------------------------------------------------------------
-n: 只顯示script處理後的結果
$ nl testfile | sed -e '4 a newline'
     1  HELLO LINUX!
     2  Linux is a free unix-type opterating system.
     3  This is a linux testfile!
     4  Linux test
newline
     5  Google
     6  Taobao
     7  Runoob
     8  Tesetfile
     9  Wiki

$  nl testfile | sed -e '2,5 d'
     1  HELLO LINUX!
     6  Taobao
     7  Runoob
     8  Tesetfile
     9  Wiki

$ nl testfile | sed -e '3,$d'
     1  HELLO LINUX!
     2  Linux is a free unix-type opterating system.

$ nl testfile | sed -n '/oo/p'
     5  Google
     7  Runoob

$ nl testfile | sed  -e '/oo/d'
     1  HELLO LINUX!
     2  Linux is a free unix-type opterating system.
     3  This is a linux testfile!
     4  Linux test
     6  Taobao
     8  Tesetfile
     9  Wiki

$ nl testfile | sed -n '/oo/{s/oo/kk/p}'
     5  Gkkgle
     7  Runkkb

$ nl testfile | sed -n '/oo/{s/oo/kk/p;q}'
     5  Gkkgle
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
  name: "Sed",
  components: {
    CodeContainer,
  },
};
</script>