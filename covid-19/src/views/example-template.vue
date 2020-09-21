<template>
  <div class="app-content">
    <section class="hero is-hero-bar">
      <div class="hero-body">
        <div class="level">
          <div class="level-left">
            <div class="level-item"><h1 class="title"> Tables </h1></div>
          </div>
          <div class="level-right">
            <div class="level-item"><a href="#/" class="button router-link-active"> Dashboard </a></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section is-main-section">
      <div class="card has-table has-mobile-sort-spaced">
        <header class="card-header">
          <p class="card-header-title">
            <span class="icon">
              <i class="mdi mdi-account-multiple default"></i>
            </span>
            <span>Clients</span>
          </p>
        </header>

        <div class="notification is-card-toolbar">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <div class="buttons has-addons">
                  <button class="button is-active">Active</button>
                  <button disabled="disabled" class="button">Recent</button>
                  <button disabled="disabled" class="button">Archived</button>
                </div>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <form>
                  <div class="field has-addons">
                    <div class="control"><input type="text" placeholder="Sample field..." class="input"></div>
                    <div class="control">
                      <button type="submit" class="button is-primary"><span class="icon"><i
                        class="mdi mdi-dots-horizontal default"></i></span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>


        <div class="card-content">
          <div>
            <div class="b-table">
              <div class="field table-mobile-sort">
                <div class="field has-addons">
                  <div class="control is-expanded"><span class="select is-fullwidth"><select><option
                    value="[object Object]"> Name </option><option value="[object Object]"> Company </option><option
                    value="[object Object]"> City </option><option value="[object Object]"> Progress </option>
                    </select>
                  </span>
                  </div>
                  <div class="control">
                    <button class="button is-primary"><span class="icon is-small"><i
                      class="mdi mdi-arrow-up"></i></span></button>
                  </div>
                </div>
              </div>
              <div class="table-wrapper has-mobile-cards">
                <table class="table is-striped is-hoverable">
                  <thead>
                  <tr>
                    <th class="checkbox-cell"><label class="b-checkbox checkbox"><input type="checkbox"
                                                                                        true-value="true" value="false"><span
                      class="check"></span><span class="control-label"></span></label></th>
                    <th class="">
                      <div class="th-wrap"><span class="is-relative">  <span
                        class="icon sort-icon is-small is-invisible"><i class="mdi mdi-arrow-up"></i></span></span>
                      </div>
                    </th>
                    <th class="is-current-sort is-sortable is-unselectable">
                      <div class="th-wrap"><span class="is-relative"> Name <span class="icon sort-icon is-small"><i
                        class="mdi mdi-arrow-up"></i></span></span></div>
                    </th>
                    <th class="is-sortable is-unselectable">
                      <div class="th-wrap"><span class="is-relative"> Company <span
                        class="icon sort-icon is-small is-invisible"><i class="mdi mdi-arrow-up"></i></span></span>
                      </div>
                    </th>
                    <th class="is-sortable is-unselectable">
                      <div class="th-wrap"><span class="is-relative"> City <span
                        class="icon sort-icon is-small is-invisible"><i class="mdi mdi-arrow-up"></i></span></span>
                      </div>
                    </th>
                    <th class="is-sortable is-unselectable">
                      <div class="th-wrap"><span class="is-relative"> Progress <span
                        class="icon sort-icon is-small is-invisible"><i class="mdi mdi-arrow-up"></i></span></span>
                      </div>
                    </th>
                    <th class="">
                      <div class="th-wrap"><span class="is-relative"> Created <span
                        class="icon sort-icon is-small is-invisible"><i class="mdi mdi-arrow-up"></i></span></span>
                      </div>
                    </th>
                    <th class="">
                      <div class="th-wrap"><span class="is-relative">  <span
                        class="icon sort-icon is-small is-invisible"><i class="mdi mdi-arrow-up"></i></span></span>
                      </div>
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr draggable="false" class="">
                    <td class="checkbox-cell"><label class="b-checkbox checkbox"><input type="checkbox"
                                                                                        true-value="true" value="false"><span
                      class="check"></span><span class="control-label"></span></label></td>
                    <td class="has-no-head-mobile is-image-cell">
                      <div class="image"><img src="https://avatars.dicebear.com/v2/gridy/Bert-Howe.svg"
                                              class="is-rounded"></div>
                    </td>
                    <td data-label="Name" class=""> Bert Howe</td>
                    <td data-label="Company" class=""> Daugherty-Corwin</td>
                    <td data-label="City" class=""> Juliachester</td>
                    <td data-label="Progress" class="is-progress-col">
                      <progress max="100" class="progress is-small is-primary" value="76">76</progress>
                    </td>
                    <td data-label="Created" class=""><small title="Aug 1, 2020" class="has-text-grey is-abbr-like">Aug
                      1, 2020</small></td>
                    <td class="is-actions-cell">
                      <div class="buttons is-right"><a href="#/client/2" class="button is-small is-primary"><span
                        class="icon is-small"><i class="mdi mdi-account-edit"></i></span></a>
                        <button type="button" class="button is-small is-danger"><span class="icon is-small"><i
                          class="mdi mdi-trash-can"></i></span></button>
                      </div>
                    </td>
                  </tr>
                  <tr draggable="false" class="">
                    <td class="checkbox-cell">
                      <label class="b-checkbox checkbox"><input type="checkbox"
                                                                true-value="true" value="false"><span
                        class="check"></span><span class="control-label"></span></label></td>
                    <td class="has-no-head-mobile is-image-cell">
                      <div class="image"><img src="https://avatars.dicebear.com/v2/gridy/Brandy-Gleason.svg"
                                              class="is-rounded"></div>
                    </td>
                    <td data-label="Name" class=""> Brandy Gleason</td>
                    <td data-label="Company" class=""> Strosin Group</td>
                    <td data-label="City" class=""> East Francescostad</td>
                    <td data-label="Progress" class="is-progress-col">
                      <progress max="100" class="progress is-small is-primary" value="66">66</progress>
                    </td>
                    <td data-label="Created" class=""><small title="Jan 21, 2020" class="has-text-grey is-abbr-like">Jan
                      21, 2020</small></td>
                    <td class="is-actions-cell">
                      <div class="buttons is-right"><a href="#/client/10" class="button is-small is-primary"><span
                        class="icon is-small"><i class="mdi mdi-account-edit"></i></span></a>
                        <button type="button" class="button is-small is-danger"><span class="icon is-small"><i
                          class="mdi mdi-trash-can"></i></span></button>
                      </div>
                    </td>
                  </tr>
                  <tr draggable="false" class="">
                    <td class="checkbox-cell"><label class="b-checkbox checkbox"><input type="checkbox"
                                                                                        true-value="true" value="false"><span
                      class="check"></span><span class="control-label"></span></label></td>
                    <td class="has-no-head-mobile is-image-cell">
                      <div class="image"><img src="https://avatars.dicebear.com/v2/gridy/Dominique-Douglas.svg"
                                              class="is-rounded"></div>
                    </td>
                    <td data-label="Name" class=""> Dominique Douglas</td>
                    <td data-label="Company" class=""> Romaguera, Cartwright and Smith</td>
                    <td data-label="City" class=""> Jacobsburgh</td>
                    <td data-label="Progress" class="is-progress-col">
                      <progress max="100" class="progress is-small is-primary" value="32">32</progress>
                    </td>
                    <td data-label="Created" class=""><small title="Jun 15, 2020" class="has-text-grey is-abbr-like">Jun
                      15, 2020</small></td>
                    <td class="is-actions-cell">
                      <div class="buttons is-right"><a href="#/client/31" class="button is-small is-primary"><span
                        class="icon is-small"><i class="mdi mdi-account-edit"></i></span></a>
                        <button type="button" class="button is-small is-danger"><span class="icon is-small"><i
                          class="mdi mdi-trash-can"></i></span></button>
                      </div>
                    </td>
                  </tr>
                  <tr draggable="false" class="">
                    <td class="checkbox-cell"><label class="b-checkbox checkbox"><input type="checkbox"
                                                                                        true-value="true" value="false"><span
                      class="check"></span><span class="control-label"></span></label></td>
                    <td class="has-no-head-mobile is-image-cell">
                      <div class="image"><img src="https://avatars.dicebear.com/v2/gridy/Dr.-Rupert-Schultz.svg"
                                              class="is-rounded"></div>
                    </td>
                    <td data-label="Name" class=""> Dr. Rupert Schultz</td>
                    <td data-label="Company" class=""> Greenfelder-Armstrong</td>
                    <td data-label="City" class=""> Port Burleyborough</td>
                    <td data-label="Progress" class="is-progress-col">
                      <progress max="100" class="progress is-small is-primary" value="28">28</progress>
                    </td>
                    <td data-label="Created" class=""><small title="Oct 30, 2020" class="has-text-grey is-abbr-like">Oct
                      30, 2020</small></td>
                    <td class="is-actions-cell">
                      <div class="buttons is-right"><a href="#/client/21" class="button is-small is-primary"><span
                        class="icon is-small"><i class="mdi mdi-account-edit"></i></span></a>
                        <button type="button" class="button is-small is-danger"><span class="icon is-small"><i
                          class="mdi mdi-trash-can"></i></span></button>
                      </div>
                    </td>
                  </tr>
                  <tr draggable="false" class="">
                    <td class="checkbox-cell"><label class="b-checkbox checkbox"><input type="checkbox"
                                                                                        true-value="true" value="false"><span
                      class="check"></span><span class="control-label"></span></label></td>
                    <td class="has-no-head-mobile is-image-cell">
                      <div class="image"><img src="https://avatars.dicebear.com/v2/gridy/Eileen-Muller-V.svg"
                                              class="is-rounded"></div>
                    </td>
                    <td data-label="Name" class=""> Eileen Muller V</td>
                    <td data-label="Company" class=""> Hickle, Walsh and Greenfelder</td>
                    <td data-label="City" class=""> Port Myahtown</td>
                    <td data-label="Progress" class="is-progress-col">
                      <progress max="100" class="progress is-small is-primary" value="73">73</progress>
                    </td>
                    <td data-label="Created" class=""><small title="Jun 7, 2020" class="has-text-grey is-abbr-like">Jun
                      7, 2020</small></td>
                    <td class="is-actions-cell">
                      <div class="buttons is-right"><a href="#/client/44" class="button is-small is-primary"><span
                        class="icon is-small"><i class="mdi mdi-account-edit"></i></span></a>
                        <button type="button" class="button is-small is-danger"><span class="icon is-small"><i
                          class="mdi mdi-trash-can"></i></span></button>
                      </div>
                    </td>
                  </tr>
                  <tr draggable="false" class="">
                    <td class="checkbox-cell"><label class="b-checkbox checkbox"><input type="checkbox"
                                                                                        true-value="true" value="false"><span
                      class="check"></span><span class="control-label"></span></label></td>
                    <td class="has-no-head-mobile is-image-cell">
                      <div class="image"><img src="https://avatars.dicebear.com/v2/gridy/Favian-Turcotte.svg"
                                              class="is-rounded"></div>
                    </td>
                    <td data-label="Name" class=""> Favian Turcotte</td>
                    <td data-label="Company" class=""> Crooks, Ruecker and Paucek</td>
                    <td data-label="City" class=""> Goldnerport</td>
                    <td data-label="Progress" class="is-progress-col">
                      <progress max="100" class="progress is-small is-primary" value="20">20</progress>
                    </td>
                    <td data-label="Created" class=""><small title="Apr 18, 2020" class="has-text-grey is-abbr-like">Apr
                      18, 2020</small></td>
                    <td class="is-actions-cell">
                      <div class="buttons is-right"><a href="#/client/46" class="button is-small is-primary"><span
                        class="icon is-small"><i class="mdi mdi-account-edit"></i></span></a>
                        <button type="button" class="button is-small is-danger"><span class="icon is-small"><i
                          class="mdi mdi-trash-can"></i></span></button>
                      </div>
                    </td>
                  </tr>
                  <tr draggable="false" class="">
                    <td class="checkbox-cell"><label class="b-checkbox checkbox"><input type="checkbox"
                                                                                        true-value="true" value="false"><span
                      class="check"></span><span class="control-label"></span></label></td>
                    <td class="has-no-head-mobile is-image-cell">
                      <div class="image"><img src="https://avatars.dicebear.com/v2/gridy/Gudrun-Stark-V.svg"
                                              class="is-rounded"></div>
                    </td>
                    <td data-label="Name" class=""> Gudrun Stark V</td>
                    <td data-label="Company" class=""> Balistreri PLC</td>
                    <td data-label="City" class=""> Peytonberg</td>
                    <td data-label="Progress" class="is-progress-col">
                      <progress max="100" class="progress is-small is-primary" value="52">52</progress>
                    </td>
                    <td data-label="Created" class=""><small title="Jul 11, 2020" class="has-text-grey is-abbr-like">Jul
                      11, 2020</small></td>
                    <td class="is-actions-cell">
                      <div class="buttons is-right"><a href="#/client/17" class="button is-small is-primary"><span
                        class="icon is-small"><i class="mdi mdi-account-edit"></i></span></a>
                        <button type="button" class="button is-small is-danger"><span class="icon is-small"><i
                          class="mdi mdi-trash-can"></i></span></button>
                      </div>
                    </td>
                  </tr>
                  <tr draggable="false" class="">
                    <td class="checkbox-cell"><label class="b-checkbox checkbox"><input type="checkbox"
                                                                                        true-value="true" value="false"><span
                      class="check"></span><span class="control-label"></span></label></td>
                    <td class="has-no-head-mobile is-image-cell">
                      <div class="image"><img src="https://avatars.dicebear.com/v2/gridy/Johnny-Grady.svg"
                                              class="is-rounded"></div>
                    </td>
                    <td data-label="Name" class=""> Johnny Grady</td>
                    <td data-label="Company" class=""> Ziemann LLC</td>
                    <td data-label="City" class=""> Augustaport</td>
                    <td data-label="Progress" class="is-progress-col">
                      <progress max="100" class="progress is-small is-primary" value="47">47</progress>
                    </td>
                    <td data-label="Created" class=""><small title="Dec 20, 2020" class="has-text-grey is-abbr-like">Dec
                      20, 2020</small></td>
                    <td class="is-actions-cell">
                      <div class="buttons is-right"><a href="#/client/15" class="button is-small is-primary"><span
                        class="icon is-small"><i class="mdi mdi-account-edit"></i></span></a>
                        <button type="button" class="button is-small is-danger"><span class="icon is-small"><i
                          class="mdi mdi-trash-can"></i></span></button>
                      </div>
                    </td>
                  </tr>
                  <tr draggable="false" class="">
                    <td class="checkbox-cell"><label class="b-checkbox checkbox"><input type="checkbox"
                                                                                        true-value="true" value="false"><span
                      class="check"></span><span class="control-label"></span></label></td>
                    <td class="has-no-head-mobile is-image-cell">
                      <div class="image"><img src="https://avatars.dicebear.com/v2/gridy/Kurt-Auer.svg"
                                              class="is-rounded"></div>
                    </td>
                    <td data-label="Name" class=""> Kurt Auer</td>
                    <td data-label="Company" class=""> Stracke, Kilback and Greenfelder</td>
                    <td data-label="City" class=""> Kilbackfort</td>
                    <td data-label="Progress" class="is-progress-col">
                      <progress max="100" class="progress is-small is-primary" value="82">82</progress>
                    </td>
                    <td data-label="Created" class=""><small title="Jul 31, 2020" class="has-text-grey is-abbr-like">Jul
                      31, 2020</small></td>
                    <td class="is-actions-cell">
                      <div class="buttons is-right"><a href="#/client/38" class="button is-small is-primary"><span
                        class="icon is-small"><i class="mdi mdi-account-edit"></i></span></a>
                        <button type="button" class="button is-small is-danger"><span class="icon is-small"><i
                          class="mdi mdi-trash-can"></i></span></button>
                      </div>
                    </td>
                  </tr>
                  <tr draggable="false" class="">
                    <td class="checkbox-cell"><label class="b-checkbox checkbox"><input type="checkbox"
                                                                                        true-value="true" value="false"><span
                      class="check"></span><span class="control-label"></span></label></td>
                    <td class="has-no-head-mobile is-image-cell">
                      <div class="image"><img src="https://avatars.dicebear.com/v2/gridy/Lauriane-Brakus.svg"
                                              class="is-rounded"></div>
                    </td>
                    <td data-label="Name" class=""> Lauriane Brakus</td>
                    <td data-label="Company" class=""> Turcotte, Schmitt and Gottlieb</td>
                    <td data-label="City" class=""> Lake Natalia</td>
                    <td data-label="Progress" class="is-progress-col">
                      <progress max="100" class="progress is-small is-primary" value="78">78</progress>
                    </td>
                    <td data-label="Created" class=""><small title="Dec 23, 2020" class="has-text-grey is-abbr-like">Dec
                      23, 2020</small></td>
                    <td class="is-actions-cell">
                      <div class="buttons is-right"><a href="#/client/9" class="button is-small is-primary"><span
                        class="icon is-small"><i class="mdi mdi-account-edit"></i></span></a>
                        <button type="button" class="button is-small is-danger"><span class="icon is-small"><i
                          class="mdi mdi-trash-can"></i></span></button>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="top level">
                <div class="level-left"></div>
                <div class="level-right">
                  <div class="level-item">
                    <nav class="pagination"><a role="button" href="#" disabled="disabled"
                                               class="pagination-link pagination-previous"><span class="icon"
                                                                                                 aria-hidden="true"><i
                      class="mdi mdi-chevron-left mdi-24px"></i></span></a><a role="button" href="#"
                                                                              class="pagination-link pagination-next"><span
                      class="icon" aria-hidden="true"><i class="mdi mdi-chevron-right mdi-24px"></i></span></a>
                      <ul class="pagination-list">
                        <li><a role="button" href="#" aria-current="true" class="pagination-link is-current ">1</a></li>
                        <li><a role="button" href="#" class="pagination-link">2</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <hr>

      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div class="card is-card-widget tile is-child">

            <header class="card-header"><p class="card-header-title"><span class="icon"><i
              class="mdi mdi-arrow-up-bold default"></i></span><span><b>384</b> in <b>Aug, 2020</b></span></p>
              <button type="button" class="button is-small"><span class="icon"><i class="mdi mdi-settings default"></i></span>
              </button>
            </header>

            <div class="card-content">
              <div class="level is-mobile">
                <div class="level-item">
                  <div class="is-widget-label"><h3 class="subtitle is-spaced"> Clients </h3>
                    <h1 class="title">
                      <div> 512</div>
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
        <div class="tile is-parent">
          <div class="card is-card-widget tile is-child">
            <header class="card-header"><p class="card-header-title"><span class="icon"><i
              class="mdi mdi-arrow-up-bold default"></i></span><span><b>$7,000</b> in <b>Aug, 2020</b></span></p>
              <button type="button" class="button is-small"><span class="icon"><i class="mdi mdi-settings default"></i></span>
              </button>
            </header>
            <div class="card-content">
              <div class="level is-mobile">
                <div class="level-item">
                  <div class="is-widget-label"><h3 class="subtitle is-spaced"> Sales </h3>
                    <h1 class="title">
                      <div> $7,770</div>
                    </h1>
                  </div>
                </div>
                <div class="level-item has-widget-icon">
                  <div class="is-widget-icon"><span class="icon has-text-info is-large"><i
                    class="mdi mdi-cart-outline mdi-48px"></i></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="card is-card-widget tile is-child">
            <header class="card-header">
              <p class="card-header-title">
                <span class="icon">
                  <i class="mdi mdi-arrow-down-bold default"></i>
                </span>
                <span>
                <b>384%</b> in <b>Aug, 2020</b>
              </span>
              </p>
              <button type="button" class="button is-small">
                <span class="icon">
                  <i class="mdi mdi-settings default"></i>
                </span>
              </button>
            </header>


            <div class="card-content">
              <div class="level is-mobile">
                <div class="level-item">
                  <div class="is-widget-label">
                    <h3 class="subtitle is-spaced"> Performance </h3>
                    <h1 class="title">
                      <div> 256%</div>
                    </h1>
                  </div>
                </div>

                <div class="level-item has-widget-icon">
                  <div class="is-widget-icon">
                    <span class="icon has-text-success is-large">
                      <i class="mdi mdi-chart-timeline-variant mdi-48px"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tile is-parent">
          <div class="card is-card-widget tile is-child">
            <header class="card-header">
              <p class="card-header-title">
                <span class="icon">
                  <i class="mdi mdi-arrow-down-bold default"></i>
                </span>
                <span>
                  <b>64</b> in <b>Aug, 2020</b></span>
              </p>
              <button type="button" class="button is-small">
                <span class="icon">
                  <i class="mdi mdi-settings default"></i>
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="level is-mobile">
                <div class="level-item">
                  <div class="is-widget-label">
                    <h3 class="subtitle is-spaced"> Alerts </h3>
                    <h1 class="title">
                      <div> 32</div>
                    </h1>
                  </div>
                </div>
                <div class="level-item has-widget-icon">
                  <div class="is-widget-icon">
                    <span class="icon has-text-danger is-large">
                      <i class="mdi mdi-bell mdi-48px"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
  import { ToastService } from '@/services/toast.service';

  export default {
    provide: {
      toastService: new ToastService(),
    },
  };
</script>
