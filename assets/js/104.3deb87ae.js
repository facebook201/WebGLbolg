(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{686:function(t,s,a){t.exports=a.p+"assets/img/算法脑图.39b9d544.jpeg"},949:function(t,s,a){"use strict";a.r(s);var n=a(30),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("img",{staticStyle:{display:"block",margin:"0 auto"},attrs:{src:a(686)}}),t._v(" "),s("h2",{attrs:{id:"_1、复杂度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、复杂度"}},[t._v("#")]),t._v(" 1、复杂度")]),t._v(" "),s("h4",{attrs:{id:"_1-1-时间复杂度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-时间复杂度"}},[t._v("#")]),t._v(" 1.1 时间复杂度")]),t._v(" "),s("p",[t._v("  在进行算法分析时，语句总是随着执行次数 "),s("code",[t._v("T(n)")]),t._v(" 是关于问题规模 "),s("code",[t._v("n")]),t._v(" 的函数。进而分析 "),s("code",[t._v("T(n)")]),t._v("的数量随 "),s("code",[t._v("n")]),t._v(" 的变化情况并确定 "),s("code",[t._v("T(n)")]),t._v(" 的数量级。算法的时间复杂度，也就是算法的时间量度，记做 "),s("code",[t._v("T(n)=O(f(n))")]),t._v("。它表示随问题规模 "),s("code",[t._v("n")]),t._v(" 的增大，算法执行时间的增长率和 "),s("code",[t._v("f(n)")]),t._v(" 的增长率相同，称作算法的"),s("strong",[t._v("渐进时间复杂度")]),t._v("，简称为时间复杂度，是"),s("strong",[t._v("算法的执行时间与数据规模之间的增长关系")]),t._v("。其中 "),s("code",[t._v("f(n)")]),t._v(" 是问题规模 "),s("code",[t._v("n")]),t._v(" 的某个函数。")]),t._v(" "),s("h5",{attrs:{id:"_1-时间复杂度分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-时间复杂度分析"}},[t._v("#")]),t._v(" 1. 时间复杂度分析")]),t._v(" "),s("ul",[s("li",[t._v("只关注循环执行次数最多的一段代码。")]),t._v(" "),s("li",[t._v("加法法则：总复杂度等于量级最大的那段代码的复杂度。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///cal()函数的时间复杂度是n^2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ret "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     ret "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ret "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),s("ul",[s("li",[t._v("乘法法则:嵌套代码的复杂度等于嵌套内外代码复杂度的乘积")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//cal()函数的复杂度是n*2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ret "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     ret "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ret "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h5",{attrs:{id:"_2、时间复杂度量级分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、时间复杂度量级分类"}},[t._v("#")]),t._v(" 2、时间复杂度量级分类")]),t._v(" "),s("p",[t._v("多项式量级")]),t._v(" "),s("ul",[s("li",[t._v("常数阶("),s("code",[t._v("O(1)")]),t._v(")")]),t._v(" "),s("li",[t._v("对数阶("),s("code",[t._v("O(logn)")]),t._v(")\n因为对数之间是可以互相转换的。"),s("code",[t._v("log3n=log10n/log103= log32 * log2n=(log102/log103)*(log10n/log102)")]),t._v("，所以就有"),s("code",[t._v("O(log3n)=O(C*log2n)")]),t._v(","),s("code",[t._v("C=log32")]),t._v("是一个常量。"),s("strong",[t._v("在采用大O标记复杂度的时候，可以忽略系数，即O(Cf(n)))=O(f(n))")]),t._v(',所以在对数阶时间复杂度的表示方法里,会忽略对数的"底"，统一表示为'),s("code",[t._v("O(logn)")]),t._v("。"),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//时间复杂度为O(log2n)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("////时间复杂度为O(log32n)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("线性阶("),s("code",[t._v("O(n)")]),t._v(")")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//m 和 n 是表示两个数据规模。我们无法事先评估 m 和 n 谁的量级大，所以我们在表示复杂度的时候，就不能简单地利用加法法则，省略掉其中一个。所以，上面代码的时间复杂度就是 O(m+n)。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sum_1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sum_1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum_1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sum_2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sum_2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum_2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum_1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" sum_2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("线性对数阶("),s("code",[t._v("O(logn)")]),t._v(")")]),t._v(" "),s("li",[t._v("平方阶("),s("code",[t._v("O(n^2)")]),t._v(")、立方阶("),s("code",[t._v("O(n^3)")]),t._v(")...k次方阶("),s("code",[t._v("O(n^k)")]),t._v(")")])]),t._v(" "),s("p",[t._v("非多项式量级")]),t._v(" "),s("ul",[s("li",[t._v("指数阶("),s("code",[t._v("O(2^n)")]),t._v(")")]),t._v(" "),s("li",[t._v("阶乘阶("),s("code",[t._v("O(n!)")]),t._v(")")])]),t._v(" "),s("h5",{attrs:{id:"_3、时间复杂度情况分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、时间复杂度情况分类"}},[t._v("#")]),t._v(" 3、时间复杂度情况分类")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// n表示数组array的长度")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//最好情况复杂度是O(1)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//最坏情况复杂度是O(n)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" pos "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n            pos "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" pos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("最好情况时间复杂度(极端情况的复杂度)")]),t._v(" "),s("li",[t._v("最坏情况时间复杂度(极端情况的复杂度)")]),t._v(" "),s("li",[t._v("平均情况时间复杂度(加权平均时间复杂度)")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//上面代码中x一共有n+1(在数组的0~n-1位置和不在数组中)中情况，每种情况下查找需要遍历的元素个数依次是(1,2,3....n,n),要么在数组中要么不在数组中的概率都是1/2。根据概率乘法。有以下公式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=>1/2n表示x为1的概率")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2n")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2n")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3n")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n")])])]),s("ul",[s("li",[t._v("均摊时间复杂度")])]),t._v(" "),s("h4",{attrs:{id:"_1-2-空间复杂度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-空间复杂度"}},[t._v("#")]),t._v(" 1.2 空间复杂度")]),t._v(" "),s("p",[t._v("  通过计算算法所需的存储空间实现。"),s("code",[t._v("S(n)=O(f(n))")]),t._v("，其中 "),s("code",[t._v("n")]),t._v("为问题的规模，"),s("code",[t._v("f(n)")]),t._v("为语句关于 "),s("code",[t._v("n")]),t._v(" 所占存储空间的函数。空间复杂度的全称是**渐进空间复杂度，表示算法的存储空间与数据规模之间的增长关系。**一般会在函数中以数组的形式存在。一维数组的话空间复杂度就是数组的长度 "),s("code",[t._v("（n）")]),t._v("。 二维数组的空间复杂度为 "),s("code",[t._v("n^2")]),t._v("。常见的空间复杂度就是"),s("code",[t._v("O(1)、O(n)、O(n^2)")])]),t._v(" "),s("h2",{attrs:{id:"_2、数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、数据结构"}},[t._v("#")]),t._v(" 2、数据结构")]),t._v(" "),s("h3",{attrs:{id:"_2-1、线性表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、线性表"}},[t._v("#")]),t._v(" 2.1、线性表")]),t._v(" "),s("p",[t._v("锳锳零个或多个数据元素的有限序列。")]),t._v(" "),s("h4",{attrs:{id:"_1、-线性表的顺序存储结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、-线性表的顺序存储结构"}},[t._v("#")]),t._v(" "),s("strong",[t._v("1、 线性表的顺序存储结构")])]),t._v(" "),s("p",[t._v("  用一段地址连续的存储单元依次存储线性表的数据元素。")]),t._v(" "),s("p",[s("strong",[t._v("优点")])]),t._v(" "),s("ul",[s("li",[t._v("无需为表示表中元素之间的逻辑关系而增加额外的存储空间。")]),t._v(" "),s("li",[t._v("可以快速的存取表中任意位置的元素。")])]),t._v(" "),s("p",[s("strong",[t._v("缺点")])]),t._v(" "),s("ul",[s("li",[t._v("插入和删除需要移动大量元素。")]),t._v(" "),s("li",[t._v("当线性表长度变化较大时难以确定存储空间的容量。")]),t._v(" "),s("li",[t._v("造成存储空间的碎片。")])]),t._v(" "),s("h4",{attrs:{id:"_2、线性表的链式存储结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、线性表的链式存储结构"}},[t._v("#")]),t._v(" "),s("strong",[t._v("2、线性表的链式存储结构")])]),t._v(" "),s("p",[t._v("  对数据元素来说，除了存储其本身的信息之外，还需要存储一个指示其直接后继的信息（即直接后继的存储位置）。我们把存储数据元素信息的域称为数据域，把存储"),s("strong",[t._v("直接后继位置")]),t._v("的域称为指针域。指针域中存储额信息称为指针或链这两部分信息组成结点。多个节点链接成一个链表，称为线性表的链式存储结构。")]),t._v(" "),s("h5",{attrs:{id:"_2-1、单链表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、单链表"}},[t._v("#")]),t._v(" 2.1、单链表")]),t._v(" "),s("p",[t._v("  链表中的每个节点只包含一个指针域，称为单链表。链表中的"),s("strong",[t._v("第一个节点的存储位置称为头指针")]),t._v("。在单链表的第一个结点前附设一个结点，称为"),s("strong",[t._v("头结点")]),t._v("。头结点的指针域存储指向第一个结点的指针。线性链表的最后一个节点指针为"),s("strong",[t._v("空")]),t._v("（通常用"),s("code",[t._v("NULL")]),t._v("表示）")]),t._v(" "),s("p",[s("strong",[t._v("头指针")])]),t._v(" "),s("ul",[s("li",[t._v("指链表中指向第一个节点的指针。")]),t._v(" "),s("li",[t._v("头指针具有标识作用，所以常以头指针冠以链表的名字。")]),t._v(" "),s("li",[t._v("无论链表是否为空，头指针均不为空。头指针是链表的必要元素。")])]),t._v(" "),s("p",[s("strong",[t._v("头结点")])]),t._v(" "),s("ul",[s("li",[t._v("头结点是为了操作的统一和方便而设立的，放在第一元素的结点之前，其数据域一般无意义。")]),t._v(" "),s("li",[t._v("有了头结点，对在第一元素结点前插入结点和删除第一结点，其操作和其他结点的操作就统一了。")]),t._v(" "),s("li",[t._v("头结点不一定是链表必须元素。")])]),t._v(" "),s("p",[s("strong",[t._v("单链表和顺序存储结构的优缺点")])]),t._v(" "),s("blockquote",[s("p",[t._v("1、存储分配方式")])]),t._v(" "),s("ul",[s("li",[t._v("顺序存储结构用一段连续的存储单元依次存储线性表的数据元素。")]),t._v(" "),s("li",[t._v("单链表采用链式存储结构，用一组任意的存储单元存放线性表的元素。")])]),t._v(" "),s("blockquote",[s("p",[t._v("2、时间性能")])]),t._v(" "),s("ul",[s("li",[t._v("查找\n"),s("ul",[s("li",[t._v("顺序存储结构 "),s("code",[t._v("O(1)")])]),t._v(" "),s("li",[t._v("单链表 "),s("code",[t._v("O(n)")])])])]),t._v(" "),s("li",[t._v("插入和删除\n"),s("ul",[s("li",[t._v("顺序存储结构 "),s("code",[t._v("O(n)")])]),t._v(" "),s("li",[t._v("单链表 "),s("code",[t._v("O(1)")])])])])]),t._v(" "),s("blockquote",[s("p",[t._v("3、空间性能")])]),t._v(" "),s("ul",[s("li",[t._v("顺序存储结构需要预分配存储空间，空间分大了，浪费，分小了容易发生上溢。")]),t._v(" "),s("li",[t._v("单链表不需要分配存储空间，只要有就可以分配，元素个数也不受限制。数据元素可以存在内存未被占用的任意位置。")])]),t._v(" "),s("h5",{attrs:{id:"_2-2、静态链表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、静态链表"}},[t._v("#")]),t._v(" 2.2、静态链表")]),t._v(" "),s("p",[t._v("  用数组描述的链表。数组的元素由两个数据域组成，"),s("code",[t._v("data")]),t._v("和"),s("code",[t._v("cur")]),t._v("。"),s("code",[t._v("data")]),t._v("用来存放数据元素，"),s("code",[t._v("cur")]),t._v("相当于单链表中的 "),s("code",[t._v("next")]),t._v(" 指针。")]),t._v(" "),s("p",[s("strong",[t._v("优点")])]),t._v(" "),s("ul",[s("li",[t._v("在插入和删除操作时，只需要移动游标，不需要移动元素，从而改进在顺序存储结构中的插入和删除操作要移动大量元素的缺点。")])]),t._v(" "),s("p",[s("strong",[t._v("缺点")])]),t._v(" "),s("ul",[s("li",[t._v("没有解决连续存储分配带来的表长难以确定的问题。")]),t._v(" "),s("li",[t._v("失去了顺序存储结构随机存取的特性。")])]),t._v(" "),s("h5",{attrs:{id:"_2-3、循环链表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3、循环链表"}},[t._v("#")]),t._v(" 2.3、循环链表")]),t._v(" "),s("p",[t._v("  将单向链表中终端结点的指针端由空指针改为指向头结点，就使单链表形成一个环，这种首位相连的单链表称为循环链表。")]),t._v(" "),s("h5",{attrs:{id:"_2-4、双向链表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4、双向链表"}},[t._v("#")]),t._v(" 2.4、双向链表")]),t._v(" "),s("p",[t._v("  在单链表的每个节点中，再设置一个指向其前驱结点的指针。")]),t._v(" "),s("h3",{attrs:{id:"_2、栈和队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、栈和队列"}},[t._v("#")]),t._v(" 2、栈和队列")]),t._v(" "),s("h4",{attrs:{id:"_2-1-栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-栈"}},[t._v("#")]),t._v(" "),s("strong",[t._v("2.1 栈")])]),t._v(" "),s("p",[t._v("  栈是限定仅在表尾进行插入和删除操作的线性表。允许删除和插入的一端称为"),s("strong",[t._v("栈顶")]),t._v("，另一端称为"),s("strong",[t._v("栈底")]),t._v("。栈又被称为后进先出的线性表("),s("code",[t._v("Last In First Out")]),t._v("),简称"),s("code",[t._v("LIFO")]),t._v("操作。")]),t._v(" "),s("h4",{attrs:{id:"_2-2-队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-队列"}},[t._v("#")]),t._v(" "),s("strong",[t._v("2.2 队列")])]),t._v(" "),s("p",[t._v("  队列是只允许在一端进行插入操作，在另一端进行删除操作的线性表。是一种先进先出("),s("code",[t._v("First In First Out")]),t._v(")的线性表。")])])}),[],!1,null,null,null);s.default=r.exports}}]);