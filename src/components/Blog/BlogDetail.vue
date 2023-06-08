<script setup lang="ts">
import { Axios } from '@/utils';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

type IDataPost = {
	body: string
	id: number
	title: string
	userId: string
}

const { params } = useRoute();
const dataPost = ref<IDataPost>()

onMounted( async () => {
	const response = await Axios.get<IDataPost>( `/posts/${params.id}` )
	if ( response.data ) {
		dataPost.value = response.data
	}

} );
</script>
<template >
	<div class="container">
		<h1>ID: {{ dataPost?.id }}</h1>
		<h2>Title: {{ dataPost?.title }}</h2>
		<p>{{ dataPost?.body }}</p>
	</div>
</template>
<style lang="scss"></style>