<template>
  <div class="set-style">
    <el-tabs>
      <el-tab-pane label="图表">
        <div class="chartsStyle">
          <div class="chart-title">
            <tr style="height: 30px; "><el-checkbox v-model="showTitle">显示标题</el-checkbox></tr>
            <tr style="height: 30px; ">
              <span style="margin-left: 24px; ">标题</span>
              <el-input v-model="inputTitle" @change="changeTitle"
              size="mini" style="width: 102px; margin-left: 5px; "></el-input>
            </tr>
          </div>
          <div class="chart-background" style="margin-top: 20px; ">
            <tr style="height: 30px; ">背景</tr>
            <tr style="height: 30px;">
              <div style="margin-left: 24px; position: absolute;">背景颜色</div>
              <div style="position: absolute; margin-left: 80px; margin-top: -6px; ">
                <el-color-picker v-model="cbackground" show-alpha size="mini"></el-color-picker>
              </div>
            </tr>
            <tr style="height: 37px; ">
              <div :style="{marginLeft: '24px',background: cbackground,borderRadius: '5px'}">{{cbackground}}</div>
            </tr>
            <tr style="height: 37px;">
              <div style="margin-left: 24px; position: absolute;">调色盘</div>
              <div style="position: absolute; margin-left: 68px; margin-top: -6px; ">
                <el-color-picker v-model="itemColor" show-alpha size="mini"></el-color-picker>
              </div>
            </tr>
            <tr style="height: 20px; ">
              <div :style="{marginLeft: '24px',background: itemColor,borderRadius: '5px'}">{{itemColor}}</div>
            </tr>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="分类"></el-tab-pane>
      <el-tab-pane label="主值"></el-tab-pane>
      <el-tab-pane label="次值"></el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>

export default {
  name: 'setStyle',
  data() {
    return {
      showTitle: false,
      inputTitle: '',
      tempTitle: '',
      cbackground: '',
      tempBackground: '',
      itemColor: '',
      tempItem: ''
    }
  },
  watch: {
    "$store.state.changeFlag": function(val) {
      if(val == 'histogram' || val == 'line' || val == 'scatter')
      this.inputTitle = this.tempTitle = this.$store.state.chartTitle
      this.showTitle = true
      this.cbackground = this.tempBackground = this.$store.state.chartBackground
      this.itemColor = this.tempItem = this.$store.state.itemColor
    },
    showTitle(val) {
      if(val == false) {
        this.$store.state.chartTitle = ''
      }
      else if(this.tempTitle!='') {
        this.$store.state.chartTitle = this.tempTitle
      }
    },
    cbackground(val) {
      if(val!=this.tempBackground) {
        this.$store.state.chartBackground = val
      }
    },
    itemColor(val) {
      if(val!=this.tempItem) {
        this.$store.state.itemColor = val
      }
    }
  },
  methods: {
    changeTitle(val) {
      this.$store.state.chartTitle = val
    }
  },
  components: {
  }
}
</script>

<style scoped>
.chartsStyle {
  text-align: left;
}
</style>
