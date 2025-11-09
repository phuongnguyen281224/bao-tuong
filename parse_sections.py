from bs4 import BeautifulSoup
from pathlib import Path
import json
html = Path('fetched.html').read_text(encoding='utf-8')
soup = BeautifulSoup(html, 'html.parser')
content = soup.find(id='render-html')
sections = []
if content:
    elements = content.find_all(['p', 'h2', 'h3', 'h4'])
    current = None
    for el in elements:
        text = el.get_text(strip=True)
        if not text:
            continue
        if any(keyword in text for keyword in ['Bài xã luận', 'Xã luận số', 'Xã luận 20/11']):
            if current and current['paragraphs']:
                sections.append(current)
                if len(sections) >= 5:
                    break
            current = {'heading': text, 'paragraphs': []}
        else:
            if current and el.name == 'p':
                current['paragraphs'].append(text)
    if current and current['paragraphs'] and len(sections) < 5:
        sections.append(current)
Path('sections.json').write_text(json.dumps(sections, ensure_ascii=False, indent=2), encoding='utf-8')
