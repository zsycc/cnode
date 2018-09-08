Vue.component('cream', {
    props:['content','title_index'],
    template: `<div>
<template v-for="item of content.data" v-if="item.good">
                    <div  class="content">
                        <div class="left">
                            <img :src="item.author.avatar_url" alt="" class="img" @click="$emit('title-index')">
                            <p>
                                <span>{{item.reply_count}}</span>
                                <span>/</span>
                                <span>{{item.visit_count}}</span>
                            </p>  
                            <span class="stick" style="background-color: #80bd01;color: #ffffff;">精华</span>
                            <a href="" :title="item.title" @click.prevent>
                                <span class="my_span" @click="$emit('title-index-bgc')">{{item.title}}</span>
                            </a>
                        </div>
                        <div class="right">
                            <img :src="item.author.avatar_url" alt="">
                        </div>
                    </div>
                </template>
</div>`
});