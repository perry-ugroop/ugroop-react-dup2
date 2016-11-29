/* ************************************************************************** */
/*  Description: :D Under development.
/* ************************************************************************** */

import React from 'react';
import BSContainer from '../../containers/BootStrap/BSContainer';

function UGBreadcrumbs(props) {
  return (
    <BSContainer>
      {props.children}
    </BSContainer>
  );
}

UGBreadcrumbs.propTypes = {
  children: React.PropTypes.any,
};

export default UGBreadcrumbs;


//  <div className={'breadcrumb-container'}>
//           <div className={'container'}>
//             <ol className={'breadcrumb'}>
//               <li>
//                 <a href="/">Home</a>
//               </li>
//               <li className={'active'}>
//                 <a href="">Blogs</a>
//               </li>
//             </ol>
//           </div>
//         </div>
