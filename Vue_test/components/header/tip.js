Vue.component('tip', {
    props:['tip','tip_','tip_2','tip_index'],
    template: `<div class="top">
                    <a href="#" v-for="(item,index) of tip" :key="index">
                        <span @click="$emit('tip-index-bgc',index)" :class="tip_index == index ? {tip_2:tip_2}: {tip_:tip_}">{{item}}</span>
                    </a>
                </div>`
});