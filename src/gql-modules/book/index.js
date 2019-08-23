const requireGraphqlFile = require('require-graphql-file');

const typeDef = requireGraphqlFile('./book');
const resolver = require('./book.resolver');

module.exports = {
	typeDef,
	resolver
}