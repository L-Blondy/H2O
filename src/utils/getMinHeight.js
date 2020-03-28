function getMinHeight(target) {
	return 10 + window.innerHeight - Math.abs(target.getBoundingClientRect().top);
}

export default getMinHeight;