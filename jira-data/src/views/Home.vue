<template>
  <div class="home">
    <h1>Home</h1>
    <button @click="onClickGetAllBoards">Get All Boards</button>
    <button @click="onClickGetBoard">Get Hugo Board</button>
    <button @click="onClickGetEpicFromBoard">Get Epic from Board</button>
    <button @click="onClickGetProject">Get Project from Board</button>
    <button @click="onClickGetIssue">Get Issue from Board</button>
    <button @click="onClickGetEpic">Get Epic</button>
    <!--    <button @click="onClickGetEpicFromFeatures">Get Features from Hugo Board</button>-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getAllBoards, getBoard, getBoardEpics, getBoardProjects, getBoardIssue, getEpic } from "@/core/api/jira.board.api";

export default defineComponent({
  name: "Home",
  setup: () => {
    const onClickGetAllBoards = () => {
      getAllBoards().then((res) => {
        console.log(res);
      });

    };
    const onClickGetBoard = () => {
      getBoard(229).then((res) => {
        console.log(res);
      });
    };
    const onClickGetEpicFromBoard = () => {
      getBoardEpics(229).then((res) => {
        console.log(res);
      });
    };
    const onClickGetProject = () => {
      getBoardProjects(229).then((res) => {
        console.log(res);
      });
    };
    const onClickGetIssue = () => {
      getBoardIssue(229).then((res) => {
        console.log(res);
      });
    };
    const onClickGetEpic = () => {
      getEpic().then((res) => {
        console.log(res);
      });
    };
    return {
      onClickGetAllBoards,
      onClickGetBoard,
      onClickGetEpicFromBoard,
      onClickGetProject,
      onClickGetIssue,
      onClickGetEpic
    };
  }
});
</script>
