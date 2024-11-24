<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    style="position: absolute; width: 0; height: 0"
  >
    <defs>
      <symbol
        v-for="icon in icons"
        :id="`${iconPrefix}-${icon.name}`"
        :key="icon.name"
        :viewBox="icon.viewBox"
      >
        <path :d="icon.data" />
      </symbol>
    </defs>
  </svg>
</template>

<script>
export default {
  name: 'SvgIconsCollection',
  data() {
    // eslint-disable-next-line no-undef
    const icons = require.context('@/assets/icons/', false, /\.svg$/)
    const iconPrefix = 'icon'

    const loadedIcons = icons.keys().map((key) => {
      const path = icons(key).default
      const name = key.replace(/^\.\/(.+)\.svg$/, '$1')
      const viewBox = path.match(/viewBox="(.+?)"/)[1]
      const data = path.match(/<path[^>]*>(.*?)<\/path>/)[1]

      return { name, viewBox, data }
    })

    return {
      icons: loadedIcons,
      iconPrefix
    }
  }
}
</script>
