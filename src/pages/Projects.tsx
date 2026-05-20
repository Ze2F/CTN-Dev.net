import PageMarkdown from "@/components/page.markdown";
import { useEffect, useState } from "react";
import style from "@/styles/projects.module.css";
import ProjectItem, { IProjectItemProps, statusStyle, linkStyle } from "@/components/project.list";

const Projects = () => {
  const [projects, setProjects] = useState<IProjectItemProps[]>([]);
  useEffect(() => {
    setProjects([
      {
        title: "GeAPi",
        status: "Developing",
        statusStyle: statusStyle.info,
        description: "Generate API & Database Management. (x team)",
      },
      {
        title: "Cross X Service",
        status: "Unknow",
        statusStyle: statusStyle.neutral,
        description: "Integrate multiple services into one. (x team)",
      },
      {
        title: "Server Management",
        status: "Unknow",
        statusStyle: statusStyle.neutral,
        description: "Manage VPS Server Integrate with proxmox api. (x team)",
      },
      {
        title: "G?me !@#$%^",
        status: "Unknow",
        statusStyle: statusStyle.neutral,
        description: "3D Action shooter rogue-like game. (x team)",
        moreDetails: "",
      },
      {
        title: "Gems Stone",
        status: "Pause",
        statusStyle: statusStyle.warning,
        description: "Website to showcase products named by gemstones.",
      },
      {
        title: "Roblox Card Games",
        status: "Cancelled",
        statusStyle: statusStyle.warning,
        description: "A Roblox Server",
        img: "/assets/images/78f30d15-ef74-493f-84e8-fbd9885d2ee4.png",
        isDiscontinue: true,
      },
      {
        title: "SUS Cafe",
        status: "Cancelled",
        statusStyle: statusStyle.warning,
        description: "A cute cafe web application develop by vue.js",
        isDiscontinue: true,
      },
      {
        title: "Horizon Fall Minecraft Server",
        status: "Server is completely closed",
        statusStyle: statusStyle.error,
        description: "A Minecraft Server",
        img: "/assets/images/589d3af8-02bc-47b6-a33f-81aff84b1baa.jpg",
        link: "https://web.facebook.com/HorizonFallMC/",
        linkText: "More",
        linkStyle: linkStyle.error,
        isDiscontinue: true,
      },
    ]);
  }, []);

  const activeProjects = projects.filter((p) => !p.isDiscontinue);
  const discontinuedProjects = projects.filter((p) => p.isDiscontinue);

  return (
    <>
      <div className={style.container}>
        <ul>
          {activeProjects.map((item, index) => (
            <li key={index}>
              <ProjectItem title={item.title} status={item.status} statusStyle={item.statusStyle} description={item.description} moreDetails={item.moreDetails} img={item.img} link={item.link} linkText={item.linkText} linkStyle={item.linkStyle} />
            </li>
          ))}
          {discontinuedProjects.length > 0 && (
            <li>
              <details className="collapse bg-base-200 shadow-sm mt-4">
                <summary className="collapse-title text-xl font-medium text-center">Discontinued Projects</summary>
                <div className="collapse-content">
                  <ul className="flex flex-wrap justify-center gap-4 [&>*]:w-full">
                    {discontinuedProjects.map((item, index) => (
                      <li key={index}>
                        <ProjectItem title={item.title} status={item.status} statusStyle={item.statusStyle} description={item.description} moreDetails={item.moreDetails} img={item.img} link={item.link} linkText={item.linkText} linkStyle={item.linkStyle} />
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </li>
          )}
          <li>
            <div className="divider">And I have many little projects</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Projects;
