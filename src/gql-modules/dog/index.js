const requireGraphqlFile = require('require-graphql-file');

const typeDef = requireGraphqlFile('./dog');
const resolver = require('./dog.resolver');

module.exports = {
	typeDef,
	resolver
}