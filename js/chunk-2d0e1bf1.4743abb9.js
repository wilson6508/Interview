(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1bf1"],{"7c6e":function(n,e,t){"use strict";t.r(e);var s=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("div",{staticClass:"row m-4"},[t("div",{staticClass:"col-md-8 col-12"},[t("CodeContainer",{attrs:{title:""},scopedSlots:n._u([{key:"sourceCode",fn:function(){return[t("pre",[n._v("客戶希望每周一早上，我們將產製的報表，傳送到他們的SFTP伺服器上面。\n不寫Shell Scripts，不使用Linux Server上的Cron Jobs，單純使用SpringBoot專案去達成。\n\n1. 引入jsch套件\n2. 利用@Scheduled排程\n3. 設定相關參數\n            ")])]},proxy:!0}])})],1)]),t("div",{staticClass:"row m-4"},[t("div",{staticClass:"col-md-8 col-12"},[t("CodeContainer",{attrs:{title:""},scopedSlots:n._u([{key:"sourceCode",fn:function(){return[t("pre",[n._v("dependencies {\n\timplementation 'com.jcraft:jsch:0.1.55'\n}\n            ")])]},proxy:!0}])})],1)]),t("div",{staticClass:"row m-4"},[t("div",{staticClass:"col-md-8 col-12"},[t("CodeContainer",{attrs:{title:""},scopedSlots:n._u([{key:"sourceCode",fn:function(){return[t("pre",[n._v('@Scheduled(cron = "00 00 06 ? * MON")\npublic void handleReport() { ... }\n            ')])]},proxy:!0}])})],1)]),t("div",{staticClass:"row m-4"},[t("div",{staticClass:"col-md-8 col-12"},[t("CodeContainer",{attrs:{title:""},scopedSlots:n._u([{key:"sourceCode",fn:function(){return[t("pre",[n._v('public static boolean transferFile(String host, String user, String password, int port,\n            String sourceFile, String targetFile) {\n    try {\n        JSch jsch = new JSch();\n        Session session = jsch.getSession(user, host, port);\n        session.setPassword(password);\n        session.setConfig("StrictHostKeyChecking", "no");\n        session.connect();\n        Channel channel = session.openChannel("sftp");\n        channel.connect();\n        ChannelSftp channelSftp = (ChannelSftp) channel;\n        channelSftp.put(sourceFile, targetFile, ChannelSftp.OVERWRITE);\n        channelSftp.exit();\n        session.disconnect();\n        return true;\n    } catch (JSchException | SftpException e) {\n        log.error("SftpUtils TransferFile Error: ", e);\n        return false;\n    }\n}\n            ')])]},proxy:!0}])})],1)])])},o=[],r=t("32f4"),c={name:"Jsch",components:{CodeContainer:r["a"]}},i=c,l=t("2877"),a=Object(l["a"])(i,s,o,!1,null,null,null);e["default"]=a.exports}}]);
//# sourceMappingURL=chunk-2d0e1bf1.4743abb9.js.map