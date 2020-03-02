(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{222:function(_,v,t){"use strict";t.r(v);var s=t(0),r=Object(s.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h3",{attrs:{id:"_1、描述网页从输入url到渲染的过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、描述网页从输入url到渲染的过程"}},[_._v("#")]),_._v(" 1、描述网页从输入url到渲染的过程")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("根据地址栏输入的地址, 来解析url(假设为www.google.com)对应的IP(IP是互联网上每一台计算机的唯一标识)。这里DNS解析分为,。")]),_._v(" "),t("ul",[t("li",[_._v("一、"),t("strong",[_._v("浏览器缓存:")]),_._v(" 首先会在浏览器缓存中查看是否有上一次的访问记录, 有则直接返回, 没有继续二。")]),_._v(" "),t("li",[_._v("二、"),t("strong",[_._v("操作系统缓存")]),_._v(": 查找存储在系统中的运行内存的缓存。具体步骤为:\n"),t("ul",[t("li",[_._v("1."),t("strong",[_._v("在hosts文件中查找")]),_._v(" : 读取系统中的hosts文件")]),_._v(" "),t("li",[_._v("2."),t("strong",[_._v("路由器缓存")]),_._v(" : 有些路由器也有DNS缓存的功能，访问过的域名会存在路由器上")]),_._v(" "),t("li",[_._v("3."),t("strong",[_._v("本地域名服务器")]),_._v(" : 在本地域名服务器中查询IP地址")]),_._v(" "),t("li",[_._v("4."),t("strong",[_._v("根域名服务器")]),_._v(" : 若本地没有, 则本地域名服务器向根域名服务器查询")]),_._v(" "),t("li",[_._v("5."),t("strong",[_._v("com顶级域名服务器")]),_._v(" : 若根域名没有, 则本地域名服务器向下一次查询")]),_._v(" "),t("li",[_._v("4."),t("strong",[_._v("根域名服务器")]),_._v(" : 若本地没有, 则本地域名服务器向根域名服务器查询")]),_._v(" "),t("li",[_._v("6."),t("strong",[_._v("google.com一级域名服务器")]),_._v("。。。。。。")]),_._v(" "),t("li",[_._v("7."),t("strong",[_._v("www.google.com二级域名服务器")]),_._v("。。。。。")]),_._v(" "),t("li",[_._v("8.直至找到为止")])])])])]),_._v(" "),t("li",[t("p",[_._v("进行tcp连接(三次握手)")])]),_._v(" "),t("li",[t("p",[_._v("客户端发送http请求")])]),_._v(" "),t("li",[t("p",[_._v("服务器处理请求并响应")])]),_._v(" "),t("li",[t("p",[_._v("浏览器收到响应后, 进行处理来渲染页面(下载html解析html、下载css解析css)、下载js解析js、执行js")])]),_._v(" "),t("li",[t("p",[_._v("进行tcp断开连接(四次挥手)")])])]),_._v(" "),t("h3",{attrs:{id:"_2、简述三次握手和四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、简述三次握手和四次挥手"}},[_._v("#")]),_._v(" 2、简述三次握手和四次挥手")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("三次握手:")]),_._v(" "),t("ul",[t("li",[_._v("第一次握手: 客户端向服务器发送带有SYN标志的数据包给服务器, 等待服务器确认。")]),_._v(" "),t("li",[_._v("第二次握手: 服务器收到客户端的SYN标志的数据包后, 确认SYN。同时服务器也向浏览器发送带有SYN和ACK标志的数据包等待客户端确认。")]),_._v(" "),t("li",[_._v("第三次握手: 客户端收到服务器发送的SYN和ACk标志的数据包后, 自己向服务器发送一个ACK标志的数据包。")]),_._v(" "),t("li",[_._v("至此, 三次握手完成, 客户端和服务器建立了TCP连接")])])]),_._v(" "),t("li",[t("p",[_._v("四次挥手:")]),_._v(" "),t("ul",[t("li",[_._v("第一次挥手: 当客户端在传输完最后的数据后, 会向服务器发送一个带有FIN的数据包, 表示客户端这边准备断开连接了, 但依然可以接受数据。")]),_._v(" "),t("li",[_._v("第二次挥手: 服务器端收到客户端的 FIN 包后, 发送一个确认包, 表明自己接受到了客户端关闭连接的请求。但不代表服务端关闭")]),_._v(" "),t("li",[_._v("第三次挥手: 服务器发送完数据后, 向客户端发送一个FIN数据包, 表示自己可以断开连接了")]),_._v(" "),t("li",[_._v("第四次挥手: 当客户端收到FIN后，担心某些不可控制的因素导致服务器不知道他要断开连接，会发送ACK进行确认，同时把自己设置成TIME_WAIT状态并启动定时器，在TCP的定时器到达后, 客户端并没有接收到请求，会重新发送；当服务器收到请求后就断开连接；当客户端等待2MLS（两倍报文最大生存时间）后，没有收到请求重传的请求后，客户端这边就断开连接。")]),_._v(" "),t("li",[_._v("整个TCP通信就结束了。")])])])]),_._v(" "),t("h3",{attrs:{id:"_3、简述为什么是三次握手和四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、简述为什么是三次握手和四次挥手"}},[_._v("#")]),_._v(" 3、简述为什么是三次握手和四次挥手")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("三次握手:《计算机网络》第四版中讲“三次握手”的目的是“为了防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误”\n    书中的例子是这样的，“已失效的连接请求报文段”的产生在这样一种情况下：client发出的第一个连接请求报文段并没有丢失，而是在某个网络结点长时间的滞留了，以致延误到连接释放以后的某个时间才到达server。本来这是一个早已失效的报文段。但server收到此失效的连接请求报文段后，就误认为是client再次发出的一个新的连接请求。于是就向client发出确认报文段，同意建立连接。\n    假设不采用“三次握手”，那么只要server发出确认，新的连接就建立了。由于现在client并没有发出建立连接的请求，因此不会理睬server的确认，也不会向server发送数据。但server却以为新的运输连接已经建立，并一直等待client发来数据。这样，server的很多资源就白白浪费掉了。采用“三次握手”的办法可以防止上述现象发生。例如刚才那种情况，client不会向server的确认发出确认。server由于收不到确认，就知道client并没有要求建立连接。”。主要目的防止server端一直等待，浪费资源。")])]),_._v(" "),t("li",[t("p",[_._v("四次挥手: 因为关闭连接时，当Server端收到FIN报文时，很可能没发完数据, 所以并不会立即关闭，只能先回复一个ACK报文。\n只有等到我Server端所有的报文都发送完了，才能发送FIN报文，因此不能一起发送。故需要四步握手。")])])]),_._v(" "),t("h3",{attrs:{id:"_4、https的传输过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、https的传输过程"}},[_._v("#")]),_._v(" 4、https的传输过程")]),_._v(" "),t("ul",[t("li",[_._v("在服务端存一个公钥和对应的私钥, 将公钥发给客户端")]),_._v(" "),t("li",[_._v("在客户端收到公钥后, 客户端会将要发送的数据经过公钥加密后发给服务器")]),_._v(" "),t("li",[_._v("服务器收到数据后, 使用自己的私钥解密")])]),_._v(" "),t("h3",{attrs:{id:"_5、https和http的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、https和http的区别"}},[_._v("#")]),_._v(" 5、https和http的区别")]),_._v(" "),t("ul",[t("li",[_._v("https需要证书")]),_._v(" "),t("li",[_._v("http是超文本传输协议, 是明文传输的。https是具有安全性的ssl加密传输协议")]),_._v(" "),t("li",[_._v("http的端口是80、https的端口是443")]),_._v(" "),t("li",[_._v("http因为连接简单, 所以不安全。https是由http+ssl构建的可以加密传输、身份认证的协议, 比http安全")])]),_._v(" "),t("h3",{attrs:{id:"_6、如何确定服务端开启了gzip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、如何确定服务端开启了gzip"}},[_._v("#")]),_._v(" 6、如何确定服务端开启了gzip")]),_._v(" "),t("ul",[t("li",[_._v("客户端请求中增加Accept-Encoding: gzip表示客户端支持gzip")]),_._v(" "),t("li",[_._v("服务端接收到请求后，将结果通过gzip压缩后返回给客户端并在响应头中增加Content-Encoding:gzip 表示响应数据已被压缩")]),_._v(" "),t("li",[_._v("客户端接收请求，响应头中有Content-Encodin:gzip表示数据需解压处理")])]),_._v(" "),t("h3",{attrs:{id:"_7、为什么要使用缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、为什么要使用缓存"}},[_._v("#")]),_._v(" 7、为什么要使用缓存")]),_._v(" "),t("ul",[t("li",[_._v("缓存减少了数据传输，对服务器压力减小，提升前端页面性能。")])]),_._v(" "),t("h3",{attrs:{id:"_8、强制缓存和协商缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8、强制缓存和协商缓存"}},[_._v("#")]),_._v(" 8、强制缓存和协商缓存")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("强制缓存是我们在第一次请求资源时在http响应头设置一个过期时间，在时效内都将直接从浏览器进行获取，\n常见的http响应头字段如Cache-Control 和 Expires")])]),_._v(" "),t("li",[t("p",[_._v("协商缓存是我们通过http响应头字段etag或者Last-Modified等判断服务器上资源是否修改，\n如果修改则从服务器重新获取，如果未修改则304指向浏览器缓存中进行获取。")])])]),_._v(" "),t("h3",{attrs:{id:"_9、http-常见状态码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9、http-常见状态码"}},[_._v("#")]),_._v(" 9、http 常见状态码")]),_._v(" "),t("p",[_._v("3xx--重定向")]),_._v(" "),t("p",[_._v("301 永久重定向, 浏览器主动跳到b")]),_._v(" "),t("p",[_._v("302 临时重定向, 下次还是a, a 再到b")]),_._v(" "),t("p",[_._v("303 资源未改变。浏览器请求的资源未改变时, 服务器会返回其缓存的值")]),_._v(" "),t("p",[_._v("403 没有权限")]),_._v(" "),t("p",[_._v("400 请求没有进入到后台服务器中, 可能是前端请求携带的参数与后台要求不一致等等。")]),_._v(" "),t("p",[_._v("404 访问的资源不存在")])])}),[],!1,null,null,null);v.default=r.exports}}]);