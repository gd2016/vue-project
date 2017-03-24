<template>
    <div>
        <h5>设置</h5>
        <Footers></Footers>
    </div>
</template>

<script>
import Footers from '../../components/footer'
import axios from 'axios'
export default {
  data(){
      return {

      }
  },
  components:{
      Footers
  },
  mounted(){
        axios.get('/api/settings')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
