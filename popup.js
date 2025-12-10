const toggle = document.getElementById('toggleSwitch');
const status = document.getElementById('status');
const toggleContainer = document.querySelector('.toggle-container');

async function init() {
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });

  let isGeniusPage = false;
  try {
    const url = new URL(tab.url);
    isGeniusPage = url.hostname.endsWith('genius.com');
  } catch (_) {
    isGeniusPage = false;
  }

  if (!isGeniusPage) {
    toggle.disabled = true;
    toggleContainer.style.opacity = '0.5';
    status.textContent = 'Not a genius.com page';
    status.className = 'status not-genius';
    return;
  }

  const result = await browser.storage.local.get(['cleanerEnabled']);
  const enabled = result.cleanerEnabled !== false;

  toggle.checked = enabled;
  toggle.disabled = false;
  toggleContainer.style.opacity = '1';
  updateStatus(enabled);

  toggle.addEventListener('change', async () => {
    const enabled = toggle.checked;
    await browser.storage.local.set({ cleanerEnabled: enabled });
    updateStatus(enabled);

    if (tab.id) {
      browser.tabs.sendMessage(tab.id, {
        action: enabled ? 'clean' : 'reload'
      }).catch(() => {});
    }
  });
}

function updateStatus(enabled) {
  status.textContent = enabled ? 'Annotations are hidden' : 'Annotations are visible';
  status.className = enabled ? 'status enabled' : 'status disabled';
}

init();