<script setup lang="ts">
import { Axios } from '@/utils';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';




const { params } = useRoute();
const dataPost = ref<IDataPost>()
const dataComment = ref<IDataComment[]>()

onMounted( async () => {
	const response = await Axios.get<IDataPost>( `/posts/${params.id}` )
	if ( response.data ) {
		dataPost.value = response.data
	}
	const resComments = await Axios.get<IDataComment[]>( `/comments`, {
		params: {
			postId: params.id
		}
	} )
	if ( resComments.data ) {
		dataComment.value = resComments.data
	}
} );
</script>
<template >
	<div class="container">
		<h1>ID: {{ dataPost?.id }}</h1>
		<h2>Title: {{ dataPost?.title }}</h2>
		<p>{{ dataPost?.body }}</p>
		<h1>Comments</h1>
		<div class="comment" v-for="item in dataComment" :key="item.id">
			<h2>{{ item.name }}</h2>
			<h3>{{ item.email }}</h3>
			<p>{{ item.body }}</p>
		</div>
	</div>
</template>
<style lang="scss">
.comment {
	padding: 20px;
	margin: 20px 0;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
	border-radius: 10px;

	h2 {
		font-weight: 600;
		color: crimson;
	}
}
</style>