/**
 * Des
 * Created by wangxiaoxin on 2018/11/17.
 * E-mail duqichao@jd.com
 * Update 2018/11/17
 */
var commonFunction = {
    // 身份证号转性别
    cardNo2Gender: function (cardNo) {
        if (!cardNo) return 1
        if (parseInt(cardNo.substr(16, 1)) % 2 === 1) {
            return 1
        } else {
            return 2
        }
    },
    // 身份证号转年龄
    cardNo2Age: function (cardNo) {
        if (!cardNo) return 0
        var birthDate = new Date([cardNo.substring(6, 10), cardNo.substring(10, 12), cardNo.substring(12, 14)].join('-'))
        birthDate.setDate(birthDate.getDate() - 1)
        return commonFunction.birth2Age(birthDate)
    },
    // 身份证转年龄
    birth2Age: function (birthDate) {
        if (!birthDate) return 0
        var nowDate = new Date()
        var age = nowDate.getFullYear() - birthDate.getFullYear() - 1
        if (birthDate.getMonth() > nowDate.getMonth()) return age
        if (birthDate.getMonth() < nowDate.getMonth()) return age + 1
        if (birthDate.getMonth() === nowDate.getMonth()) {
            if (birthDate.getDate() > nowDate.getDate()) {
                return age
            }
            // false-生日当天年龄不增加,true-生日当天年龄增加
            var nowDateAddAgeFlag = true
            if (nowDateAddAgeFlag || birthDate.getDate() < nowDate.getDate()) {
                age++
            }
        }
        return age
    },
    // 校验身份证
    cardNo: function (cardNo) {
        if (!cardNo) return false
        cardNo = cardNo.toUpperCase()
        if (cardNo.length === 15) {
            return false
        }
        if (cardNo.substring(cardNo.length - 1, cardNo.length) === 'X') {
            var cardNoRule = /^(\d{6})(19|20)?(\d{2})([01]\d)([0123]\d)(\d{3})(\d|X)?$/
            return cardNoRule.test(cardNo)
        }
        if (!/^\d{17}(\d|x)$/i.test(cardNo)) {
            return false
        }
        var iSum = 0
        var sBirthday = cardNo.substr(6, 4) + '-' + Number(cardNo.substr(10, 2)) + '-' + Number(cardNo.substr(12, 2))
        var d = new Date(sBirthday.replace(/-/g, '/'))
        if (sBirthday !== (d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate())) {
            return false
        }
        for (var i = 17; i >= 0; i--) {
            iSum += (Math.pow(2, i) % 11) * parseInt(cardNo.charAt(17 - i), 11)
        }
        if (iSum % 11 !== 1) {
            return false
        }
        return true
    },
    /* 校验手机号 */
    mobile: function (mobile) {
        return /^1[0-9]\d{9}$/.test(mobile)
    },
    /* 校验email */
    email: function (email) {
        return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(email)
        // return true
    }
}
export default commonFunction
