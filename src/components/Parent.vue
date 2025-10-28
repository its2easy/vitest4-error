<script setup lang="ts">
import { ref } from "vue";
import Child from "@/components/Child.vue";

const items = ref([
    {
        number: 1,
        text: "qweqwe",
    },
    {
        number: 2,
        text: "123123r",
    },
]);
function addItem() {
    items.value.push({
        number: items.value.length,
        text: "blabla",
    });
}
function deleteItem(index: number) {
    if (items.value.length <= 1) return;
    items.value.splice(index, 1);
}
</script>

<template>
    <div>
        <Child
            v-for="(item, index) in items"
            :key="item.number"
            :number="item.number"
            :text="item.text"
            @delete-item="deleteItem(index)"
        />
    </div>
</template>
