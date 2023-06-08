<script setup lang="ts">
import { ref, watch, inject } from 'vue'
import { onMounted } from 'vue'
// import { type AxiosResponse } from 'axios';
import { Axios } from '@/utils';
import CardPost from '@/common/CardPost.vue';

type IDataPost = {
	body: string
	id: number
	title: string
	userId: string
}

// const props = defineProps( {
// 	msg: {
// 		type: String,
// 		default: 'Hello World'
// 	}
// } )
const dataPost = ref<IDataPost[]>( [] )
const dataPostFilter = ref<IDataPost[] | null>( null )
const txtSearch = ref<string>( '' )

onMounted( () => {
	getDataPost()
} )

watch( txtSearch, async ( newTxtSearch, _oldTxtSearch ) => {
	const newdataPost = dataPost.value.filter( ( item ) => {
		return item.title.includes( newTxtSearch ) || item.body.includes( newTxtSearch ) || item.id == parseInt( newTxtSearch )
	} )
	dataPostFilter.value = newdataPost
} )

const getDataPost = async () => {
	const response = await Axios.get<IDataPost[]>( '/posts' )
	if ( response.data ) {
		dataPost.value = response.data
	}
}
const onDelete = async ( id: number ) => {
	Axios.delete( `/posts/${id}` ).then( ( response ) => {
		if ( response.status == 200 ) {
			console.log( 'Delete success' );
			getDataPost()

		}
	} )
}
</script>
<template >
	<div class="container">
		<div class="input-group mb-3">
			<input v-model="txtSearch" type="text" class="form-control" placeholder="Type something about id, title, body"
				aria-label="Search" aria-describedby="basic-addon1">
			<span class="input-group-text" id="basic-addon1">Search</span>
		</div>
		<!-- <CardPost v-if="dataPostFilter != null" :dataPost="dataPostFilter" @onDelete="onDelete" /> -->
		<CardPost :dataPost="dataPostFilter != null ? dataPostFilter : dataPost" :onDelete="onDelete" />

	</div>
</template>
<style lang="scss">
.test {
	color: red;
}
</style>