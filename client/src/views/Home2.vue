<template>
	<div>
		{{userList}}
		<br/><br/><br/>
		{{user}}
		<br/><br/><br/>
		{{communityList}}

		<br/><br/><br/>
		<br/><br/><br/>
		<p style="font-size: 30px;">내가 원하는 데이터만 가져올 수 없음 ㅠ</p>
		<p style="font-size: 30px;">3번의 API 요청..</p>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			userId: this.$route.query.id,
			userList: null,
			user: null,
			communityList: null
		}
	},
	async created() {
		const userListData = await axios.get('/api/users');
		const userData = await axios.get(`/api/user/${this.userId}`);
		const communityListData = await axios.get('/api/community');
		
		this.userList = userListData.data;
		this.user = userData.data;
		this.communityList = communityListData.data;
	}
}
</script>

<style lang="scss" scoped>

</style>