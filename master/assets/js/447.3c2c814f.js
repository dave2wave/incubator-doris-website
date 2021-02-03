(window.webpackJsonp=window.webpackJsonp||[]).push([[447],{844:function(t,a,e){"use strict";e.r(a);var s=e(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"代码提交指南"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码提交指南"}},[t._v("#")]),t._v(" 代码提交指南")]),t._v(" "),e("p",[t._v("在 "),e("a",{attrs:{href:"https://github.com/apache/incubator-doris",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),e("OutboundLink")],1),t._v(" 上面可以很方便地提交 "),e("a",{attrs:{href:"https://help.github.com/articles/about-pull-requests/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pull Request (PR)"),e("OutboundLink")],1),t._v("，下面介绍 Doris 项目的 PR 方法。")]),t._v(" "),e("h3",{attrs:{id:"_1-fork仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-fork仓库"}},[t._v("#")]),t._v(" 1. Fork仓库")]),t._v(" "),e("p",[t._v("进入 apache/incubator-doris 的 "),e("a",{attrs:{href:"https://github.com/apache/incubator-doris",target:"_blank",rel:"noopener noreferrer"}},[t._v("github 页面"),e("OutboundLink")],1),t._v(" ，点击右上角按钮 "),e("code",[t._v("Fork")]),t._v(" 进行 Fork。")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/fork-repo.png"),alt:"Fork"}}),t._v(" "),e("h3",{attrs:{id:"_2-配置git和提交修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置git和提交修改"}},[t._v("#")]),t._v(" 2. 配置git和提交修改")]),t._v(" "),e("h4",{attrs:{id:"_1-将代码克隆到本地"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-将代码克隆到本地"}},[t._v("#")]),t._v(" （1）将代码克隆到本地：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git clone https://github.com/<your_github_name>/incubator-doris.git\n")])])]),e("p",[t._v("注意：请将 <your_github_name> 替换为您的 github 名字。")]),t._v(" "),e("p",[t._v("clone 完成后，origin 会默认指向 github 上的远程 fork 地址。")]),t._v(" "),e("h4",{attrs:{id:"_2-将-apache-incubator-doris-添加为本地仓库的远程分支-upstream"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-将-apache-incubator-doris-添加为本地仓库的远程分支-upstream"}},[t._v("#")]),t._v(" （2）将 apache/incubator-doris 添加为本地仓库的远程分支 upstream：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("cd  incubator-doris\ngit remote add upstream https://github.com/apache/incubator-doris.git\n")])])]),e("h4",{attrs:{id:"_3-检查远程仓库设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-检查远程仓库设置"}},[t._v("#")]),t._v(" （3）检查远程仓库设置：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git remote -v\norigin https://github.com/<your_github_name>/incubator-doris.git (fetch)\norigin    https://github.com/<your_github_name>/incubator-doris.git (push)\nupstream  https://github.com/apache/incubator-doris.git (fetch)\nupstream  https://github.com/apache/incubator-doris.git (push)\n")])])]),e("h4",{attrs:{id:"_4-新建分支以便在分支上做修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-新建分支以便在分支上做修改"}},[t._v("#")]),t._v(" （4）新建分支以便在分支上做修改：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git checkout -b <your_branch_name>\n")])])]),e("p",[t._v("注意： <your_branch_name> 为您自定义的分支名字。")]),t._v(" "),e("p",[t._v("创建完成后可进行代码更改。")]),t._v(" "),e("h4",{attrs:{id:"_5-提交代码到远程分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-提交代码到远程分支"}},[t._v("#")]),t._v(" （5）提交代码到远程分支：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('git commit -a -m "<you_commit_message>"\ngit push origin <your_branch_name>\n')])])]),e("p",[t._v("更多 git 使用方法请访问："),e("a",{attrs:{href:"https://www.atlassian.com/git/tutorials/setting-up-a-repository",target:"_blank",rel:"noopener noreferrer"}},[t._v("git 使用"),e("OutboundLink")],1),t._v("，这里不赘述。")]),t._v(" "),e("h3",{attrs:{id:"_3-创建pr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建pr"}},[t._v("#")]),t._v(" 3. 创建PR")]),t._v(" "),e("h4",{attrs:{id:"_1-新建-pr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-新建-pr"}},[t._v("#")]),t._v(" （1）新建 PR")]),t._v(" "),e("p",[t._v("在浏览器切换到自己的 github 页面，切换分支到提交的分支 <your_branch_name> ，点击 "),e("code",[t._v("New pull request")]),t._v(" 按钮进行创建，如下图所示：")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/new-pr.png"),alt:"new PR"}}),t._v(" "),e("h4",{attrs:{id:"_2-准备分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-准备分支"}},[t._v("#")]),t._v(" （2）准备分支")]),t._v(" "),e("p",[t._v("这时候，会出现 "),e("code",[t._v("Create pull request")]),t._v(" 按钮，如果没有请检查是否正确选择了分支，也可以点击 “compare across forks” 重新选择 repo 和分支。")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images//create-pr.png"),alt:"create PR"}}),t._v(" "),e("h4",{attrs:{id:"_3-填写-commit-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-填写-commit-message"}},[t._v("#")]),t._v(" （3）填写 Commit Message")]),t._v(" "),e("p",[t._v("这里请填写 comment 的总结和详细内容，然后点击 "),e("code",[t._v("Create pull request")]),t._v(" 进行创建。")]),t._v(" "),e("p",[t._v("关于如何写 Commit Message，下面列出了一些 Tips：")]),t._v(" "),e("ul",[e("li",[t._v("请用英文 动词 + 宾语 的形式，动词不用过去式，语句用祈使句；")]),t._v(" "),e("li",[t._v("消息主题（Subject）和具体内容（Body）都要写，它们之间要有空行分隔（GitHub PR界面上分别填写即可）;")]),t._v(" "),e("li",[t._v("消息主题长度不要超过"),e("strong",[t._v("50")]),t._v("个字符；")]),t._v(" "),e("li",[t._v("消息内容每行不要超过"),e("strong",[t._v("72")]),t._v("个字符，超过的需要手动换行；")]),t._v(" "),e("li",[t._v("消息内容用于解释做了什么、为什么做以及怎么做的；")]),t._v(" "),e("li",[t._v("消息主题第一个字母要"),e("strong",[t._v("大写")]),t._v("，句尾"),e("strong",[t._v("不要")]),t._v("有句号；")]),t._v(" "),e("li",[t._v("消息内容中写明关联的issue(如果有)，例如 #233;")])]),t._v(" "),e("p",[t._v("更详细的内容请参考 "),e("a",{attrs:{href:"https://chris.beams.io/posts/git-commit",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://chris.beams.io/posts/git-commit"),e("OutboundLink")],1)]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/create-pr2.png"),alt:"create PR"}}),t._v(" "),e("h4",{attrs:{id:"_4-完成创建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-完成创建"}},[t._v("#")]),t._v(" （4）完成创建")]),t._v(" "),e("p",[t._v("创建成功后，您可以看到 Doris 项目需要 review，您可以等待我们 review 和合入，您也可以直接联系我们。")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/images/create-pr3.png"),alt:"create PR"}}),t._v(" "),e("p",[t._v("至此，您的PR创建完成，更多关于 PR 请阅读 "),e("a",{attrs:{href:"https://help.github.com/categories/collaborating-with-issues-and-pull-requests/",target:"_blank",rel:"noopener noreferrer"}},[t._v("collaborating-with-issues-and-pull-requests"),e("OutboundLink")],1),t._v(" 。")]),t._v(" "),e("h3",{attrs:{id:"_4-冲突解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-冲突解决"}},[t._v("#")]),t._v(" 4. 冲突解决")]),t._v(" "),e("p",[t._v("提交PR时的代码冲突一般是由于多人编辑同一个文件引起的，解决冲突主要通过以下步骤即可：")]),t._v(" "),e("h4",{attrs:{id:"_1-切换至主分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-切换至主分支"}},[t._v("#")]),t._v(" （1）切换至主分支")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git checkout master\n")])])]),e("h4",{attrs:{id:"_2-同步远端主分支至本地"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-同步远端主分支至本地"}},[t._v("#")]),t._v(" （2）同步远端主分支至本地")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git pull upstream master\n")])])]),e("h4",{attrs:{id:"_3-切换回刚才的分支-假设分支名为fix"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-切换回刚才的分支-假设分支名为fix"}},[t._v("#")]),t._v(" （3）切换回刚才的分支（假设分支名为fix）")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git checkout fix\n")])])]),e("h4",{attrs:{id:"_4-进行rebase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-进行rebase"}},[t._v("#")]),t._v(" （4）进行rebase")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git rebase -i master\n")])])]),e("p",[t._v("此时会弹出修改记录的文件，一般直接保存即可。然后会提示哪些文件出现了冲突，此时可打开冲突文件对冲突部分进行修改，将提示的所有冲突文件的冲突都解决后，执行")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git add .\ngit rebase --continue\n")])])]),e("p",[t._v("依此往复，直至屏幕出现类似 "),e("em",[t._v("rebase successful")]),t._v(" 字样即可，此时您可以进行往提交PR的分支进行更新：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git push -f origin fix\n")])])]),e("h3",{attrs:{id:"_5-一个例子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-一个例子"}},[t._v("#")]),t._v(" 5. 一个例子")]),t._v(" "),e("h4",{attrs:{id:"_1-对于已经配置好-upstream-的本地分支-fetch-到最新代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-对于已经配置好-upstream-的本地分支-fetch-到最新代码"}},[t._v("#")]),t._v(" （1）对于已经配置好 upstream 的本地分支 fetch 到最新代码")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ git branch\n* master\n\n$ git fetch upstream          \nremote: Counting objects: 195, done.\nremote: Compressing objects: 100% (68/68), done.\nremote: Total 141 (delta 75), reused 108 (delta 48)\nReceiving objects: 100% (141/141), 58.28 KiB, done.\nResolving deltas: 100% (75/75), completed with 43 local objects.\nFrom https://github.com/apache/incubator-doris\n   9c36200..0c4edc2  master     -> upstream/master\n")])])]),e("h4",{attrs:{id:"_2-进行rebase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-进行rebase"}},[t._v("#")]),t._v(" （2）进行rebase")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ git rebase upstream/master  \nFirst, rewinding head to replay your work on top of it...\nFast-forwarded master to upstream/master.\n")])])]),e("h4",{attrs:{id:"_3-检查看是否有别人提交未同步到自己-repo-的提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-检查看是否有别人提交未同步到自己-repo-的提交"}},[t._v("#")]),t._v(" （3）检查看是否有别人提交未同步到自己 repo 的提交")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('$ git status\n# On branch master\n# Your branch is ahead of \'origin/master\' by 8 commits.\n#\n# Untracked files:\n#   (use "git add <file>..." to include in what will be committed)\n#\n#       custom_env.sh\nnothing added to commit but untracked files present (use "git add" to track)\n')])])]),e("h4",{attrs:{id:"_4-合并其他人提交的代码到自己的-repo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-合并其他人提交的代码到自己的-repo"}},[t._v("#")]),t._v(" （4）合并其他人提交的代码到自己的 repo")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ git push origin master\nCounting objects: 195, done.\nDelta compression using up to 32 threads.\nCompressing objects: 100% (41/41), done.\nWriting objects: 100% (141/141), 56.66 KiB, done.\nTotal 141 (delta 76), reused 140 (delta 75)\nremote: Resolving deltas: 100% (76/76), completed with 44 local objects.\nTo https://lide-reed:fc35ff925bd8fd6629be3f6412bacee99d4e5f97@github.com/lide-reed/incubator-doris.git\n   9c36200..0c4edc2  master -> master\n")])])]),e("h4",{attrs:{id:"_5-新建分支-准备开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-新建分支-准备开发"}},[t._v("#")]),t._v(" （5）新建分支，准备开发")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ git checkout -b my_branch\nSwitched to a new branch 'my_branch'\n\n$ git branch\n  master\n* my_branch\n")])])]),e("h4",{attrs:{id:"_6-代码修改完成后-准备提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-代码修改完成后-准备提交"}},[t._v("#")]),t._v(" （6）代码修改完成后，准备提交")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ git add -u\n")])])]),e("h4",{attrs:{id:"_7-填写-message-并提交到本地的新建分支上"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-填写-message-并提交到本地的新建分支上"}},[t._v("#")]),t._v(" （7）填写 message 并提交到本地的新建分支上")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('$ git commit -m "Fix a typo"\n[my_branch 55e0ba2] Fix a typo\n 1 files changed, 2 insertions(+), 2 deletions(-)\n')])])]),e("h4",{attrs:{id:"_8-将分支推到-github-远端自己的-repo-中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-将分支推到-github-远端自己的-repo-中"}},[t._v("#")]),t._v(" （8）将分支推到 GitHub 远端自己的 repo 中")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ git push origin my_branch\nCounting objects: 11, done.\nDelta compression using up to 32 threads.\nCompressing objects: 100% (6/6), done.\nWriting objects: 100% (6/6), 534 bytes, done.\nTotal 6 (delta 4), reused 0 (delta 0)\nremote: Resolving deltas: 100% (4/4), completed with 4 local objects.\nremote: \nremote: Create a pull request for 'my_branch' on GitHub by visiting:\nremote:      https://github.com/lide-reed/incubator-doris/pull/new/my_branch\nremote: \nTo https://lide-reed:fc35ff925bd8fd6629be3f6412bacee99d4e5f97@github.com/lide-reed/incubator-doris.git\n * [new branch]      my_branch -> my_branch\n")])])]),e("p",[t._v("至此，就可以按照前面的流程进行创建 PR 了。")])])}),[],!1,null,null,null);a.default=r.exports}}]);