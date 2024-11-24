<template>
  <svg :class="svgClass" aria-hidden="true" v-bind="$attrs">
    <use :xlink:href="iconPath" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    prefix: {
      type: String,
      default: 'icon'
    },
    viewBox: {
      type: String,
      default: '0 0 24 24'
    }
  },
  computed: {
    iconPath() {
      return `#${this.prefix}-${this.name}`
    },
    svgClass() {
      return `svg-icon ${this.prefix}-${this.name}`
    }
  }
}
</script>

<style scoped>
.svg-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
