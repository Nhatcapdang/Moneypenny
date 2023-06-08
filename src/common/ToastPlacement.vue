<template >
	<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
		<div id="liveToast" class="toast hide" :class="[{ show: toastStore.toast.isShow }]" role="alert"
			aria-live="assertive" aria-atomic="true">
			<div class="toast-header">
				<!-- <img src="..." class="rounded me-2" alt="..."> -->
				<strong class="me-auto">{{ toastStore.toast.title }}</strong>
				<small>7 second ago</small>
				<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
			</div>
			<div class="toast-body">
				{{ toastStore.toast.message }}
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useToastStore } from '@/stores/counter';

const toastStore = useToastStore()


</script>
<style lang="scss"></style>