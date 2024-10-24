<template>
  <q-layout view="lHh lpR fFf">

    <q-header bordered class="bg-white text-black row">
      <div class="col">
         <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="text-weight-bold">
          {{$route.name}}
        </q-toolbar-title>
      </q-toolbar>
      </div>

      <div class="col q-pa-sm">
         <q-input
        placeholder="search shop"
        rounded
        dense
        outlined
        >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      </div>

    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
    <div class="row">
      <div class="col">
        <q-icon
          class="q-pa-md"
          name="fas fa-solid fa-wine-bottle"
          size="lg"
          color="primary"
        />
      </div>
      <div class="q-pa-lg text-h6">welcome</div>
    </div>

    <q-separator size="7px" color="grey-5" />
    <q-list>
      <q-item
        to="/"
        clickable
        exact
        v-ripple>
        <q-item-section avatar>
          <q-icon  name="home" size="md" />
        </q-item-section>

        <q-item-section class="text-h6 ">HOME</q-item-section>
      </q-item>

      <q-separator size="5px"/>

      <q-item
        to="/VIEW CART"
        clickable
        exact
        v-ripple>
        <q-item-section avatar>


          <span size="lg" class="material-icons q-pa-md">
            shopping_cart
          </span>
        </q-item-section>

        <q-item-section class="text-h6 ">VIEW CART</q-item-section>
      </q-item>

      <q-separator size="5px"/>
      <q-item
        to="/SIGN IN"
        clickable
        exact
        v-ripple>
        <q-item-section avatar>
        </q-item-section>

        <q-item-section class="text-h6 ">SIGN IN</q-item-section>
      </q-item>

      <q-separator size="5px"/>
      <q-item
        to="/SIGN UP"
        clickable
        exact
        v-ripple>
        <q-item-section avatar>
        </q-item-section>

        <q-item-section class="text-h6 ">SIGN UP</q-item-section>
      </q-item>

    </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>

</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
