<template>
  <div class="profile">
    <div class="profile-header">
      <div class="profile-image">
        <img src="@/assets/images/profil.jpg" alt="defaultpic" />
      </div>
      <div class="profile-detail">  <!-- user ile ilgili gelen veriler yazdırıldı-->
        <h2>{{ userdetail.username }}</h2>
        <p>{{ userpost.length }} post</p>
        <h1>{{ userdetail.name }}</h1>
        <div v-if="viewmorestatus">   <!--daha fazla bilgi görmek için v-if yapısıyla bir blok kullanıldı-->
          <h4>
            <u><i class="far fa-envelope" style="padding-right: 15px"></i></u>
            {{ userdetail.email }}
          </h4>
          <h4>
            <u
              ><i class="fas fa-map-marked-alt" style="padding-right: 15px"></i
            ></u>
            {{ userdetail.address.city }}
          </h4>
          <h4>
            <u
              ><i
                class="fab fa-internet-explorer"
                style="padding-right: 15px"
              ></i
            ></u>
            {{ userdetail.website }}
          </h4>
        </div>
        <span @click="viewmorestatus = !viewmorestatus" class="view"> ...</span>
      </div>
    </div>
    <div class="hood"> <!--listelenecek verilerin seçilmesi için blok oluşturuldu-->
      <a :class="{ aktif: postsstatus }" @click="postsstatus = true"
        ><i class="far fa-clipboard"></i>POSTS</a
      >
      <a :class="{ aktif: !postsstatus }" @click="postsstatus = false"><i class="far fa-images"></i>ALBUMS</a>
    </div>
    <div v-if="postsstatus == true"> <!-- poststatusun değerine göre postlar listelenecek-->
      <div v-for="post in userpost" :key="post.id" class="posts">
        <p style="font-weight: 600; font-size: 18px">
          {{ post.title.toUpperCase() }}
        </p>
        <p style="padding-top: 10px">{{ post.body }}</p>
      </div>
    </div>
    <div v-if="postsstatus == false"> <!-- poststatus false değeri olduğunda albumler listelenecek-->
      <div v-for="album in useralbum" :key="album.id" class="albums">
        <p>{{ album.title.toUpperCase() }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      viewmorestatus: false,
      postsstatus: true,
    };
  },
  created() {
    this.$store.dispatch("fetchuser", this.$route.params.id);  //routeden gelen idye göre kullanıcı action ile stateye aktarılacak.
    this.$store.dispatch("useralbums", this.$route.params.id); //routeden gelen idye göre user albumü stateye aktarılacak
    this.$store.dispatch("userpost", this.$route.params.id);  //routeden gelen iddye göre userın postları stateye aktarılacak.
  },
  computed: {
    ...mapGetters({  //statedeki kullanılacak veriler getters ile sayfaya getirildi.
      userdetail: "userdetail",
      useralbum: "useralbum",
      userpost: "userpost",
    }),
  },
};
</script>
<style lang="scss" scoped>
.aktif {
  color: #2d93c2;
  text-decoration: underline;
}
.profile {
  width: 935px;
  height: 761px;
  min-height: auto;
  min-width: auto;
  max-width: 935px;
  margin-top: 100px;
  padding: 0 20px 0 20px;
  background-color: #fafafa;

  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  .profile-header {
    display: flex;
    .profile-image {
      height: 150px;
      width: 290px;
      margin: 0 0 0 90px;
      img {
        text-align: center;
        height: 140px;
        width: 140px;
        position: absolute;
        display: block;
        border-radius: 50%;
        border: 1px solid #eceaead3;
      }
    }
    .profile-detail {
      margin: 20px 0 0 20px;
      * {
        padding-top: 10px;
      }
      h2 {
        font-size: 28px;
        font-weight: 100;
        line-height: 20px;
        white-space: nowrap;
        padding: 0 0 5px 0;
      }
      p {
        font-size: 16px;
        line-height: 18px;
        text-align: left;
      }
      h1 {
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
      }
      .view {
        opacity: 0.5;
        font-weight: 800;
        font-size: 20px;
        float: right;
        cursor: pointer;
      }
    }
  }
  .hood {
    border-top: 1px solid #dbdbdb;
    text-align: center;
    padding-top: 10px;
    color: #6db0d6;
    font-weight: 800;
    font-size: 30px;
    a {
      padding: 15px;
      cursor: pointer;
      &:hover{
        color:#46a0d4;

      }
    }
    .far {
      color: #6db0d6;
    }
  }
  .posts {
    width: 645px;
    margin: 30px 0 30px 150px;
    border: 1px solid #ccc;
    background-color: white;
    padding: 10px;
  }
  .albums {
    width: 285px;

    border: 1px solid #ccc;
    background-color: white;
    padding: 10px;
    text-align: center;
    margin: 20px auto;
  }
}
@media (max-width: 700px) {
  .profile {
    width: 90vw;
    max-width: 100% !important;
    .profile-header {
      .profile-image {
        width: 190px;
      }
    }
    .posts {
      width: 90vw;
      max-width: 100% !important;
      margin-left: 0px;
    }
  }
}
</style>