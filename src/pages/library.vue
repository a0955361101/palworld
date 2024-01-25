<script setup>
import { libraryData } from '../data/libraryData';
const getImageUrl = (name) => {
        return new URL(`../images/${name}.jpg`, import.meta.url).href
};

const changeNumberId = (id) => {
    // console.log(id.indexOf('B'));
    if(id.indexOf('B') == 2){
        return '0' + id;
    }
    if(id < 10){
        return '00' + id;
    }
    else if(id > 10 && id < 100){
        return '0' + id;
    }
    else{
        return id;
    }
};

</script>

<template>
    <div class="library_box">
        <div class="library">
            <div class="card" v-for="item in libraryData" :key="item.id">
                <div class="card_img"><img v-if="item.id" :src="getImageUrl(item.id)" alt=""></div>
                <div><span>No.{{ changeNumberId(item.id) }}</span> {{ item.name }}</div>
                <div>食量 {{ item.eat }}</div>
                <div class="skill_list">
                    <span v-if="item.fire">生火 {{ item.fire }}</span>
                    <span v-if="item.water">澆水 {{ item.water }}</span>
                    <span v-if="item.sowing">播種 {{ item.sowing }}</span>
                    <span v-if="item.electricity">發電 {{ item.electricity }}</span>
                    <span v-if="item.manual">手工 {{ item.manual }}</span>
                    <span v-if="item.collection">採集 {{ item.collection }}</span>
                    <span v-if="item.logging">伐木 {{ item.logging }}</span>
                    <span v-if="item.mining">採礦 {{ item.mining }}</span>
                    <span v-if="item.pharmaceutical">製藥 {{ item.pharmaceutical }}</span>
                    <span v-if="item.coolCown">冷卻 {{ item.coolCown }}</span>
                    <span v-if="item.carry">搬運 {{ item.carry }}</span>
                    <span v-if="item.pasture">畜牧 {{ item.pasture }}</span>
                </div>
                <div>屬性: {{ item.attributes }}</div>
                <div class="skill">技能:{{ item.skill }}</div>
                <div class="skill_detailed">{{ item.detailedSkill }}</div>
                <div>掉落物:{{ item.item }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .library_box{
        max-width: 1200px;
        margin: 0 auto;
        .library{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            // justify-content:space-between;
            .card{
                text-align: center;
                border: 1px solid #eee;
                border-radius: 6px;
                width: 23%;
                margin-bottom: 2vh;
                position: relative;
                margin-right: .85vw;
                box-shadow: 3px 5px 5px #ddd;
                @media (max-width: 600px) {
                        width: 48%;
                    }
                img{
                    width: 100%;
                    border-radius: 6px 6px 0 0;
                }
                .card_img{
                    width: 100%;
                }
                .skill_list{
                    span{
                        margin-right: .3vw;
                    }
                }
                
                .skill_detailed{
                    display: none;
                    border: 1px solid #ddd;
                    border-radius: 6px;
                    padding: 1vw;
                    position: absolute;
                    top: calc(50% - 1vw);
                    left: 0;
                    background: #eee;
                    box-shadow: 3px 5px 5px #ddd;
                    width: 100%;
                }
                .skill:hover+.skill_detailed{
                    display: block;
                }
            }
            .card:nth-child(4n){
                margin-right: 0;
            }
        }
    }
</style>