// ************************************************************************
// Google Suggest component - Vinz 2016-11-28
// styled component/container for suggestion listing
// this feature is still on review/development by ber
// ************************************************************************

import styled from 'styled-components';

const PlacesSuggestList = styled.ul` 
   position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    list-style: none;
    margin: 0;
    padding: 0;
    box-shadow: 0 .4rem .5rem .0625rem #dbdbdc;
    z-index: 2;
`;
export default PlacesSuggestList;

