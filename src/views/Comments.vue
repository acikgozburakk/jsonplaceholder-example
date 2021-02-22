<template>
  <div class="comment">
    <div class="comment-header">
      <div class="comment-detail">
        <h2>{{ selectpost.title }}</h2>

        <span>{{ selectpost.body }} </span>
        <span style="padding-top: 20px"
          >Created By
          <a @click="pushuser(userdetail.id)"> {{ userdetail.name }} </a>
          <!-- route psuh yapmak için methoda kullanıcı idsi parametrelendi-->
        </span>
      </div>
    </div>

    <div>
      <h2 style="color: #6db0d6; font-weight: 800; font-size: 30px">
        <u>COMMENTS</u>
      </h2>

      <div v-for="comment in postcomment" :key="comment.id" class="comments">
        <p style="font-weight: 600; font-size: 18px">
          {{ comment.email.toUpperCase() }}
        </p>
        <p style="padding: 10px">{{ comment.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  created() {
    //Sayfada kullanılacak veriler actionla stateye çekildi
    this.$store.dispatch("postcomment", this.$route.params.id);
    this.$store.dispatch("selectpost", this.$route.params.id);
    this.$store.dispatch("fetchuser", this.$route.params.userid);
  },
  computed: {
    ...mapGetters({
      //getters ile veriler sayfaya çekildi
      postcomment: "postcomment",
      selectpost: "selectpost",
      userdetail: "userdetail",
    }),
  },
  methods: {
    pushuser(id) {
      //kullanıcıya route push yapıldı
      this.$router.push(`/profile/${id}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.comment {
  width: 935px;
  height: 100%;
  box-sizing: border-box;
  min-height: auto;
  min-width: auto;
  max-width: 935px;
  margin-top: 10px;
  padding: 0 20px 0 20px;
  background-color: white;
  h2 {
    text-align: center;
  }

  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  .comment-header {
    display: flex;

    .comment-detail {
      height: 150px;
      width: 600px;

      word-wrap: break-word;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 10px auto;
      text-align: CENTER;

      p {
        font-size: 16px;
        line-height: 18px;
        text-align: left;
      }
      h2 {
        font-weight: 800;
        text-transform: uppercase;
      }
      a {
        cursor: pointer;
        font-weight: 800;
      }
    }
  }

  .comments {
    width: 645px;
    margin: 30px 0 30px 150px;
    border-top: 1px solid #ccc;
    background-color: white;
    padding: 20px;
  }
}
@media (max-width: 700px) {
  .comment {
    width: 90vw;
    max-width: 100% !important;
    margin: auto;

    .comments {
      width: 90vw;
      max-width: 100% !important;
      margin: auto;
    }
  }
}
</style>