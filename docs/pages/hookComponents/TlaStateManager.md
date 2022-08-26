---
title: TlaStateManager
---
<demo-model code="TlaStateManager"></demo-model>

:::tip 提示
依赖hook:<a :href="$withBase('/pages/hook/useRequest')">useRequest</a>
:::

### 基本使用

`watchedState`是数组可监听多个，retry 代表是否显示重试按钮。此时需要处理@retry事件

```vue
<template>
  <TlaStateManager :watched-state="[loadData]" retry @retry="loadData.run(1)">
    <template v-if="loadData.data">
      <u-button @click="loadData.run(1)">加载数据(成功)</u-button>
      <u-button @click="loadData.run(0)">加载数据(失败)</u-button>
      <view style="text-align: center;font-weight: bold;color: #4aec50">
        {{ loadData.data }}
      </view>
    </template>
  </TlaStateManager>
</template>

<script>
import TlaStateManager from "@/components/TlaStateManager/TlaStateManager";
import {useRequest} from "@/hook/useRequest";

const api = (param) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(param){
        resolve(`加载成功√ 参数为：${param}`)
      }else {
        reject(`fail参数为：${param}`)
      }
    }, 1000)
  })
}
export default {
  components: {
    TlaStateManager
  },
  onLoad(){
    this.loadData.run(1)
  },
  data() {
    return {
      loadData: useRequest(
          (param) => {
            return api(param)
          },
          {
            manual:true,
            onError: (e) => {
              uni.showToast({
                title: e,
                icon: 'error',
              })
            }
          }),
    }
  }
}
</script>

```
### 此页面演示源代码地址

:::tip
<code-address code='TlaStateManager'/>
:::

### Api


| 参数          |       说明       |  类型  | 默认值 | 是否必填 | 可选值 |
| --------------- | :----------------: | :-------: | :------: | ---------- | -------- |
| watched-state |   被监听的状态   |  Array  |   -   | 是       | -      |
| retry         | 是否显示重试按钮 | Boolean | false | 否       | -      |

### Event


| 参数  |         说明         |
| ------- | :--------------------: |
| retry | 点击重试按钮时候触发 |
