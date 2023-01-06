<template>
  <div class="module_home" >
    <!-- <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
      <el-tab-pane
        v-for="item in tabs"
        :key="item.name"
        :label="item.title"
        :name="item.name" >
        <iframe class="network_show" name="content_frame" :src="this.$route.query.link" frameborder=0  scrolling="no" :title="this.$route.query.desc" ></iframe>
      </el-tab-pane>
    </el-tabs> -->

    <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab" v-if="editableTabs !=null && editableTabs.length >0">
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name" >
      <iframe class="network_show" name="content_frame" :src="item.content" frameborder=0  scrolling="no" :title="item.title" ></iframe>
      </el-tab-pane>
    </el-tabs>
    
  </div>
</template>

<script>
export default {
  name: 'WebView',
  mounted(){
    //  console.log('======'+this.$route.query.link)
  },
  created(){
    console.log('======menuClicked')
    this.$bus.on('menuClicked',data=> this.addTab(data))
  },
  data () {
    return {
      editableTabsValue: '0',
      tabIndex: 0,
      editableTabs:[]
    }
  },
  methods:{
    addTab(tabData) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: tabData.name,
          name: newTabName,
          content: tabData.link
        });
        this.editableTabsValue = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.module_home {
    width: 100%;
    height: calc(100% - 14px);
}
.network_show{
  width: 100%;
  height: 100%;
}
.el-tabs{
  height: calc(100% - 36px);
}
.el-tab-pane{
  height: 100%;
}




</style>
