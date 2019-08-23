module.exports = {
	breedAndDate: (parent, args, context, info) => {
		return `${parent.breed} : ${new Date()}`;
	}
};