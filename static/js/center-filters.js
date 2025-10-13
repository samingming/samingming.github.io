(function () {
  function centerFilters(root) {
    // data-filter 버튼을 가진 컨테이너를 탐색
    const candidates = [
      '.home-section .isotope-filters',
      '.home-section .filter-button-group',
      '.home-section .portfolio-filters',
      '.home-section .project-filters',
      '.home-section .js-isotope-filter',
      '.home-section .project-toolbar',
      '.home-section .filters-toolbar'
    ];
    let el = null;
    for (const sel of candidates) {
      const node = document.querySelector(sel);
      if (node && (node.querySelector('[data-filter]') || node.querySelector('a[data-filter], button[data-filter]'))) {
        el = node; break;
      }
    }
    if (!el) return;

    // 부모를 중앙 기준으로, 자신은 inline-flex로 강제
    const parent = el.parentElement;
    if (parent) parent.style.textAlign = 'center';

    Object.assign(el.style, {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '8px',
      width: 'max-content',
      margin: '16px auto 24px auto',
      paddingLeft: '0'
    });
  }

  // DOM 준비 후 1회 적용
  document.addEventListener('DOMContentLoaded', () => centerFilters(document));

  // 이소토프/필터 초기화가 늦게 되는 경우를 대비해 한 번 더
  window.addEventListener('load', () => setTimeout(() => centerFilters(document), 200));
})();
