import { FC, ChangeEvent, Dispatch, SetStateAction, createElement } from 'react';
import { useRouter } from 'next/navigation'

export interface ISidebarItem {
  id: number;
  name: string;
  icon: string;
  url: string;
  group: number;
}

interface SidebarItemProps {
  item: ISidebarItem,
  stage: string,
  setStage: Dispatch<SetStateAction<string>>
}


const SidebarItem: FC<SidebarItemProps> = ({ item, stage, setStage }) => {

  const router = useRouter();

  const handleMenu = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    router.push(item.url);
    setStage(value);
  };

  return (
    <li>
      <input type='radio' name='menu' id={item.name} checked={stage === item.name} value={item.name} onChange={handleMenu} />
      <label htmlFor={item.name}><span>{item.name}</span><div dangerouslySetInnerHTML={{__html: item.icon}}></div></label>
    </li>
  );
};

export default SidebarItem;