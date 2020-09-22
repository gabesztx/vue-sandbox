<template>
  <div class="home-content">
    <section class="hero is-small">
      <div class="hero-body">
        <div class="container">
          <div class="card">
            <div class="card-header">
              <div class="card-header-title">
                <h1 class="title" v-on:click="onClick">Covid 19</h1>
              </div>
            </div>
            <!--<div class="card-image">
              <video
                id="my-player"
                class="video-js"
                controls
                preload="auto"
                poster="//vjs.zencdn.net/v/oceans.png"
                data-setup='{}'>
                <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
                <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm" />
                <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg" />
                <p class="vjs-no-js">
                  To view this video please enable JavaScript, and consider upgrading to a
                  web browser that
                  <a href="https://videojs.com/html5-video-support/" target="_blank">
                    supports HTML5 video
                  </a>
                </p>
              </video>
            </div>-->
            <div class="card-content">
               <b-button label="Start"></b-button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--   <section class="section">
         <div class="container">
           <div class="title-content">
             <h1 class="title" v-on:click="onClick">Covid 19</h1>
             <h2 class="subtitle">Large subtitle</h2>
           </div>
           <div class="card">
             <div class="card-content">
               <video
                 id="my-player"
                 class="video-js"
                 controls
                 preload="auto"
                 poster="//vjs.zencdn.net/v/oceans.png"
                 data-setup='{}'>
                 <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
                 <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm" />
                 <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg" />
                 <p class="vjs-no-js">
                   To view this video please enable JavaScript, and consider upgrading to a
                   web browser that
                   <a href="https://videojs.com/html5-video-support/" target="_blank">
                     supports HTML5 video
                   </a>
                 </p>
               </video>
             </div>
           </div>
         </div>
       </section>-->
    <!--<section class="section">
      <div class="container">
        <div class="video-content">
         &lt;!&ndash; <video
            id="my-player"
            class="video-js"
            controls
            preload="auto"
            poster="//vjs.zencdn.net/v/oceans.png"
            data-setup='{}'>
            <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
            <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm" />
            <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg" />
            <p class="vjs-no-js">
              To view this video please enable JavaScript, and consider upgrading to a
              web browser that
              <a href="https://videojs.com/html5-video-support/" target="_blank">
                supports HTML5 video
              </a>
            </p>
          </video>&ndash;&gt;
        </div>
      </div>
    </section>-->
  </div>
</template>
<script lang="ts">
  import router from '@/router';
  import { reactive } from '@vue/composition-api';
  import { worldData } from '@/services/covid-data.service';

  export default {
    setup(){
      // console.log('worldData: ', worldData);
      const onClick = () => {
        router.push({ path: '/country' });
      };
      return {
        onClick,
      };
    },
  };

</script>
