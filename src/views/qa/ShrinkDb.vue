<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'資料庫瘦身'">
          <template v-slot:sourceCode>
            <pre>
1張資料表要輸出3個檔案

(1) 留存檔案: 繼續保留在線上資料庫的檔案
(2) 歸檔檔案: 要進入歷史資料庫的檔案
(3) 全檔備份: 避免瘦身過程發生突發狀況
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
-- 保留在線上資料庫的
SELECT *
INTO OUTFILE '/var/lib/mysql-files/tb_online.csv'
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
FROM tb_online
WHERE id > 10;

-- 進到歷史資料庫的
SELECT *
INTO OUTFILE '/var/lib/mysql-files/tb_online_bk.csv'
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
FROM tb_online
WHERE NOT (id > 10);

-- 確認筆數
select count(*) from tb_online;
wc -l &lt; tb_online.csv
wc -l &lt; tb_online_bk.csv
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
-- 寫入歷史資料庫
LOAD DATA INFILE '/var/lib/mysql-files/tb_online_bk.csv'
INTO TABLE tb_online_bk
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n';

-- 清空線上的資料表
truncate table tb_online;

-- 寫回線上資料庫
LOAD DATA INFILE '/var/lib/mysql-files/tb_online.csv'
INTO TABLE tb_online
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n';
            </pre>
          </template>
        </CodeContainer>
      </div>
      <div>
        <button type="button" class="btn btn-danger" @click="openFile('mysql','ShrinkDb.txt')">補充文字</button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import CodeContainer from "@/components/shared/CodeContainer.vue";
import Footer from "@/components/shared/Footer.vue";

export default {
  name: "ShrinkDb",
  components: {
    CodeContainer,
    Footer
  },
  methods: {
    openFile(dirName, fileName) {
      const baseUrl = process.env.BASE_URL;
      window.open(`${baseUrl}${dirName}/${fileName}`, '_blank');
    }
  },
};
</script>
