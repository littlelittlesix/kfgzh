<template>
  <div class="hello">
    {{openid}}
    这次的项目是桂林公众号的开发
  </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                code: '',
                openid: ''
            }
        },
        methods: {
            getQueryVariable(variable) {
                var query = window.location.search.substring(1);
                var vars = query.split("&");
                for (var i = 0; i < vars.length; i++) {
                    var pair = vars[i].split("=");
                    if (pair[0] == variable) {
                        return pair[1];
                    }
                }
                return (false);
            }
        },
        mounted() {
            console.log('code: ' + this.getQueryVariable("code"));
            this.code = this.getQueryVariable("code");
            this.$axios.get('https:/www.juntaitec.cn/api/auth?code=' + this.code).then(res => {
                console.log(res);
                this.openid=res.data.openid;
            });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
