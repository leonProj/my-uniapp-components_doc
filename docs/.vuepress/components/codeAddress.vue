<template>
  <div>
    <br/>

    <a :href="ADDRESS_DIC[code].github" target="_blank" style="display: flex;align-items: center">
      <img height="30"
           src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png"
           title="github" width="30"/> github
    </a>

    <a :href="ADDRESS_DIC[code].gitee" target="_blank" style="display: flex;align-items: center;margin-top: 10px">
      <img height="30"
           src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png"
           title="github" width="30"/> gitee
    </a>

    <br/>
  </div>
</template>

<script>
const ADDRESS_DIC = {
  useRequest: {
    github: "https://github.com/leonProj/my-uniapp-components/blob/master/src/pages/hook/useRequest/index.vue",
    gitee: "https://gitee.com/leonProj/my-uniapp-components/blob/master/src/pages/hook/useRequest/index.vue"
  }
}
export default {
  props: {
    code: {
      type: String,
      required: true,
    }
  },
  data() {
    this.ADDRESS_DIC = ADDRESS_DIC
    return {}
  }
}
</script>

<style>

</style>
