import * as React from 'react';
import './Spinner.scss';

interface Props {
}

const Spinner: React.FunctionComponent<Props> = (props: Props) => {
    return(
        <div className="Loader">Loading...</div>
    );
};

export default Spinner;