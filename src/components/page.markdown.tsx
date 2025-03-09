import { md } from '@/api/markdownIt';
import { FC } from 'react';

interface IPageMarkdownProps {
  markdownContent: string;
}

const PageMarkdown: FC<IPageMarkdownProps> = ({ markdownContent: markdownContent }) => {

  return (
    <>
      <article className='markdown-body' dangerouslySetInnerHTML={{__html: md(markdownContent)}}>
      </article>
    </>
  );
};

export default PageMarkdown;
