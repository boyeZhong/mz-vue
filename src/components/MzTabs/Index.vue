<template>
  <div class="mz-tabs">
    <div class="tabs-bar-wrapper">
      <div class="tabs-bar">
        <ul class="tabs-nav">
          <li v-on:click="go('nowPlaying')" :class="{'active' : filmType === 'nowPlaying'}" style="width: 50%;">
            <span>正在热映</span>
          </li>
          <li v-on:click="go('comingSoon')" :class="{'active' : filmType === 'comingSoon'}" style="width: 50%;">
            <span>即将上映</span>
          </li>
          <div
            class="tab-ink-bar-wrapper"
            :style="[{width:'50%'},{transform: filmType === 'nowPlaying' ? 'translate3d(0%, 0px, 0px)' : 'translate3d(100%, 0px, 0px)'}]"
          >
            <span class="tab-ink-bar" style="width: 56px;"></span>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapState([
      'filmType'
    ])
  },
  methods: {
    ...mapMutations([
      'changeFilmType'
    ]),
    go (name) {
      this.changeFilmType(name);
      this.$router.replace('/films/' + name);
    }
  }
}
</script>
<style lang="less">
@import url('index.less');
</style>
