<script setup lang="ts">
const props = defineProps<{
    number: number;
    text: string;
}>();
const emit = defineEmits<{
    deleteItem: [];
}>();
</script>

<template>
    <div class="item">
        <div class="item-content">
            <h2 class="title">#{{ props.number }}</h2>
            <input v-model="props.text" data-testid="text-input" />
        </div>
        <button class="delete-btn" @click="$emit('deleteItem')">Delete</button>
        <!-- <v-btn>just to check vuetify component, it increases the errors probability</v-btn> -->
    </div>
</template>
