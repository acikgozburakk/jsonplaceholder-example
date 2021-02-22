<template>
  <nav>
    <div class="container">
      <router-link to="/" tag="a" class="logo">
        <img src="./../../assets/images/logo-sticky.svg" alt="instagram-logo" />
      </router-link>

      <router-link to="/" tag="a" class="link">
        ANASAYFA
      </router-link>

      

    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  height: 55px;
  background: #fff;
  border-bottom: 1px solid #ccc;
  margin-bottom: 30px;
  position: sticky;
  top: 0;
  z-index: 999;

  .container {
    height: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;

    .logo {
      margin-top: 5px;
      img {
        width: 100px;
        vertical-align: middle;
      }
    }
  .link{
    font-weight: 600;
    text-align: center;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
    
  }
}

@media (max-width: 1000px) {
  nav {
    padding: 0 35px;
  }
}
@media (max-width: 700px) {
  nav {
    width: 90vw;
  }
}
</style>