<template>
    <div class="notifi">
        <degreeHeader/>
        <router-view></router-view>
    </div>
</template>

<script>
import degreeHeader from "./degreeHeader";
import degreeMain from "./degreeMain";
export default {
    name:'notification',
    components: {degreeHeader,degreeMain}
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
    .notifi{
        height: 950px;
        width: 650px;
        margin: 0px auto;
        background-color: rgba(255, 255, 255, 0.199);
    }

</style>
