---
title: useRequest
---
<demo-model code="useRequest"></demo-model>

## 基本使用

`useRequest`第一个参数接受一个Promise
:::tip 提示
`run`方法每次调用时会将 `loading`设为 `true`，`data`置为 `null`,`error`置为 `null`。
:::

```vue

<template>
  <u-button @click="loadData.run">加载数据</u-button>
  <view v-if="loadData.loading">loading...</view>
  <view v-else-if="loadData.error">error</view>
  <view v-else>{{ loadData.data }}</view>
</template>


<script>
import {useRequest} from "@/utils/useRequest";

const api = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("加载成功√")
    }, 1000)
  })
}

export default {
  data() {
    return {
      loadData: useRequest(
          () => {
            return api()
          })
    }
  }
}
</script>
```

## 手动加载

`useRequest`第而个参数是一个对象，其中 `manual`属性默认值 `false`，将会自动加载，设置为 `ture`则需要手动触发

```vue

<script>
export default {
  data() {
    return {
      loadData: useRequest(
          () => {
            return api()
          },
          {
            manual: true
          }),
    }
  }
}
</script>
```

## 静态刷新

调用 `reFresh`方法。可以静态刷新数据。
:::tip 提示

1. reFresh不会触发加载中状态，也不会将已经获得的数据清空。而是在获取新数据后，对现有的数据进行替换。因为没有loading，所以看起来像是静态刷新一样。
2. 当然如果你也想要知道是否正在静态刷新，有个 `isRefresh`属性，`ture`为正在静态刷新，`false`为否。
3. `reFresh`主要用于非首次加载数据。
   :::

```vue

<template>
  <u-button @click="loadData.reFresh">静态刷新</u-button>
</template>
```

## 完全控制

`onSuccess`,`onError`,`onComplete`,可以让您完全控制，而不使用方法返回的loading，error和data。
:::tip 提示 常用onSuccess，对一些需要格式化的数据进行处理。
:::

```vue

<template>
  <u-button @click="loadData.run()">加载数据</u-button>
  <view>
    <view v-if="loading">loading...</view>
    <view v-else-if="error">{{ error }}</view>
    <view v-else>{{ data || '暂未加载数据' }}</view>
  </view>
</template>
<script>
import {useRequest} from "@/utils/useRequest";

const api = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("加载成功√")
    }, 1000)
  })
}
export default {
  data() {
    return {
      loading: false,
      data: null,
      error: null,
      /* api */
      loadData: useRequest(
          () => {
            this.loading = true
            return api()
          },
          {
            manual: true,
            onSuccess: (e) => {
              if (this.error) {
                this.error = null
              }
              this.data = e
            },
            onError: (e) => {
              this.error = e
            },
            onComplete: (e) => {
              this.loading = false
            }
          }),
    }
  },
}
</script>
```
### 此页面演示源代码地址

:::tip
<code-address code='useRequest'/>
:::

## API

### useRequest

```ts
function useRequest(apiFunc: Promise, options: Object) {
    // ...
    return state
}
```

### 参数


| 参数    |   说明   |      类型      | 默认值 | 是否必填 | 可选值                  |
| --------- | :--------: | :---------------: | :------: |------| ------------------------- |
| apiFunc | 接口方法 | 必须返回Promise |   -   | 是    | -                       |
| options |  配置项  |     Object     |   -   | 否    | [options说明](#options) |

### 返回值


| 参数    |    说明    |        类型        |  默认值  | 可选值 |
| --------- |:--------:|:----------------:|:-----:|-----|
| data    |  返回的数据   |       any        | null  | -   |
| loading |  是否正在加载  |     Boolean      | false | -   |
|    error     |   错误信息   |       any        | null  | -   |
|    isRefresh     | 是否正在静态刷新 |     Boolean      | false | -   |
|         run         |   加载数据   | Function(params) |   -   | -   |
|          reFresh        |      静态刷新    |     Function(params)             |   -   | -   |

### *options*


|    参数    |         说明         |     类型     | 默认值 | 是否必填 | 可选值 |
| :----------: | :--------------------: | :------------: | :------: |------| :------: |
|   manual   |     是否手动加载     |   Boolean   | false | 否    |   -   |
| onSuccess |      加载成功时      | (result)=>{} |   -   | 否    |   -   |
|  onError  |      加载失败时      | (result)=>{} |   -   | 否    |   -   |
| onComplete | 无论成功失败都会执行 |    ()=>{}    |   -   | 否    |   -   |
