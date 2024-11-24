<template>
  <div class="text-input">
    <SvgIcon name="phone" />
    <input type="text" class="text-input__input" required />

    <div class="text-input__label">
      <slot name="label" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style lang="sass" scoped>
.text-input
  position: relative
  display: flex
  flex-direction: column
  border-bottom: 1px solid #CCCCCC
  padding: 8px 4px


  &__label
    color: #999999
    font-size: 14px
    line-height: 20px
    position: absolute
    pointer-events: none
    top: 50%
    transition: 200ms

  &__input
    width: 100%
    border: none
    outline: none
    font-size: 14px
    line-height: 20px
    caret-color: #50B053

    &:focus + .text-input__label
      top: 0
      color: #50B053
      font-size: 12px

    &:valid + .text-input__label
      top: 0
      font-size: 12px
</style>
