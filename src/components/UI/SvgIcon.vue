<template>
  <svg :class="svgClass" aria-hidden="true" :width="width" :height="height" :viewBox="viewBox">
    <component :is="icon" />
  </svg>
</template>

<script>
import icons from '@/assets/icons'

export default {
  name: 'SvgIcons',
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '24'
    },
    height: {
      type: String,
      default: '24'
    },
    viewBox: {
      type: String,
      default: '0 0 24 24'
    }
  },
  computed: {
    svgClass() {
      return `svg-icon ${this.className}`
    },
    icon() {
      return icons[this.name]
    }
  }
}
</script>
