<script setup lang="ts">
import type { TStory } from "$types/hn"
import Comments from "$components/blocks/Comments.vue"

const props = defineProps<{ data: TStory }>()

const commentTitle = `Comment${props.data.comments.length > 1 ? "s" : ""}`
const hasComments = !!props.data.comments.length

const isLast = (index: number) => index == props.data.comments.length - 1
</script>

<template>
    <header>
        <h1>{{ data.title }}</h1>
    </header>

    <nav>
        <p>
            <strong>Source:</strong>{{ " " }}
            <a target="_blank" :title="data.title" :href="data.url">{{
                data.domain
            }}</a>
        </p>

        <p>
            <strong>Points:</strong> <code>{{ data.points }}</code>
        </p>

        <p>
            <strong>Time:</strong> <code>{{ data.time_ago }}</code>
        </p>
    </nav>

    <main v-if="hasComments">
        <h5>{{ commentTitle }}</h5>

        <template v-for="(comment, index) in data.comments" :key="comment.id">
            <Comments :data="comment" />

            <br v-if="!isLast(index)" />
            <hr v-if="!isLast(index)" />
            <br v-if="!isLast(index)" />
        </template>
    </main>
</template>
