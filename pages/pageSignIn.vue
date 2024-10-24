<template>
  <div class="row">

    <div class="col-lg-7 col-md-7 col-sm-7">
      <q-img src="~/assets/locking.gif" style="height:900px" ></q-img>
    </div>

    <div class="col-lg-5 col-md-5 col-sm-5 q-pa-md">
      <div class="">
        <div class="text-h5 text-bold text-center q-pt-xl q-mt-sm">Login to continue</div>
        <div  class="q-pa-md">
          <q-input v-model="email" placeholder="Email" outlined ></q-input>
          <q-input v-model="password" placeholder="Password" outlined type="password" ></q-input>
        </div>
        <div class="q-pa-sm">
          <q-checkbox v-model="check" label="Remember me"></q-checkbox>
            <a href="" class="float-right">Forgot password?</a>
          <q-btn label="Login" style="width:100%" class="q-pa-sm bg-light-blue-5"></q-btn>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageSignIn',
  data: () => {
    return{
      check: false,
      email: '',
      password: ''
    }
  }
})
</script>
