import React from 'react';
import UGFooterLinkList from './UGFooterLinkList';

const FollowUsList = UGFooterLinkList[0].FollowUs.map((items, index) =>
  <li key={index}><a href={items.url} alt={items.Name} className={items.classname}>
    {items.Name}
  </a></li>
);

export default FollowUsList;
