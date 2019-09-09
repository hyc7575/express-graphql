<template>
	<div>
		<input type="text" v-model="name" placeholder="이름"><br>
		<br>
		<input type="text" v-model="age" placeholder="나이"><br>
		<br>
		<input type="text" v-model="job" placeholder="직업"><br>
		<br>
		<button @click="addUser">Submit</button>
	</div>
</template>

<script>
import { ADD_USER } from '../query/query';
export default {
	data() {
		return {
			name: '',
			age: '',
			job: ''
		}
	},
	methods: {
		addUser() {
			this.$apollo.mutate({
				mutation: ADD_USER,
				variables: {
					name: this.name,
					age: +this.age,
					job: this.job
				}
			}).then(data => {
				alert('success');
				this.name = '';
				this.age = '';
				this.job = '';
			}).catch(err => {
				console.log(err);
			})
		}
	}
}
</script>

<style>
input {
	padding: 0 12px;
	width: 200px;
	height: 40px;
	font-size: 15px;
}
</style>