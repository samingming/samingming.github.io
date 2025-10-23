document.addEventListener('DOMContentLoaded', function () {
  // 막을 대상: 트위터(X), 링크드인 (href에 해당 도메인이 들어간 a만)
  const selectors = [
    'a[href*="twitter.com"]',
    'a[href*="linkedin.com"]'
  ];
  const targets = document.querySelectorAll(selectors.join(','));

  const showToast = (msg = '계정 준비중입니다 🙂') => {
    let el = document.getElementById('account-toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'account-toast';
      el.style.position = 'fixed';
      el.style.bottom = '40px';
      el.style.left = '50%';
      el.style.transform = 'translateX(-50%)';
      el.style.background = '#333';
      el.style.color = '#fff';
      el.style.padding = '10px 16px';
      el.style.borderRadius = '10px';
      el.style.fontSize = '14px';
      el.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
      el.style.zIndex = '9999';
      el.style.opacity = '0';
      el.style.transition = 'opacity .25s ease';
      el.textContent = msg;
      document.body.appendChild(el);
    }
    el.style.opacity = '1';
    setTimeout(() => { el.style.opacity = '0'; }, 1800);
  };

  targets.forEach(a => {
    a.addEventListener('click', function (e) {
      e.preventDefault();           // 실제 이동 막기
      e.stopPropagation();
      showToast('계정 준비중입니다 🙂');
    }, { capture: true });
  });
});
