<template>
  <main class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <img id="logo" src="~@/assets/logo.png" alt>
  
        <h1 class='title is-2'>Welcome to moja-note!</h1>
        <p>この環境でmoja-noteを起動するのは初めてのようです。</p>
        <p>{DBを設置したパス}にデータベースを作成しました。うっかり削除しないように。</p>
  
        <br>
  
        <router-link to="/main" class="button is-primary is-medium">Let's Start!</router-link>
      </div>
    </div>
  </main>
</template>

<script>

</script>

<style scoped>
</style>
