---
title: 快速上手
---


## 简介

插件导出了`load`方法和`initMap` 方法，`load`方法执行内部会返回内部实现的有`initMap`方法的加载器实例。插件导出的`initMap`方法和内部加载器的`initMap`方法都指向加载器实例方法。

调用`load`初始化插件，开始加载高德API。`initMap`依赖于插件初始化加载的高德API，内部类似于`promise`实现。

调用`initMap`初始化地图时，如果`load`已经加载完成，则直接初始化地图，否则等待加载完成在初始化地图。

保证了只有一个加载器实例，只会加载一次。`initMap` 始终会在加载完成之后调用。

初始化地图会在第二参数初始化成功回调中传递地图包装类`amapUpper`的实例`mapU`,实现的方法都挂在在实例上。


## 安装
推荐 npm 安装。
```sh
npm i -S amap-upper
```
## npm方式导入

```javascript
import amapUpper from 'amap-upper'
```


## 初始化插件
`amapUpper.load`

`@params`：调用`amap-upper`的`load`方法,参数是高德的`@amap/amap-jsapi-loader` 加载器的参数。

`@returns`： 返回内部实现的加载实例，实例上有初始化地图`initMap` 方法

[使用高德 JSAPI Loader](https://lbs.amap.com/api/jsapi-v2/guide/abc/load)

调用`load` 方法内部会使用`npm` 方式安装`amap JSAPI Loader`加载高德`api`
```javascript
amapUpper.load({
  key: 'e4493da5c834ae788f61df36e4a98be8', // 申请好的Web端开发者Key，首次调用 load 时必填
  version: '1.4.15', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  plugins: ['AMap.Geocoder', 'AMap.PolyEditor', 'AMap.MarkerClusterer', 'AMap.MouseTool', 'AMap.Autocomplete', 'AMap.PlaceSearch'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  AMapUI: { // 是否加载 AMapUI，缺省不加载
    version: '1.1', // AMapUI 缺省 1.1
    plugins: [] // 需要加载的 AMapUI ui插件
  }
})
```


## 初始化地图
`amapUpper.initMap`

`@params`：`MapOptions`,`mapDoneCallback`

`@returns`： 返回内部实现的加载实例，实例上有初始化地图`initMap` 方法



#### MapOptions
地图初始化配置，除`target`之外，全部是高德API 提供的地图参数 `MapOptions`

| 参数 MapOptions | 值            | 是否原生  |  是否必填 |
| ------------- |:-------------:| ------:  | ---------:|
| target       | 地图dom容器      | 否       | 是        |
| [更多参数](https://lbs.amap.com/api/javascript-api/reference/map)   |

#### mapDoneCallback

地图初始化完成回调，接受唯一参数 控制当前地图的地图封装类`amapUpper`的实例`mapU`，


#### 方式一


```javascript
amapUpper.load(loaderOptions).initMap(
  { target: this.$refs.app, ...MapOptions },
  mapU => {
    mapU.markerClusterer(options)
    mapU.massMarks(options)
    mapU.mapMarkers(options)
  }
)
```


#### 方式二



```javascript

amapUpper.load(loaderOptions)

amapUpper.initMap(
  { target: this.$refs.app, ...MapOptions },
  mapU => {
    mapU.markerClusterer(options)
    mapU.massMarks(options)
    mapU.mapMarkers(options)
  }
)
```



## 兼容高德原生 SDK
`amap-upper` 能够抛开高德原生 SDK 实现一些功能，但对于部分定制化程度较高的场景而言，可能还是需要引入高德原生 SDK 来支持。这章将介绍如何在 `amap-upper` 中使用高德 SDK。

##### 对于高德 SDK 
调用`amapUpper.load`方法初始化高德SDK 时 ，加载完成会在 `window` 上挂载 AMap ,兼容原生高德`AMap.xxx`写法

::: danger 注意事项
1. 避免在项目中使用AMap关键字，避免和全局挂在的高德SDK 冲突。
2. 若 `eslint` 报错 `AMap is undefined` 之类的错误。请将 `AMap` 配置到 `.eslintrc` 的 `globals` 中。
:::



##### 对于地图实例
调用`amapUpper.initMap`方法初始化地图时，第二参数`mapDoneCallback` 回调函数中接受的 `amapUpper`的实例`mapU`中，其中私有属性`map` 保存着当前控制的地图原生实例。

你可以：
```javascript
// 调用高德原生实例方法
mapU.map.xxx()
```