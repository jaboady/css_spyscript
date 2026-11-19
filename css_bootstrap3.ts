console.table(
  [...document.styleSheets]
    .map(s => s.href)
    .filter(Boolean)
    .filter(url =>
      /bootstrap|theme|clay|custom/i.test(url)
    )
);
