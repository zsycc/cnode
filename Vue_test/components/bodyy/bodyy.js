Vue.component('wdd', {
    props:['content'],
//在自定义组件里面=>data 必须是一个函数
    data() {
        return {
            num:''
        }
    },
    template:`
            <div class="center">
            <div class="center_top"><p>最近创建的话题</p></div>
                <div v-for="item of content.data.recent_topics" class="cell">
                    <div class="left_">
                       <img :src="item.author.avatar_url" alt="" class="img">
                       <a href="">{{item.title}}</a>
                    </div>
                    <div class="right_">
                           <img :src="item.author.avatar_url"alt="" class="img">
                    </div>
                </div>  
            </div>             
`,
    methods:{

    },
    computed:{

    }
});