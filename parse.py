from bs4 import BeautifulSoup
from pathlib import Path
html = Path('fetched.html').read_text(encoding='utf-8')
soup = BeautifulSoup(html, 'html.parser')
sections = []
for tile in soup.select('article h2, article h3'):
    title = tile.get_text(strip=True)
    if not title:
        continue
    paras = []
    for sib in tile.find_all_next():
        if sib.name in ['h2', 'h3']:
            break
        if sib.name == 'p':
            text = sib.get_text(strip=True)
            if text:
                paras.append(text)
        if len(paras) >= 4:
            break
    if paras:
        sections.append({'title': title, 'paras': paras})
    if len(sections) >= 5:
        break
Path('sections.json').write_text(str(sections), encoding='utf-8')
