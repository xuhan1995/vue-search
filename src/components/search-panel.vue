<template>
  <div>
    <logo-select />
    I'm select-panel
  </div>
</template>

<script type="text/javascript">

import logoSelect from './logo-select'

  export default {
    name:'select-panel',
    components:{
      'logo-select':logoSelect,
    },
    data:() => ({
          show: true,
        })
  }
</script>

<style type="text/css">

</style>