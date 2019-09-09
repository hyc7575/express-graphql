import express from 'express';
import cors from 'cors';
import router from './route';
import graphqlHTTP from 'express-graphql';
import { GraphQLModule } from '@graphql-modules/core';
import { CommunityModule } from './community/community.module';
import { UserModule } from './user/user.module';

const appModule = new GraphQLModule({
	imports: [
		UserModule,
		CommunityModule
	]
});

class App {
	public app: express.Application;
	public static bootstrap(): App {
		return new App();
	}

	constructor() {
		this.app = express();
		// cors domain
		this.app.use(cors());
		
		// bodyparse
		this.app.use(express.json())
		this.app.use(express.urlencoded({ extended: true }));
		
		// router
		this.app.use(router);

		// graphql
		this.app.use('/graphql', graphqlHTTP({
			schema: appModule.schema,
			graphiql: true
		}));
		
		//start
		this.app.listen(3000, () => {
			console.log('server start');
		});
	}
}

App.bootstrap();