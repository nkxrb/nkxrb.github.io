
var rule = {
    title: '腾讯视频',
    host: 'https://v.qq.com',
    homeUrl: '/x/bu/pagesheet/list?_all=1&append=1&channel=cartoon&listpage=1&offset=0&pagesize=21&iarea=-1&sort=18',
    detailUrl: 'https://node.video.qq.com/x/api/float_vinfo2?cid=fyid',
    searchUrl: '**',
    searchable: 2,
    filterable: 1,
    multi: 1,
    url: '/x/bu/pagesheet/list?_all=1&append=1&channel=fyclass&listpage=1&offset=((fypage-1)*21)&pagesize=21&iarea=-1',
 
    filter_url: 'sort={{fl.sort or 75}}&itype={{fl.itype}}&ifeature={{fl.ifeature}}&ipay={{fl.ipay}}&iarea={{fl.iarea}}&iyear={{fl.iyear}}&characteristic={{fl.characteristic}}&charge={{fl.charge}}&exclusive={{fl.exclusive}}&itrailer={{fl.itrailer}}&pay={{fl.pay}}&anime_status={{fl.anime_status}}&item={{fl.item}}&all={{fl.all}}&gender={{fl.gender}}&language={{fl.language}}&child_ip={{fl.child_ip}}&prefer={{fl.prefer}}&story={{fl.story}}&identity={{fl.identity}}&attraction={{fl.attraction}}&recommend={{fl.recommend}}',
   
    filter: {
        "tv": [
            {
                "key": "sort",
                "name": "排序",
                "value": [
                    { "n": "最热", "v": "75" },
                    { "n": "最新上架", "v": "79" },
                    { "n": "好评", "v": "16" }
                ]
            },
            {
                "key": "ifeature",
                "name": "类型",
                "value": [
                    { "n": "爱情", "v": "1" },
                    { "n": "古装", "v": "2" },
                    { "n": "悬疑", "v": "3" },
                    { "n": "都市", "v": "4" },
                    { "n": "家庭", "v": "5" },
                    { "n": "喜剧", "v": "6" },
                    { "n": "传奇", "v": "7" },
                    { "n": "武侠", "v": "8" },
                    { "n": "军旅", "v": "9" },
                    { "n": "权谋", "v": "10" },
                    { "n": "革命", "v": "11" },
                    { "n": "现实", "v": "13" },
                    { "n": "青春", "v": "14" },
                    { "n": "猎奇", "v": "15" },
                    { "n": "科幻", "v": "16" },
                    { "n": "竞技", "v": "17" },
                    { "n": "玄幻", "v": "18" }
                ]
            },
            {
                "key": "iarea",
                "name": "地区",
                "value": [
                    { "n": "内地", "v": "814" },
                    { "n": "美国", "v": "815" },
                    { "n": "英国", "v": "816" },
                    { "n": "韩国", "v": "818" },
                    { "n": "泰国", "v": "9" },
                    { "n": "日本", "v": "10" },
                    { "n": "中国香港", "v": "14" },
                    { "n": "中国台湾", "v": "817" },
                    { "n": "其他", "v": "819" }
                ]
            },
            {
                "key": "iyear",
                "name": "年份",
                "value": [
                    { "n": "2026", "v": "2026" },
                    { "n": "2025", "v": "2025" },
                    { "n": "2024", "v": "2024" },
                    { "n": "2023", "v": "2023" },
                    { "n": "2022", "v": "2022" },
                    { "n": "2021", "v": "2021" },
                    { "n": "2020", "v": "2020" },
                    { "n": "2019", "v": "4061" },
                    { "n": "2018", "v": "2018" },
                    { "n": "2017-2010", "v": "2017" },
                    { "n": "00年代", "v": "2000" },
                    { "n": "更早", "v": "99" }
                ]
            },
            {
                "key": "ipay",
                "name": "免费/VIP",
                "value": [
                    { "n": "免费", "v": "1" },
                    { "n": "会员", "v": "2" },
                    { "n": "短剧", "v": "11811" },
                    { "n": "即将上线", "v": "30" },
                    { "n": "X剧场", "v": "3" }
                ]
            },
            {
                "key": "recommend",
                "name": "推荐",
                "value": [
                    { "n": "命运坎坷", "v": "poi_00004535" },
                    { "n": "身份顶替", "v": "poi_00004375" },
                    { "n": "侦查追踪", "v": "poi_00004228" },
                    { "n": "东方玄幻", "v": "poi_00003596" },
                    { "n": "乡村题材", "v": "poi_00003410" },
                    { "n": "亲情", "v": "poi_00004482,poi_00004198" },
                    { "n": "反转", "v": "poi_00004844" },
                    { "n": "奇幻爱情", "v": "poi_00003396" },
                    { "n": "宅门风云", "v": "poi_00003292" },
                    { "n": "重来人生", "v": "poi_00004120" },
                    { "n": "都市奇幻", "v": "poi_00003588" },
                    { "n": "探寻真相", "v": "poi_00004416" },
                    { "n": "古装爱情", "v": "poi_00003563" },
                    { "n": "战争传奇", "v": "poi_00003493" },
                    { "n": "甜虐爱情", "v": "poi_00003431" },
                    { "n": "女性题材", "v": "poi_00004517,poi_00003399" },
                    { "n": "家长里短", "v": "poi_00003540" },
                    { "n": "婚姻生活", "v": "poi_00003610" },
                    { "n": "超能力", "v": "poi_00004921" },
                    { "n": "都市生活", "v": "poi_00003639" },
                    { "n": "失忆", "v": "poi_00004435" },
                    { "n": "偶像爱情", "v": "poi_00003363" },
                    { "n": "闪婚", "v": "poi_00004451" },
                    { "n": "系统流", "v": "poi_00004278" },
                    { "n": "生活喜剧", "v": "poi_00003375" },
                    { "n": "都市爱情", "v": "poi_00003641" },
                    { "n": "轻喜剧", "v": "poi_00003455" },
                    { "n": "职场剧", "v": "poi_00003312" },
                    { "n": "契约恋爱", "v": "poi_00004507" },
                    { "n": "情感纠葛", "v": "poi_00004398" },
                    { "n": "英雄成长", "v": "poi_00003297" },
                    { "n": "家庭喜剧", "v": "poi_00003542" },
                    { "n": "乡村生活", "v": "poi_00004312" },
                    { "n": "男性题材", "v": "poi_00003468" },
                    { "n": "末日题材", "v": "poi_00003472" },
                    { "n": "逆袭", "v": "poi_00004496" },
                    { "n": "警匪刑侦", "v": "poi_00003496" }
                ]
            }
        ],
        "movie": [
            {
                "key": "sort",
                "name": "排序",
                "value": [
                    { "n": "最热", "v": "75" },
                    { "n": "最新", "v": "83" },
                    { "n": "高分好评", "v": "81" }
                ]
            },
            {
                "key": "itype",
                "name": "类型",
                "value": [
                    { "n": "剧情", "v": "100018" },
                    { "n": "喜剧", "v": "100004" },
                    { "n": "动作", "v": "100061" },
                    { "n": "爱情", "v": "100005" },
                    { "n": "惊悚", "v": "100010" },
                    { "n": "犯罪", "v": "4" },
                    { "n": "悬疑", "v": "100009" },
                    { "n": "战争", "v": "100006" },
                    { "n": "科幻", "v": "100012" },
                    { "n": "动画", "v": "100015" },
                    { "n": "恐怖", "v": "100007" },
                    { "n": "家庭", "v": "100017" },
                    { "n": "传记", "v": "100022" },
                    { "n": "冒险", "v": "100003" },
                    { "n": "奇幻", "v": "100016" },
                    { "n": "武侠", "v": "100011" },
                    { "n": "历史", "v": "100021" },
                    { "n": "运动", "v": "2" },
                    { "n": "歌舞", "v": "100014" },
                    { "n": "音乐", "v": "100013" },
                    { "n": "纪录", "v": "100020" },
                    { "n": "伦理", "v": "100019" },
                    { "n": "西部", "v": "3" }
                ]
            },
            {
                "key": "iarea",
                "name": "地区",
                "value": [
                    { "n": "内地", "v": "100024" },
                    { "n": "中国香港", "v": "100025" },
                    { "n": "中国台湾", "v": "100026" },
                    { "n": "美国", "v": "100029" },
                    { "n": "日本", "v": "100027" },
                    { "n": "韩国", "v": "100028" },
                    { "n": "泰国", "v": "100031" },
                    { "n": "印度", "v": "100030" },
                    { "n": "英国", "v": "15" },
                    { "n": "法国", "v": "16" },
                    { "n": "德国", "v": "17" },
                    { "n": "加拿大", "v": "18" },
                    { "n": "西班牙", "v": "19" },
                    { "n": "意大利", "v": "20" },
                    { "n": "澳大利亚", "v": "21" },
                    { "n": "其他", "v": "100033" }
                ]
            },
            {
                "key": "characteristic",
                "name": "特色",
                "value": [
                    { "n": "院线电影", "v": "1" },
                    { "n": "网络电影", "v": "2" },
                    { "n": "独播", "v": "5" },
                    { "n": "原声", "v": "8" },
                    { "n": "粤语", "v": "9" },
                    { "n": "1080P", "v": "3" },
                    { "n": "奥斯卡", "v": "6" }
                ]
            },
            {
                "key": "year",
                "name": "年份",
                "value": [
                    { "n": "2026", "v": "2026" },
                    { "n": "2025", "v": "2025" },
                    { "n": "2024", "v": "2024" },
                    { "n": "2023", "v": "2023" },
                    { "n": "2022", "v": "2022" },
                    { "n": "2021", "v": "2021" },
                    { "n": "2020", "v": "2020" },
                    { "n": "2019", "v": "20" },
                    { "n": "2018", "v": "2018" },
                    { "n": "2017", "v": "2017" },
                    { "n": "2016", "v": "2016" },
                    { "n": "2015", "v": "100063" },
                    { "n": "2014", "v": "100034" },
                    { "n": "2013-2011", "v": "100035" },
                    { "n": "2010-2006", "v": "100036" },
                    { "n": "2005-2000", "v": "100037" },
                    { "n": "90年代", "v": "100038" },
                    { "n": "80年代", "v": "100039" },
                    { "n": "其它", "v": "100040" }
                ]
            },
            {
                "key": "charge",
                "name": "资费",
                "value": [
                    { "n": "免费", "v": "1" },
                    { "n": "会员", "v": "8" },
                    { "n": "付费", "v": "4" }
                ]
            }
        ],
        "variety": [
            {
                "key": "sort",
                "name": "排序",
                "value": [
                    { "n": "最热", "v": "75" },
                    { "n": "最近更新", "v": "23" }
                ]
            },
            {
                "key": "itype",
                "name": "类型",
                "value": [
                    { "n": "游戏", "v": "10" },
                    { "n": "脱口秀", "v": "2" },
                    { "n": "音乐舞台", "v": "11" },
                    { "n": "情感", "v": "12" },
                    { "n": "生活", "v": "22" },
                    { "n": "职场", "v": "20" },
                    { "n": "喜剧", "v": "14" },
                    { "n": "美食", "v": "19" },
                    { "n": "潮流运动", "v": "21" },
                    { "n": "竞技", "v": "24" },
                    { "n": "影视", "v": "16" },
                    { "n": "电竞", "v": "15" },
                    { "n": "推理", "v": "25" },
                    { "n": "访谈", "v": "3" },
                    { "n": "亲子", "v": "17" },
                    { "n": "文化", "v": "26" },
                    { "n": "互动", "v": "23" },
                    { "n": "晚会", "v": "6" },
                    { "n": "资讯", "v": "7" }
                ]
            },
            {
                "key": "ipay",
                "name": "资费",
                "value": [
                    { "n": "免费", "v": "1" },
                    { "n": "会员", "v": "6" },
                    { "n": "超级剧场", "v": "15" }
                ]
            },
            {
                "key": "exclusive",
                "name": "自制/独播",
                "value": [
                    { "n": "腾讯自制", "v": "1" },
                    { "n": "独播", "v": "2" }
                ]
            },
            {
                "key": "iarea",
                "name": "地区",
                "value": [
                    { "n": "国内", "v": "1" },
                    { "n": "海外", "v": "2" }
                ]
            },
            {
                "key": "iyear",
                "name": "年份",
                "value": [
                    { "n": "2026", "v": "2026" },
                    { "n": "2025", "v": "2025" },
                    { "n": "2024", "v": "2024" },
                    { "n": "2023", "v": "2023" },
                    { "n": "2022", "v": "2022" },
                    { "n": "2021", "v": "2021" },
                    { "n": "2020", "v": "50" },
                    { "n": "2019", "v": "7" },
                    { "n": "2018", "v": "1" },
                    { "n": "2017", "v": "2" },
                    { "n": "2016", "v": "3" },
                    { "n": "2015", "v": "4" },
                    { "n": "2014", "v": "5" },
                    { "n": "2013", "v": "6" },
                    { "n": "2012", "v": "2012" },
                    { "n": "2011", "v": "2011" },
                    { "n": "2010", "v": "2010" },
                    { "n": "更早", "v": "99" }
                ]
            }
        ],
        "doco": [
            {
                "key": "sort",
                "name": "排序",
                "value": [
                    { "n": "最热", "v": "75" },
                    { "n": "最新", "v": "74" }
                ]
            },
            {
                "key": "itrailer",
                "name": "出品机构",
                "value": [
                    { "n": "BBC", "v": "1" },
                    { "n": "国家地理", "v": "4" },
                    { "n": "HBO", "v": "3175" },
                    { "n": "NHK", "v": "2" },
                    { "n": "历史频道", "v": "7" },
                    { "n": "ITV", "v": "3530" },
                    { "n": "探索频道", "v": "3174" },
                    { "n": "ZDF", "v": "3176" },
                    { "n": "腾讯自制", "v": "15" },
                    { "n": "合作机构", "v": "6" },
                    { "n": "其他", "v": "5" }
                ]
            },
            {
                "key": "itype",
                "name": "类型",
                "value": [
                    { "n": "自然", "v": "4" },
                    { "n": "美食", "v": "9" },
                    { "n": "社会", "v": "3" },
                    { "n": "人文", "v": "5" },
                    { "n": "历史", "v": "1" },
                    { "n": "军事", "v": "2" },
                    { "n": "科技", "v": "7" },
                    { "n": "财经", "v": "13" },
                    { "n": "探险", "v": "15" },
                    { "n": "罪案", "v": "6" },
                    { "n": "竞技", "v": "11" },
                    { "n": "旅游", "v": "10" }
                ]
            },
            {
                "key": "pay",
                "name": "资费",
                "value": [
                    { "n": "免费", "v": "1" },
                    { "n": "会员", "v": "2" }
                ]
            }
        ],
        "cartoon": [
            {
                "key": "sort",
                "name": "排序",
                "value": [
                    { "n": "最热", "v": "75" },
                    { "n": "最近更新", "v": "23" }
                ]
            },
            {
                "key": "itype",
                "name": "类型",
                "value": [
                    { "n": "玄幻", "v": "9" },
                    { "n": "科幻", "v": "4" },
                    { "n": "武侠", "v": "13" },
                    { "n": "冒险", "v": "2" },
                    { "n": "战斗", "v": "5" },
                    { "n": "搞笑", "v": "1" },
                    { "n": "恋爱", "v": "7" },
                    { "n": "魔幻", "v": "6" },
                    { "n": "竞技", "v": "20" },
                    { "n": "悬疑", "v": "17" },
                    { "n": "日常", "v": "15" },
                    { "n": "校园", "v": "16" },
                    { "n": "真人", "v": "18" },
                    { "n": "推理", "v": "14" },
                    { "n": "历史", "v": "19" },
                    { "n": "经典", "v": "3" },
                    { "n": "其他", "v": "12" },
                    { "n": "合家欢", "v": "123131819" }
                ]
            },
            {
                "key": "iarea",
                "name": "地区",
                "value": [
                    { "n": "内地", "v": "1" },
                    { "n": "日本", "v": "2" },
                    { "n": "欧美", "v": "3" },
                    { "n": "其他", "v": "4" }
                ]
            },
            {
                "key": "iyear",
                "name": "年份",
                "value": [
                    { "n": "2026", "v": "2026" },
                    { "n": "2025", "v": "2025" },
                    { "n": "2024", "v": "2024" },
                    { "n": "2023", "v": "2023" },
                    { "n": "2022", "v": "2022" },
                    { "n": "2021", "v": "2021" },
                    { "n": "2020", "v": "50" },
                    { "n": "2019", "v": "11" },
                    { "n": "2018", "v": "2018" },
                    { "n": "2017", "v": "2017" },
                    { "n": "2016", "v": "1" },
                    { "n": "2015", "v": "2" },
                    { "n": "2014", "v": "3" },
                    { "n": "2013", "v": "4" },
                    { "n": "2012", "v": "5" },
                    { "n": "2011", "v": "6" },
                    { "n": "00年代", "v": "7" },
                    { "n": "90年代", "v": "8" },
                    { "n": "80年代", "v": "9" },
                    { "n": "更早", "v": "10" }
                ]
            },
            {
                "key": "ipay",
                "name": "免费/VIP",
                "value": [
                    { "n": "免费", "v": "1" },
                    { "n": "会员", "v": "2" }
                ]
            },
            {
                "key": "anime_status",
                "name": "连载/完结",
                "value": [
                    { "n": "预告片", "v": "46" },
                    { "n": "连载", "v": "44" },
                    { "n": "完结", "v": "45" }
                ]
            },
            {
                "key": "item",
                "name": "3D/2D",
                "value": [
                    { "n": "全部", "v": "1" },
                    { "n": "3D动画", "v": "2" },
                    { "n": "2D动画", "v": "3" },
                    { "n": "特摄", "v": "4" },
                    { "n": "其他", "v": "5" }
                ]
            }
        ],
        "child": [
            {
                "key": "sort",
                "name": "排序",
                "value": [
                    { "n": "最热", "v": "75" },
                    { "n": "最新", "v": "19" },
                    { "n": "好评", "v": "20" }
                ]
            },
            {
                "key": "iarea",
                "name": "地区",
                "value": [
                    { "n": "欧美", "v": "1" },
                    { "n": "日韩", "v": "2" },
                    { "n": "国内", "v": "3" }
                ]
            },
            {
                "key": "iyear",
                "name": "年龄",
                "value": [
                    { "n": "0-3岁", "v": "1" },
                    { "n": "4-6岁", "v": "2" },
                    { "n": "7-9岁", "v": "3" },
                    { "n": "10岁以上", "v": "4" },
                    { "n": "全年龄", "v": "7" }
                ]
            },
            {
                "key": "gender",
                "name": "性别",
                "value": [
                    { "n": "女孩", "v": "1" },
                    { "n": "男孩", "v": "2" }
                ]
            },
            {
                "key": "itype",
                "name": "类型",
                "value": [
                    { "n": "儿歌", "v": "1" },
                    { "n": "益智早教", "v": "2" },
                    { "n": "手工·绘画", "v": "3" },
                    { "n": "玩具", "v": "4" },
                    { "n": "英语", "v": "5" },
                    { "n": "早教", "v": "7" },
                    { "n": "数学", "v": "6" },
                    { "n": "国学", "v": "8" },
                    { "n": "冒险", "v": "10" },
                    { "n": "交通工具", "v": "11" },
                    { "n": "魔幻·科幻", "v": "12" },
                    { "n": "动物", "v": "13" },
                    { "n": "真人·特摄", "v": "14" },
                    { "n": "探索", "v": "15" },
                    { "n": "其他", "v": "16" }
                ]
            },
            {
                "key": "ipay",
                "name": "免费/VIP",
                "value": [
                    { "n": "免费", "v": "1" },
                    { "n": "会员", "v": "2" }
                ]
            }
        ],
        "mini_series": [
            {
                "key": "sort",
                "name": "排序",
                "value": [
                    { "n": "最热", "v": "75" },
                    { "n": "最新上架", "v": "76" },
                    { "n": "限免中", "v": "90" }
                ]
            },
            {
                "key": "prefer",
                "name": "偏好",
                "value": [
                    { "n": "偏好", "v": "-1" },
                    { "n": "男频", "v": "2" },
                    { "n": "女频", "v": "1" }
                ]
            },
            {
                "key": "story",
                "name": "故事背景",
                "value": [
                    { "n": "故事背景", "v": "-1" },
                    { "n": "古装爱情", "v": "1" },
                    { "n": "都市爱情", "v": "2" },
                    { "n": "都市奇幻", "v": "3" },
                    { "n": "古装权谋", "v": "5" },
                    { "n": "年代", "v": "6" },
                    { "n": "青春", "v": "8" },
                    { "n": "职场", "v": "10" },
                    { "n": "民国", "v": "11" },
                    { "n": "末日", "v": "12" },
                    { "n": "乡村", "v": "15" },
                    { "n": "悬疑推理", "v": "18" },
                    { "n": "玄幻", "v": "19" },
                    { "n": "喜剧", "v": "21" }
                ]
            },
            {
                "key": "identity",
                "name": "身份人设",
                "value": [
                    { "n": "身份人设", "v": "-1" },
                    { "n": "总裁", "v": "1" },
                    { "n": "大女主", "v": "2" },
                    { "n": "战神", "v": "3" },
                    { "n": "萌娃", "v": "4" },
                    { "n": "神医", "v": "5" },
                    { "n": "落难千金", "v": "6" },
                    { "n": "赘婿", "v": "7" },
                    { "n": "神豪", "v": "8" },
                    { "n": "大男主", "v": "9" },
                    { "n": "女帝", "v": "10" },
                    { "n": "皇后王妃", "v": "11" },
                    { "n": "青梅竹马", "v": "13" },
                    { "n": "欢喜冤家", "v": "16" },
                    { "n": "大叔", "v": "24" },
                    { "n": "小人物", "v": "28" },
                    { "n": "团宠", "v": "29" }
                ]
            },
            {
                "key": "attraction",
                "name": "主要看点",
                "value": [
                    { "n": "主要看点", "v": "-1" },
                    { "n": "穿越", "v": "3" },
                    { "n": "重生", "v": "4" },
                    { "n": "逆袭", "v": "5" },
                    { "n": "家庭伦理", "v": "6" },
                    { "n": "虐心", "v": "7" },
                    { "n": "曲折爱情", "v": "8" },
                    { "n": "破镜重圆", "v": "9" },
                    { "n": "马甲", "v": "10" },
                    { "n": "异能", "v": "11" },
                    { "n": "甜宠爱情", "v": "12" },
                    { "n": "奇幻爱情", "v": "13" },
                    { "n": "闪婚", "v": "15" },
                    { "n": "系统流", "v": "16" },
                    { "n": "传承觉醒", "v": "19" },
                    { "n": "亲情", "v": "20" },
                    { "n": "宅门风云", "v": "21" },
                    { "n": "家族恩怨", "v": "22" },
                    { "n": "身份之谜", "v": "23" },
                    { "n": "追妻", "v": "25" },
                    { "n": "虐渣复仇", "v": "29" },
                    { "n": "权力争夺", "v": "47" },
                    { "n": "恐怖", "v": "49" },
                    { "n": "娱乐圈", "v": "88" },
                    { "n": "脑洞", "v": "89" }
                ]
            }
        ]
    },
    headers: {
        'User-Agent': 'PC_UA'
    },
    timeout: 5000,
    cate_exclude: '会员|游戏|全部',
    class_name: '电影&电视剧&短剧&综艺&动漫&少儿&纪录片',
    class_url: 'movie&tv&mini_series&variety&cartoon&child&doco',
    limit: 20,
    play_parse: true,
    lazy: $js.toString(() => {
        try {
            let bata = JSON.parse(response);
            log(bata)
            if (bata.url.includes("http")) {
                input = {
                    header: {
                        'User-Agent': ""
                    },
                    parse: 0,
                    url: bata.url,
                    jx: 0,
                    danmaku: 'http://127.0.0.1:9978/proxy?do=danmu&site=js&url=' + input.split("?")[0]
                };
            } else {
                input = {
                    header: {
                        'User-Agent': ""
                    },
                    parse: 0,
                    url: input.split("?")[0],
                    jx: 1,
                    danmaku: 'http://127.0.0.1:9978/proxy?do=danmu&site=js&url=' + input.split("?")[0]
                };
            }
        } catch {
            input = {
                header: {
                    'User-Agent': ""
                },
                parse: 0,
                url: input.split("?")[0],
                jx: 1,
                danmaku: 'http://127.0.0.1:9978/proxy?do=danmu&site=js&url=' + input.split("?")[0]
            };
        }
    }),

    推荐: '.list_item;img&&alt;img&&src;a&&Text;a&&data-float',
    一级: $js.toString(() => {
        let d = [];
        let fyclass = MY_CATE;
        let fypage = MY_PAGE;
        let fl = MY_FL;

        if (fyclass === 'mini_series') {
            let apiUrl = 'https://pbaccess.video.qq.com/trpc.vector_layout.page_view.PageService/getPage?video_appid=3000010&vversion_platform=2';
            
            let filterParts = [];
            if (fl.prefer) filterParts.push('prefer=' + fl.prefer);
            if (fl.identity) filterParts.push('identity=' + fl.identity);
            if (fl.attraction) filterParts.push('attraction=' + fl.attraction);
            if (fl.story) filterParts.push('story=' + fl.story);
            let filterValue = filterParts.length > 0 ? filterParts.join('&') : 'sort=75';

            let pageContext = null;
            let cacheKey = 'mini_series_ctx_' + filterValue;
            
            if (fypage > 1) {
                try {
                    let cachedContext = storage0.getItem(cacheKey);
                    if (cachedContext) {
                        let contextObj = JSON.parse(cachedContext);
                        if (contextObj.page === fypage - 1 && contextObj.nextContext) {
                            pageContext = contextObj.nextContext;
                        } else if (fypage === 1) {
                            pageContext = null;
                        }
                    }
                } catch (e) {
                    log('读取缓存失败: ' + e.message);
                }
            } else {
                try {
                    storage0.setItem(cacheKey, '');
                } catch (e) {}
            }

            let requestBody = {
                "page_params": {
                    "page_type": "channel",
                    "page_id": "120188",
                    "scene": "channel",
                    "new_mark_label_enabled": "1",
                    "vl_to_mvl": "1",
                    "free_watch_trans_info": "{\"ad_frequency_control_time_list\":{}}",
                    "ad_exp_ids": "100000",
                    "skip_privacy_types": "0",
                    "support_click_scan": "1"
                },
                "page_bypass_params": {
                    "params": {
                        "platform_id": "2",
                        "caller_id": "3000010",
                        "data_mode": "default",
                        "user_mode": "default",
                        "page_type": "channel",
                        "page_id": "120188",
                        "scene": "channel",
                        "new_mark_label_enabled": "1"
                    },
                    "scene": "channel",
                    "app_version": ""
                },
                "page_context": pageContext
            };

            if (filterParts.length > 0) {
                requestBody.page_bypass_params.params.filter_value = filterValue;
            }

            try {
                let html = request(apiUrl, {
                    body: JSON.stringify(requestBody),
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
                        'Content-Type': 'application/json',
                        'Origin': 'https://v.qq.com',
                        'Referer': 'https://v.qq.com/channel/mini_series'
                    },
                    method: 'POST'
                });

                let json = JSON.parse(html);
                
                if (json.ret === 0 && json.data && json.data.CardList) {
                    if (json.data.has_next_page && json.data.page_context) {
                        try {
                            storage0.setItem(cacheKey, JSON.stringify({
                                page: fypage,
                                nextContext: json.data.page_context
                            }));
                        } catch (e) {
                            log('保存缓存失败: ' + e.message);
                        }
                    }

                    json.data.CardList.forEach(function(card) {
                        if (card.type === 'pc_hot_filter') {
                            return;
                        }
                        
                        if (card.type === '_eco_video_staggered' && card.children_list && card.children_list.card_list) {
                            let cards = card.children_list.card_list.cards || [];
                            cards.forEach(function(item) {
                                if (item.type === '_eco_video_staggered_drama_item' && item.params) {
                                    let params = item.params;
                                    let cid = params.cid || '';
                                    let posterInfo = {};
                                    let markInfo = {};
                                    
                                    try { posterInfo = JSON.parse(params.poster || '{}'); } catch (e) {}
                                    try { markInfo = JSON.parse(params.mark_label_list || '{}'); } catch (e) {}

                                    let title = posterInfo.title || '';
                                    let img = posterInfo.image_url || '';
                                    
                                  
                                    if (img.startsWith('//')) {
                                        img = 'https:' + img;
                                    }
                                    
                                    let remarks = '';
                                    if (markInfo.mark_label_list && markInfo.mark_label_list.length > 0) {
                                        remarks = markInfo.mark_label_list[0].prime_text || '';
                                    }

                                    if (cid && title) {
                                        d.push({
                                            title: title,
                                            img: img,
                                            desc: remarks,
                                            url: cid
                                        });
                                    }
                                }
                            });
                        }
                    });
                }
            } catch (e) {
                log('短剧请求失败: ' + e.message);
            }

            setResult(d);
        } else {
            let html = fetch(input, fetch_params);
            let $ = pdfa(html, '.list_item');
            $.forEach(function(it) {
                let item = pdfh(it, 'a&&data-float');
                let title = pdfh(it, 'img&&alt');
                let img = pdfh(it, 'img&&src');
                
            
                if (img && img.startsWith('//')) {
                    img = 'https:' + img;
                }
                
                let desc = pdfh(it, 'a&&Text');
                if (item && title) {
                    d.push({
                        title: title,
                        img: img,
                        desc: desc,
                        url: item
                    });
                }
            });
            setResult(d);
        }
    }),
    二级: $js.toString(() => {
        VOD = {};
        let d = [];
        let video_list = [];
        let video_lists = [];
        let QZOutputJson;
        let html = fetch(input, fetch_params);
        let sourceId = /get_playsource/.test(input) ? input.match(/id=(\d*?)&/)[1] : input.split("cid=")[1];
        let cid = sourceId;
        
        try {
            let json = JSON.parse(html);
            let vodPic = urljoin2(input, json.c.pic) || '';
           
            if (vodPic.startsWith('//')) vodPic = 'https:' + vodPic;
            
            VOD = {
                vod_url: input,
                vod_name: json.c.title,
                type_name: json.typ.join(","),
                vod_actor: json.nam.join(","),
                vod_year: json.c.year,
                vod_content: json.c.description,
                vod_remarks: json.rec,
                vod_pic: vodPic
            }
        } catch (e) {}
        
        if (/get_playsource/.test(input)) {
            eval(html);
            let indexList = QZOutputJson.PlaylistItem.indexList;
            indexList.forEach(function(it) {
                let dataUrl = "https://s.video.qq.com/get_playsource?id=" + sourceId + "&plat=2&type=4&data_type=3&range=" + it + "&video_type=10&plname=qq&otype=json";
                eval(fetch(dataUrl, fetch_params));
                let vdata = QZOutputJson.PlaylistItem.videoPlayList;
                vdata.forEach(function(item) {
                    d.push({
                        title: item.title,
                        pic_url: item.pic,
                        desc: item.episode_number + "\t\t\t播放量：" + item.thirdLine,
                        url: item.playUrl
                    })
                });
                video_lists = video_lists.concat(vdata)
            })
        } else {
            let json = JSON.parse(html);
            video_lists = json.c.video_ids;
            let url = "https://v.qq.com/x/cover/" + sourceId + ".html";
            if (video_lists.length === 1) {
                let vid = video_lists[0];
                let o_url = "https://union.video.qq.com/fcgi-bin/data?otype=json&tid=1804&appid=20001238&appkey=6c03bbe9658448a4&union_platform=1&idlist=" + vid;
                let o_html = fetch(o_url, fetch_params);
                eval(o_html);
                if (QZOutputJson.results && QZOutputJson.results.length > 0) {
                    let it1 = QZOutputJson.results[0].fields;
                    url = "https://v.qq.com/x/cover/" + cid + "/" + vid + ".html";
                    d.push({
                        title: it1.title,
                        url: url
                    })
                } else {
                    url = "https://v.qq.com/x/cover/" + cid + "/" + vid + ".html";
                    d.push({
                        title: "正片播放",
                        url: url
                    })
                }
            } else if (video_lists.length > 1) {
                for (let i = 0; i < video_lists.length; i += 30) {
                    video_list.push(video_lists.slice(i, i + 30))
                }
                video_list.forEach(function(it, idex) {
                    let o_url = "https://union.video.qq.com/fcgi-bin/data?otype=json&tid=1804&appid=20001238&appkey=6c03bbe9658448a4&union_platform=1&idlist=" + it.join(",");
                    let o_html = fetch(o_url, fetch_params);
                    eval(o_html);
                    QZOutputJson.results.forEach(function(it1) {
                        it1 = it1.fields;
                        let url = "https://v.qq.com/x/cover/" + cid + "/" + it1.vid + ".html";
                        d.push({
                            title: it1.title,
                            pic_url: it1.pic160x90.replace("/160", ""),
                            desc: it1.video_checkup_time,
                            url: url,
                            type: it1.category_map && it1.category_map.length > 1 ? it1.category_map[1] : ""
                        })
                    })
                })
            }
        }

        let playFrom = [];
        let playUrl = [];

        let ygKeywords = ["预告", "花絮", "片花", "特辑", "幕后", "采访", "制作", "MV", "主题曲"];

        let yg = d.filter(function(it) {
            return it.type && ygKeywords.some(keyword => it.type.includes(keyword));
        });
        let zp = d.filter(function(it) {
            return !(it.type && ygKeywords.some(keyword => it.type.includes(keyword)));
        });

        if (zp.length > 0) {
            playFrom.push("正片");
            playUrl.push(zp.map(it => it.title + "$" + it.url).join("#"));
        }

        if (yg.length > 0) {
            let 预告 = yg.filter(it => it.type && it.type.includes("预告"));
            let 花絮片花 = yg.filter(it => it.type && (it.type.includes("花絮") || it.type.includes("片花")));
            let 特辑 = yg.filter(it => it.type && (it.type.includes("特辑") || it.type.includes("幕后")));

            if (预告.length > 0) {
                playFrom.push("预告");
                playUrl.push(预告.map(it => it.title + "$" + it.url).join("#"));
            }
            if (花絮片花.length > 0) {
                playFrom.push("花絮片花");
                playUrl.push(花絮片花.map(it => it.title + "$" + it.url).join("#"));
            }
            if (特辑.length > 0) {
                playFrom.push("特辑");
                playUrl.push(特辑.map(it => it.title + "$" + it.url).join("#"));
            }
        }

        VOD.vod_play_from = playFrom.join("$$$");
        VOD.vod_play_url = playUrl.join("$$$");
    }),
    搜索: $js.toString(() => {
        let d = [],
            keyword = input.split("/")[3];
        let seenIds = new Set();

        function vodSearch(keyword, page = 0) {
            return request('https://pbaccess.video.qq.com/trpc.videosearch.mobile_search.MultiTerminalSearch/MbSearch?vplatform=2', {
                body: JSON.stringify({
                    version: "25042201",
                    clientType: 1,
                    filterValue: "",
                    uuid: "B1E50847-D25F-4C4B-BBA0-36F0093487F6",
                    retry: 0,
                    query: keyword,
                    pagenum: page,
                    isPrefetch: true,
                    pagesize: 30,
                    queryFrom: 0,
                    searchDatakey: "",
                    transInfo: "",
                    isneedQc: true,
                    preQid: "",
                    adClientInfo: "",
                    extraInfo: {
                        isNewMarkLabel: "1",
                        multi_terminal_pc: "1",
                        themeType: "1",
                        sugRelatedIds: "{}",
                        appVersion: ""
                    }
                }),
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.139 Safari/537.36',
                    'Content-Type': 'application/json',
                    'Origin': 'https://v.qq.com',
                    'Referer': 'https://v.qq.com/'
                },
                method: 'POST'
            });
        }

        const nonMainContentKeywords = [
            '：', '#', '特辑', '"', '剪辑', '片花', '独家', '专访', '纯享',
            '制作', '幕后', '宣传', 'MV', '主题曲', '插曲', '彩蛋',
            '精彩', '集锦', '盘点', '回顾', '解说', '评测', '反应', 'reaction'
        ];

        function isMainContent(title) {
            if (!title) return false;
            if (title.includes('<em>') || title.includes('</em>')) return false;
            return !nonMainContentKeywords.some(keyword => title.includes(keyword));
        }

        function isQQPlatform(playSites) {
            if (!playSites || !Array.isArray(playSites)) return true;
            return playSites.some(site => site.enName && site.enName.toLowerCase() === 'qq');
        }

        try {
            let html = vodSearch(keyword, 0);
            let json = JSON.parse(html);

            function processItemList(itemList) {
                if (!itemList) return;

                itemList.forEach(it => {
                    if (it.doc && it.doc.id && it.videoInfo &&
                        isMainContent(it.videoInfo.title) &&
                        isQQPlatform(it.videoInfo.playSites) &&
                        Object.keys(it.videoInfo.episodeSites || {}).length > 0) {

                        const itemId = it.doc.id;
                        if (!seenIds.has(itemId)) {
                            seenIds.add(itemId);
                            
                            let imgUrl = it.videoInfo.imgUrl || "";
                          
                            if (imgUrl && imgUrl.startsWith('//')) {
                                imgUrl = 'https:' + imgUrl;
                            }
                            
                            d.push({
                                title: it.videoInfo.title,
                                img: imgUrl,
                                url: itemId,
                                desc: it.videoInfo.secondLine || ""
                            });
                        }
                    }
                });
            }

            if (json.data && json.data.normalList) {
                processItemList(json.data.normalList.itemList);
            }

            if (json.data && json.data.areaBoxList) {
                json.data.areaBoxList.forEach(box => {
                    processItemList(box.itemList);
                });
            }

        } catch (e) {
            log("搜索出错: " + e.message);
        }

        setResult(d);
    })
};
