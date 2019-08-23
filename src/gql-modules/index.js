const queryMudule = require('./query');
const mutationMudule = require('./mutation');
const dogMudule = require('./dog');
const bookMudule = require('./book');

const typeDefs = [
	queryMudule.typeDef,
	mutationMudule.typeDef,
	dogMudule.typeDef,
	bookMudule.typeDef
]

const resolvers = {
	Query: queryMudule.resolver,
	Mutation: mutationMudule.resolver,
	Dog: dogMudule.resolver,
	Book: bookMudule.resolver
}

module.exports = {
	typeDefs,
	resolvers
}