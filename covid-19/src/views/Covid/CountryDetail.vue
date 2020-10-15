<template>
  <div class="page-content countryDetail">
    <section class="hero is-large">
      <div class="hero-body">

        <div class="container">

          <div class="box">
            <div class="box-header-content">
              <div class="level">
                <div class="level-left">
                  <div class="level-item">
                    <img class="country-flag" src="http://localhost:5000/static/flags/ci.svg" />
                  </div>
                  <div class="level-item">
                    <div class="title">United States</div>
                  </div>
                </div>
                <div class="level-right">
                  <div class="subtitle">2012-02-2</div>
                </div>
              </div>
            </div>


            <div class="box-body-content">
              <div class="tile is-ancestor">
                <div class="tile is-parent">
                  <div class="card">
                    <div class="card-content">
                      <div class="level is-mobile">
                        <div class="level-item">
                          <div class="is-widget-label"><h3 class="subtitle is-spaced"> Clients </h3>
                            <h1 class="title">
                              <div>512</div>
                            </h1>
                          </div>
                        </div>
                        <div class="level-item has-widget-icon">
                          <div class="is-widget-icon"><span class="icon has-text-primary is-large"><i
                            class="mdi mdi-account-multiple mdi-48px"></i></span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
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
