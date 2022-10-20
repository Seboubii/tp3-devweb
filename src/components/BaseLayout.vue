
<template>

  <div>
    <base-header @displayUser = "fetchData($events)" />
    <slot />
    <base-footer />
  </div>

</template>

<script>

import BaseHeader from './BaseHeader.vue'
import BaseFooter from './BaseFooter.vue'

export default {
  name: 'BaseLayout',
  components: {
    BaseHeader,
    BaseFooter
  },
  data: () => ({
    result:''
  }),
  methods: {
    fetchData(data){
      this.result = data
      console.log("ratio")
    }
  }
}

</script>


