<script setup>
    import { ref } from 'vue';
    import { cultivateData, optionsList } from '../data/cultivateData';
    const getImageUrl = (name) => {
        return new URL(`../images/${name}.jpg`, import.meta.url).href
    };
    const copyData = ref(cultivateData);
    const value = ref('');
    const options = ref(optionsList);



    const selectFun = () => {
        if(value.value === ''){
            copyData.value = cultivateData;
            return;
        }
        const selectData = copyData.value.filter((v) => {
            return v.child === value.value;
        })
        copyData.value = selectData;
        // console.log(copyData.value);
    };

    const handleInputChange = (val) => {
        // console.log(val);
    };

    const filterMethod = (query) => {
        if (query) {
            options.value = options.value.filter((item) => {
                return item.label.toLowerCase().indexOf(query.toLowerCase()) !== -1;
            });
        } else {
            options.value = [];
        }
    };
</script>

<template>
    <div class="cultivate_box">
        <div class="cultivate">
            <div class="select_btn">
                <d-editable-select placeholder="子代查詢" @change="selectFun()" :filter-method="filterMethod" allow-clear @input-change="handleInputChange" v-model="value" :options="options" :width="350"></d-editable-select>
            </div>
            <div class="list" v-for="item in copyData" :key="item.id">
                <div class="card">
                    <div>
                        <img v-if="item.manImg" :src="getImageUrl(item.manImg)" alt="">
                        {{ item.man }} 
                    </div>
                    <div>+</div>
                    <div>
                        <img v-if="item.womanImg" :src="getImageUrl(item.womanImg)" alt="">
                        {{ item.woman }}
                    </div>
                    <div>=</div>
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
                div:hover{
                    background: #eee;
                }
                label{
                    display: flex;
                    align-items: center;
                    margin-right: 1vw;
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
                border-radius: 6px;
                box-shadow: 3px 5px 5px #ddd;
                background-color: #eee;
                margin-bottom: 2vh;
                align-items: center;
                div{
                    display: flex;
                    align-items: center;
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
                // div:nth-child(1n){
                //         background: #b3d3ee;
                // }
                // div:nth-child(2n){
                //         background: #f3b8d3;
                // }
                // div:nth-child(3n){
                //         background: #b8f3e5;
                // }
            }
            .card:hover {
                    background-color: #ccc;
                }
        }
    }

</style>