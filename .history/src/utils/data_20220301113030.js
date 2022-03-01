let navs = [
    { name: '小米手机', type: 'xiaomi' },
    { name: '红米', type: 'red' },
    { name: '平板 · 笔记本', type: 'flats' },
    { name: '电视', type: 'tv' },
    { name: '盒子 · 影音', type: 'box' },
    { name: '路由器', type: 'router' },
    { name: '智能硬件', type: 'hardware' },
    { name: '服务', sourceUrl: '//www.mi.com/service/' },
    { name: '社区', sourceUrl: 'http://www.xiaomi.cn' },
];

let results = [
    { name: '小米手机5', number: '11' },
    { name: '空气净化器2', number: '1' },
    { name: '活塞耳机', number: '4' },
    { name: '小米路由器', number: '8' },
    { name: '移动电源', number: '21' },
    { name: '运动相机', number: '3' },
    { name: '小米摄像机', number: '2' },
    { name: '小米体重秤', number: '1' },
    { name: '小米插线板', number: '13' },
    { name: '配件优惠套装', number: '32' },
];

let phone = [
    {
        name: '小米Max',
        imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/maxdingbu!160x110.jpg',
        sourcePath: 'http://www.mi.com/mimax/',
        price: '1299元起',
    },
    {
        name: '小米手机5',
        imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/mi5!160x110.jpg',
        sourcePath: 'http://www.mi.com/mimax/',
        price: '1499元起',
    },
    {
        name: '小米手机4c',
        imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mi4c!160x110.jpg',
        sourcePath: 'http://www.mi.com/mimax/',
        price: '1099元',
    },
];

let red = [
    {
        name: '红米pro',
        imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/hongmipro-320!160x110.jpg',
        sourcePath: 'http://www.mi.com/mimax/',
        price: '1499元起',
    },
    {
        name: '红米note3',
        imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/hongmi3s!160x110.jpg',
        sourcePath: 'http://www.mi.com/mimax/',
        price: '899元起',
    },
    {
        name: '红米手机3S',
        imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/note3!160x110.jpg',
        sourcePath: 'http://www.mi.com/mimax/',
        price: '699元起',
    },
    {
        name: '红米手机3',
        imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/hongmi3!160x110.jpg',
        sourcePath: 'http://www.mi.com/mimax/',
        price: '699元起',
    },
    {
        name: '红米手机3X',
        imgUrl: 'http://c1.mifile.cn/f/i/g/doodle/320-220!160x110.jpg',
        sourcePath: 'http://www.mi.com/mimax/',
        price: '799元',
    },
];

let flats = [
    {
        name: '小米平板2 16GB',
        imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/hongmipro-320!160x110.jpg',
        sourcePath: 'http://www.mi.com/mimax/',
        price: '999元',
    },
    {
        name: '小米平板2 64GB',
        imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mipad2-64!160x110.jpg',
        sourcePath: 'http://www.mi.com/mimax/',
        price: '1299元',
    },
    {
        name: '小米平板2 64GB Windows版',
        imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mipad2-64-win!160x110.jpg',
        sourcePath: 'http://www.mi.com/mimax/',
        price: '1299元',
    },
    {
        name: '小米笔记本Air 12.5',
        imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/bijiben32012.5!160x110.jpg',
        sourcePath: 'http://www.mi.com/mimax/',
        price: '3499元',
    },
    {
        name: '小米笔记本Air 13.3',
        imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/bijiben320!160x110.jpg',
        sourcePath: 'http://www.mi.com/mimax/',
        price: '4999元',
    },
];

let tv = [
    {
        name: '小米电视3S 43英寸',
        imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/mitv3s-43!160x110.jpg',
        sourcePath: 'http://www.mi.com/mitv3s/43/',
        price: '1499元',
    },
    {
        name: '小米电视3S 48英寸',
        imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv3s48!160x110.jpg',
        sourcePath: 'http://www.mi.com/mitv3s/48/',
        price: '1999元',
    },
    {
        name: '小米电视3 55英寸',
        imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv355!160x110.jpg',
        sourcePath: 'http://www.mi.com/mitv3/55/',
        price: '3299元起',
    },
    {
        name: '小米电视3 60英寸',
        imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv3-60!160x110.jpg',
        sourcePath: 'http://www.mi.com/mitv3/60/',
        price: '3499元',
    },
    {
        name: '小米电视3S 65英寸 曲面',
        imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/mitv3s-65!160x110.jpg',
        sourcePath: 'http://www.mi.com/mimax/',
        price: '8999元',
    },
    {
        name: '小米电视3 70英寸',
        imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv70!160x110.jpg',
        sourcePath: 'http://www.mi.com/mitv3/70/',
        price: '8999元',
    },
];

let box = [
    {
        name: '小米盒子mini版',
        imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/hezimini.png',
        sourcePath: 'http://www.mi.com/hezimini/',
        price: '179元',
    },
    {
        name: '小米盒子3',
        imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/hezi3.png',
        sourcePath: 'http://www.mi.com/hezi3/',
        price: '249元',
    },
    {
        name: '小米盒子3 增强版',
        imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/hezi3s!160x110.jpg',
        sourcePath: 'http://www.mi.com/hezi3s/',
        price: '399元',
    },
    {
        name: '小米电视主机',
        imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/zhuji!160x110.jpg',
        sourcePath: 'http://www.mi.com/tvzj/',
        price: '999元',
    },
    {
        name: '小米家庭音响 金属版',
        imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/jinshuban!160x110.jpg',
        sourcePath: 'http://item.mi.com/1160800073.html',
        price: '899元',
    },
    {
        name: '小米家庭音响 标准版',
        imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/putonban!160x110.jpg',
        sourcePath: 'http://item.mi.com/1160800074.html',
        price: '699元',
    },
];

var router = [
    {
        name: '全新小米路由器',
        imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/mitv3s-43!160x110.jpg',
        sourcePath: 'http://www.mi.com/mitv3s/43/',
        price: '699元起',
    },
    {
        name: '小米路由器 3',
        imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/miwifi-3!160x110.jpg',
        sourcePath: 'http://www.mi.com/miwifi3/',
        price: '149元',
    },
    {
        name: '小米路由器 mini',
        imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/miwifimini!160x110.jpg',
        sourcePath: 'http://www.mi.com/miwifimini/',
        price: '119元',
    },
    {
        name: '小米路由器 3C',
        imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/mitv3-60!160x110.jpg',
        sourcePath: 'http://www.mi.com/mitv3/60/',
        price: '99元',
    },
    {
        name: '小米路由器 青春版',
        imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/miwifilite!160x110.jpg',
        sourcePath: 'http://www.mi.com/miwifilite/',
        price: '69元',
    },
    {
        name: '小米WiFi放大器',
        imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/wifiExtension!160x110.jpg',
        sourcePath: 'http://item.mi.com/1153200003.html',
        price: '35元',
    },
];

var hardware = [
    {
        name: '九号平衡车',
        imgUrl: 'http://c1.mifile.cn/f/i/15/goods/nav/scooter!160x110.jpg',
        sourcePath: 'http://www.mi.com/scooter/',
        price: '1999元',
    },
    {
        name: '小米净水器',
        imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/water2!160x110.jpg',
        sourcePath: 'http://www.mi.com/water/',
        price: '1299元起',
    },
    {
        name: '米家压力IH电饭煲',
        imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/dianfanbao!160x110.jpg',
        sourcePath: 'http://www.mi.com/dianfanbao/',
        price: '999元',
    },
    {
        name: '小米空气净化器 2',
        imgUrl: 'http://c1.mifile.cn/f/i/16/goods/nav/air2!160x110.jpg',
        sourcePath: 'http://www.mi.com/air2/',
        price: '649元',
    },
    {
        name: '智能摄像机',
        imgUrl: 'http://c1.mifile.cn/f/i/g/doodle/zhinengyingjian!160x110.jpg',
        sourcePath: 'http://list.mi.com/accessories/tag?id=shexiangji',
        price: '149元起',
    },
];

let banners=[
                {
                    sourceUrl: '//item.mi.com/buyphone/mi5',
                    imgUrl: 'http://i3.mifile.cn/a4/bc62a28f-de64-4eee-853b-36772a97f67e',
                },
                {
                    sourceUrl: '//item.mi.com/buyphone/hongmi3s',
                    imgUrl: 'http://i3.mifile.cn/a4/ba4939c9-fc0a-4916-bddc-726fa00f7e9b',
                },
                {
                    sourceUrl: '//item.mi.com/buyphone/mimax',
                    imgUrl: 'http://i3.mifile.cn/a4/9ced2c9e-f685-4918-9b2a-402af2d2039f',
                },
                {
                    sourceUrl: '//item.mi.com/buyphone/note3',
                    imgUrl: 'http://i3.mifile.cn/a4/f4bee59d-85a5-498f-ae57-a2cabe6aeb5b',
                },
                {
                    sourceUrl: '//item.mi.com/buymitv/48',
                    imgUrl: 'http://i3.mifile.cn/a4/98fc8a58-c35c-475e-89cb-b8fe1659817f',
                },
            ],
            let phones= [
                {
                    sourceUrl: '//www.mi.com/mi5/',
                    buyUrl: '//item.mi.com/buyphone/mi5',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/list/mi5bar80.jpg?width=40&height=40',
                    name: '小米手机5',
                    buyStatus: true,
                },
                {
                    sourceUrl: '//www.mi.com/mimax/',
                    buyUrl: '//item.mi.com/buyphone/mimax',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/maxbar80.jpg?width=40&height=40',
                    name: '小米Max',
                    buyStatus: true,
                },
                {
                    sourceUrl: '//www.mi.com/note3/pro/',
                    buyUrl: '//item.mi.com/buyphone/note3',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/note3.jpg?width=40&height=40',
                    name: '小米Note3',
                    buyStatus: true,
                },
                {
                    sourceUrl: '//www.mi.com/hongmi3s/',
                    buyUrl: '//item.mi.com/buyphone/hongmi3s',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/hm3s80x80.jpg?width=40&height=40',
                    name: '红米手机3S',
                    buyStatus: true,
                },
                {
                    sourceUrl: '//www.mi.com/redmipro/',
                    buyUrl: '//item.mi.com/buyphone/redmipro/',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/hongmi3.jpg?width=40&height=40',
                    name: '红米Pro',
                    buyStatus: true,
                },
                {
                    sourceUrl: '//www.mi.com/hongmi3/',
                    buyUrl: '//item.mi.com/buyphone/hongmi3/',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/list/mi5bar80.jpg?width=40&height=40',
                    name: '红米手机3',
                    buyStatus: true,
                },
                {
                    sourceUrl: '//www.mi.com/hongmi3x/',
                    buyUrl: '//item.mi.com/buyphone/hongmi3x',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/3X80.jpg?width=40&height=40',
                    name: '红米手机3X',
                    buyStatus: true,
                },
                {
                    sourceUrl: '//heyue.mi.com/',
                    buyUrl: '//item.mi.com/buyphone/mi5',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/heyue.jpg?width=40&height=40',
                    name: '合约机',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/compare/',
                    buyUrl: '//item.mi.com/buyphone/mi5',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/compare.jpg?width=40&height=40',
                    name: '对比手机',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/mimobile/',
                    buyUrl: '//item.mi.com/buyphone/mi5',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/mimobile.jpg?width=40&height=40',
                    name: '小米移动 电话卡',
                    buyStatus: false,
                },
            ];
            let computer= [
                {
                    sourceUrl: '//www.mi.com/mibookair/',
                    buyUrl: '//item.mi.com/buymibook/air',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/bijiben80.jpg?width=40&height=40',
                    name: '小米笔记本Air',
                    buyStatus: true,
                },
                {
                    sourceUrl: '//www.mi.com/mipad2/',
                    buyUrl: '//item.mi.com/static/buymipad',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/pad2.png?width=40&height=40',
                    name: '小米平板2',
                    buyStatus: true,
                },
                {
                    sourceUrl: '//item.mi.com/1163000011.html',
                    buyUrl: '//item.mi.com/buyphone/mi5',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/usbzjqggg80.jpg?width=40&height=40',
                    name: 'USB-C转接器',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//item.mi.com/1163100001.html',
                    buyUrl: '//item.mi.com/buyphone/mi5',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/neidanbao80.jpg?width=40&height=40',
                    name: '小米笔记本内胆包',
                    buyStatus: false,
                },
            ];
           let  box= [
                {
                    sourceUrl: '//www.mi.com/mitv3s/43/',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/4380side.jpg?width=40&height=40',
                    name: '小米电视 43英寸',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/mitv3s/48/',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/mitv3s48.jpg?width=40&height=40',
                    name: '小米电视 48英寸',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/mitv3/55/',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/tv3-55.jpg?width=40&height=40',
                    name: '小米电视 55英寸',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/mitv3/',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/tv60.jpg?width=40&height=40',
                    name: '小米电视 60英寸',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/mitv3s/65/',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/6580side.jpg?width=40&height=40',
                    name: '小米电视 65英寸',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/mitv3/70/',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/tv70.png?width=40&height=40',
                    name: '小米电视 70英寸',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/tvzj/',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/tvzj.jpg?width=40&height=40',
                    name: '小米电视主机',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/hezi3s/',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/hezizengqiangban80side.jpg?width=40&height=40',
                    name: '小米盒子3 增强版',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/hezi3/',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/hezis.jpg?width=40&height=40',
                    name: '小米盒子3',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/hezimini/',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/hezimini.jpg?width=40&height=40',
                    name: '小米盒子 mini',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//item.mi.com/1154100018.html',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/diyinpao.jpg?width=40&height=40',
                    name: '小米低音炮',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/shb/',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/shb.jpg?width=40&height=40',
                    name: '蓝牙手柄',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//list.mi.com/accessories/tag?id=yinxiang',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/zuheyinxiang80side.jpg?width=40&height=40',
                    name: '家庭音响',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//list.mi.com/tvboxpj',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/dianshipeijian.jpg?width=40&height=40',
                    name: '电视盒子配件',
                    buyStatus: false,
                },
            ]
          let   router= [
                {
                    sourceUrl: '//www.mi.com/mivr1c/',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/vr8080.jpg?width=40&height=40',
                    name: '小米VR眼镜玩具版',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/miuav/',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/wurenji80.jpg?width=40&height=40',
                    name: '小米无人机',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/miwifi3/',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/luyouqi-80.jpg?width=40&height=40',
                    name: '小米路由器',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/scooter/',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/list/scooter.jpg?width=40&height=40',
                    name: '九号平衡车',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/dianfanbao/',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/dianfanbao-80.jpg?width=40&height=40',
                    name: '米家压力IH电饭煲',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/kettle/',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/shuihu80.jpg?width=40&height=40',
                    name: '米家恒温电水壶',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/mibicycle/',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/zxc80-80.jpg?width=40&height=40',
                    name: '电助力折叠自行车',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//list.mi.com/accessories/tag?id=shexiangji',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/xiaobai80.jpg?width=40&height=40',
                    name: '摄像机',
                    buyStatus: false,
                },
                {
                    sourceUrl:
                        '//list.mi.com/accessories/tag?id=jinghuaqilvxin',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/jinghuaqilvxin80.jpg?width=40&height=40',
                    name: '净化器及滤芯',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//list.mi.com/accessories/tag?id=water',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/jingshuiqiandlvxin-80.jpg?width=40&height=40',
                    name: '净水器及滤芯',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//list.mi.com/accessories/tag?id=xueyaji',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/xueyaji-80.jpg?width=40&height=40',
                    name: '血压计',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//list.mi.com/accessories/tag?id=smartlamp',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/zhinengdeng-80.jpg?width=40&height=40',
                    name: '智能灯',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/mitu/',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/gushiji80.jpg?width=40&height=40',
                    name: '米兔智能故事机',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//list.mi.com/accessories/smartsuit',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/zhinengjiatingtaozhuang-80.jpg?width=40&height=40',
                    name: '智能家庭组合',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//list.mi.com/accessories/shouhuan',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/shouhuan280.jpg?width=40&height=40',
                    name: '手环及配件',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/scale/',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/scale.jpg?width=40&height=40',
                    name: '体重秤',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/mituwatch/',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/shoubiao3-80.jpg?width=40&height=40',
                    name: '米兔儿童电话手表',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//list.mi.com/26?cfrom=search',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/doodle/znyjdaohang.jpg?width=40&height=40',
                    name: '全部智能硬件',
                    buyStatus: false,
                },
            ]
            let power=[
                {
                    sourceUrl: '//www.mi.com/dianyuan/',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/dianyuan.jpg?width=40&height=40',
                    name: '小米移动电源',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//list.mi.com/accessories/tag?id=powerstrip',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/powerscript.jpg?width=40&height=40',
                    name: '小米插线板',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//list.mi.com/13',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/yidongdianyuan.jpg?width=40&height=40',
                    name: '品牌移动电源',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//list.mi.com/dyfj',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/dianyuanfujian.jpg?width=40&height=40',
                    name: '移动电源附件',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//list.mi.com/14',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/charger80.jpg?width=40&height=40',
                    name: '电池',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//list.mi.com/15',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/chongdianqi-80.jpg?width=40&height=40',
                    name: '充电器',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//item.mi.com/1154300033.html',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/5Battery1.jpg?width=40&height=40',
                    name: '彩虹5号电池',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//item.mi.com/1155000010.html',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/7Battery1.jpg?width=40&height=40',
                    name: '彩虹7号电池',
                    buyStatus: false,
                },
            ],
            let headset=[
                {
                    sourceUrl: '//www.mi.com/headphone/',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/headphone.jpg?width=40&height=40',
                    name: '小米头戴式耳机',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/quantie/',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/quantie.jpg?width=40&height=40',
                    name: '小米圈铁耳机',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/capsuleearphone/',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/jiaonang80.jpg?width=40&height=40',
                    name: '小米胶囊耳机',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/huosai2/',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/jichuban-80.jpg?width=40&height=40',
                    name: '小米活塞耳机 基础版',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/bluetooth-headset/',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/bluetoothheadset.jpg?width=40&height=40',
                    name: '小米蓝牙耳机',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//list.mi.com/18',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/pinpai80.jpg?width=40&height=40',
                    name: '品牌耳机',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/pocketaudio/',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/pocketaudio.png?width=40&height=40',
                    name: '小米蓝牙音箱',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/littleaudio/',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/suishen-80.jpg?width=40&height=40',
                    name: '小米随身蓝牙音箱',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/yinxiang/',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/xiaogangpao2-hei-80.jpg?width=40&height=40',
                    name: '小钢炮音箱 2',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/speaker/',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/qignchungangpao-80.jpg?width=40&height=40',
                    name: '小钢炮音箱 青春版',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//item.mi.com/1154400010.html',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/fanghezi.jpg?width=40&height=40',
                    name: '小米方盒子音箱',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//item.mi.com/1163100008.html',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/mituyinx80.jpg?width=40&height=40',
                    name: '小米米兔音箱',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/radio/',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/radio80side.jpg?width=40&height=40',
                    name: '网络收音机',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//list.mi.com/accessories/soundbox',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/pinpaiyinxiang.jpg?width=40&height=40',
                    name: '品牌音箱',
                    buyStatus: false,
                },
            ];
           let  foil=[
                {
                    sourceUrl: '//list.mi.com/9',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/tiemo.jpg?width=40&height=40',
                    name: '贴膜',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//list.mi.com/8',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/baohu.jpg?width=40&height=40',
                    name: '保护套/保护壳',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//list.mi.com/2',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/hougai.jpg?width=40&height=40',
                    name: '后盖',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//list.mi.com/3',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/video/tiezhi80.jpg?width=40&height=40',
                    name: '背贴',
                    buyStatus: false,
                },
            ]
           let  line= [
                {
                    sourceUrl: '//list.mi.com/16',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/xiancai.jpg?width=40&height=40',
                    name: '线材',
                    buyStatus: false,
                },
                {
                    sourceUrl:
                        '//search.mi.com/search_%E8%87%AA%E6%8B%8D%E6%9D%86',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/zipaigan.jpg?width=40&height=40',
                    name: '自拍杆',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//list.mi.com/5',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/zhijia.jpg?width=40&height=40',
                    name: '手机支架',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//list.mi.com/27',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/cunchu.jpg?width=40&height=40',
                    name: '存储卡',
                    buyStatus: false,
                },
            ]
            let bags=[
                {
                    sourceUrl: '//list.mi.com/23',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/xiangbao-80.jpg?width=40&height=40',
                    name: '箱包',
                    buyStatus: false,
                },
                {
                    sourceUrl:
                        '//search.mi.com/search_%E6%97%85%E8%A1%8C%E7%AE%B1',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/lvxingxiang.jpg?width=40&height=40',
                    name: '90分旅行箱',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//list.mi.com/22',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/fuzhuang-80.jpg?width=40&height=40',
                    name: '服饰',
                    buyStatus: false,
                },
            ]
            let rabbit= [
                {
                    sourceUrl: 'http://mitu.mi.com/',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/mitu-80.jpg?width=40&height=40',
                    name: '米兔玩偶',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//list.mi.com/59',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/shubiaodian-80.jpg?width=40&height=40',
                    name: '鼠标垫',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//list.mi.com/24',
                    imgUrl: 'http://c1.mifile.cn/f/i/15/goods/sidebar/zhoubian1.jpg?width=40&height=40',
                    name: '生活周边',
                    buyStatus: false,
                },
                {
                    sourceUrl: '//www.mi.com/zazhi/index.html',
                    imgUrl: 'http://c1.mifile.cn/f/i/g/2015/cn-index/zazhi-80-80.jpg?width=40&height=40',
                    name: '《小米》杂志',
                    buyStatus: false,
                },
            ]

export { navs, results, phone, red, flats, tv, box, router, hardware };
