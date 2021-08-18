<template>
  <div>
    <BirthUploadHeader />
    <BirthUploadMain />
  </div>
</template>

<script>
    import BirthUploadHeader from "./BirthUploadHeader";
    import BirthUploadMain from "./BirthUploadMain";
    export default {
        name: "BirthUpload",
        components: {BirthUploadMain, BirthUploadHeader}
    }
</script>

<style scoped>

</style>
