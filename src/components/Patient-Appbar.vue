<template>
  <div>
    <v-app-bar
      app
      flat
      color="grey lighten-4"
      >
      <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-light.font-italic light-blue--text pl-10" >
                Health Care Application
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text router to="/">
        <span>Sign Out</span>
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
  
     <v-navigation-drawer app v-model="drawer" class="light-blue">
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
           { icon: 'mdi-account-plus', text: 'Appointments', route: '/appointments' },
	   { icon: 'mdi-history', text: 'Download Documents', route: '/view-records' },
           { icon: 'mdi-logout', text: 'Logout', route:'/'}
      ]
    }
  }
}
</script>

<style>
</style>
