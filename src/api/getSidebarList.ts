import { ISidebarItem } from '@/components/sidebar.items';
import { supabase } from './supabase';

const getSidebarItems = async (): Promise<ISidebarItem[]> => {
  const { data, error } = await supabase
    .from('SidebarItems')
    .select('*');

  if (error) {
    throw error;
  }

  return data as ISidebarItem[];
};

export default getSidebarItems;