var posts=["2023/12/26/HarmonyOS 开发/","2023/12/26/MySQL 数据库/","2023/12/27/Java-code/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };