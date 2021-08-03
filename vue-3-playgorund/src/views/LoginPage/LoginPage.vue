
<template>
  <v-container
    fluid
    tag="section"
    class="d-flex flex-column align-center fill-height"
  >
    <v-card width="560" class="pa-2 pa-sm-16 remove-card-shadow mt-sm-11">
      <img
        src="@/assets/ematrica-logo_2x.png"
        alt="E-matrica logo"
        class="card-top-logo"
      />
      <h4 class="text-h4 blue--text text--darken-4 pb-4">
        {{ $t("LOGINPAGE.HEADER") }}
      </h4>
      Belépés
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
// import TextInput from "@/components/forms/input/TextInput.vue";
// import { ERoutes } from "@/core/dataTypes/enum";
// import { LoginRequest } from "@/core/dataTypes/types";
// import { userFacade } from "@/store/modules/user/user.facade";
// import { alertFacade } from "@/store/modules/alert/alert.facade";
// import { cryptoSHA1 } from "@/core/utils/crypto/cryptoHelpers";

import router from "@/router";
export default defineComponent({
  name: "Login",
  components: {
    // TextInput,
  },
  setup() {
    /*const alert = computed(alertFacade.alert);
    const formValues = reactive({
      email: "",
      password: "",
    });
    const loginLoading = computed(userFacade.loginLoading);

    const login = () => {
      const form: LoginRequest = {
        password: cryptoSHA1(formValues.password),
        login: formValues.email,
      };
      userFacade.login(form).then(() => router.push(ERoutes.DASHBOARD));
    };*/

    return {
      // formValues,
      // loginLoading,
      // login,
      // ERoutes,
      // alert,
    };
  },
});
</script>


<!--
<template>
  <v-container
    fluid
    tag="section"
    class="d-flex flex-column align-center fill-height"
  >
    <v-card width="560" class="pa-2 pa-sm-16 remove-card-shadow mt-sm-11">
      <img
        src="@/assets/ematrica-logo_2x.png"
        alt="E-matrica logo"
        class="card-top-logo"
      />
      <h4 class="text-h4 blue&#45;&#45;text text&#45;&#45;darken-4 pb-4">
        {{ $t("LOGINPAGE.HEADER") }}
      </h4>
      <ValidationObserver v-slot="{ invalid }">
        <form @submit.prevent="login">
          <ValidationProvider
            :name="$t('LOGINPAGE.FIELDS.EMAIL')"
            rules="required|emailWithAccent"
            v-slot="{ errors }"
          >
            <TextInput
              v-model="formValues.email"
              id="loginEmail"
              name="email"
              :outlined="false"
              :error-messages="errors"
              :label="$t('LOGINPAGE.FIELDS.EMAIL')"
              required
            />
          </ValidationProvider>

          <ValidationProvider
            :name="$t('LOGINPAGE.FIELDS.PASSWORD')"
            rules="required"
            v-slot="{ errors }"
          >
            <TextInput
              v-model="formValues.password"
              id="loginPassword"
              name="Jelszó"
              :label="$t('LOGINPAGE.FIELDS.PASSWORD')"
              :outlined="false"
              :error-messages="errors[0]"
              :showPasswordEye="true"
              required
            />
          </ValidationProvider>
          <div class="text-right pb-6">
            <router-link
              :to="ERoutes.FORGOTTEN_PASSWORD"
              class="text-decoration-underline forgottenBtn"
              >{{ $t("LOGINPAGE.LINKS.FORGOTTEN_PASSWORD") }}
            </router-link>
          </div>
          <v-btn
            block
            type="submit"
            color="primary"
            :disabled="invalid"
            :loading="loginLoading"
            :depressed="true"
            >{{ $t("LOGINPAGE.BUTTONS.LOGIN") }}
          </v-btn>
          <div class="text-center mt-6">
            <router-link
              :to="ERoutes.REGISTRATION"
              class="text-decoration-underline forgottenBtn"
              >{{ $t("LOGINPAGE.LINKS.REGISTRATION") }}
            </router-link>
          </div>
        </form>
      </ValidationObserver>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "@vue/composition-api";
import TextInput from "@/components/forms/input/TextInput.vue";
import { ERoutes } from "@/core/dataTypes/enum";
import { LoginRequest } from "@/core/dataTypes/types";
import { userFacade } from "@/store/modules/user/user.facade";
import { alertFacade } from "@/store/modules/alert/alert.facade";
import router from "@/router";
import { cryptoSHA1 } from "@/core/utils/crypto/cryptoHelpers";

export default defineComponent({
  name: "Login",
  components: {
    TextInput,
  },
  setup() {
    const alert = computed(alertFacade.alert);
    const formValues = reactive({
      email: "",
      password: "",
    });
    const loginLoading = computed(userFacade.loginLoading);

    const login = () => {
      const form: LoginRequest = {
        password: cryptoSHA1(formValues.password),
        login: formValues.email,
      };
      userFacade.login(form).then(() => router.push(ERoutes.DASHBOARD));
    };

    return {
      formValues,
      loginLoading,
      login,
      ERoutes,
      alert,
    };
  },
});
</script>
-->
