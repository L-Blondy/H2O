export default function setupLazyObs(root) {
	let observer;
	if ("IntersectionObserver" in window)
		observer = new IntersectionObserver(
			loadImg,
			{
				threshold: 0.01,
				rootMargin: "0px 0px 500px 0px",
				root
			});

	function loadImg(entries) {
		entries.forEach(e => {
			if (e.intersectionRatio > 0) {
				const temp = document.createElement("IMG");
				temp.src = e.target.dataset.src;
				temp.onload = () => {
					e.target.src = temp.src;
				};
				observer.unobserve(e.target);
			}
		});
	}
	return observer;
}