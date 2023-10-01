<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="''">
          <template v-slot:sourceCode>
              <pre>
deploy-job:
  stage: deploy
  script:
    - echo "Deploy Job"
  rules:
    - if: $CI_COMMIT_BRANCH =~ /^(main|develop)$/
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
stages:
  - test
  - deploy

test-job:
  stage: test
  script:
    - echo "Test Job"

deploy-job:
  stage: deploy
  script:
    - echo "Deploy Job"
  rules:
    - if: $CI_COMMIT_BRANCH =~ /^(main)$/
      when: manual
    - if: $CI_COMMIT_BRANCH =~ /^(develop)$/
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
  name: "Rules",
  components: {
    CodeContainer,
  },
};
</script>