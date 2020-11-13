import { defineComponent, reactive, onMounted } from 'vue';

// 模仿react Hooks

// 第一种
const textLabel = defineComponent({
  props: {
    content: {
      type: String,
      default: ''
    },
  },
  setup(props) {

    onMounted(() => {
      //   console.log('mounted!');
    });

    return () => {
      const { content } = props;
      return <span>{content}</span>;
    }
  }
})

// 第二种 
// const textLabel = defineComponent({
//   name: 'textLabel',
//   props: {
//     content: {
//       type: String,
//       default: ''
//     },
//   },
//   setup(props, context) {
//     onMounted(() => { console.log('mounted!'); });
//     return {
//       props,
//       context
//     }
//   },
//   render () {
//     console.log(this.context)
//     const { content } = this.props;
//     return <span>{content}</span>;
//   }
// })

 export default textLabel