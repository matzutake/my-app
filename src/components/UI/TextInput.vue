<template>
  <div class="text-input">
    <slot name="left-icon" />

    <div class="text-input__inner">
      <input :type="type === 'password' ? 'password' : 'text'" class="text-input__input" required />

      <div class="text-input__label">
        <slot name="label" />
      </div>
    </div>

    <slot name="right-icon" />
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
  display: flex
  border-bottom: 1px solid #CCCCCC
  padding: 6px 4px

  &__inner
    position: relative

  &__label
    color: #999999
    font-size: 14px
    line-height: 20px
    position: absolute
    pointer-events: none
    top: 25%
    transition: 200ms

  &__input
    width: 100%
    border: none
    outline: none
    font-size: 14px
    line-height: 20px
    caret-color: #50B053

    &:focus + .text-input__label
      top: -100%
      color: #50B053
      font-size: 12px

    &:valid + .text-input__label
      top: -100%
      font-size: 12px
</style>
