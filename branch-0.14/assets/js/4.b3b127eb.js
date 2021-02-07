(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{316:function(t,a,e){},317:function(t,a,e){},348:function(t,a,e){"use strict";e(110);var s={computed:{thisYear:function(){return(new Date).getFullYear()}}},i=(e(353),e(42)),n=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer-wrapper"},[e("p",{staticClass:"apache-info"},[e("a",{attrs:{href:"https://apache.org"}},[e("img",{attrs:{width:"200",src:t.$withBase("/images/asf_logo.svg"),alt:"The Apache Software Foundation"}})]),t._v(" "),t._m(0)]),t._m(1),t._v(" "),e("p",[e("br"),t._v(" "),e("span",{staticClass:"footer-text"},[t._v("© Copyright "+t._s(t.thisYear)+", Apache Doris(Incubating) ")]),t._v(" "),e("br"),t._v(" "),e("span",{staticClass:"footer-text"},[t._v("\n      Apache Doris(incubating) is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF.\n    ")])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticStyle:{float:"right"},attrs:{href:"https://www.apache.org/events/current-event.html"}},[a("img",{attrs:{src:"https://www.apache.org/events/current-event-234x60.png"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("a",{attrs:{href:"https://www.apache.org/licenses/"}},[this._v("License")]),this._v(" | "),a("a",{attrs:{href:"https://www.apache.org/security/"}},[this._v("Security")]),this._v(" | "),a("a",{attrs:{href:"https://www.apache.org/foundation/thanks.html"}},[this._v("Thanks")]),this._v(" | "),a("a",{attrs:{href:"https://www.apache.org/foundation/sponsorship.html"}},[this._v("Sponsorship")])])}],!1,null,null,null);a.a=n.exports},353:function(t,a,e){"use strict";e(316)},355:function(t,a,e){"use strict";e(317)},401:function(t,a,e){"use strict";e(94);var s=e(314),i=e(348),n=e(354),r=e.n(n),c={name:"Home",components:{NavLink:s.a,CustomFooter:i.a},mounted:function(){["scene","scene-bg"].forEach((function(t){return new r.a(document.getElementById(t))}))},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}},moreActionLink:function(){return{link:this.data.structure.actionLink,text:this.data.structure.actionText}}}},o=(e(355),e(42)),l=Object(o.a)(c,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[e("header",{staticClass:"hero"},[e("div",{attrs:{id:"scene-bg"}},[e("img",{attrs:{src:t.$withBase(t.data.heroBgImage),"data-hover-only":"true","data-depth":"-0.2","data-relative-input":"true"}})]),t._v(" "),e("div",{staticClass:"intro"},[e("div",{staticClass:"text"},[t._l(t.data.heroText,(function(a){return e("div",{key:a,staticClass:"title"},[t._v("\n          "+t._s(a||t.$title)+"\n        ")])})),t._v(" "),null!==t.data.tagline?e("div",{staticClass:"description"},[t._v("\n          "+t._s(t.data.tagline||t.$description)+"\n        ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()],2),t._v(" "),e("div",{staticClass:"image",attrs:{id:"scene"}},[e("img",{attrs:{src:t.$withBase(t.data.heroImage),"data-hover-only":"true","data-depth":"0.3","data-relative-input":"true"}})])])]),t._v(" "),e("div",{staticClass:"structure wrapper"},[e("div",{staticClass:"image"},[t.data.structure.image?e("img",{attrs:{src:t.$withBase(t.data.structure.image),alt:"structure"}}):t._e()]),t._v(" "),e("div",{staticClass:"text"},[e("div",{staticClass:"title"},[t._v("\n        "+t._s(t.data.structure.title)+"\n      ")]),t._v(" "),e("div",{staticClass:"sub-title"},[t._v("\n        "+t._s(t.data.structure.subTitle)+"\n      ")]),t._v(" "),t._l(t.data.structure.descriptions,(function(a){return e("div",{key:a,staticClass:"description"},[t._v("\n        "+t._s(a)+"\n      ")])})),t._v(" "),e("NavLink",{staticClass:"action-button",attrs:{item:t.moreActionLink}})],2)]),t._v(" "),t.data.features?e("div",{staticClass:"features"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"title"},[t._v("\n        "+t._s(t.data.features.title)+"\n      ")]),t._v(" "),e("div",{staticClass:"sub-title"},[t._v("\n        "+t._s(t.data.features.subTitle)+"\n      ")]),t._v(" "),e("div",{staticClass:"list"},t._l(t.data.features.list,(function(a,s){return e("div",{key:s,staticClass:"feature"},[e("div",{staticClass:"icon-card"},[a.icon?e("img",{attrs:{src:t.$withBase(a.icon),alt:"feature"}}):t._e()]),t._v(" "),e("div",{staticClass:"label"},[t._v("\n            "+t._s(a.title)+"\n          ")])])})),0)])]):t._e(),t._v(" "),t.data.cases?e("div",{staticClass:"wrapper cases"},[e("div",{staticClass:"title"},[t._v("\n      "+t._s(t.data.cases.title)+"\n    ")]),t._v(" "),e("div",{staticClass:"sub-title"},[t._v("\n      "+t._s(t.data.cases.subTitle)+"\n    ")]),t._v(" "),e("div",{staticClass:"list"},t._l(t.data.cases.list,(function(a,s){return e("div",{key:s,staticClass:"case"},[a.logo?e("img",{attrs:{src:t.$withBase(a.logo),alt:a.alt}}):t._e()])})),0)]):t._e(),t._v(" "),e("footer",{staticClass:"footer"},[e("CustomFooter")],1)])}),[],!1,null,null,null);a.a=l.exports},405:function(t,a,e){"use strict";e.r(a);e(169),e(94),e(95),e(43),e(65),e(96);var s=e(400),i=e(348),n=e(380),r=e.n(n),c={components:{ParentLayout:s.a,CustomFooter:i.a},data:function(){return{renderIndex:0}},mounted:function(){var t=this;r.a.get("/versions.json").then((function(a){Object.keys(t.$site.themeConfig.locales).forEach((function(e){t.$site.themeConfig.locales[e].nav=t.$site.themeConfig.locales[e].nav.concat(a.data[e.replace(/\//gi,"")]||[])})),t.renderIndex=1})).catch((function(a){t.renderIndex=1,console.log(a)}))}},o=e(42),l=Object(o.a)(c,(function(){var t=this.$createElement,a=this._self._c||t;return a("ParentLayout",{key:this.renderIndex},[a("Content"),this._v(" "),a("footer",{attrs:{slot:"page-bottom"},slot:"page-bottom"},[a("CustomFooter")],1)],1)}),[],!1,null,null,null);a.default=l.exports}}]);