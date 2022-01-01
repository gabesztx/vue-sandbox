<template>
  <div class="home">
    <h1>Home</h1>
    <div>
      <button @click="onClickGetSprint">Get Sprints from Board</button>
    </div>
    <div>
      <button @click="onClickGetIssues">Get Issues from Active Sprint</button>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  getIssuesFromSprint,
  getSprintsFromBoard
} from "@/core/api/jira.board.api";

export default defineComponent({
  name: "Home",
  setup: () => {
    const boardId = 223;
    const onClickGetSprint = () => {
      getSprintsFromBoard(boardId).then((res) => {
        console.log(res);
      });
    };
    const activeSprintId = 953
    const onClickGetIssues = () => {
      getIssuesFromSprint(activeSprintId).then((res) => {
        console.log(res);
      });
    };

    return {
      onClickGetSprint,
      onClickGetIssues,
    };
  }
});
</script>
