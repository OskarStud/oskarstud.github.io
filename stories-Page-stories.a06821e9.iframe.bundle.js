(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[62],{"./src/stories/Page.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoggedIn:()=>LoggedIn,LoggedOut:()=>LoggedOut,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Page_stories});var esm=__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js"),react=__webpack_require__("./node_modules/react/index.js"),Header=__webpack_require__("./src/stories/Header.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),page=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/stories/page.css"),options={};function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(page.Z,options),page.Z&&page.Z.locals&&page.Z.locals;var Page=function(){var _React_useState=_sliced_to_array(react.useState(),2),user=_React_useState[0],setUser=_React_useState[1];return react.createElement("article",null,react.createElement(Header.h,{user:user,onLogin:function(){return setUser({name:"Jane Doe"})},onLogout:function(){return setUser(void 0)},onCreateAccount:function(){return setUser({name:"Jane Doe"})}}),react.createElement("section",{className:"storybook-page"},react.createElement("h2",null,"Pages in Storybook"),react.createElement("p",null,"We recommend building UIs with a"," ",react.createElement("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer"},react.createElement("strong",null,"component-driven"))," ","process starting with atomic components and ending with pages."),react.createElement("p",null,"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"),react.createElement("ul",null,react.createElement("li",null,"Use a higher-level connected component. Storybook helps you compose such data from the args of child component stories"),react.createElement("li",null,"Assemble data in the page component from your services. You can mock these services out using Storybook.")),react.createElement("p",null,"Get a guided tutorial on component-driven development at"," ",react.createElement("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer"},"Storybook tutorials"),". Read more in the"," ",react.createElement("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer"},"docs"),"."),react.createElement("div",{className:"tip-wrapper"},react.createElement("span",{className:"tip"},"Tip")," Adjust the width of the canvas with the"," ",react.createElement("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},react.createElement("g",{fill:"none",fillRule:"evenodd"},react.createElement("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"}))),"Viewports addon in the toolbar")))};try{Page.displayName="Page",Page.__docgenInfo={description:"",displayName:"Page",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Page.tsx#Page"]={docgenInfo:Page.__docgenInfo,name:"Page",path:"src/stories/Page.tsx#Page"})}catch(__react_docgen_typescript_loader_error){}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){reject(error);return}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self1=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self1,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)})}}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=(t=_.trys).length>0&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}}let Page_stories={title:"Example/Page",component:Page,parameters:{layout:"fullscreen"}};var LoggedOut={},LoggedIn={play:function(){var _ref=_async_to_generator(function(param){var canvasElement,loginButton;return _ts_generator(this,function(_state){switch(_state.label){case 0:return canvasElement=param.canvasElement,[4,(0,esm.uh)(canvasElement).getByRole("button",{name:/Log in/i})];case 1:return loginButton=_state.sent(),[4,esm.mV.click(loginButton)];case 2:return _state.sent(),[2]}})});return function(_){return _ref.apply(this,arguments)}}()};LoggedOut.parameters={...LoggedOut.parameters,docs:{...LoggedOut.parameters?.docs,source:{originalSource:"{}",...LoggedOut.parameters?.docs?.source}}},LoggedIn.parameters={...LoggedIn.parameters,docs:{...LoggedIn.parameters?.docs,source:{originalSource:"{\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const loginButton = await canvas.getByRole('button', {\n      name: /Log in/i\n    });\n    await userEvent.click(loginButton);\n  }\n}",...LoggedIn.parameters?.docs?.source}}};let __namedExportsOrder=["LoggedOut","LoggedIn"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/stories/header.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.storybook-header {
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.storybook-header svg {
    display: inline-block;
    vertical-align: top;
}

.storybook-header h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
    margin: 6px 0 6px 10px;
    display: inline-block;
    vertical-align: top;
}

.storybook-header button + button {
    margin-left: 10px;
}

.storybook-header .welcome {
    color: #333;
    font-size: 14px;
    margin-right: 10px;
}
`,"",{version:3,sources:["webpack://./src/stories/header.css"],names:[],mappings:"AAAA;IACI,0EAA0E;IAC1E,2CAA2C;IAC3C,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,cAAc;IACd,sBAAsB;IACtB,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,kBAAkB;AACtB",sourcesContent:[".storybook-header {\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    padding: 15px 20px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.storybook-header svg {\n    display: inline-block;\n    vertical-align: top;\n}\n\n.storybook-header h1 {\n    font-weight: 700;\n    font-size: 20px;\n    line-height: 1;\n    margin: 6px 0 6px 10px;\n    display: inline-block;\n    vertical-align: top;\n}\n\n.storybook-header button + button {\n    margin-left: 10px;\n}\n\n.storybook-header .welcome {\n    color: #333;\n    font-size: 14px;\n    margin-right: 10px;\n}\n"],sourceRoot:""}]);let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/stories/page.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.storybook-page {
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 24px;
    padding: 48px 20px;
    margin: 0 auto;
    max-width: 600px;
    color: #333;
}

.storybook-page h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 1;
    margin: 0 0 4px;
    display: inline-block;
    vertical-align: top;
}

.storybook-page p {
    margin: 1em 0;
}

.storybook-page a {
    text-decoration: none;
    color: #1ea7fd;
}

.storybook-page ul {
    padding-left: 30px;
    margin: 1em 0;
}

.storybook-page li {
    margin-bottom: 8px;
}

.storybook-page .tip {
    display: inline-block;
    border-radius: 1em;
    font-size: 11px;
    line-height: 12px;
    font-weight: 700;
    background: #e7fdd8;
    color: #66bf3c;
    padding: 4px 12px;
    margin-right: 10px;
    vertical-align: top;
}

.storybook-page .tip-wrapper {
    font-size: 13px;
    line-height: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
}

.storybook-page .tip-wrapper svg {
    display: inline-block;
    height: 12px;
    width: 12px;
    margin-right: 4px;
    vertical-align: top;
    margin-top: 3px;
}

.storybook-page .tip-wrapper svg path {
    fill: #1ea7fd;
}
`,"",{version:3,sources:["webpack://./src/stories/page.css"],names:[],mappings:"AAAA;IACI,0EAA0E;IAC1E,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,cAAc;IACd,eAAe;IACf,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,cAAc;IACd,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB",sourcesContent:[".storybook-page {\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    line-height: 24px;\n    padding: 48px 20px;\n    margin: 0 auto;\n    max-width: 600px;\n    color: #333;\n}\n\n.storybook-page h2 {\n    font-weight: 700;\n    font-size: 32px;\n    line-height: 1;\n    margin: 0 0 4px;\n    display: inline-block;\n    vertical-align: top;\n}\n\n.storybook-page p {\n    margin: 1em 0;\n}\n\n.storybook-page a {\n    text-decoration: none;\n    color: #1ea7fd;\n}\n\n.storybook-page ul {\n    padding-left: 30px;\n    margin: 1em 0;\n}\n\n.storybook-page li {\n    margin-bottom: 8px;\n}\n\n.storybook-page .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #e7fdd8;\n    color: #66bf3c;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n}\n\n.storybook-page .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n}\n\n.storybook-page .tip-wrapper svg {\n    display: inline-block;\n    height: 12px;\n    width: 12px;\n    margin-right: 4px;\n    vertical-align: top;\n    margin-top: 3px;\n}\n\n.storybook-page .tip-wrapper svg path {\n    fill: #1ea7fd;\n}\n"],sourceRoot:""}]);let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/stories/Header.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>Header});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),header=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/stories/header.css"),options={};function Header(param){var user=param.user;return param.onLogin,param.onLogout,param.onCreateAccount,react.createElement("header",null,react.createElement("div",{className:"storybook-header"},react.createElement("div",null,react.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},react.createElement("g",{fill:"none",fillRule:"evenodd"},react.createElement("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),react.createElement("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),react.createElement("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"}))),react.createElement("h1",null,"Acme")),react.createElement("div",null,user?react.createElement(react.Fragment,null,react.createElement("span",{className:"welcome"},"Welcome, ",react.createElement("b",null,user.name),"!")):react.createElement(react.Fragment,null))))}options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(header.Z,options),header.Z&&header.Z.locals&&header.Z.locals;try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"User"}},onLogin:{defaultValue:null,description:"",name:"onLogin",required:!0,type:{name:"() => void"}},onLogout:{defaultValue:null,description:"",name:"onLogout",required:!0,type:{name:"() => void"}},onCreateAccount:{defaultValue:null,description:"",name:"onCreateAccount",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/stories/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}},"?4f7e":()=>{}}]);
//# sourceMappingURL=stories-Page-stories.a06821e9.iframe.bundle.js.map