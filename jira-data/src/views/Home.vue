<template>
  <div class="home">
    <h1>Home</h1>
    <div>
      <button @click="onClickGetAllBoards">Get All Boards</button>
    </div>

    <div>
      <button @click="onClickGetBoard">Get Hugo Board</button>
    </div>
    <div>
      <button @click="onClickGetEpicFromBoard">Get Epic from Board</button>
    </div>
    <div>
      <button @click="onClickGetProject">Get Project from Board</button>
    </div>
    <div>
      <button @click="onClickGetIssue">Get Issue from Board</button>
    </div>
    <div>
      <button @click="onClickGetSprint">Get Sprint from Board</button>
    </div>
    <div>
      <button @click="onClickGetStuff">Get Stuff from Board</button>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  getAllBoards,
  getBoard,
  getBoardEpics,
  getBoardProjects,
  getBoardIssue,
  getBoardAllQuickFilters, getBoardAllSprint
} from "@/core/api/jira.board.api";

export default defineComponent({
  name: "Home",
  setup: () => {
    const board = 223;
    const onClickGetAllBoards = () => {
      getAllBoards().then((res) => {
        console.log(res);
      });

    };
    const onClickGetBoard = () => {
      getBoard(board).then((res) => {
        console.log(res);
      });
    };
    const onClickGetEpicFromBoard = () => {
      getBoardEpics(board).then((res) => {
        console.log(res);
      });
    };
    const onClickGetProject = () => {
      getBoardProjects(board).then((res) => {
        console.log(res);
      });
    };
    const onClickGetIssue = () => {
      getBoardIssue(board).then((res) => {
        console.log(res);
      });
    };
    const onClickGetSprint = () => {
      getBoardAllSprint(board).then((res) => {
        console.log(res);
      });
    };

    const onClickGetStuff = () => {
      getBoardAllQuickFilters(953).then((res) => {
        console.log(res.issues);
      });
    };
    // getBoardAllQuickFilters(950).then((res) => {
    //   console.log(res.issues);
    // });
    return {
      onClickGetAllBoards,
      onClickGetBoard,
      onClickGetEpicFromBoard,
      onClickGetProject,
      onClickGetIssue,
      onClickGetSprint,
      onClickGetStuff,
    };
  }
});
</script>
