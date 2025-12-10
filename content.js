let observer = null;

function cleanAnnotations() {
  document.querySelectorAll('a[data-ignore-on-click-outside="true"]').forEach(link => {
    const fragment = document.createDocumentFragment();
    while (link.firstChild) {
      fragment.appendChild(link.firstChild);
    }
    link.replaceWith(fragment);
  });

  document.querySelectorAll('span[tabindex="0"][style*="position:absolute"]').forEach(span => {
    span.remove();
  });

  document.querySelectorAll('span[role="presentation"][class*="ReferentFragment"], span[class*="Highlight"][class*="ReferentFragment"]').forEach(span => {
    if (span.matches('[style*="position:absolute"]')) return;

    const fragment = document.createDocumentFragment();
    while (span.firstChild) {
      fragment.appendChild(span.firstChild);
    }
    span.replaceWith(fragment);
  });
}

function startCleaning() {
  cleanAnnotations();

  if (observer) observer.disconnect();

  observer = new MutationObserver(() => {
    requestAnimationFrame(() => {
      setTimeout(cleanAnnotations, 100);
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

function stopCleaning() {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
}

browser.storage.local.get(['cleanerEnabled']).then((result) => {
  if (result.cleanerEnabled !== false) {
    startCleaning();
  }
});

browser.runtime.onMessage.addListener((message) => {
  if (message.action === 'clean') {
    startCleaning();
  } else if (message.action === 'reload') {
    stopCleaning();
    location.reload();
  }
});