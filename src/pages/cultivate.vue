<script setup>
    import { ref } from 'vue';
    import { cultivateData } from '../data/cultivateData';
    const getImageUrl = (name) => {
        return new URL(`../images/${name}.jpg`, import.meta.url).href
    };
    const copyData = ref(cultivateData);
    const selectInput = ref('');
    const selectFun = () => {
        if(selectInput.value === ''){
            return;
        }
        const selectData = copyData.value.filter((v) => {
            return v.child === selectInput.value;
        })
        copyData.value = selectData;
        console.log(copyData.value);
    };

    const selectClearFun = () => {
        copyData.value = cultivateData;
    };
</script>

<template>
    <div class="cultivate_box">
        <div class="cultivate">
            <div class="select_btn">
                <input type="text" v-model="selectInput">
                <div @click="selectFun()">搜尋</div>
                <div @click="selectClearFun()">清除</div>
            </div>
            <div class="list" v-for="item in copyData" :key="item.id">
                <div class="card">
                    <div>
                        <img v-if="item.manImg" :src="getImageUrl(item.manImg)" alt="">
                        {{ item.man }}
                    </div>
                    <div>
                        <img v-if="item.womanImg" :src="getImageUrl(item.womanImg)" alt="">
                        {{ item.woman }}
                    </div>
                    <div>
                        <img v-if="item.childImg" :src="getImageUrl(item.childImg)" alt="">
                        {{ item.child }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .cultivate_box{
        max-width: 1200px;
        margin: 0 auto;
        .cultivate{
            width: 100%;
            .select_btn{
                display: flex;
                justify-content: center;
                margin: 0 0 4.5vh 0;
                text-align: center;
                @media (max-width: 600px) {
                        width: 100vw;
                        align-items: center;
                        flex-direction: column;
                    }
                div{
                    margin-left: 1vw;
                    color: #333;
                    font-size: .9rem;
                    padding: .3vw;
                    border-radius: 3px;
                    box-shadow: 3px 5px 5px #eee;
                    @media (max-width: 600px) {
                        width: 50vw;
                        margin: 2vh 0 0 0;
                    }
                }
                :hover{
                    background: #eee;
                }
                input{
                    width: 25vw;
                    box-shadow: 3px 5px 5px #ddd;
                    border: none;
                    outline: none;
                    background: #eee;
                    @media (max-width: 600px) {
                        width: 50vw;
                    }
                }
            }
            .card{
                display: flex;
                justify-content: center;
                div{
                    display: flex;
                    align-items: center;
                    // justify-content: center;
                    width: 33.3%;
                    padding: 2vh 0 2vh .5vw;
                    @media (max-width: 600px) {
                        flex-direction: column;
                    }
                }
                img{
                    margin-right: 1vw;
                    width: 5vw;
                    @media (max-width: 600px) {
                        width: 50%;
                        padding: 3vh 0 3vh 1vw;
                        display: block;
                    }
                }
                div:nth-child(1n){
                        background: #b3d3ee;
                }
                div:nth-child(2n){
                        background: #f3b8d3;
                }
                div:nth-child(3n){
                        background: #b8f3e5;
                }
            }
        }
    }

</style>