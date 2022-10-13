
<template>

    <div>
        <base-header>ratio</base-header> 
        <home-page>test</home-page>
        <base-footer>ratiette</base-footer> 
    </div>

</template>

<style scoped>
div {
  min-height: 98vh;
  display:flex;
  flex-direction: column;
}

home-page {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
}

base-header {
  background-color: #42b983;
  color : #660ca7;
  justify-content: center;
  display: flex;
}
base-footer {
  background-color: #660ca7;
  color : #42b983;
  justify-content: center;
  display: flex;
}
</style>