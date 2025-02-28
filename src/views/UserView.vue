<template>
    <div class="user-view">
        <h1 class="lg:mt-14 sm:mt-8 mb-10" >История заказов</h1>
        
        <div class="flex flex-col" v-if="orders">
            <div v-for="order in orders.edges" :key="order.node.id">
                <div class="flex flex-col  mb-6 ">
                    <div class="flex flex-row border items-center justify-between border-slate-100 rounded-xl px-8 py-4 cursor-pointer hover:bg-slate-100" @click="toggle(order.node.id)">
                        <div class="flex flex-col">
                            <span class="text-gray-300 text-[13px]">{{ formatDate(order.node.creationDatetime) }} </span>
                            <span class="text-[17px]">№ {{ order.node.number }}</span>
                        </div>
                        <span class="font-semibold" :class="classStatus(order.node.status)"> {{ formatStatus(order.node.status) }} </span>
                    </div>

                    <SlideUpDown v-model="slidesUdDown[order.node.id]" :duration="200" class="flex flex-col">
                        <div class="flex flex-row justify-between py-7 px-8">
                            <span class="text-[15px] font-semibold"> {{ order.node.items.totalQuantity }} товаров </span>
                            <span class="text-[15px] font-semibold"> {{ order.node.items.totalPrice }} ₽</span>
                        </div>
                        <div>
                            <div class="flex flex-row justify-between items-center p-5 px-8 border-b-[#E1E4ED] border-b" v-for="product in order.node.itemNodes" :key="product">
                                
                                    <div class="w-[80px] mr-4 flex lg:justify-center sm:justify-start">
                                <img :src="(product.imageUrl) ? product.imageUrl : '/no-image.jpg'" alt="" class="w-auto h-auto max-w-[80px] lg:max-h-[80px] sm:max-h-auto">
                               </div>
                                <div class="flex lg:flex-row sm:flex-col justify-between items-center w-full">
                                <h2 class="text-[15px] lg:font-semibold mr-auto sm:font-normal"> {{ product.name }} </h2>
                                
                                <div class="flex flex-row justify-between items-center lg:w-auto sm:w-full lg:m-0 sm:mt-4">
                                <b class="lg:mr-11 text-[15px] font-semibold whitespace-nowrap lg:ml-4 sm:mr-auto"> {{ product.unitPrice }} ₽ </b>
                                <p class="text-[15px] font-semibold whitespace-nowrap ml-4"> {{ product.quantity }} шт.</p>
                                </div>
                                 </div>
                            </div>
                        </div>
                    </SlideUpDown>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import gql from 'graphql-tag'
import SlideUpDown from 'vue3-slide-up-down'

export default {
    components: {
        SlideUpDown
    },
    mounted() {
document.title = 'История заказов - компания ООО "КРОН"';
  },
    apollo: {
        orders: {
            query: gql`query ordersConnection($first: Int!) {
                orders(first: $first) {
                    edges {
                        node {
                            id
                            creationDatetime
                            number
                            status
                            items(first: 100) {
                                totalPrice
                                totalQuantity
                            }
                            itemNodes {
                                imageUrl
                                name
                                quantity
                                unitPrice
                            }
                        }
                    }
                }
            }`,
            variables () {
                return {
                    first: 100
                }
            }
        }
       
    },
    data() {
        return {
            orders: false,
            slidesUdDown: {}
        }
    },
    methods: {
        formatDate(date) {
            let fD = new Date(date);
            return fD.toLocaleDateString("ru-RU")
        },
        formatStatus(orderStatus) {
            switch (orderStatus) {
                case 'DECLINED':
                    return 'Отклонен';
                case 'COMPLETED':
                    return 'Завершен';
                case 'CONFIRMED':
                    return 'Подтвержден';
                case 'PROCESSING':
                    return 'В обработке';
            }
        },
        classStatus(orderStatus) {
            switch (orderStatus) {
                case 'DECLINED':
                    return 'text-[#E83737]';
                case 'COMPLETED':
                    return 'text-[#00A440]';
                case 'CONFIRMED':
                    return 'text-[#444DB8]';
                case 'PROCESSING':
                    return 'text-[#8185AE]';
            }
        },
        toggle(key) {
            (this.slidesUdDown[key]) ? this.slidesUdDown[key] = false : this.slidesUdDown[key] = true;
        }
    }
}
    
</script>
