<script setup lang="ts">

defineProps<{
	dataPost: IDataPost[]
	onDelete: ( id: number ) => void
	onEdit: ( id: number ) => void
}>()

</script>
<template >
	<div v-if="dataPost.length > 0">
		<div class="card d-flex" v-for="item in dataPost" :key="item.id" @click="$router.push( `/blog/${item.id}` )">
			<div>
				<img src="https://picsum.photos/200/200">
			</div>
			<div class="card-body">
				<div>
					<h5> {{ item.id }}</h5>
					<h5 class="card-title"> {{ item.title }}</h5>
					<p class="card-text">{{ item.body }}</p>
				</div>
				<div class="d-flex gap-3">
					<button type="button" class="btn btn-dark" @click.stop="onDelete( item.id )">Delete</button>
					<button type="button" class="btn btn-pink " @click.stop="onEdit( item.id )">Edit</button>
				</div>
			</div>
		</div>
	</div>
	<h2 v-else>
		Do not data
	</h2>
</template>
<style lang="scss">
.card {
	flex-direction: row;
	max-width: 80%;
	overflow: hidden;
	margin: 25px auto;
	cursor: pointer;

	img {
		padding: 10px;
		border-radius: 10px;
	}

	.card-body {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		button {
			max-width: 250px;
		}
	}
}
</style>