import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { inMemoryCache, InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
	// You should use an absolute URL here
	uri: 'http://localhost:3000/graphql',
});

const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
	link: httpLink,
	cache
});

export default apolloClient;