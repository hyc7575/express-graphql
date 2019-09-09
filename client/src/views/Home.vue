<template>
	<div class="home">

		<br/><br/><br/>
		<div v-if="!$apollo.loading">
			{{myobj}}
			<br/><br/><br/>
			{{a}}
			<br/><br/><br/>
			{{b}}
			<br/><br/><br/>
			{{c}}
		</div>

		<p style="font-size: 30px;">내가 원하는 데이터만 원하는 형태로 만들 수 있음</p>
		<p style="font-size: 30px;">API 호출 1번이면 충분</p>
	</div>
</template>

<script>
import gql from 'graphql-tag';
import { USER_LIST, USER, COMMUNITY_LIST, ALL_DATA } from '../query/query';
export default {
	apollo: {
		// 모든 데이터 한번에
		// 이거 쓰면 api 호출 1번에 모든 데이터를 가져올 수 있음.
		allData: {
			query: ALL_DATA,
			variables() {
				return {
					id: +this.$route.query.id
				}
			},
			update(data) {
				this.myobj = data;
				this.a = data.userList;
				this.b = data.user;
				this.c = data.communityList;
			}
		}
	}
};
</script>