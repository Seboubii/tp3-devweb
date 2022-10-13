<template>
    <header>
        <div>
            <base-button>ratio</base-button>
            <div class="sep"/>
            <base-button>ratiette</base-button>
        </div>
    </header>
</template>

<script>

import BaseButton from './BaseButton.vue'

export default {
  name: 'BaseHeader',
  components: {
    BaseButton
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