<template>
	<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
		New
	</button>
	<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Create blog</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<div class="input-group mb-3">
						<span class="input-group-text" id="basic-addon1">Title</span>
						<input v-model="formBlog.title" type="text" class="form-control" placeholder="Type something"
							aria-label="Username" aria-describedby="basic-addon1">
					</div>
					<div class="input-group">
						<span class="input-group-text">Description</span>
						<textarea v-model="formBlog.body" class="form-control" aria-label="With textarea"></textarea>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					<button type="button" class="btn btn-primary" @click="onSubmit">Add</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useToastStore } from '@/stores/counter';
import { Axios } from '@/utils';
import { ref } from 'vue'

const toastStore = useToastStore()
const formBlog = ref( {
	title: '',
	body: ''
} )
const onSubmit = () => {
	Axios.post( '/posts', formBlog.value ).then( ( response ) => {
		formBlog.value = {
			title: '',
			body: ''
		}
		toastStore.onShowToast( {
			title: 'Add success',
			message: `Add post with id: ${response.data.id} success`,
			isShow: true,
		} )
	} )
}
</script>

<style lang="scss" scoped></style>