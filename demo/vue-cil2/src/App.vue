<template>
  <div id="app">
    <keep-alive>
      <router-view  v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view  v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
    import VConsole from 'vconsole'
    import {getChannelApp} from './tools/utils.js'
    export default {
    name: 'App',
        data(){
          return{
              channel:'',
              linkUrl:'//m.jr.jd.com/insurance/myInsurance/1.0.0/insuranceCenter'
          }
        },
        created(){
          this.getChannelLink();
        },
        mounted(){
            // new VConsole();
            //   if (window.data_source_100001156.shareData) {
            //       window.share.setShare(window.data_source_100001156.shareData)
            //
            //   }
        },
        updated(){
            window.share.setShare({
                "title": "你的保单都在这里了，保障流程一手掌控！",
                "desc": "全面保单管理，买保险变得如此轻松",
                "link": this.linkUrl,
                "imgUrl": "https://img12.360buyimg.com/jrpmobile/jfs/t26530/279/2004615210/80362/3474d327/5bfbdeceN2dcd0ccd.jpg?width=310&height=310"
            });
        },
        methods:{
            async getChannelLink(){
                this.channel = await getChannelApp();
                if(this.channel === '4'){
                    // 京东商城
                    this.linkUrl = '//m.jr.jd.com/insurance/myInsurance/1.0.0/insuranceCenter?source=share&resourcePlace=shareJDXQ'
                }else if(this.channel === '3'){
                    // 京东金融
                    this.linkUrl = '//m.jr.jd.com/insurance/myInsurance/1.0.0/insuranceCenter?source=share&resourcePlace=shareJRXQ'
                }else {
                    // 其他
                    this.linkUrl = '//m.jr.jd.com/insurance/myInsurance/1.0.0/insuranceCenter?source=share&resourcePlace=shareother'
                }
            }
        }
}
</script>

<style  rel="stylesheet/scss" lang="scss" type="text/scss">
  /*@import "./assets/scss/common/_rem.scss";*/
  /*@import "./assets/scss/common/_base.scss";*/
</style>
