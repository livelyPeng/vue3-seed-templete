<template>
  <div class="home">
   <p>我是子组件textLabel：<textLabel content="Welcome to Your Vue3.0 + TypeScript App"/></p>
   <p>我是子组件pl-button：<pl-button colorType="blue" @click-item = "clickItem"/></p>
    <!-- 基本玩法 -->
    <div>
       <p>基本玩法</p>
       <span style="padding: 0 10px">{{msg}}</span>
       <button @click="add" style="margin: 0 10px">add</button>
       <button @click="reduce" style="margin: 0 10px">reduce</button>
      <div style="margin-top: 20px;">
         <button @click="handleClick">count: {{state.count}}  </button>
         <p>name: {{ textObj.name }}, age: {{ textObj.age }}</p>
      </div>
    </div>
    <div>
      <p>深入使用</p>
      <p>computed-> 2.0: {{ routerpath }}</p>
      <p>computed-> 3.0: {{ sex }}</p>
      <p>方法返回: {{ numFun('我是一个方法需要返回一个值') }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, reactive, onMounted, ComputedRef, computed, getCurrentInstance, watch } from 'vue';
import textLabel from '@/components/textLabel';
import plButton from '@/components/pl-button'
interface textObjType {
  name: string;
  age: string | number
}
interface numFunType {
   (val: string, name?: any): void;
}
// defineComponent只为了更好的TS，同时是一个同步组件
export default defineComponent({
  name: 'Home',
  components: {
    textLabel,
    plButton
  },
  // 什么周期变化可见public下面DeclarationPeriod文件
   // Options API
  // 两种形式的生命周期函数可以共存（当然实际使用的时候最好只选用一种），它们都会被执行。
  // Composition API形式的生命周期函数都是在 setup 方法中被调用注册。
  mounted() {
      // console.log('>>>>>> mounted 1')
  },
  // Options API 写计算属性
  computed: {
    routerpath() {
      return this.$route.path;
    },
  },
  // 3.0的写法
  setup () {
     // Composition API
    onMounted (() => {
      //  console.log(numFun('1211'))
    })
     const instance = getCurrentInstance(); // 获取当前组件的实例

     //  ref定义基本类型数据，reactive定义复杂类型数据

     // 通过ref定义的变量，如果需要改变，你得用value方式去改变
     // 第一种，不加约束
     //  const msg = ref(0)
     // 第二种加了约束
     const msg: Ref<number> = ref(0)
    
     // 不加约束的定义
     const state = reactive({ count: 0 });
     const handleClick = () => state.count++;
     // 加上约束的定义
     const textObj: textObjType = reactive({
       name: '彭垒',
       age: 18
     })
     // Composition API计算属性
     const sex: ComputedRef<string> = computed(() => {
         return '男'
     })
     const add = () => {
        msg.value++
     }
     const reduce = () => {
        msg.value--
     }
     // 方法返回
     const numFun: numFunType = (val, name) => {
         return val + '，好了，我给你返回了个 111111111111'
     }
     // 父组件接受子组件的值
     const clickItem = (mag: string, e: object)=>{
        console.log(mag, e)
     }
     // 监听器?监听state.count的变化
     watch(()=> { return state.count}, (count,prevcount)=>{
         console.log('我是state，我变化啦：',count,prevcount)
     })

     return {
       msg,
       add,
       reduce,
       state,
       textObj,
       sex,
       handleClick,
       numFun,
       clickItem
     }
  },
  // 2.0的写法依然支持
  // data () {
  //   return {
  //     msg: '哈哈哈'
  //   }
  // }
});
</script>
