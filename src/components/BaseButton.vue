<template>
    <button 
      class="button"
      :style="getCssVariables"
    >
      <slot />
    </button>
  </template>
  
  <script>
  const colorPalette = {
    primary: { bg: '#42b983', hoverBg: '#4cce93', focusBorder: 'black' },
    warn: { bg: '#ff5722', hoverBg: '#ff7043', focusBorder: 'black' },
    danger: { bg: '#e53935', hoverBg: '#ef5350', focusBorder: 'black' },
  }
  export default {
    name: 'BaseButton',
    props: {
      color: {
        type: /** @type {import('vue').PropType<keyof colorPalette>} */ (String),
        default: 'primary',
        validator: (/** @type {string} */ color) => color in colorPalette
      }
    },
    computed: {
      getCssVariables () {
        return {
          '--button-background-color': colorPalette[this.color].bg,
          '--button-hover-background-color':  colorPalette[this.color].hoverBg,
          '--button-focus-boder': colorPalette[this.color].focusBorder
        }
      }
    }
  }
  </script>
  
  <style scoped>
    .button {
      padding: 0.75em;
      background-color: var(--button-background-color);
      border: none;
      color: white;
      border-radius: 0.25em;
      font-weight: bold;
      transition: background-color 0.3s ease-in-out;
    }
    .button:hover {
      background-color: var(--button-hover-background-color);
    }
    .button:active {
      padding: calc(0.75em - 2px);
      border: 2px solid var(--button-focus-boder);
    }
    .button:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  </style>