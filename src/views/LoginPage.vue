<template>
  <div class="login-page">
    <AuthForm />
  </div>
</template>

<script>
import AuthForm from '@/components/Auth/AuthForm.vue'

export default {
  name: 'LoginPage',
  components: {
    AuthForm
  }
}
</script>

<style lang="sass" scoped>
.login-page
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-image: url('@/assets/img/login-bg.jpg')
  background-size: cover
  display: flex
  justify-content: center
  align-items: center
</style>
