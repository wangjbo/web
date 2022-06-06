<template lang="">
    <div class="header">
        <mu-appbar  :color="background">
            <span style="cursor:pointer">
                Manmba Mentality
            </span>
            <mu-button @click="go(item)" v-show="isPC" flat slot="right" v-for="(item,index) in info.menu" :key="item.name" 
            :color="index===lightIndex ? '#0ee':'' "  >
                <mu-icon size="16" :value="item.icon"/>
                 {{item.name}}
            </mu-button >

            <!-- 菜单图标 -->
            <mu-button  v-show="!isPC" @click="toggleWapMenu(true)" icon slot="left">
                <mu-icon value="menu"></mu-icon>
            </mu-button>

            <!-- 响应式布局 -->
            <mu-bottom-sheet :open.sync="openWapMenu">
                <mu-list @item-click="toggleWapMenu(false)">
                    <mu-list-item button @click="go(item)" v-for="(item, index) in info.menu" :key="item.name">
                        <mu-list-item-action>
                            <mu-icon :value="item.icon" :color="index===lightIndex ? '#0ee':'' "></mu-icon>
                        </mu-list-item-action>
                        <mu-list-item-title :color="index===lightIndex ? '#0ee':'' ">{{item.name}}</mu-list-item-title>
                    </mu-list-item>
                </mu-list>
            </mu-bottom-sheet>


            <!-- 主题切换 -->
            <mu-button flat ref="theme" slot="right" @click="openTheme = !openTheme">
                <mu-icon value="color_lens"></mu-icon>
            </mu-button>
            <mu-popover :open.sync="openTheme" :trigger="triggerTheme">
            <mu-list>
                <mu-list-item button>
                <mu-list-item-title>dark</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button>
                <mu-list-item-title>light</mu-list-item-title>
                </mu-list-item>
            </mu-list>
            </mu-popover>

            <!-- 用户 -->
            <mu-button flat slot="right" ref="button" @click="openUser = !openUser">
                <div class="user">
                <span>fadsfadsgafsdfgasfsadafdsgsdafad</span>
                <mu-icon value="expand_more"></mu-icon>
                </div>
            </mu-button>
            <mu-popover :open.sync="openUser" :trigger="trigger">
                <mu-list>
                <mu-list-item button>
                    <mu-list-item-title>个人中心</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button>
                    <mu-list-item-title>退出登录</mu-list-item-title>
                </mu-list-item>
                </mu-list>
            </mu-popover>
        </mu-appbar>
    </div>
</template>
<script>
const menus = [
  {
    name: "首页",
    router: "index",
    icon: "home",
  },
  {
    name: "文章",
    router: "articles",
    icon: "note_add",
  },
  {
    name: "归档",
    router: "archives",
    icon: "drafts",
  },
  {
    name: "分类",
    router: "categories",
    icon: "dns",
  },
  {
    name: "标签",
    router: "tags",
    icon: "loyalty",
  },
  {
    name: "关于",
    router: "about",
    icon: "perm_identity",
  },
];

export default {
  name: "Header",
  props: {
    lightIndex: {
      type: Number,
      default: 0,
    },
    background: {
      type: String,
    },
  },
  data() {
    return {
      openWapMenu: false,
      openUser: false,
      openTheme: false,

      trigger: null,
      triggerTheme: null,
      info: {
        menu: menus,
      },
      isPC:true,
      screenWidth: document.body.clientWidth,
      visible: null,
      isCollapse: false,
    };
  },
  created() {
    window.onresize = () => {
      window.screenWidth = document.body.clientWidth;
      this.screenWidth = window.screenWidth;
      this.changeWidth(window.screenWidth);
      // this 是vc
      this.$bus.$emit('isPCFun',this.isPC)
    };
    // 窗口大小发生变化的时候，就会触发onresize函数
    window.onresize();
  },
  mounted() {
    this.triggerTheme = this.$refs.theme.$el;
    this.trigger = this.$refs.button.$el;
  },
  methods: {
    toggleWapMenu(flag) {
      this.openWapMenu = flag;
    },
    changeWidth(clientWidth) {
      // 主要根据 窗口变化 到一定位置时，变换样式
      if (clientWidth >= 1200) {
        // el-menu-vertical-demo el-menu-demo
        this.isPC = true
      } else {
        this.isPC = false
      } 
    },
    go(item){
        if(item.router === this.$router.name){
            return 
        }
        this.$router.push({
            name:item.router
        })
    }
  },
  computed: {},
};
</script>
<style lang="less" scoped>
.header {
  position: fixed;
  z-index: 1501;
  width: 100%;
  top: 0;
}

.mu-appbar {
  .mu-flat-button {
    flex: 1;
  }
  /deep/ .mu-appbar-right {
    flex: 1;
  }
}

.user {
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    display: block;
    width: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align: right;
  }
}
</style>