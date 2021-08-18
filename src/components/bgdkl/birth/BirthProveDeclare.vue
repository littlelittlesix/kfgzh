<template>
  <div class="birth">
    <BirthHeader />
    <BirthMain />
  </div>

</template>

<script>
  import BirthHeader from "./BirthHeader";
  import BirthMain from "./BirthMain";
  import BirthFooter from "./BirthFooter";
    export default {
        name: "BirthProveDeclare",
        components: {BirthFooter, BirthMain, BirthHeader},
        data(){
            return{
                mainText:""
            }
        }
    }
</script>
<style scoped>
</style>
