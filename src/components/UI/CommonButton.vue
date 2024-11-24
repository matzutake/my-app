<template>
  <div class="common-button">
    <div class="common-button__text">
      <slot name="text" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonButton'
}
</script>

<style lang="sass" scoped>
.common-button
  width: fit-content
  background-color: #50B053
  color: #ffffff
  font-size: 14px
  font-weight: 400
  line-height: 20px
  text-align: center
  padding: 8px 35px
  border-radius: 4px
  box-shadow: 0 4px 4px #6AAE5E40
  cursor: pointer
  transition: background-color 0.3s

  &:hover
    background-color: #6AAE5E

  &__text
    user-select: none
</style>
