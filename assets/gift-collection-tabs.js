if (!customElements.get('gift-collection-tabs')) {
  class GiftCollectionTabs extends HTMLElement {
    connectedCallback() {
      this.navItems = Array.from(this.querySelectorAll('.m-gift-tabs__nav-item'));
      this.panels = Array.from(this.querySelectorAll('.m-gift-tabs__panel'));

      this.navItems.forEach((item) => {
        item.addEventListener('click', (event) => this.onTabClick(event));
      });
    }

    onTabClick(event) {
      const target = event.currentTarget;
      const index = target.getAttribute('data-tab-index');

      this.navItems.forEach((item) => {
        const isActive = item === target;
        item.classList.toggle('is-active', isActive);
        item.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      this.panels.forEach((panel) => {
        const isActive = panel.getAttribute('data-tab-panel') === index;
        panel.classList.toggle('is-active', isActive);
        if (isActive) {
          panel.removeAttribute('hidden');
        } else {
          panel.setAttribute('hidden', '');
        }
      });
    }
  }

  customElements.define('gift-collection-tabs', GiftCollectionTabs);
}
