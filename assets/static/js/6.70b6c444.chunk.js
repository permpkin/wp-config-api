(this["webpackJsonpwp-factory"]=this["webpackJsonpwp-factory"]||[]).push([[6],{257:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(3),r=a(0),c=a.n(r),l=a(6),o=["M3.25 10.26l2.47 2.47 6.69-6.69-2.46-2.48-6.7 6.7zM.99 14.99l3.86-1.39-2.46-2.44-1.4 3.83zm12.25-14c-.48 0-.92.2-1.24.51l-1.44 1.44 2.47 2.47 1.44-1.44c.32-.32.51-.75.51-1.24.01-.95-.77-1.74-1.74-1.74z"],s=["M4.59 12.59l2.83 2.83 7.65-7.65-2.83-2.83-7.65 7.65zM2 18l4.41-1.59-2.81-2.79L2 18zM16 2c-.55 0-1.05.22-1.41.59l-1.65 1.65 2.83 2.83 1.65-1.65A2.006 2.006 0 0016 2z"],u=Object(r.memo)(Object(r.forwardRef)((function(e,t){return c.a.createElement(l.a,Object(n.a)({svgPaths16:o,svgPaths20:s,ref:t,name:"edit"},e))})))},259:function(e,t,a){"use strict";a.r(t);var n=a(39),r=a.n(n),c=a(46),l=a(9),o=a(10),s=a(11),u=a(13),i=a(0),m=a.n(i),p=a(70),h=a(19),f=a(47),y=a(26),d=a(58),b=a(257),E=a(236),k=a(187),v=a(252),g=a(30),w=a(38),j=a(184),z=a(238),D=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={schemaLabel:"...",tableCols:[{label:"Key",key:"key"}],tableData:[],supportsTemplates:!1,ready:!1},e.mounted=!1,e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.mounted=!0,this.updateTableData()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"updateTableData",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t,a=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.mounted){e.next=2;break}return e.abrupt("return");case 2:y.a.getSchema(this.props.schemaKey).then((function(e){e.documentation,e.schema;var t=e.supportsTemplates,n=e.table;y.a.getValue(a.props.schemaKey).then((function(e){var r=n.columns,c=[];e.forEach((function(e,t){var r={};n.columns.forEach((function(t){r[t.key]=function(){if(void 0!==e[t.key])switch(t.type){case"key":return m.a.createElement(h.b,{key:e[t.key],to:"".concat(a.props.match.url,"/").concat(e.key)},m.a.createElement(d.a,{appearance:"minimal",iconBefore:b.a},e[t.key]));case"boolean":return!0===e[t.key]?m.a.createElement(E.a,null):m.a.createElement(k.a,null);case"dependency[]":return e[t.key].map((function(e,t){return m.a.createElement(v.a,{key:t,color:"neutral",marginRight:3},"string"===typeof e?e:"".concat(e.id,"@").concat(e.version))}));case"string[]":return m.a.createElement(g.a,null,e[t.key].join(", "));default:return m.a.createElement(g.a,null,e[t.key].toString())}}()})),c.push(r)})),a.mounted&&a.setState({supportsTemplates:t||!1,tableCols:r,tableData:c,ready:!0})}))})),(null===(t=this.props)||void 0===t?void 0:t.searchNested)&&console.log("SEARCH_NESTED_FIELDS");case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return m.a.createElement("article",null,m.a.createElement(w.a,{display:"flex",padding:".5em",background:"tint2"},m.a.createElement(w.a,{flex:1,alignItems:"center",display:"flex"},m.a.createElement(j.a,{textTransform:"capitalize",size:600},this.props.schemaKey)),m.a.createElement(w.a,null,m.a.createElement(h.b,{to:"".concat(this.props.match.url,"/new")},m.a.createElement(d.a,{appearance:"minimal",iconBefore:z.a},"Add New")))),m.a.createElement(w.a,null,this.state.ready?m.a.createElement(p.a,{emptyMsg:"No ".concat(this.props.schemaKey),cols:this.state.tableCols,rows:this.state.tableData}):m.a.createElement(f.a,null)))}}]),a}(i.Component);t.default=D}}]);
//# sourceMappingURL=6.70b6c444.chunk.js.map