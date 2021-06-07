# aming-svg-button

## 使用方式

main.js 引入
```js
import amingSvgButton from 'aming-svg-button'
import 'aming-svg-button/lib/aming-svg-button.css'

Vue.use(amingSvgButton)
```

使用 三种类型选择  :typeColor="'white'
```html
<aming-svg-button ></aming-svg-button>
<aming-svg-button :typeColor="'white'"></aming-svg-button>
<aming-svg-button :typeColor="'grey'"></aming-svg-button>
```

## 尺寸 使用三种 size  large small 和默认

```html
<amingSvgButton :size="'large'">Confirm</amingSvgButton>
<amingSvgButton >确定</amingSvgButton>
<amingSvgButton :size="'small'"></amingSvgButton>
```