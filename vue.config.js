import { defineConfig } from '@vue/cli-service'

export default defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          indentedSyntax: true
        }
      }
    }
  }
})
