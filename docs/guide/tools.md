---
title: 常用工具
---

# 常用工具集

## mapU.triggerEvent

触发高德实例的某一事件

```javascript
mapU.triggerEvent( instance, eventName, extArgs)

instance.on(eventName, {target, ...extArgs})
```

触发非DOM事件

触发非DOM事件eventName时，extArgs将扩展到事件监听函数（handler）接受到的event参数中。

如:在extArgs内写入{m:10,p:2}，eventName监听函数（handler）可以接收到包含m,p两个key值的event对象。



## mapU.transformCoord

转换经纬度方法, 预设为 `WGS84`  ===>   `AMap`

`@params {Array} lnglat` 经纬度数组

`@params {Any} reserve` 

    - `reserve` 缺省时，使用默认预设转换
    - `reserve` 为坐标系时，取坐标系为源坐标系，此时可以传入第三参数作为目标坐标系，不传使用预设目标 `AMap`
    - `reserve` 转 `Boolean` 为 `true` 时，反转预设

 
```javascript
mapU.transformCoord([120, 30])  // WGS84  ===>   AMap
mapU.transformCoord([120, 30], true)    //  AMap ===>   WGS84
mapU.transformCoord([120, 30], _source) // _source  ===> AMap
mapU.transformCoord([120, 30], _source, _target) // _source  ===> _target
```




内部使用`gcoord` 转换坐标 [github](https://github.com/hujiulong/gcoord)

设置 源坐标系和目标坐标系，必须满足

|CRS          |  	坐标格式|	说明  |
| :--: | :--: | :--: |
|gcoord.WGS84|	[lng,lat]|	|WGS-84坐标系，GPS设备获取的经纬度坐标|
|gcoord.GCJ02	|[lng,lat]|	GCJ-02坐标系，google中国地图、soso地图、aliyun地图、mapabc地图和高德地图所用的经纬度坐标
|gcoord.BD09	|[lng,lat]|	BD-09坐标系，百度地图采用的经纬度坐标|
|gcoord.BD09LL	|[lng,lat]|	同BD09|
|gcoord.BD09MC	|[x,y]|	BD-09米制坐标，百度地图采用的米制坐标，单位：米|
|gcoord.BD09Meter	|[x,y]|	同BD09MC|
|gcoord.Baidu	|[lng,lat]|	百度坐标系，BD-09坐标系别名，同BD-09|
|gcoord.BMap	|[lng,lat]|	百度地图，BD-09坐标系别名，同BD-09|
|gcoord.AMap	|[lng,lat]|	高德地图，同GCJ-02|
|gcoord.WebMercator	|[x,y]|	Web Mercator投影，墨卡托投影，同EPSG3857，单位：米|
|gcoord.WGS1984	|[lng,lat]|	WGS-84坐标系别名，同WGS-84|
|gcoord.EPSG4326	|[lng,lat]|	WGS-84坐标系别名，同WGS-84|
|gcoord.EPSG3857	|[x,y]|	Web Mercator投影，同WebMercator，单位：米|
|gcoord.EPSG900913	|[x,y]|	Web Mercator投影，同WebMercator，单位：米|




## mapU.getAddressByLnglat




## mapU.getLngLatByAddress


## mapU.setCenter


## mapU.setLocation


## mapU.clearLocation


