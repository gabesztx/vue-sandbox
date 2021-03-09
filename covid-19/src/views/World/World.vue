<template>
  <div class="page-content world-page">
    <section class="header-content hero">
      <div class="hero-body">
        <div class="container">
          <div class="world-head">
            <div class="covid-label title is-1">
              <div class="text-start">C</div>
              <img class="covid-icon" src="static/covid-icon/covid-19.3.svg" />
              <div class="text-end">VID-19</div>
            </div>
          </div>
          <div class="world-sub">
            <div class="world-title title">Világszerte</div>
            <div class="world-update-time subtitle">{{ $t('time') }}: 2020.11.11</div>
          </div>
          <div class="world-body">
            <div class="box-item box">
              <div class="box-item-label">{{ $t('casesTotal') }}</div>
              <div class="box-item-value">{{ worldData.casesTotal }}</div>
            </div>
            <div class="box-item box">
              <div class="box-item-label">{{ $t('casesRecovered') }}</div>
              <div class="box-item-value">{{ worldData.casesRecovered }}</div>
            </div>
            <div class="box-item box">
              <div class="box-item-label">{{ $t('casesCritical') }}</div>
              <div class="box-item-value">{{ worldData.casesCritical }}</div>
            </div>
            <div class="box-item box">
              <div class="box-item-label">{{ $t('deathsTotal') }}</div>
              <div class="box-item-value">{{ worldData.deathsTotal }}</div>
            </div>
          </div>
          <!--<div class="world-video-content">
            <video
              class="box"
              :id="video.id"
              :muted="video.muted"
              :autoplay="video.autoplay"
              :preload="video.preload"
              :loop="video.loop"
              :controls="video.controls"
              :poster="video.poster"
            >
              <template v-for="(source, index) in video.src">
                <source :key="index" :src="source.src" :type="source.type" />
              </template>
            </video>
          </div>-->
          <div class="world-button">
            <b-button
              :label="'Országszerte'"
              :type="'is-primary'"
              :size="'is-small'"
              :icon-pack="'fa'"
              :icon-left="'table'"
              @click="onNavigate"
            ></b-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
  import router from '@/router';
  import { worldData } from '@/core/services/covid-data.service';
  import { onMounted, onUnmounted, reactive } from '@vue/composition-api';

  export default {
    setup() {
      const onNavigate = () => {
        console.log('navigateeee');
        router.push({ path: '/countries' });
      };
      /*
      const video = reactive({
        id: 'covid-video',
        poster: '/static/video/covid-19.jpg',
        muted: true,
        controls: false,
        autoplay: false,
        loop: false,
        playsinline: false,
        preload: 'auto', // none, metadata
        src: [
          { type: 'video/mp4', src: '/static/video/covid-19.mp4' },
          // { type: 'video/webm', src: '/static/video/covid-19.webm' },
          // { type: 'video/ogg', src: '//vjs.zencdn.net/v/oceans.ogv' },
        ],
      });
      let videtoTag = null as any;

      onMounted(() => {
        videtoTag = document.querySelector('#covid-video') as HTMLVideoElement;
        // videtoTag.onloadeddata = () => {};
        // videtoTag.onloadstart = () => {};
        // videtoTag.play();
      });*/

      return {
        onNavigate,
        worldData,
        // video,
        // videoConfig,
      };
    },
  };
</script>
<style scoped lang="scss">
  @import 'World';
</style>
