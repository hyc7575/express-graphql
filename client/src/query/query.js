import gql from 'graphql-tag';

export const USER_LIST = gql `query {
	userList {
		id
		name
	}
}`;

export const USER = gql `query UserId($id: Int!) {
	user(id: $id) {
		id
		name
		job
	}
}`;

export const COMMUNITY_LIST = gql `query {
	communityList {
		id
		content
	}
}`;

export const ALL_DATA = gql `query UserId($id: Int!){
	userList {
		id
		name
		age
		job
	}
	user(id: $id) {
		id
		name
	}
	communityList {
		id
	}
}`;

export const ADD_USER = gql `mutation ($name: String!, $age: Int!, $job: String!) {
	addUser(obj: {name: $name, age: $age, job: $job}) {
		name
		age
	}
}`;