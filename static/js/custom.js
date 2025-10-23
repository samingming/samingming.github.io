document.addEventListener('DOMContentLoaded', function () {
  // 트위터(X)·링크드인 아이콘만 선택
  const anchors = document.querySelectorAll(
    'a[href*="twitter.com"], a[href*="x.com"], a[href*="linkedin.com"], a[href="#"]'
  );

  // 토스트 메시지 생성 함수
  const showToast = (msg = '계정 준비중입니다 🙂') => {
    let toast = document.getElementById('account-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'account-toast';
      toast.textContent = msg;
      Object.assign(toast.style, {
        position: 'fixed',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#333',
        color: '#fff',
        padding: '10px 18px',
        borderRadius: '10px',
        fontSize: '14px',
        zIndex: '9999',
        opacity: '0',
        transition: 'opacity 0.3s ease'
      });
      document.body.appendChild(toast);
    }
    toast.style.opacity = '1';
    setTimeout(() => (toast.style.opacity = '0'), 2000);
  };

  // 클릭 이벤트 바인딩
  anchors.forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      showToast();
    });
  });
});
