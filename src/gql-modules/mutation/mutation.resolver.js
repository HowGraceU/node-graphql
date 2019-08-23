const data = require('../../data');

const dogs = data.get('dogs');

module.exports = {
	addDog: (parent, args, context, info) => {
		const breed = args.breed;
		const id = dogs.length;

		const dog = {
			id,
			breed
		}
		dogs.push(dog);

		return dog;
	}
};