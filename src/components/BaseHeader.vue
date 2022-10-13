<template>
    <header>
        <div>
            ratio
            <div class="sep"/>
            ratial
        </div>
    </header>
</template>

<script>

export default {
  name: 'BaseHeader',
  components: {

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