import DashBoard from "@/views/DashBoard.vue";
import GoodsBuy from "@/views/GoodsBuy.vue";
import GoodsManage from "@/views/GoodsManage.vue";
import PurchaseRecord from "@/views/PurchaseRecord.vue";
import WithDraw from "@/views/WithDraw.vue";
import Vue from "vue";
import Router from 'vue-router'



Vue.use(Router) 
    export default new Router ({
        routes: [
            {
                path: '/',
                name: 'Dashboard',
                component: DashBoard
            },
            {
                path: '/goods-manage',
                name: 'GoodsManage',
                component: GoodsManage,
                meta: { requireOwner: true }  //需要管理员权限
            },
            {
                path: '/goods-buy',
                name: 'GoodsBuy',
                component: GoodsBuy
            },
            {
                path: '/purchase-record',
                name: 'PruchaseRecord',
                component: PurchaseRecord
            },
            {
                path: '/withdraw',
                name: 'withdraw',
                component: WithDraw,
                meta: { requireOwner: true }  //需要管理员权限
               }
        ]
    })
