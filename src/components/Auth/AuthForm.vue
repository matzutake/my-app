<template>
  <div class="auth-form">
    <header class="auth-form__header">
      <h1 class="auth-form__title">Авторизация</h1>
    </header>

    <main class="auth-form__main">
      <TextInput type="phone">
        <template #left-icon>
          <SvgIcon name="phone" class="phone-icon" />
        </template>
        <template #label>Логин или Телефон</template>
      </TextInput>

      <TextInput type="password">
        <template #left-icon>
          <SvgIcon name="block" class="block-icon" />
        </template>
        <template #label>Пароль</template>
        <template #right-icon>
          <SvgIcon name="eye" class="eye-icon" />
        </template>
      </TextInput>
    </main>

    <footer class="auth-form__footer">
      <CommonButton @click="login">
        <template #text>Войти</template>
      </CommonButton>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AuthForm',
  methods: {
    login() {}
  }
}
</script>

<style lang="sass" scoped>
.auth-form
  background-color: #ffffff
  border-radius: 5px
  width: 340px
  height: 290px
  display: flex
  flex-direction: column
  justify-content: space-between
  padding: 20px 16px

  &__header
    background-color: #44A248
    color: #ffffff
    display: flex
    justify-content: center
    align-items: center
    border-radius: 5px
    padding: 18px 102px
    transform: translateY(-36px)

  &__title
    letter-spacing: 0.5px
    font-size: 16px
    font-weight: 500
    line-height: 20px

  &__main
    display: flex
    flex-direction: column
    padding-top: 16px
    flex: 1
    gap: 16px


  &__footer
    display: flex
    justify-content: center
</style>
