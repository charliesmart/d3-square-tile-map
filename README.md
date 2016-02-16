# d3-square-tile-map
A map of the United States where each state is an equal sized square.

###Rendering the map
Create the element that will contain your map.
```html
<div class="map-container"></div>
```
Call `d3.squareMap.render()` on your container element.
```javascript
d3.squareMap.render('.map-container');
```
Be sure to render your map only *after* you have modified its properties.

By default, the map will render at 100% width of the container element. See the **changing properties** section to learn how to change that.

###Changing properties
To change properties of the map, use the `setAttr()` method. This method takes an object of the properties you wish to change as its argument. Be sure to call the `render()` method only after modifying properties.
```javascript
d3.squareMap.setAttr({
    colorSet: 'Greens',
    labelStyle: 'full'
}).render('.map-container');
```
The following table contains a list of all modifiable properties.

|Property     |Description       |Default        |
|-------------|------------------|---------------|
|`width`      |Width of the map. When it is set to `null`, the map fills the width of its containing element|`null`|
|`colorSet`   |The ColorBrewer palette used for the map. |`'Blues'`|
