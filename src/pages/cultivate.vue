<script setup>
    import { cultivateData } from '../data/cultivateData';
</script>

<template>
    <div class="cultivate_box">
        <div class="cultivate">
            <div class="title">
                <div>父親</div>
                <div>母親</div>
                <div>孩子</div>
            </div>
            <div class="list" v-for="item in cultivateData" :key="item.id">
                <div class="card">
                    <div>
                        <img v-if="item.manImg" :src="`/palworld/src/images/${item.manImg}.jpg`" alt="">
                        {{ item.man }}
                    </div>
                    <div>
                        <img v-if="item.womanImg" :src="`/palworld/src/images/${item.womanImg}.jpg`" alt="">
                        {{ item.woman }}
                    </div>
                    <div>
                        <img v-if="item.childImg" :src="`/palworld/src/images/${item.childImg}.jpg`" alt="">
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
            .title{
                display: flex;
                justify-content: center;
                div{
                    width: 20%;
                    padding: 2vh 0 2vh .5vw;
                }
                div:nth-child(1n){
                        background: #97c5ea;
                }
                div:nth-child(2n){
                        background: #eda3c4;
                }
                div:nth-child(3n){
                        background: #a5efde;
                }
            }

            .card{
                display: flex;
                justify-content: center;
                div{
                    display: flex;
                    align-items: center;
                    width: 20%;
                    padding: 2vh 0 2vh .5vw;
                }
                img{
                    margin-right: 1vw;
                    width: 5vw;
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