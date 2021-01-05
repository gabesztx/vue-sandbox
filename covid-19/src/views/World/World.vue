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
          <!--          <div class="world-body">
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
                    </div>-->
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
            ></b-button>
            <!--              @click=""-->
          </div>
          <div class="world-button">
            <b-button
              :label="'History'"
              :type="'is-primary'"
              :size="'is-small'"
              :icon-pack="'fa'"
              :icon-left="'table'"
            ></b-button>
            <!--              @click=""-->
          </div>
          <div class="world-button">
            <b-button
              :label="'Tegnap'"
              :type="'is-primary'"
              :size="'is-small'"
              :icon-pack="'fa'"
              :icon-left="'table'"
              @click="yesterDay"
            ></b-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
  import http from 'axios';
  import router from '@/router';
  import moment from 'moment';
  import { worldData } from '@/core/services/covid-data.service';
  import { $getCountries, $getStatistics, $getHistory } from '../../../server/api/covid-193.p.rapidapi';
  import {
    getCountryCode,
    removeUnusedContinent,
    transformContinentCountryData,
    transformCountryName,
    transformMergeObject,
    // deleteSameCountry,
    transformRemoveHyphen,
  } from '../../../server/services/covid-data-transform.service';
  import { onMounted, onUnmounted, reactive } from '@vue/composition-api';
  import { filter, find, map, mergeMap, switchMap, tap } from 'rxjs/operators';
  import { transformCamelizeKeys } from '../../../server/helpers/helpers';
  import { forkJoin, of } from 'rxjs';

  export default {
    setup() {
      /*  const video = reactive({
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

      const countries = [
        'Afghanistan',
        'Albania',
        'Algeria',
        'Andorra',
        'Angola',
        'Anguilla',
        'Antigua-and-Barbuda',
        'Argentina',
        'Armenia',
        'Aruba',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bermuda',
        'Bhutan',
        'Bolivia',
        'Bosnia-and-Herzegovina',
        'Botswana',
        'Brazil',
        'British-Virgin-Islands',
        'Brunei',
        'Bulgaria',
        'Burkina-Faso',
        'Burundi',
        'Cabo-Verde',
        'Cambodia',
        'Cameroon',
        'Canada',
        'CAR',
        'Caribbean-Netherlands',
        'Cayman-Islands',
        'Chad',
        'Channel-Islands',
        'Chile',
        'China',
        'Colombia',
        'Comoros',
        'Congo',
        'Costa-Rica',
        'Croatia',
        'Cuba',
        'Cyprus',
        'Czechia',
        'Denmark',
        'Djibouti',
        'Dominica',
        'Dominican-Republic',
        'DRC',
        'Ecuador',
        'Egypt',
        'El-Salvador',
        'Equatorial-Guinea',
        'Eritrea',
        'Estonia',
        'Eswatini',
        'Ethiopia',
        'Faeroe-Islands',
        'Falkland-Islands',
        'Fiji',
        'Finland',
        'France',
        'French-Guiana',
        'French-Polynesia',
        'Gabon',
        'Gambia',
        'Georgia',
        'Germany',
        'Ghana',
        'Gibraltar',
        'Greece',
        'Greenland',
        'Grenada',
        'Guadeloupe',
        'Guatemala',
        'Guinea',
        'Guinea-Bissau',
        'Guyana',
        'Haiti',
        'Honduras',
        'Hong-Kong',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Iran',
        'Iraq',
        'Ireland',
        'Isle-of-Man',
        'Israel',
        'Italy',
        'Ivory-Coast',
        'Jamaica',
        'Japan',
        'Jordan',
        'Kazakhstan',
        'Kenya',
        'Kuwait',
        'Kyrgyzstan',
        'Laos',
        'Latvia',
        'Lebanon',
        'Lesotho',
        'Liberia',
        'Libya',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Macao',
        'Madagascar',
        'Malawi',
        'Malaysia',
        'Maldives',
        'Mali',
        'Malta',
        'Marshall-Islands',
        'Martinique',
        'Mauritania',
        'Mauritius',
        'Mayotte',
        'Mexico',
        'Moldova',
        'Monaco',
        'Mongolia',
        'Montenegro',
        'Montserrat',
        'Morocco',
        'Mozambique',
        'Myanmar',
        'Namibia',
        'Nepal',
        'Netherlands',
        'New-Caledonia',
        'New-Zealand',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'North-Macedonia',
        'Norway',
        'Oman',
        'Pakistan',
        'Palestine',
        'Panama',
        'Papua-New-Guinea',
        'Paraguay',
        'Peru',
        'Philippines',
        'Poland',
        'Portugal',
        'Qatar',
        'Romania',
        'Russia',
        'Rwanda',
        'S-Korea',
        'Saint-Kitts-and-Nevis',
        'Saint-Lucia',
        'Saint-Martin',
        'Saint-Pierre-Miquelon',
        'Samoa',
        'San-Marino',
        'Sao-Tome-and-Principe',
        'Saudi-Arabia',
        'Senegal',
        'Serbia',
        'Seychelles',
        'Sierra-Leone',
        'Singapore',
        'Sint-Maarten',
        'Slovakia',
        'Slovenia',
        'Solomon-Islands',
        'Somalia',
        'South-Africa',
        'South-Sudan',
        'Spain',
        'Sri-Lanka',
        'St-Barth',
        'St-Vincent-Grenadines',
        'Sudan',
        'Suriname',
        'Sweden',
        'Switzerland',
        'Syria',
        'Taiwan',
        'Tajikistan',
        'Tanzania',
        'Thailand',
        'Timor-Leste',
        'Togo',
        'Trinidad-and-Tobago',
        'Tunisia',
        'Turkey',
        'Turks-and-Caicos',
        'UAE',
        'Uganda',
        'UK',
        'Ukraine',
        'Uruguay',
        'USA',
        'Uzbekistan',
        'Vanuatu',
        'Vatican-City',
        'Venezuela',
        'Vietnam',
        'Wallis-and-Futuna',
        'Western-Sahara',
        'Yemen',
        'Zambia',
        'Zimbabwe',
      ];

      const transformData = (data) => {
        return of(data).pipe(
          // map((data) => removeUnusedContinent(data)),
          map((data) => getCountryCode(data)),
          map((data) => transformCountryName(data)),
          map((data) => transformRemoveHyphen(data)),
          map((data) => transformMergeObject(data)),
          map((data) => transformCamelizeKeys(data))
          // map((data) => deleteSameCountry(data))
        );
      };

      const day = moment().subtract(0, 'day').format('YYYY-MM-DD');

      // router.push({ path: '/countries' });

      const yesterDay = () => {
        forkJoin(
          countries.map((country) => {
            return $getHistory({
              country: country,
              day: day,
            }).pipe(
              mergeMap((data) => transformData(data)),
              map((value) => {
                // console.log(value);
                return value[0];
              })
            );
          })
        ).subscribe((res) => {
          console.log(res);
        });

        /* forkJoin(
       countries.map((item) => {
         return onGetHistory({
           country: item.countrySearch,
           day: moment(item.day).subtract(2, 'day').format('YYYY-MM-DD'),
         });
       })
     ).subscribe((res) => {
       // console.log('Today: ', countries);
       console.log(res);
     });*/
      };
      // onGetStatic();
      // forkJoin([
      //   onGetHistory({ country: 'Hungary', day: '2020-12-31' }),
      //   onGetHistory({ country: 'Hungary', day: '2020-12-30' }),
      //   onGetHistory({ country: 'Hungary', day: '2020-12-29' }),
      // ])
      /*forkJoin({
s1: onGetHistory({country: 'Hungary', day: '2020-12-31'}),
s2: onGetHistory({country: 'Hungary', day: '2020-12-30'}),
s3: onGetHistory({country: 'Hungary', day: '2020-12-29'}),
})*/
      //     .subscribe((res) => {
      //       console.log('yesterDay: ', res);
      //     });
      // };

      // let countries;
      // let continents;
      // onGetStatic()
      return {
        // onGetStatic,
        // onGetHistory,
        yesterDay,
        // onGetCountries,
        // worldData,
        // video,
        // videoConfig,
      };
    },
  };
</script>
<style scoped lang="scss">
  @import 'World';
</style>
