import { FC, useEffect, useState } from 'react';
import getSidebarItems from '@/api/getSidebarList';
import SidebarItem, { ISidebarItem } from './sidebar.items';
import { useRouter } from 'next/router';

const Sidebar: FC = () => {

  const router = useRouter();
  const [menu, setMenu] = useState<ISidebarItem[]>([]);
  const [selectedMenu, setSelectedMenu] = useState<string>('');

  useEffect(() => {
    async function getMenu() {
      // const items = await getSidebarItems();
      const items = [{ "id": 1, "name": "Home", "icon": "<svg data-slot=\"icon\" aria-hidden=\"true\" fill=\"none\" stroke-width=\"1.5\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path d=\"m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\r\n      </svg>", "url": "/", "group": 2 },
      { "id": 2, "name": "Projects", "icon": "<svg data-slot=\"icon\" aria-hidden=\"true\" fill=\"none\" stroke-width=\"1.5\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path d=\"M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>", "url": "/Projects", "group": 2 },
      { "id": 3, "name": "About", "icon": "<svg data-slot=\"icon\" aria-hidden=\"true\" fill=\"none\" stroke-width=\"1.5\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path d=\"M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\r\n      </svg>", "url": "/About", "group": 2 },
      { "id": 4, "name": "Discord", "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 127.14 96.36\"><path fill=\"#fff\" d=\"M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z\" /></svg>", "url": "/discord.html", "group": 2 },
      { "id": 5, "name": "Login", "icon": "<svg data-slot=\"icon\" aria-hidden=\"true\" fill=\"none\" stroke-width=\"1.5\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>", "url": "/Login\n", "group": 3 }]
      setMenu(items);
    }
    getMenu();
    router.pathname === '/' ? setSelectedMenu('Home') : setSelectedMenu(router.pathname.replace('/', ''));
  }, [])

  return (
    <>
      <ul>
        <li>
          <label><span>Menu</span><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          </div></label>
        </li>
      </ul>
      <ul>
        {
          menu.filter(element => element.group === 2)
            .map(element => <SidebarItem key={element.id} item={element} stage={selectedMenu} setStage={setSelectedMenu} />)
        }

      </ul>
      <ul>
        {
          menu.filter(element => element.group === 3)
            .map(element => <SidebarItem key={element.id} item={element} stage={selectedMenu} setStage={setSelectedMenu} />)
        }
      </ul>
    </>
  );
};

export default Sidebar;