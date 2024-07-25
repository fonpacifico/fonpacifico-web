const fadeInSettings = {
	rootMargin: "-15% 0% -15% 0%",
	threshold: 0,
};

const fadeInObserver = new IntersectionObserver((entries) => {
	for (const entry of entries) {
		if (entry.isIntersecting) {
			entry.target.classList.add("fade-in");
			fadeInObserver.unobserve(entry.target);
		}
	}
}, fadeInSettings);

export default {
	mounted(el) {
		el.dataset.fadeIn = true;
		fadeInObserver.observe(el);
	},
};
