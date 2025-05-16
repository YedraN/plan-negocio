import { marked } from 'https://esm.sh/marked';

async function renderMarkdown() {
  const response = await fetch('plan-negocio.md');
  const markdown = await response.text();
  document.getElementById('markdown-content').innerHTML = marked.parse(markdown);
}

renderMarkdown();