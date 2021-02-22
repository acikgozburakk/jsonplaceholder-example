<template>

  <div class="post">
    <div class="post-header">
      
      <router-link :to="`/profile/${post.userId}`" class="post-header-username"  
        >{{username.name}}</router-link
      >                             <!-- proptan gelen posttan userıdyi route gönderilip sayfanın yönlendirilmesi sağlandı-->
    </div>
    <div class="hood"><!-- posttan gelen veriler yazıldı-->
      <span
        ><a>{{ post.title.toUpperCase() }}</a></span    
      >          
    </div>

    <div class="post-content">
      <span>{{ post.body }} </span>
    </div>
    <div class="post-comment">  <!-- Postcommentten gelen veriler yazdırıldı-->
      <h4><i class="far fa-comments"></i>{{ postcomment.length }} Comment</h4>
      <router-link :to="`/comments/${post.id}/${post.userId}`"
        ><button>Go Detail</button></router-link
      >
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {  //homedan gelen post ve alluser alındı
    post: {
      required: true,
      type: Object,
    },
    alluser:{
      required:true,
      type:Object,
    }
  },
  created() {
    this.$store.dispatch("postcomment", this.post.id);     //posta ait yorumlar actionala stateye aktarıldı
    
  },
  computed: {
    ...mapGetters({
      postcomment: "postcomment",                      //getters ile sayfaya state çağırıldı.
      
    }),
    username(){
    return this.alluser.find(f => f.id == this.post.userId);      //post sahibinin ismini yazdırmak için postun içindeki userıdye göre userlar bulundu.
      
  }
  },
  
  
};
</script>

<style lang="scss" scoped>
.post {
  width: 845px;
  margin-bottom: 60px;
  margin-left: 20px;
  border: 1px solid #ccc;
  background-color: white;
  .post-header {
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    .post-header-username {
      margin-left: 10px;
      font-size: 18px;
      color: #262626;
      font-weight: 600;
    }
  }
  .hood {
    line-height: 20px;
    font-weight: bold;
    font-size: 14px;
    padding: 1rem 1rem;
    color: #262626;
  }
  .post-content {
    padding-left: 2rem;
    padding-bottom: 1rem;
  }
  .post-comment {
    height: 50px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    button {
      width: 100px;
      border: 1px solid #0095f6;
      border-radius: 7px;
      height: 100%;
      transition: 0.9s;
      background: none;
      outline: none;
      color: #0095f6;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        background-color: #6db0d6;
        color: white;
      }
    }
    .fa-comments {
      padding-right: 1rem;
      font-size: 22px;
    }
  }
}
@media (max-width: 700px) {
  .post {
    width: 90vw;
    max-width: 100% !important;
  }
}
</style>