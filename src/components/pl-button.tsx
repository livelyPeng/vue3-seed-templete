import { defineComponent, onMounted, PropType } from 'vue';

// 模仿react Hooks
type colorType = 'red' | 'blue' | 'rosybrown';

interface buttonsType {
  (val: string, context: any): any
}

const buttons: buttonsType = function (val, context) {
    function handleClick (msg: string, e: object): any {
       context.emit("click-item", msg, e);
    }
    return <p onClick={(e) => handleClick('我就是给父组件的值', e)}><button class={`${val}`} style={{color: `${val}`}}>我是按钮，我的颜色是{val}</button></p>
}

export default defineComponent({
  name: 'plButton',
  props: {
    colorType: {
        type: String as PropType<colorType>,
        default: 'medium'
    },
  },
  setup(props, context) {

    onMounted(() => {
      // console.log('plButton mounted!');
    });

    return () => {
      const { colorType } = props;
      return buttons(colorType, context);
    }
  }
})