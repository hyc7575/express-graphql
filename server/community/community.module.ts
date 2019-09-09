import { GraphQLModule } from '@graphql-modules/core';
import gql from 'graphql-tag';
import CommunityService from './community.service';
import { CommunityDTO } from './community.dto';

const communityService = new CommunityService();
export const CommunityModule = new GraphQLModule({
	typeDefs: gql`
		type Community {
			id: Int
			user_id: Int
			content: String
		}
		type Query {
			communityList: [Community]
			community(id: Int!): Community
		}
	`,
	resolvers: {
		Query: {
			async communityList() {
				const list: CommunityDTO[] = await communityService.getCommunityList();
				return list;
			},
			async community(_: any, { id }: any) {
				const detail: CommunityDTO = await communityService.getCommunityDetail(id);
				return detail;
			}
		}
	}
});