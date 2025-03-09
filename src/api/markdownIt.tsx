import { FC } from 'react';
import markdownit from 'markdown-it';
// @ts-ignore
import { full as emoji } from 'markdown-it-emoji';
import anchor from 'markdown-it-anchor';
// @ts-ignore
import abbr from 'markdown-it-abbr';
// @ts-ignore
import footerNote from 'markdown-it-footnote';
// @ts-ignore
import insert from 'markdown-it-ins';
// @ts-ignore
import mark from 'markdown-it-mark';
// @ts-ignore
import sub from 'markdown-it-sub';
// @ts-ignore
import sup from 'markdown-it-sup';

export const md = (content: string) => {
  const md = markdownit(
    {
      html: true,
      linkify: true,
      typographer: true
    })
    .use(abbr)
    .use(emoji)
    .use(footerNote)
    .use(insert)
    .use(mark)
    .use(sub)
    .use(sup);

  md.use(anchor, {
    permalink: anchor.permalink.ariaHidden({
      placement: 'before'
    }),
    symbol: '<span>#<span>',
    placement: 'before'
  });
  
  return md.render(content);
}