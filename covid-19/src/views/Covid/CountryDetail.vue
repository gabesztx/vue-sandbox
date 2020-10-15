<template>
  <div class="page-content countryDetail">
    <section class="section">
      <div class="container">
        <div class="box detail-content">
          <div class="header-content">
            <img class="country-flag" src="http://localhost:5000/static/flags/ci.svg" />
            <div class="title">United States</div>
          </div>
          <div class="body-content">
            <div class="card-item-content">
              <div class="box">
                <div class="">Hello World</div>
                <div class="">What is up?</div>
              </div>
              <div class="box">
                <p class="">Hello World</p>
                <p class="">What is up?</p>
              </div>
              <div class="box">
                <p class="">Hello World</p>
                <p class="">What is up?</p>
              </div>
              <div class="box">
                <p class="">Hello World</p>
                <p class="">What is up?</p>
              </div>
              <div class="box">
                <p class="">Hello World</p>
                <p class="">What is up?</p>
              </div>
              <div class="box">
                <p class="">Hello World</p>
                <p class="">What is up?</p>
              </div>

              <!--<div class="card">
                <div class="card-content">
                  <p class="">Hello World</p>
                  <p class="">What is up?</p>
                </div>
              </div>-->
            </div>
            <!--  <div class="tile is-ancestor">
                <div class="tile is-parent">
                  <div class="tile">
                    <div class="">Clients </div>
                    <div class="">512</div>

                  </div>
                </div>
              </div>-->
            <!-- <div class="level">
             <div class="level-left">
               <div class="level-item">
               </div>
               <div class="level-item">
               </div>
             </div>
             <div class="level-right">
             </div>
           </div>-->
            <!--<div class="columns">
              <div class="column is-2">
                <div class="card">
                  <div class="card-content">
                    <h1 class="title">512</h1>
                    <h3 class="subtitle is-spaced">Clients </h3>
                  </div>
                </div>
              </div>
            </div>-->
          </div>
        </div>
      </div>
    </section>
    <!--<button v-on:click="onClick">Back</button>-->
  </div>
</template>
<script lang="ts">
  import router from '@/router';

  export default {
    setup(){
      const onClick = () => {
        router.push({ path: '/country' });
      };

      return {
        onClick,
      };
    },
  };
</script>
