import React from 'react';
import UGFooterLinkList from './UGFooterLinkList';

const CustomerServiceList = UGFooterLinkList[0].CustomerService.map((items, index) =>
  <li key={index}><a href={items.url} alt={items.Name}>
    {items.Name}
  </a></li>
);

export default CustomerServiceList;
