import Touches from 'utils/Touches.js'
var http = require('utils/http.js')



//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var that = this;
 
    // 存储
    that.globalData.Address = [
    {
        "province": "北京市",
        "id": 1,
        "citys": [
            {
                "city": "北京市",
                "districts": [
                    {
                        "district": "东城区",
                        "id": 10001
                    },
                    {
                        "district": "西城区",
                        "id": 10002
                    },
                    {
                        "district": "崇文区",
                        "id": 10003
                    },
                    {
                        "district": "宣武区",
                        "id": 10004
                    },
                    {
                        "district": "朝阳区",
                        "id": 10005
                    },
                    {
                        "district": "丰台区",
                        "id": 10006
                    },
                    {
                        "district": "石景山区",
                        "id": 10007
                    },
                    {
                        "district": "海淀区",
                        "id": 10008
                    },
                    {
                        "district": "门头沟区",
                        "id": 10009
                    },
                    {
                        "district": "房山区",
                        "id": 10010
                    },
                    {
                        "district": "通州区",
                        "id": 10011
                    },
                    {
                        "district": "顺义区",
                        "id": 10012
                    },
                    {
                        "district": "昌平区",
                        "id": 10013
                    },
                    {
                        "district": "大兴区",
                        "id": 10014
                    },
                    {
                        "district": "怀柔区",
                        "id": 10015
                    },
                    {
                        "district": "平谷区",
                        "id": 10016
                    },
                    {
                        "district": "密云县",
                        "id": 10017
                    },
                    {
                        "district": "延庆县",
                        "id": 10018
                    }
                ],
                "id": 1001
            }
        ]
    },
    {
        "province": "天津市",
        "id": 2,
        "citys": [
            {
                "city": "天津市",
                "districts": [
                    {
                        "district": "和平区",
                        "id": 10019
                    },
                    {
                        "district": "河东区",
                        "id": 10020
                    },
                    {
                        "district": "河西区",
                        "id": 10021
                    },
                    {
                        "district": "南开区",
                        "id": 10022
                    },
                    {
                        "district": "河北区",
                        "id": 10023
                    },
                    {
                        "district": "红桥区",
                        "id": 10024
                    },
                    {
                        "district": "塘沽区",
                        "id": 10025
                    },
                    {
                        "district": "汉沽区",
                        "id": 10026
                    },
                    {
                        "district": "大港区",
                        "id": 10027
                    },
                    {
                        "district": "东丽区",
                        "id": 10028
                    },
                    {
                        "district": "西青区",
                        "id": 10029
                    },
                    {
                        "district": "津南区",
                        "id": 10030
                    },
                    {
                        "district": "北辰区",
                        "id": 10031
                    },
                    {
                        "district": "武清区",
                        "id": 10032
                    },
                    {
                        "district": "宝坻区",
                        "id": 10033
                    },
                    {
                        "district": "宁河县",
                        "id": 10034
                    },
                    {
                        "district": "静海县",
                        "id": 10035
                    },
                    {
                        "district": "蓟县",
                        "id": 10036
                    }
                ],
                "id": 1002
            }
        ]
    },
    {
        "province": "河北省",
        "id": 3,
        "citys": [
            {
                "city": "石家庄市",
                "districts": [
                    {
                        "district": "长安区",
                        "id": 10037
                    },
                    {
                        "district": "桥东区",
                        "id": 10038
                    },
                    {
                        "district": "桥西区",
                        "id": 10039
                    },
                    {
                        "district": "新华区",
                        "id": 10040
                    },
                    {
                        "district": "井陉矿区",
                        "id": 10041
                    },
                    {
                        "district": "裕华区",
                        "id": 10042
                    },
                    {
                        "district": "井陉县",
                        "id": 10043
                    },
                    {
                        "district": "正定县",
                        "id": 10044
                    },
                    {
                        "district": "栾城县",
                        "id": 10045
                    },
                    {
                        "district": "行唐县",
                        "id": 10046
                    },
                    {
                        "district": "灵寿县",
                        "id": 10047
                    },
                    {
                        "district": "高邑县",
                        "id": 10048
                    },
                    {
                        "district": "深泽县",
                        "id": 10049
                    },
                    {
                        "district": "赞皇县",
                        "id": 10050
                    },
                    {
                        "district": "无极县",
                        "id": 10051
                    },
                    {
                        "district": "平山县",
                        "id": 10052
                    },
                    {
                        "district": "元氏县",
                        "id": 10053
                    },
                    {
                        "district": "赵县",
                        "id": 10054
                    },
                    {
                        "district": "辛集市",
                        "id": 10055
                    },
                    {
                        "district": "藁城市",
                        "id": 10056
                    },
                    {
                        "district": "晋州市",
                        "id": 10057
                    },
                    {
                        "district": "新乐市",
                        "id": 10058
                    },
                    {
                        "district": "鹿泉市",
                        "id": 10059
                    }
                ],
                "id": 1003
            },
            {
                "city": "唐山市",
                "districts": [
                    {
                        "district": "路南区",
                        "id": 10060
                    },
                    {
                        "district": "路北区",
                        "id": 10061
                    },
                    {
                        "district": "古冶区",
                        "id": 10062
                    },
                    {
                        "district": "开平区",
                        "id": 10063
                    },
                    {
                        "district": "丰南区",
                        "id": 10064
                    },
                    {
                        "district": "丰润区",
                        "id": 10065
                    },
                    {
                        "district": "滦县",
                        "id": 10066
                    },
                    {
                        "district": "滦南县",
                        "id": 10067
                    },
                    {
                        "district": "乐亭县",
                        "id": 10068
                    },
                    {
                        "district": "迁西县",
                        "id": 10069
                    },
                    {
                        "district": "玉田县",
                        "id": 10070
                    },
                    {
                        "district": "唐海县",
                        "id": 10071
                    },
                    {
                        "district": "遵化市",
                        "id": 10072
                    },
                    {
                        "district": "迁安市",
                        "id": 10073
                    }
                ],
                "id": 1004
            },
            {
                "city": "秦皇岛市",
                "districts": [
                    {
                        "district": "海港区",
                        "id": 10074
                    },
                    {
                        "district": "山海关区",
                        "id": 10075
                    },
                    {
                        "district": "北戴河区",
                        "id": 10076
                    },
                    {
                        "district": "青龙满族自治县",
                        "id": 10077
                    },
                    {
                        "district": "昌黎县",
                        "id": 10078
                    },
                    {
                        "district": "抚宁县",
                        "id": 10079
                    },
                    {
                        "district": "卢龙县",
                        "id": 10080
                    }
                ],
                "id": 1005
            },
            {
                "city": "邯郸市",
                "districts": [
                    {
                        "district": "邯山区",
                        "id": 10081
                    },
                    {
                        "district": "丛台区",
                        "id": 10082
                    },
                    {
                        "district": "复兴区",
                        "id": 10083
                    },
                    {
                        "district": "峰峰矿区",
                        "id": 10084
                    },
                    {
                        "district": "邯郸县",
                        "id": 10085
                    },
                    {
                        "district": "临漳县",
                        "id": 10086
                    },
                    {
                        "district": "成安县",
                        "id": 10087
                    },
                    {
                        "district": "大名县",
                        "id": 10088
                    },
                    {
                        "district": "涉县",
                        "id": 10089
                    },
                    {
                        "district": "磁县",
                        "id": 10090
                    },
                    {
                        "district": "肥乡县",
                        "id": 10091
                    },
                    {
                        "district": "永年县",
                        "id": 10092
                    },
                    {
                        "district": "邱县",
                        "id": 10093
                    },
                    {
                        "district": "鸡泽县",
                        "id": 10094
                    },
                    {
                        "district": "广平县",
                        "id": 10095
                    },
                    {
                        "district": "馆陶县",
                        "id": 10096
                    },
                    {
                        "district": "魏县",
                        "id": 10097
                    },
                    {
                        "district": "曲周县",
                        "id": 10098
                    },
                    {
                        "district": "武安市",
                        "id": 10099
                    }
                ],
                "id": 1006
            },
            {
                "city": "邢台市",
                "districts": [
                    {
                        "district": "桥东区",
                        "id": 10100
                    },
                    {
                        "district": "桥西区",
                        "id": 10101
                    },
                    {
                        "district": "邢台县",
                        "id": 10102
                    },
                    {
                        "district": "临城县",
                        "id": 10103
                    },
                    {
                        "district": "内丘县",
                        "id": 10104
                    },
                    {
                        "district": "柏乡县",
                        "id": 10105
                    },
                    {
                        "district": "隆尧县",
                        "id": 10106
                    },
                    {
                        "district": "任县",
                        "id": 10107
                    },
                    {
                        "district": "南和县",
                        "id": 10108
                    },
                    {
                        "district": "宁晋县",
                        "id": 10109
                    },
                    {
                        "district": "巨鹿县",
                        "id": 10110
                    },
                    {
                        "district": "新河县",
                        "id": 10111
                    },
                    {
                        "district": "广宗县",
                        "id": 10112
                    },
                    {
                        "district": "平乡县",
                        "id": 10113
                    },
                    {
                        "district": "威县",
                        "id": 10114
                    },
                    {
                        "district": "清河县",
                        "id": 10115
                    },
                    {
                        "district": "临西县",
                        "id": 10116
                    },
                    {
                        "district": "南宫市",
                        "id": 10117
                    },
                    {
                        "district": "沙河市",
                        "id": 10118
                    }
                ],
                "id": 1007
            },
            {
                "city": "保定市",
                "districts": [
                    {
                        "district": "新市区",
                        "id": 10119
                    },
                    {
                        "district": "北市区",
                        "id": 10120
                    },
                    {
                        "district": "南市区",
                        "id": 10121
                    },
                    {
                        "district": "满城县",
                        "id": 10122
                    },
                    {
                        "district": "清苑县",
                        "id": 10123
                    },
                    {
                        "district": "涞水县",
                        "id": 10124
                    },
                    {
                        "district": "阜平县",
                        "id": 10125
                    },
                    {
                        "district": "徐水县",
                        "id": 10126
                    },
                    {
                        "district": "定兴县",
                        "id": 10127
                    },
                    {
                        "district": "唐县",
                        "id": 10128
                    },
                    {
                        "district": "高阳县",
                        "id": 10129
                    },
                    {
                        "district": "容城县",
                        "id": 10130
                    },
                    {
                        "district": "涞源县",
                        "id": 10131
                    },
                    {
                        "district": "望都县",
                        "id": 10132
                    },
                    {
                        "district": "安新县",
                        "id": 10133
                    },
                    {
                        "district": "易县",
                        "id": 10134
                    },
                    {
                        "district": "曲阳县",
                        "id": 10135
                    },
                    {
                        "district": "蠡县",
                        "id": 10136
                    },
                    {
                        "district": "顺平县",
                        "id": 10137
                    },
                    {
                        "district": "博野县",
                        "id": 10138
                    },
                    {
                        "district": "雄县",
                        "id": 10139
                    },
                    {
                        "district": "涿州市",
                        "id": 10140
                    },
                    {
                        "district": "定州市",
                        "id": 10141
                    },
                    {
                        "district": "安国市",
                        "id": 10142
                    },
                    {
                        "district": "高碑店市",
                        "id": 10143
                    }
                ],
                "id": 1008
            },
            {
                "city": "张家口市",
                "districts": [
                    {
                        "district": "桥东区",
                        "id": 10144
                    },
                    {
                        "district": "桥西区",
                        "id": 10145
                    },
                    {
                        "district": "宣化区",
                        "id": 10146
                    },
                    {
                        "district": "下花园区",
                        "id": 10147
                    },
                    {
                        "district": "宣化县",
                        "id": 10148
                    },
                    {
                        "district": "张北县",
                        "id": 10149
                    },
                    {
                        "district": "康保县",
                        "id": 10150
                    },
                    {
                        "district": "沽源县",
                        "id": 10151
                    },
                    {
                        "district": "尚义县",
                        "id": 10152
                    },
                    {
                        "district": "蔚县",
                        "id": 10153
                    },
                    {
                        "district": "阳原县",
                        "id": 10154
                    },
                    {
                        "district": "怀安县",
                        "id": 10155
                    },
                    {
                        "district": "万全县",
                        "id": 10156
                    },
                    {
                        "district": "怀来县",
                        "id": 10157
                    },
                    {
                        "district": "涿鹿县",
                        "id": 10158
                    },
                    {
                        "district": "赤城县",
                        "id": 10159
                    },
                    {
                        "district": "崇礼县",
                        "id": 10160
                    }
                ],
                "id": 1009
            },
            {
                "city": "承德市",
                "districts": [
                    {
                        "district": "双桥区",
                        "id": 10161
                    },
                    {
                        "district": "双滦区",
                        "id": 10162
                    },
                    {
                        "district": "鹰手营子矿区",
                        "id": 10163
                    },
                    {
                        "district": "承德县",
                        "id": 10164
                    },
                    {
                        "district": "兴隆县",
                        "id": 10165
                    },
                    {
                        "district": "平泉县",
                        "id": 10166
                    },
                    {
                        "district": "滦平县",
                        "id": 10167
                    },
                    {
                        "district": "隆化县",
                        "id": 10168
                    },
                    {
                        "district": "丰宁满族自治县",
                        "id": 10169
                    },
                    {
                        "district": "宽城满族自治县",
                        "id": 10170
                    },
                    {
                        "district": "围场满族蒙古族自治县",
                        "id": 10171
                    }
                ],
                "id": 1010
            },
            {
                "city": "沧州市",
                "districts": [
                    {
                        "district": "新华区",
                        "id": 10172
                    },
                    {
                        "district": "运河区",
                        "id": 10173
                    },
                    {
                        "district": "沧县",
                        "id": 10174
                    },
                    {
                        "district": "青县",
                        "id": 10175
                    },
                    {
                        "district": "东光县",
                        "id": 10176
                    },
                    {
                        "district": "海兴县",
                        "id": 10177
                    },
                    {
                        "district": "盐山县",
                        "id": 10178
                    },
                    {
                        "district": "肃宁县",
                        "id": 10179
                    },
                    {
                        "district": "南皮县",
                        "id": 10180
                    },
                    {
                        "district": "吴桥县",
                        "id": 10181
                    },
                    {
                        "district": "献县",
                        "id": 10182
                    },
                    {
                        "district": "孟村回族自治县",
                        "id": 10183
                    },
                    {
                        "district": "泊头市",
                        "id": 10184
                    },
                    {
                        "district": "任丘市",
                        "id": 10185
                    },
                    {
                        "district": "黄骅市",
                        "id": 10186
                    },
                    {
                        "district": "河间市",
                        "id": 10187
                    }
                ],
                "id": 1011
            },
            {
                "city": "廊坊市",
                "districts": [
                    {
                        "district": "安次区",
                        "id": 10188
                    },
                    {
                        "district": "广阳区",
                        "id": 10189
                    },
                    {
                        "district": "固安县",
                        "id": 10190
                    },
                    {
                        "district": "永清县",
                        "id": 10191
                    },
                    {
                        "district": "香河县",
                        "id": 10192
                    },
                    {
                        "district": "大城县",
                        "id": 10193
                    },
                    {
                        "district": "文安县",
                        "id": 10194
                    },
                    {
                        "district": "大厂回族自治县",
                        "id": 10195
                    },
                    {
                        "district": "霸州市",
                        "id": 10196
                    },
                    {
                        "district": "三河市",
                        "id": 10197
                    }
                ],
                "id": 1012
            },
            {
                "city": "衡水市",
                "districts": [
                    {
                        "district": "桃城区",
                        "id": 10198
                    },
                    {
                        "district": "枣强县",
                        "id": 10199
                    },
                    {
                        "district": "武邑县",
                        "id": 10200
                    },
                    {
                        "district": "武强县",
                        "id": 10201
                    },
                    {
                        "district": "饶阳县",
                        "id": 10202
                    },
                    {
                        "district": "安平县",
                        "id": 10203
                    },
                    {
                        "district": "故城县",
                        "id": 10204
                    },
                    {
                        "district": "景县",
                        "id": 10205
                    },
                    {
                        "district": "阜城县",
                        "id": 10206
                    },
                    {
                        "district": "冀州市",
                        "id": 10207
                    },
                    {
                        "district": "深州市",
                        "id": 10208
                    }
                ],
                "id": 1013
            }
        ]
    },
    {
        "province": "山西省",
        "id": 4,
        "citys": [
            {
                "city": "太原市",
                "districts": [
                    {
                        "district": "小店区",
                        "id": 10209
                    },
                    {
                        "district": "迎泽区",
                        "id": 10210
                    },
                    {
                        "district": "杏花岭区",
                        "id": 10211
                    },
                    {
                        "district": "尖草坪区",
                        "id": 10212
                    },
                    {
                        "district": "万柏林区",
                        "id": 10213
                    },
                    {
                        "district": "晋源区",
                        "id": 10214
                    },
                    {
                        "district": "清徐县",
                        "id": 10215
                    },
                    {
                        "district": "阳曲县",
                        "id": 10216
                    },
                    {
                        "district": "娄烦县",
                        "id": 10217
                    },
                    {
                        "district": "古交市",
                        "id": 10218
                    }
                ],
                "id": 1014
            },
            {
                "city": "大同市",
                "districts": [
                    {
                        "district": "城区",
                        "id": 10219
                    },
                    {
                        "district": "矿区",
                        "id": 10220
                    },
                    {
                        "district": "南郊区",
                        "id": 10221
                    },
                    {
                        "district": "新荣区",
                        "id": 10222
                    },
                    {
                        "district": "阳高县",
                        "id": 10223
                    },
                    {
                        "district": "天镇县",
                        "id": 10224
                    },
                    {
                        "district": "广灵县",
                        "id": 10225
                    },
                    {
                        "district": "灵丘县",
                        "id": 10226
                    },
                    {
                        "district": "浑源县",
                        "id": 10227
                    },
                    {
                        "district": "左云县",
                        "id": 10228
                    },
                    {
                        "district": "大同县",
                        "id": 10229
                    }
                ],
                "id": 1015
            },
            {
                "city": "阳泉市",
                "districts": [
                    {
                        "district": "城区",
                        "id": 10230
                    },
                    {
                        "district": "矿区",
                        "id": 10231
                    },
                    {
                        "district": "郊区",
                        "id": 10232
                    },
                    {
                        "district": "平定县",
                        "id": 10233
                    },
                    {
                        "district": "盂县",
                        "id": 10234
                    }
                ],
                "id": 1016
            },
            {
                "city": "长治市",
                "districts": [
                    {
                        "district": "城区",
                        "id": 10235
                    },
                    {
                        "district": "郊区",
                        "id": 10236
                    },
                    {
                        "district": "长治县",
                        "id": 10237
                    },
                    {
                        "district": "襄垣县",
                        "id": 10238
                    },
                    {
                        "district": "屯留县",
                        "id": 10239
                    },
                    {
                        "district": "平顺县",
                        "id": 10240
                    },
                    {
                        "district": "黎城县",
                        "id": 10241
                    },
                    {
                        "district": "壶关县",
                        "id": 10242
                    },
                    {
                        "district": "长子县",
                        "id": 10243
                    },
                    {
                        "district": "武乡县",
                        "id": 10244
                    },
                    {
                        "district": "沁县",
                        "id": 10245
                    },
                    {
                        "district": "沁源县",
                        "id": 10246
                    },
                    {
                        "district": "潞城市",
                        "id": 10247
                    }
                ],
                "id": 1017
            },
            {
                "city": "晋城市",
                "districts": [
                    {
                        "district": "城区",
                        "id": 10248
                    },
                    {
                        "district": "沁水县",
                        "id": 10249
                    },
                    {
                        "district": "阳城县",
                        "id": 10250
                    },
                    {
                        "district": "陵川县",
                        "id": 10251
                    },
                    {
                        "district": "泽州县",
                        "id": 10252
                    },
                    {
                        "district": "高平市",
                        "id": 10253
                    }
                ],
                "id": 1018
            },
            {
                "city": "朔州市",
                "districts": [
                    {
                        "district": "朔城区",
                        "id": 10254
                    },
                    {
                        "district": "平鲁区",
                        "id": 10255
                    },
                    {
                        "district": "山阴县",
                        "id": 10256
                    },
                    {
                        "district": "应县",
                        "id": 10257
                    },
                    {
                        "district": "右玉县",
                        "id": 10258
                    },
                    {
                        "district": "怀仁县",
                        "id": 10259
                    }
                ],
                "id": 1019
            },
            {
                "city": "晋中市",
                "districts": [
                    {
                        "district": "榆次区",
                        "id": 10260
                    },
                    {
                        "district": "榆社县",
                        "id": 10261
                    },
                    {
                        "district": "左权县",
                        "id": 10262
                    },
                    {
                        "district": "和顺县",
                        "id": 10263
                    },
                    {
                        "district": "昔阳县",
                        "id": 10264
                    },
                    {
                        "district": "寿阳县",
                        "id": 10265
                    },
                    {
                        "district": "太谷县",
                        "id": 10266
                    },
                    {
                        "district": "祁县",
                        "id": 10267
                    },
                    {
                        "district": "平遥县",
                        "id": 10268
                    },
                    {
                        "district": "灵石县",
                        "id": 10269
                    },
                    {
                        "district": "介休市",
                        "id": 10270
                    }
                ],
                "id": 1020
            },
            {
                "city": "运城市",
                "districts": [
                    {
                        "district": "盐湖区",
                        "id": 10271
                    },
                    {
                        "district": "临猗县",
                        "id": 10272
                    },
                    {
                        "district": "万荣县",
                        "id": 10273
                    },
                    {
                        "district": "闻喜县",
                        "id": 10274
                    },
                    {
                        "district": "稷山县",
                        "id": 10275
                    },
                    {
                        "district": "新绛县",
                        "id": 10276
                    },
                    {
                        "district": "绛县",
                        "id": 10277
                    },
                    {
                        "district": "垣曲县",
                        "id": 10278
                    },
                    {
                        "district": "夏县",
                        "id": 10279
                    },
                    {
                        "district": "平陆县",
                        "id": 10280
                    },
                    {
                        "district": "芮城县",
                        "id": 10281
                    },
                    {
                        "district": "永济市",
                        "id": 10282
                    },
                    {
                        "district": "河津市",
                        "id": 10283
                    }
                ],
                "id": 1021
            },
            {
                "city": "忻州市",
                "districts": [
                    {
                        "district": "忻府区",
                        "id": 10284
                    },
                    {
                        "district": "定襄县",
                        "id": 10285
                    },
                    {
                        "district": "五台县",
                        "id": 10286
                    },
                    {
                        "district": "代县",
                        "id": 10287
                    },
                    {
                        "district": "繁峙县",
                        "id": 10288
                    },
                    {
                        "district": "宁武县",
                        "id": 10289
                    },
                    {
                        "district": "静乐县",
                        "id": 10290
                    },
                    {
                        "district": "神池县",
                        "id": 10291
                    },
                    {
                        "district": "五寨县",
                        "id": 10292
                    },
                    {
                        "district": "岢岚县",
                        "id": 10293
                    },
                    {
                        "district": "河曲县",
                        "id": 10294
                    },
                    {
                        "district": "保德县",
                        "id": 10295
                    },
                    {
                        "district": "偏关县",
                        "id": 10296
                    },
                    {
                        "district": "原平市",
                        "id": 10297
                    }
                ],
                "id": 1022
            },
            {
                "city": "临汾市",
                "districts": [
                    {
                        "district": "尧都区",
                        "id": 10298
                    },
                    {
                        "district": "曲沃县",
                        "id": 10299
                    },
                    {
                        "district": "翼城县",
                        "id": 10300
                    },
                    {
                        "district": "襄汾县",
                        "id": 10301
                    },
                    {
                        "district": "洪洞县",
                        "id": 10302
                    },
                    {
                        "district": "古县",
                        "id": 10303
                    },
                    {
                        "district": "安泽县",
                        "id": 10304
                    },
                    {
                        "district": "浮山县",
                        "id": 10305
                    },
                    {
                        "district": "吉县",
                        "id": 10306
                    },
                    {
                        "district": "乡宁县",
                        "id": 10307
                    },
                    {
                        "district": "大宁县",
                        "id": 10308
                    },
                    {
                        "district": "隰县",
                        "id": 10309
                    },
                    {
                        "district": "永和县",
                        "id": 10310
                    },
                    {
                        "district": "蒲县",
                        "id": 10311
                    },
                    {
                        "district": "汾西县",
                        "id": 10312
                    },
                    {
                        "district": "侯马市",
                        "id": 10313
                    },
                    {
                        "district": "霍州市",
                        "id": 10314
                    }
                ],
                "id": 1023
            },
            {
                "city": "吕梁市",
                "districts": [
                    {
                        "district": "离石区",
                        "id": 10315
                    },
                    {
                        "district": "文水县",
                        "id": 10316
                    },
                    {
                        "district": "交城县",
                        "id": 10317
                    },
                    {
                        "district": "兴县",
                        "id": 10318
                    },
                    {
                        "district": "临县",
                        "id": 10319
                    },
                    {
                        "district": "柳林县",
                        "id": 10320
                    },
                    {
                        "district": "石楼县",
                        "id": 10321
                    },
                    {
                        "district": "岚县",
                        "id": 10322
                    },
                    {
                        "district": "方山县",
                        "id": 10323
                    },
                    {
                        "district": "中阳县",
                        "id": 10324
                    },
                    {
                        "district": "交口县",
                        "id": 10325
                    },
                    {
                        "district": "孝义市",
                        "id": 10326
                    },
                    {
                        "district": "汾阳市",
                        "id": 10327
                    }
                ],
                "id": 1024
            }
        ]
    },
    {
        "province": "内蒙古省",
        "id": 5,
        "citys": [
            {
                "city": "呼和浩特市",
                "districts": [
                    {
                        "district": "新城区",
                        "id": 10328
                    },
                    {
                        "district": "回民区",
                        "id": 10329
                    },
                    {
                        "district": "玉泉区",
                        "id": 10330
                    },
                    {
                        "district": "赛罕区",
                        "id": 10331
                    },
                    {
                        "district": "土默特左旗",
                        "id": 10332
                    },
                    {
                        "district": "托克托县",
                        "id": 10333
                    },
                    {
                        "district": "和林格尔县",
                        "id": 10334
                    },
                    {
                        "district": "清水河县",
                        "id": 10335
                    },
                    {
                        "district": "武川县",
                        "id": 10336
                    }
                ],
                "id": 1025
            },
            {
                "city": "包头市",
                "districts": [
                    {
                        "district": "东河区",
                        "id": 10337
                    },
                    {
                        "district": "昆都仑区",
                        "id": 10338
                    },
                    {
                        "district": "青山区",
                        "id": 10339
                    },
                    {
                        "district": "石拐区",
                        "id": 10340
                    },
                    {
                        "district": "白云矿区",
                        "id": 10341
                    },
                    {
                        "district": "九原区",
                        "id": 10342
                    },
                    {
                        "district": "土默特右旗",
                        "id": 10343
                    },
                    {
                        "district": "固阳县",
                        "id": 10344
                    },
                    {
                        "district": "达尔罕茂明安联合旗",
                        "id": 10345
                    }
                ],
                "id": 1026
            },
            {
                "city": "乌海市",
                "districts": [
                    {
                        "district": "海勃湾区",
                        "id": 10346
                    },
                    {
                        "district": "海南区",
                        "id": 10347
                    },
                    {
                        "district": "乌达区",
                        "id": 10348
                    }
                ],
                "id": 1027
            },
            {
                "city": "赤峰市",
                "districts": [
                    {
                        "district": "红山区",
                        "id": 10349
                    },
                    {
                        "district": "元宝山区",
                        "id": 10350
                    },
                    {
                        "district": "松山区",
                        "id": 10351
                    },
                    {
                        "district": "阿鲁科尔沁旗",
                        "id": 10352
                    },
                    {
                        "district": "巴林左旗",
                        "id": 10353
                    },
                    {
                        "district": "巴林右旗",
                        "id": 10354
                    },
                    {
                        "district": "林西县",
                        "id": 10355
                    },
                    {
                        "district": "克什克腾旗",
                        "id": 10356
                    },
                    {
                        "district": "翁牛特旗",
                        "id": 10357
                    },
                    {
                        "district": "喀喇沁旗",
                        "id": 10358
                    },
                    {
                        "district": "宁城县",
                        "id": 10359
                    },
                    {
                        "district": "敖汉旗",
                        "id": 10360
                    }
                ],
                "id": 1028
            },
            {
                "city": "通辽市",
                "districts": [
                    {
                        "district": "科尔沁区",
                        "id": 10361
                    },
                    {
                        "district": "科尔沁左翼中旗",
                        "id": 10362
                    },
                    {
                        "district": "科尔沁左翼后旗",
                        "id": 10363
                    },
                    {
                        "district": "开鲁县",
                        "id": 10364
                    },
                    {
                        "district": "库伦旗",
                        "id": 10365
                    },
                    {
                        "district": "奈曼旗",
                        "id": 10366
                    },
                    {
                        "district": "扎鲁特旗",
                        "id": 10367
                    },
                    {
                        "district": "霍林郭勒市",
                        "id": 10368
                    }
                ],
                "id": 1029
            },
            {
                "city": "鄂尔多斯市",
                "districts": [
                    {
                        "district": "东胜区",
                        "id": 10369
                    },
                    {
                        "district": "达拉特旗",
                        "id": 10370
                    },
                    {
                        "district": "准格尔旗",
                        "id": 10371
                    },
                    {
                        "district": "鄂托克前旗",
                        "id": 10372
                    },
                    {
                        "district": "鄂托克旗",
                        "id": 10373
                    },
                    {
                        "district": "杭锦旗",
                        "id": 10374
                    },
                    {
                        "district": "乌审旗",
                        "id": 10375
                    },
                    {
                        "district": "伊金霍洛旗",
                        "id": 10376
                    }
                ],
                "id": 1030
            },
            {
                "city": "呼伦贝尔市",
                "districts": [
                    {
                        "district": "海拉尔区",
                        "id": 10377
                    },
                    {
                        "district": "阿荣旗",
                        "id": 10378
                    },
                    {
                        "district": "莫力达瓦达斡尔族自治旗",
                        "id": 10379
                    },
                    {
                        "district": "鄂伦春自治旗",
                        "id": 10380
                    },
                    {
                        "district": "鄂温克族自治旗",
                        "id": 10381
                    },
                    {
                        "district": "陈巴尔虎旗",
                        "id": 10382
                    },
                    {
                        "district": "新巴尔虎左旗",
                        "id": 10383
                    },
                    {
                        "district": "新巴尔虎右旗",
                        "id": 10384
                    },
                    {
                        "district": "满洲里市",
                        "id": 10385
                    },
                    {
                        "district": "牙克石市",
                        "id": 10386
                    },
                    {
                        "district": "扎兰屯市",
                        "id": 10387
                    },
                    {
                        "district": "额尔古纳市",
                        "id": 10388
                    },
                    {
                        "district": "根河市",
                        "id": 10389
                    }
                ],
                "id": 1031
            },
            {
                "city": "巴彦淖尔市",
                "districts": [
                    {
                        "district": "临河区",
                        "id": 10390
                    },
                    {
                        "district": "五原县",
                        "id": 10391
                    },
                    {
                        "district": "磴口县",
                        "id": 10392
                    },
                    {
                        "district": "乌拉特前旗",
                        "id": 10393
                    },
                    {
                        "district": "乌拉特中旗",
                        "id": 10394
                    },
                    {
                        "district": "乌拉特后旗",
                        "id": 10395
                    },
                    {
                        "district": "杭锦后旗",
                        "id": 10396
                    }
                ],
                "id": 1032
            },
            {
                "city": "乌兰察布市",
                "districts": [
                    {
                        "district": "集宁区",
                        "id": 10397
                    },
                    {
                        "district": "卓资县",
                        "id": 10398
                    },
                    {
                        "district": "化德县",
                        "id": 10399
                    },
                    {
                        "district": "商都县",
                        "id": 10400
                    },
                    {
                        "district": "兴和县",
                        "id": 10401
                    },
                    {
                        "district": "凉城县",
                        "id": 10402
                    },
                    {
                        "district": "察哈尔右翼前旗",
                        "id": 10403
                    },
                    {
                        "district": "察哈尔右翼中旗",
                        "id": 10404
                    },
                    {
                        "district": "察哈尔右翼后旗",
                        "id": 10405
                    },
                    {
                        "district": "四子王旗",
                        "id": 10406
                    },
                    {
                        "district": "丰镇市",
                        "id": 10407
                    }
                ],
                "id": 1033
            },
            {
                "city": "兴安盟",
                "districts": [
                    {
                        "district": "乌兰浩特市",
                        "id": 10408
                    },
                    {
                        "district": "阿尔山市",
                        "id": 10409
                    },
                    {
                        "district": "科尔沁右翼前旗",
                        "id": 10410
                    },
                    {
                        "district": "科尔沁右翼中旗",
                        "id": 10411
                    },
                    {
                        "district": "扎赉特旗",
                        "id": 10412
                    },
                    {
                        "district": "突泉县",
                        "id": 10413
                    }
                ],
                "id": 1034
            },
            {
                "city": "锡林郭勒盟",
                "districts": [
                    {
                        "district": "二连浩特市",
                        "id": 10414
                    },
                    {
                        "district": "锡林浩特市",
                        "id": 10415
                    },
                    {
                        "district": "阿巴嘎旗",
                        "id": 10416
                    },
                    {
                        "district": "苏尼特左旗",
                        "id": 10417
                    },
                    {
                        "district": "苏尼特右旗",
                        "id": 10418
                    },
                    {
                        "district": "东乌珠穆沁旗",
                        "id": 10419
                    },
                    {
                        "district": "西乌珠穆沁旗",
                        "id": 10420
                    },
                    {
                        "district": "太仆寺旗",
                        "id": 10421
                    },
                    {
                        "district": "镶黄旗",
                        "id": 10422
                    },
                    {
                        "district": "正镶白旗",
                        "id": 10423
                    },
                    {
                        "district": "正蓝旗",
                        "id": 10424
                    },
                    {
                        "district": "多伦县",
                        "id": 10425
                    }
                ],
                "id": 1035
            },
            {
                "city": "阿拉善盟",
                "districts": [
                    {
                        "district": "阿拉善左旗",
                        "id": 10426
                    },
                    {
                        "district": "阿拉善右旗",
                        "id": 10427
                    },
                    {
                        "district": "额济纳旗",
                        "id": 10428
                    }
                ],
                "id": 1036
            }
        ]
    },
    {
        "province": "辽宁省",
        "id": 6,
        "citys": [
            {
                "city": "沈阳市",
                "districts": [
                    {
                        "district": "和平区",
                        "id": 10429
                    },
                    {
                        "district": "沈河区",
                        "id": 10430
                    },
                    {
                        "district": "大东区",
                        "id": 10431
                    },
                    {
                        "district": "皇姑区",
                        "id": 10432
                    },
                    {
                        "district": "铁西区",
                        "id": 10433
                    },
                    {
                        "district": "苏家屯区",
                        "id": 10434
                    },
                    {
                        "district": "东陵区",
                        "id": 10435
                    },
                    {
                        "district": "新城子区",
                        "id": 10436
                    },
                    {
                        "district": "于洪区",
                        "id": 10437
                    },
                    {
                        "district": "辽中县",
                        "id": 10438
                    },
                    {
                        "district": "康平县",
                        "id": 10439
                    },
                    {
                        "district": "法库县",
                        "id": 10440
                    },
                    {
                        "district": "新民市",
                        "id": 10441
                    }
                ],
                "id": 1037
            },
            {
                "city": "大连市",
                "districts": [
                    {
                        "district": "中山区",
                        "id": 10442
                    },
                    {
                        "district": "西岗区",
                        "id": 10443
                    },
                    {
                        "district": "沙河口区",
                        "id": 10444
                    },
                    {
                        "district": "甘井子区",
                        "id": 10445
                    },
                    {
                        "district": "旅顺口区",
                        "id": 10446
                    },
                    {
                        "district": "金州区",
                        "id": 10447
                    },
                    {
                        "district": "长海县",
                        "id": 10448
                    },
                    {
                        "district": "瓦房店市",
                        "id": 10449
                    },
                    {
                        "district": "普兰店市",
                        "id": 10450
                    },
                    {
                        "district": "庄河市",
                        "id": 10451
                    }
                ],
                "id": 1038
            },
            {
                "city": "鞍山市",
                "districts": [
                    {
                        "district": "铁东区",
                        "id": 10452
                    },
                    {
                        "district": "铁西区",
                        "id": 10453
                    },
                    {
                        "district": "立山区",
                        "id": 10454
                    },
                    {
                        "district": "千山区",
                        "id": 10455
                    },
                    {
                        "district": "台安县",
                        "id": 10456
                    },
                    {
                        "district": "岫岩满族自治县",
                        "id": 10457
                    },
                    {
                        "district": "海城市",
                        "id": 10458
                    }
                ],
                "id": 1039
            },
            {
                "city": "抚顺市",
                "districts": [
                    {
                        "district": "新抚区",
                        "id": 10459
                    },
                    {
                        "district": "东洲区",
                        "id": 10460
                    },
                    {
                        "district": "望花区",
                        "id": 10461
                    },
                    {
                        "district": "顺城区",
                        "id": 10462
                    },
                    {
                        "district": "抚顺县",
                        "id": 10463
                    },
                    {
                        "district": "新宾满族自治县",
                        "id": 10464
                    },
                    {
                        "district": "清原满族自治县",
                        "id": 10465
                    }
                ],
                "id": 1040
            },
            {
                "city": "本溪市",
                "districts": [
                    {
                        "district": "平山区",
                        "id": 10466
                    },
                    {
                        "district": "溪湖区",
                        "id": 10467
                    },
                    {
                        "district": "明山区",
                        "id": 10468
                    },
                    {
                        "district": "南芬区",
                        "id": 10469
                    },
                    {
                        "district": "本溪满族自治县",
                        "id": 10470
                    },
                    {
                        "district": "桓仁满族自治县",
                        "id": 10471
                    }
                ],
                "id": 1041
            },
            {
                "city": "丹东市",
                "districts": [
                    {
                        "district": "元宝区",
                        "id": 10472
                    },
                    {
                        "district": "振兴区",
                        "id": 10473
                    },
                    {
                        "district": "振安区",
                        "id": 10474
                    },
                    {
                        "district": "宽甸满族自治县",
                        "id": 10475
                    },
                    {
                        "district": "东港市",
                        "id": 10476
                    },
                    {
                        "district": "凤城市",
                        "id": 10477
                    }
                ],
                "id": 1042
            },
            {
                "city": "锦州市",
                "districts": [
                    {
                        "district": "古塔区",
                        "id": 10478
                    },
                    {
                        "district": "凌河区",
                        "id": 10479
                    },
                    {
                        "district": "太和区",
                        "id": 10480
                    },
                    {
                        "district": "黑山县",
                        "id": 10481
                    },
                    {
                        "district": "义县",
                        "id": 10482
                    },
                    {
                        "district": "凌海市",
                        "id": 10483
                    },
                    {
                        "district": "北宁市",
                        "id": 10484
                    }
                ],
                "id": 1043
            },
            {
                "city": "营口市",
                "districts": [
                    {
                        "district": "站前区",
                        "id": 10485
                    },
                    {
                        "district": "西市区",
                        "id": 10486
                    },
                    {
                        "district": "鲅鱼圈区",
                        "id": 10487
                    },
                    {
                        "district": "老边区",
                        "id": 10488
                    },
                    {
                        "district": "盖州市",
                        "id": 10489
                    },
                    {
                        "district": "大石桥市",
                        "id": 10490
                    }
                ],
                "id": 1044
            },
            {
                "city": "阜新市",
                "districts": [
                    {
                        "district": "海州区",
                        "id": 10491
                    },
                    {
                        "district": "新邱区",
                        "id": 10492
                    },
                    {
                        "district": "太平区",
                        "id": 10493
                    },
                    {
                        "district": "清河门区",
                        "id": 10494
                    },
                    {
                        "district": "细河区",
                        "id": 10495
                    },
                    {
                        "district": "阜新蒙古族自治县",
                        "id": 10496
                    },
                    {
                        "district": "彰武县",
                        "id": 10497
                    }
                ],
                "id": 1045
            },
            {
                "city": "辽阳市",
                "districts": [
                    {
                        "district": "白塔区",
                        "id": 10498
                    },
                    {
                        "district": "文圣区",
                        "id": 10499
                    },
                    {
                        "district": "宏伟区",
                        "id": 10500
                    },
                    {
                        "district": "弓长岭区",
                        "id": 10501
                    },
                    {
                        "district": "太子河区",
                        "id": 10502
                    },
                    {
                        "district": "辽阳县",
                        "id": 10503
                    },
                    {
                        "district": "灯塔市",
                        "id": 10504
                    }
                ],
                "id": 1046
            },
            {
                "city": "盘锦市",
                "districts": [
                    {
                        "district": "双台子区",
                        "id": 10505
                    },
                    {
                        "district": "兴隆台区",
                        "id": 10506
                    },
                    {
                        "district": "大洼县",
                        "id": 10507
                    },
                    {
                        "district": "盘山县",
                        "id": 10508
                    }
                ],
                "id": 1047
            },
            {
                "city": "铁岭市",
                "districts": [
                    {
                        "district": "银州区",
                        "id": 10509
                    },
                    {
                        "district": "清河区",
                        "id": 10510
                    },
                    {
                        "district": "铁岭县",
                        "id": 10511
                    },
                    {
                        "district": "西丰县",
                        "id": 10512
                    },
                    {
                        "district": "昌图县",
                        "id": 10513
                    },
                    {
                        "district": "调兵山市",
                        "id": 10514
                    },
                    {
                        "district": "开原市",
                        "id": 10515
                    }
                ],
                "id": 1048
            },
            {
                "city": "朝阳市",
                "districts": [
                    {
                        "district": "双塔区",
                        "id": 10516
                    },
                    {
                        "district": "龙城区",
                        "id": 10517
                    },
                    {
                        "district": "朝阳县",
                        "id": 10518
                    },
                    {
                        "district": "建平县",
                        "id": 10519
                    },
                    {
                        "district": "喀喇沁左翼蒙古族自治县",
                        "id": 10520
                    },
                    {
                        "district": "北票市",
                        "id": 10521
                    },
                    {
                        "district": "凌源市",
                        "id": 10522
                    }
                ],
                "id": 1049
            },
            {
                "city": "葫芦岛市",
                "districts": [
                    {
                        "district": "连山区",
                        "id": 10523
                    },
                    {
                        "district": "龙港区",
                        "id": 10524
                    },
                    {
                        "district": "南票区",
                        "id": 10525
                    },
                    {
                        "district": "绥中县",
                        "id": 10526
                    },
                    {
                        "district": "建昌县",
                        "id": 10527
                    },
                    {
                        "district": "兴城市",
                        "id": 10528
                    }
                ],
                "id": 1050
            }
        ]
    },
    {
        "province": "吉林省",
        "id": 7,
        "citys": [
            {
                "city": "长春市",
                "districts": [
                    {
                        "district": "南关区",
                        "id": 10529
                    },
                    {
                        "district": "宽城区",
                        "id": 10530
                    },
                    {
                        "district": "朝阳区",
                        "id": 10531
                    },
                    {
                        "district": "二道区",
                        "id": 10532
                    },
                    {
                        "district": "绿园区",
                        "id": 10533
                    },
                    {
                        "district": "双阳区",
                        "id": 10534
                    },
                    {
                        "district": "农安县",
                        "id": 10535
                    },
                    {
                        "district": "九台市",
                        "id": 10536
                    },
                    {
                        "district": "榆树市",
                        "id": 10537
                    },
                    {
                        "district": "德惠市",
                        "id": 10538
                    }
                ],
                "id": 1051
            },
            {
                "city": "吉林市",
                "districts": [
                    {
                        "district": "昌邑区",
                        "id": 10539
                    },
                    {
                        "district": "龙潭区",
                        "id": 10540
                    },
                    {
                        "district": "船营区",
                        "id": 10541
                    },
                    {
                        "district": "丰满区",
                        "id": 10542
                    },
                    {
                        "district": "永吉县",
                        "id": 10543
                    },
                    {
                        "district": "蛟河市",
                        "id": 10544
                    },
                    {
                        "district": "桦甸市",
                        "id": 10545
                    },
                    {
                        "district": "舒兰市",
                        "id": 10546
                    },
                    {
                        "district": "磐石市",
                        "id": 10547
                    }
                ],
                "id": 1052
            },
            {
                "city": "四平市",
                "districts": [
                    {
                        "district": "铁西区",
                        "id": 10548
                    },
                    {
                        "district": "铁东区",
                        "id": 10549
                    },
                    {
                        "district": "梨树县",
                        "id": 10550
                    },
                    {
                        "district": "伊通满族自治县",
                        "id": 10551
                    },
                    {
                        "district": "公主岭市",
                        "id": 10552
                    },
                    {
                        "district": "双辽市",
                        "id": 10553
                    }
                ],
                "id": 1053
            },
            {
                "city": "辽源市",
                "districts": [
                    {
                        "district": "龙山区",
                        "id": 10554
                    },
                    {
                        "district": "西安区",
                        "id": 10555
                    },
                    {
                        "district": "东丰县",
                        "id": 10556
                    },
                    {
                        "district": "东辽县",
                        "id": 10557
                    }
                ],
                "id": 1054
            },
            {
                "city": "通化市",
                "districts": [
                    {
                        "district": "东昌区",
                        "id": 10558
                    },
                    {
                        "district": "二道江区",
                        "id": 10559
                    },
                    {
                        "district": "通化县",
                        "id": 10560
                    },
                    {
                        "district": "辉南县",
                        "id": 10561
                    },
                    {
                        "district": "柳河县",
                        "id": 10562
                    },
                    {
                        "district": "梅河口市",
                        "id": 10563
                    },
                    {
                        "district": "集安市",
                        "id": 10564
                    }
                ],
                "id": 1055
            },
            {
                "city": "白山市",
                "districts": [
                    {
                        "district": "八道江区",
                        "id": 10565
                    },
                    {
                        "district": "抚松县",
                        "id": 10566
                    },
                    {
                        "district": "靖宇县",
                        "id": 10567
                    },
                    {
                        "district": "长白朝鲜族自治县",
                        "id": 10568
                    },
                    {
                        "district": "江源县",
                        "id": 10569
                    },
                    {
                        "district": "临江市",
                        "id": 10570
                    }
                ],
                "id": 1056
            },
            {
                "city": "松原市",
                "districts": [
                    {
                        "district": "宁江区",
                        "id": 10571
                    },
                    {
                        "district": "前郭尔罗斯蒙古族自治县",
                        "id": 10572
                    },
                    {
                        "district": "长岭县",
                        "id": 10573
                    },
                    {
                        "district": "乾安县",
                        "id": 10574
                    },
                    {
                        "district": "扶余县",
                        "id": 10575
                    }
                ],
                "id": 1057
            },
            {
                "city": "白城市",
                "districts": [
                    {
                        "district": "洮北区",
                        "id": 10576
                    },
                    {
                        "district": "镇赉县",
                        "id": 10577
                    },
                    {
                        "district": "通榆县",
                        "id": 10578
                    },
                    {
                        "district": "洮南市",
                        "id": 10579
                    },
                    {
                        "district": "大安市",
                        "id": 10580
                    }
                ],
                "id": 1058
            },
            {
                "city": "延边朝鲜族自治州",
                "districts": [
                    {
                        "district": "延吉市",
                        "id": 10581
                    },
                    {
                        "district": "图们市",
                        "id": 10582
                    },
                    {
                        "district": "敦化市",
                        "id": 10583
                    },
                    {
                        "district": "珲春市",
                        "id": 10584
                    },
                    {
                        "district": "龙井市",
                        "id": 10585
                    },
                    {
                        "district": "和龙市",
                        "id": 10586
                    },
                    {
                        "district": "汪清县",
                        "id": 10587
                    },
                    {
                        "district": "安图县",
                        "id": 10588
                    }
                ],
                "id": 1059
            }
        ]
    },
    {
        "province": "黑龙江省",
        "id": 8,
        "citys": [
            {
                "city": "哈尔滨市",
                "districts": [
                    {
                        "district": "道里区",
                        "id": 10589
                    },
                    {
                        "district": "南岗区",
                        "id": 10590
                    },
                    {
                        "district": "道外区",
                        "id": 10591
                    },
                    {
                        "district": "香坊区",
                        "id": 10592
                    },
                    {
                        "district": "动力区",
                        "id": 10593
                    },
                    {
                        "district": "平房区",
                        "id": 10594
                    },
                    {
                        "district": "松北区",
                        "id": 10595
                    },
                    {
                        "district": "呼兰区",
                        "id": 10596
                    },
                    {
                        "district": "依兰县",
                        "id": 10597
                    },
                    {
                        "district": "方正县",
                        "id": 10598
                    },
                    {
                        "district": "宾县",
                        "id": 10599
                    },
                    {
                        "district": "巴彦县",
                        "id": 10600
                    },
                    {
                        "district": "木兰县",
                        "id": 10601
                    },
                    {
                        "district": "通河县",
                        "id": 10602
                    },
                    {
                        "district": "延寿县",
                        "id": 10603
                    },
                    {
                        "district": "阿城市",
                        "id": 10604
                    },
                    {
                        "district": "双城市",
                        "id": 10605
                    },
                    {
                        "district": "尚志市",
                        "id": 10606
                    },
                    {
                        "district": "五常市",
                        "id": 10607
                    }
                ],
                "id": 1060
            },
            {
                "city": "齐齐哈尔市",
                "districts": [
                    {
                        "district": "龙沙区",
                        "id": 10608
                    },
                    {
                        "district": "建华区",
                        "id": 10609
                    },
                    {
                        "district": "铁锋区",
                        "id": 10610
                    },
                    {
                        "district": "昂昂溪区",
                        "id": 10611
                    },
                    {
                        "district": "富拉尔基区",
                        "id": 10612
                    },
                    {
                        "district": "碾子山区",
                        "id": 10613
                    },
                    {
                        "district": "梅里斯达斡尔族区",
                        "id": 10614
                    },
                    {
                        "district": "龙江县",
                        "id": 10615
                    },
                    {
                        "district": "依安县",
                        "id": 10616
                    },
                    {
                        "district": "泰来县",
                        "id": 10617
                    },
                    {
                        "district": "甘南县",
                        "id": 10618
                    },
                    {
                        "district": "富裕县",
                        "id": 10619
                    },
                    {
                        "district": "克山县",
                        "id": 10620
                    },
                    {
                        "district": "克东县",
                        "id": 10621
                    },
                    {
                        "district": "拜泉县",
                        "id": 10622
                    },
                    {
                        "district": "讷河市",
                        "id": 10623
                    }
                ],
                "id": 1061
            },
            {
                "city": "鸡西市",
                "districts": [
                    {
                        "district": "鸡冠区",
                        "id": 10624
                    },
                    {
                        "district": "恒山区",
                        "id": 10625
                    },
                    {
                        "district": "滴道区",
                        "id": 10626
                    },
                    {
                        "district": "梨树区",
                        "id": 10627
                    },
                    {
                        "district": "城子河区",
                        "id": 10628
                    },
                    {
                        "district": "麻山区",
                        "id": 10629
                    },
                    {
                        "district": "鸡东县",
                        "id": 10630
                    },
                    {
                        "district": "虎林市",
                        "id": 10631
                    },
                    {
                        "district": "密山市",
                        "id": 10632
                    }
                ],
                "id": 1062
            },
            {
                "city": "鹤岗市",
                "districts": [
                    {
                        "district": "向阳区",
                        "id": 10633
                    },
                    {
                        "district": "工农区",
                        "id": 10634
                    },
                    {
                        "district": "南山区",
                        "id": 10635
                    },
                    {
                        "district": "兴安区",
                        "id": 10636
                    },
                    {
                        "district": "东山区",
                        "id": 10637
                    },
                    {
                        "district": "兴山区",
                        "id": 10638
                    },
                    {
                        "district": "萝北县",
                        "id": 10639
                    },
                    {
                        "district": "绥滨县",
                        "id": 10640
                    }
                ],
                "id": 1063
            },
            {
                "city": "双鸭山市",
                "districts": [
                    {
                        "district": "尖山区",
                        "id": 10641
                    },
                    {
                        "district": "岭东区",
                        "id": 10642
                    },
                    {
                        "district": "四方台区",
                        "id": 10643
                    },
                    {
                        "district": "宝山区",
                        "id": 10644
                    },
                    {
                        "district": "集贤县",
                        "id": 10645
                    },
                    {
                        "district": "友谊县",
                        "id": 10646
                    },
                    {
                        "district": "宝清县",
                        "id": 10647
                    },
                    {
                        "district": "饶河县",
                        "id": 10648
                    }
                ],
                "id": 1064
            },
            {
                "city": "大庆市",
                "districts": [
                    {
                        "district": "萨尔图区",
                        "id": 10649
                    },
                    {
                        "district": "龙凤区",
                        "id": 10650
                    },
                    {
                        "district": "让胡路区",
                        "id": 10651
                    },
                    {
                        "district": "红岗区",
                        "id": 10652
                    },
                    {
                        "district": "大同区",
                        "id": 10653
                    },
                    {
                        "district": "肇州县",
                        "id": 10654
                    },
                    {
                        "district": "肇源县",
                        "id": 10655
                    },
                    {
                        "district": "林甸县",
                        "id": 10656
                    },
                    {
                        "district": "杜尔伯特蒙古族自治县",
                        "id": 10657
                    }
                ],
                "id": 1065
            },
            {
                "city": "伊春市",
                "districts": [
                    {
                        "district": "伊春区",
                        "id": 10658
                    },
                    {
                        "district": "南岔区",
                        "id": 10659
                    },
                    {
                        "district": "友好区",
                        "id": 10660
                    },
                    {
                        "district": "西林区",
                        "id": 10661
                    },
                    {
                        "district": "翠峦区",
                        "id": 10662
                    },
                    {
                        "district": "新青区",
                        "id": 10663
                    },
                    {
                        "district": "美溪区",
                        "id": 10664
                    },
                    {
                        "district": "金山屯区",
                        "id": 10665
                    },
                    {
                        "district": "五营区",
                        "id": 10666
                    },
                    {
                        "district": "乌马河区",
                        "id": 10667
                    },
                    {
                        "district": "汤旺河区",
                        "id": 10668
                    },
                    {
                        "district": "带岭区",
                        "id": 10669
                    },
                    {
                        "district": "乌伊岭区",
                        "id": 10670
                    },
                    {
                        "district": "红星区",
                        "id": 10671
                    },
                    {
                        "district": "上甘岭区",
                        "id": 10672
                    },
                    {
                        "district": "嘉荫县",
                        "id": 10673
                    },
                    {
                        "district": "铁力市",
                        "id": 10674
                    }
                ],
                "id": 1066
            },
            {
                "city": "佳木斯市",
                "districts": [
                    {
                        "district": "永红区",
                        "id": 10675
                    },
                    {
                        "district": "向阳区",
                        "id": 10676
                    },
                    {
                        "district": "前进区",
                        "id": 10677
                    },
                    {
                        "district": "东风区",
                        "id": 10678
                    },
                    {
                        "district": "郊区",
                        "id": 10679
                    },
                    {
                        "district": "桦南县",
                        "id": 10680
                    },
                    {
                        "district": "桦川县",
                        "id": 10681
                    },
                    {
                        "district": "汤原县",
                        "id": 10682
                    },
                    {
                        "district": "抚远县",
                        "id": 10683
                    },
                    {
                        "district": "同江市",
                        "id": 10684
                    },
                    {
                        "district": "富锦市",
                        "id": 10685
                    }
                ],
                "id": 1067
            },
            {
                "city": "七台河市",
                "districts": [
                    {
                        "district": "新兴区",
                        "id": 10686
                    },
                    {
                        "district": "桃山区",
                        "id": 10687
                    },
                    {
                        "district": "茄子河区",
                        "id": 10688
                    },
                    {
                        "district": "勃利县",
                        "id": 10689
                    }
                ],
                "id": 1068
            },
            {
                "city": "牡丹江市",
                "districts": [
                    {
                        "district": "东安区",
                        "id": 10690
                    },
                    {
                        "district": "阳明区",
                        "id": 10691
                    },
                    {
                        "district": "爱民区",
                        "id": 10692
                    },
                    {
                        "district": "西安区",
                        "id": 10693
                    },
                    {
                        "district": "东宁县",
                        "id": 10694
                    },
                    {
                        "district": "林口县",
                        "id": 10695
                    },
                    {
                        "district": "绥芬河市",
                        "id": 10696
                    },
                    {
                        "district": "海林市",
                        "id": 10697
                    },
                    {
                        "district": "宁安市",
                        "id": 10698
                    },
                    {
                        "district": "穆棱市",
                        "id": 10699
                    }
                ],
                "id": 1069
            },
            {
                "city": "黑河市",
                "districts": [
                    {
                        "district": "爱辉区",
                        "id": 10700
                    },
                    {
                        "district": "嫩江县",
                        "id": 10701
                    },
                    {
                        "district": "逊克县",
                        "id": 10702
                    },
                    {
                        "district": "孙吴县",
                        "id": 10703
                    },
                    {
                        "district": "北安市",
                        "id": 10704
                    },
                    {
                        "district": "五大连池市",
                        "id": 10705
                    }
                ],
                "id": 1070
            },
            {
                "city": "绥化市",
                "districts": [
                    {
                        "district": "北林区",
                        "id": 10706
                    },
                    {
                        "district": "望奎县",
                        "id": 10707
                    },
                    {
                        "district": "兰西县",
                        "id": 10708
                    },
                    {
                        "district": "青冈县",
                        "id": 10709
                    },
                    {
                        "district": "庆安县",
                        "id": 10710
                    },
                    {
                        "district": "明水县",
                        "id": 10711
                    },
                    {
                        "district": "绥棱县",
                        "id": 10712
                    },
                    {
                        "district": "安达市",
                        "id": 10713
                    },
                    {
                        "district": "肇东市",
                        "id": 10714
                    },
                    {
                        "district": "海伦市",
                        "id": 10715
                    }
                ],
                "id": 1071
            },
            {
                "city": "大兴安岭地区",
                "districts": [
                    {
                        "district": "呼玛县",
                        "id": 10716
                    },
                    {
                        "district": "塔河县",
                        "id": 10717
                    },
                    {
                        "district": "漠河县",
                        "id": 10718
                    }
                ],
                "id": 1072
            }
        ]
    },
    {
        "province": "上海市",
        "id": 9,
        "citys": [
            {
                "city": "上海市",
                "districts": [
                    {
                        "district": "黄浦区",
                        "id": 10719
                    },
                    {
                        "district": "卢湾区",
                        "id": 10720
                    },
                    {
                        "district": "徐汇区",
                        "id": 10721
                    },
                    {
                        "district": "长宁区",
                        "id": 10722
                    },
                    {
                        "district": "静安区",
                        "id": 10723
                    },
                    {
                        "district": "普陀区",
                        "id": 10724
                    },
                    {
                        "district": "闸北区",
                        "id": 10725
                    },
                    {
                        "district": "虹口区",
                        "id": 10726
                    },
                    {
                        "district": "杨浦区",
                        "id": 10727
                    },
                    {
                        "district": "闵行区",
                        "id": 10728
                    },
                    {
                        "district": "宝山区",
                        "id": 10729
                    },
                    {
                        "district": "嘉定区",
                        "id": 10730
                    },
                    {
                        "district": "浦东新区",
                        "id": 10731
                    },
                    {
                        "district": "金山区",
                        "id": 10732
                    },
                    {
                        "district": "松江区",
                        "id": 10733
                    },
                    {
                        "district": "青浦区",
                        "id": 10734
                    },
                    {
                        "district": "南汇区",
                        "id": 10735
                    },
                    {
                        "district": "奉贤区",
                        "id": 10736
                    },
                    {
                        "district": "崇明县",
                        "id": 10737
                    }
                ],
                "id": 1073
            }
        ]
    },
    {
        "province": "江苏省",
        "id": 10,
        "citys": [
            {
                "city": "南京市",
                "districts": [
                    {
                        "district": "玄武区",
                        "id": 10738
                    },
                    {
                        "district": "白下区",
                        "id": 10739
                    },
                    {
                        "district": "秦淮区",
                        "id": 10740
                    },
                    {
                        "district": "建邺区",
                        "id": 10741
                    },
                    {
                        "district": "鼓楼区",
                        "id": 10742
                    },
                    {
                        "district": "下关区",
                        "id": 10743
                    },
                    {
                        "district": "浦口区",
                        "id": 10744
                    },
                    {
                        "district": "栖霞区",
                        "id": 10745
                    },
                    {
                        "district": "雨花台区",
                        "id": 10746
                    },
                    {
                        "district": "江宁区",
                        "id": 10747
                    },
                    {
                        "district": "六合区",
                        "id": 10748
                    },
                    {
                        "district": "溧水县",
                        "id": 10749
                    },
                    {
                        "district": "高淳县",
                        "id": 10750
                    }
                ],
                "id": 1074
            },
            {
                "city": "无锡市",
                "districts": [
                    {
                        "district": "崇安区",
                        "id": 10751
                    },
                    {
                        "district": "南长区",
                        "id": 10752
                    },
                    {
                        "district": "北塘区",
                        "id": 10753
                    },
                    {
                        "district": "锡山区",
                        "id": 10754
                    },
                    {
                        "district": "惠山区",
                        "id": 10755
                    },
                    {
                        "district": "滨湖区",
                        "id": 10756
                    },
                    {
                        "district": "江阴市",
                        "id": 10757
                    },
                    {
                        "district": "宜兴市",
                        "id": 10758
                    }
                ],
                "id": 1075
            },
            {
                "city": "徐州市",
                "districts": [
                    {
                        "district": "鼓楼区",
                        "id": 10759
                    },
                    {
                        "district": "云龙区",
                        "id": 10760
                    },
                    {
                        "district": "九里区",
                        "id": 10761
                    },
                    {
                        "district": "贾汪区",
                        "id": 10762
                    },
                    {
                        "district": "泉山区",
                        "id": 10763
                    },
                    {
                        "district": "丰县",
                        "id": 10764
                    },
                    {
                        "district": "沛县",
                        "id": 10765
                    },
                    {
                        "district": "铜山县",
                        "id": 10766
                    },
                    {
                        "district": "睢宁县",
                        "id": 10767
                    },
                    {
                        "district": "新沂市",
                        "id": 10768
                    },
                    {
                        "district": "邳州市",
                        "id": 10769
                    }
                ],
                "id": 1076
            },
            {
                "city": "常州市",
                "districts": [
                    {
                        "district": "天宁区",
                        "id": 10770
                    },
                    {
                        "district": "钟楼区",
                        "id": 10771
                    },
                    {
                        "district": "戚墅堰区",
                        "id": 10772
                    },
                    {
                        "district": "新北区",
                        "id": 10773
                    },
                    {
                        "district": "武进区",
                        "id": 10774
                    },
                    {
                        "district": "溧阳市",
                        "id": 10775
                    },
                    {
                        "district": "金坛市",
                        "id": 10776
                    }
                ],
                "id": 1077
            },
            {
                "city": "苏州市",
                "districts": [
                    {
                        "district": "沧浪区",
                        "id": 10777
                    },
                    {
                        "district": "平江区",
                        "id": 10778
                    },
                    {
                        "district": "金阊区",
                        "id": 10779
                    },
                    {
                        "district": "虎丘区",
                        "id": 10780
                    },
                    {
                        "district": "吴中区",
                        "id": 10781
                    },
                    {
                        "district": "相城区",
                        "id": 10782
                    },
                    {
                        "district": "常熟市",
                        "id": 10783
                    },
                    {
                        "district": "张家港市",
                        "id": 10784
                    },
                    {
                        "district": "昆山市",
                        "id": 10785
                    },
                    {
                        "district": "吴江市",
                        "id": 10786
                    },
                    {
                        "district": "太仓市",
                        "id": 10787
                    }
                ],
                "id": 1078
            },
            {
                "city": "南通市",
                "districts": [
                    {
                        "district": "崇川区",
                        "id": 10788
                    },
                    {
                        "district": "港闸区",
                        "id": 10789
                    },
                    {
                        "district": "海安县",
                        "id": 10790
                    },
                    {
                        "district": "如东县",
                        "id": 10791
                    },
                    {
                        "district": "启东市",
                        "id": 10792
                    },
                    {
                        "district": "如皋市",
                        "id": 10793
                    },
                    {
                        "district": "通州市",
                        "id": 10794
                    },
                    {
                        "district": "海门市",
                        "id": 10795
                    }
                ],
                "id": 1079
            },
            {
                "city": "连云港市",
                "districts": [
                    {
                        "district": "连云区",
                        "id": 10796
                    },
                    {
                        "district": "新浦区",
                        "id": 10797
                    },
                    {
                        "district": "海州区",
                        "id": 10798
                    },
                    {
                        "district": "赣榆县",
                        "id": 10799
                    },
                    {
                        "district": "东海县",
                        "id": 10800
                    },
                    {
                        "district": "灌云县",
                        "id": 10801
                    },
                    {
                        "district": "灌南县",
                        "id": 10802
                    }
                ],
                "id": 1080
            },
            {
                "city": "淮安市",
                "districts": [
                    {
                        "district": "清河区",
                        "id": 10803
                    },
                    {
                        "district": "楚州区",
                        "id": 10804
                    },
                    {
                        "district": "淮阴区",
                        "id": 10805
                    },
                    {
                        "district": "清浦区",
                        "id": 10806
                    },
                    {
                        "district": "涟水县",
                        "id": 10807
                    },
                    {
                        "district": "洪泽县",
                        "id": 10808
                    },
                    {
                        "district": "盱眙县",
                        "id": 10809
                    },
                    {
                        "district": "金湖县",
                        "id": 10810
                    }
                ],
                "id": 1081
            },
            {
                "city": "盐城市",
                "districts": [
                    {
                        "district": "亭湖区",
                        "id": 10811
                    },
                    {
                        "district": "盐都区",
                        "id": 10812
                    },
                    {
                        "district": "响水县",
                        "id": 10813
                    },
                    {
                        "district": "滨海县",
                        "id": 10814
                    },
                    {
                        "district": "阜宁县",
                        "id": 10815
                    },
                    {
                        "district": "射阳县",
                        "id": 10816
                    },
                    {
                        "district": "建湖县",
                        "id": 10817
                    },
                    {
                        "district": "东台市",
                        "id": 10818
                    },
                    {
                        "district": "大丰市",
                        "id": 10819
                    }
                ],
                "id": 1082
            },
            {
                "city": "扬州市",
                "districts": [
                    {
                        "district": "广陵区",
                        "id": 10820
                    },
                    {
                        "district": "邗江区",
                        "id": 10821
                    },
                    {
                        "district": "维扬区",
                        "id": 10822
                    },
                    {
                        "district": "宝应县",
                        "id": 10823
                    },
                    {
                        "district": "仪征市",
                        "id": 10824
                    },
                    {
                        "district": "高邮市",
                        "id": 10825
                    },
                    {
                        "district": "江都市",
                        "id": 10826
                    }
                ],
                "id": 1083
            },
            {
                "city": "镇江市",
                "districts": [
                    {
                        "district": "京口区",
                        "id": 10827
                    },
                    {
                        "district": "润州区",
                        "id": 10828
                    },
                    {
                        "district": "丹徒区",
                        "id": 10829
                    },
                    {
                        "district": "丹阳市",
                        "id": 10830
                    },
                    {
                        "district": "扬中市",
                        "id": 10831
                    },
                    {
                        "district": "句容市",
                        "id": 10832
                    }
                ],
                "id": 1084
            },
            {
                "city": "泰州市",
                "districts": [
                    {
                        "district": "海陵区",
                        "id": 10833
                    },
                    {
                        "district": "高港区",
                        "id": 10834
                    },
                    {
                        "district": "兴化市",
                        "id": 10835
                    },
                    {
                        "district": "靖江市",
                        "id": 10836
                    },
                    {
                        "district": "泰兴市",
                        "id": 10837
                    },
                    {
                        "district": "姜堰市",
                        "id": 10838
                    }
                ],
                "id": 1085
            },
            {
                "city": "宿迁市",
                "districts": [
                    {
                        "district": "宿城区",
                        "id": 10839
                    },
                    {
                        "district": "宿豫区",
                        "id": 10840
                    },
                    {
                        "district": "沭阳县",
                        "id": 10841
                    },
                    {
                        "district": "泗阳县",
                        "id": 10842
                    },
                    {
                        "district": "泗洪县",
                        "id": 10843
                    }
                ],
                "id": 1086
            }
        ]
    },
    {
        "province": "浙江省",
        "id": 11,
        "citys": [
            {
                "city": "杭州市",
                "districts": [
                    {
                        "district": "上城区",
                        "id": 10844
                    },
                    {
                        "district": "下城区",
                        "id": 10845
                    },
                    {
                        "district": "江干区",
                        "id": 10846
                    },
                    {
                        "district": "拱墅区",
                        "id": 10847
                    },
                    {
                        "district": "西湖区",
                        "id": 10848
                    },
                    {
                        "district": "滨江区",
                        "id": 10849
                    },
                    {
                        "district": "萧山区",
                        "id": 10850
                    },
                    {
                        "district": "余杭区",
                        "id": 10851
                    },
                    {
                        "district": "桐庐县",
                        "id": 10852
                    },
                    {
                        "district": "淳安县",
                        "id": 10853
                    },
                    {
                        "district": "建德市",
                        "id": 10854
                    },
                    {
                        "district": "富阳市",
                        "id": 10855
                    },
                    {
                        "district": "临安市",
                        "id": 10856
                    }
                ],
                "id": 1087
            },
            {
                "city": "宁波市",
                "districts": [
                    {
                        "district": "海曙区",
                        "id": 10857
                    },
                    {
                        "district": "江东区",
                        "id": 10858
                    },
                    {
                        "district": "江北区",
                        "id": 10859
                    },
                    {
                        "district": "北仑区",
                        "id": 10860
                    },
                    {
                        "district": "镇海区",
                        "id": 10861
                    },
                    {
                        "district": "鄞州区",
                        "id": 10862
                    },
                    {
                        "district": "象山县",
                        "id": 10863
                    },
                    {
                        "district": "宁海县",
                        "id": 10864
                    },
                    {
                        "district": "余姚市",
                        "id": 10865
                    },
                    {
                        "district": "慈溪市",
                        "id": 10866
                    },
                    {
                        "district": "奉化市",
                        "id": 10867
                    }
                ],
                "id": 1088
            },
            {
                "city": "温州市",
                "districts": [
                    {
                        "district": "鹿城区",
                        "id": 10868
                    },
                    {
                        "district": "龙湾区",
                        "id": 10869
                    },
                    {
                        "district": "瓯海区",
                        "id": 10870
                    },
                    {
                        "district": "洞头县",
                        "id": 10871
                    },
                    {
                        "district": "永嘉县",
                        "id": 10872
                    },
                    {
                        "district": "平阳县",
                        "id": 10873
                    },
                    {
                        "district": "苍南县",
                        "id": 10874
                    },
                    {
                        "district": "文成县",
                        "id": 10875
                    },
                    {
                        "district": "泰顺县",
                        "id": 10876
                    },
                    {
                        "district": "瑞安市",
                        "id": 10877
                    },
                    {
                        "district": "乐清市",
                        "id": 10878
                    }
                ],
                "id": 1089
            },
            {
                "city": "嘉兴市",
                "districts": [
                    {
                        "district": "秀城区",
                        "id": 10879
                    },
                    {
                        "district": "秀洲区",
                        "id": 10880
                    },
                    {
                        "district": "嘉善县",
                        "id": 10881
                    },
                    {
                        "district": "海盐县",
                        "id": 10882
                    },
                    {
                        "district": "海宁市",
                        "id": 10883
                    },
                    {
                        "district": "平湖市",
                        "id": 10884
                    },
                    {
                        "district": "桐乡市",
                        "id": 10885
                    }
                ],
                "id": 1090
            },
            {
                "city": "湖州市",
                "districts": [
                    {
                        "district": "吴兴区",
                        "id": 10886
                    },
                    {
                        "district": "南浔区",
                        "id": 10887
                    },
                    {
                        "district": "德清县",
                        "id": 10888
                    },
                    {
                        "district": "长兴县",
                        "id": 10889
                    },
                    {
                        "district": "安吉县",
                        "id": 10890
                    }
                ],
                "id": 1091
            },
            {
                "city": "绍兴市",
                "districts": [
                    {
                        "district": "越城区",
                        "id": 10891
                    },
                    {
                        "district": "绍兴县",
                        "id": 10892
                    },
                    {
                        "district": "新昌县",
                        "id": 10893
                    },
                    {
                        "district": "诸暨市",
                        "id": 10894
                    },
                    {
                        "district": "上虞市",
                        "id": 10895
                    },
                    {
                        "district": "嵊州市",
                        "id": 10896
                    }
                ],
                "id": 1092
            },
            {
                "city": "金华市",
                "districts": [
                    {
                        "district": "婺城区",
                        "id": 10897
                    },
                    {
                        "district": "金东区",
                        "id": 10898
                    },
                    {
                        "district": "武义县",
                        "id": 10899
                    },
                    {
                        "district": "浦江县",
                        "id": 10900
                    },
                    {
                        "district": "磐安县",
                        "id": 10901
                    },
                    {
                        "district": "兰溪市",
                        "id": 10902
                    },
                    {
                        "district": "义乌市",
                        "id": 10903
                    },
                    {
                        "district": "东阳市",
                        "id": 10904
                    },
                    {
                        "district": "永康市",
                        "id": 10905
                    }
                ],
                "id": 1093
            },
            {
                "city": "衢州市",
                "districts": [
                    {
                        "district": "柯城区",
                        "id": 10906
                    },
                    {
                        "district": "衢江区",
                        "id": 10907
                    },
                    {
                        "district": "常山县",
                        "id": 10908
                    },
                    {
                        "district": "开化县",
                        "id": 10909
                    },
                    {
                        "district": "龙游县",
                        "id": 10910
                    },
                    {
                        "district": "江山市",
                        "id": 10911
                    }
                ],
                "id": 1094
            },
            {
                "city": "舟山市",
                "districts": [
                    {
                        "district": "定海区",
                        "id": 10912
                    },
                    {
                        "district": "普陀区",
                        "id": 10913
                    },
                    {
                        "district": "岱山县",
                        "id": 10914
                    },
                    {
                        "district": "嵊泗县",
                        "id": 10915
                    }
                ],
                "id": 1095
            },
            {
                "city": "台州市",
                "districts": [
                    {
                        "district": "椒江区",
                        "id": 10916
                    },
                    {
                        "district": "黄岩区",
                        "id": 10917
                    },
                    {
                        "district": "路桥区",
                        "id": 10918
                    },
                    {
                        "district": "玉环县",
                        "id": 10919
                    },
                    {
                        "district": "三门县",
                        "id": 10920
                    },
                    {
                        "district": "天台县",
                        "id": 10921
                    },
                    {
                        "district": "仙居县",
                        "id": 10922
                    },
                    {
                        "district": "温岭市",
                        "id": 10923
                    },
                    {
                        "district": "临海市",
                        "id": 10924
                    }
                ],
                "id": 1096
            },
            {
                "city": "丽水市",
                "districts": [
                    {
                        "district": "莲都区",
                        "id": 10925
                    },
                    {
                        "district": "青田县",
                        "id": 10926
                    },
                    {
                        "district": "缙云县",
                        "id": 10927
                    },
                    {
                        "district": "遂昌县",
                        "id": 10928
                    },
                    {
                        "district": "松阳县",
                        "id": 10929
                    },
                    {
                        "district": "云和县",
                        "id": 10930
                    },
                    {
                        "district": "庆元县",
                        "id": 10931
                    },
                    {
                        "district": "景宁畲族自治县",
                        "id": 10932
                    },
                    {
                        "district": "龙泉市",
                        "id": 10933
                    }
                ],
                "id": 1097
            }
        ]
    },
    {
        "province": "安徽省",
        "id": 12,
        "citys": [
            {
                "city": "合肥市",
                "districts": [
                    {
                        "district": "瑶海区",
                        "id": 10934
                    },
                    {
                        "district": "庐阳区",
                        "id": 10935
                    },
                    {
                        "district": "蜀山区",
                        "id": 10936
                    },
                    {
                        "district": "包河区",
                        "id": 10937
                    },
                    {
                        "district": "长丰县",
                        "id": 10938
                    },
                    {
                        "district": "肥东县",
                        "id": 10939
                    },
                    {
                        "district": "肥西县",
                        "id": 10940
                    }
                ],
                "id": 1098
            },
            {
                "city": "芜湖市",
                "districts": [
                    {
                        "district": "镜湖区",
                        "id": 10941
                    },
                    {
                        "district": "马塘区",
                        "id": 10942
                    },
                    {
                        "district": "新芜区",
                        "id": 10943
                    },
                    {
                        "district": "鸠江区",
                        "id": 10944
                    },
                    {
                        "district": "芜湖县",
                        "id": 10945
                    },
                    {
                        "district": "繁昌县",
                        "id": 10946
                    },
                    {
                        "district": "南陵县",
                        "id": 10947
                    }
                ],
                "id": 1099
            },
            {
                "city": "蚌埠市",
                "districts": [
                    {
                        "district": "龙子湖区",
                        "id": 10948
                    },
                    {
                        "district": "蚌山区",
                        "id": 10949
                    },
                    {
                        "district": "禹会区",
                        "id": 10950
                    },
                    {
                        "district": "淮上区",
                        "id": 10951
                    },
                    {
                        "district": "怀远县",
                        "id": 10952
                    },
                    {
                        "district": "五河县",
                        "id": 10953
                    },
                    {
                        "district": "固镇县",
                        "id": 10954
                    }
                ],
                "id": 1100
            },
            {
                "city": "淮南市",
                "districts": [
                    {
                        "district": "大通区",
                        "id": 10955
                    },
                    {
                        "district": "田家庵区",
                        "id": 10956
                    },
                    {
                        "district": "谢家集区",
                        "id": 10957
                    },
                    {
                        "district": "八公山区",
                        "id": 10958
                    },
                    {
                        "district": "潘集区",
                        "id": 10959
                    },
                    {
                        "district": "凤台县",
                        "id": 10960
                    }
                ],
                "id": 1101
            },
            {
                "city": "马鞍山市",
                "districts": [
                    {
                        "district": "金家庄区",
                        "id": 10961
                    },
                    {
                        "district": "花山区",
                        "id": 10962
                    },
                    {
                        "district": "雨山区",
                        "id": 10963
                    },
                    {
                        "district": "当涂县",
                        "id": 10964
                    }
                ],
                "id": 1102
            },
            {
                "city": "淮北市",
                "districts": [
                    {
                        "district": "杜集区",
                        "id": 10965
                    },
                    {
                        "district": "相山区",
                        "id": 10966
                    },
                    {
                        "district": "烈山区",
                        "id": 10967
                    },
                    {
                        "district": "濉溪县",
                        "id": 10968
                    }
                ],
                "id": 1103
            },
            {
                "city": "铜陵市",
                "districts": [
                    {
                        "district": "铜官山区",
                        "id": 10969
                    },
                    {
                        "district": "狮子山区",
                        "id": 10970
                    },
                    {
                        "district": "郊区",
                        "id": 10971
                    },
                    {
                        "district": "铜陵县",
                        "id": 10972
                    }
                ],
                "id": 1104
            },
            {
                "city": "安庆市",
                "districts": [
                    {
                        "district": "迎江区",
                        "id": 10973
                    },
                    {
                        "district": "大观区",
                        "id": 10974
                    },
                    {
                        "district": "郊区",
                        "id": 10975
                    },
                    {
                        "district": "怀宁县",
                        "id": 10976
                    },
                    {
                        "district": "枞阳县",
                        "id": 10977
                    },
                    {
                        "district": "潜山县",
                        "id": 10978
                    },
                    {
                        "district": "太湖县",
                        "id": 10979
                    },
                    {
                        "district": "宿松县",
                        "id": 10980
                    },
                    {
                        "district": "望江县",
                        "id": 10981
                    },
                    {
                        "district": "岳西县",
                        "id": 10982
                    },
                    {
                        "district": "桐城市",
                        "id": 10983
                    }
                ],
                "id": 1105
            },
            {
                "city": "黄山市",
                "districts": [
                    {
                        "district": "屯溪区",
                        "id": 10984
                    },
                    {
                        "district": "黄山区",
                        "id": 10985
                    },
                    {
                        "district": "徽州区",
                        "id": 10986
                    },
                    {
                        "district": "歙县",
                        "id": 10987
                    },
                    {
                        "district": "休宁县",
                        "id": 10988
                    },
                    {
                        "district": "黟县",
                        "id": 10989
                    },
                    {
                        "district": "祁门县",
                        "id": 10990
                    }
                ],
                "id": 1106
            },
            {
                "city": "滁州市",
                "districts": [
                    {
                        "district": "琅琊区",
                        "id": 10991
                    },
                    {
                        "district": "南谯区",
                        "id": 10992
                    },
                    {
                        "district": "来安县",
                        "id": 10993
                    },
                    {
                        "district": "全椒县",
                        "id": 10994
                    },
                    {
                        "district": "定远县",
                        "id": 10995
                    },
                    {
                        "district": "凤阳县",
                        "id": 10996
                    },
                    {
                        "district": "天长市",
                        "id": 10997
                    },
                    {
                        "district": "明光市",
                        "id": 10998
                    }
                ],
                "id": 1107
            },
            {
                "city": "阜阳市",
                "districts": [
                    {
                        "district": "颍州区",
                        "id": 10999
                    },
                    {
                        "district": "颍东区",
                        "id": 11000
                    },
                    {
                        "district": "颍泉区",
                        "id": 11001
                    },
                    {
                        "district": "临泉县",
                        "id": 11002
                    },
                    {
                        "district": "太和县",
                        "id": 11003
                    },
                    {
                        "district": "阜南县",
                        "id": 11004
                    },
                    {
                        "district": "颍上县",
                        "id": 11005
                    },
                    {
                        "district": "界首市",
                        "id": 11006
                    }
                ],
                "id": 1108
            },
            {
                "city": "宿州市",
                "districts": [
                    {
                        "district": "埇桥区",
                        "id": 11007
                    },
                    {
                        "district": "砀山县",
                        "id": 11008
                    },
                    {
                        "district": "萧县",
                        "id": 11009
                    },
                    {
                        "district": "灵璧县",
                        "id": 11010
                    },
                    {
                        "district": "泗县",
                        "id": 11011
                    }
                ],
                "id": 1109
            },
            {
                "city": "巢湖市",
                "districts": [
                    {
                        "district": "居巢区",
                        "id": 11012
                    },
                    {
                        "district": "庐江县",
                        "id": 11013
                    },
                    {
                        "district": "无为县",
                        "id": 11014
                    },
                    {
                        "district": "含山县",
                        "id": 11015
                    },
                    {
                        "district": "和县",
                        "id": 11016
                    }
                ],
                "id": 1110
            },
            {
                "city": "六安市",
                "districts": [
                    {
                        "district": "金安区",
                        "id": 11017
                    },
                    {
                        "district": "裕安区",
                        "id": 11018
                    },
                    {
                        "district": "寿县",
                        "id": 11019
                    },
                    {
                        "district": "霍邱县",
                        "id": 11020
                    },
                    {
                        "district": "舒城县",
                        "id": 11021
                    },
                    {
                        "district": "金寨县",
                        "id": 11022
                    },
                    {
                        "district": "霍山县",
                        "id": 11023
                    }
                ],
                "id": 1111
            },
            {
                "city": "亳州市",
                "districts": [
                    {
                        "district": "谯城区",
                        "id": 11024
                    },
                    {
                        "district": "涡阳县",
                        "id": 11025
                    },
                    {
                        "district": "蒙城县",
                        "id": 11026
                    },
                    {
                        "district": "利辛县",
                        "id": 11027
                    }
                ],
                "id": 1112
            },
            {
                "city": "池州市",
                "districts": [
                    {
                        "district": "贵池区",
                        "id": 11028
                    },
                    {
                        "district": "东至县",
                        "id": 11029
                    },
                    {
                        "district": "石台县",
                        "id": 11030
                    },
                    {
                        "district": "青阳县",
                        "id": 11031
                    }
                ],
                "id": 1113
            },
            {
                "city": "宣城市",
                "districts": [
                    {
                        "district": "宣州区",
                        "id": 11032
                    },
                    {
                        "district": "郎溪县",
                        "id": 11033
                    },
                    {
                        "district": "广德县",
                        "id": 11034
                    },
                    {
                        "district": "泾县",
                        "id": 11035
                    },
                    {
                        "district": "绩溪县",
                        "id": 11036
                    },
                    {
                        "district": "旌德县",
                        "id": 11037
                    },
                    {
                        "district": "宁国市",
                        "id": 11038
                    }
                ],
                "id": 1114
            }
        ]
    },
    {
        "province": "福建省",
        "id": 13,
        "citys": [
            {
                "city": "福州市",
                "districts": [
                    {
                        "district": "鼓楼区",
                        "id": 11039
                    },
                    {
                        "district": "台江区",
                        "id": 11040
                    },
                    {
                        "district": "仓山区",
                        "id": 11041
                    },
                    {
                        "district": "马尾区",
                        "id": 11042
                    },
                    {
                        "district": "晋安区",
                        "id": 11043
                    },
                    {
                        "district": "闽侯县",
                        "id": 11044
                    },
                    {
                        "district": "连江县",
                        "id": 11045
                    },
                    {
                        "district": "罗源县",
                        "id": 11046
                    },
                    {
                        "district": "闽清县",
                        "id": 11047
                    },
                    {
                        "district": "永泰县",
                        "id": 11048
                    },
                    {
                        "district": "平潭县",
                        "id": 11049
                    },
                    {
                        "district": "福清市",
                        "id": 11050
                    },
                    {
                        "district": "长乐市",
                        "id": 11051
                    }
                ],
                "id": 1115
            },
            {
                "city": "厦门市",
                "districts": [
                    {
                        "district": "思明区",
                        "id": 11052
                    },
                    {
                        "district": "海沧区",
                        "id": 11053
                    },
                    {
                        "district": "湖里区",
                        "id": 11054
                    },
                    {
                        "district": "集美区",
                        "id": 11055
                    },
                    {
                        "district": "同安区",
                        "id": 11056
                    },
                    {
                        "district": "翔安区",
                        "id": 11057
                    }
                ],
                "id": 1116
            },
            {
                "city": "莆田市",
                "districts": [
                    {
                        "district": "城厢区",
                        "id": 11058
                    },
                    {
                        "district": "涵江区",
                        "id": 11059
                    },
                    {
                        "district": "荔城区",
                        "id": 11060
                    },
                    {
                        "district": "秀屿区",
                        "id": 11061
                    },
                    {
                        "district": "仙游县",
                        "id": 11062
                    }
                ],
                "id": 1117
            },
            {
                "city": "三明市",
                "districts": [
                    {
                        "district": "梅列区",
                        "id": 11063
                    },
                    {
                        "district": "三元区",
                        "id": 11064
                    },
                    {
                        "district": "明溪县",
                        "id": 11065
                    },
                    {
                        "district": "清流县",
                        "id": 11066
                    },
                    {
                        "district": "宁化县",
                        "id": 11067
                    },
                    {
                        "district": "大田县",
                        "id": 11068
                    },
                    {
                        "district": "尤溪县",
                        "id": 11069
                    },
                    {
                        "district": "沙县",
                        "id": 11070
                    },
                    {
                        "district": "将乐县",
                        "id": 11071
                    },
                    {
                        "district": "泰宁县",
                        "id": 11072
                    },
                    {
                        "district": "建宁县",
                        "id": 11073
                    },
                    {
                        "district": "永安市",
                        "id": 11074
                    }
                ],
                "id": 1118
            },
            {
                "city": "泉州市",
                "districts": [
                    {
                        "district": "鲤城区",
                        "id": 11075
                    },
                    {
                        "district": "丰泽区",
                        "id": 11076
                    },
                    {
                        "district": "洛江区",
                        "id": 11077
                    },
                    {
                        "district": "泉港区",
                        "id": 11078
                    },
                    {
                        "district": "惠安县",
                        "id": 11079
                    },
                    {
                        "district": "安溪县",
                        "id": 11080
                    },
                    {
                        "district": "永春县",
                        "id": 11081
                    },
                    {
                        "district": "德化县",
                        "id": 11082
                    },
                    {
                        "district": "金门县",
                        "id": 11083
                    },
                    {
                        "district": "石狮市",
                        "id": 11084
                    },
                    {
                        "district": "晋江市",
                        "id": 11085
                    },
                    {
                        "district": "南安市",
                        "id": 11086
                    }
                ],
                "id": 1119
            },
            {
                "city": "漳州市",
                "districts": [
                    {
                        "district": "芗城区",
                        "id": 11087
                    },
                    {
                        "district": "龙文区",
                        "id": 11088
                    },
                    {
                        "district": "云霄县",
                        "id": 11089
                    },
                    {
                        "district": "漳浦县",
                        "id": 11090
                    },
                    {
                        "district": "诏安县",
                        "id": 11091
                    },
                    {
                        "district": "长泰县",
                        "id": 11092
                    },
                    {
                        "district": "东山县",
                        "id": 11093
                    },
                    {
                        "district": "南靖县",
                        "id": 11094
                    },
                    {
                        "district": "平和县",
                        "id": 11095
                    },
                    {
                        "district": "华安县",
                        "id": 11096
                    },
                    {
                        "district": "龙海市",
                        "id": 11097
                    }
                ],
                "id": 1120
            },
            {
                "city": "南平市",
                "districts": [
                    {
                        "district": "延平区",
                        "id": 11098
                    },
                    {
                        "district": "顺昌县",
                        "id": 11099
                    },
                    {
                        "district": "浦城县",
                        "id": 11100
                    },
                    {
                        "district": "光泽县",
                        "id": 11101
                    },
                    {
                        "district": "松溪县",
                        "id": 11102
                    },
                    {
                        "district": "政和县",
                        "id": 11103
                    },
                    {
                        "district": "邵武市",
                        "id": 11104
                    },
                    {
                        "district": "武夷山市",
                        "id": 11105
                    },
                    {
                        "district": "建瓯市",
                        "id": 11106
                    },
                    {
                        "district": "建阳市",
                        "id": 11107
                    }
                ],
                "id": 1121
            },
            {
                "city": "龙岩市",
                "districts": [
                    {
                        "district": "新罗区",
                        "id": 11108
                    },
                    {
                        "district": "长汀县",
                        "id": 11109
                    },
                    {
                        "district": "永定县",
                        "id": 11110
                    },
                    {
                        "district": "上杭县",
                        "id": 11111
                    },
                    {
                        "district": "武平县",
                        "id": 11112
                    },
                    {
                        "district": "连城县",
                        "id": 11113
                    },
                    {
                        "district": "漳平市",
                        "id": 11114
                    }
                ],
                "id": 1122
            },
            {
                "city": "宁德市",
                "districts": [
                    {
                        "district": "蕉城区",
                        "id": 11115
                    },
                    {
                        "district": "霞浦县",
                        "id": 11116
                    },
                    {
                        "district": "古田县",
                        "id": 11117
                    },
                    {
                        "district": "屏南县",
                        "id": 11118
                    },
                    {
                        "district": "寿宁县",
                        "id": 11119
                    },
                    {
                        "district": "周宁县",
                        "id": 11120
                    },
                    {
                        "district": "柘荣县",
                        "id": 11121
                    },
                    {
                        "district": "福安市",
                        "id": 11122
                    },
                    {
                        "district": "福鼎市",
                        "id": 11123
                    }
                ],
                "id": 1123
            }
        ]
    },
    {
        "province": "江西省",
        "id": 14,
        "citys": [
            {
                "city": "南昌市",
                "districts": [
                    {
                        "district": "东湖区",
                        "id": 11124
                    },
                    {
                        "district": "西湖区",
                        "id": 11125
                    },
                    {
                        "district": "青云谱区",
                        "id": 11126
                    },
                    {
                        "district": "湾里区",
                        "id": 11127
                    },
                    {
                        "district": "青山湖区",
                        "id": 11128
                    },
                    {
                        "district": "南昌县",
                        "id": 11129
                    },
                    {
                        "district": "新建县",
                        "id": 11130
                    },
                    {
                        "district": "安义县",
                        "id": 11131
                    },
                    {
                        "district": "进贤县",
                        "id": 11132
                    }
                ],
                "id": 1124
            },
            {
                "city": "景德镇市",
                "districts": [
                    {
                        "district": "昌江区",
                        "id": 11133
                    },
                    {
                        "district": "珠山区",
                        "id": 11134
                    },
                    {
                        "district": "浮梁县",
                        "id": 11135
                    },
                    {
                        "district": "乐平市",
                        "id": 11136
                    }
                ],
                "id": 1125
            },
            {
                "city": "萍乡市",
                "districts": [
                    {
                        "district": "安源区",
                        "id": 11137
                    },
                    {
                        "district": "湘东区",
                        "id": 11138
                    },
                    {
                        "district": "莲花县",
                        "id": 11139
                    },
                    {
                        "district": "上栗县",
                        "id": 11140
                    },
                    {
                        "district": "芦溪县",
                        "id": 11141
                    }
                ],
                "id": 1126
            },
            {
                "city": "九江市",
                "districts": [
                    {
                        "district": "庐山区",
                        "id": 11142
                    },
                    {
                        "district": "浔阳区",
                        "id": 11143
                    },
                    {
                        "district": "九江县",
                        "id": 11144
                    },
                    {
                        "district": "武宁县",
                        "id": 11145
                    },
                    {
                        "district": "修水县",
                        "id": 11146
                    },
                    {
                        "district": "永修县",
                        "id": 11147
                    },
                    {
                        "district": "德安县",
                        "id": 11148
                    },
                    {
                        "district": "星子县",
                        "id": 11149
                    },
                    {
                        "district": "都昌县",
                        "id": 11150
                    },
                    {
                        "district": "湖口县",
                        "id": 11151
                    },
                    {
                        "district": "彭泽县",
                        "id": 11152
                    },
                    {
                        "district": "瑞昌市",
                        "id": 11153
                    }
                ],
                "id": 1127
            },
            {
                "city": "新余市",
                "districts": [
                    {
                        "district": "渝水区",
                        "id": 11154
                    },
                    {
                        "district": "分宜县",
                        "id": 11155
                    }
                ],
                "id": 1128
            },
            {
                "city": "鹰潭市",
                "districts": [
                    {
                        "district": "月湖区",
                        "id": 11156
                    },
                    {
                        "district": "余江县",
                        "id": 11157
                    },
                    {
                        "district": "贵溪市",
                        "id": 11158
                    }
                ],
                "id": 1129
            },
            {
                "city": "赣州市",
                "districts": [
                    {
                        "district": "章贡区",
                        "id": 11159
                    },
                    {
                        "district": "赣县",
                        "id": 11160
                    },
                    {
                        "district": "信丰县",
                        "id": 11161
                    },
                    {
                        "district": "大余县",
                        "id": 11162
                    },
                    {
                        "district": "上犹县",
                        "id": 11163
                    },
                    {
                        "district": "崇义县",
                        "id": 11164
                    },
                    {
                        "district": "安远县",
                        "id": 11165
                    },
                    {
                        "district": "龙南县",
                        "id": 11166
                    },
                    {
                        "district": "定南县",
                        "id": 11167
                    },
                    {
                        "district": "全南县",
                        "id": 11168
                    },
                    {
                        "district": "宁都县",
                        "id": 11169
                    },
                    {
                        "district": "于都县",
                        "id": 11170
                    },
                    {
                        "district": "兴国县",
                        "id": 11171
                    },
                    {
                        "district": "会昌县",
                        "id": 11172
                    },
                    {
                        "district": "寻乌县",
                        "id": 11173
                    },
                    {
                        "district": "石城县",
                        "id": 11174
                    },
                    {
                        "district": "瑞金市",
                        "id": 11175
                    },
                    {
                        "district": "南康市",
                        "id": 11176
                    }
                ],
                "id": 1130
            },
            {
                "city": "吉安市",
                "districts": [
                    {
                        "district": "吉州区",
                        "id": 11177
                    },
                    {
                        "district": "青原区",
                        "id": 11178
                    },
                    {
                        "district": "吉安县",
                        "id": 11179
                    },
                    {
                        "district": "吉水县",
                        "id": 11180
                    },
                    {
                        "district": "峡江县",
                        "id": 11181
                    },
                    {
                        "district": "新干县",
                        "id": 11182
                    },
                    {
                        "district": "永丰县",
                        "id": 11183
                    },
                    {
                        "district": "泰和县",
                        "id": 11184
                    },
                    {
                        "district": "遂川县",
                        "id": 11185
                    },
                    {
                        "district": "万安县",
                        "id": 11186
                    },
                    {
                        "district": "安福县",
                        "id": 11187
                    },
                    {
                        "district": "永新县",
                        "id": 11188
                    },
                    {
                        "district": "井冈山市",
                        "id": 11189
                    }
                ],
                "id": 1131
            },
            {
                "city": "宜春市",
                "districts": [
                    {
                        "district": "袁州区",
                        "id": 11190
                    },
                    {
                        "district": "奉新县",
                        "id": 11191
                    },
                    {
                        "district": "万载县",
                        "id": 11192
                    },
                    {
                        "district": "上高县",
                        "id": 11193
                    },
                    {
                        "district": "宜丰县",
                        "id": 11194
                    },
                    {
                        "district": "靖安县",
                        "id": 11195
                    },
                    {
                        "district": "铜鼓县",
                        "id": 11196
                    },
                    {
                        "district": "丰城市",
                        "id": 11197
                    },
                    {
                        "district": "樟树市",
                        "id": 11198
                    },
                    {
                        "district": "高安市",
                        "id": 11199
                    }
                ],
                "id": 1132
            },
            {
                "city": "抚州市",
                "districts": [
                    {
                        "district": "临川区",
                        "id": 11200
                    },
                    {
                        "district": "南城县",
                        "id": 11201
                    },
                    {
                        "district": "黎川县",
                        "id": 11202
                    },
                    {
                        "district": "南丰县",
                        "id": 11203
                    },
                    {
                        "district": "崇仁县",
                        "id": 11204
                    },
                    {
                        "district": "乐安县",
                        "id": 11205
                    },
                    {
                        "district": "宜黄县",
                        "id": 11206
                    },
                    {
                        "district": "金溪县",
                        "id": 11207
                    },
                    {
                        "district": "资溪县",
                        "id": 11208
                    },
                    {
                        "district": "东乡县",
                        "id": 11209
                    },
                    {
                        "district": "广昌县",
                        "id": 11210
                    }
                ],
                "id": 1133
            },
            {
                "city": "上饶市",
                "districts": [
                    {
                        "district": "信州区",
                        "id": 11211
                    },
                    {
                        "district": "上饶县",
                        "id": 11212
                    },
                    {
                        "district": "广丰县",
                        "id": 11213
                    },
                    {
                        "district": "玉山县",
                        "id": 11214
                    },
                    {
                        "district": "铅山县",
                        "id": 11215
                    },
                    {
                        "district": "横峰县",
                        "id": 11216
                    },
                    {
                        "district": "弋阳县",
                        "id": 11217
                    },
                    {
                        "district": "余干县",
                        "id": 11218
                    },
                    {
                        "district": "鄱阳县",
                        "id": 11219
                    },
                    {
                        "district": "万年县",
                        "id": 11220
                    },
                    {
                        "district": "婺源县",
                        "id": 11221
                    },
                    {
                        "district": "德兴市",
                        "id": 11222
                    }
                ],
                "id": 1134
            }
        ]
    },
    {
        "province": "山东省",
        "id": 15,
        "citys": [
            {
                "city": "济南市",
                "districts": [
                    {
                        "district": "历下区",
                        "id": 11223
                    },
                    {
                        "district": "市中区",
                        "id": 11224
                    },
                    {
                        "district": "槐荫区",
                        "id": 11225
                    },
                    {
                        "district": "天桥区",
                        "id": 11226
                    },
                    {
                        "district": "历城区",
                        "id": 11227
                    },
                    {
                        "district": "长清区",
                        "id": 11228
                    },
                    {
                        "district": "平阴县",
                        "id": 11229
                    },
                    {
                        "district": "济阳县",
                        "id": 11230
                    },
                    {
                        "district": "商河县",
                        "id": 11231
                    },
                    {
                        "district": "章丘市",
                        "id": 11232
                    }
                ],
                "id": 1135
            },
            {
                "city": "青岛市",
                "districts": [
                    {
                        "district": "市南区",
                        "id": 11233
                    },
                    {
                        "district": "市北区",
                        "id": 11234
                    },
                    {
                        "district": "四方区",
                        "id": 11235
                    },
                    {
                        "district": "黄岛区",
                        "id": 11236
                    },
                    {
                        "district": "崂山区",
                        "id": 11237
                    },
                    {
                        "district": "李沧区",
                        "id": 11238
                    },
                    {
                        "district": "城阳区",
                        "id": 11239
                    },
                    {
                        "district": "胶州市",
                        "id": 11240
                    },
                    {
                        "district": "即墨市",
                        "id": 11241
                    },
                    {
                        "district": "平度市",
                        "id": 11242
                    },
                    {
                        "district": "胶南市",
                        "id": 11243
                    },
                    {
                        "district": "莱西市",
                        "id": 11244
                    }
                ],
                "id": 1136
            },
            {
                "city": "淄博市",
                "districts": [
                    {
                        "district": "淄川区",
                        "id": 11245
                    },
                    {
                        "district": "张店区",
                        "id": 11246
                    },
                    {
                        "district": "博山区",
                        "id": 11247
                    },
                    {
                        "district": "临淄区",
                        "id": 11248
                    },
                    {
                        "district": "周村区",
                        "id": 11249
                    },
                    {
                        "district": "桓台县",
                        "id": 11250
                    },
                    {
                        "district": "高青县",
                        "id": 11251
                    },
                    {
                        "district": "沂源县",
                        "id": 11252
                    }
                ],
                "id": 1137
            },
            {
                "city": "枣庄市",
                "districts": [
                    {
                        "district": "市中区",
                        "id": 11253
                    },
                    {
                        "district": "薛城区",
                        "id": 11254
                    },
                    {
                        "district": "峄城区",
                        "id": 11255
                    },
                    {
                        "district": "台儿庄区",
                        "id": 11256
                    },
                    {
                        "district": "山亭区",
                        "id": 11257
                    },
                    {
                        "district": "滕州市",
                        "id": 11258
                    }
                ],
                "id": 1138
            },
            {
                "city": "东营市",
                "districts": [
                    {
                        "district": "东营区",
                        "id": 11259
                    },
                    {
                        "district": "河口区",
                        "id": 11260
                    },
                    {
                        "district": "垦利县",
                        "id": 11261
                    },
                    {
                        "district": "利津县",
                        "id": 11262
                    },
                    {
                        "district": "广饶县",
                        "id": 11263
                    }
                ],
                "id": 1139
            },
            {
                "city": "烟台市",
                "districts": [
                    {
                        "district": "芝罘区",
                        "id": 11264
                    },
                    {
                        "district": "福山区",
                        "id": 11265
                    },
                    {
                        "district": "牟平区",
                        "id": 11266
                    },
                    {
                        "district": "莱山区",
                        "id": 11267
                    },
                    {
                        "district": "长岛县",
                        "id": 11268
                    },
                    {
                        "district": "龙口市",
                        "id": 11269
                    },
                    {
                        "district": "莱阳市",
                        "id": 11270
                    },
                    {
                        "district": "莱州市",
                        "id": 11271
                    },
                    {
                        "district": "蓬莱市",
                        "id": 11272
                    },
                    {
                        "district": "招远市",
                        "id": 11273
                    },
                    {
                        "district": "栖霞市",
                        "id": 11274
                    },
                    {
                        "district": "海阳市",
                        "id": 11275
                    }
                ],
                "id": 1140
            },
            {
                "city": "潍坊市",
                "districts": [
                    {
                        "district": "潍城区",
                        "id": 11276
                    },
                    {
                        "district": "寒亭区",
                        "id": 11277
                    },
                    {
                        "district": "坊子区",
                        "id": 11278
                    },
                    {
                        "district": "奎文区",
                        "id": 11279
                    },
                    {
                        "district": "临朐县",
                        "id": 11280
                    },
                    {
                        "district": "昌乐县",
                        "id": 11281
                    },
                    {
                        "district": "青州市",
                        "id": 11282
                    },
                    {
                        "district": "诸城市",
                        "id": 11283
                    },
                    {
                        "district": "寿光市",
                        "id": 11284
                    },
                    {
                        "district": "安丘市",
                        "id": 11285
                    },
                    {
                        "district": "高密市",
                        "id": 11286
                    },
                    {
                        "district": "昌邑市",
                        "id": 11287
                    }
                ],
                "id": 1141
            },
            {
                "city": "济宁市",
                "districts": [
                    {
                        "district": "市中区",
                        "id": 11288
                    },
                    {
                        "district": "任城区",
                        "id": 11289
                    },
                    {
                        "district": "微山县",
                        "id": 11290
                    },
                    {
                        "district": "鱼台县",
                        "id": 11291
                    },
                    {
                        "district": "金乡县",
                        "id": 11292
                    },
                    {
                        "district": "嘉祥县",
                        "id": 11293
                    },
                    {
                        "district": "汶上县",
                        "id": 11294
                    },
                    {
                        "district": "泗水县",
                        "id": 11295
                    },
                    {
                        "district": "梁山县",
                        "id": 11296
                    },
                    {
                        "district": "曲阜市",
                        "id": 11297
                    },
                    {
                        "district": "兖州市",
                        "id": 11298
                    },
                    {
                        "district": "邹城市",
                        "id": 11299
                    }
                ],
                "id": 1142
            },
            {
                "city": "泰安市",
                "districts": [
                    {
                        "district": "泰山区",
                        "id": 11300
                    },
                    {
                        "district": "岱岳区",
                        "id": 11301
                    },
                    {
                        "district": "宁阳县",
                        "id": 11302
                    },
                    {
                        "district": "东平县",
                        "id": 11303
                    },
                    {
                        "district": "新泰市",
                        "id": 11304
                    },
                    {
                        "district": "肥城市",
                        "id": 11305
                    }
                ],
                "id": 1143
            },
            {
                "city": "威海市",
                "districts": [
                    {
                        "district": "环翠区",
                        "id": 11306
                    },
                    {
                        "district": "文登市",
                        "id": 11307
                    },
                    {
                        "district": "荣成市",
                        "id": 11308
                    },
                    {
                        "district": "乳山市",
                        "id": 11309
                    }
                ],
                "id": 1144
            },
            {
                "city": "日照市",
                "districts": [
                    {
                        "district": "东港区",
                        "id": 11310
                    },
                    {
                        "district": "岚山区",
                        "id": 11311
                    },
                    {
                        "district": "五莲县",
                        "id": 11312
                    },
                    {
                        "district": "莒县",
                        "id": 11313
                    }
                ],
                "id": 1145
            },
            {
                "city": "莱芜市",
                "districts": [
                    {
                        "district": "莱城区",
                        "id": 11314
                    },
                    {
                        "district": "钢城区",
                        "id": 11315
                    }
                ],
                "id": 1146
            },
            {
                "city": "临沂市",
                "districts": [
                    {
                        "district": "兰山区",
                        "id": 11316
                    },
                    {
                        "district": "罗庄区",
                        "id": 11317
                    },
                    {
                        "district": "河东区",
                        "id": 11318
                    },
                    {
                        "district": "沂南县",
                        "id": 11319
                    },
                    {
                        "district": "郯城县",
                        "id": 11320
                    },
                    {
                        "district": "沂水县",
                        "id": 11321
                    },
                    {
                        "district": "苍山县",
                        "id": 11322
                    },
                    {
                        "district": "费县",
                        "id": 11323
                    },
                    {
                        "district": "平邑县",
                        "id": 11324
                    },
                    {
                        "district": "莒南县",
                        "id": 11325
                    },
                    {
                        "district": "蒙阴县",
                        "id": 11326
                    },
                    {
                        "district": "临沭县",
                        "id": 11327
                    }
                ],
                "id": 1147
            },
            {
                "city": "德州市",
                "districts": [
                    {
                        "district": "德城区",
                        "id": 11328
                    },
                    {
                        "district": "陵县",
                        "id": 11329
                    },
                    {
                        "district": "宁津县",
                        "id": 11330
                    },
                    {
                        "district": "庆云县",
                        "id": 11331
                    },
                    {
                        "district": "临邑县",
                        "id": 11332
                    },
                    {
                        "district": "齐河县",
                        "id": 11333
                    },
                    {
                        "district": "平原县",
                        "id": 11334
                    },
                    {
                        "district": "夏津县",
                        "id": 11335
                    },
                    {
                        "district": "武城县",
                        "id": 11336
                    },
                    {
                        "district": "乐陵市",
                        "id": 11337
                    },
                    {
                        "district": "禹城市",
                        "id": 11338
                    }
                ],
                "id": 1148
            },
            {
                "city": "聊城市",
                "districts": [
                    {
                        "district": "东昌府区",
                        "id": 11339
                    },
                    {
                        "district": "阳谷县",
                        "id": 11340
                    },
                    {
                        "district": "莘县",
                        "id": 11341
                    },
                    {
                        "district": "茌平县",
                        "id": 11342
                    },
                    {
                        "district": "东阿县",
                        "id": 11343
                    },
                    {
                        "district": "冠县",
                        "id": 11344
                    },
                    {
                        "district": "高唐县",
                        "id": 11345
                    },
                    {
                        "district": "临清市",
                        "id": 11346
                    }
                ],
                "id": 1149
            },
            {
                "city": "滨州市",
                "districts": [
                    {
                        "district": "滨城区",
                        "id": 11347
                    },
                    {
                        "district": "惠民县",
                        "id": 11348
                    },
                    {
                        "district": "阳信县",
                        "id": 11349
                    },
                    {
                        "district": "无棣县",
                        "id": 11350
                    },
                    {
                        "district": "沾化县",
                        "id": 11351
                    },
                    {
                        "district": "博兴县",
                        "id": 11352
                    },
                    {
                        "district": "邹平县",
                        "id": 11353
                    }
                ],
                "id": 1150
            },
            {
                "city": "荷泽市",
                "districts": [
                    {
                        "district": "牡丹区",
                        "id": 11354
                    },
                    {
                        "district": "曹县",
                        "id": 11355
                    },
                    {
                        "district": "单县",
                        "id": 11356
                    },
                    {
                        "district": "成武县",
                        "id": 11357
                    },
                    {
                        "district": "巨野县",
                        "id": 11358
                    },
                    {
                        "district": "郓城县",
                        "id": 11359
                    },
                    {
                        "district": "鄄城县",
                        "id": 11360
                    },
                    {
                        "district": "定陶县",
                        "id": 11361
                    },
                    {
                        "district": "东明县",
                        "id": 11362
                    }
                ],
                "id": 1151
            }
        ]
    },
    {
        "province": "河南省",
        "id": 16,
        "citys": [
            {
                "city": "郑州市",
                "districts": [
                    {
                        "district": "中原区",
                        "id": 11363
                    },
                    {
                        "district": "二七区",
                        "id": 11364
                    },
                    {
                        "district": "管城回族区",
                        "id": 11365
                    },
                    {
                        "district": "金水区",
                        "id": 11366
                    },
                    {
                        "district": "上街区",
                        "id": 11367
                    },
                    {
                        "district": "惠济区",
                        "id": 11368
                    },
                    {
                        "district": "中牟县",
                        "id": 11369
                    },
                    {
                        "district": "巩义市",
                        "id": 11370
                    },
                    {
                        "district": "荥阳市",
                        "id": 11371
                    },
                    {
                        "district": "新密市",
                        "id": 11372
                    },
                    {
                        "district": "新郑市",
                        "id": 11373
                    },
                    {
                        "district": "登封市",
                        "id": 11374
                    }
                ],
                "id": 1152
            },
            {
                "city": "开封市",
                "districts": [
                    {
                        "district": "龙亭区",
                        "id": 11375
                    },
                    {
                        "district": "顺河回族区",
                        "id": 11376
                    },
                    {
                        "district": "鼓楼区",
                        "id": 11377
                    },
                    {
                        "district": "南关区",
                        "id": 11378
                    },
                    {
                        "district": "郊区",
                        "id": 11379
                    },
                    {
                        "district": "杞县",
                        "id": 11380
                    },
                    {
                        "district": "通许县",
                        "id": 11381
                    },
                    {
                        "district": "尉氏县",
                        "id": 11382
                    },
                    {
                        "district": "开封县",
                        "id": 11383
                    },
                    {
                        "district": "兰考县",
                        "id": 11384
                    }
                ],
                "id": 1153
            },
            {
                "city": "洛阳市",
                "districts": [
                    {
                        "district": "老城区",
                        "id": 11385
                    },
                    {
                        "district": "西工区",
                        "id": 11386
                    },
                    {
                        "district": "廛河回族区",
                        "id": 11387
                    },
                    {
                        "district": "涧西区",
                        "id": 11388
                    },
                    {
                        "district": "吉利区",
                        "id": 11389
                    },
                    {
                        "district": "洛龙区",
                        "id": 11390
                    },
                    {
                        "district": "孟津县",
                        "id": 11391
                    },
                    {
                        "district": "新安县",
                        "id": 11392
                    },
                    {
                        "district": "栾川县",
                        "id": 11393
                    },
                    {
                        "district": "嵩县",
                        "id": 11394
                    },
                    {
                        "district": "汝阳县",
                        "id": 11395
                    },
                    {
                        "district": "宜阳县",
                        "id": 11396
                    },
                    {
                        "district": "洛宁县",
                        "id": 11397
                    },
                    {
                        "district": "伊川县",
                        "id": 11398
                    },
                    {
                        "district": "偃师市",
                        "id": 11399
                    }
                ],
                "id": 1154
            },
            {
                "city": "平顶山市",
                "districts": [
                    {
                        "district": "新华区",
                        "id": 11400
                    },
                    {
                        "district": "卫东区",
                        "id": 11401
                    },
                    {
                        "district": "石龙区",
                        "id": 11402
                    },
                    {
                        "district": "湛河区",
                        "id": 11403
                    },
                    {
                        "district": "宝丰县",
                        "id": 11404
                    },
                    {
                        "district": "叶县",
                        "id": 11405
                    },
                    {
                        "district": "鲁山县",
                        "id": 11406
                    },
                    {
                        "district": "郏县",
                        "id": 11407
                    },
                    {
                        "district": "舞钢市",
                        "id": 11408
                    },
                    {
                        "district": "汝州市",
                        "id": 11409
                    }
                ],
                "id": 1155
            },
            {
                "city": "安阳市",
                "districts": [
                    {
                        "district": "文峰区",
                        "id": 11410
                    },
                    {
                        "district": "北关区",
                        "id": 11411
                    },
                    {
                        "district": "殷都区",
                        "id": 11412
                    },
                    {
                        "district": "龙安区",
                        "id": 11413
                    },
                    {
                        "district": "安阳县",
                        "id": 11414
                    },
                    {
                        "district": "汤阴县",
                        "id": 11415
                    },
                    {
                        "district": "滑县",
                        "id": 11416
                    },
                    {
                        "district": "内黄县",
                        "id": 11417
                    },
                    {
                        "district": "林州市",
                        "id": 11418
                    }
                ],
                "id": 1156
            },
            {
                "city": "鹤壁市",
                "districts": [
                    {
                        "district": "鹤山区",
                        "id": 11419
                    },
                    {
                        "district": "山城区",
                        "id": 11420
                    },
                    {
                        "district": "淇滨区",
                        "id": 11421
                    },
                    {
                        "district": "浚县",
                        "id": 11422
                    },
                    {
                        "district": "淇县",
                        "id": 11423
                    }
                ],
                "id": 1157
            },
            {
                "city": "新乡市",
                "districts": [
                    {
                        "district": "红旗区",
                        "id": 11424
                    },
                    {
                        "district": "卫滨区",
                        "id": 11425
                    },
                    {
                        "district": "凤泉区",
                        "id": 11426
                    },
                    {
                        "district": "牧野区",
                        "id": 11427
                    },
                    {
                        "district": "新乡县",
                        "id": 11428
                    },
                    {
                        "district": "获嘉县",
                        "id": 11429
                    },
                    {
                        "district": "原阳县",
                        "id": 11430
                    },
                    {
                        "district": "延津县",
                        "id": 11431
                    },
                    {
                        "district": "封丘县",
                        "id": 11432
                    },
                    {
                        "district": "长垣县",
                        "id": 11433
                    },
                    {
                        "district": "卫辉市",
                        "id": 11434
                    },
                    {
                        "district": "辉县市",
                        "id": 11435
                    }
                ],
                "id": 1158
            },
            {
                "city": "焦作市",
                "districts": [
                    {
                        "district": "解放区",
                        "id": 11436
                    },
                    {
                        "district": "中站区",
                        "id": 11437
                    },
                    {
                        "district": "马村区",
                        "id": 11438
                    },
                    {
                        "district": "山阳区",
                        "id": 11439
                    },
                    {
                        "district": "修武县",
                        "id": 11440
                    },
                    {
                        "district": "博爱县",
                        "id": 11441
                    },
                    {
                        "district": "武陟县",
                        "id": 11442
                    },
                    {
                        "district": "温县",
                        "id": 11443
                    },
                    {
                        "district": "济源市",
                        "id": 11444
                    },
                    {
                        "district": "沁阳市",
                        "id": 11445
                    },
                    {
                        "district": "孟州市",
                        "id": 11446
                    }
                ],
                "id": 1159
            },
            {
                "city": "濮阳市",
                "districts": [
                    {
                        "district": "华龙区",
                        "id": 11447
                    },
                    {
                        "district": "清丰县",
                        "id": 11448
                    },
                    {
                        "district": "南乐县",
                        "id": 11449
                    },
                    {
                        "district": "范县",
                        "id": 11450
                    },
                    {
                        "district": "台前县",
                        "id": 11451
                    },
                    {
                        "district": "濮阳县",
                        "id": 11452
                    }
                ],
                "id": 1160
            },
            {
                "city": "许昌市",
                "districts": [
                    {
                        "district": "魏都区",
                        "id": 11453
                    },
                    {
                        "district": "许昌县",
                        "id": 11454
                    },
                    {
                        "district": "鄢陵县",
                        "id": 11455
                    },
                    {
                        "district": "襄城县",
                        "id": 11456
                    },
                    {
                        "district": "禹州市",
                        "id": 11457
                    },
                    {
                        "district": "长葛市",
                        "id": 11458
                    }
                ],
                "id": 1161
            },
            {
                "city": "漯河市",
                "districts": [
                    {
                        "district": "源汇区",
                        "id": 11459
                    },
                    {
                        "district": "郾城区",
                        "id": 11460
                    },
                    {
                        "district": "召陵区",
                        "id": 11461
                    },
                    {
                        "district": "舞阳县",
                        "id": 11462
                    },
                    {
                        "district": "临颍县",
                        "id": 11463
                    }
                ],
                "id": 1162
            },
            {
                "city": "三门峡市",
                "districts": [
                    {
                        "district": "市辖区",
                        "id": 11464
                    },
                    {
                        "district": "湖滨区",
                        "id": 11465
                    },
                    {
                        "district": "渑池县",
                        "id": 11466
                    },
                    {
                        "district": "陕县",
                        "id": 11467
                    },
                    {
                        "district": "卢氏县",
                        "id": 11468
                    },
                    {
                        "district": "义马市",
                        "id": 11469
                    },
                    {
                        "district": "灵宝市",
                        "id": 11470
                    }
                ],
                "id": 1163
            },
            {
                "city": "南阳市",
                "districts": [
                    {
                        "district": "宛城区",
                        "id": 11471
                    },
                    {
                        "district": "卧龙区",
                        "id": 11472
                    },
                    {
                        "district": "南召县",
                        "id": 11473
                    },
                    {
                        "district": "方城县",
                        "id": 11474
                    },
                    {
                        "district": "西峡县",
                        "id": 11475
                    },
                    {
                        "district": "镇平县",
                        "id": 11476
                    },
                    {
                        "district": "内乡县",
                        "id": 11477
                    },
                    {
                        "district": "淅川县",
                        "id": 11478
                    },
                    {
                        "district": "社旗县",
                        "id": 11479
                    },
                    {
                        "district": "唐河县",
                        "id": 11480
                    },
                    {
                        "district": "新野县",
                        "id": 11481
                    },
                    {
                        "district": "桐柏县",
                        "id": 11482
                    },
                    {
                        "district": "邓州市",
                        "id": 11483
                    }
                ],
                "id": 1164
            },
            {
                "city": "商丘市",
                "districts": [
                    {
                        "district": "梁园区",
                        "id": 11484
                    },
                    {
                        "district": "睢阳区",
                        "id": 11485
                    },
                    {
                        "district": "民权县",
                        "id": 11486
                    },
                    {
                        "district": "睢县",
                        "id": 11487
                    },
                    {
                        "district": "宁陵县",
                        "id": 11488
                    },
                    {
                        "district": "柘城县",
                        "id": 11489
                    },
                    {
                        "district": "虞城县",
                        "id": 11490
                    },
                    {
                        "district": "夏邑县",
                        "id": 11491
                    },
                    {
                        "district": "永城市",
                        "id": 11492
                    }
                ],
                "id": 1165
            },
            {
                "city": "信阳市",
                "districts": [
                    {
                        "district": "浉河区",
                        "id": 11493
                    },
                    {
                        "district": "平桥区",
                        "id": 11494
                    },
                    {
                        "district": "罗山县",
                        "id": 11495
                    },
                    {
                        "district": "光山县",
                        "id": 11496
                    },
                    {
                        "district": "新县",
                        "id": 11497
                    },
                    {
                        "district": "商城县",
                        "id": 11498
                    },
                    {
                        "district": "固始县",
                        "id": 11499
                    },
                    {
                        "district": "潢川县",
                        "id": 11500
                    },
                    {
                        "district": "淮滨县",
                        "id": 11501
                    },
                    {
                        "district": "息县",
                        "id": 11502
                    }
                ],
                "id": 1166
            },
            {
                "city": "周口市",
                "districts": [
                    {
                        "district": "川汇区",
                        "id": 11503
                    },
                    {
                        "district": "扶沟县",
                        "id": 11504
                    },
                    {
                        "district": "西华县",
                        "id": 11505
                    },
                    {
                        "district": "商水县",
                        "id": 11506
                    },
                    {
                        "district": "沈丘县",
                        "id": 11507
                    },
                    {
                        "district": "郸城县",
                        "id": 11508
                    },
                    {
                        "district": "淮阳县",
                        "id": 11509
                    },
                    {
                        "district": "太康县",
                        "id": 11510
                    },
                    {
                        "district": "鹿邑县",
                        "id": 11511
                    },
                    {
                        "district": "项城市",
                        "id": 11512
                    }
                ],
                "id": 1167
            },
            {
                "city": "驻马店市",
                "districts": [
                    {
                        "district": "驿城区",
                        "id": 11513
                    },
                    {
                        "district": "西平县",
                        "id": 11514
                    },
                    {
                        "district": "上蔡县",
                        "id": 11515
                    },
                    {
                        "district": "平舆县",
                        "id": 11516
                    },
                    {
                        "district": "正阳县",
                        "id": 11517
                    },
                    {
                        "district": "确山县",
                        "id": 11518
                    },
                    {
                        "district": "泌阳县",
                        "id": 11519
                    },
                    {
                        "district": "汝南县",
                        "id": 11520
                    },
                    {
                        "district": "遂平县",
                        "id": 11521
                    },
                    {
                        "district": "新蔡县",
                        "id": 11522
                    }
                ],
                "id": 1168
            }
        ]
    },
    {
        "province": "湖北省",
        "id": 17,
        "citys": [
            {
                "city": "武汉市",
                "districts": [
                    {
                        "district": "江岸区",
                        "id": 11523
                    },
                    {
                        "district": "江汉区",
                        "id": 11524
                    },
                    {
                        "district": "硚口区",
                        "id": 11525
                    },
                    {
                        "district": "汉阳区",
                        "id": 11526
                    },
                    {
                        "district": "武昌区",
                        "id": 11527
                    },
                    {
                        "district": "青山区",
                        "id": 11528
                    },
                    {
                        "district": "洪山区",
                        "id": 11529
                    },
                    {
                        "district": "东西湖区",
                        "id": 11530
                    },
                    {
                        "district": "汉南区",
                        "id": 11531
                    },
                    {
                        "district": "蔡甸区",
                        "id": 11532
                    },
                    {
                        "district": "江夏区",
                        "id": 11533
                    },
                    {
                        "district": "黄陂区",
                        "id": 11534
                    },
                    {
                        "district": "新洲区",
                        "id": 11535
                    }
                ],
                "id": 1169
            },
            {
                "city": "黄石市",
                "districts": [
                    {
                        "district": "黄石港区",
                        "id": 11536
                    },
                    {
                        "district": "西塞山区",
                        "id": 11537
                    },
                    {
                        "district": "下陆区",
                        "id": 11538
                    },
                    {
                        "district": "铁山区",
                        "id": 11539
                    },
                    {
                        "district": "阳新县",
                        "id": 11540
                    },
                    {
                        "district": "大冶市",
                        "id": 11541
                    }
                ],
                "id": 1170
            },
            {
                "city": "十堰市",
                "districts": [
                    {
                        "district": "茅箭区",
                        "id": 11542
                    },
                    {
                        "district": "张湾区",
                        "id": 11543
                    },
                    {
                        "district": "郧县",
                        "id": 11544
                    },
                    {
                        "district": "郧西县",
                        "id": 11545
                    },
                    {
                        "district": "竹山县",
                        "id": 11546
                    },
                    {
                        "district": "竹溪县",
                        "id": 11547
                    },
                    {
                        "district": "房县",
                        "id": 11548
                    },
                    {
                        "district": "丹江口市",
                        "id": 11549
                    }
                ],
                "id": 1171
            },
            {
                "city": "宜昌市",
                "districts": [
                    {
                        "district": "西陵区",
                        "id": 11550
                    },
                    {
                        "district": "伍家岗区",
                        "id": 11551
                    },
                    {
                        "district": "点军区",
                        "id": 11552
                    },
                    {
                        "district": "猇亭区",
                        "id": 11553
                    },
                    {
                        "district": "夷陵区",
                        "id": 11554
                    },
                    {
                        "district": "远安县",
                        "id": 11555
                    },
                    {
                        "district": "兴山县",
                        "id": 11556
                    },
                    {
                        "district": "秭归县",
                        "id": 11557
                    },
                    {
                        "district": "长阳土家族自治县",
                        "id": 11558
                    },
                    {
                        "district": "五峰土家族自治县",
                        "id": 11559
                    },
                    {
                        "district": "宜都市",
                        "id": 11560
                    },
                    {
                        "district": "当阳市",
                        "id": 11561
                    },
                    {
                        "district": "枝江市",
                        "id": 11562
                    }
                ],
                "id": 1172
            },
            {
                "city": "襄樊市",
                "districts": [
                    {
                        "district": "襄城区",
                        "id": 11563
                    },
                    {
                        "district": "樊城区",
                        "id": 11564
                    },
                    {
                        "district": "襄阳区",
                        "id": 11565
                    },
                    {
                        "district": "南漳县",
                        "id": 11566
                    },
                    {
                        "district": "谷城县",
                        "id": 11567
                    },
                    {
                        "district": "保康县",
                        "id": 11568
                    },
                    {
                        "district": "老河口市",
                        "id": 11569
                    },
                    {
                        "district": "枣阳市",
                        "id": 11570
                    },
                    {
                        "district": "宜城市",
                        "id": 11571
                    }
                ],
                "id": 1173
            },
            {
                "city": "鄂州市",
                "districts": [
                    {
                        "district": "梁子湖区",
                        "id": 11572
                    },
                    {
                        "district": "华容区",
                        "id": 11573
                    },
                    {
                        "district": "鄂城区",
                        "id": 11574
                    }
                ],
                "id": 1174
            },
            {
                "city": "荆门市",
                "districts": [
                    {
                        "district": "东宝区",
                        "id": 11575
                    },
                    {
                        "district": "掇刀区",
                        "id": 11576
                    },
                    {
                        "district": "京山县",
                        "id": 11577
                    },
                    {
                        "district": "沙洋县",
                        "id": 11578
                    },
                    {
                        "district": "钟祥市",
                        "id": 11579
                    }
                ],
                "id": 1175
            },
            {
                "city": "孝感市",
                "districts": [
                    {
                        "district": "孝南区",
                        "id": 11580
                    },
                    {
                        "district": "孝昌县",
                        "id": 11581
                    },
                    {
                        "district": "大悟县",
                        "id": 11582
                    },
                    {
                        "district": "云梦县",
                        "id": 11583
                    },
                    {
                        "district": "应城市",
                        "id": 11584
                    },
                    {
                        "district": "安陆市",
                        "id": 11585
                    },
                    {
                        "district": "汉川市",
                        "id": 11586
                    }
                ],
                "id": 1176
            },
            {
                "city": "荆州市",
                "districts": [
                    {
                        "district": "沙市区",
                        "id": 11587
                    },
                    {
                        "district": "荆州区",
                        "id": 11588
                    },
                    {
                        "district": "公安县",
                        "id": 11589
                    },
                    {
                        "district": "监利县",
                        "id": 11590
                    },
                    {
                        "district": "江陵县",
                        "id": 11591
                    },
                    {
                        "district": "石首市",
                        "id": 11592
                    },
                    {
                        "district": "洪湖市",
                        "id": 11593
                    },
                    {
                        "district": "松滋市",
                        "id": 11594
                    }
                ],
                "id": 1177
            },
            {
                "city": "黄冈市",
                "districts": [
                    {
                        "district": "黄州区",
                        "id": 11595
                    },
                    {
                        "district": "团风县",
                        "id": 11596
                    },
                    {
                        "district": "红安县",
                        "id": 11597
                    },
                    {
                        "district": "罗田县",
                        "id": 11598
                    },
                    {
                        "district": "英山县",
                        "id": 11599
                    },
                    {
                        "district": "浠水县",
                        "id": 11600
                    },
                    {
                        "district": "蕲春县",
                        "id": 11601
                    },
                    {
                        "district": "黄梅县",
                        "id": 11602
                    },
                    {
                        "district": "麻城市",
                        "id": 11603
                    },
                    {
                        "district": "武穴市",
                        "id": 11604
                    }
                ],
                "id": 1178
            },
            {
                "city": "咸宁市",
                "districts": [
                    {
                        "district": "咸安区",
                        "id": 11605
                    },
                    {
                        "district": "嘉鱼县",
                        "id": 11606
                    },
                    {
                        "district": "通城县",
                        "id": 11607
                    },
                    {
                        "district": "崇阳县",
                        "id": 11608
                    },
                    {
                        "district": "通山县",
                        "id": 11609
                    },
                    {
                        "district": "赤壁市",
                        "id": 11610
                    }
                ],
                "id": 1179
            },
            {
                "city": "随州市",
                "districts": [
                    {
                        "district": "曾都区",
                        "id": 11611
                    },
                    {
                        "district": "广水市",
                        "id": 11612
                    }
                ],
                "id": 1180
            },
            {
                "city": "恩施土家族苗族自治州",
                "districts": [
                    {
                        "district": "恩施市",
                        "id": 11613
                    },
                    {
                        "district": "利川市",
                        "id": 11614
                    },
                    {
                        "district": "建始县",
                        "id": 11615
                    },
                    {
                        "district": "巴东县",
                        "id": 11616
                    },
                    {
                        "district": "宣恩县",
                        "id": 11617
                    },
                    {
                        "district": "咸丰县",
                        "id": 11618
                    },
                    {
                        "district": "来凤县",
                        "id": 11619
                    },
                    {
                        "district": "鹤峰县",
                        "id": 11620
                    }
                ],
                "id": 1181
            },
            {
                "city": "神农架",
                "districts": [
                    {
                        "district": "仙桃市",
                        "id": 11621
                    },
                    {
                        "district": "潜江市",
                        "id": 11622
                    },
                    {
                        "district": "天门市",
                        "id": 11623
                    },
                    {
                        "district": "神农架林区",
                        "id": 11624
                    }
                ],
                "id": 1182
            }
        ]
    },
    {
        "province": "湖南省",
        "id": 18,
        "citys": [
            {
                "city": "长沙市",
                "districts": [
                    {
                        "district": "芙蓉区",
                        "id": 11625
                    },
                    {
                        "district": "天心区",
                        "id": 11626
                    },
                    {
                        "district": "岳麓区",
                        "id": 11627
                    },
                    {
                        "district": "开福区",
                        "id": 11628
                    },
                    {
                        "district": "雨花区",
                        "id": 11629
                    },
                    {
                        "district": "长沙县",
                        "id": 11630
                    },
                    {
                        "district": "望城县",
                        "id": 11631
                    },
                    {
                        "district": "宁乡县",
                        "id": 11632
                    },
                    {
                        "district": "浏阳市",
                        "id": 11633
                    }
                ],
                "id": 1183
            },
            {
                "city": "株洲市",
                "districts": [
                    {
                        "district": "荷塘区",
                        "id": 11634
                    },
                    {
                        "district": "芦淞区",
                        "id": 11635
                    },
                    {
                        "district": "石峰区",
                        "id": 11636
                    },
                    {
                        "district": "天元区",
                        "id": 11637
                    },
                    {
                        "district": "株洲县",
                        "id": 11638
                    },
                    {
                        "district": "攸县",
                        "id": 11639
                    },
                    {
                        "district": "茶陵县",
                        "id": 11640
                    },
                    {
                        "district": "炎陵县",
                        "id": 11641
                    },
                    {
                        "district": "醴陵市",
                        "id": 11642
                    }
                ],
                "id": 1184
            },
            {
                "city": "湘潭市",
                "districts": [
                    {
                        "district": "雨湖区",
                        "id": 11643
                    },
                    {
                        "district": "岳塘区",
                        "id": 11644
                    },
                    {
                        "district": "湘潭县",
                        "id": 11645
                    },
                    {
                        "district": "湘乡市",
                        "id": 11646
                    },
                    {
                        "district": "韶山市",
                        "id": 11647
                    }
                ],
                "id": 1185
            },
            {
                "city": "衡阳市",
                "districts": [
                    {
                        "district": "珠晖区",
                        "id": 11648
                    },
                    {
                        "district": "雁峰区",
                        "id": 11649
                    },
                    {
                        "district": "石鼓区",
                        "id": 11650
                    },
                    {
                        "district": "蒸湘区",
                        "id": 11651
                    },
                    {
                        "district": "南岳区",
                        "id": 11652
                    },
                    {
                        "district": "衡阳县",
                        "id": 11653
                    },
                    {
                        "district": "衡南县",
                        "id": 11654
                    },
                    {
                        "district": "衡山县",
                        "id": 11655
                    },
                    {
                        "district": "衡东县",
                        "id": 11656
                    },
                    {
                        "district": "祁东县",
                        "id": 11657
                    },
                    {
                        "district": "耒阳市",
                        "id": 11658
                    },
                    {
                        "district": "常宁市",
                        "id": 11659
                    }
                ],
                "id": 1186
            },
            {
                "city": "邵阳市",
                "districts": [
                    {
                        "district": "双清区",
                        "id": 11660
                    },
                    {
                        "district": "大祥区",
                        "id": 11661
                    },
                    {
                        "district": "北塔区",
                        "id": 11662
                    },
                    {
                        "district": "邵东县",
                        "id": 11663
                    },
                    {
                        "district": "新邵县",
                        "id": 11664
                    },
                    {
                        "district": "邵阳县",
                        "id": 11665
                    },
                    {
                        "district": "隆回县",
                        "id": 11666
                    },
                    {
                        "district": "洞口县",
                        "id": 11667
                    },
                    {
                        "district": "绥宁县",
                        "id": 11668
                    },
                    {
                        "district": "新宁县",
                        "id": 11669
                    },
                    {
                        "district": "城步苗族自治县",
                        "id": 11670
                    },
                    {
                        "district": "武冈市",
                        "id": 11671
                    }
                ],
                "id": 1187
            },
            {
                "city": "岳阳市",
                "districts": [
                    {
                        "district": "岳阳楼区",
                        "id": 11672
                    },
                    {
                        "district": "云溪区",
                        "id": 11673
                    },
                    {
                        "district": "君山区",
                        "id": 11674
                    },
                    {
                        "district": "岳阳县",
                        "id": 11675
                    },
                    {
                        "district": "华容县",
                        "id": 11676
                    },
                    {
                        "district": "湘阴县",
                        "id": 11677
                    },
                    {
                        "district": "平江县",
                        "id": 11678
                    },
                    {
                        "district": "汨罗市",
                        "id": 11679
                    },
                    {
                        "district": "临湘市",
                        "id": 11680
                    }
                ],
                "id": 1188
            },
            {
                "city": "常德市",
                "districts": [
                    {
                        "district": "武陵区",
                        "id": 11681
                    },
                    {
                        "district": "鼎城区",
                        "id": 11682
                    },
                    {
                        "district": "安乡县",
                        "id": 11683
                    },
                    {
                        "district": "汉寿县",
                        "id": 11684
                    },
                    {
                        "district": "澧县",
                        "id": 11685
                    },
                    {
                        "district": "临澧县",
                        "id": 11686
                    },
                    {
                        "district": "桃源县",
                        "id": 11687
                    },
                    {
                        "district": "石门县",
                        "id": 11688
                    },
                    {
                        "district": "津市市",
                        "id": 11689
                    }
                ],
                "id": 1189
            },
            {
                "city": "张家界市",
                "districts": [
                    {
                        "district": "永定区",
                        "id": 11690
                    },
                    {
                        "district": "武陵源区",
                        "id": 11691
                    },
                    {
                        "district": "慈利县",
                        "id": 11692
                    },
                    {
                        "district": "桑植县",
                        "id": 11693
                    }
                ],
                "id": 1190
            },
            {
                "city": "益阳市",
                "districts": [
                    {
                        "district": "资阳区",
                        "id": 11694
                    },
                    {
                        "district": "赫山区",
                        "id": 11695
                    },
                    {
                        "district": "南县",
                        "id": 11696
                    },
                    {
                        "district": "桃江县",
                        "id": 11697
                    },
                    {
                        "district": "安化县",
                        "id": 11698
                    },
                    {
                        "district": "沅江市",
                        "id": 11699
                    }
                ],
                "id": 1191
            },
            {
                "city": "郴州市",
                "districts": [
                    {
                        "district": "北湖区",
                        "id": 11700
                    },
                    {
                        "district": "苏仙区",
                        "id": 11701
                    },
                    {
                        "district": "桂阳县",
                        "id": 11702
                    },
                    {
                        "district": "宜章县",
                        "id": 11703
                    },
                    {
                        "district": "永兴县",
                        "id": 11704
                    },
                    {
                        "district": "嘉禾县",
                        "id": 11705
                    },
                    {
                        "district": "临武县",
                        "id": 11706
                    },
                    {
                        "district": "汝城县",
                        "id": 11707
                    },
                    {
                        "district": "桂东县",
                        "id": 11708
                    },
                    {
                        "district": "安仁县",
                        "id": 11709
                    },
                    {
                        "district": "资兴市",
                        "id": 11710
                    }
                ],
                "id": 1192
            },
            {
                "city": "永州市",
                "districts": [
                    {
                        "district": "芝山区",
                        "id": 11711
                    },
                    {
                        "district": "冷水滩区",
                        "id": 11712
                    },
                    {
                        "district": "祁阳县",
                        "id": 11713
                    },
                    {
                        "district": "东安县",
                        "id": 11714
                    },
                    {
                        "district": "双牌县",
                        "id": 11715
                    },
                    {
                        "district": "道县",
                        "id": 11716
                    },
                    {
                        "district": "江永县",
                        "id": 11717
                    },
                    {
                        "district": "宁远县",
                        "id": 11718
                    },
                    {
                        "district": "蓝山县",
                        "id": 11719
                    },
                    {
                        "district": "新田县",
                        "id": 11720
                    },
                    {
                        "district": "江华瑶族自治县",
                        "id": 11721
                    }
                ],
                "id": 1193
            },
            {
                "city": "怀化市",
                "districts": [
                    {
                        "district": "鹤城区",
                        "id": 11722
                    },
                    {
                        "district": "中方县",
                        "id": 11723
                    },
                    {
                        "district": "沅陵县",
                        "id": 11724
                    },
                    {
                        "district": "辰溪县",
                        "id": 11725
                    },
                    {
                        "district": "溆浦县",
                        "id": 11726
                    },
                    {
                        "district": "会同县",
                        "id": 11727
                    },
                    {
                        "district": "麻阳苗族自治县",
                        "id": 11728
                    },
                    {
                        "district": "新晃侗族自治县",
                        "id": 11729
                    },
                    {
                        "district": "芷江侗族自治县",
                        "id": 11730
                    },
                    {
                        "district": "靖州苗族侗族自治县",
                        "id": 11731
                    },
                    {
                        "district": "通道侗族自治县",
                        "id": 11732
                    },
                    {
                        "district": "洪江市",
                        "id": 11733
                    }
                ],
                "id": 1194
            },
            {
                "city": "娄底市",
                "districts": [
                    {
                        "district": "娄星区",
                        "id": 11734
                    },
                    {
                        "district": "双峰县",
                        "id": 11735
                    },
                    {
                        "district": "新化县",
                        "id": 11736
                    },
                    {
                        "district": "冷水江市",
                        "id": 11737
                    },
                    {
                        "district": "涟源市",
                        "id": 11738
                    }
                ],
                "id": 1195
            },
            {
                "city": "湘西土家族苗族自治州",
                "districts": [
                    {
                        "district": "吉首市",
                        "id": 11739
                    },
                    {
                        "district": "泸溪县",
                        "id": 11740
                    },
                    {
                        "district": "凤凰县",
                        "id": 11741
                    },
                    {
                        "district": "花垣县",
                        "id": 11742
                    },
                    {
                        "district": "保靖县",
                        "id": 11743
                    },
                    {
                        "district": "古丈县",
                        "id": 11744
                    },
                    {
                        "district": "永顺县",
                        "id": 11745
                    },
                    {
                        "district": "龙山县",
                        "id": 11746
                    }
                ],
                "id": 1196
            }
        ]
    },
    {
        "province": "广东省",
        "id": 19,
        "citys": [
            {
                "city": "广州市",
                "districts": [
                    {
                        "district": "南沙区",
                        "id": 11747
                    },
                    {
                        "district": "荔湾区",
                        "id": 11748
                    },
                    {
                        "district": "越秀区",
                        "id": 11749
                    },
                    {
                        "district": "海珠区",
                        "id": 11750
                    },
                    {
                        "district": "天河区",
                        "id": 11751
                    },
                    {
                        "district": "芳村区",
                        "id": 11752
                    },
                    {
                        "district": "白云区",
                        "id": 11753
                    },
                    {
                        "district": "黄埔区",
                        "id": 11754
                    },
                    {
                        "district": "番禺区",
                        "id": 11755
                    },
                    {
                        "district": "花都区",
                        "id": 11756
                    },
                    {
                        "district": "增城市",
                        "id": 11757
                    },
                    {
                        "district": "从化市",
                        "id": 11758
                    }
                ],
                "id": 1197
            },
            {
                "city": "韶关市",
                "districts": [
                    {
                        "district": "武江区",
                        "id": 11759
                    },
                    {
                        "district": "浈江区",
                        "id": 11760
                    },
                    {
                        "district": "曲江区",
                        "id": 11761
                    },
                    {
                        "district": "始兴县",
                        "id": 11762
                    },
                    {
                        "district": "仁化县",
                        "id": 11763
                    },
                    {
                        "district": "翁源县",
                        "id": 11764
                    },
                    {
                        "district": "乳源瑶族自治县",
                        "id": 11765
                    },
                    {
                        "district": "新丰县",
                        "id": 11766
                    },
                    {
                        "district": "乐昌市",
                        "id": 11767
                    },
                    {
                        "district": "南雄市",
                        "id": 11768
                    }
                ],
                "id": 1198
            },
            {
                "city": "深圳市",
                "districts": [
                    {
                        "district": "罗湖区",
                        "id": 11769
                    },
                    {
                        "district": "福田区",
                        "id": 11770
                    },
                    {
                        "district": "南山区",
                        "id": 11771
                    },
                    {
                        "district": "宝安区",
                        "id": 11772
                    },
                    {
                        "district": "龙岗区",
                        "id": 11773
                    },
                    {
                        "district": "盐田区",
                        "id": 11774
                    }
                ],
                "id": 1199
            },
            {
                "city": "珠海市",
                "districts": [
                    {
                        "district": "香洲区",
                        "id": 11775
                    },
                    {
                        "district": "斗门区",
                        "id": 11776
                    },
                    {
                        "district": "金湾区",
                        "id": 11777
                    }
                ],
                "id": 1200
            },
            {
                "city": "汕头市",
                "districts": [
                    {
                        "district": "龙湖区",
                        "id": 11778
                    },
                    {
                        "district": "金平区",
                        "id": 11779
                    },
                    {
                        "district": "濠江区",
                        "id": 11780
                    },
                    {
                        "district": "潮阳区",
                        "id": 11781
                    },
                    {
                        "district": "潮南区",
                        "id": 11782
                    },
                    {
                        "district": "澄海区",
                        "id": 11783
                    },
                    {
                        "district": "南澳县",
                        "id": 11784
                    }
                ],
                "id": 1201
            },
            {
                "city": "佛山市",
                "districts": [
                    {
                        "district": "禅城区",
                        "id": 11785
                    },
                    {
                        "district": "南海区",
                        "id": 11786
                    },
                    {
                        "district": "顺德区",
                        "id": 11787
                    },
                    {
                        "district": "三水区",
                        "id": 11788
                    },
                    {
                        "district": "高明区",
                        "id": 11789
                    }
                ],
                "id": 1202
            },
            {
                "city": "江门市",
                "districts": [
                    {
                        "district": "蓬江区",
                        "id": 11790
                    },
                    {
                        "district": "江海区",
                        "id": 11791
                    },
                    {
                        "district": "新会区",
                        "id": 11792
                    },
                    {
                        "district": "台山市",
                        "id": 11793
                    },
                    {
                        "district": "开平市",
                        "id": 11794
                    },
                    {
                        "district": "鹤山市",
                        "id": 11795
                    },
                    {
                        "district": "恩平市",
                        "id": 11796
                    }
                ],
                "id": 1203
            },
            {
                "city": "湛江市",
                "districts": [
                    {
                        "district": "赤坎区",
                        "id": 11797
                    },
                    {
                        "district": "霞山区",
                        "id": 11798
                    },
                    {
                        "district": "坡头区",
                        "id": 11799
                    },
                    {
                        "district": "麻章区",
                        "id": 11800
                    },
                    {
                        "district": "遂溪县",
                        "id": 11801
                    },
                    {
                        "district": "徐闻县",
                        "id": 11802
                    },
                    {
                        "district": "廉江市",
                        "id": 11803
                    },
                    {
                        "district": "雷州市",
                        "id": 11804
                    },
                    {
                        "district": "吴川市",
                        "id": 11805
                    }
                ],
                "id": 1204
            },
            {
                "city": "茂名市",
                "districts": [
                    {
                        "district": "茂南区",
                        "id": 11806
                    },
                    {
                        "district": "茂港区",
                        "id": 11807
                    },
                    {
                        "district": "电白县",
                        "id": 11808
                    },
                    {
                        "district": "高州市",
                        "id": 11809
                    },
                    {
                        "district": "化州市",
                        "id": 11810
                    },
                    {
                        "district": "信宜市",
                        "id": 11811
                    }
                ],
                "id": 1205
            },
            {
                "city": "肇庆市",
                "districts": [
                    {
                        "district": "端州区",
                        "id": 11812
                    },
                    {
                        "district": "鼎湖区",
                        "id": 11813
                    },
                    {
                        "district": "广宁县",
                        "id": 11814
                    },
                    {
                        "district": "怀集县",
                        "id": 11815
                    },
                    {
                        "district": "封开县",
                        "id": 11816
                    },
                    {
                        "district": "德庆县",
                        "id": 11817
                    },
                    {
                        "district": "高要市",
                        "id": 11818
                    },
                    {
                        "district": "四会市",
                        "id": 11819
                    }
                ],
                "id": 1206
            },
            {
                "city": "惠州市",
                "districts": [
                    {
                        "district": "惠城区",
                        "id": 11820
                    },
                    {
                        "district": "惠阳区",
                        "id": 11821
                    },
                    {
                        "district": "博罗县",
                        "id": 11822
                    },
                    {
                        "district": "惠东县",
                        "id": 11823
                    },
                    {
                        "district": "龙门县",
                        "id": 11824
                    }
                ],
                "id": 1207
            },
            {
                "city": "梅州市",
                "districts": [
                    {
                        "district": "梅江区",
                        "id": 11825
                    },
                    {
                        "district": "梅县",
                        "id": 11826
                    },
                    {
                        "district": "大埔县",
                        "id": 11827
                    },
                    {
                        "district": "丰顺县",
                        "id": 11828
                    },
                    {
                        "district": "五华县",
                        "id": 11829
                    },
                    {
                        "district": "平远县",
                        "id": 11830
                    },
                    {
                        "district": "蕉岭县",
                        "id": 11831
                    },
                    {
                        "district": "兴宁市",
                        "id": 11832
                    }
                ],
                "id": 1208
            },
            {
                "city": "汕尾市",
                "districts": [
                    {
                        "district": "城区",
                        "id": 11833
                    },
                    {
                        "district": "海丰县",
                        "id": 11834
                    },
                    {
                        "district": "陆河县",
                        "id": 11835
                    },
                    {
                        "district": "陆丰市",
                        "id": 11836
                    }
                ],
                "id": 1209
            },
            {
                "city": "河源市",
                "districts": [
                    {
                        "district": "源城区",
                        "id": 11837
                    },
                    {
                        "district": "紫金县",
                        "id": 11838
                    },
                    {
                        "district": "龙川县",
                        "id": 11839
                    },
                    {
                        "district": "连平县",
                        "id": 11840
                    },
                    {
                        "district": "和平县",
                        "id": 11841
                    },
                    {
                        "district": "东源县",
                        "id": 11842
                    }
                ],
                "id": 1210
            },
            {
                "city": "阳江市",
                "districts": [
                    {
                        "district": "江城区",
                        "id": 11843
                    },
                    {
                        "district": "阳西县",
                        "id": 11844
                    },
                    {
                        "district": "阳东县",
                        "id": 11845
                    },
                    {
                        "district": "阳春市",
                        "id": 11846
                    }
                ],
                "id": 1211
            },
            {
                "city": "清远市",
                "districts": [
                    {
                        "district": "清城区",
                        "id": 11847
                    },
                    {
                        "district": "佛冈县",
                        "id": 11848
                    },
                    {
                        "district": "阳山县",
                        "id": 11849
                    },
                    {
                        "district": "连山壮族瑶族自治县",
                        "id": 11850
                    },
                    {
                        "district": "连南瑶族自治县",
                        "id": 11851
                    },
                    {
                        "district": "清新县",
                        "id": 11852
                    },
                    {
                        "district": "英德市",
                        "id": 11853
                    },
                    {
                        "district": "连州市",
                        "id": 11854
                    }
                ],
                "id": 1212
            },
            {
                "city": "东莞市",
                "districts": [
                    {
                        "district": "莞城区",
                        "id": 12863
                    },
                    {
                        "district": "东城区",
                        "id": 12864
                    },
                    {
                        "district": "南城区",
                        "id": 12865
                    },
                    {
                        "district": "万江区",
                        "id": 12866
                    }
                ],
                "id": 1213
            },
            {
                "city": "中山市",
                "districts": [
                    {
                        "district": "中山市",
                        "id": 12867
                    }
                ],
                "id": 1214
            },
            {
                "city": "潮州市",
                "districts": [
                    {
                        "district": "湘桥区",
                        "id": 11855
                    },
                    {
                        "district": "潮安县",
                        "id": 11856
                    },
                    {
                        "district": "饶平县",
                        "id": 11857
                    }
                ],
                "id": 1215
            },
            {
                "city": "揭阳市",
                "districts": [
                    {
                        "district": "榕城区",
                        "id": 11858
                    },
                    {
                        "district": "揭东县",
                        "id": 11859
                    },
                    {
                        "district": "揭西县",
                        "id": 11860
                    },
                    {
                        "district": "惠来县",
                        "id": 11861
                    },
                    {
                        "district": "普宁市",
                        "id": 11862
                    }
                ],
                "id": 1216
            },
            {
                "city": "云浮市",
                "districts": [
                    {
                        "district": "云城区",
                        "id": 11863
                    },
                    {
                        "district": "新兴县",
                        "id": 11864
                    },
                    {
                        "district": "郁南县",
                        "id": 11865
                    },
                    {
                        "district": "云安县",
                        "id": 11866
                    },
                    {
                        "district": "罗定市",
                        "id": 11867
                    }
                ],
                "id": 1217
            }
        ]
    },
    {
        "province": "广西省",
        "id": 20,
        "citys": [
            {
                "city": "南宁市",
                "districts": [
                    {
                        "district": "兴宁区",
                        "id": 11868
                    },
                    {
                        "district": "青秀区",
                        "id": 11869
                    },
                    {
                        "district": "江南区",
                        "id": 11870
                    },
                    {
                        "district": "西乡塘区",
                        "id": 11871
                    },
                    {
                        "district": "良庆区",
                        "id": 11872
                    },
                    {
                        "district": "邕宁区",
                        "id": 11873
                    },
                    {
                        "district": "武鸣县",
                        "id": 11874
                    },
                    {
                        "district": "隆安县",
                        "id": 11875
                    },
                    {
                        "district": "马山县",
                        "id": 11876
                    },
                    {
                        "district": "上林县",
                        "id": 11877
                    },
                    {
                        "district": "宾阳县",
                        "id": 11878
                    },
                    {
                        "district": "横县",
                        "id": 11879
                    }
                ],
                "id": 1218
            },
            {
                "city": "柳州市",
                "districts": [
                    {
                        "district": "城中区",
                        "id": 11880
                    },
                    {
                        "district": "鱼峰区",
                        "id": 11881
                    },
                    {
                        "district": "柳南区",
                        "id": 11882
                    },
                    {
                        "district": "柳北区",
                        "id": 11883
                    },
                    {
                        "district": "柳江县",
                        "id": 11884
                    },
                    {
                        "district": "柳城县",
                        "id": 11885
                    },
                    {
                        "district": "鹿寨县",
                        "id": 11886
                    },
                    {
                        "district": "融安县",
                        "id": 11887
                    },
                    {
                        "district": "融水苗族自治县",
                        "id": 11888
                    },
                    {
                        "district": "三江侗族自治县",
                        "id": 11889
                    }
                ],
                "id": 1219
            },
            {
                "city": "桂林市",
                "districts": [
                    {
                        "district": "秀峰区",
                        "id": 11890
                    },
                    {
                        "district": "叠彩区",
                        "id": 11891
                    },
                    {
                        "district": "象山区",
                        "id": 11892
                    },
                    {
                        "district": "七星区",
                        "id": 11893
                    },
                    {
                        "district": "雁山区",
                        "id": 11894
                    },
                    {
                        "district": "阳朔县",
                        "id": 11895
                    },
                    {
                        "district": "临桂县",
                        "id": 11896
                    },
                    {
                        "district": "灵川县",
                        "id": 11897
                    },
                    {
                        "district": "全州县",
                        "id": 11898
                    },
                    {
                        "district": "兴安县",
                        "id": 11899
                    },
                    {
                        "district": "永福县",
                        "id": 11900
                    },
                    {
                        "district": "灌阳县",
                        "id": 11901
                    },
                    {
                        "district": "龙胜各族自治县",
                        "id": 11902
                    },
                    {
                        "district": "资源县",
                        "id": 11903
                    },
                    {
                        "district": "平乐县",
                        "id": 11904
                    },
                    {
                        "district": "荔蒲县",
                        "id": 11905
                    },
                    {
                        "district": "恭城瑶族自治县",
                        "id": 11906
                    }
                ],
                "id": 1220
            },
            {
                "city": "梧州市",
                "districts": [
                    {
                        "district": "万秀区",
                        "id": 11907
                    },
                    {
                        "district": "蝶山区",
                        "id": 11908
                    },
                    {
                        "district": "长洲区",
                        "id": 11909
                    },
                    {
                        "district": "苍梧县",
                        "id": 11910
                    },
                    {
                        "district": "藤县",
                        "id": 11911
                    },
                    {
                        "district": "蒙山县",
                        "id": 11912
                    },
                    {
                        "district": "岑溪市",
                        "id": 11913
                    }
                ],
                "id": 1221
            },
            {
                "city": "北海市",
                "districts": [
                    {
                        "district": "海城区",
                        "id": 11914
                    },
                    {
                        "district": "银海区",
                        "id": 11915
                    },
                    {
                        "district": "铁山港区",
                        "id": 11916
                    },
                    {
                        "district": "合浦县",
                        "id": 11917
                    }
                ],
                "id": 1222
            },
            {
                "city": "防城港市",
                "districts": [
                    {
                        "district": "港口区",
                        "id": 11918
                    },
                    {
                        "district": "防城区",
                        "id": 11919
                    },
                    {
                        "district": "上思县",
                        "id": 11920
                    },
                    {
                        "district": "东兴市",
                        "id": 11921
                    }
                ],
                "id": 1223
            },
            {
                "city": "钦州市",
                "districts": [
                    {
                        "district": "钦南区",
                        "id": 11922
                    },
                    {
                        "district": "钦北区",
                        "id": 11923
                    },
                    {
                        "district": "灵山县",
                        "id": 11924
                    },
                    {
                        "district": "浦北县",
                        "id": 11925
                    }
                ],
                "id": 1224
            },
            {
                "city": "贵港市",
                "districts": [
                    {
                        "district": "港北区",
                        "id": 11926
                    },
                    {
                        "district": "港南区",
                        "id": 11927
                    },
                    {
                        "district": "覃塘区",
                        "id": 11928
                    },
                    {
                        "district": "平南县",
                        "id": 11929
                    },
                    {
                        "district": "桂平市",
                        "id": 11930
                    }
                ],
                "id": 1225
            },
            {
                "city": "玉林市",
                "districts": [
                    {
                        "district": "玉州区",
                        "id": 11931
                    },
                    {
                        "district": "容县",
                        "id": 11932
                    },
                    {
                        "district": "陆川县",
                        "id": 11933
                    },
                    {
                        "district": "博白县",
                        "id": 11934
                    },
                    {
                        "district": "兴业县",
                        "id": 11935
                    },
                    {
                        "district": "北流市",
                        "id": 11936
                    }
                ],
                "id": 1226
            },
            {
                "city": "百色市",
                "districts": [
                    {
                        "district": "右江区",
                        "id": 11937
                    },
                    {
                        "district": "田阳县",
                        "id": 11938
                    },
                    {
                        "district": "田东县",
                        "id": 11939
                    },
                    {
                        "district": "平果县",
                        "id": 11940
                    },
                    {
                        "district": "德保县",
                        "id": 11941
                    },
                    {
                        "district": "靖西县",
                        "id": 11942
                    },
                    {
                        "district": "那坡县",
                        "id": 11943
                    },
                    {
                        "district": "凌云县",
                        "id": 11944
                    },
                    {
                        "district": "乐业县",
                        "id": 11945
                    },
                    {
                        "district": "田林县",
                        "id": 11946
                    },
                    {
                        "district": "西林县",
                        "id": 11947
                    },
                    {
                        "district": "隆林各族自治县",
                        "id": 11948
                    }
                ],
                "id": 1227
            },
            {
                "city": "贺州市",
                "districts": [
                    {
                        "district": "八步区",
                        "id": 11949
                    },
                    {
                        "district": "昭平县",
                        "id": 11950
                    },
                    {
                        "district": "钟山县",
                        "id": 11951
                    },
                    {
                        "district": "富川瑶族自治县",
                        "id": 11952
                    }
                ],
                "id": 1228
            },
            {
                "city": "河池市",
                "districts": [
                    {
                        "district": "金城江区",
                        "id": 11953
                    },
                    {
                        "district": "南丹县",
                        "id": 11954
                    },
                    {
                        "district": "天峨县",
                        "id": 11955
                    },
                    {
                        "district": "凤山县",
                        "id": 11956
                    },
                    {
                        "district": "东兰县",
                        "id": 11957
                    },
                    {
                        "district": "罗城仫佬族自治县",
                        "id": 11958
                    },
                    {
                        "district": "环江毛南族自治县",
                        "id": 11959
                    },
                    {
                        "district": "巴马瑶族自治县",
                        "id": 11960
                    },
                    {
                        "district": "都安瑶族自治县",
                        "id": 11961
                    },
                    {
                        "district": "大化瑶族自治县",
                        "id": 11962
                    },
                    {
                        "district": "宜州市",
                        "id": 11963
                    }
                ],
                "id": 1229
            },
            {
                "city": "来宾市",
                "districts": [
                    {
                        "district": "兴宾区",
                        "id": 11964
                    },
                    {
                        "district": "忻城县",
                        "id": 11965
                    },
                    {
                        "district": "象州县",
                        "id": 11966
                    },
                    {
                        "district": "武宣县",
                        "id": 11967
                    },
                    {
                        "district": "金秀瑶族自治县",
                        "id": 11968
                    },
                    {
                        "district": "合山市",
                        "id": 11969
                    }
                ],
                "id": 1230
            },
            {
                "city": "崇左市",
                "districts": [
                    {
                        "district": "江洲区",
                        "id": 11970
                    },
                    {
                        "district": "扶绥县",
                        "id": 11971
                    },
                    {
                        "district": "宁明县",
                        "id": 11972
                    },
                    {
                        "district": "龙州县",
                        "id": 11973
                    },
                    {
                        "district": "大新县",
                        "id": 11974
                    },
                    {
                        "district": "天等县",
                        "id": 11975
                    },
                    {
                        "district": "凭祥市",
                        "id": 11976
                    }
                ],
                "id": 1231
            }
        ]
    },
    {
        "province": "海南省",
        "id": 21,
        "citys": [
            {
                "city": "海口市",
                "districts": [
                    {
                        "district": "秀英区",
                        "id": 11977
                    },
                    {
                        "district": "龙华区",
                        "id": 11978
                    },
                    {
                        "district": "琼山区",
                        "id": 11979
                    },
                    {
                        "district": "美兰区",
                        "id": 11980
                    }
                ],
                "id": 1232
            },
            {
                "city": "三亚市",
                "districts": [
                    {
                        "district": "五指山市",
                        "id": 11981
                    },
                    {
                        "district": "琼海市",
                        "id": 11982
                    },
                    {
                        "district": "儋州市",
                        "id": 11983
                    },
                    {
                        "district": "文昌市",
                        "id": 11984
                    },
                    {
                        "district": "万宁市",
                        "id": 11985
                    },
                    {
                        "district": "东方市",
                        "id": 11986
                    },
                    {
                        "district": "定安县",
                        "id": 11987
                    },
                    {
                        "district": "屯昌县",
                        "id": 11988
                    },
                    {
                        "district": "澄迈县",
                        "id": 11989
                    },
                    {
                        "district": "临高县",
                        "id": 11990
                    },
                    {
                        "district": "白沙黎族自治县",
                        "id": 11991
                    },
                    {
                        "district": "昌江黎族自治县",
                        "id": 11992
                    },
                    {
                        "district": "乐东黎族自治县",
                        "id": 11993
                    },
                    {
                        "district": "陵水黎族自治县",
                        "id": 11994
                    },
                    {
                        "district": "保亭黎族苗族自治县",
                        "id": 11995
                    },
                    {
                        "district": "琼中黎族苗族自治县",
                        "id": 11996
                    },
                    {
                        "district": "西沙群岛",
                        "id": 11997
                    },
                    {
                        "district": "南沙群岛",
                        "id": 11998
                    },
                    {
                        "district": "中沙群岛的岛礁及其海域",
                        "id": 11999
                    }
                ],
                "id": 1233
            }
        ]
    },
    {
        "province": "重庆市",
        "id": 22,
        "citys": [
            {
                "city": "重庆市",
                "districts": [
                    {
                        "district": "万州区",
                        "id": 12000
                    },
                    {
                        "district": "涪陵区",
                        "id": 12001
                    },
                    {
                        "district": "渝中区",
                        "id": 12002
                    },
                    {
                        "district": "大渡口区",
                        "id": 12003
                    },
                    {
                        "district": "江北区",
                        "id": 12004
                    },
                    {
                        "district": "沙坪坝区",
                        "id": 12005
                    },
                    {
                        "district": "九龙坡区",
                        "id": 12006
                    },
                    {
                        "district": "南岸区",
                        "id": 12007
                    },
                    {
                        "district": "北碚区",
                        "id": 12008
                    },
                    {
                        "district": "万盛区",
                        "id": 12009
                    },
                    {
                        "district": "双桥区",
                        "id": 12010
                    },
                    {
                        "district": "渝北区",
                        "id": 12011
                    },
                    {
                        "district": "巴南区",
                        "id": 12012
                    },
                    {
                        "district": "黔江区",
                        "id": 12013
                    },
                    {
                        "district": "长寿区",
                        "id": 12014
                    },
                    {
                        "district": "綦江县",
                        "id": 12015
                    },
                    {
                        "district": "潼南县",
                        "id": 12016
                    },
                    {
                        "district": "铜梁县",
                        "id": 12017
                    },
                    {
                        "district": "大足县",
                        "id": 12018
                    },
                    {
                        "district": "荣昌县",
                        "id": 12019
                    },
                    {
                        "district": "璧山县",
                        "id": 12020
                    },
                    {
                        "district": "梁平县",
                        "id": 12021
                    },
                    {
                        "district": "城口县",
                        "id": 12022
                    },
                    {
                        "district": "丰都县",
                        "id": 12023
                    },
                    {
                        "district": "垫江县",
                        "id": 12024
                    },
                    {
                        "district": "武隆县",
                        "id": 12025
                    },
                    {
                        "district": "忠县",
                        "id": 12026
                    },
                    {
                        "district": "开县",
                        "id": 12027
                    },
                    {
                        "district": "云阳县",
                        "id": 12028
                    },
                    {
                        "district": "奉节县",
                        "id": 12029
                    },
                    {
                        "district": "巫山县",
                        "id": 12030
                    },
                    {
                        "district": "巫溪县",
                        "id": 12031
                    },
                    {
                        "district": "石柱土家族自治县",
                        "id": 12032
                    },
                    {
                        "district": "秀山土家族苗族自治县",
                        "id": 12033
                    },
                    {
                        "district": "酉阳土家族苗族自治县",
                        "id": 12034
                    },
                    {
                        "district": "彭水苗族土家族自治县",
                        "id": 12035
                    },
                    {
                        "district": "江津市",
                        "id": 12036
                    },
                    {
                        "district": "合川市",
                        "id": 12037
                    },
                    {
                        "district": "永川市",
                        "id": 12038
                    },
                    {
                        "district": "南川市",
                        "id": 12039
                    }
                ],
                "id": 1234
            }
        ]
    },
    {
        "province": "四川省",
        "id": 23,
        "citys": [
            {
                "city": "成都市",
                "districts": [
                    {
                        "district": "锦江区",
                        "id": 12040
                    },
                    {
                        "district": "青羊区",
                        "id": 12041
                    },
                    {
                        "district": "金牛区",
                        "id": 12042
                    },
                    {
                        "district": "武侯区",
                        "id": 12043
                    },
                    {
                        "district": "成华区",
                        "id": 12044
                    },
                    {
                        "district": "龙泉驿区",
                        "id": 12045
                    },
                    {
                        "district": "青白江区",
                        "id": 12046
                    },
                    {
                        "district": "新都区",
                        "id": 12047
                    },
                    {
                        "district": "温江区",
                        "id": 12048
                    },
                    {
                        "district": "金堂县",
                        "id": 12049
                    },
                    {
                        "district": "双流县",
                        "id": 12050
                    },
                    {
                        "district": "郫县",
                        "id": 12051
                    },
                    {
                        "district": "大邑县",
                        "id": 12052
                    },
                    {
                        "district": "蒲江县",
                        "id": 12053
                    },
                    {
                        "district": "新津县",
                        "id": 12054
                    },
                    {
                        "district": "都江堰市",
                        "id": 12055
                    },
                    {
                        "district": "彭州市",
                        "id": 12056
                    },
                    {
                        "district": "邛崃市",
                        "id": 12057
                    },
                    {
                        "district": "崇州市",
                        "id": 12058
                    }
                ],
                "id": 1235
            },
            {
                "city": "自贡市",
                "districts": [
                    {
                        "district": "自流井区",
                        "id": 12059
                    },
                    {
                        "district": "贡井区",
                        "id": 12060
                    },
                    {
                        "district": "大安区",
                        "id": 12061
                    },
                    {
                        "district": "沿滩区",
                        "id": 12062
                    },
                    {
                        "district": "荣县",
                        "id": 12063
                    },
                    {
                        "district": "富顺县",
                        "id": 12064
                    }
                ],
                "id": 1236
            },
            {
                "city": "攀枝花市",
                "districts": [
                    {
                        "district": "东区",
                        "id": 12065
                    },
                    {
                        "district": "西区",
                        "id": 12066
                    },
                    {
                        "district": "仁和区",
                        "id": 12067
                    },
                    {
                        "district": "米易县",
                        "id": 12068
                    },
                    {
                        "district": "盐边县",
                        "id": 12069
                    }
                ],
                "id": 1237
            },
            {
                "city": "泸州市",
                "districts": [
                    {
                        "district": "江阳区",
                        "id": 12070
                    },
                    {
                        "district": "纳溪区",
                        "id": 12071
                    },
                    {
                        "district": "龙马潭区",
                        "id": 12072
                    },
                    {
                        "district": "泸县",
                        "id": 12073
                    },
                    {
                        "district": "合江县",
                        "id": 12074
                    },
                    {
                        "district": "叙永县",
                        "id": 12075
                    },
                    {
                        "district": "古蔺县",
                        "id": 12076
                    }
                ],
                "id": 1238
            },
            {
                "city": "德阳市",
                "districts": [
                    {
                        "district": "旌阳区",
                        "id": 12077
                    },
                    {
                        "district": "中江县",
                        "id": 12078
                    },
                    {
                        "district": "罗江县",
                        "id": 12079
                    },
                    {
                        "district": "广汉市",
                        "id": 12080
                    },
                    {
                        "district": "什邡市",
                        "id": 12081
                    },
                    {
                        "district": "绵竹市",
                        "id": 12082
                    }
                ],
                "id": 1239
            },
            {
                "city": "绵阳市",
                "districts": [
                    {
                        "district": "涪城区",
                        "id": 12083
                    },
                    {
                        "district": "游仙区",
                        "id": 12084
                    },
                    {
                        "district": "三台县",
                        "id": 12085
                    },
                    {
                        "district": "盐亭县",
                        "id": 12086
                    },
                    {
                        "district": "安县",
                        "id": 12087
                    },
                    {
                        "district": "梓潼县",
                        "id": 12088
                    },
                    {
                        "district": "北川羌族自治县",
                        "id": 12089
                    },
                    {
                        "district": "平武县",
                        "id": 12090
                    },
                    {
                        "district": "江油市",
                        "id": 12091
                    }
                ],
                "id": 1240
            },
            {
                "city": "广元市",
                "districts": [
                    {
                        "district": "市中区",
                        "id": 12092
                    },
                    {
                        "district": "元坝区",
                        "id": 12093
                    },
                    {
                        "district": "朝天区",
                        "id": 12094
                    },
                    {
                        "district": "旺苍县",
                        "id": 12095
                    },
                    {
                        "district": "青川县",
                        "id": 12096
                    },
                    {
                        "district": "剑阁县",
                        "id": 12097
                    },
                    {
                        "district": "苍溪县",
                        "id": 12098
                    }
                ],
                "id": 1241
            },
            {
                "city": "遂宁市",
                "districts": [
                    {
                        "district": "船山区",
                        "id": 12099
                    },
                    {
                        "district": "安居区",
                        "id": 12100
                    },
                    {
                        "district": "蓬溪县",
                        "id": 12101
                    },
                    {
                        "district": "射洪县",
                        "id": 12102
                    },
                    {
                        "district": "大英县",
                        "id": 12103
                    }
                ],
                "id": 1242
            },
            {
                "city": "内江市",
                "districts": [
                    {
                        "district": "市中区",
                        "id": 12104
                    },
                    {
                        "district": "东兴区",
                        "id": 12105
                    },
                    {
                        "district": "威远县",
                        "id": 12106
                    },
                    {
                        "district": "资中县",
                        "id": 12107
                    },
                    {
                        "district": "隆昌县",
                        "id": 12108
                    }
                ],
                "id": 1243
            },
            {
                "city": "乐山市",
                "districts": [
                    {
                        "district": "市中区",
                        "id": 12109
                    },
                    {
                        "district": "沙湾区",
                        "id": 12110
                    },
                    {
                        "district": "五通桥区",
                        "id": 12111
                    },
                    {
                        "district": "金口河区",
                        "id": 12112
                    },
                    {
                        "district": "犍为县",
                        "id": 12113
                    },
                    {
                        "district": "井研县",
                        "id": 12114
                    },
                    {
                        "district": "夹江县",
                        "id": 12115
                    },
                    {
                        "district": "沐川县",
                        "id": 12116
                    },
                    {
                        "district": "峨边彝族自治县",
                        "id": 12117
                    },
                    {
                        "district": "马边彝族自治县",
                        "id": 12118
                    },
                    {
                        "district": "峨眉山市",
                        "id": 12119
                    }
                ],
                "id": 1244
            },
            {
                "city": "南充市",
                "districts": [
                    {
                        "district": "顺庆区",
                        "id": 12120
                    },
                    {
                        "district": "高坪区",
                        "id": 12121
                    },
                    {
                        "district": "嘉陵区",
                        "id": 12122
                    },
                    {
                        "district": "南部县",
                        "id": 12123
                    },
                    {
                        "district": "营山县",
                        "id": 12124
                    },
                    {
                        "district": "蓬安县",
                        "id": 12125
                    },
                    {
                        "district": "仪陇县",
                        "id": 12126
                    },
                    {
                        "district": "西充县",
                        "id": 12127
                    },
                    {
                        "district": "阆中市",
                        "id": 12128
                    }
                ],
                "id": 1245
            },
            {
                "city": "眉山市",
                "districts": [
                    {
                        "district": "东坡区",
                        "id": 12129
                    },
                    {
                        "district": "仁寿县",
                        "id": 12130
                    },
                    {
                        "district": "彭山县",
                        "id": 12131
                    },
                    {
                        "district": "洪雅县",
                        "id": 12132
                    },
                    {
                        "district": "丹棱县",
                        "id": 12133
                    },
                    {
                        "district": "青神县",
                        "id": 12134
                    }
                ],
                "id": 1246
            },
            {
                "city": "宜宾市",
                "districts": [
                    {
                        "district": "翠屏区",
                        "id": 12135
                    },
                    {
                        "district": "宜宾县",
                        "id": 12136
                    },
                    {
                        "district": "南溪县",
                        "id": 12137
                    },
                    {
                        "district": "江安县",
                        "id": 12138
                    },
                    {
                        "district": "长宁县",
                        "id": 12139
                    },
                    {
                        "district": "高县",
                        "id": 12140
                    },
                    {
                        "district": "珙县",
                        "id": 12141
                    },
                    {
                        "district": "筠连县",
                        "id": 12142
                    },
                    {
                        "district": "兴文县",
                        "id": 12143
                    },
                    {
                        "district": "屏山县",
                        "id": 12144
                    }
                ],
                "id": 1247
            },
            {
                "city": "广安市",
                "districts": [
                    {
                        "district": "广安区",
                        "id": 12145
                    },
                    {
                        "district": "岳池县",
                        "id": 12146
                    },
                    {
                        "district": "武胜县",
                        "id": 12147
                    },
                    {
                        "district": "邻水县",
                        "id": 12148
                    },
                    {
                        "district": "华蓥市",
                        "id": 12149
                    }
                ],
                "id": 1248
            },
            {
                "city": "达州市",
                "districts": [
                    {
                        "district": "通川区",
                        "id": 12150
                    },
                    {
                        "district": "达县",
                        "id": 12151
                    },
                    {
                        "district": "宣汉县",
                        "id": 12152
                    },
                    {
                        "district": "开江县",
                        "id": 12153
                    },
                    {
                        "district": "大竹县",
                        "id": 12154
                    },
                    {
                        "district": "渠县",
                        "id": 12155
                    },
                    {
                        "district": "万源市",
                        "id": 12156
                    }
                ],
                "id": 1249
            },
            {
                "city": "雅安市",
                "districts": [
                    {
                        "district": "雨城区",
                        "id": 12157
                    },
                    {
                        "district": "名山县",
                        "id": 12158
                    },
                    {
                        "district": "荥经县",
                        "id": 12159
                    },
                    {
                        "district": "汉源县",
                        "id": 12160
                    },
                    {
                        "district": "石棉县",
                        "id": 12161
                    },
                    {
                        "district": "天全县",
                        "id": 12162
                    },
                    {
                        "district": "芦山县",
                        "id": 12163
                    },
                    {
                        "district": "宝兴县",
                        "id": 12164
                    }
                ],
                "id": 1250
            },
            {
                "city": "巴中市",
                "districts": [
                    {
                        "district": "巴州区",
                        "id": 12165
                    },
                    {
                        "district": "通江县",
                        "id": 12166
                    },
                    {
                        "district": "南江县",
                        "id": 12167
                    },
                    {
                        "district": "平昌县",
                        "id": 12168
                    }
                ],
                "id": 1251
            },
            {
                "city": "资阳市",
                "districts": [
                    {
                        "district": "雁江区",
                        "id": 12169
                    },
                    {
                        "district": "安岳县",
                        "id": 12170
                    },
                    {
                        "district": "乐至县",
                        "id": 12171
                    },
                    {
                        "district": "简阳市",
                        "id": 12172
                    }
                ],
                "id": 1252
            },
            {
                "city": "阿坝藏族羌族自治州",
                "districts": [
                    {
                        "district": "汶川县",
                        "id": 12173
                    },
                    {
                        "district": "理县",
                        "id": 12174
                    },
                    {
                        "district": "茂县",
                        "id": 12175
                    },
                    {
                        "district": "松潘县",
                        "id": 12176
                    },
                    {
                        "district": "九寨沟县",
                        "id": 12177
                    },
                    {
                        "district": "金川县",
                        "id": 12178
                    },
                    {
                        "district": "小金县",
                        "id": 12179
                    },
                    {
                        "district": "黑水县",
                        "id": 12180
                    },
                    {
                        "district": "马尔康县",
                        "id": 12181
                    },
                    {
                        "district": "壤塘县",
                        "id": 12182
                    },
                    {
                        "district": "阿坝县",
                        "id": 12183
                    },
                    {
                        "district": "若尔盖县",
                        "id": 12184
                    },
                    {
                        "district": "红原县",
                        "id": 12185
                    }
                ],
                "id": 1253
            },
            {
                "city": "甘孜藏族自治州",
                "districts": [
                    {
                        "district": "康定县",
                        "id": 12186
                    },
                    {
                        "district": "泸定县",
                        "id": 12187
                    },
                    {
                        "district": "丹巴县",
                        "id": 12188
                    },
                    {
                        "district": "九龙县",
                        "id": 12189
                    },
                    {
                        "district": "雅江县",
                        "id": 12190
                    },
                    {
                        "district": "道孚县",
                        "id": 12191
                    },
                    {
                        "district": "炉霍县",
                        "id": 12192
                    },
                    {
                        "district": "甘孜县",
                        "id": 12193
                    },
                    {
                        "district": "新龙县",
                        "id": 12194
                    },
                    {
                        "district": "德格县",
                        "id": 12195
                    },
                    {
                        "district": "白玉县",
                        "id": 12196
                    },
                    {
                        "district": "石渠县",
                        "id": 12197
                    },
                    {
                        "district": "色达县",
                        "id": 12198
                    },
                    {
                        "district": "理塘县",
                        "id": 12199
                    },
                    {
                        "district": "巴塘县",
                        "id": 12200
                    },
                    {
                        "district": "乡城县",
                        "id": 12201
                    },
                    {
                        "district": "稻城县",
                        "id": 12202
                    },
                    {
                        "district": "得荣县",
                        "id": 12203
                    }
                ],
                "id": 1254
            },
            {
                "city": "凉山彝族自治州",
                "districts": [
                    {
                        "district": "西昌市",
                        "id": 12204
                    },
                    {
                        "district": "木里藏族自治县",
                        "id": 12205
                    },
                    {
                        "district": "盐源县",
                        "id": 12206
                    },
                    {
                        "district": "德昌县",
                        "id": 12207
                    },
                    {
                        "district": "会理县",
                        "id": 12208
                    },
                    {
                        "district": "会东县",
                        "id": 12209
                    },
                    {
                        "district": "宁南县",
                        "id": 12210
                    },
                    {
                        "district": "普格县",
                        "id": 12211
                    },
                    {
                        "district": "布拖县",
                        "id": 12212
                    },
                    {
                        "district": "金阳县",
                        "id": 12213
                    },
                    {
                        "district": "昭觉县",
                        "id": 12214
                    },
                    {
                        "district": "喜德县",
                        "id": 12215
                    },
                    {
                        "district": "冕宁县",
                        "id": 12216
                    },
                    {
                        "district": "越西县",
                        "id": 12217
                    },
                    {
                        "district": "甘洛县",
                        "id": 12218
                    },
                    {
                        "district": "美姑县",
                        "id": 12219
                    },
                    {
                        "district": "雷波县",
                        "id": 12220
                    }
                ],
                "id": 1255
            }
        ]
    },
    {
        "province": "贵州省",
        "id": 24,
        "citys": [
            {
                "city": "贵阳市",
                "districts": [
                    {
                        "district": "南明区",
                        "id": 12221
                    },
                    {
                        "district": "云岩区",
                        "id": 12222
                    },
                    {
                        "district": "花溪区",
                        "id": 12223
                    },
                    {
                        "district": "乌当区",
                        "id": 12224
                    },
                    {
                        "district": "白云区",
                        "id": 12225
                    },
                    {
                        "district": "小河区",
                        "id": 12226
                    },
                    {
                        "district": "开阳县",
                        "id": 12227
                    },
                    {
                        "district": "息烽县",
                        "id": 12228
                    },
                    {
                        "district": "修文县",
                        "id": 12229
                    },
                    {
                        "district": "清镇市",
                        "id": 12230
                    }
                ],
                "id": 1256
            },
            {
                "city": "六盘水市",
                "districts": [
                    {
                        "district": "钟山区",
                        "id": 12231
                    },
                    {
                        "district": "六枝特区",
                        "id": 12232
                    },
                    {
                        "district": "水城县",
                        "id": 12233
                    },
                    {
                        "district": "盘县",
                        "id": 12234
                    }
                ],
                "id": 1257
            },
            {
                "city": "遵义市",
                "districts": [
                    {
                        "district": "红花岗区",
                        "id": 12235
                    },
                    {
                        "district": "汇川区",
                        "id": 12236
                    },
                    {
                        "district": "遵义县",
                        "id": 12237
                    },
                    {
                        "district": "桐梓县",
                        "id": 12238
                    },
                    {
                        "district": "绥阳县",
                        "id": 12239
                    },
                    {
                        "district": "正安县",
                        "id": 12240
                    },
                    {
                        "district": "道真仡佬族苗族自治县",
                        "id": 12241
                    },
                    {
                        "district": "务川仡佬族苗族自治县",
                        "id": 12242
                    },
                    {
                        "district": "凤冈县",
                        "id": 12243
                    },
                    {
                        "district": "湄潭县",
                        "id": 12244
                    },
                    {
                        "district": "余庆县",
                        "id": 12245
                    },
                    {
                        "district": "习水县",
                        "id": 12246
                    },
                    {
                        "district": "赤水市",
                        "id": 12247
                    },
                    {
                        "district": "仁怀市",
                        "id": 12248
                    }
                ],
                "id": 1258
            },
            {
                "city": "安顺市",
                "districts": [
                    {
                        "district": "西秀区",
                        "id": 12249
                    },
                    {
                        "district": "平坝县",
                        "id": 12250
                    },
                    {
                        "district": "普定县",
                        "id": 12251
                    },
                    {
                        "district": "镇宁布依族苗族自治县",
                        "id": 12252
                    },
                    {
                        "district": "关岭布依族苗族自治县",
                        "id": 12253
                    },
                    {
                        "district": "紫云苗族布依族自治县",
                        "id": 12254
                    }
                ],
                "id": 1259
            },
            {
                "city": "铜仁地区",
                "districts": [
                    {
                        "district": "铜仁市",
                        "id": 12255
                    },
                    {
                        "district": "江口县",
                        "id": 12256
                    },
                    {
                        "district": "玉屏侗族自治县",
                        "id": 12257
                    },
                    {
                        "district": "石阡县",
                        "id": 12258
                    },
                    {
                        "district": "思南县",
                        "id": 12259
                    },
                    {
                        "district": "印江土家族苗族自治县",
                        "id": 12260
                    },
                    {
                        "district": "德江县",
                        "id": 12261
                    },
                    {
                        "district": "沿河土家族自治县",
                        "id": 12262
                    },
                    {
                        "district": "松桃苗族自治县",
                        "id": 12263
                    },
                    {
                        "district": "万山特区",
                        "id": 12264
                    }
                ],
                "id": 1260
            },
            {
                "city": "黔西南布依族苗族自治州",
                "districts": [
                    {
                        "district": "兴义市",
                        "id": 12265
                    },
                    {
                        "district": "兴仁县",
                        "id": 12266
                    },
                    {
                        "district": "普安县",
                        "id": 12267
                    },
                    {
                        "district": "晴隆县",
                        "id": 12268
                    },
                    {
                        "district": "贞丰县",
                        "id": 12269
                    },
                    {
                        "district": "望谟县",
                        "id": 12270
                    },
                    {
                        "district": "册亨县",
                        "id": 12271
                    },
                    {
                        "district": "安龙县",
                        "id": 12272
                    }
                ],
                "id": 1261
            },
            {
                "city": "毕节地区",
                "districts": [
                    {
                        "district": "毕节市",
                        "id": 12273
                    },
                    {
                        "district": "大方县",
                        "id": 12274
                    },
                    {
                        "district": "黔西县",
                        "id": 12275
                    },
                    {
                        "district": "金沙县",
                        "id": 12276
                    },
                    {
                        "district": "织金县",
                        "id": 12277
                    },
                    {
                        "district": "纳雍县",
                        "id": 12278
                    },
                    {
                        "district": "威宁彝族回族苗族自治县",
                        "id": 12279
                    },
                    {
                        "district": "赫章县",
                        "id": 12280
                    }
                ],
                "id": 1262
            },
            {
                "city": "黔东南苗族侗族自治州",
                "districts": [
                    {
                        "district": "凯里市",
                        "id": 12281
                    },
                    {
                        "district": "黄平县",
                        "id": 12282
                    },
                    {
                        "district": "施秉县",
                        "id": 12283
                    },
                    {
                        "district": "三穗县",
                        "id": 12284
                    },
                    {
                        "district": "镇远县",
                        "id": 12285
                    },
                    {
                        "district": "岑巩县",
                        "id": 12286
                    },
                    {
                        "district": "天柱县",
                        "id": 12287
                    },
                    {
                        "district": "锦屏县",
                        "id": 12288
                    },
                    {
                        "district": "剑河县",
                        "id": 12289
                    },
                    {
                        "district": "台江县",
                        "id": 12290
                    },
                    {
                        "district": "黎平县",
                        "id": 12291
                    },
                    {
                        "district": "榕江县",
                        "id": 12292
                    },
                    {
                        "district": "从江县",
                        "id": 12293
                    },
                    {
                        "district": "雷山县",
                        "id": 12294
                    },
                    {
                        "district": "麻江县",
                        "id": 12295
                    },
                    {
                        "district": "丹寨县",
                        "id": 12296
                    }
                ],
                "id": 1263
            },
            {
                "city": "黔南布依族苗族自治州",
                "districts": [
                    {
                        "district": "都匀市",
                        "id": 12297
                    },
                    {
                        "district": "福泉市",
                        "id": 12298
                    },
                    {
                        "district": "荔波县",
                        "id": 12299
                    },
                    {
                        "district": "贵定县",
                        "id": 12300
                    },
                    {
                        "district": "瓮安县",
                        "id": 12301
                    },
                    {
                        "district": "独山县",
                        "id": 12302
                    },
                    {
                        "district": "平塘县",
                        "id": 12303
                    },
                    {
                        "district": "罗甸县",
                        "id": 12304
                    },
                    {
                        "district": "长顺县",
                        "id": 12305
                    },
                    {
                        "district": "龙里县",
                        "id": 12306
                    },
                    {
                        "district": "惠水县",
                        "id": 12307
                    },
                    {
                        "district": "三都水族自治县",
                        "id": 12308
                    }
                ],
                "id": 1264
            }
        ]
    },
    {
        "province": "云南省",
        "id": 25,
        "citys": [
            {
                "city": "昆明市",
                "districts": [
                    {
                        "district": "五华区",
                        "id": 12309
                    },
                    {
                        "district": "盘龙区",
                        "id": 12310
                    },
                    {
                        "district": "官渡区",
                        "id": 12311
                    },
                    {
                        "district": "西山区",
                        "id": 12312
                    },
                    {
                        "district": "东川区",
                        "id": 12313
                    },
                    {
                        "district": "呈贡县",
                        "id": 12314
                    },
                    {
                        "district": "晋宁县",
                        "id": 12315
                    },
                    {
                        "district": "富民县",
                        "id": 12316
                    },
                    {
                        "district": "宜良县",
                        "id": 12317
                    },
                    {
                        "district": "石林彝族自治县",
                        "id": 12318
                    },
                    {
                        "district": "嵩明县",
                        "id": 12319
                    },
                    {
                        "district": "禄劝彝族苗族自治县",
                        "id": 12320
                    },
                    {
                        "district": "寻甸回族彝族自治县",
                        "id": 12321
                    },
                    {
                        "district": "安宁市",
                        "id": 12322
                    }
                ],
                "id": 1265
            },
            {
                "city": "曲靖市",
                "districts": [
                    {
                        "district": "麒麟区",
                        "id": 12323
                    },
                    {
                        "district": "马龙县",
                        "id": 12324
                    },
                    {
                        "district": "陆良县",
                        "id": 12325
                    },
                    {
                        "district": "师宗县",
                        "id": 12326
                    },
                    {
                        "district": "罗平县",
                        "id": 12327
                    },
                    {
                        "district": "富源县",
                        "id": 12328
                    },
                    {
                        "district": "会泽县",
                        "id": 12329
                    },
                    {
                        "district": "沾益县",
                        "id": 12330
                    },
                    {
                        "district": "宣威市",
                        "id": 12331
                    }
                ],
                "id": 1266
            },
            {
                "city": "玉溪市",
                "districts": [
                    {
                        "district": "红塔区",
                        "id": 12332
                    },
                    {
                        "district": "江川县",
                        "id": 12333
                    },
                    {
                        "district": "澄江县",
                        "id": 12334
                    },
                    {
                        "district": "通海县",
                        "id": 12335
                    },
                    {
                        "district": "华宁县",
                        "id": 12336
                    },
                    {
                        "district": "易门县",
                        "id": 12337
                    },
                    {
                        "district": "峨山彝族自治县",
                        "id": 12338
                    },
                    {
                        "district": "新平彝族傣族自治县",
                        "id": 12339
                    },
                    {
                        "district": "元江哈尼族彝族傣族自治县",
                        "id": 12340
                    }
                ],
                "id": 1267
            },
            {
                "city": "保山市",
                "districts": [
                    {
                        "district": "隆阳区",
                        "id": 12341
                    },
                    {
                        "district": "施甸县",
                        "id": 12342
                    },
                    {
                        "district": "腾冲县",
                        "id": 12343
                    },
                    {
                        "district": "龙陵县",
                        "id": 12344
                    },
                    {
                        "district": "昌宁县",
                        "id": 12345
                    }
                ],
                "id": 1268
            },
            {
                "city": "昭通市",
                "districts": [
                    {
                        "district": "昭阳区",
                        "id": 12346
                    },
                    {
                        "district": "鲁甸县",
                        "id": 12347
                    },
                    {
                        "district": "巧家县",
                        "id": 12348
                    },
                    {
                        "district": "盐津县",
                        "id": 12349
                    },
                    {
                        "district": "大关县",
                        "id": 12350
                    },
                    {
                        "district": "永善县",
                        "id": 12351
                    },
                    {
                        "district": "绥江县",
                        "id": 12352
                    },
                    {
                        "district": "镇雄县",
                        "id": 12353
                    },
                    {
                        "district": "彝良县",
                        "id": 12354
                    },
                    {
                        "district": "威信县",
                        "id": 12355
                    },
                    {
                        "district": "水富县",
                        "id": 12356
                    }
                ],
                "id": 1269
            },
            {
                "city": "丽江市",
                "districts": [
                    {
                        "district": "古城区",
                        "id": 12357
                    },
                    {
                        "district": "玉龙纳西族自治县",
                        "id": 12358
                    },
                    {
                        "district": "永胜县",
                        "id": 12359
                    },
                    {
                        "district": "华坪县",
                        "id": 12360
                    },
                    {
                        "district": "宁蒗彝族自治县",
                        "id": 12361
                    }
                ],
                "id": 1270
            },
            {
                "city": "思茅市",
                "districts": [
                    {
                        "district": "翠云区",
                        "id": 12362
                    },
                    {
                        "district": "普洱哈尼族彝族自治县",
                        "id": 12363
                    },
                    {
                        "district": "墨江哈尼族自治县",
                        "id": 12364
                    },
                    {
                        "district": "景东彝族自治县",
                        "id": 12365
                    },
                    {
                        "district": "景谷傣族彝族自治县",
                        "id": 12366
                    },
                    {
                        "district": "镇沅彝族哈尼族拉祜族自治县",
                        "id": 12367
                    },
                    {
                        "district": "江城哈尼族彝族自治县",
                        "id": 12368
                    },
                    {
                        "district": "孟连傣族拉祜族佤族自治县",
                        "id": 12369
                    },
                    {
                        "district": "澜沧拉祜族自治县",
                        "id": 12370
                    },
                    {
                        "district": "西盟佤族自治县",
                        "id": 12371
                    }
                ],
                "id": 1271
            },
            {
                "city": "临沧市",
                "districts": [
                    {
                        "district": "临翔区",
                        "id": 12372
                    },
                    {
                        "district": "凤庆县",
                        "id": 12373
                    },
                    {
                        "district": "云县",
                        "id": 12374
                    },
                    {
                        "district": "永德县",
                        "id": 12375
                    },
                    {
                        "district": "镇康县",
                        "id": 12376
                    },
                    {
                        "district": "双江拉祜族佤族布朗族傣族自治县",
                        "id": 12377
                    },
                    {
                        "district": "耿马傣族佤族自治县",
                        "id": 12378
                    },
                    {
                        "district": "沧源佤族自治县",
                        "id": 12379
                    }
                ],
                "id": 1272
            },
            {
                "city": "楚雄彝族自治州",
                "districts": [
                    {
                        "district": "楚雄市",
                        "id": 12380
                    },
                    {
                        "district": "双柏县",
                        "id": 12381
                    },
                    {
                        "district": "牟定县",
                        "id": 12382
                    },
                    {
                        "district": "南华县",
                        "id": 12383
                    },
                    {
                        "district": "姚安县",
                        "id": 12384
                    },
                    {
                        "district": "大姚县",
                        "id": 12385
                    },
                    {
                        "district": "永仁县",
                        "id": 12386
                    },
                    {
                        "district": "元谋县",
                        "id": 12387
                    },
                    {
                        "district": "武定县",
                        "id": 12388
                    },
                    {
                        "district": "禄丰县",
                        "id": 12389
                    }
                ],
                "id": 1273
            },
            {
                "city": "红河哈尼族彝族自治州",
                "districts": [
                    {
                        "district": "个旧市",
                        "id": 12390
                    },
                    {
                        "district": "开远市",
                        "id": 12391
                    },
                    {
                        "district": "蒙自县",
                        "id": 12392
                    },
                    {
                        "district": "屏边苗族自治县",
                        "id": 12393
                    },
                    {
                        "district": "建水县",
                        "id": 12394
                    },
                    {
                        "district": "石屏县",
                        "id": 12395
                    },
                    {
                        "district": "弥勒县",
                        "id": 12396
                    },
                    {
                        "district": "泸西县",
                        "id": 12397
                    },
                    {
                        "district": "元阳县",
                        "id": 12398
                    },
                    {
                        "district": "红河县",
                        "id": 12399
                    },
                    {
                        "district": "金平苗族瑶族傣族自治县",
                        "id": 12400
                    },
                    {
                        "district": "绿春县",
                        "id": 12401
                    },
                    {
                        "district": "河口瑶族自治县",
                        "id": 12402
                    }
                ],
                "id": 1274
            },
            {
                "city": "文山壮族苗族自治州",
                "districts": [
                    {
                        "district": "文山县",
                        "id": 12403
                    },
                    {
                        "district": "砚山县",
                        "id": 12404
                    },
                    {
                        "district": "西畴县",
                        "id": 12405
                    },
                    {
                        "district": "麻栗坡县",
                        "id": 12406
                    },
                    {
                        "district": "马关县",
                        "id": 12407
                    },
                    {
                        "district": "丘北县",
                        "id": 12408
                    },
                    {
                        "district": "广南县",
                        "id": 12409
                    },
                    {
                        "district": "富宁县",
                        "id": 12410
                    }
                ],
                "id": 1275
            },
            {
                "city": "西双版纳傣族自治州",
                "districts": [
                    {
                        "district": "景洪市",
                        "id": 12411
                    },
                    {
                        "district": "勐海县",
                        "id": 12412
                    },
                    {
                        "district": "勐腊县",
                        "id": 12413
                    }
                ],
                "id": 1276
            },
            {
                "city": "大理白族自治州",
                "districts": [
                    {
                        "district": "大理市",
                        "id": 12414
                    },
                    {
                        "district": "漾濞彝族自治县",
                        "id": 12415
                    },
                    {
                        "district": "祥云县",
                        "id": 12416
                    },
                    {
                        "district": "宾川县",
                        "id": 12417
                    },
                    {
                        "district": "弥渡县",
                        "id": 12418
                    },
                    {
                        "district": "南涧彝族自治县",
                        "id": 12419
                    },
                    {
                        "district": "巍山彝族回族自治县",
                        "id": 12420
                    },
                    {
                        "district": "永平县",
                        "id": 12421
                    },
                    {
                        "district": "云龙县",
                        "id": 12422
                    },
                    {
                        "district": "洱源县",
                        "id": 12423
                    },
                    {
                        "district": "剑川县",
                        "id": 12424
                    },
                    {
                        "district": "鹤庆县",
                        "id": 12425
                    }
                ],
                "id": 1277
            },
            {
                "city": "德宏傣族景颇族自治州",
                "districts": [
                    {
                        "district": "瑞丽市",
                        "id": 12426
                    },
                    {
                        "district": "潞西市",
                        "id": 12427
                    },
                    {
                        "district": "梁河县",
                        "id": 12428
                    },
                    {
                        "district": "盈江县",
                        "id": 12429
                    },
                    {
                        "district": "陇川县",
                        "id": 12430
                    }
                ],
                "id": 1278
            },
            {
                "city": "怒江傈僳族自治州",
                "districts": [
                    {
                        "district": "泸水县",
                        "id": 12431
                    },
                    {
                        "district": "福贡县",
                        "id": 12432
                    },
                    {
                        "district": "贡山独龙族怒族自治县",
                        "id": 12433
                    },
                    {
                        "district": "兰坪白族普米族自治县",
                        "id": 12434
                    }
                ],
                "id": 1279
            },
            {
                "city": "迪庆藏族自治州",
                "districts": [
                    {
                        "district": "香格里拉县",
                        "id": 12435
                    },
                    {
                        "district": "德钦县",
                        "id": 12436
                    },
                    {
                        "district": "维西傈僳族自治县",
                        "id": 12437
                    }
                ],
                "id": 1280
            }
        ]
    },
    {
        "province": "西藏省",
        "id": 26,
        "citys": [
            {
                "city": "拉萨市",
                "districts": [
                    {
                        "district": "城关区",
                        "id": 12438
                    },
                    {
                        "district": "林周县",
                        "id": 12439
                    },
                    {
                        "district": "当雄县",
                        "id": 12440
                    },
                    {
                        "district": "尼木县",
                        "id": 12441
                    },
                    {
                        "district": "曲水县",
                        "id": 12442
                    },
                    {
                        "district": "堆龙德庆县",
                        "id": 12443
                    },
                    {
                        "district": "达孜县",
                        "id": 12444
                    },
                    {
                        "district": "墨竹工卡县",
                        "id": 12445
                    }
                ],
                "id": 1281
            },
            {
                "city": "昌都地区",
                "districts": [
                    {
                        "district": "昌都县",
                        "id": 12446
                    },
                    {
                        "district": "江达县",
                        "id": 12447
                    },
                    {
                        "district": "贡觉县",
                        "id": 12448
                    },
                    {
                        "district": "类乌齐县",
                        "id": 12449
                    },
                    {
                        "district": "丁青县",
                        "id": 12450
                    },
                    {
                        "district": "察雅县",
                        "id": 12451
                    },
                    {
                        "district": "八宿县",
                        "id": 12452
                    },
                    {
                        "district": "左贡县",
                        "id": 12453
                    },
                    {
                        "district": "芒康县",
                        "id": 12454
                    },
                    {
                        "district": "洛隆县",
                        "id": 12455
                    },
                    {
                        "district": "边坝县",
                        "id": 12456
                    }
                ],
                "id": 1282
            },
            {
                "city": "山南地区",
                "districts": [
                    {
                        "district": "乃东县",
                        "id": 12457
                    },
                    {
                        "district": "扎囊县",
                        "id": 12458
                    },
                    {
                        "district": "贡嘎县",
                        "id": 12459
                    },
                    {
                        "district": "桑日县",
                        "id": 12460
                    },
                    {
                        "district": "琼结县",
                        "id": 12461
                    },
                    {
                        "district": "曲松县",
                        "id": 12462
                    },
                    {
                        "district": "措美县",
                        "id": 12463
                    },
                    {
                        "district": "洛扎县",
                        "id": 12464
                    },
                    {
                        "district": "加查县",
                        "id": 12465
                    },
                    {
                        "district": "隆子县",
                        "id": 12466
                    },
                    {
                        "district": "错那县",
                        "id": 12467
                    },
                    {
                        "district": "浪卡子县",
                        "id": 12468
                    }
                ],
                "id": 1283
            },
            {
                "city": "日喀则地区",
                "districts": [
                    {
                        "district": "日喀则市",
                        "id": 12469
                    },
                    {
                        "district": "南木林县",
                        "id": 12470
                    },
                    {
                        "district": "江孜县",
                        "id": 12471
                    },
                    {
                        "district": "定日县",
                        "id": 12472
                    },
                    {
                        "district": "萨迦县",
                        "id": 12473
                    },
                    {
                        "district": "拉孜县",
                        "id": 12474
                    },
                    {
                        "district": "昂仁县",
                        "id": 12475
                    },
                    {
                        "district": "谢通门县",
                        "id": 12476
                    },
                    {
                        "district": "白朗县",
                        "id": 12477
                    },
                    {
                        "district": "仁布县",
                        "id": 12478
                    },
                    {
                        "district": "康马县",
                        "id": 12479
                    },
                    {
                        "district": "定结县",
                        "id": 12480
                    },
                    {
                        "district": "仲巴县",
                        "id": 12481
                    },
                    {
                        "district": "亚东县",
                        "id": 12482
                    },
                    {
                        "district": "吉隆县",
                        "id": 12483
                    },
                    {
                        "district": "聂拉木县",
                        "id": 12484
                    },
                    {
                        "district": "萨嘎县",
                        "id": 12485
                    },
                    {
                        "district": "岗巴县",
                        "id": 12486
                    }
                ],
                "id": 1284
            },
            {
                "city": "那曲地区",
                "districts": [
                    {
                        "district": "那曲县",
                        "id": 12487
                    },
                    {
                        "district": "嘉黎县",
                        "id": 12488
                    },
                    {
                        "district": "比如县",
                        "id": 12489
                    },
                    {
                        "district": "聂荣县",
                        "id": 12490
                    },
                    {
                        "district": "安多县",
                        "id": 12491
                    },
                    {
                        "district": "申扎县",
                        "id": 12492
                    },
                    {
                        "district": "索县",
                        "id": 12493
                    },
                    {
                        "district": "班戈县",
                        "id": 12494
                    },
                    {
                        "district": "巴青县",
                        "id": 12495
                    },
                    {
                        "district": "尼玛县",
                        "id": 12496
                    }
                ],
                "id": 1285
            },
            {
                "city": "阿里地区",
                "districts": [
                    {
                        "district": "普兰县",
                        "id": 12497
                    },
                    {
                        "district": "札达县",
                        "id": 12498
                    },
                    {
                        "district": "噶尔县",
                        "id": 12499
                    },
                    {
                        "district": "日土县",
                        "id": 12500
                    },
                    {
                        "district": "革吉县",
                        "id": 12501
                    },
                    {
                        "district": "改则县",
                        "id": 12502
                    },
                    {
                        "district": "措勤县",
                        "id": 12503
                    }
                ],
                "id": 1286
            },
            {
                "city": "林芝地区",
                "districts": [
                    {
                        "district": "林芝县",
                        "id": 12504
                    },
                    {
                        "district": "工布江达县",
                        "id": 12505
                    },
                    {
                        "district": "米林县",
                        "id": 12506
                    },
                    {
                        "district": "墨脱县",
                        "id": 12507
                    },
                    {
                        "district": "波密县",
                        "id": 12508
                    },
                    {
                        "district": "察隅县",
                        "id": 12509
                    },
                    {
                        "district": "朗县",
                        "id": 12510
                    }
                ],
                "id": 1287
            }
        ]
    },
    {
        "province": "陕西省",
        "id": 27,
        "citys": [
            {
                "city": "西安市",
                "districts": [
                    {
                        "district": "新城区",
                        "id": 12511
                    },
                    {
                        "district": "碑林区",
                        "id": 12512
                    },
                    {
                        "district": "莲湖区",
                        "id": 12513
                    },
                    {
                        "district": "灞桥区",
                        "id": 12514
                    },
                    {
                        "district": "未央区",
                        "id": 12515
                    },
                    {
                        "district": "雁塔区",
                        "id": 12516
                    },
                    {
                        "district": "阎良区",
                        "id": 12517
                    },
                    {
                        "district": "临潼区",
                        "id": 12518
                    },
                    {
                        "district": "长安区",
                        "id": 12519
                    },
                    {
                        "district": "蓝田县",
                        "id": 12520
                    },
                    {
                        "district": "周至县",
                        "id": 12521
                    },
                    {
                        "district": "户县",
                        "id": 12522
                    },
                    {
                        "district": "高陵县",
                        "id": 12523
                    }
                ],
                "id": 1288
            },
            {
                "city": "铜川市",
                "districts": [
                    {
                        "district": "王益区",
                        "id": 12524
                    },
                    {
                        "district": "印台区",
                        "id": 12525
                    },
                    {
                        "district": "耀州区",
                        "id": 12526
                    },
                    {
                        "district": "宜君县",
                        "id": 12527
                    }
                ],
                "id": 1289
            },
            {
                "city": "宝鸡市",
                "districts": [
                    {
                        "district": "渭滨区",
                        "id": 12528
                    },
                    {
                        "district": "金台区",
                        "id": 12529
                    },
                    {
                        "district": "陈仓区",
                        "id": 12530
                    },
                    {
                        "district": "凤翔县",
                        "id": 12531
                    },
                    {
                        "district": "岐山县",
                        "id": 12532
                    },
                    {
                        "district": "扶风县",
                        "id": 12533
                    },
                    {
                        "district": "眉县",
                        "id": 12534
                    },
                    {
                        "district": "陇县",
                        "id": 12535
                    },
                    {
                        "district": "千阳县",
                        "id": 12536
                    },
                    {
                        "district": "麟游县",
                        "id": 12537
                    },
                    {
                        "district": "凤县",
                        "id": 12538
                    },
                    {
                        "district": "太白县",
                        "id": 12539
                    }
                ],
                "id": 1290
            },
            {
                "city": "咸阳市",
                "districts": [
                    {
                        "district": "秦都区",
                        "id": 12540
                    },
                    {
                        "district": "杨凌区",
                        "id": 12541
                    },
                    {
                        "district": "渭城区",
                        "id": 12542
                    },
                    {
                        "district": "三原县",
                        "id": 12543
                    },
                    {
                        "district": "泾阳县",
                        "id": 12544
                    },
                    {
                        "district": "乾县",
                        "id": 12545
                    },
                    {
                        "district": "礼泉县",
                        "id": 12546
                    },
                    {
                        "district": "永寿县",
                        "id": 12547
                    },
                    {
                        "district": "彬县",
                        "id": 12548
                    },
                    {
                        "district": "长武县",
                        "id": 12549
                    },
                    {
                        "district": "旬邑县",
                        "id": 12550
                    },
                    {
                        "district": "淳化县",
                        "id": 12551
                    },
                    {
                        "district": "武功县",
                        "id": 12552
                    },
                    {
                        "district": "兴平市",
                        "id": 12553
                    }
                ],
                "id": 1291
            },
            {
                "city": "渭南市",
                "districts": [
                    {
                        "district": "临渭区",
                        "id": 12554
                    },
                    {
                        "district": "华县",
                        "id": 12555
                    },
                    {
                        "district": "潼关县",
                        "id": 12556
                    },
                    {
                        "district": "大荔县",
                        "id": 12557
                    },
                    {
                        "district": "合阳县",
                        "id": 12558
                    },
                    {
                        "district": "澄城县",
                        "id": 12559
                    },
                    {
                        "district": "蒲城县",
                        "id": 12560
                    },
                    {
                        "district": "白水县",
                        "id": 12561
                    },
                    {
                        "district": "富平县",
                        "id": 12562
                    },
                    {
                        "district": "韩城市",
                        "id": 12563
                    },
                    {
                        "district": "华阴市",
                        "id": 12564
                    }
                ],
                "id": 1292
            },
            {
                "city": "延安市",
                "districts": [
                    {
                        "district": "宝塔区",
                        "id": 12565
                    },
                    {
                        "district": "延长县",
                        "id": 12566
                    },
                    {
                        "district": "延川县",
                        "id": 12567
                    },
                    {
                        "district": "子长县",
                        "id": 12568
                    },
                    {
                        "district": "安塞县",
                        "id": 12569
                    },
                    {
                        "district": "志丹县",
                        "id": 12570
                    },
                    {
                        "district": "吴旗县",
                        "id": 12571
                    },
                    {
                        "district": "甘泉县",
                        "id": 12572
                    },
                    {
                        "district": "富县",
                        "id": 12573
                    },
                    {
                        "district": "洛川县",
                        "id": 12574
                    },
                    {
                        "district": "宜川县",
                        "id": 12575
                    },
                    {
                        "district": "黄龙县",
                        "id": 12576
                    },
                    {
                        "district": "黄陵县",
                        "id": 12577
                    }
                ],
                "id": 1293
            },
            {
                "city": "汉中市",
                "districts": [
                    {
                        "district": "汉台区",
                        "id": 12578
                    },
                    {
                        "district": "南郑县",
                        "id": 12579
                    },
                    {
                        "district": "城固县",
                        "id": 12580
                    },
                    {
                        "district": "洋县",
                        "id": 12581
                    },
                    {
                        "district": "西乡县",
                        "id": 12582
                    },
                    {
                        "district": "勉县",
                        "id": 12583
                    },
                    {
                        "district": "宁强县",
                        "id": 12584
                    },
                    {
                        "district": "略阳县",
                        "id": 12585
                    },
                    {
                        "district": "镇巴县",
                        "id": 12586
                    },
                    {
                        "district": "留坝县",
                        "id": 12587
                    },
                    {
                        "district": "佛坪县",
                        "id": 12588
                    }
                ],
                "id": 1294
            },
            {
                "city": "榆林市",
                "districts": [
                    {
                        "district": "榆阳区",
                        "id": 12589
                    },
                    {
                        "district": "神木县",
                        "id": 12590
                    },
                    {
                        "district": "府谷县",
                        "id": 12591
                    },
                    {
                        "district": "横山县",
                        "id": 12592
                    },
                    {
                        "district": "靖边县",
                        "id": 12593
                    },
                    {
                        "district": "定边县",
                        "id": 12594
                    },
                    {
                        "district": "绥德县",
                        "id": 12595
                    },
                    {
                        "district": "米脂县",
                        "id": 12596
                    },
                    {
                        "district": "佳县",
                        "id": 12597
                    },
                    {
                        "district": "吴堡县",
                        "id": 12598
                    },
                    {
                        "district": "清涧县",
                        "id": 12599
                    },
                    {
                        "district": "子洲县",
                        "id": 12600
                    }
                ],
                "id": 1295
            },
            {
                "city": "安康市",
                "districts": [
                    {
                        "district": "汉滨区",
                        "id": 12601
                    },
                    {
                        "district": "汉阴县",
                        "id": 12602
                    },
                    {
                        "district": "石泉县",
                        "id": 12603
                    },
                    {
                        "district": "宁陕县",
                        "id": 12604
                    },
                    {
                        "district": "紫阳县",
                        "id": 12605
                    },
                    {
                        "district": "岚皋县",
                        "id": 12606
                    },
                    {
                        "district": "平利县",
                        "id": 12607
                    },
                    {
                        "district": "镇坪县",
                        "id": 12608
                    },
                    {
                        "district": "旬阳县",
                        "id": 12609
                    },
                    {
                        "district": "白河县",
                        "id": 12610
                    }
                ],
                "id": 1296
            },
            {
                "city": "商洛市",
                "districts": [
                    {
                        "district": "商州区",
                        "id": 12611
                    },
                    {
                        "district": "洛南县",
                        "id": 12612
                    },
                    {
                        "district": "丹凤县",
                        "id": 12613
                    },
                    {
                        "district": "商南县",
                        "id": 12614
                    },
                    {
                        "district": "山阳县",
                        "id": 12615
                    },
                    {
                        "district": "镇安县",
                        "id": 12616
                    },
                    {
                        "district": "柞水县",
                        "id": 12617
                    }
                ],
                "id": 1297
            }
        ]
    },
    {
        "province": "甘肃省",
        "id": 28,
        "citys": [
            {
                "city": "兰州市",
                "districts": [
                    {
                        "district": "城关区",
                        "id": 12618
                    },
                    {
                        "district": "七里河区",
                        "id": 12619
                    },
                    {
                        "district": "西固区",
                        "id": 12620
                    },
                    {
                        "district": "安宁区",
                        "id": 12621
                    },
                    {
                        "district": "红古区",
                        "id": 12622
                    },
                    {
                        "district": "永登县",
                        "id": 12623
                    },
                    {
                        "district": "皋兰县",
                        "id": 12624
                    },
                    {
                        "district": "榆中县",
                        "id": 12625
                    }
                ],
                "id": 1298
            },
            {
                "city": "嘉峪关市",
                "districts": [],
                "id": 1299
            },
            {
                "city": "金昌市",
                "districts": [
                    {
                        "district": "金川区",
                        "id": 12626
                    },
                    {
                        "district": "永昌县",
                        "id": 12627
                    }
                ],
                "id": 1300
            },
            {
                "city": "白银市",
                "districts": [
                    {
                        "district": "白银区",
                        "id": 12628
                    },
                    {
                        "district": "平川区",
                        "id": 12629
                    },
                    {
                        "district": "靖远县",
                        "id": 12630
                    },
                    {
                        "district": "会宁县",
                        "id": 12631
                    },
                    {
                        "district": "景泰县",
                        "id": 12632
                    }
                ],
                "id": 1301
            },
            {
                "city": "天水市",
                "districts": [
                    {
                        "district": "秦城区",
                        "id": 12633
                    },
                    {
                        "district": "北道区",
                        "id": 12634
                    },
                    {
                        "district": "清水县",
                        "id": 12635
                    },
                    {
                        "district": "秦安县",
                        "id": 12636
                    },
                    {
                        "district": "甘谷县",
                        "id": 12637
                    },
                    {
                        "district": "武山县",
                        "id": 12638
                    },
                    {
                        "district": "张家川回族自治县",
                        "id": 12639
                    }
                ],
                "id": 1302
            },
            {
                "city": "武威市",
                "districts": [
                    {
                        "district": "凉州区",
                        "id": 12640
                    },
                    {
                        "district": "民勤县",
                        "id": 12641
                    },
                    {
                        "district": "古浪县",
                        "id": 12642
                    },
                    {
                        "district": "天祝藏族自治县",
                        "id": 12643
                    }
                ],
                "id": 1303
            },
            {
                "city": "张掖市",
                "districts": [
                    {
                        "district": "甘州区",
                        "id": 12644
                    },
                    {
                        "district": "肃南裕固族自治县",
                        "id": 12645
                    },
                    {
                        "district": "民乐县",
                        "id": 12646
                    },
                    {
                        "district": "临泽县",
                        "id": 12647
                    },
                    {
                        "district": "高台县",
                        "id": 12648
                    },
                    {
                        "district": "山丹县",
                        "id": 12649
                    }
                ],
                "id": 1304
            },
            {
                "city": "平凉市",
                "districts": [
                    {
                        "district": "崆峒区",
                        "id": 12650
                    },
                    {
                        "district": "泾川县",
                        "id": 12651
                    },
                    {
                        "district": "灵台县",
                        "id": 12652
                    },
                    {
                        "district": "崇信县",
                        "id": 12653
                    },
                    {
                        "district": "华亭县",
                        "id": 12654
                    },
                    {
                        "district": "庄浪县",
                        "id": 12655
                    },
                    {
                        "district": "静宁县",
                        "id": 12656
                    }
                ],
                "id": 1305
            },
            {
                "city": "酒泉市",
                "districts": [
                    {
                        "district": "肃州区",
                        "id": 12657
                    },
                    {
                        "district": "金塔县",
                        "id": 12658
                    },
                    {
                        "district": "安西县",
                        "id": 12659
                    },
                    {
                        "district": "肃北蒙古族自治县",
                        "id": 12660
                    },
                    {
                        "district": "阿克塞哈萨克族自治县",
                        "id": 12661
                    },
                    {
                        "district": "玉门市",
                        "id": 12662
                    },
                    {
                        "district": "敦煌市",
                        "id": 12663
                    }
                ],
                "id": 1306
            },
            {
                "city": "庆阳市",
                "districts": [
                    {
                        "district": "西峰区",
                        "id": 12664
                    },
                    {
                        "district": "庆城县",
                        "id": 12665
                    },
                    {
                        "district": "环县",
                        "id": 12666
                    },
                    {
                        "district": "华池县",
                        "id": 12667
                    },
                    {
                        "district": "合水县",
                        "id": 12668
                    },
                    {
                        "district": "正宁县",
                        "id": 12669
                    },
                    {
                        "district": "宁县",
                        "id": 12670
                    },
                    {
                        "district": "镇原县",
                        "id": 12671
                    }
                ],
                "id": 1307
            },
            {
                "city": "定西市",
                "districts": [
                    {
                        "district": "安定区",
                        "id": 12672
                    },
                    {
                        "district": "通渭县",
                        "id": 12673
                    },
                    {
                        "district": "陇西县",
                        "id": 12674
                    },
                    {
                        "district": "渭源县",
                        "id": 12675
                    },
                    {
                        "district": "临洮县",
                        "id": 12676
                    },
                    {
                        "district": "漳县",
                        "id": 12677
                    },
                    {
                        "district": "岷县",
                        "id": 12678
                    }
                ],
                "id": 1308
            },
            {
                "city": "陇南市",
                "districts": [
                    {
                        "district": "武都区",
                        "id": 12679
                    },
                    {
                        "district": "成县",
                        "id": 12680
                    },
                    {
                        "district": "文县",
                        "id": 12681
                    },
                    {
                        "district": "宕昌县",
                        "id": 12682
                    },
                    {
                        "district": "康县",
                        "id": 12683
                    },
                    {
                        "district": "西和县",
                        "id": 12684
                    },
                    {
                        "district": "礼县",
                        "id": 12685
                    },
                    {
                        "district": "徽县",
                        "id": 12686
                    },
                    {
                        "district": "两当县",
                        "id": 12687
                    }
                ],
                "id": 1309
            },
            {
                "city": "临夏回族自治州",
                "districts": [
                    {
                        "district": "临夏市",
                        "id": 12688
                    },
                    {
                        "district": "临夏县",
                        "id": 12689
                    },
                    {
                        "district": "康乐县",
                        "id": 12690
                    },
                    {
                        "district": "永靖县",
                        "id": 12691
                    },
                    {
                        "district": "广河县",
                        "id": 12692
                    },
                    {
                        "district": "和政县",
                        "id": 12693
                    },
                    {
                        "district": "东乡族自治县",
                        "id": 12694
                    },
                    {
                        "district": "积石山保安族东乡族撒拉族自治县",
                        "id": 12695
                    }
                ],
                "id": 1310
            },
            {
                "city": "甘南藏族自治州",
                "districts": [
                    {
                        "district": "合作市",
                        "id": 12696
                    },
                    {
                        "district": "临潭县",
                        "id": 12697
                    },
                    {
                        "district": "卓尼县",
                        "id": 12698
                    },
                    {
                        "district": "舟曲县",
                        "id": 12699
                    },
                    {
                        "district": "迭部县",
                        "id": 12700
                    },
                    {
                        "district": "玛曲县",
                        "id": 12701
                    },
                    {
                        "district": "碌曲县",
                        "id": 12702
                    },
                    {
                        "district": "夏河县",
                        "id": 12703
                    }
                ],
                "id": 1311
            }
        ]
    },
    {
        "province": "青海省",
        "id": 29,
        "citys": [
            {
                "city": "西宁市",
                "districts": [
                    {
                        "district": "城东区",
                        "id": 12704
                    },
                    {
                        "district": "城中区",
                        "id": 12705
                    },
                    {
                        "district": "城西区",
                        "id": 12706
                    },
                    {
                        "district": "城北区",
                        "id": 12707
                    },
                    {
                        "district": "大通回族土族自治县",
                        "id": 12708
                    },
                    {
                        "district": "湟中县",
                        "id": 12709
                    },
                    {
                        "district": "湟源县",
                        "id": 12710
                    }
                ],
                "id": 1312
            },
            {
                "city": "海东地区",
                "districts": [
                    {
                        "district": "平安县",
                        "id": 12711
                    },
                    {
                        "district": "民和回族土族自治县",
                        "id": 12712
                    },
                    {
                        "district": "乐都县",
                        "id": 12713
                    },
                    {
                        "district": "互助土族自治县",
                        "id": 12714
                    },
                    {
                        "district": "化隆回族自治县",
                        "id": 12715
                    },
                    {
                        "district": "循化撒拉族自治县",
                        "id": 12716
                    }
                ],
                "id": 1313
            },
            {
                "city": "海北藏族自治州",
                "districts": [
                    {
                        "district": "门源回族自治县",
                        "id": 12717
                    },
                    {
                        "district": "祁连县",
                        "id": 12718
                    },
                    {
                        "district": "海晏县",
                        "id": 12719
                    },
                    {
                        "district": "刚察县",
                        "id": 12720
                    }
                ],
                "id": 1314
            },
            {
                "city": "黄南藏族自治州",
                "districts": [
                    {
                        "district": "同仁县",
                        "id": 12721
                    },
                    {
                        "district": "尖扎县",
                        "id": 12722
                    },
                    {
                        "district": "泽库县",
                        "id": 12723
                    },
                    {
                        "district": "河南蒙古族自治县",
                        "id": 12724
                    }
                ],
                "id": 1315
            },
            {
                "city": "海南藏族自治州",
                "districts": [
                    {
                        "district": "共和县",
                        "id": 12725
                    },
                    {
                        "district": "同德县",
                        "id": 12726
                    },
                    {
                        "district": "贵德县",
                        "id": 12727
                    },
                    {
                        "district": "兴海县",
                        "id": 12728
                    },
                    {
                        "district": "贵南县",
                        "id": 12729
                    }
                ],
                "id": 1316
            },
            {
                "city": "果洛藏族自治州",
                "districts": [
                    {
                        "district": "玛沁县",
                        "id": 12730
                    },
                    {
                        "district": "班玛县",
                        "id": 12731
                    },
                    {
                        "district": "甘德县",
                        "id": 12732
                    },
                    {
                        "district": "达日县",
                        "id": 12733
                    },
                    {
                        "district": "久治县",
                        "id": 12734
                    },
                    {
                        "district": "玛多县",
                        "id": 12735
                    }
                ],
                "id": 1317
            },
            {
                "city": "玉树藏族自治州",
                "districts": [
                    {
                        "district": "玉树县",
                        "id": 12736
                    },
                    {
                        "district": "杂多县",
                        "id": 12737
                    },
                    {
                        "district": "称多县",
                        "id": 12738
                    },
                    {
                        "district": "治多县",
                        "id": 12739
                    },
                    {
                        "district": "囊谦县",
                        "id": 12740
                    },
                    {
                        "district": "曲麻莱县",
                        "id": 12741
                    }
                ],
                "id": 1318
            },
            {
                "city": "海西蒙古族藏族自治州",
                "districts": [
                    {
                        "district": "格尔木市",
                        "id": 12742
                    },
                    {
                        "district": "德令哈市",
                        "id": 12743
                    },
                    {
                        "district": "乌兰县",
                        "id": 12744
                    },
                    {
                        "district": "都兰县",
                        "id": 12745
                    },
                    {
                        "district": "天峻县",
                        "id": 12746
                    }
                ],
                "id": 1319
            }
        ]
    },
    {
        "province": "宁夏省",
        "id": 30,
        "citys": [
            {
                "city": "银川市",
                "districts": [
                    {
                        "district": "兴庆区",
                        "id": 12747
                    },
                    {
                        "district": "西夏区",
                        "id": 12748
                    },
                    {
                        "district": "金凤区",
                        "id": 12749
                    },
                    {
                        "district": "永宁县",
                        "id": 12750
                    },
                    {
                        "district": "贺兰县",
                        "id": 12751
                    },
                    {
                        "district": "灵武市",
                        "id": 12752
                    }
                ],
                "id": 1320
            },
            {
                "city": "石嘴山市",
                "districts": [
                    {
                        "district": "大武口区",
                        "id": 12753
                    },
                    {
                        "district": "惠农区",
                        "id": 12754
                    },
                    {
                        "district": "平罗县",
                        "id": 12755
                    }
                ],
                "id": 1321
            },
            {
                "city": "吴忠市",
                "districts": [
                    {
                        "district": "利通区",
                        "id": 12756
                    },
                    {
                        "district": "盐池县",
                        "id": 12757
                    },
                    {
                        "district": "同心县",
                        "id": 12758
                    },
                    {
                        "district": "青铜峡市",
                        "id": 12759
                    }
                ],
                "id": 1322
            },
            {
                "city": "固原市",
                "districts": [
                    {
                        "district": "原州区",
                        "id": 12760
                    },
                    {
                        "district": "西吉县",
                        "id": 12761
                    },
                    {
                        "district": "隆德县",
                        "id": 12762
                    },
                    {
                        "district": "泾源县",
                        "id": 12763
                    },
                    {
                        "district": "彭阳县",
                        "id": 12764
                    }
                ],
                "id": 1323
            },
            {
                "city": "中卫市",
                "districts": [
                    {
                        "district": "沙坡头区",
                        "id": 12765
                    },
                    {
                        "district": "中宁县",
                        "id": 12766
                    },
                    {
                        "district": "海原县",
                        "id": 12767
                    }
                ],
                "id": 1324
            }
        ]
    },
    {
        "province": "新疆省",
        "id": 31,
        "citys": [
            {
                "city": "乌鲁木齐市",
                "districts": [
                    {
                        "district": "天山区",
                        "id": 12768
                    },
                    {
                        "district": "沙依巴克区",
                        "id": 12769
                    },
                    {
                        "district": "新市区",
                        "id": 12770
                    },
                    {
                        "district": "水磨沟区",
                        "id": 12771
                    },
                    {
                        "district": "头屯河区",
                        "id": 12772
                    },
                    {
                        "district": "达坂城区",
                        "id": 12773
                    },
                    {
                        "district": "东山区",
                        "id": 12774
                    },
                    {
                        "district": "乌鲁木齐县",
                        "id": 12775
                    }
                ],
                "id": 1325
            },
            {
                "city": "克拉玛依市",
                "districts": [
                    {
                        "district": "独山子区",
                        "id": 12776
                    },
                    {
                        "district": "克拉玛依区",
                        "id": 12777
                    },
                    {
                        "district": "白碱滩区",
                        "id": 12778
                    },
                    {
                        "district": "乌尔禾区",
                        "id": 12779
                    }
                ],
                "id": 1326
            },
            {
                "city": "吐鲁番地区",
                "districts": [
                    {
                        "district": "吐鲁番市",
                        "id": 12780
                    },
                    {
                        "district": "鄯善县",
                        "id": 12781
                    },
                    {
                        "district": "托克逊县",
                        "id": 12782
                    }
                ],
                "id": 1327
            },
            {
                "city": "哈密地区",
                "districts": [
                    {
                        "district": "哈密市",
                        "id": 12783
                    },
                    {
                        "district": "巴里坤哈萨克自治县",
                        "id": 12784
                    },
                    {
                        "district": "伊吾县",
                        "id": 12785
                    }
                ],
                "id": 1328
            },
            {
                "city": "昌吉回族自治州",
                "districts": [
                    {
                        "district": "昌吉市",
                        "id": 12786
                    },
                    {
                        "district": "阜康市",
                        "id": 12787
                    },
                    {
                        "district": "米泉市",
                        "id": 12788
                    },
                    {
                        "district": "呼图壁县",
                        "id": 12789
                    },
                    {
                        "district": "玛纳斯县",
                        "id": 12790
                    },
                    {
                        "district": "奇台县",
                        "id": 12791
                    },
                    {
                        "district": "吉木萨尔县",
                        "id": 12792
                    },
                    {
                        "district": "木垒哈萨克自治县",
                        "id": 12793
                    }
                ],
                "id": 1329
            },
            {
                "city": "博尔塔拉蒙古自治州",
                "districts": [
                    {
                        "district": "博乐市",
                        "id": 12794
                    },
                    {
                        "district": "精河县",
                        "id": 12795
                    },
                    {
                        "district": "温泉县",
                        "id": 12796
                    }
                ],
                "id": 1330
            },
            {
                "city": "巴音郭楞蒙古自治州",
                "districts": [
                    {
                        "district": "库尔勒市",
                        "id": 12797
                    },
                    {
                        "district": "轮台县",
                        "id": 12798
                    },
                    {
                        "district": "尉犁县",
                        "id": 12799
                    },
                    {
                        "district": "若羌县",
                        "id": 12800
                    },
                    {
                        "district": "且末县",
                        "id": 12801
                    },
                    {
                        "district": "焉耆回族自治县",
                        "id": 12802
                    },
                    {
                        "district": "和静县",
                        "id": 12803
                    },
                    {
                        "district": "和硕县",
                        "id": 12804
                    },
                    {
                        "district": "博湖县",
                        "id": 12805
                    }
                ],
                "id": 1331
            },
            {
                "city": "阿克苏地区",
                "districts": [
                    {
                        "district": "阿克苏市",
                        "id": 12806
                    },
                    {
                        "district": "温宿县",
                        "id": 12807
                    },
                    {
                        "district": "库车县",
                        "id": 12808
                    },
                    {
                        "district": "沙雅县",
                        "id": 12809
                    },
                    {
                        "district": "新和县",
                        "id": 12810
                    },
                    {
                        "district": "拜城县",
                        "id": 12811
                    },
                    {
                        "district": "乌什县",
                        "id": 12812
                    },
                    {
                        "district": "阿瓦提县",
                        "id": 12813
                    },
                    {
                        "district": "柯坪县",
                        "id": 12814
                    }
                ],
                "id": 1332
            },
            {
                "city": "克孜勒苏柯尔克孜自治州",
                "districts": [
                    {
                        "district": "阿图什市",
                        "id": 12815
                    },
                    {
                        "district": "阿克陶县",
                        "id": 12816
                    },
                    {
                        "district": "阿合奇县",
                        "id": 12817
                    },
                    {
                        "district": "乌恰县",
                        "id": 12818
                    }
                ],
                "id": 1333
            },
            {
                "city": "喀什地区",
                "districts": [
                    {
                        "district": "喀什市",
                        "id": 12819
                    },
                    {
                        "district": "疏附县",
                        "id": 12820
                    },
                    {
                        "district": "疏勒县",
                        "id": 12821
                    },
                    {
                        "district": "英吉沙县",
                        "id": 12822
                    },
                    {
                        "district": "泽普县",
                        "id": 12823
                    },
                    {
                        "district": "莎车县",
                        "id": 12824
                    },
                    {
                        "district": "叶城县",
                        "id": 12825
                    },
                    {
                        "district": "麦盖提县",
                        "id": 12826
                    },
                    {
                        "district": "岳普湖县",
                        "id": 12827
                    },
                    {
                        "district": "伽师县",
                        "id": 12828
                    },
                    {
                        "district": "巴楚县",
                        "id": 12829
                    },
                    {
                        "district": "塔什库尔干塔吉克自治县",
                        "id": 12830
                    }
                ],
                "id": 1334
            },
            {
                "city": "和田地区",
                "districts": [
                    {
                        "district": "和田市",
                        "id": 12831
                    },
                    {
                        "district": "和田县",
                        "id": 12832
                    },
                    {
                        "district": "墨玉县",
                        "id": 12833
                    },
                    {
                        "district": "皮山县",
                        "id": 12834
                    },
                    {
                        "district": "洛浦县",
                        "id": 12835
                    },
                    {
                        "district": "策勒县",
                        "id": 12836
                    },
                    {
                        "district": "于田县",
                        "id": 12837
                    },
                    {
                        "district": "民丰县",
                        "id": 12838
                    }
                ],
                "id": 1335
            },
            {
                "city": "伊犁哈萨克自治州",
                "districts": [
                    {
                        "district": "伊宁市",
                        "id": 12839
                    },
                    {
                        "district": "奎屯市",
                        "id": 12840
                    },
                    {
                        "district": "伊宁县",
                        "id": 12841
                    },
                    {
                        "district": "察布查尔锡伯自治县",
                        "id": 12842
                    },
                    {
                        "district": "霍城县",
                        "id": 12843
                    },
                    {
                        "district": "巩留县",
                        "id": 12844
                    },
                    {
                        "district": "新源县",
                        "id": 12845
                    },
                    {
                        "district": "昭苏县",
                        "id": 12846
                    },
                    {
                        "district": "特克斯县",
                        "id": 12847
                    },
                    {
                        "district": "尼勒克县",
                        "id": 12848
                    }
                ],
                "id": 1336
            },
            {
                "city": "塔城地区",
                "districts": [
                    {
                        "district": "塔城市",
                        "id": 12849
                    },
                    {
                        "district": "乌苏市",
                        "id": 12850
                    },
                    {
                        "district": "额敏县",
                        "id": 12851
                    },
                    {
                        "district": "沙湾县",
                        "id": 12852
                    },
                    {
                        "district": "托里县",
                        "id": 12853
                    },
                    {
                        "district": "裕民县",
                        "id": 12854
                    },
                    {
                        "district": "和布克赛尔蒙古自治县",
                        "id": 12855
                    }
                ],
                "id": 1337
            },
            {
                "city": "阿勒泰地区",
                "districts": [
                    {
                        "district": "阿勒泰市",
                        "id": 12856
                    },
                    {
                        "district": "布尔津县",
                        "id": 12857
                    },
                    {
                        "district": "富蕴县",
                        "id": 12858
                    },
                    {
                        "district": "福海县",
                        "id": 12859
                    },
                    {
                        "district": "哈巴河县",
                        "id": 12860
                    },
                    {
                        "district": "青河县",
                        "id": 12861
                    },
                    {
                        "district": "吉木乃县",
                        "id": 12862
                    }
                ],
                "id": 1338
            },
            {
                "city": "石河子市",
                "districts": [],
                "id": 1339
            },
            {
                "city": "阿拉尔市",
                "districts": [],
                "id": 1340
            },
            {
                "city": "图木舒克市",
                "districts": [],
                "id": 1341
            },
            {
                "city": "五家渠市",
                "districts": [],
                "id": 1342
            }
        ]
    },
    {
        "province": "香港",
        "id": 32,
        "citys": [
            {
                "city": "香港特别行政区",
                "districts": [],
                "id": 1343
            }
        ]
    },
    {
        "province": "澳门",
        "id": 33,
        "citys": [
            {
                "city": "澳门特别行政区",
                "districts": [],
                "id": 1344
            }
        ]
    },
    {
        "province": "台湾",
        "id": 34,
        "citys": [
            {
                "city": "台湾省",
                "districts": [],
                "id": 1345
            }
        ]
    }
]

    // 登录
    wx.login({
      success: res => {    // 发送res.code 到后台换取 openId, sessionKey, unionId
         this.func.req('wxs/getOpenId', {code: res.code}, function (data) {
           that.globalData.openId = data.openid;
           that.func.req('accounts/getPhoneByWxId', { wxId: data.openid }, function(data){
             that.globalData.mPhone = data;
           });
         });
      }
    }),

      // 获取用户信息
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
                // 可以将 res 发送给后台解码出 unionId
                this.globalData.userInfo = res.userInfo
                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                if (this.userInfoReadyCallback) {
                  this.userInfoReadyCallback(res);
                }
              }
            })
          }
        }
      })
  },
  globalData: {
    userInfo: null,
    openId: null,
    mPhone: null
  },

  Touches: new Touches(),
  
  func: {
    req: http.req,
    rootDocment: http.rootDocment
  }
})