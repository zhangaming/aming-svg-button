# aming-svg-button

## 使用方式 全局引入 直接使用标签

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
<aming-svg-button :size="'large'">Confirm</aming-svg-button>
<aming-svg-button >确定</aming-svg-button>
<aming-svg-button :size="'small'"></aming-svg-button>
```

# smile 按钮

## 属性

```html 提供active 关闭点击动一下  和颜色数组
  <!-- vue -->
  <aming-smile ></aming-smile>
  <aming-smile :active="false"></aming-smile>
  <aming-smile :colorAry="['#fff','#ccc']"></aming-smile>
```