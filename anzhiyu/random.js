var posts=["2024/01/01/Java-ArrayList/","2023/12/27/Java-Object/","2023/12/29/Java-String/","2023/12/26/HarmonyOS 开发/","2023/12/27/MySQL 数据库/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };