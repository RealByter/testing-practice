const analyzeArray = arr => {
	const info = {};
	info.max = Math.max(...arr);
	info.min = Math.min(...arr);
	info.length = arr.length;

	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	info.average = sum / arr.length;

	return info;
};

export default analyzeArray;
