import PageMarkdown from '@/components/page.markdown';
import { useEffect, useState } from 'react';

const About = () => {
  const [readme, setReadme] = useState<string>('');
  useEffect(() => {
    fetch('/markdown/About.md').then((response) => response.text()).then((text) => setReadme(text));
  }, []);
  return (
    <PageMarkdown markdownContent={readme} />
  );
};

export default About;