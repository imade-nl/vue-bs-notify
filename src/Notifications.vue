<template>
	<div class="notifications">
		<transition-group name="list" tag="div">
			<notification v-for="item in items" :item="item" :key="item" @close="removeItem">{{ item }}</notification>
		</transition-group>
	</div>
</template>

<script>
	import Notification from './Notification.vue';

	export default {
		components: {
			Notification
		},
		data() {
			return {
				items : []
			}
		},
		methods: {
			removeItem(item) {
				let key = this.items.indexOf(item)
				if (key >= 0) {
					this.items.splice(key, 1)
				}
			}
		},
		created() {
			this.items = this.$notify.getItems();
		}
	}
</script>

<style>
	.notifications{
		position: fixed;
		right: 30px;
		top: 30px;
		width: 25%;
		min-width: 240px;
		max-width: 480px;
	}

	.alert-primary{ background-color: #2c3e50 }
	.alert-default{ background-color: #95a5a6 }
	.alert-success{ background-color: #18bc9c }
	.alert-info{ background-color: #3498db }
	.alert-warning{ background-color: #f39c12 }
	.alert-danger{ background-color: #e74c3c }

	.notification{
		margin-bottom: 10px;
		color: #fff;
	}

	.list-enter-active, .list-leave-active {
		transition: opacity .5s
	}

	.list-enter, .list-leave-active {
		opacity: 0;
	}
</style>