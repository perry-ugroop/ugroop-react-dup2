/* ************************************************************************** */
/* Created by Vince. Feature box in the homepage */
/*  **************************************************************************** */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import BSContainer from '../../containers/BootStrap/BSContainer';

const UGSubpagesTitleBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  background-color: #11314d;
  color: #FFF;
  color: #7C88A1;
  margin: 0;
  padding: 20px 0 12px 0; 
  background: #2e5da5;
  border-top: 3px solid #EF5B3C;
`;

function UGSubpagesHeader(props) {
  const item = (
    <h1 className="">{props.title}</h1>
    );
  return (
    <div className="subpages-header">
      <UGSubpagesTitleBox>
        <BSContainer>{item}</BSContainer>
      </UGSubpagesTitleBox>
    </div>
  );
}

UGSubpagesHeader.propTypes = {
  title: PropTypes.string,
};

export default UGSubpagesHeader;


// function UGSubpagesHeader(props) {
//   const item = (
//     <div className={'col-md-3 col-sm-6'}>
//       <div className={'box-features'}>
//         <div>
//           <p className={'text-center'}><img src={props.image} width="250" height="134" alt="" className={'img-responsive'} /></p>
//           <h3 className={'featured-header'}>{props.header}</h3>
//           <p>{props.content}</p>
//         </div>
//         <a className={'btn btn-primary btn-allcapse btn-block'} href={props.link}>Learn more</a>
//       </div>
//     </div>
//     );
//   return (
//     <div>
//       {item}
//     </div>
//   );
// }
