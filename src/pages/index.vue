<script lang="ts" setup>
import { useGlobalStore } from "~/store/global.store";

const globalStore = useGlobalStore();
const { count } = storeToRefs(globalStore);
const { incrementCount } = globalStore;
</script>

<template>
    <UContainer class="h-lvh flex justify-center items-center">
        <UCard>
            <div>hi there!</div>
            <div>count is {{ count }}</div>
            <UButton @click="incrementCount">increment</UButton>
        </UCard>
    </UContainer>
</template>
