---
title: 信息窗体
---

## mapU.openInfoWindow

向地图添加信息窗体

`@params`: [infoWindowOptions](#infoWindowOptions) 信息窗体配置参数

`@returns`: `AMap.InfoWindow` 信息窗体实例


#### infoWindowOptions

| 参数  | 类型 |  说明  |
| :- | :-----:| :--|   
| target | `object`   | 信息窗体dom元素 |
| longitude | `number`   | 经度 |
| latitude | `number`   | 纬度 |
| offset | `array`   | 信息窗体偏移量[X,Y] |
| closeWhenClickMap | `Boolean`   | 点击地图是否关闭弹窗，默认 true |
| closeCallback | `Function`   | 信息窗体关闭回调 |
| infoWindowOpt | `Object`   | 信息窗体配置项，配置与上面重复会覆盖掉上面的配置 |


```javascript
mapU.openInfoWindow({
  target: this.$refs.xxxx.$el,
  longitude: 120,
  latitude: 30,
  closeWhenClickMap: false,
  offset: [0, 0]
})
```

## mapU.clearInfoWindow

清除信息窗体。

```javascript
mapU.clearInfoWindow()
```
