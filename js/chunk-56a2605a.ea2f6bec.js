(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56a2605a"],{1006:function(t,e,i){"use strict";var a=i("d6ad"),s=i.n(a);s.a},1681:function(t,e,i){},"297c":function(t,e,i){"use strict";i("a9e3");var a=i("2b0e"),s=i("37c6");e["a"]=a["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(s["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"37c6":function(t,e,i){"use strict";i("a9e3"),i("c7cd");var a=i("5530"),s=i("ade3"),n=(i("6ece"),i("0789")),r=i("a9ad"),o=i("fe6c"),c=i("a452"),l=i("7560"),u=i("80d2"),h=i("58df"),d=Object(h["a"])(r["a"],Object(o["b"])(["absolute","fixed","top","bottom"]),c["a"],l["a"]),m=d.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(u["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(u["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(s["a"])(t,this.isReversed?"right":"left",Object(u["f"])(this.normalizedValue,"%")),Object(s["a"])(t,"width",Object(u["f"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(a["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?n["b"]:n["c"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(u["f"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(u["l"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(s["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),i=e.width;this.internalValue=t.offsetX/i*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(u["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});e["a"]=m},"615b":function(t,e,i){},6180:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contact"},[i("v-snackbar",{attrs:{timeout:4e3,top:"",right:""},model:{value:t.success,callback:function(e){t.success=e},expression:"success"}},[t._v(" "+t._s(t.text)+" "),i("v-btn",{staticStyle:{float:"right"},attrs:{color:"error",small:"",text:""},on:{click:function(e){t.success=!1}}},[t._v(" Close ")])],1),i("v-snackbar",{attrs:{timeout:4e3,top:"",right:""},model:{value:t.err,callback:function(e){t.err=e},expression:"err"}},[t._v(" "+t._s(t.error)+" "),i("v-btn",{staticStyle:{float:"right"},attrs:{color:"error",small:"",text:""},on:{click:function(e){t.err=!1}}},[t._v(" Close ")])],1),i("v-container",[i("h3",{staticClass:"head text-center"},[t._v("Contact Us")]),i("p",{staticClass:"sub text-center pink--text lighten-2 text-capitalize"},[t._v(" what can we do for you today? ")]),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",sm4:"",md5:""}}),i("v-flex",{attrs:{xs12:"",sm8:"",md7:""}},[i("v-card",{staticClass:"ma-2 pa-5 form  wow fadeInLeft ",attrs:{"data-wow-duration":"0.5s","data-wow-delay":"0.5s"}},[i("v-form",{staticClass:"py-2",on:{submit:function(t){t.preventDefault()}}},[i("v-text-field",{attrs:{label:"name",dense:"",outlined:"",color:"pink lighten-2","append-icon":"mdi-face"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),i("v-text-field",{attrs:{outlined:"",dense:"",type:"email",label:"email",color:"pink lighten-2","append-icon":"mdi-email-outline"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),i("v-text-field",{attrs:{outlined:"",dense:"",type:"text",label:"subject",color:"pink lighten-2","append-icon":"mdi-book-outline"},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}}),i("v-textarea",{attrs:{dense:"",autocomplete:"",label:"message",rows:"6","no-resize":"",outlined:"",color:"pink lighten-2","append-icon":"mdi-pencil"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),i("v-btn",{staticClass:"pink lighten-2 white--text",attrs:{block:"",color:"",tile:"",loading:t.loading},on:{click:t.submit}},[i("span",{attrs:{left:""}},[t._v("send")]),i("v-icon",{attrs:{small:"",right:""}},[t._v("mdi-send")])],1)],1)],1)],1)],1),i("v-layout",{attrs:{row:"",wrap:""}})],1),i("v-btn",{attrs:{fab:"",fixed:"",right:"",bottom:"",small:"",color:"pink lighten-2",router:"",href:"https://api.whatsapp.com/send?phone=254732894414&text=Hi%20there%2C\n%20i%20am%20a%20client%20intrested%20in%20your%20products%20can%20we%20talk..."}},[i("v-icon",{attrs:{color:"white"}},[t._v("mdi-message-outline")])],1),i("foot")],1)},s=[],n=(i("b0c0"),i("d3b7"),i("40c1")),r=function(){return i.e("chunk-67498a21").then(i.bind(null,"076e"))},o=n["a"].firestore(),c={components:{foot:r},name:"contact",metaInfo:{titleTemplate:"%s | contact us"},data:function(){return{name:"",email:"",subject:"",message:"",error:"",err:!1,loading:!1,success:!1,text:"",date:(new Date).toISOString()}},methods:{submit:function(){var t=this;""==!this.name&&""==!this.email&&""==!this.message&&""==!this.subject?(this.loading=!0,o.collection("emails").doc().set({name:this.name,email:this.email,message:this.message,subject:this.subject,date:this.date}).then((function(){t.loading=!1,console.log("Document successfully written!"),t.success=!0,t.text="Email has been sent successfuly.",t.name="",t.email="",t.message="",t.subject=""})).catch((function(){t.success=!0,t.text="An error occured while sending the mail."}))):(this.error="Input all fields!!",this.err=!0,this.loading=!1)}}},l=c,u=(i("1006"),i("2877")),h=i("6544"),d=i.n(h),m=i("8336"),f=i("b0af"),v=i("a523"),p=i("0e8f"),g=i("4bd4"),b=i("132d"),k=i("a722"),_=(i("caad"),i("a9e3"),i("ade3")),y=(i("ca71"),i("8dd9")),w=i("a9ad"),x=i("7560"),B=i("f2e7"),C=i("fe6c"),j=i("58df"),O=i("80d2"),$=i("d9bd"),z=Object(j["a"])(y["a"],w["a"],B["a"],Object(C["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:x["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,i=t.bottom,a=t.footer,s=t.insetFooter,n=t.left,r=t.right,o=t.top;return{paddingBottom:Object(O["f"])(i+a+s),paddingLeft:this.app?Object(O["f"])(n):void 0,paddingRight:this.app?Object(O["f"])(r):void 0,paddingTop:Object(O["f"])(e+o)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object($["e"])("auto-height",this),0==this.timeout&&Object($["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(O["l"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(_["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(O["l"])(this)])},genWrapper:function(){var t=this.hasBackground?this.setBackgroundColor:this.setTextColor,e=t(this.color,{staticClass:"v-snack__wrapper",class:y["a"].options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}]});return this.$createElement("div",e,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),S=i("8654"),T=i("5530"),V=(i("1681"),Object(j["a"])(S["a"])),I=V.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(T["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},S["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"}},genInput:function(){var t=S["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){S["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),E=Object(u["a"])(l,a,s,!1,null,"322b87a1",null);e["default"]=E.exports;d()(E,{VBtn:m["a"],VCard:f["a"],VContainer:v["a"],VFlex:p["a"],VForm:g["a"],VIcon:b["a"],VLayout:k["a"],VSnackbar:z,VTextField:S["a"],VTextarea:I})},"6ece":function(t,e,i){},"90a2":function(t,e,i){"use strict";i("7db0");var a=i("53ca");function s(t,e){var i=e.modifiers||{},s=e.value,r="object"===Object(a["a"])(s)?s:{handler:s,options:{}},o=r.handler,c=r.options,l=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;if(t._observe){if(o&&(!i.quiet||t._observe.init)){var s=Boolean(e.find((function(t){return t.isIntersecting})));o(e,a,s)}t._observe.init&&i.once?n(t):t._observe.init=!0}}),c);t._observe={init:!1,observer:l},l.observe(t)}function n(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var r={inserted:s,unbind:n};e["a"]=r},b0af:function(t,e,i){"use strict";i("0481"),i("4069"),i("a9e3");var a=i("5530"),s=(i("615b"),i("10d2")),n=i("297c"),r=i("1c87"),o=i("58df");e["a"]=Object(o["a"])(n["a"],r["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-card":!0},r["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},s["a"].options.computed.classes.call(this))},styles:function(){var t=Object(a["a"])({},s["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=n["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,a=e.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})},ca71:function(t,e,i){},d6ad:function(t,e,i){}}]);
//# sourceMappingURL=chunk-56a2605a.ea2f6bec.js.map