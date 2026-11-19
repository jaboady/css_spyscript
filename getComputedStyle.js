const e = [...document.querySelectorAll(
  '#productMenuSidebar a.nav-link'
)].find(x => x.textContent.trim() === 'Translation Processes');

let p = e;

while (p && p.id !== 'productMenuSidebar') {
  const s = getComputedStyle(p);

  console.log(
    p.tagName,
    p.className,
    'transform:', s.transform,
    'position:', s.position,
    'top:', Math.round(p.getBoundingClientRect().top)
  );

  p = p.parentElement;
}
