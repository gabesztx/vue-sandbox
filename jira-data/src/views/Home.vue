<template>
  <div class="home">
    <h1>Home</h1>
    <button @click="onClickGet">Get data</button>
    <button @click="onClickPost">Post data</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getData } from "@/core/services/http.service";

export default defineComponent({
  name: "Home",
  setup: () => {
    const onClickGet = () => {
      getData().then((res) => {
        console.log("GET OK!", res.data);
      });
    };
    const onClickPost = () => {
      /*    postData(postDummyData).then((res) => {
        console.log('POST OK!', res.data);
      });*/
    };
    return {
      onClickGet,
      onClickPost,
    };
  },
});
</script>
