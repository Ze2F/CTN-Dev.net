import PageMarkdown from '@/components/page.markdown';
import { useEffect, useState } from 'react';

const MarkdownHelp = () => {
  const [markdownContent, setMarkdownContent] = useState<string>('')

  useEffect(() => {
    fetch('/markdown/test.md').then((response) => {
      response.text().then((html) => {
        setMarkdownContent(html)
      })
    });
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownContent(event.target.value)
  }

  return (
    <>
    <div className='flex gap-4 flex-col md:flex-row'>
        <textarea className='bg-background resize-horizontal w-full' name="content" id="content" onChange={handleChange} value={markdownContent}></textarea>
        <PageMarkdown markdownContent={markdownContent} />
    </div>
    </>
  );
};

export default MarkdownHelp;