<template>
    <div>
        <router-view></router-view>
        <mz-footer></mz-footer>
    </div>
</template>
<script>
import MzFooter from '../components/MzFooter/Index'
export default {
  components: {
    MzFooter
  }
}
</script>
