window.addEventListener('load', () => {
  const root = document.querySelector('section#portfolio .project-filters');
  const tb   = document.querySelector('section#portfolio .project-filters .btn-toolbar');
  if(root){ root.style.textAlign = 'center'; }
  if(tb){
    tb.classList.add('d-inline-flex');   // 일부 테마에서 먹히는 유틸
    tb.style.justifyContent = 'center';
  }
});
