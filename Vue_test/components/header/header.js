Vue.component('wd', {
    props:['content'],
//在自定义组件里面=>data 必须是一个函数
data() {
    return {
        num:''
    }
},
template:`
            <div class="all">
                    <div class="wd_header">
                        <ul class="wd_breadcrumb">
                            <li>
                                <a href="/">主页</a>
                                <span class="wd_divider">/</span>
                            </li>
                        </ul>
                    </div>
                    <div class="wd_userinfo">
                        <div class="wd_user_avatar" >
                            <img :src="content.data.avatar_url" class="user_avatar" title="XadillaX">
                             <a class="wd_dark">{{content.data.githubUsername}}</a>
                        </div>
                        <div class="wd_user_profile">
                           {{content.data.score}} 积分
                        </div>
                        <p class="wd_col_fade">{{content.data.create_at}}</p>
                    </div>   
              </div>            
`,
    methods:{

},
computed:{

}
});
