(window.atlassianWebpackJsonp443cd0279e0da119d0d4637a8a554bda=window.atlassianWebpackJsonp443cd0279e0da119d0d4637a8a554bda||[]).push([[5],{779:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(619),s=a(612),c=a(622),r=a(778),i=a(57);const p=(e,t,a)=>{let n=[];return null!==e&&(console.log("values",e),e.map(e=>{console.log("item",e.name),n.push({cells:[{key:e.name,content:e.name,isSortable:!0},{key:e.name+e.status,content:l.a.createElement("div",{style:{marginLeft:"45px"}},l.a.createElement(r.a,{value:"1",name:"checkbox-basic",isDisabled:a,defaultChecked:e.status,onChange:a=>{t(a.currentTarget.checked,e)}})),isSortable:!0}],key:e.name+e.status})})),n},u={head:{cells:[{key:"head key1",content:l.a.createElement("h5",{style:{color:Object(i.a)("color.text")}},"Group"),width:84,shouldTruncate:!0},{key:"head key2",content:l.a.createElement("h5",{style:{color:Object(i.a)("color.text")}},"Insights "),colSpan:20,shouldTruncate:!0}]}},m={head:{cells:[{key:"head key1",width:42,content:l.a.createElement("h5",{style:{color:Object(i.a)("color.text")}},"Name")},{key:"head key2",content:l.a.createElement("h5",{style:{color:Object(i.a)("color.text")}},"Key"),width:42},{key:"head key2",content:l.a.createElement("h5",{style:{color:Object(i.a)("color.text")}},"Operations")}]}};var d=a(218),g=a(668),h=a.n(g),y=a(139),f=a.n(y),E=(a(151),a(294)),b=a(654);const k=e=>{const[t,a]=Object(n.useState)(0),[o,s]=Object(n.useState)(1);return Object(n.useEffect)(()=>{a(p(e.data,e.onChangecheck,e.ButtonState)),console.log("actual syn",t),console.log("calling before transform")},[e.data,e.onChangecheck,e.ButtonState]),l.a.createElement(E.a,{head:e.head,rows:t,rowsPerPage:5,isLoading:e.loading,onSetPage:t=>{a(p(e.data,e.onChangecheck,e.ButtonState)),s(t)},page:o,emptyView:l.a.createElement("h6",{style:{color:Object(i.a)("color.text")}},"No matching records found")})},w=e=>{let t=((e,t,a)=>{let n=e=>{if(window.location.search&&new RegExp(e+"=([^&]*)").exec(window.location.search)){var t=new RegExp(e+"=([^&]*)").exec(window.location.search)[1];return decodeURIComponent(t)}return""},o=n("xdm_e")+n("cp"),s=[];return null!==e&&(console.log("values",e),e.map(e=>{console.log(e),s.push({cells:[{key:e.key,content:e.name,isSortable:!0},{key:e.key,content:e.key,isSortable:!0},{key:e.key,content:l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:o+"/plugins/atlassian-connect/space-tools-tab.action?key="+e.key+"&addonKey=com.view26.pageview-insights.spaces.confluence&moduleKey=view26-insights-permission"}," ","Manage Permissions"),isSortable:!0}],key:e.key})})),s})(e.data);return l.a.createElement(b.a,{head:e.head,rows:t,rowsPerPage:5,isLoading:e.loading,emptyView:l.a.createElement("h6",{style:{color:Object(i.a)("color.text")}},"No matching records found")})};var v,S,O=a(103),j=a(663),x=a.n(j);function T(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}t.default=()=>{const[e,t]=Object(n.useState)(null),[a,r]=Object(n.useState)(!0),[p,g]=Object(n.useState)(!1),[y,E]=Object(n.useState)("None"),[b,P]=Object(n.useState)(),[C,I]=Object(n.useState)(null),[R,A]=Object(n.useState)(null),[N,z]=Object(n.useState)(!0),[G,J]=Object(n.useState)(!0);let L=0,B=0,q=0,D=0;const F=e=>(console.log("refunction",e),new Promise((function(t,a){window.AP.request("/rest/api/group?start="+e,{contentType:"application/json; charset=utf-8",type:"GET",success:function(e){let a=JSON.parse(e),n=a.limit;L+=a.size,console.log("limit refunction",B,L,n),t(B<=L?a.results.slice():F(n))},error:function(e){a(JSON.parse(e))}})})));Object(n.useEffect)(()=>{x.a.asApp().requestConfluence(Object(j.route)(v||(v=T(["/rest/api/group?start=0"]))),{contentType:"application/json; charset=utf-8",type:"GET",success:async function(e){let t=JSON.parse(e);B=t.size;let a=t.limit;L+=a;let n=t.results.slice();if(B>L){(await F(a)).forEach(e=>{n.push(e)})}console.log("final result",n),t.results.splice(0,t.results.length),n.forEach((function(e,a){t.results.push({key:e.name,name:e.name,type:e.type,profilePicURL:"/app/favicon.png"})})),console.log("response result",t.results)}}),x.a.asApp().requestConfluence(Object(j.route)(S||(S=T(["/rest/api/space?start=0"]))),{contentType:"application/json; charset=utf-8",type:"GET",success:async function(e){let t=JSON.parse(e);D=t.size;let a=t.limit;q+=a;let n=t.results.slice();if(t.results.splice(0,t.results.length),D>q){(await(e=>(console.log("refunction",e),new Promise((function(t,a){window.AP.request("/rest/api/space?start="+e,{contentType:"application/json; charset=utf-8",type:"GET",success:function(e){let a=JSON.parse(e),n=a.limit;q+=a.size,console.log("limit refunction",D,q,n),t(D<=q?a.results.slice():F(n))},error:function(e){a(JSON.parse(e))}})}))))(a)).forEach(e=>{n.push(e)})}console.log("actual results",n),n.forEach((function(e,a){t.results.push({key:e.key,name:e.name,type:e._links.self,profilePicURL:"/app/favicon.png"})})),console.log("results of space",t),I(t.results),J(!1)}})},[]);let U=t=>{if(t===b){let a=[];e.map(e=>{e.status&&(console.log("element with true",e),a.push({key:e.name,name:e.name,type:"group",profilePicURL:"/app/favicon.png"}))});let n={permissions:a,spaceOverGlobal:!t};console.log("spacepermsiion payload",n),P(!t)}};return l.a.createElement(O.e,null,l.a.createElement("div",{style:{padding:25},className:"ac-content"},l.a.createElement("h3",null,"Global Permissions"),l.a.createElement("div",{style:{paddingTop:"10px",display:"flex",flexDirection:"row",justifyContent:"space-between"}},l.a.createElement("p",null,"Grant access to Insights for all the members of a group."),l.a.createElement("div",null,l.a.createElement(d.a,{onClick:()=>{if(a)r(!1);else{r(!0);let t=[];console.log("Table state inside button click",e),e.map(e=>{e.status&&(console.log("element wit true",e),t.push({key:e.name,name:e.name,type:"group",profilePicURL:"/app/favicon.png"}))}),console.log("permission change request payload",t)}},appearance:a?"default":"primary"},a?"Edit Settings":"Save Settings"))),l.a.createElement("div",{style:{marginTop:"5px"}},l.a.createElement(k,{head:u.head,data:e,onChangecheck:(a,n)=>{let l=e;if(a)a&&(o=l.findIndex(e=>e.name===n.name),l[o]={name:n.name,status:!0},t(l));else{var o=l.findIndex(e=>e.name===n.name);l[o]={name:n.name,status:!1},t(l)}},ButtonState:a,loading:N}),l.a.createElement("h3",null,"Space Permissions"),l.a.createElement("div",{style:{marginTop:"30px",alignSelf:"center"}},l.a.createElement(o.a,{trigger:l.a.createElement("div",null,b?l.a.createElement(n.Fragment,null,l.a.createElement(f.a,{primaryColor:"red",size:"small"})," If specified, space permission overrides global permission scheme"):l.a.createElement(n.Fragment,null,l.a.createElement(h.a,{primaryColor:"green",size:"small"})," ","Allow global permission scheme to be applied to all Spaces")),boundariesElement:"window",shouldFitContainer:"false",triggerType:"button"},l.a.createElement(s.a,{id:"asda",title:"Options"},l.a.createElement(c.a,{elemBefore:l.a.createElement(h.a,{primaryColor:"green",size:"small"}),style:{color:Object(i.a)("color.text")},onClick:()=>U(!0)},"Allow global permission scheme to be applied to all Spaces"),l.a.createElement(c.a,{elemBefore:l.a.createElement(f.a,{primaryColor:"red",size:"small"}),onClick:()=>U(!1),style:{color:Object(i.a)("color.text")}},"If specified, space permission overrides global permission scheme")))),l.a.createElement("div",{style:{paddingTop:"10px",marginTop:"30px",color:Object(i.a)("color.text")}},"Further restrict who can use",l.a.createElement("span",{style:{fontWeight:"bold"}}," Insights ")," at a space level."),l.a.createElement("div",{style:{marginTop:"5px"}},l.a.createElement(w,{head:m.head,data:C,loading:G})),l.a.createElement("div",null,l.a.createElement("h3",null,"REST API Token"),l.a.createElement("div",{style:{paddingTop:"10px"}},"Your API key can be used to authenticate you when using the REST API. To use the API key refer to"," ",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://docs-view26.atlassian.net/wiki/spaces/PVIFC/pages/474972171/REST+API"}," ","REST API documentation.")),l.a.createElement("div",{style:{paddingTop:"10px",display:"flex",flexDirection:"row",justifyContent:"space-between"}},l.a.createElement("div",{style:{paddingRight:"50px"}},p?l.a.createElement("div",null," Token ID: ",y):l.a.createElement("div",null," Token ID: ",y," ")),l.a.createElement("div",{style:{alignContent:"flex-end"}},l.a.createElement(d.a,{onClick:()=>{p&&(g(!1),E("None"))}},p?l.a.createElement("div",null,"Revoke "):l.a.createElement("div",null,"Generate "))))))))}}}]);