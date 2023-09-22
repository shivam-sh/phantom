import { load } from 'cheerio';
import { rehype } from 'rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import rehypeSlug from 'rehype-slug';

export async function rehypeHTML(htmlString: string) {
  return await rehype()
    .use(rehypeHighlight)
    .use(rehypeSlug)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(htmlString);
}

export async function parseTOC(htmlString: string) {
  const $ = load(htmlString);
  let headings: { id: string; text: string; depth: number }[] = [];

  $('[id]').each((_, element) => {
    const id = $(element).attr('id') ?? '';
    const text = $(element).text() ?? '';

    if (id !== '' && element.tagName.toLowerCase().startsWith('h')) {
      const depth = element.tagName.charCodeAt(1) - 48;
      headings.push({ id, text, depth });
    }
  });

  // not worth showing if it's a small post
  if (headings.length < 3) headings = [];

  // if there are a bunch, only show h1 headings
  if (headings.length > 5) {
    headings = headings.filter((entry) => entry.depth == 1);
  }

  // if there are still a bunch remove the first one (the title)
  if (headings.length > 5) headings.shift();

  return headings;
}
