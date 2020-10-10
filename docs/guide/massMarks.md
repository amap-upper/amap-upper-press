---
title: 海量点
---

# 海量点操作

基于 canvas 画布平铺点位，可支持更多的数据量点位绘制。更好的性能表现。

## mapU.massMarks

新增一组海量点到地图。海量点基于 canvas ，有更好的性能表现。

`@params`: [massMarksOptions](#massMarksOptions) 海量点位组配置参数

`@returns`: `AMap.MassMarks` 海量点对实例

#### massMarksOptions

| 参数  |   类型    |     说明                                                 |
| :-----------------| :----------:| :----------------------------------------|   
| type | `String`   | 当前海量点位组唯一标识 |
| data | `Array`  | 海量点位组数据源，`dataItem`至少包括`lnglat` 经纬度信息数组,              |
| markerStyles | `Array`   | 海量点位组用到的icon数组，`stylesItem` 包含`iconName`：`string`和`icon`：[StyleObjectOptions](https://lbs.amap.com/api/javascript-api/reference/layer#MassMarks) |
| initIcon | `String`   | 点位默认初始图标，对应 `stylesItem.iconName`, 默认为图标数组第一项|
| setLastIcon | `Bollean`   | 默认 `true`，是否恢复上一个点击激活点位的图标|
| options | `Object`   | [ 高德`AMap.MassMarks`配置项](https://lbs.amap.com/api/javascript-api/reference/layer#MassMarks|
| styleFormatter | `Function`   | 一个点位 `style` 格式化函数，生成海量点实例之前调用，接收数据项 `item` ,`index`, `icons`作为参数，返回点位对应图标索引值 `style` ，一般用于特殊点图标修改 |
| clickCallback | `Function`   | 点位点击回调函数，接收 事件对象`e`,上一个点击点位`oldClickMassData`, 根据 `markerStyles` 生成的所有图标对象组`icons`。可以调用`e.data.setIcon(icons.xxx)` 改变点位。每一次点击点位之后会在下一事件环中重新绘制海量点。 |



- `dataItem` 点数据引用：

    每次点击事件触发，时间对象 e 会包含对当前点击点位的数据项的引用。 

    | 属性 | 描述 |
    | :---| :--- |
    | `_u_lastIcon` | 记录的点图标改变之前的点 |
    
    | 方法 | 描述 |
    | :---| :--- |
    | `setIcon` | 定义了与 `marker` 实例相似的 `setIcon` 方法，接受配置的 `iconName` 作为参数，设置该点位图标， 内部会记录该点的上一个点位图标 iconName ，作为 `_u_lastIcon` 的值 |

- `mass` 实例 
    | 属性 | 描述 |
    | :---| :--- |
    | `_u_data` | 数据源 |
    | `_u_styles` | markerStyles 格式化后的 styles |
    | `_u_massOptions` | 本组海量点配置信息 |

```javascript
function getPoints () {
  const point = []
  for (let i = 0; i < 5000; i++) {
    point.push({
      lnglat: [120 + Math.random(), 30 + Math.random()]
    })
  }
  return point
}

const markerStyles = [
  {
    iconName: 'normal',
    icon: {
      url: cameraIcon,
      anchor: new AMap.Pixel(16, 36),
      size: new AMap.Size(32, 36)
    }
  },
  {
    iconName: 'active',
    icon: {
      url: cameraIcon,
      anchor: new AMap.Pixel(16, 50),
      size: new AMap.Size(50, 70)
    }
  }
]

mapC.massMarks({
  type: 'default',
  data: getPoints(),
  markerStyles,
  initIcon: 'normal',
  setLastIcon: true,
  clickCallback: (e) => {
    e.data.setIcon('active')
  }
})
```



## mapU.renderMassMarksByType

重绘一组海量点，解决有时候改变 `dataItem.style` 值不触发重新绘制导致图标改变在下一次重绘才生效问题。

`@params`: `type` 海量点组唯一标识

`@returns`: `AMap.MassMarks` 海量点实例


## mapU.getMassMarksByType
获取一组海量点 mass 实例

`@params`: `type` 海量点组唯一标识

`@returns`: `AMap.MassMarks` 海量点实例

## mapU.showMassMarksByType
显示一组海量点，

`@params`: `type` 海量点组唯一标识

`@returns`: `AMap.MassMarks` 海量点实例

## mapU.hideMassMarksByType
隐藏一组海量点，

`@params`: `type` 海量点组唯一标识

`@returns`: `AMap.MassMarks` 海量点实例

## mapU.clearMassMarksByType
清除一组海量点，

`@params`: `type` 海量点组唯一标识

`@returns`: `AMap.MassMarks` 海量点实例

## mapU.addMassMarksByType
向一组海量点追加数据

`@params`: `type` 海量点组唯一标识， data 数据源

`@returns`: `AMap.MassMarks` 海量点实例

## mapU.getMassExtDataByType
获取一组海量点所有数据源

`@params`: `type` 海量点组唯一标识

`@returns`: `data` 海量点实例数据源

## mapU.inactiveLastMassMarks
重置上一次点击激活的点位图标。