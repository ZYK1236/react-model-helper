<p align="center"><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="100" src="https://reactjs.org/logo-og.png" alt="Vue logo"></a></p>
<h2 align="center">react-model-helper</h2>

## 使用说明
* clone到本地后，打开chrome开发者模式后，将文件夹 📁 拖入应用扩展里面即可使用
* 记得在modal的index.js中加上一句代码 `window.getState = getState`
* 输入的是react-model中定义的model名字，例如Demo,Login,如下代码所示
```js
import { Model } from 'react-model'
import Login from './login'
import Demo from './demo'

const models = { Login,Demo } // 就是这里的名字

export const { getInitialState, useStore, getState, actions, subscribe, unsubscribe } = Model(models)
window.getState = getState
```
