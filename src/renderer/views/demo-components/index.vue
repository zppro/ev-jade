<template lang="pug">
  .components
    transition(mode='out-in', enter-active-class='fadeIn', leave-active-class='fadeOut', appear='')
      router-view.animated
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
</style>
<script type="text/ecmascript-6">
</script>