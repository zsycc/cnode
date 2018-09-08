Vue.component('wd', {
    props:['contents'],
//在自定义组件里面=>data 必须是一个函数
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
                            <img :src="contents.data.avatar_url" class="user_avatar">
                             <a class="wd_dark">{{contents.data.githubUsername}}</a>
                        </div>
                        <div class="wd_user_profile">
                           {{contents.data.score}} 积分
                        </div>
                        <p class="wd_col_fade">{{contents.data.create_at}}</p>
                    </div>   
              </div>            
`,
    methods:{

},
computed:{

}
});
