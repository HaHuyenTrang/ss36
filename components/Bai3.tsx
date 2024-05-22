// import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';

// export default function Bai3() {
//   const [tab, setTab] = useState(0);
//   const history = useHistory();

//   const tabs = [
//     { label: 'Home', href: '/' },
//     { label: 'About', href: '/about' },
//     { label: 'Services', href: '/services' },
//     { label: 'Contact', href: '/contact' },
//   ];

//   const handleClick = (index) => {
//     setTab(index);
//   };

//   useEffect(() => {
//     // Cập nhật URL khi tab thay đổi
//     history.push(tabs[tab].href);
//   }, [tab, history, tabs]);

//   return (
//     <div>
//       <h1>Bai3</h1>
//       <nav>
//         <ul>
//           {tabs.map((tab, index) => (
//             <li
//               key={index as number}
//               className={tab && typeof tab === 'object' && tab === index ? 'active' : ''}
//               onClick={() => handleClick(index as number)}
//             >
//               <a href={tab.href}>{tab.label}</a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// }