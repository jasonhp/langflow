"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[5284],{94108:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>s,default:()=>o,frontMatter:()=>n,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"type":"api","id":"create-variable","title":"Create Variable","description":"","slug":"/create-variable","frontMatter":{},"api":{"tags":["Variables"],"description":"Create a new variable.","operationId":"create_variable_api_v1_variables__post","requestBody":{"content":{"application/json":{"schema":{"properties":{"name":{"type":"string","title":"Name","description":"Name of the variable"},"value":{"type":"string","title":"Value","description":"Encrypted value of the variable"},"default_fields":{"anyOf":[{"items":{"type":"string"},"type":"array"}],"title":"Default Fields","nullable":true},"type":{"anyOf":[{"type":"string"}],"title":"Type","description":"Type of the variable","nullable":true},"created_at":{"anyOf":[{"type":"string","format":"date-time"}],"title":"Created At","description":"Creation time of the variable","nullable":true},"updated_at":{"anyOf":[{"type":"string","format":"date-time"}],"title":"Updated At","description":"Creation time of the variable","nullable":true}},"type":"object","required":["name","value","default_fields"],"title":"VariableCreate"}}},"required":true},"responses":{"201":{"description":"Successful Response","content":{"application/json":{"schema":{"properties":{"id":{"type":"string","format":"uuid","title":"Id"},"name":{"anyOf":[{"type":"string"}],"title":"Name","description":"Name of the variable","nullable":true},"type":{"anyOf":[{"type":"string"}],"title":"Type","description":"Type of the variable","nullable":true},"value":{"anyOf":[{"type":"string"}],"title":"Value","description":"Encrypted value of the variable","nullable":true},"default_fields":{"anyOf":[{"items":{"type":"string"},"type":"array"}],"title":"Default Fields","description":"Default fields for the variable","nullable":true}},"type":"object","required":["id"],"title":"VariableRead"}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"properties":{"detail":{"items":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError"}}}}},"security":[{"OAuth2PasswordBearer":[]},{"API key query":[]},{"API key header":[]}],"method":"post","path":"/api/v1/variables/","parameters":[],"securitySchemes":{"OAuth2PasswordBearer":{"type":"oauth2","flows":{"password":{"scopes":{},"tokenUrl":"api/v1/login"}}},"API key query":{"type":"apiKey","in":"query","name":"x-api-key"},"API key header":{"type":"apiKey","in":"header","name":"x-api-key"}},"jsonRequestBodyExample":{"name":"string","value":"string"},"info":{"title":"Langflow","version":"1.1.1"},"postman":{"name":"Create Variable","description":{"content":"Create a new variable.","type":"text/plain"},"url":{"path":["api","v1","variables",""],"host":["{{baseUrl}}"],"query":[],"variable":[]},"header":[{"key":"Content-Type","value":"application/json"},{"key":"Accept","value":"application/json"}],"method":"POST","body":{"mode":"raw","raw":"{\\n  \\"name\\": \\"<string>\\",\\n  \\"value\\": \\"<string>\\",\\n  \\"default_fields\\": [\\n    \\"<string>\\",\\n    \\"<string>\\"\\n  ],\\n  \\"type\\": \\"<string>\\",\\n  \\"created_at\\": \\"<dateTime>\\",\\n  \\"updated_at\\": \\"<dateTime>\\"\\n}","options":{"raw":{"language":"json"}}},"auth":{"type":"oauth2","oauth2":[{"type":"any","value":"api/v1/login","key":"accessTokenUrl"},{"type":"any","value":"password_credentials","key":"grant_type"}]}}},"source":"@site/openapi.json","sourceDirName":".","permalink":"/api/create-variable","previous":{"title":"Read Variables","permalink":"/api/read-variables"},"next":{"title":"Update Variable","permalink":"/api/update-variable"}}');var r=i(74848),l=i(28453);const n={},s="Create Variable",d=[];function c(e){const t={h1:"h1",header:"header",p:"p",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"create-variable",children:"Create Variable"})}),"\n",(0,r.jsx)(t.p,{children:"Create a new variable."}),"\n",(0,r.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("th",{style:{textAlign:"left"},children:[(0,r.jsx)("span",{children:"Request Body "}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,r.jsx)("div",{})]})})}),(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"name"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Name"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(t.p,{children:"Name of the variable"})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"value"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Value"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(t.p,{children:"Encrypted value of the variable"})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"default_fields"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Default Fields"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"type"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Type"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(t.p,{children:"Type of the variable"})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"created_at"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Created At"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(t.p,{children:"Creation time of the variable"})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"updated_at"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Updated At"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(t.p,{children:"Creation time of the variable"})})]})})]})]}),"\n",(0,r.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)("code",{children:"201"})}),(0,r.jsx)("div",{children:(0,r.jsx)(t.p,{children:"Successful Response"})})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("th",{style:{textAlign:"left"},children:[(0,r.jsx)("span",{children:"Schema "}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{})]})})}),(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"id"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" uuid"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"name"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Name"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(t.p,{children:"Name of the variable"})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"type"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Type"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(t.p,{children:"Type of the variable"})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"value"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Value"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(t.p,{children:"Encrypted value of the variable"})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"default_fields"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Default Fields"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)(t.p,{children:"Default fields for the variable"})})]})})]})]})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)("code",{children:"422"})}),(0,r.jsx)("div",{children:(0,r.jsx)(t.p,{children:"Validation Error"})})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("th",{style:{textAlign:"left"},children:[(0,r.jsx)("span",{children:"Schema "}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{})]})})}),(0,r.jsx)("tbody",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"detail"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"loc"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"msg"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"type"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function o(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>s});var a=i(96540);const r={},l=a.createContext(r);function n(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);