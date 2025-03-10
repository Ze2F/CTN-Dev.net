import PageMarkdown from '@/components/page.markdown';
import { useEffect, useState } from 'react';
import style from '@/styles/projects.module.css';
import ProjectItem, { IProjectItemProps } from '@/components/project.list';
import { title } from 'process';

const Projects = () => {

  const [projects, setProjects] = useState<IProjectItemProps[]>([]);
  useEffect(() => {
    setProjects([
      {
        title: 'Roblox Card Games',
        status: 'Working',
        statusStyle: 'warning',
        description: 'A Roblox Server',
        img: '/assets/images/78f30d15-ef74-493f-84e8-fbd9885d2ee4.png',
      },
      {
        title: 'SUS Cafe',
        status: 'Pause',
        statusStyle: 'warning',
        description: 'A cute cafe web application develop by vue.js',
      },
      {
        title: 'Gems Stone',
        status: 'Pause',
        statusStyle: 'warning',
        description: 'Website to showcase products named by gemstones.',
        moreDetails: '',
      },
      {
        title: 'Horizon Fall Minecraft Server',
        status: 'Server is completely closed',
        statusStyle: 'error',
        description: 'A Minecraft Server',
        img: '/assets/images/589d3af8-02bc-47b6-a33f-81aff84b1baa.jpg',
        link: 'https://web.facebook.com/HorizonFallMC/',
        linkText: 'More',
        linkStyle: 'info',
      }
    ]);
  }, []);

  return (
    <>
      <div className={style.container}>
        <ul>
          {
            projects.map((item, index) => (
              <li key={index}>
                <ProjectItem
                  title={item.title}
                  status={item.status}
                  statusStyle={item.statusStyle}
                  description={item.description}
                  moreDetails={item.moreDetails}
                  img={item.img}
                  link={item.link}
                  linkText={item.linkText}
                  linkStyle={item.linkStyle}
                />
              </li>
            ))
          }
          <li>
            <div className="divider">And I have many little projects</div>
          </li>
        </ul>

      </div>
    </>
  );
};

export default Projects;