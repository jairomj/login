import { defineComponent, ref } from "vue";

export default defineComponent({
    setup: () => {
        console.log('setup');
        const counter = ref(0);
        return {
            counter,
    };
},
});