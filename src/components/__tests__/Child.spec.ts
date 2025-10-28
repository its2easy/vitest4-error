import { mount, type ComponentMountingOptions } from "@vue/test-utils";
import { describe, it, expect, vi, afterEach } from "vitest";
import Child from "@/components/Child.vue";

import vuetify from "@/plugins/vuetify";

function createWrapper() {
    const options: ComponentMountingOptions<typeof Child> = {
        global: {
            //plugins: [vuetify],  // usage is not required to trigger an error
        },
        props: {
            number: 2,
            text: "qwerty",
        },
    };
    return mount(Child, options);
}

describe("Child.vue", () => {
    it("emits `deleteItem` event when delete button is clicked", async () => {
        const wrapper = createWrapper();
        const deleteButton = wrapper.get(".delete-btn");

        await deleteButton.trigger("click");

        expect(wrapper.emitted("deleteItem")).toHaveLength(1);
    });
});
