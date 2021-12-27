(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{282:function(s,n,t){"use strict";t.r(n);var a=t(0),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("ol",[t("li",[s._v("相关计算公式")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("1. 页面的有效宽度 = {\n    设备的高度 * 16/9 （页面宽高比 > 16/9）\n    设备的宽度 （页面的宽高比 <= 16/9）\n   }\n\n2. 页面的有效高度 = 页面的有效高度 / 16/9\n\n3. 1rem = 页面的有效宽度 / 100px （将 html 的 font-size 设置成 1rem） \n\n4. 页面元素的宽、高、边框等大小的换算：元素的尺寸（宽高等） = 设计稿设计的元素尺寸 / 设计稿的宽 * 100rem\n    // 可以写一个公共的 scss 方法\n     @function px($n) {\n       @return $n / 2420 * 100rem;\n     }\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("网格布局")])]),s._v(" "),t("div",{staticClass:"language-scss line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-scss"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v("grid-template-areas")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'box1 box2 box4 box5'")]),s._v("\n                     "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'box3 box3 box4 box5'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 网格布局列宽 --4列")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("grid-template-columns")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 366fr 361fr 811fr 747fr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 网格布局行高 --2行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("grid-template-rows")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 755fr 363fr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 列之间的空隙")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("grid-column-gap")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("px")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("28"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 行之间的空隙")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("grid-row-gap")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("px")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("28"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("利用阴影，做一个叠层的效果")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/dist/visualize/1.png",alt:"图片"}})]),s._v(" "),t("div",{staticClass:"language-scss line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-scss"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 思路")]),s._v("\n最亮的一层使用div本身的 border 的颜色\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// border-shadow: 0 0 0 0 color 第一个0为x轴偏移  第二个0为y轴偏移   第三个0为模糊半径  第四个0为扩散半径")]),s._v("\n第二层使用伪元素的阴影\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("box-shadow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 17px 0 0 -16px #0e325f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 阴影扩散半径为向内扩散 16px，阴影向 x 轴左偏移 17px（这样正好左边露出 1px 的阴影）")]),s._v("\n            -17px 0 0 -16px #0e325f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 阴影扩散半径为向内扩散 16px，阴影向 x 轴右偏移 17px（这样正好右边露出 1px 的阴影）")]),s._v("\n            0 17px 0 -16px #0e325f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 阴影扩散半径为向内扩散 16px，阴影向 y 轴下偏移 17px（这样正好上边露出 1px 的阴影）")]),s._v("\n            0 -17px 0 -16px #0e325f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 阴影扩散半径为向内扩散 16px，阴影向 y 轴上偏移 17px（这样正好上边露出 1px 的阴影）")]),s._v("\n第三层使用伪元素的阴影\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("box-shadow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 9px 0 0 -8px #0e325f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n            -9px 0 0 -8px #0e325f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            0 9px 0 -8px #0e325f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n            0 -9px 0 -8px #0e325f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);