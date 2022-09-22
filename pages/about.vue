<template>
  <div>
    <div class="red-b">テスト</div>
    about<br>
    <img src="@/assets/images/test.png" width="300">
    {{ now }}

  </div>
</template>

<script>
export default {
  data() {
    return {
      now: null
    }
  },
  mounted() {
    this.now = this.$dayjs().format('YYYY-MM-DD HH:mm:ss')
  }
}
</script>

<style>

</style>