import { GraphQLModule } from '@graphql-modules/core';
import { CommunityModule } from '../community/community.module';
import gql from 'graphql-tag';

// service
import UserService from './user.service';

// dto
import { UserDTO } from './user.dto';
import { CommunityDTO } from '../community/community.dto';

const userService = new UserService();
export const UserModule = new GraphQLModule({
	typeDefs: gql`
		input UserInput {
			name: String
			age: Int
			job: String
		}
		type User {
			id: Int
			name: String
			age: Int
			job: String
		}
		type Query {
			userList: [User]
			user(id: Int!): User
			userCommunityList(id: Int!): [Community]
		}
		type Mutation {
			addUser(obj: UserInput): User
		}
	`,
	resolvers: {
		Query: {
			async userList() {
				const users: UserDTO[] = await userService.getUserList();
				return users;
			},
			async user(_: any, { id }: any) {
				const user: UserDTO = await userService.getUser(id);
				return user;
			},
			async userCommunityList(_: any, { id }: any) {
				const list: CommunityDTO[] = await userService.getUserCommunityList(id);
				return list;
			}
		},
		Mutation: {
			async addUser(root, {obj}, context) {
				return await userService.addUser(obj);
			}
		}
	},
	imports: [
		CommunityModule	
	]
});