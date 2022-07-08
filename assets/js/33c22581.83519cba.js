"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[299],{3267:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var a=n(5773),r=n(808),i=(n(7378),n(5318)),o=["components"],l={},s="some",m={unversionedId:"some/readme",id:"some/readme",title:"some",description:"some({ predicate: Function, stores })",source:"@site/../src/some/readme.md",sourceDirName:"some",slug:"/some/",permalink:"/methods/some/",draft:!1,editUrl:"https://github.com/effector/patronum/tree/main/src/../src/some/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"methodsSidebar",previous:{title:"snapshot",permalink:"/methods/snapshot/"},next:{title:"splitMap",permalink:"/methods/split-map/"}},u={},p=[{value:"<code>some({ predicate: Function, stores })</code>",id:"some-predicate-function-stores-",level:2},{value:"Motivation",id:"motivation",level:3},{value:"Formulae",id:"formulae",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Return",id:"return",level:3},{value:"Example",id:"example",level:3},{value:"<code>some({ predicate: value, stores })</code>",id:"some-predicate-value-stores-",level:2},{value:"Motivation",id:"motivation-1",level:3},{value:"Formulae",id:"formulae-1",level:3},{value:"Arguments",id:"arguments-1",level:3},{value:"Return",id:"return-1",level:3},{value:"Example",id:"example-1",level:3},{value:"<code>some({ predicate: Store, stores })</code>",id:"some-predicate-store-stores-",level:2},{value:"Motivation",id:"motivation-2",level:3},{value:"Formulae",id:"formulae-2",level:3},{value:"Arguments",id:"arguments-2",level:3},{value:"Return",id:"return-2",level:3},{value:"Example",id:"example-2",level:3},{value:"Shorthands",id:"shorthands",level:2},{value:"Arguments",id:"arguments-3",level:3}],d={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"some"},"some"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { some } from 'patronum/some';\n")),(0,i.kt)("h2",{id:"some-predicate-function-stores-"},(0,i.kt)("inlineCode",{parentName:"h2"},"some({ predicate: Function, stores })")),(0,i.kt)("h3",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"Method calculates boolean value if at least one state of the store satisfies the condition in ",(0,i.kt)("inlineCode",{parentName:"p"},"predicate"),".\nIt is useful to check that user filled at least a single field."),(0,i.kt)("h3",{id:"formulae"},"Formulae"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"$result = some({ predicate: (value) => true, stores });\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"read it as: has some predicate at at least one store"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$result")," will be ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if each at least ",(0,i.kt)("inlineCode",{parentName:"li"},"predicate")," on each store value from ",(0,i.kt)("inlineCode",{parentName:"li"},"values")," returns ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", otherwise it will be ",(0,i.kt)("inlineCode",{parentName:"li"},"false"))),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"predicate")," ",(0,i.kt)("inlineCode",{parentName:"li"},"((value: T) => boolean)")," \u2014 Function to check store value"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"stores")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(Array<Store<T>>)")," \u2014 List of stores")),(0,i.kt)("h3",{id:"return"},"Return"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$result")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(Store<boolean>)")," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if at least one store corresponds to ",(0,i.kt)("inlineCode",{parentName:"li"},"predicate"))),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const $width = createStore(440);\nconst $height = createStore(820);\n\nconst $tooBig = some({\n  predicate: (size) => size > 800,\n  stores: [$width, $height],\n});\n\nconsole.assert(true === $tooBig.getState());\n")),(0,i.kt)("h2",{id:"some-predicate-value-stores-"},(0,i.kt)("inlineCode",{parentName:"h2"},"some({ predicate: value, stores })")),(0,i.kt)("h3",{id:"motivation-1"},"Motivation"),(0,i.kt)("p",null,"This overload compares each store to specific value in ",(0,i.kt)("inlineCode",{parentName:"p"},"predicate"),".\nIt is useful when you write ",(0,i.kt)("inlineCode",{parentName:"p"},"combine")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"||")," very often, for example to create an invalid form flag."),(0,i.kt)("h3",{id:"formulae-1"},"Formulae"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"$result = some({ predicate: value, stores });\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$result")," will be ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if at least one value in ",(0,i.kt)("inlineCode",{parentName:"li"},"stores")," equals ",(0,i.kt)("inlineCode",{parentName:"li"},"value"),", otherwise it will be ",(0,i.kt)("inlineCode",{parentName:"li"},"false"))),(0,i.kt)("h3",{id:"arguments-1"},"Arguments"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"predicate")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(T)")," \u2014 Data to compare stores values with"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"stores")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(Array<Store<T>>)")," \u2014 List of stores to compare with ",(0,i.kt)("inlineCode",{parentName:"li"},"value")),(0,i.kt)("li",{parentName:"ol"},"type of ",(0,i.kt)("inlineCode",{parentName:"li"},"predicate")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"stores")," should should be the same")),(0,i.kt)("h3",{id:"return-1"},"Return"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$result")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(Store<boolean>)")," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if at least one store contains ",(0,i.kt)("inlineCode",{parentName:"li"},"value"))),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const $isPasswordCorrect = createStore(true);\nconst $isEmailCorrect = createStore(true);\n\nconst $isFormFailed = some({\n  predicate: false,\n  stores: [$isPasswordCorrect, $isEmailCorrect],\n});\n\nconsole.assert(false === $isFormFailed.getState());\n")),(0,i.kt)("h2",{id:"some-predicate-store-stores-"},(0,i.kt)("inlineCode",{parentName:"h2"},"some({ predicate: Store, stores })")),(0,i.kt)("h3",{id:"motivation-2"},"Motivation"),(0,i.kt)("p",null,"This overload compares each store to specific value in store ",(0,i.kt)("inlineCode",{parentName:"p"},"predicate"),".\nIt is useful when you write ",(0,i.kt)("inlineCode",{parentName:"p"},"combine")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"||")," very often, for example to create an invalid form flag."),(0,i.kt)("h3",{id:"formulae-2"},"Formulae"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"$result = some({ predicate: $value, stores });\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$result")," will be ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if at least one value in ",(0,i.kt)("inlineCode",{parentName:"li"},"stores")," equals value in ",(0,i.kt)("inlineCode",{parentName:"li"},"$value"),", otherwise it will be ",(0,i.kt)("inlineCode",{parentName:"li"},"false"))),(0,i.kt)("h3",{id:"arguments-2"},"Arguments"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"predicate")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(Store<T>)")," \u2014 Store contains value to compare values from ",(0,i.kt)("inlineCode",{parentName:"li"},"stores")," with"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"stores")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(Array<Store<T>>)")," \u2014 List of stores to compare with ",(0,i.kt)("inlineCode",{parentName:"li"},"value")),(0,i.kt)("li",{parentName:"ol"},"type of ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"stores")," should be the same")),(0,i.kt)("h3",{id:"return-2"},"Return"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$result")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(Store<boolean>)")," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if at least one store contains ",(0,i.kt)("inlineCode",{parentName:"li"},"value"))),(0,i.kt)("h3",{id:"example-2"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const $allowToCompare = createStore(true);\n\nconst $isPasswordCorrect = createStore(true);\nconst $isEmailCorrect = createStore(true);\n\nconst $isFormFailed = some({\n  predicate: $allowToCompare,\n  stores: [$isPasswordCorrect, $isEmailCorrect],\n});\n\nconsole.assert(false === $isFormFailed.getState());\n")),(0,i.kt)("h2",{id:"shorthands"},"Shorthands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"$result = some(stores, value);\n$result = some(stores, (value) => false);\n$result = some(stores, $predicate);\n")),(0,i.kt)("p",null,"Shorthand have the same rules as the main overrides, just it uses positional arguments instead of object-form."),(0,i.kt)("h3",{id:"arguments-3"},"Arguments"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"stores")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(Array<Store<T>>)")," \u2014 List of stores to compare with predicate in the second argument"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"predicate")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(Store<T> | (value: T) => boolean | T)")," \u2014 Predicate to compare with")))}c.isMDXComponent=!0},5318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,k=d["".concat(s,".").concat(c)]||d[c]||p[c]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);