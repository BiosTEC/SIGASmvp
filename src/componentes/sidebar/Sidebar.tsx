'use client'
import styles from './sidebar.module.css';
import { MdDashboard, MdEnergySavingsLeaf, MdProductionQuantityLimits } from 'react-icons/md';
import MenuLink from './menuLink/MenuLink';
import { useSession } from 'next-auth/react';


export default async function Sidebar() {

  const { data: session } = useSession();  // get the client session
  const name = session?.user?.name || undefined;
  const email = session?.user?.email || undefined;

  //buscar os dados do usuário no banco de dados
  // const fetchUserData = async () => {
  //   if (session) {
  //     const res = await fetch(`/api/user/${email}`, { next: { revalidate: 1200 } }) /* Atualiza e coloca os dados em cache a cada 1200s  */
  //     return res.json();
  //   }
  // }
  // const usuario = await fetchUserData(); 

  const menuItems = [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: <MdDashboard />,
    },
    {
      title: 'Produtos',
      path: '/dashboard/produtos',
      icon: <MdProductionQuantityLimits />,
    },
    {
      title: 'Energia',
      path: '/dashboard/energia',
      icon: <MdEnergySavingsLeaf />,
    },
  ]

  return (
    <aside className={styles.sideBar}>
      <h3>{email}</h3>
      <ul>
        {menuItems.map(cat => (
          <li key={cat.title}>
            <MenuLink item={cat} />
          </li>
        ))}
      </ul>
    </aside>
  );
}
