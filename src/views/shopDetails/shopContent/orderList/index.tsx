import { Flex } from 'react-vant';
import React, { useState } from 'react'
import { Sidebar } from 'react-vant';
import GoodsCard from '@/views/shopDetails/components/goodsCard';
import {useNavigate,NavigateFunction} from 'react-router-dom'
import './index.less'
export default function ShopContent() {
    const goodsList = [
        [
            {
                goodsId: 1, isCollect: false, goodsOldPrice: 7, packingCharge: 1, category: "鲜萃咖啡",
                goodsName: "雪王雪顶咖啡",
                goodsDiscribe: ["原味", "鲜"],
                goodsSale: 4000,
                goodsfavor: 0.83,
                goodsPrice: 9,
                detailList: [
                    {
                        header: '掌柜描述:',
                        content: '爆款热销'
                    },
                    {
                        header: '主料:',
                        content: '鸡肉'
                    },
                    {
                        header: '份量:',
                        content: '1人份'
                    },
                    {
                        header: '口味:',
                        content: '微辣'
                    },
                ],
                specificationsList: [
                    [{
                        specifiType:'规格',
                        id: 1,
                        name: '标准',
                        price: 7,
                        isChoose: false,
                    }],
                    [{
                        specifiType:"温度",
                        id: 1,
                        name: '正常冰',
                        price: undefined,
                        isChoose: false
                    }, {
                        id: 2,
                        name: '少冰',
                        price: undefined,
                        isChoose: false
                    }],
                    [{
                        specifiType:"糖度",
                        id: 1,
                        name: '正常糖',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"糖度",
                        id: 2,
                        name: '七分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"糖度",
                        id: 3,
                        name: '五分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"糖度",
                        id: 4,
                        name: '不额外加糖',
                        price: undefined,
                        isChoose: false
                    }],
                    [{
                        specifiType:'口味',
                        id: 1,
                        name: '原味',
                        price: undefined,
                        isChoose: false,
                    }],
                ],
                commentList: [
                    {
                        userId: 1,
                        userName: '马老师',
                        isHiddenUser: false,
                        releaseTime: "2023.03.26",
                        // 点赞
                        isAdmire: 0,
                        comment: {
                            content: '小聪明',
                            imgList: []
                        },
                        avatar: '',
                    },
                    {
                        userId: 2,
                        userName: '源来氏作田',
                        isHiddenUser: false,
                        releaseTime: "2023.03.24",
                        // 点赞
                        isAdmire: 0,
                        comment: {
                            content: undefined,
                            imgList: []
                        },
                        avatar: '',
                    },
                    {
                        userId: 3,
                        userName: '点到为止',
                        isHiddenUser: false,
                        releaseTime: "2023.03.23",
                        // 点赞
                        isAdmire: 1,
                        comment: {
                            content: undefined,
                            imgList: []
                        },
                        avatar: '',
                    }
                ],
                specifications: 1,
            },
            {
                goodsId: 2, isCollect: false, goodsOldPrice: 7, packingCharge: 1, category: "鲜萃咖啡",
                goodsName: "咖啡椰椰",
                goodsDiscribe: ["原味", "鲜"],
                goodsSale: 4000,
                goodsfavor: 0.83,
                goodsPrice: 9,
                specificationsList: [
                    [{
                        specifiType:'规格',
                        id: 1,
                        name: '标准',
                        price: 7,
                        isChoose: false,
                    }],
                    [{
                        specifiType:"温度",
                        id: 1,
                        name: '正常冰',
                        price: undefined,
                        isChoose: false
                    }, {
                        id: 2,
                        name: '少冰',
                        price: undefined,
                        isChoose: false
                    }],
                    [{
                        specifiType:"糖度",
                        id: 1,
                        name: '正常糖',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"糖度",
                        id: 2,
                        name: '七分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"糖度",
                        id: 3,
                        name: '五分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"糖度",
                        id: 4,
                        name: '不额外加糖',
                        price: undefined,
                        isChoose: false
                    }],
                    [{
                        specifiType:'口味',
                        id: 1,
                        name: '原味',
                        price: undefined,
                        isChoose: false,
                    }],
                ],
                specifications: 1,
            }, {
                goodsId: 3, isCollect: false, goodsOldPrice: 7, packingCharge: 1, category: "鲜萃咖啡",
                goodsName: "拿铁咖啡",
                goodsDiscribe: ["1杯", "咖啡"],
                goodsSale: 4000,
                goodsfavor: 0.83,
                goodsPrice: 9,
                specificationsList: [
                    [{
                        specifiType:'规格',
                        id: 1,
                        name: '标准',
                        price: 7,
                        isChoose: false,
                    }],
                    [{
                        specifiType:"温度",
                        id: 1,
                        name: '正常冰',
                        price: undefined,
                        isChoose: false
                    }, {
                        id: 2,
                        name: '少冰',
                        price: undefined,
                        isChoose: false
                    }],
                    [{
                        specifiType:"糖度",
                        id: 1,
                        name: '正常糖',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"糖度",
                        id: 2,
                        name: '七分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"糖度",
                        id: 3,
                        name: '五分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"糖度",
                        id: 4,
                        name: '不额外加糖',
                        price: undefined,
                        isChoose: false
                    }],
                    [{
                        specifiType:'口味',
                        id: 1,
                        name: '原味',
                        price: undefined,
                        isChoose: false,
                    }],
                ],
                specifications: 1,
            }, {
                goodsId: 4, isCollect: false, goodsOldPrice: 7, packingCharge: 1, category: "鲜萃咖啡",
                goodsName: "美式咖啡",
                goodsDiscribe: ["1杯", "咖啡"],
                goodsSale: 4000,
                goodsfavor: 0.83,
                goodsPrice: 9,
                specificationsList: [
                    [{
                        specifiType:'规格',
                        id: 1,
                        name: '标准',
                        price: 7,
                        isChoose: false,
                    }],
                    [{
                        specifiType:"温度",
                        id: 1,
                        name: '正常冰',
                        price: undefined,
                        isChoose: false
                    }, {
                        id: 2,
                        name: '少冰',
                        price: undefined,
                        isChoose: false
                    }],
                    [{
                        specifiType:"糖度",
                        id: 1,
                        name: '正常糖',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"糖度",
                        id: 2,
                        name: '七分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"糖度",
                        id: 3,
                        name: '五分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"糖度",
                        id: 4,
                        name: '不额外加糖',
                        price: undefined,
                        isChoose: false
                    }],
                    [{
                        specifiType:'口味',
                        id: 1,
                        name: '原味',
                        price: undefined,
                        isChoose: false,
                    }],
                ],
                specifications: 1,
            }
        ],
        [
            {
                goodsId: 5, isCollect: false, goodsOldPrice: 7, packingCharge: 1, category: "清爽果茶",
                goodsName: "珍珠奶茶",
                goodsDiscribe: ["一杯", "椰果"],
                goodsSale: 100,
                goodsfavor: 0.91,
                goodsPrice: 7,
                specificationsList: [
                    [{
                        specifiType:'规格',
                        id: 1,
                        name: '标准',
                        price: 7,
                        isChoose: false,
                    }],
                    [{
                        specifiType:"温度",
                        id: 1,
                        name: '正常冰',
                        price: undefined,
                        isChoose: false
                    }, {
                        id: 2,
                        name: '少冰',
                        price: undefined,
                        isChoose: false
                    }],
                    [{
                        specifiType:"糖度",
                        id: 1,
                        name: '正常糖',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"糖度",
                        id: 2,
                        name: '七分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"糖度",
                        id: 3,
                        name: '五分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"糖度",
                        id: 4,
                        name: '不额外加糖',
                        price: undefined,
                        isChoose: false
                    }],
                    [{
                        specifiType:'口味',
                        id: 1,
                        name: '原味',
                        price: undefined,
                        isChoose: false,
                    }],
                ],
                specifications: 1,
            },
            {
                goodsId: 6, isCollect: false, goodsOldPrice: 7, packingCharge: 1, category: "清爽果茶",
                goodsName: "珍珠奶茶(大杯)",
                goodsDiscribe: ["一杯", "椰果"],
                goodsSale: 100,
                goodsfavor: 0.91,
                goodsPrice: 9,
                specificationsList: [
                    [{
                        specifiType:'小料',
                        id: 1,
                        name: '标准',
                        price: 7,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 2,
                        name: '椰果',
                        price: 8,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 3,
                        name: '珍珠',
                        price: 8,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 4,
                        name: '芋圆',
                        price: 9,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 5,
                        name: '鸡蛋布丁',
                        price: 8,
                        isChoose: false,
                    }],
                    [{
                        specifiType:"温度",
                        id: 1,
                        name: '正常冰',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"温度",
                        id: 2,
                        name: '少冰',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"温度",
                        id: 3,
                        name: '热',
                        price: undefined,
                        isChoose: false
                    }],
                    [{
                        specifiType:"糖度",
                        id: 1,
                        name: '正常糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 2,
                        name: '七分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 3,
                        name: '五分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 4,
                        name: '不额外加糖',
                        price: undefined,
                        isChoose: false
                    }],
                ],
                specifications: 1,
            },
            {
                goodsId: 7, isCollect: false, goodsOldPrice: 7, packingCharge: 1, category: "清爽果茶",
                goodsName: "三拼霸霸奶茶",
                goodsDiscribe: ["一杯", "椰果"],
                goodsSale: 100,
                goodsfavor: 0.91,
                goodsPrice: 9,
                specificationsList: [
                    [{
                        specifiType:'小料',
                        id: 1,
                        name: '标准',
                        price: 7,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 2,
                        name: '椰果',
                        price: 8,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 3,
                        name: '珍珠',
                        price: 8,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 4,
                        name: '芋圆',
                        price: 9,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 5,
                        name: '鸡蛋布丁',
                        price: 8,
                        isChoose: false,
                    }],
                    [{
                        specifiType:"温度",
                        id: 1,
                        name: '正常冰',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"温度",
                        id: 2,
                        name: '少冰',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"温度",
                        id: 3,
                        name: '热',
                        price: undefined,
                        isChoose: false
                    }],
                    [{
                        specifiType:"糖度",
                        id: 1,
                        name: '正常糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 2,
                        name: '七分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 3,
                        name: '五分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 4,
                        name: '不额外加糖',
                        price: undefined,
                        isChoose: false
                    }],
                ],
                specifications: 1,
            }, {
                goodsId: 8, isCollect: false, goodsOldPrice: 7, packingCharge: 1, category: "清爽果茶",
                goodsName: "三拼霸霸奶茶",
                goodsDiscribe: ["一杯", "椰果"],
                goodsSale: 100,
                goodsfavor: 0.91,
                goodsPrice: 9,
                specificationsList: [
                    [{
                        specifiType:'小料',
                        id: 1,
                        name: '标准',
                        price: 7,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 2,
                        name: '椰果',
                        price: 8,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 3,
                        name: '珍珠',
                        price: 8,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 4,
                        name: '芋圆',
                        price: 9,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 5,
                        name: '鸡蛋布丁',
                        price: 8,
                        isChoose: false,
                    }],
                    [{
                        specifiType:"温度",
                        id: 1,
                        name: '正常冰',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"温度",
                        id: 2,
                        name: '少冰',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"温度",
                        id: 3,
                        name: '热',
                        price: undefined,
                        isChoose: false
                    }],
                    [{
                        specifiType:"糖度",
                        id: 1,
                        name: '正常糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 2,
                        name: '七分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 3,
                        name: '五分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 4,
                        name: '不额外加糖',
                        price: undefined,
                        isChoose: false
                    }],
                ],
                specifications: 1,
            }, {
                goodsId: 9, isCollect: false, goodsOldPrice: 7, packingCharge: 1, category: "清爽果茶",
                goodsName: "三拼霸霸奶茶",
                goodsDiscribe: ["一杯", "椰果"],
                goodsSale: 100,
                goodsfavor: 0.91,
                goodsPrice: 9,
                specificationsList: [
                    [{
                        specifiType:'小料',
                        id: 1,
                        name: '标准',
                        price: 7,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 2,
                        name: '椰果',
                        price: 8,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 3,
                        name: '珍珠',
                        price: 8,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 4,
                        name: '芋圆',
                        price: 9,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 5,
                        name: '鸡蛋布丁',
                        price: 8,
                        isChoose: false,
                    }],
                    [{
                        specifiType:"温度",
                        id: 1,
                        name: '正常冰',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"温度",
                        id: 2,
                        name: '少冰',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"温度",
                        id: 3,
                        name: '热',
                        price: undefined,
                        isChoose: false
                    }],
                    [{
                        specifiType:"糖度",
                        id: 1,
                        name: '正常糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 2,
                        name: '七分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 3,
                        name: '五分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 4,
                        name: '不额外加糖',
                        price: undefined,
                        isChoose: false
                    }],
                ],
                specifications: 1,
            }, {
                goodsId: 10, isCollect: false, goodsOldPrice: 7, packingCharge: 1, category: "清爽果茶",
                goodsName: "三拼霸霸奶茶",
                goodsDiscribe: ["一杯", "椰果"],
                goodsSale: 100,
                goodsfavor: 0.91,
                goodsPrice: 9,
                specificationsList: [
                    [{
                        specifiType:'小料',
                        id: 1,
                        name: '标准',
                        price: 7,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 2,
                        name: '椰果',
                        price: 8,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 3,
                        name: '珍珠',
                        price: 8,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 4,
                        name: '芋圆',
                        price: 9,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 5,
                        name: '鸡蛋布丁',
                        price: 8,
                        isChoose: false,
                    }],
                    [{
                        specifiType:"温度",
                        id: 1,
                        name: '正常冰',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"温度",
                        id: 2,
                        name: '少冰',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"温度",
                        id: 3,
                        name: '热',
                        price: undefined,
                        isChoose: false
                    }],
                    [{
                        specifiType:"糖度",
                        id: 1,
                        name: '正常糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 2,
                        name: '七分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 3,
                        name: '五分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 4,
                        name: '不额外加糖',
                        price: undefined,
                        isChoose: false
                    }],
                ],
                specifications: 1,
            }, {
                goodsId: 11, isCollect: false, goodsOldPrice: 7, packingCharge: 1, category: "清爽果茶",
                goodsName: "三拼霸霸奶茶",
                goodsDiscribe: ["一杯", "椰果"],
                goodsSale: 100,
                goodsfavor: 0.91,
                goodsPrice: 9,
                specificationsList: [
                    [{
                        specifiType:'小料',
                        id: 1,
                        name: '标准',
                        price: 7,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 2,
                        name: '椰果',
                        price: 8,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 3,
                        name: '珍珠',
                        price: 8,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 4,
                        name: '芋圆',
                        price: 9,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 5,
                        name: '鸡蛋布丁',
                        price: 8,
                        isChoose: false,
                    }],
                    [{
                        specifiType:"温度",
                        id: 1,
                        name: '正常冰',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"温度",
                        id: 2,
                        name: '少冰',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"温度",
                        id: 3,
                        name: '热',
                        price: undefined,
                        isChoose: false
                    }],
                    [{
                        specifiType:"糖度",
                        id: 1,
                        name: '正常糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 2,
                        name: '七分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 3,
                        name: '五分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 4,
                        name: '不额外加糖',
                        price: undefined,
                        isChoose: false
                    }],
                ],
                specifications: 1,
            }, {
                goodsId: 12, isCollect: false, goodsOldPrice: 7, packingCharge: 1, category: "清爽果茶",
                goodsName: "三拼霸霸奶茶",
                goodsDiscribe: ["一杯", "椰果"],
                goodsSale: 100,
                goodsfavor: 0.91,
                goodsPrice: 9,
                specificationsList: [
                    [{
                        specifiType:'小料',
                        id: 1,
                        name: '标准',
                        price: 7,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 2,
                        name: '椰果',
                        price: 8,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 3,
                        name: '珍珠',
                        price: 8,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 4,
                        name: '芋圆',
                        price: 9,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 5,
                        name: '鸡蛋布丁',
                        price: 8,
                        isChoose: false,
                    }],
                    [{
                        specifiType:"温度",
                        id: 1,
                        name: '正常冰',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"温度",
                        id: 2,
                        name: '少冰',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"温度",
                        id: 3,
                        name: '热',
                        price: undefined,
                        isChoose: false
                    }],
                    [{
                        specifiType:"糖度",
                        id: 1,
                        name: '正常糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 2,
                        name: '七分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 3,
                        name: '五分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 4,
                        name: '不额外加糖',
                        price: undefined,
                        isChoose: false
                    }],
                ],
                specifications: 1,
            }, {
                goodsId: 13, isCollect: false, goodsOldPrice: 7, packingCharge: 1, category: "清爽果茶",
                goodsName: "三拼霸霸奶茶",
                goodsDiscribe: ["一杯", "椰果"],
                goodsSale: 100,
                goodsfavor: 0.91,
                goodsPrice: 9,
                specificationsList: [
                    [{
                        specifiType:'小料',
                        id: 1,
                        name: '标准',
                        price: 7,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 2,
                        name: '椰果',
                        price: 8,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 3,
                        name: '珍珠',
                        price: 8,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 4,
                        name: '芋圆',
                        price: 9,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 5,
                        name: '鸡蛋布丁',
                        price: 8,
                        isChoose: false,
                    }],
                    [{
                        specifiType:"温度",
                        id: 1,
                        name: '正常冰',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"温度",
                        id: 2,
                        name: '少冰',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"温度",
                        id: 3,
                        name: '热',
                        price: undefined,
                        isChoose: false
                    }],
                    [{
                        specifiType:"糖度",
                        id: 1,
                        name: '正常糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 2,
                        name: '七分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 3,
                        name: '五分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 4,
                        name: '不额外加糖',
                        price: undefined,
                        isChoose: false
                    }],
                ],
                specifications: 1,
            },
            {
                goodsId: 14, isCollect: false, goodsOldPrice: 7, packingCharge: 1, category: "清爽果茶",
                goodsName: "椰果奶茶",
                goodsDiscribe: ["一杯", "椰果"],
                goodsSale: 100,
                goodsfavor: 0.91,
                goodsPrice: 8,
                specificationsList: [
                    [{
                        specifiType:'小料',
                        id: 1,
                        name: '标准',
                        price: 7,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 2,
                        name: '椰果',
                        price: 8,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 3,
                        name: '珍珠',
                        price: 8,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 4,
                        name: '芋圆',
                        price: 9,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 5,
                        name: '鸡蛋布丁',
                        price: 8,
                        isChoose: false,
                    }],
                    [{
                        specifiType:"温度",
                        id: 1,
                        name: '正常冰',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"温度",
                        id: 2,
                        name: '少冰',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"温度",
                        id: 3,
                        name: '热',
                        price: undefined,
                        isChoose: false
                    }],
                    [{
                        specifiType:"糖度",
                        id: 1,
                        name: '正常糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 2,
                        name: '七分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 3,
                        name: '五分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 4,
                        name: '不额外加糖',
                        price: undefined,
                        isChoose: false
                    }],
                ],
                specifications: 1,
            }, {
                goodsId: 15, isCollect: false, goodsOldPrice: 7, packingCharge: 1, category: "清爽果茶",
                goodsName: "椰果奶茶(大杯)",
                goodsDiscribe: ["一杯", "椰果"],
                goodsSale: 100,
                goodsfavor: 0.91,
                goodsPrice: 7,
                specificationsList: [
                    [{
                        specifiType:'小料',
                        id: 1,
                        name: '标准',
                        price: 7,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 2,
                        name: '椰果',
                        price: 8,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 3,
                        name: '珍珠',
                        price: 8,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 4,
                        name: '芋圆',
                        price: 9,
                        isChoose: false,
                    }, {
                        specifiType:'小料',
                        id: 5,
                        name: '鸡蛋布丁',
                        price: 8,
                        isChoose: false,
                    }],
                    [{
                        specifiType:"温度",
                        id: 1,
                        name: '正常冰',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"温度",
                        id: 2,
                        name: '少冰',
                        price: undefined,
                        isChoose: false
                    }, {
                         specifiType:"温度",
                        id: 3,
                        name: '热',
                        price: undefined,
                        isChoose: false
                    }],
                    [{
                        specifiType:"糖度",
                        id: 1,
                        name: '正常糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 2,
                        name: '七分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 3,
                        name: '五分糖',
                        price: undefined,
                        isChoose: false
                    }, {
                        specifiType:"糖度",
                        id: 4,
                        name: '不额外加糖',
                        price: undefined,
                        isChoose: false
                    }],
                ],
                specifications: 1,
            }]
    ]
    const shopBasic = {
        shopid: 1
    }
    const [active, setActive] = useState(2);

    const navigate: NavigateFunction=useNavigate();
    const cardClick =(goodsList:any) => (event: React.MouseEvent<HTMLDivElement, MouseEvent>)=> {
        navigate('/goodsDetails',{
            state:{"goodsList":goodsList}
           })
    }
    return (
        <div id="orderContent">
            <Flex >
                <Flex.Item span={6}>
                    <Sidebar
                        className="order--sidebar"
                        value={active}
                        onChange={(v) => {
                            setActive(v);
                        }}
                    >
                        {goodsList.map((item, index) => (
                            <Sidebar.Item contentStyle={{width:0,height:0,display:'none'}} key={index} title={item[0].category} />
                        ))}

                    </Sidebar>
                </Flex.Item>
                <Flex.Item span={18} id="sidecontent" className="order--sidecontent">
                    {goodsList.map((item, index) => (
                        <div key={index} id="goodsIndex" className="order--sidecontent__index">
                            <div id="goodsIndexTitle" data-index={index} data-length={goodsList.length} className="order--sidecontent__index__title">{item[0].category}</div>
                            {item.map((inItem, inIndex) => (
                                
                                <GoodsCard key={inIndex} shopBasic={shopBasic} goodsList={inItem} onClick={cardClick(inItem)}></GoodsCard>
                            ))}
                        </div>
                    ))}
                </Flex.Item>
            </Flex>
        </div>
    )
}