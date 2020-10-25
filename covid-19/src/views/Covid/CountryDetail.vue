<template>
  <div class="page-content countryDetail">
    <section class="header-content hero is-white">
      <div class="hero-body">
        <div class="container">
          <!--<div class="title">{{ $t('country') }}</div>-->
          <div class="country-header">

            <div class="country-left">
              <img class="country-flag" src="http://localhost:5000/static/flags/ci.svg" />
              <div class="country-text">
                <h1 class="title">Hungary</h1>
                <h3 class="subtitle is-6">Last update <b>2012.13.11</b></h3>
              </div>
            </div>

            <div class="country-right">
              <div class="btn-content">
                <b-button
                  :class="'button'"
                  :label="'Country'"
                  :size="''"
                  :type="'is-light'">
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section body-content">
      <div class="container">
        
        <div class="columns is-mobile">
          <div class="column">
            <div class="card">
              <div class="card-content">
                <div class="subtitle">Clients</div>
              </div>
            </div>
          </div>
        </div>
    <!--    <div class="columns is-mobile">
          <div class="column">
            <div class="columns">
              <div class="column is-2">
                <div class="card">
                  <div class="card-content">
                    <div class="subtitle">Clients</div>
                  </div>
                </div>
              </div>
              <div class="column is-2">
                <div class="card">
                  <div class="card-content">
                    <div class="subtitle">Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>-->
      </div>


    </section>


    <!--<section class="section">
      <div class="container">
        <div class="box detail-content">
          <div class="header-content">
            <img class="country-flag" src="http://localhost:5000/static/flags/ci.svg" />
            <div class="title">{{ $t('country') }}</div>
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

              &lt;!&ndash;<div class="card">
                <div class="card-content">
                  <p class="">Hello World</p>
                  <p class="">What is up?</p>
                </div>
              </div>&ndash;&gt;
            </div>
            &lt;!&ndash;  <div class="tile is-ancestor">
                <div class="tile is-parent">
                  <div class="tile">
                    <div class="">Clients </div>
                    <div class="">512</div>

                  </div>
                </div>
              </div>&ndash;&gt;
            &lt;!&ndash; <div class="level">
             <div class="level-left">
               <div class="level-item">
               </div>
               <div class="level-item">
               </div>
             </div>
             <div class="level-right">
             </div>
           </div>&ndash;&gt;
            &lt;!&ndash;<div class="columns">
              <div class="column is-2">
                <div class="card">
                  <div class="card-content">
                    <h1 class="title">512</h1>
                    <h3 class="subtitle is-spaced">Clients </h3>
                  </div>
                </div>
              </div>
            </div>&ndash;&gt;
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
