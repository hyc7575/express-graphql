<template>
	<div>
		<!-- vue-apollo에서 제공하는 component로도 가져올 수 있음 -->
		<ApolloQuery
			:query="gql => USER_LIST"
		>
			<template v-slot="{result: { loading, err, data }}">
				{{data.userList}}
			</template>
		</ApolloQuery>
	</div>
</template>

<script>
import { USER_LIST } from '../query/query';
export default {
	data() {
		return {
			USER_LIST: USER_LIST
		}
	}
}
</script>