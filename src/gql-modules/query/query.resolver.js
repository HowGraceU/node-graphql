const data = require('../../data');

const books = data.get('books');
const dogs = data.get('dogs');

module.exports = {
	books: async () => {
		console.log(new Date());
		await new Promise(res => setTimeout(res, 2000));
		return	books
	},
	book: () => books[0],
	dogs: () => dogs,
	dog: (parent, args, context, info) => {
		const {
			id,
			breed
		} = args;

		return dogs.find(({
			id: __id,
			breed: __breed
		}) => id === __id || breed === __breed);
	}
};