// import * as React from 'react';
// import './withErrorHandler.scss';
// import Axios, { AxiosInstance } from 'axios';
// import Modal from '../../components/UI/Modal/Modal';

// interface Props {
//     wrappedComponent: React.FunctionComponent;
//     axios: AxiosInstance
// }

// const withErrorHandler: React.FunctionComponent<Props> = (WrapperComponent, axios: AxiosInstance) => {
//     return (props) => {
//         React.useEffect(() => {
//             axios.interceptors.response.use();
//         });
//         return (
//             <React.Fragment>
//                 <Modal>
//                     Something doesn't exist!
//                 </Modal>
//                 <WrapperComponent {...props}/>

//             </React.Fragment>
//         );
//     };
// }
// export default withErrorHandler;