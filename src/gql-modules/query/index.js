const requireGraphqlFile = require('require-graphql-file');

const typeDef = requireGraphqlFile('./query');
const resolver = require('./query.resolver');

module.exports = {
	typeDef,
	resolver
}