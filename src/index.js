import Notifications from './Notifications.vue';

const Notify = {

	items: [],

	options: {
		duration: 5000
	},

	showItem(item) {
		this.items.push({
			type: item.type,
			message: item.message,
			duration: this.options.duration
		});
	},

	install(Vue, options) {

    	Vue.component('notifications', Notifications)

		Vue.prototype.$notify = {
			show: (item) => { this.showItem(item) },

			success: (message) => {
				this.showItem({ type: 'success', message: message });
			},

			getItems: () => {
				return this.items
			}
		}
	}
};

export default Notify;