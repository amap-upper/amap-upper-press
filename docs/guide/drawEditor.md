---
title: 绘制编辑工具
---

# 绘制编辑


鼠标工具，线面编辑，绘制转编辑等功能。

## mapU.mouseToolDraw

鼠标工具插件。通过该插件，可进行鼠标画标记点、线、多边形、矩形、圆、距离量测、面积量测、拉框放大、拉框缩小等功能。

有默认样式配置


`@params`: [mouseToolDrawOptions](#mouseToolDrawOptions) 鼠标绘制工具配置。

#### mouseToolDrawOptions

| 参数  |   类型    |     说明                                                 |
| :-----------------| :----------:| :----------------------------------------|
| type | `String`   | 鼠标绘制工具方法名。[支持的方法](https://lbs.amap.com/api/javascript-api/reference/plugin#AMap.MouseTool) |
| styleOption | `Object`   | 鼠标绘制工具绘制的样式。[样式配置](https://lbs.amap.com/api/javascript-api/reference/plugin#AMap.MouseTool) |
| clearLast | `Boolean`   | 是否清除之前绘制的所有覆盖物， 默认为 `false` |
| clearPoly | `Boolean`   | 是否在绘制结束清除当前绘制的覆盖物 默认为 `false` |
| callback | `Function`   | 绘制结束回调，接收 `Poly` 绘制的覆盖物对象为参数 |



## mapU.newPolyEditor

折线，多边形绘制编辑工具，传入的路径有效则直接开始编辑，否则调用绘制工具绘制结束后转入编辑。

`@params`: [newPolyEditorOptions](#newPolyEditorOptions) 鼠标绘制工具配置。

#### newPolyEditorOptions

| 参数  |   类型    |     说明                                                 |
| :-----------------| :----------:| :----------------------------------------|
| type | `String`   | 要编辑的类型， `polyline`  或  `polygon` |
| path | `Array`   | 要编辑的折线或多边形的数据，缺省则调用鼠标工具绘制后转编辑 |
| clearLast | `Boolean`   | 是否清除之前编辑的覆盖物对象 |
| styleOption | `Object`   | 高德 `PolylineOptions` 或 `PolygonOptions` |
| editorStartCallback | `Function`   | 编辑工具开始编辑回调，参数为 编辑器实例 `editor` ,调用 `editor.close()` 结束编辑 |
| editorEndCallback | `Function`   | 编辑结束回调，在调用 `editor.close()` 后触发，传入 `type`类型, `target` 编辑后的覆盖物对象 |