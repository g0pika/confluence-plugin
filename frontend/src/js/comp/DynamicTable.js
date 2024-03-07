// import React, { Component } from 'react';
// import ReactDOM from "react-dom";
// import styled from 'styled-components';

// import Button, { ButtonGroup } from '@atlaskit/button';

// import { DynamicTableStateless } from '@atlaskit/dynamic-table';
// import { caption, head, rows } from './data/sample.js'


// const Wrapper = styled.div`
//   min-width: 600px;
// `;

// export default class DynamicTable extends Component {

//   render() {
//     const { pageNumber } = this.state;
//     return (
//       <Wrapper>
//         <ButtonGroup>
//           <Button
//             isDisabled={pageNumber === 1}
//             onClick={() => this.navigateTo(pageNumber - 1)}
//           >
//             Previous Page
//           </Button>
//           <Button
//             isDisabled={pageNumber === 5}
//             onClick={() => this.navigateTo(pageNumber + 1)}
//           >
//             Next Page
//           </Button>
//         </ButtonGroup>
//         <DynamicTableStateless
//           caption={caption}
//           head={head}
//           rows={rows}
//           rowsPerPage={10}
//           page={this.state.pageNumber}
//           loadingSpinnerSize="large"
//           isLoading={false}
//           isFixedSize
//           sortKey="term"
//           sortOrder="DESC"
//           onSort={() => console.log('onSort')}
//           onSetPage={() => console.log('onSetPage')}
//         />
//       </Wrapper>
//     );
//   }
// }



// window.addEventListener('load', function() {
//     const wrapper = document.getElementById("container");
//     wrapper ? ReactDOM.render(<DynamicTable />, wrapper) : false;
// });