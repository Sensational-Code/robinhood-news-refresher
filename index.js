
const observerConfig = { attributes: true, childList: true, characterData: true };

// Wait for the news container element to load
const loadObserver = (mutations, observer) => {
	const newsContainer = document.querySelector('[data-testid="Portfolio-NewsSection"]');

	if (newsContainer) {
		handleLoad(newsContainer);
		observer.disconnect();
	}
}

// Add the load observer
new MutationObserver(loadObserver).observe(document.body, observerConfig);

const handleLoad = (newsContainer) => {
	// Watch for the "show newer articles" button to appear and click it
	const newsObserver = mutations => {
		mutations.forEach(mutation => {
			mutation.addedNodes.length && mutation.addedNodes[0].firstChild.click();
		});
	}

	// Add the news container observer
	new MutationObserver(newsObserver).observe(newsContainer, observerConfig);
}
