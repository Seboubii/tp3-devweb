<template>
    <!--<img id="amogus" alt="Vue logo" src="D:\EFREI\M1\S7\Web Dev\tp3\src\assets\amogus.png">-->
    <div>
        <p>Here comes the content of the HomePage.</p> 
        <br>
        <button class="button"> ratio </button>
        <button disabled class="button">aaaa</button>
    </div>

</template>

  <script>
  
  export default {
    name: 'HomePage',
  }
  </script>

  <style scoped>

  div {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .button {
    padding: 0.75em;
    background-color: green;
    border: none;
    color: white;
    border-radius: 0.25em;
    font-weight: bold;
    transition: background-color 0.3s ease-in-out;
    margin: 5px;
  }

  .button:hover {
    background-color: lightgreen;
  }

  .button:active {
    border: 2px solid black;
    padding: calc(0.75em - 2px);
  }

  .button:disabled {
    background-color: lightgoldenrodyellow;
    cursor:not-allowed;
    pointer-events: none;
  }
  </style>
  