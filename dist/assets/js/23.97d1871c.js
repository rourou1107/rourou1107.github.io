(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{290:function(_,v,t){"use strict";t.r(v);var a=t(0),l=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h3",{attrs:{id:"http-常见状态码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-常见状态码"}},[_._v("#")]),_._v(" HTTP 常见状态码")]),_._v(" "),t("ol",[t("li",[_._v("2xx 表示成功")]),_._v(" "),t("li",[_._v("3xx 需要进一步操作\n"),t("ul",[t("li",[_._v("301 资源永久被转移到其他地方（永久重定向）")]),_._v(" "),t("li",[_._v("304 服务器的资源未修改，服务器不返回任何资源，客户端会访问缓存的资源")])])]),_._v(" "),t("li",[_._v("4xx 浏览器错误\n"),t("ul",[t("li",[_._v("400 客户端请求的语法错误，服务器无法理解")]),_._v(" "),t("li",[_._v("401 请求要求用户需要身份验证")]),_._v(" "),t("li",[_._v("403 服务端理解客户端请求，但是拒绝执行此请求")]),_._v(" "),t("li",[_._v("404 服务器找不到相关的资源")]),_._v(" "),t("li",[_._v("413 请求的实体过大，服务器无法处理")])])]),_._v(" "),t("li",[_._v("5xx 服务器错误")])]),_._v(" "),t("h3",{attrs:{id:"http-请求报文-（一般就是-请求行、请求头、请求空行、请求体）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-请求报文-（一般就是-请求行、请求头、请求空行、请求体）"}},[_._v("#")]),_._v(" HTTP 请求报文 （一般就是 请求行、请求头、请求空行、请求体）")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("报文首部")]),_._v(" "),t("ul",[t("li",[_._v("请求行\n"),t("ul",[t("li",[_._v("请求方法")]),_._v(" "),t("li",[_._v("请求 url")]),_._v(" "),t("li",[_._v("HTTP 协议及版本")])])]),_._v(" "),t("li",[_._v("请求首部字段 if-Match、if-None-Match、if-modified-Since、if-Unmodified-Since")]),_._v(" "),t("li",[_._v("通用首部字段 Catch-Control、Pragma")]),_._v(" "),t("li",[_._v("实体首部字段 Expires、Last-Modified")])])]),_._v(" "),t("li",[t("p",[_._v("空行")])]),_._v(" "),t("li",[t("p",[_._v("报文主体")])])]),_._v(" "),t("h3",{attrs:{id:"http-响应报文-（一般就是-响应行、响应头、响应空行、响应体）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-响应报文-（一般就是-响应行、响应头、响应空行、响应体）"}},[_._v("#")]),_._v(" HTTP 响应报文 （一般就是 响应行、响应头、响应空行、响应体）")]),_._v(" "),t("ol",[t("li",[_._v("报文首部\n"),t("ul",[t("li",[t("p",[_._v("响应行")]),_._v(" "),t("ul",[t("li",[_._v("HTTP 协议及版本")]),_._v(" "),t("li",[_._v("状态码及状态描述")])])]),_._v(" "),t("li",[t("p",[_._v("响应首部字段 ETag")])]),_._v(" "),t("li",[t("p",[_._v("通用首部字段 Catch-Control、Pragma")])]),_._v(" "),t("li",[t("p",[_._v("实体首部字段 Expires、Last-Modified")])])])]),_._v(" "),t("li",[_._v("空行")]),_._v(" "),t("li",[_._v("报文主体")])]),_._v(" "),t("h3",{attrs:{id:"http首部字段作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http首部字段作用"}},[_._v("#")]),_._v(" HTTP首部字段作用")]),_._v(" "),t("ol",[t("li",[_._v("Catch-Control （HTTP 1.1）用来指定缓存过期时间，距离发起请求的时间\n"),t("ul",[t("li",[_._v("CacheControl: max-age=3600")]),_._v(" "),t("li",[_._v("是相对时间，与本地时间无关")])])]),_._v(" "),t("li",[_._v("Pragma: no-cache 告知客户端对该资源不要读缓存、而是向服务器发请求")]),_._v(" "),t("li",[_._v("Expires （HTTP 1.0）告诉客户端资源缓存过期时间，如果没过该时间点就不发请求\n"),t("ul",[t("li",[_._v("Expires: Thur, 11 Jun 2020 11:33:01 GMT")]),_._v(" "),t("li",[_._v("这个时间是服务器时间，如果用户修改了自己的系统时间，那么缓存时间就没有意义了")]),_._v(" "),t("li",[_._v("优先级 Pragma > Catch-Control > Expires")])])]),_._v(" "),t("li",[_._v("ETag (HTTP 1.1) 服务器会计算出一个唯一标识符（如 md5）将这个标识符附在响应头上，返给客户端，客户端会在下次请求时一起带给客户端，如果和服务器的标识符匹配上就返回304、否则200")])]),_._v(" "),t("h3",{attrs:{id:"get-和-post-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-和-post-的区别"}},[_._v("#")]),_._v(" GET 和 POST 的区别")]),_._v(" "),t("p",[_._v("参数")]),_._v(" "),t("ul",[t("li",[_._v("GET 参数通过 url 传递，POST 是放在请求体中的")]),_._v(" "),t("li",[_._v("GET 比 POST 更不安全，因为参数都是放在 url 里，所以不能传递敏感信息")]),_._v(" "),t("li",[_._v("对于参数的数据类型而言，GET 只接受 ACSII 字符，POST 没有限制")]),_._v(" "),t("li",[_._v("GET 请求在 url 传递参数是有长度限制的，POST 没有")]),_._v(" "),t("li",[_._v("GET 请求的参数会完整保留在浏览器历史记录中，而 POST 参数不会被保留")])]),_._v(" "),t("p",[_._v("编码")]),_._v(" "),t("ul",[t("li",[_._v("GET 请求只能进行 url 编码，而 POST 支持多种编码方式")])]),_._v(" "),t("p",[_._v("浏览器")]),_._v(" "),t("ul",[t("li",[_._v("GET 请求会被浏览器主动 catch，而 POST 不会，除非手动设置")]),_._v(" "),t("li",[_._v("GET 请求的 url 地址可以被添加到收藏栏里，POST 不可以")]),_._v(" "),t("li",[_._v("GET 请求在浏览器回退时是无害的，而 POST 会再次提出请求")])]),_._v(" "),t("p",[_._v("（其实就一个区别:   GET 用于获取资源，POST 用于提交资源）")]),_._v(" "),t("h3",{attrs:{id:"cookie-和-localstorage-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie-和-localstorage-区别"}},[_._v("#")]),_._v(" Cookie 和 LocalStorage 区别")]),_._v(" "),t("ul",[t("li",[_._v("Cookie 是服务器下发给浏览器的一段字符串，当浏览器再次发起相同的二级域名请求时，浏览器必须附上 Cookie。")]),_._v(" "),t("li",[_._v("Cookie 会被发到服务器，LocalStorage 不会")]),_._v(" "),t("li",[_._v("Cookie 一般最大为 4k，LocalStorage 一般最大为 5M 或者 10M（依浏览器而定）")])]),_._v(" "),t("h3",{attrs:{id:"localstorage-和-sessionstorage-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#localstorage-和-sessionstorage-区别"}},[_._v("#")]),_._v(" LocalStorage 和 SessionStorage 区别")]),_._v(" "),t("p",[_._v("LocalStorage 一般不会自动过期，除非用户手动删除，SessionStorage 会在回话结束时过期（比如关闭浏览器）")]),_._v(" "),t("h3",{attrs:{id:"cookie-和-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie-和-session"}},[_._v("#")]),_._v(" Cookie 和 Session")]),_._v(" "),t("ul",[t("li",[_._v("Cookie 是存在浏览器中的，Session 是存在服务器中的")]),_._v(" "),t("li",[_._v("Session 是基于 Cookie 实现的，具体做法是将 SessionID 存在 Cookie 中")])]),_._v(" "),t("h2",{attrs:{id:"浏览器的缓存机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的缓存机制"}},[_._v("#")]),_._v(" 浏览器的缓存机制")]),_._v(" "),t("p",[_._v("以图片为例")]),_._v(" "),t("ol",[t("li",[_._v("第一次")])]),_._v(" "),t("ul",[t("li",[_._v("浏览器：服务器兄弟，我需要 rourou.png 图片")]),_._v(" "),t("li",[_._v("服务器：在响应头中携带--Cache-Control: max-age=60;Etag: 21w3de; 此处为图片内容 "),t("br"),_._v("\n暗语：浏览器，我将图片资源发给你，你将资源存在本地，当你下次需要的时候，如果没有超过60s，则使用本地存储的，如果 超过60s，再找我要，并且在请求头If-None-Match中携带Etag的值")])]),_._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[_._v("第二次")])]),_._v(" "),t("ul",[t("li",[_._v("浏览器：10s后，我需要这张图片，没超过60s，那我直接从本地缓存中取")])]),_._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[_._v("第三次")])]),_._v(" "),t("ul",[t("li",[_._v("浏览器：1min后，我需要这张图片，超过60s，我要找服务器要新的了，携带Etag的值")]),_._v(" "),t("li",[_._v("服务器：我查了一下，图片没有改过，和原来的一样，返回 304,")]),_._v(" "),t("li",[_._v("浏览器：304，那我继续使用本地缓存，之后继续循环第二、三次操作")])]),_._v(" "),t("h3",{attrs:{id:"_1、http-是如何控制缓存的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、http-是如何控制缓存的"}},[_._v("#")]),_._v(" 1、HTTP 是如何控制缓存的")]),_._v(" "),t("ul",[t("li",[_._v("浏览器第一次向服务器发请求获取资源，服务器响应报文的状态码是 "),t("strong",[_._v("200")]),_._v("，响应头会带上 Catch-Control、Etag字段、响应体是原始的图片资源。浏览器收到缓存后，将图片资源缓存在本地。")]),_._v(" "),t("li",[_._v("当浏览器再次发送请求获取资源时，浏览器先检查资源是否过期（通过之前响应报文的 Catch-Control: max-age=过期时间来判断）。如果在过期时间以内，直接使用该资源。")]),_._v(" "),t("li",[_._v("如果请求过期，则发请求询问该资源是否依旧可用。请求包含头字段 If-None-Match，是之前响应报文里的 Etag。")]),_._v(" "),t("li",[_._v("服务器收到请求后通过 If-None-Match 里的 Etag 和新计算的 Etag 作对比，如果匹配，则直接返回一个状态码 "),t("strong",[_._v("304")]),_._v("，不包含响应体的报文，告诉浏览器资源依旧可用。\n如果不匹配，则返回一个状态码为"),t("strong",[_._v("200")]),_._v("响应头带 Catch-Control、Etag字段和响应体是原始的图片资源。")])])])}),[],!1,null,null,null);v.default=l.exports}}]);