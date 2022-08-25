<script setup lang="ts">
import type { TComments } from "$types/hn"

const props = defineProps<{ data: TComments }>()

const commentTitle = `Comment${props.data.comments.length > 1 ? "s" : ""}`
const hasComments = !!props.data.comments.length
</script>

<template>
    <details open>
        <summary>
            <mark>{{ data.user }}</mark> {{ data.time_ago }}
        </summary>

        <article v-html="data.content" />

        <section v-if="hasComments">
            <h5>{{ commentTitle }}</h5>

            <Comments
                v-for="comment in data.comments"
                :key="comment.id"
                :data="comment"
            />
        </section>
    </details>
</template>

<style scoped>
section {
    font-size: 0.9em;
}
</style>
