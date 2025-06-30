export default (IS_DEVELOPMENT = false) => ({
  getCategoryHeader(title) {
    if (typeof title !== 'string') return '';

    const escapeHTML = s =>
      s
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

    const SEP = /(\s|&nbsp;|<br\s*\/?>)+/gi;
    const parts = title.split(SEP).filter(Boolean);
    const lastWord = parts.pop() || '';
    const firstPart = parts.join('');

    if (!firstPart.trim()) {
      return `<p class="category-card__title">${escapeHTML(lastWord)}</p>`;
    }

    return (
      `<p class="category-card__title">` +
      `${firstPart}` +
      `<span class="inline-flex">` +
      `${escapeHTML(lastWord)}` +
      `<span class="category-card__icon">` +
      `<svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.585036 0.244078C0.919771 -0.0813592 1.46248 -0.0813592 1.79722 0.244078L6.08293 4.41074C6.41767 4.73618 6.41767 5.26382 6.08293 5.58926L1.79722 9.75592C1.46248 10.0814 0.919771 10.0814 0.585036 9.75592C0.250301 9.43049 0.250301 8.90285 0.585036 8.57741L4.26466 5L0.585036 1.42259C0.250301 1.09715 0.250301 0.569515 0.585036 0.244078Z" fill="#1DA0FD"/>
      </svg>` +
      `</span>` +
      `</span>` +
      `</p>`
    );
  },
});

