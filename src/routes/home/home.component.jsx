import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'HYBRIDS',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_QcAsHs1RsA9JYfIsV4raY5Qi4wg5_wkn0g&usqp=CAU',
    },
    {
      id: 2,
      title: 'INDICAS',
      imageUrl:
        'https://hashmuseum.com/wp-content/uploads/INDICA-1-853x1280.jpg',
    },
    {
      id: 3,
      title: 'SATIVAS',
      imageUrl:
        'https://www.indopedia.org/wp-content/uploads/2019/07/hybrid-cannabis.jpg',
    },
    {
      id: 4,
      title: 'SHAKES',
      imageUrl:
        'https://leafly-cms-production.imgix.net/wp-content/uploads/2020/12/10124147/Shake.jpg',
    },
    {
      id: 5,
      title: 'SMALLS',
      imageUrl:
        'https://i.heyemjay.com/cdn-cgi/image/f=auto,width=500,quality=75/https://i.heyemjay.com/web/products/T017PRO2/1639838968',
    },
  ];

  return (
    <div>
      <Directory categories={categories} />;
      <Outlet />
    </div>
  );
};

export default Home;
