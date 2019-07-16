<template>
  <div>
    <img id="logo" src="~@/assets/logo.png" alt>
      
    <h1>Welcome to moja-note!</h1>
    <p>この環境でmoja-noteを起動するのは初めてのようです。</p>
    <p>{DBを設置したパス}にデータベースを作成しました。うっかり削除しないように。</p>
      
    <br>
      
    <router-link to="/main">
      <el-button type="success">Let's Start!</el-button>
    </router-link>
  </div>
</template>

<script>

</script>

<style scoped>
</style>
