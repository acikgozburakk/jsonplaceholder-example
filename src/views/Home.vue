<template>
  <div class="home">
    <div >
      <div class="posts">
        <Post
          v-for="post in posts"
          :key="post.title"
          :post="post"
          :alluser="alluser"
        />
        <!--v-for ile poststan gelen verilen döndürüldü ve gönderildi ismi yazdırmak için ise bütün kullanıcılar gönderildi-->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Post from "../components/Home/Post";    //post componeneti import edildi
export default {
  components: {
    Post,
  },

  created() {
    this.$store.dispatch("initpost");       //Componente göndermek için actionlar çalıştırılıp getters ile getirildi.
    this.$store.dispatch("alluser");
  },
  computed: {
    ...mapGetters({
      posts: "postlist",
      alluser: "alluser",
    }),
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  width: 100% !important;
  
}

@media (max-width: 1000px) {
  .home {
    
      display: flex;
      flex-direction: column;
      align-items: center;
    
  }
}
</style>
