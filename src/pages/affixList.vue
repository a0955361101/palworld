<script setup>
import { ref } from 'vue';
    import { affixData } from '../data/affixData';

    

    const changeColor = (type) => {
        if(type === 0){
            return 'red';
        }
        else if(type == 2){
            return 'gold';
        }
        else{
            return;
        }
    }
</script>

<template>
    <div class="affixList_box">
        <div class="affixList">
            <div class="data_list" :class="changeColor(item.type)" v-for="item in affixData" :key="item.skillName">
                <div class="skill">技能: {{ item.skillName }}</div>
                <div class="ability">能力: {{ item.ability }}</div>
            </div>
        </div>
    </div>
    
    
</template>

<style lang="scss" scoped>
.affixList_box{
    max-width: 1200px;
    margin: 0 auto;
    .affixList{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .data_list{
        display: flex;
        width: 32%;
        padding: 1.5vh 0 1.5vh 0.5vw;
        border: 1px solid #333;
        @media (max-width: 375px) {
            width: 100%;
            padding: 3vh 0 3vh 1vw;
        }
        .skill{
            width: 35%;
        }
        
    }
    
    .red{
        background: #ed8585;
    }
    .gold{
        background: #efd684;
    }
}
}


</style>