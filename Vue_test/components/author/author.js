Vue.component('ssy', {
    props:['con'],
//在自定义组件里面=>data 必须是一个函数
    data() {
        return {
            num:''
        }
    },
    template:`
            <div class="bot">
            <div class="bot_top"><p>最近参与的话题</p></div>
                <div v-for="item of con.data.recent_replies" class="cel">
                    <div class="_left">
                       <img :src="item.author.avatar_url" alt="" class="img">
                       <a href="">{{item.title}}</a>
                    </div>
                    <div class="_right">
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