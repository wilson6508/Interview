<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
            <pre>
echo $?
= != -eq -ne -lt -le -gt -ge
[ $a = hello ]
[ $a != hello ]
[ 2 -eq 8 ]
[ 2 -ne 8 ]
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
[ -r fileName ] # read
[ -w fileName ] # write
[ -x fileName ] # execute
[ -e fileName ] # existence
[ -f fileName ] # file
[ -d fileName ] # directory

test -f abc.txt
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
str=hello

0
[ abc ]
[ ! -z $str ]
test $str = hello

1
[ ]
[ -z $str ]
test $str = hello123
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
  name: "ConExp",
  components: {
    CodeContainer,
  },
};
</script>