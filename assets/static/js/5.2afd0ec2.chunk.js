(this["webpackJsonpwp-factory"]=this["webpackJsonpwp-factory"]||[]).push([[5],{256:function(e,t,a){"use strict";var n=a(9),r=a(10),s=a(11),o=a(13),i=a(0),c=a.n(i),u=a(2),l=a(3),m=a(30);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var v=Object(i.memo)(Object(i.forwardRef)((function(e,t){return c.a.createElement(m.a,Object(l.a)({is:"pre",marginTop:0,marginBottom:0},e,{ref:t}))})));v.propTypes=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},m.a.propTypes);var f=v,d=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={codeString:e.codeString||"{}"},r}return Object(r.a)(a,[{key:"render",value:function(){return console.log(this.state,this.props),c.a.createElement(f,{minHeight:"100%"},c.a.createElement("code",null,this.state.codeString))}}]),a}(i.Component);t.a=d},257:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(3),r=a(0),s=a.n(r),o=a(6),i=["M3.25 10.26l2.47 2.47 6.69-6.69-2.46-2.48-6.7 6.7zM.99 14.99l3.86-1.39-2.46-2.44-1.4 3.83zm12.25-14c-.48 0-.92.2-1.24.51l-1.44 1.44 2.47 2.47 1.44-1.44c.32-.32.51-.75.51-1.24.01-.95-.77-1.74-1.74-1.74z"],c=["M4.59 12.59l2.83 2.83 7.65-7.65-2.83-2.83-7.65 7.65zM2 18l4.41-1.59-2.81-2.79L2 18zM16 2c-.55 0-1.05.22-1.41.59l-1.65 1.65 2.83 2.83 1.65-1.65A2.006 2.006 0 0016 2z"],u=Object(r.memo)(Object(r.forwardRef)((function(e,t){return s.a.createElement(o.a,Object(n.a)({svgPaths16:i,svgPaths20:c,ref:t,name:"edit"},e))})))},270:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(21),s=a(39),o=a.n(s),i=a(46),c=a(9),u=a(10),l=a(12),m=a(11),h=a(13),v=a(0),f=a.n(v),d=a(59),p=a(26),y=a(256),b=a(47),g=a(244),O=a(38),E=a(58),S=a(239),j=a(236),D=a(257),w=a(3),k=a(6),B=["M14.49 3.99h-13c-.28 0-.5.22-.5.5s.22.5.5.5h.5v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-10h.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zm-8.5 9c0 .55-.45 1-1 1s-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v6zm3 0c0 .55-.45 1-1 1s-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v6zm3 0c0 .55-.45 1-1 1s-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v6zm2-12h-4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1h-4c-.55 0-1 .45-1 1v1h14v-1c0-.55-.45-1-1-1z"],z=["M17 1h-5c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1H3c-.55 0-1 .45-1 1v1h16V2c0-.55-.45-1-1-1zm.5 3h-15c-.28 0-.5.22-.5.5s.22.5.5.5H3v14c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5h.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zM7 16c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8zm4 0c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8zm4 0c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8z"],V=Object(v.memo)(Object(v.forwardRef)((function(e,t){return f.a.createElement(k.a,Object(w.a)({svgPaths16:B,svgPaths20:z,ref:t,name:"trash"},e))}))),C=a(90),P=a(184),J=a(185),N=a(253),M=a(205),R=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={ready:!1,busy:!0,saveBusy:!1,validateBusy:!1,isDeleteShown:!1,isShown:!1,changes:!1,formErrors:[]},n.mounted=!1,n.saveDocument=n.saveDocument.bind(Object(l.a)(n)),n.getSchemaValue=n.getSchemaValue.bind(Object(l.a)(n)),n.showJson=n.showJson.bind(Object(l.a)(n)),n.validateJson=n.validateJson.bind(Object(l.a)(n)),n.removeError=n.removeError.bind(Object(l.a)(n)),n.updateFormData=n.updateFormData.bind(Object(l.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.mounted=!0,this.getSchemaValue();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSchemaValue",value:function(){var e,t=this,a="new"===(null===(e=this.props.match)||void 0===e?void 0:e.params.id);p.a.getSchema(this.props.schemaKey).then((function(e){e.documentation;var s,o=e.schema,i=e.supportsTemplates;e.table;t.mounted&&((null===(s=t.props)||void 0===s?void 0:s.isSingular)?p.a.getValue(t.props.schemaKey):p.a.getValue(t.props.schemaKey).then((function(e){var a;return(null===(a=t.props)||void 0===a?void 0:a.isSingular)?{}:e.filter((function(e){var a;return e.key===(null===(a=t.props.match.params)||void 0===a?void 0:a.id)}))})).then((function(e){var a;return(null===(a=t.props)||void 0===a?void 0:a.isSingular)?{}:!!e.length&&e[0]}))).then((function(e){return a?{}:e})).then((function(e){if(t.mounted&&(e||a)){var s={};Object.keys(o).forEach((function(i){var c;s[i]=Object(r.a)(Object(r.a)({},o[i]),{},{key:i,errors:[],isDisabled:"key"===i&&!a,onChange:function(e,a){t.updateFormData(Object(r.a)(Object(r.a)({},t.state.formData),{},Object(n.a)({},e,Object(r.a)(Object(r.a)({},t.state.formData[e]),{},{value:a}))))},value:function(){var t;if(!(i in e)||void 0===e[i])return o[i].default||void 0;switch(null===(t=o[i])||void 0===t?void 0:t.type){case"string[]":return e[i].map((function(e){return"string"===typeof e?e:"".concat(e.id,"@").concat(e.version)}));case"keys":return function(){var t={};return Object.keys(o[i].keys).forEach((function(a){var n,r=a in e[i]?e[i][a]:null===(n=o[i][a])||void 0===n?void 0:n.default;void 0!==r&&(t[a]=r)})),t}();default:return e[i]}}()}),"repeater"===(null===(c=o[i])||void 0===c?void 0:c.type)&&(s[i].columns="columns"in s[i]?s[i].columns:[{label:"Key",key:"key"}])})),t.setState({isNew:a,supportsTemplates:i,formData:s,saveBusy:!1,busy:!1,ready:!0})}}))}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"validateJson",value:function(e){var t=this;e.preventDefault(),this.setState({validateBusy:!0}),p.a.validateValue(this.props.schemaKey,this.state.formData).then((function(e){if(t.mounted){if(null===e||void 0===e?void 0:e.errors)return g.a.danger("".concat(e.errors.length," Error(s)")),void t.setState({formErrors:e.errors,validateBusy:!1});g.a.success("Valid \ud83d\udc4d"),t.setState({validateBusy:!1})}}))}},{key:"saveDocument",value:function(e){var t=this;e.preventDefault(),this.setState({saveBusy:!0}),p.a.setValue(this.props.schemaKey,this.state.formData).then((function(e){if(t.mounted){if(null===e||void 0===e?void 0:e.errors)return g.a.danger("".concat(e.errors.length," Error(s)")),void t.setState({formErrors:e.errors,saveBusy:!1});g.a.success("Saved"),t.setState({saveBusy:!1}),t.getSchemaValue()}}))}},{key:"showJson",value:function(e){var t=this;e.preventDefault();var a={};Object.keys(this.state.formData).forEach((function(e){if(void 0!==t.state.formData[e].value){if(Array.isArray(t.state.formData[e].value)&&0===t.state.formData[e].value.length)return;a[e]=t.state.formData[e].value}})),this.setState({formString:JSON.stringify(a,null,4),isShown:!0})}},{key:"removeError",value:function(e){var t=this.state.formErrors.splice(e,1);t.splice(e,1),this.setState({formErrors:t})}},{key:"updateFormData",value:function(e){this.setState({formData:e,changes:!0})}},{key:"render",value:function(){var e=this;return f.a.createElement("article",null,this.state.ready?f.a.createElement("section",{className:"split-content"},f.a.createElement("div",{className:"split-content__left"},this.state.busy?f.a.createElement(b.a,null):f.a.createElement(d.a,{className:"split-content__form",data:this.state.formData})),f.a.createElement("div",{className:"split-content__right"},f.a.createElement(O.a,{padding:".5em",backgroundColor:"white",borderBottom:"muted"},f.a.createElement(E.a,{disabled:!this.state.changes,appearance:"minimal",onClick:this.saveDocument,isLoading:this.state.saveBusy,iconBefore:this.state.saveBusy?null:S.a},this.state.isNew?"Save":"Update"),f.a.createElement(E.a,{appearance:"minimal",onClick:this.validateJson,isLoading:this.state.validateBusy,iconBefore:this.state.validateBusy?null:j.a},"Validate"),f.a.createElement(E.a,{appearance:"minimal",iconBefore:D.a,onClick:this.showJson},"View Json"),this.state.isNew?null:f.a.createElement(E.a,{appearance:"minimal",intent:"danger",marginRight:".5em",iconBefore:V,onClick:function(t){t.preventDefault(),e.setState({isDeleteShown:!0})}},"Delete")),this.state.formErrors.map((function(t,a){return f.a.createElement(C.a,{isRemoveable:!0,onRemove:function(){e.removeError(a)},key:a,intent:"danger",title:t,marginBottom:15})})),f.a.createElement(O.a,{padding:"1em"},f.a.createElement(P.a,{size:400},"What is this?"),f.a.createElement(J.a,{size:400,color:"muted"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet non augue et faucibus. Ut arcu tellus, hendrerit id sem in, iaculis varius ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ac aliquet orci. Donec porta risus at nisi placerat pellentesque."))),this.state.saveBusy||this.state.validateBusy?f.a.createElement("div",{className:"content-busy"}):null):null,f.a.createElement(N.a,{isShown:this.state.isShown,onCloseComplete:function(){return e.setState({isShown:!1})}},f.a.createElement(O.a,{padding:".5em",backgroundColor:"white",borderBottom:"muted"},f.a.createElement(E.a,{disabled:!0,appearance:"minimal",iconBefore:D.a},"Edit")),f.a.createElement(y.a,{codeString:this.state.formString})),f.a.createElement(M.a,{isShown:this.state.isDeleteShown,hasHeader:!1,intent:"danger",isConfirmLoading:this.state.busy,onConfirm:function(){e.setState({busy:!0}),p.a.deleteValue(e.props.schemaKey,e.state.formData.key.value).then((function(t){e.setState({isDeleteShown:!1}),e.props.history.goBack(),g.a.success("Removed Successfully")}))},onCloseComplete:function(){return e.setState({isDeleteShown:!1,busy:!1})},confirmLabel:"Delete"},f.a.createElement(P.a,{size:600},"Are you sure?"),f.a.createElement(J.a,{size:400,color:"muted"},"Removing this ",this.props.schemaPath," may effect other components that require it.")))}}]),a}(v.Component);t.default=R}}]);
//# sourceMappingURL=5.2afd0ec2.chunk.js.map