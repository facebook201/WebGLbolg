(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{491:function(t,s,a){t.exports=a.p+"assets/img/threejs17顶点概念.f2533864.svg"},492:function(t,s,a){t.exports=a.p+"assets/img/threejs22BufferGeometry.093c99dc.svg"},493:function(t,s,a){t.exports=a.p+"assets/img/threejs22Geometry.a8d54f97.svg"},494:function(t,s,a){t.exports=a.p+"assets/img/threejs23Geometry、BufferGeometry.d5007d9d.svg"},828:function(t,s,a){"use strict";a.r(s);var e=a(30),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1、顶点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、顶点"}},[t._v("#")]),t._v(" 1、顶点")]),t._v(" "),s("img",{attrs:{src:a(491)}}),t._v(" "),s("h2",{attrs:{id:"_2、api使用总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、api使用总结"}},[t._v("#")]),t._v(" 2、API使用总结")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 访问几何体顶点位置数据")]),t._v("\nBufferGeometry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 访问几何体顶点颜色数据")]),t._v("\nBufferGeometry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 访问几何体顶点法向量数据")]),t._v("\nBufferGeometry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("normal\n")])])]),s("h2",{attrs:{id:"_3、buffergeometry-总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、buffergeometry-总结"}},[t._v("#")]),t._v(" 3、BufferGeometry 总结")]),t._v(" "),s("img",{attrs:{src:a(492)}}),t._v(" "),s("h3",{attrs:{id:"_1、buffergeometry设置顶点数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、buffergeometry设置顶点数据"}},[t._v("#")]),t._v(" 1、BufferGeometry设置顶点数据")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" geometry "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BufferGeometry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建一个Buffer类型几何体对象")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//类型数组创建顶点数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" vertices "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Float32Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点1坐标")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点2坐标")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点3坐标")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点4坐标")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点5坐标")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点6坐标")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建属性缓冲区对象")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" attribue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BufferAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vertices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3个为一组，表示一个顶点的xyz坐标")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置几何体attributes属性的位置属性")]),t._v("\ngeometry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" attribue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"_4、geometry和buffergeometry的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、geometry和buffergeometry的区别"}},[t._v("#")]),t._v(" 4、Geometry和BufferGeometry的区别")]),t._v(" "),s("img",{attrs:{src:a(493)}}),t._v("\n几何体`Geometry`和缓冲类型几何体 `BufferGeometry` 表达的含义相同，只是对象的结构不同，`Threejs` 渲染的时候会先把 `Geometry` 转化为`BufferGeometry` 再解析几何体顶点数据进行渲染。\n"),s("h3",{attrs:{id:"_1、geometry设置顶点数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、geometry设置顶点数据"}},[t._v("#")]),t._v(" 1、Geometry设置顶点数据")]),t._v(" "),s("p",[t._v("几何体"),s("code",[t._v("Geometry")]),t._v(" 的顶点位置属性 "),s("code",[t._v("geometry.vertices")]),t._v(" 和缓冲类型几何体 "),s("code",[t._v("BufferGeometry")]),t._v(" 顶点位置属性 "),s("code",[t._v("BufferGeometry.attributes.position")]),t._v("是对应的。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" geometry "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Geometry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//声明一个几何体对象Geometry")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vector3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点1坐标")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vector3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("70")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点2坐标")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vector3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("70")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点3坐标")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点坐标添加到geometry对象")]),t._v("\ngeometry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vertices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2、geometry设置顶点颜色数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、geometry设置顶点颜色数据"}},[t._v("#")]),t._v(" 2、Geometry设置顶点颜色数据")]),t._v(" "),s("p",[t._v("几何体 "),s("code",[t._v("Geometry")]),t._v("的顶点颜色属性 "),s("code",[t._v("geometry.colors")]),t._v("和缓冲类型几何体"),s("code",[t._v("BufferGeometry")]),t._v("顶点颜色属性"),s("code",[t._v("BufferGeometry.attributes.color")]),t._v("是对应的。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" geometry "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Geometry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//声明一个几何体对象Geometry")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Color对象表示顶点颜色数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" color1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00ff00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点1颜色——绿色")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" color2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xff0000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点2颜色——红色")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" color3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x0000ff")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点3颜色——蓝色")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点颜色数据添加到geometry对象")]),t._v("\ngeometry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("colors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("注意:")]),t._v(" 设置几何体"),s("code",[t._v("Geometry")]),t._v("顶点颜色属性"),s("code",[t._v("geometry.colors")]),t._v("，对网格模型"),s("code",[t._v("Mesh")]),t._v("是无效的，对于点模型"),s("code",[t._v("Points")]),t._v("、线模型"),s("code",[t._v("Line")]),t._v("是有效果。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 点渲染模式  点模型对象Points")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" points "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Points")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("geometry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" material"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//点模型对象")]),t._v("\nscene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("points"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//点对象添加到场景")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3、材质属性-vertexcolors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、材质属性-vertexcolors"}},[t._v("#")]),t._v(" 3、材质属性 vertexColors")]),t._v(" "),s("p",[s("strong",[t._v("注意:")]),t._v(" 使用顶点颜色数据定义模型颜色的时候，要把材质的属性 "),s("code",[t._v("vertexColors")]),t._v("设置为 "),s("code",[t._v("THREE.VertexColors")]),t._v(",这样顶点的颜色数据才能取代材质颜色属性"),s("code",[t._v(".color")]),t._v("起作用。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//材质对象")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" material "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MeshLambertMaterial")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// color: 0xffff00,")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("vertexColors")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VertexColors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//以顶点颜色为准")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("side")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DoubleSide"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//两面可见")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"_5、几何体旋转、缩放、平移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、几何体旋转、缩放、平移"}},[t._v("#")]),t._v(" 5、几何体旋转、缩放、平移")]),t._v(" "),s("img",{attrs:{src:a(494)}}),t._v(" "),s("p",[s("code",[t._v("BufferGeometry")]),t._v("和几何体 "),s("code",[t._v("Geometry")]),t._v(" 一样具有 "),s("code",[t._v(".scale()、.rotateZ()、.rotateX()")]),t._v(" 等几何体变换的方法。\n使用"),s("code",[t._v("geometry")]),t._v("的一些封装方法进行几何体进行变换，注意本质上都是改变结合体顶点位置坐标数据。网格模型 "),s("code",[t._v("Mesh")]),t._v("进行这些变换不会影响几何体的顶点位置坐标，网格模型缩放旋转平移变换改变的是模型的本地矩阵、世界矩阵。")]),t._v(" "),s("Valine")],1)}),[],!1,null,null,null);s.default=n.exports}}]);