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
    <div class="affixList">
        <div class="data_list" :class="changeColor(item.type)" v-for="item in affixData" :key="item.skillName">
            <div class="skill">技能: {{ item.skillName }}</div>
            <div class="ability">能力: {{ item.ability }}</div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
.affixList{
    margin: 3vh 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .data_list{
        display: flex;
        width: 33%;
        padding: 1vh 0;
        border: 1px solid #333;
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

</style>