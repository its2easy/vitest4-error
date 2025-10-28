import { mount, type ComponentMountingOptions } from "@vue/test-utils";
import { describe, it, expect, vi, afterEach } from "vitest";
import Parent from "@/components/Parent.vue";
import Child from "@/components/Child.vue";

import vuetify from '@/plugins/vuetify';

function createWrapper() {
    const options: ComponentMountingOptions<typeof Parent> = {
        global: {
            //plugins: [vuetify], // usage is not required
            stubs: {
                Child: true,
            },
        },
    };
    return mount(Parent, options);
}

describe("Parent.vue", () => {
    it("deletes Child when clicked on the delete button", async () => {
        const wrapper = createWrapper();
        const firstChild = wrapper.findAllComponents(Child)[0];

        expect(wrapper.findAllComponents(Child)).toHaveLength(2);

        firstChild.vm.$emit("deleteItem");
        await wrapper.vm.$nextTick();

        expect(wrapper.findAllComponents(Child)).toHaveLength(1);
    });
});
