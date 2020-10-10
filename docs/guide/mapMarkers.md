---
title: 普通点位组
---

## mapU.mapMarkers

新增一组普通点位到地图。

`@params`: [mapMarkersOptions](#mapMarkersOptions) 点位组配置参数

`@returns`: `AMap.OverlayGroup` 群组对象



#### mapMarkersOptions

| 参数  |   类型    |     说明                                                    |
| :-----------------| :----------:| :----------------------------------------|   
| type | `String`   | 当前点位组唯一标识 |
| data | `Array`  | 点位组数据源，`dataItem`至少包括`longitude`,`latitude`               |
| markerStyles | `Array`   | 点位组用到的icon数组，`markerStylesItem` 包含`iconName`：`string`和`icon`：[iconOptions](https://lbs.amap.com/api/javascript-api/reference/overlay#icon) |
| initIcon | `String`   | 点位默认初始图标，对应 `markerStylesItem.iconName`, 默认为图标数组第一项|
| setLastIcon | `Bollean`   | 默认 `true`，是否恢复上一个点击激活点位的图标|
| markerOpt | `Object`   | [ 高德`Marker`配置项](https://lbs.amap.com/api/javascript-api/reference/overlay#marker)，如果包含 `icon` 会覆盖掉设置的 `initIcon` |
| markerFormatter | `Function`   | 一个点位格式化函数，数据源循环生成 `marker` 的时候调用，接收数据项 `item` ,`index`, `icons`作为参数，返回点位配置参数，后置于 `markerOpt` ，一般用于特殊点配置修改 |
| clickCallback | `Function`   | 点位点击回调函数，接收 事件对象`e`,上一个点击点位`oldClickMarker`, 根据 `markerStyles` 生成的所有图标对象组`icons`。可以调用`e.target.setIcon(icons.xxx)` 改变点位,  |

#### 高德实例
- `marker` 点实例：

    数据循环生成`AMap.Marker` 实例, [原生方法](https://lbs.amap.com/api/javascript-api/reference/overlay#marker)
    
    | 属性 | 描述 |
    | :---| :--- |
    | `_u_dataIndex` | 记录的对应源数据数组的索引 |
    | `_u_lastIcon` | 记录的点图标改变之前的点 |

    | 方法 | 描述 |
    | :---| :--- |
    | `setIcon` | 重置了 `marker` 实例的 `setIcon` 方法，接受配置的 `iconName` 或者生成的 `icons` 中的 `icon` 作为参数，设置该点位图标， 内部会记录该点的上一个图标 `_u_lastIcon`|
    


- `overlayGroup` 点群组：

    `AMap.OverlayGroup` 实例, [原生方法](https://lbs.amap.com/api/javascript-api/reference/overlay#overlaygroup)

    | 属性 | 描述 |
    | :---| :--- |
    | `_u_data` | 记录的对应源数据数组 |
    | `_u_lastLength` | 记录的对应源数据数组长度，用于追加数据时计算 offset |
    | `_u_markersOptions` | 记录的对应点位组配置，用于追加数据。 |




```javascript

function getPoints (n) {
  const point = []
  for (let i = 0; i < n; i++) {
    point.push({
      longitude: 120 + Math.random(),
      latitude: 30 + Math.random()
    })
  }
  return point
}

const markerStyles = [
  {
    iconName: 'normal',
    icon: {
      size: new AMap.Size(26, 36), // 图标尺寸
      image: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png', // 图标的取图地址
      imageSize: new AMap.Size(26, 36), // 图标所用图片大小
      imageOffset: new AMap.Pixel(0, 0)// 图标取图偏移量
    }
  },
  {
    iconName: 'active',
    icon: {
      size: new AMap.Size(39, 54),
      image: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
      imageSize: new AMap.Size(39, 54),
      imageOffset: new AMap.Pixel(0, 0)
    }
  }
]

mapU.mapMarkers({
  type: 'default',
  data: getPoints(),
  markerStyles,
  setLastIcon: true,
  clickCallback: ({ target }, oldClickMarker, icons) => {
    target.setIcon('active')
    oldClickMarker.setIcon(icons['active'])
  }
})
```


## mapU.getMapMarkersByType


获取一组点位组。

`@params`: `type` 组标识

`@returns`: OverlayGroup 群组对象

```javascript
mapU.getMapMarkersByType('default')
```

## mapU.showMapMarkersByType

显示一组点位组。

`@params`: `type` 组标识

`@returns`: OverlayGroup 群组对象


```javascript
mapU.showMapMarkersByType('default')
```

## mapU.hideMapMarkersByType

隐藏一组点位组。

`@params`: `type` 组标识

`@returns`: OverlayGroup 群组对象


```javascript
mapU.hideMapMarkersByType('default')
```

## mapU.clearMapMarkersByType

清除一组点位组。

`@params`: `type` 组标识

`@returns`: OverlayGroup 群组对象


```javascript
mapU.clearMapMarkersByType('default')
```

## mapU.addMapMarkersByType

向点位组追加数据。

`@params`: `type` 组标识， `data` 要追加的数据

`@returns`: OverlayGroup 群组对象


```javascript
mapU.addMapMarkersByType('default', getPoints())
```

## mapU.getMarkerExtDataByType

获取一组点位组数据源。

`@params`: `type` 组标识

`@returns`: data 点位组数据源


```javascript
mapU.getMarkerExtDataByType('default')
```

## mapU.inactiveLastMarker

恢复上一个点击点位的图标。


```javascript
mapU.inactiveLastMarker()
```