/**
 * Des
 * Created by wangxiaoxin on 2018/11/17.
 * E-mail duqichao@jd.com
 * Update 2018/11/17
 */


// 浏览器信息
export function getBrowserInfo (app) {
    var ua = navigator.userAgent.toLowerCase()
    var isIos = ua.indexOf('ipad') > -1 || ua.indexOf('iphone') > -1 || false
    var inWx = ua.indexOf('micromessenger') > -1 || false
    var inJdApp = ua.indexOf('jdapp') > -1 || false
    var inJrApp = ua.indexOf('jdjr') > -1 || ua.indexOf('android-async-http') > -1 || false
    var inWyApp = ua.indexOf('WalletClient') > -1 || false
    var resultObj = {
        isIos: isIos,
        inWx: inWx,
        inJdApp: inJdApp,
        inJrApp: inJrApp,
        inWyApp: inWyApp
    }
    return resultObj[app]
}

// 获取当前渠道
export function getChannelApp () {
    var channel = ''
    if (getBrowserInfo('inJdApp')) {
        channel = '4'
    } else if (getBrowserInfo('inJrApp')) {
        channel = '3'
    } else if (getBrowserInfo('inWx')) {
        channel = '2'
    } else {
        channel = '1'
    }
    return channel
}

// 获取路由参数
export function getUrlKey (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) {
        return unescape(r[2])
    }
    return null
}

//跳转到金融原生保险首页195
export function goJrNativeInsuranceHome(jumpUrl) {
    // 京东金融
    window.jrBridge = window.jrBridge || window.jsBridgeV3.onReady();
    // var defer = window.jsBridgeV3.onReady();
    window.jrBridge.then(function () {
        this.jsOpenWeb({        //跳转到金融APP原生模块
            jumpUrl: jumpUrl,
            jumpType: 6,
            productId: '',
            isclose: false
        });
    });
}
//本地下载
export function localDownLoad(url) {
    let src = url;
    let iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = "javascript: '<script>location.href=\"" + src + "\"<\/script>'";
    document.getElementsByTagName('body')[0].appendChild(iframe);
}
/*格式化时间戳*/
export function timestampToTime (timestamp) {
    let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    let D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
    let h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':';
    let m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) + ':';
    let s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
    return Y+M+D+h+m+s;
    // return Y+M+D;
}
// 判断渠道
// export function getChannel () {
//     this.channel = getChannelApp();
//     if (this.channel === '4') {
//         // 京东商城
//         this.bottomBannerUrl = this.safeDetailsInfor.bannerH5Url;
//         this.detailMoreBtn = this.safeDetailsInfor.moreH5Url;
//     } else if (this.channel === '3') {
//         // 京东金融
//         this.bottomBannerUrl = this.safeDetailsInfor.bannerNativeUrl;
//         this.detailMoreBtn = this.safeDetailsInfor.moreNativeUrl;
//     } else if (this.channel === '2') {
//         // 微信
//         this.bottomBannerUrl = this.safeDetailsInfor.bannerH5Url;
//         this.detailMoreBtn = this.safeDetailsInfor.moreH5Url;
//     } else {
//         // 其他
//         this.bottomBannerUrl = this.safeDetailsInfor.bannerH5Url;
//         this.detailMoreBtn = this.safeDetailsInfor.moreH5Url;
//     }
//
//     // debugger
// }