function getMinHeight(target) {
	return window.innerHeight - Math.abs(target.getBoundingClientRect().top);
}

export default getMinHeight;