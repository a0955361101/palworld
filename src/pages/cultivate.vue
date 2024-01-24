<script setup>
    import { cultivateData } from '../data/cultivateData';
    const getImageUrl = (name) => {
        return new URL(`../images/${name}.jpg`, import.meta.url).href
    };
</script>

<template>
    <div class="cultivate_box">
        <div class="cultivate">
            <div class="list" v-for="item in cultivateData" :key="item.id">
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
            .card{
                display: flex;
                justify-content: center;
                div{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 33.3%;
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