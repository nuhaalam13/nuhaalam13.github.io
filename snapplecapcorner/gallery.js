/* gallery.js - shared by each gallery page */
/* Usage: Each HTML page should define a pageFacts object (see examples in pages). */
(function () {
  // find modal DOM
  const modal = document.getElementById('fact-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalText = document.getElementById('modal-text');
  const modalSource = document.getElementById('modal-source');
  const checkerStatus = document.getElementById('checker-status');
  const checkerNote = document.getElementById('checker-note');
  const modalClose = document.getElementById('modal-close');

  // open modal with fact key
  window.openFactModal = function (factKey, factsDb) {
    const fact = factsDb[factKey];
    if (!fact) return;
    modalImg.src = fact.image || 'images/placeholder.png';
    modalTitle.textContent = fact.title || 'Fact';
    modalText.textContent = fact.text || '';
    modalSource.href = fact.source || '#';
    modalSource.textContent = fact.source ? 'Read source' : '';
    // fact-checker
    checkerStatus.textContent = fact.verified ? (fact.verified === 'true' || fact.verified === true ? 'Verified: TRUE' : 'Verified: FALSE') : 'Verified: Unknown';
    checkerStatus.style.color = (fact.verified === true || fact.verified === 'true') ? '#0A8A3D' : '#C23E3E';
    checkerNote.textContent = fact.checkerNote || (fact.verified ? 'Trusted sources indicate this is true.' : 'Sources indicate this is false or misleading.');
    modal.style.display = 'flex';
  };

  modalClose.addEventListener('click', () => modal.style.display = 'none');
  modal.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });

  // helper to build gallery items for a page
  window.buildGallery = function (containerId, factsDb) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    Object.keys(factsDb).forEach(key => {
      const fact = factsDb[key];
      const item = document.createElement('div');
      item.className = 'fact-item';
      const img = document.createElement('img');
      img.className = 'fact-thumb';
      img.src = fact.thumb || fact.image || 'images/placeholder.png';
      img.alt = fact.title || key;
      img.addEventListener('click', () => openFactModal(key, factsDb));
      const label = document.createElement('div');
      label.className = 'fact-label';
      label.textContent = fact.shortLabel || fact.title || key;
      item.appendChild(img);
      item.appendChild(label);
      container.appendChild(item);
    });
  };
})();
