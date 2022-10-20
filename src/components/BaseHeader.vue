<template>
    <header>
        <div >
            <base-button>ratio</base-button>
            <div class="sep"/>
            <signin-button>Login</signin-button>
        </div>
        <h4>{{result}}</h4>
    </header>
</template>

<script>

import BaseButton from './BaseButton.vue'
import SigninButton from './SigninButton.vue'

export default {
  name: 'BaseHeader',
  components: {
    BaseButton,
    SigninButton
  },
  data: () => ({
    result: ''  
  }),
  methods: {

  }
}

</script>


<style scoped>

header {
    background-color: blueviolet;
    padding: 1em;
}

div {
    color: aqua;
    display: flex;
    justify-content: center;
}

.sep {
    flex-grow: 1;
}

</style>