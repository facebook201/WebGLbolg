(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{414:function(t,s,a){t.exports=a.p+"assets/img/正交投影.1d824940.svg"},415:function(t,s,a){t.exports=a.p+"assets/img/正交投影.378ef763.png"},596:function(t,s,a){t.exports=a.p+"assets/img/正射矩阵推导过程1.25b5e087.png"},897:function(t,s,a){"use strict";a.r(s);var r=a(30),n=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-正交投影"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-正交投影"}},[t._v("#")]),t._v(" 1.正交投影")]),t._v(" "),s("p",[t._v("正交投影的可视空间由前面两个矩形表面确定。分别是"),s("strong",[t._v("近裁剪面")]),t._v("和"),s("strong",[t._v("远裁剪面")]),t._v("。\n"),s("code",[t._v("canvas")]),t._v("上显示的是"),s("strong",[t._v("可视空间中的物体在近裁剪面上的投影")]),t._v("。")]),t._v(" "),s("p",[t._v("正交投影看到的物体都是一样大的，跟模型距离观察者的距离没有关系。")]),t._v(" "),s("p",[s("strong",[t._v("正交投影，可视范围是一个长方体盒子。")])]),t._v(" "),s("img",{attrs:{src:a(415)}}),t._v(" "),s("p",[t._v("接下来我们将推导一下"),s("strong",[t._v("正交投影")]),t._v("的矩阵是如何得到的。")]),t._v(" "),s("p",[t._v("假设模型中有一个点"),s("code",[t._v("p(x,y,z)")]),t._v("表示像素坐标,投影到近平面后的坐标为"),s("code",[t._v("p'(x',y',z')")]),t._v("，表示投影坐标。")]),t._v(" "),s("p",[t._v("那么 "),s("code",[t._v("p")]),t._v("和"),s("code",[t._v("p'")]),t._v("之间的关系是怎样的呢？首先我们的已知条件是.")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("x")]),t._v(" 坐标在 "),s("code",[t._v("[-width/2, width / 2]")]),t._v(" 之间，通常我们不指定 "),s("code",[t._v("width")]),t._v("，而是指定相机坐标系下的投影盒的左右两侧坐标，"),s("code",[t._v("left")]),t._v("和"),s("code",[t._v("right")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("y")]),t._v(" 坐标在 "),s("code",[t._v("[-height/2, height/2]")]),t._v(" 之间，通常我们不指定    "),s("code",[t._v("height")]),t._v("，而是指定相机坐标系下的投影盒的左右两侧坐标，"),s("code",[t._v("top")]),t._v("和"),s("code",[t._v("bottom")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("z")]),t._v(" 坐标在 "),s("code",[t._v("[zNear, zFar]")]),t._v("之间。")])]),t._v(" "),s("p",[t._v("投影后的点 "),s("code",[t._v("p'（x',y',z'）")]),t._v("，其中：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("x'")]),t._v(" 在 "),s("code",[t._v("[-1，1]")]),t._v(" 之间")]),t._v(" "),s("li",[s("code",[t._v("y'")]),t._v(" 在 "),s("code",[t._v("[-1，1]")]),t._v("之间")]),t._v(" "),s("li",[s("code",[t._v("z'")]),t._v(" 在 "),s("code",[t._v("[-1，1]")]),t._v(" 之间")])]),t._v(" "),s("h2",{attrs:{id:"_2-正交投影矩阵的推导"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-正交投影矩阵的推导"}},[t._v("#")]),t._v(" 2.正交投影矩阵的推导")]),t._v(" "),s("p",[t._v("首先我们需要找出 "),s("code",[t._v("p")]),t._v("和 "),s("code",[t._v("p'")]),t._v("之间的关系。"),s("code",[t._v("p")]),t._v("和"),s("code",[t._v("p'")]),t._v("之间的关系可以用如下矩阵来表示。")]),t._v(" "),s("img",{attrs:{src:a(596)}}),t._v(" "),s("p",[t._v("上面的矩阵运算后可以得到下面的计算结果。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("x' "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ax "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" by "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" cz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" d\ny' "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" fy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" gz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" h\nz' "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ix "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" jy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" kz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" l\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" ny "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" oz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" p\n")])])]),s("h3",{attrs:{id:"_1-x-和-x-的关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-x-和-x-的关系"}},[t._v("#")]),t._v(" 1. "),s("strong",[t._v("x' 和 x 的关系")])]),t._v(" "),s("p",[t._v("我们先将 "),s("code",[t._v("p")]),t._v(" 点的 "),s("code",[t._v("x")]),t._v("上的坐标投影到近平面上。首先我们知道有这么一个对应关系。根据长方体来根据近平面来计算得出一个坐标系。在近平面上我们可以得到下面的信息。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" 为 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("x轴的原点")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x轴方向的中心点"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" 为 x的正向最大值，也就是width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" 为 x的负向最大值\n")])])]),s("p",[t._v("那么"),s("code",[t._v("x' 和 x")]),t._v(" 的关系可以用如下的计算公式来表示。将屏幕坐标转换成投影坐标")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("x' "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" \n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 2x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("上面的公式中")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 表示 x "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("相对于坐标原点的距离")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" 为 x 的正向最大值，也就是 width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])]),s("h4",{attrs:{id:"_2-y-和-y-的关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-y-和-y-的关系"}},[t._v("#")]),t._v(" 2. "),s("strong",[t._v("y' 和 y 的关系")])]),t._v(" "),s("p",[t._v("我们先将"),s("code",[t._v("p")]),t._v("点的 "),s("code",[t._v("y")]),t._v("上的坐标投影到近平面上。在近平面上我们也可以得到下面的信息")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bottom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" 为 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("y轴的原点")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x轴方向的中心点"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bottom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" 为 y的正向最大值，也就是height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bottom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" 为 y的负向最大值\n")])])]),s("p",[t._v("那么"),s("code",[t._v("y' 和 y")]),t._v(" 的关系可以用如下的计算公式来表示。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("y' "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("bottom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bottom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" \n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("2y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("bottom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bottom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 2y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bottom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("bottom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bottom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"_3-z-和-z-的关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-z-和-z-的关系"}},[t._v("#")]),t._v(" 3. z' 和 z 的关系")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("z' "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("z"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zFar"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("zNear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zFar"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("zNear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" \n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("2z"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zFar"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("zNear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zFar"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("zNear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 2z"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zFar"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("zNear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zFar"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("zNear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zFar"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("zNear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("上面的公式中")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("z"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zFar"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("zNear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 表示 z "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("相对于坐标原点的距离")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zFar"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("zNear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("  为 z 的正向最大值，也就是 depth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])]),s("p",[t._v("根据上面的计算公式，我们计算一下"),s("strong",[t._v("矩阵相乘")]),t._v("的结果，可以得到下面的表达式。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("x' "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ax "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" by "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" cz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 2x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ny' "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" fy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" gz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" h "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 2y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bottom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("bottom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bottom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nz' "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ix "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" jy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" kz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" l "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 2z"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zFar"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("zNear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zFar"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("zNear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zFar"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("zNear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" ny "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" oz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),s("p",[t._v("根据上面得到的计算结果，即可求出"),s("strong",[t._v("正交投影矩阵")]),t._v("。")]),t._v(" "),s("img",{attrs:{src:a(414)}}),t._v(" "),s("p",[t._v("用 "),s("code",[t._v("JavaScript")]),t._v(" 实现正交投影矩阵的代码则如下所示")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("orthographic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bottom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" near"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" far")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("top "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" bottom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("far "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" near"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("top "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" bottom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("top "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" bottom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("far "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" near"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("far "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" near"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 示例")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bottom "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" top "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" near "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" far "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" orthoMatrix "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("orthographic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bottom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" near"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" far"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Orthographic Projection Matrix:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" orthoMatrix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"https://github.com/tangjie-93/WebGL/blob/main/%E8%B7%9F%E7%9D%80%E5%AE%98%E7%BD%91%E5%AD%A6WebGL%2BWebGL%E7%BC%96%E7%A8%8B%E6%8C%87%E5%8D%97/%E6%8A%95%E5%BD%B1/demo/%E6%AD%A3%E5%B0%84%E6%8A%95%E5%BD%B1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("正交投影demo地址"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("总结：")]),t._v(" 计算正交投影的关键是要求出 "),s("code",[t._v("p")]),t._v(" 和 "),s("code",[t._v("p'")]),t._v(" 之间的关系，及屏幕坐标跟投影坐标的关系。")]),t._v(" "),s("Valine")],1)}),[],!1,null,null,null);s.default=n.exports}}]);