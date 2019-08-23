const requireGraphqlFile = require('require-graphql-file');

const typeDef = requireGraphqlFile('./mutation');
const resolver = require('./mutation.resolver');

module.exports = {
	typeDef,
	resolver
}