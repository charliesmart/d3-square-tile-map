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

By default, the map will render at 100% width of the container element. See the **properties** section to learn how to change that.
