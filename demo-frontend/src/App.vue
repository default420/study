<template>
  <v-app>
    <v-navigation-drawer
      fixed
      clipped
      app
      v-model="navBar"
    >
      <v-list
        dense
        class="pt-0"
      >
        <router-link to="/">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/chart">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>graphic_eq</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Chart</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      dark
      color="primary"
      clipped-left
      fixed
      app
    >
      <v-toolbar-side-icon @click.stop="navBar = !navBar" />
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">
          MATERIAL DESIGN
        </span>
      </v-toolbar-title>

      <v-spacer />

      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">
          Latest Release
        </span>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <v-fade-transition mode="out-in">
          <router-view />
        </v-fade-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    navBar: null
  })
}
</script>

<style scoped>
a {
    text-decoration: none;
  }
</style>
