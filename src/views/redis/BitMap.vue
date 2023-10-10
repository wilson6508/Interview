<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
help setbit

setbit bm1 0 1
setbit bm1 1 1
setbit bm1 2 1
setbit bm1 5 1
setbit bm1 6 1
setbit bm1 7 1

11100111

# 1
getbit bm1 2

# 計算數值為1的數量
# 6
bitcount bm1

# 從0開始 取2個bit (返回10進位)
# 3
bitfield bm1 get u2 0
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
LocalDateTime now = LocalDateTime.now();
String suffix = now.format(DateTimeFormatter.ofPattern(":yyyyMM"));
String key = "sign:5" + suffix;
int offset = now.getDayOfMonth() - 1;
stringRedisTemplate.opsForValue().setBit(key, offset, true);
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
int nums;     // 查幾位
int startIdx; // 從哪開始查
List&lt;Long&gt; result = stringRedisTemplate.opsForValue()
              .bitField(key, BitFieldSubCommands.create()
                .get(BitFieldSubCommands.BitFieldType.unsigned(nums))
                .valueAt(startIdx)
              );

Long val = result.get(0);
String binaryStr = Long.toBinaryString(val); // 十進位轉二進位
boolean check = (val & 1) == 0
val >>>= 1;
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
  name: "BitMap",
  components: {
    CodeContainer,
  },
};
</script>
