<template>
  <button 
      class="button"
      @click="GetUser"
    >
    <p v-if ="user ===''">sign in</p>
    <p v-else>Logged as {{user}}</p>
    </button>
</template>

<script>

import {signInAndGetUser} from '../lib/microsoftGraph.js';
export default {
    name:'SigninButton',
    methods:{
        GetUser(){
            const promise = new Promise(function(resolve){
                resolve(signInAndGetUser())
            })
            promise.then(user =>{
                 this.user = user.name;
            }).catch(err => console.log(err))

        }
    },
    data(){
        return {
            user: ''
        }
    }
}

</script>



<style>
    .button {
      padding: 0.75em;
      background-color: lightgreen;
      border: none;
      color: white;
      border-radius: 0.25em;
      font-weight: bold;
      transition: background-color 0.3s ease-in-out;
    }
    .button:hover {
      background-color: green;
    }
    .button:active {
      padding: calc(0.75em - 2px);
      border: 2px solid black;
    }
    .button:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
</style>