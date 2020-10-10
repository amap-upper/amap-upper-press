---
title: 普通轨迹回放
---

# 普通轨迹回放

基于 Marker 移动的简单轨迹回放，支持轨迹循环轨迹回放，已经过路径样式，暂停，停止，继续，清除 轨迹回放。

不支持移动中轨迹回放速度修改。

## mapU.markerMove

`@params`: [markerMoveOptions](#markerMoveOptions) 海量点位组配置参数

`@returns`: `group` 缓存轨迹移动数据对象 `{path, speed, polyline, marker, passPolyline}`

#### markerMoveOptions

| 参数  |   类型    |     说明                                                 |
| :-----------------| :----------:| :----------------------------------------|   
| type | `String`   | 轨迹回放分组标识 |
| path | `Array`   | 轨迹路径二维数组，`[[lng, lat],[lng, lat]]` |
| markerOptions | `Object`   | [移动点位配置项](https://lbs.amap.com/api/javascript-api/reference/overlay#marker) |
| polylineOptions | `Object`   | [轨迹样式配置](https://lbs.amap.com/api/javascript-api/reference/overlay#polyline) |
| showPassPolyline | `Boolean`   | 是否显示经过的路径样式 |
| passPolylineOptions | `Object`   | [已经过轨迹配置项](https://lbs.amap.com/api/javascript-api/reference/overlay#polyline) |
| moveEndCallback | `Function`   | 运动结束回调 |
| movingCalback | `Function`   | 运动中回调，参数 `Object`  对象的格式是 `{passedPath:[[lng, lat],[lng, lat]]}` 。其中passedPath为Marker对象在moveAlong或者moveTo过程中已经走过的路径。 |


## mapU.getMarkerMove

获取轨迹回放缓存对象

`@params`: `type` 唯一标识

`@returns`: `group` 缓存轨迹移动数据对象`{path, speed, polyline, marker, passPolyline}`

## mapU.reStartMarkerMove

重新开始轨迹回放

`@params`: `type` 唯一标识

`@returns`: `group` 缓存轨迹移动数据对象`{path, speed, polyline, marker, passPolyline}`

## mapU.pauseMarkerMove

暂停轨迹回放

`@params`: `type` 唯一标识

`@returns`: `group` 缓存轨迹移动数据对象`{path, speed, polyline, marker, passPolyline}`

## mapU.resumeMarkerMove

恢复轨迹回放

`@params`: `type` 唯一标识

`@returns`: `group` 缓存轨迹移动数据对象`{path, speed, polyline, marker, passPolyline}`

## mapU.stopMarkerMove

停止轨迹回放

`@params`: `type` 唯一标识

`@returns`: `group` 缓存轨迹移动数据对象`{path, speed, polyline, marker, passPolyline}`

## mapU.clearMarkerMove

清除轨迹回放

`@params`: `type` 唯一标识

`@returns`: `group` 缓存轨迹移动数据对象`{path, speed, polyline, marker, passPolyline}`