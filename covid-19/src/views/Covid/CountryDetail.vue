<template>
  <div class="page-content countryDetail">
    <section class="hero is-white is-small">
      <div class="hero-body">
        <div class="container">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <img class="country-flag" src="http://localhost:5000/static/flags/ci.svg" />
              </div>
              <div class="level-item">
                <div class="title">United States</div>
              </div>
            </div>
            <div class="level-right"></div>
          </div>
          <!--<h1 class="title">Országonként</h1>
          <h3 class="subtitle is-6">
            <span>COVID-19</span>
          </h3>-->
        </div>
      </div>
    </section>
    <!--<section class="hero is-hero-bar is-main-hero">
      <div class="hero-body">
        <div class="level">
          <div class="level-left">
            Left
          </div>
          <div class="level-right">
            right
          </div>
        </div>
      </div>
    </section>-->
    <!--<button v-on:click="onClick">Back</button>-->
  </div>
</template>
<script lang="ts">
import router from '@/router';

export default {
  setup() {
    const onClick = () => {
      router.push({ path: '/country' });
    };

    return {
      onClick,
    };
  },
};
</script>
