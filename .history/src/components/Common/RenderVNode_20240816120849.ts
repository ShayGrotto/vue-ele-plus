import { defineComponent } from "vue";

export default defineComponent({
    props: {
        vNode: {
            type: [String, Object],
            required: true
        }
    },
    set
})