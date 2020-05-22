import * as React from 'react';
import './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

interface Props {
}

const NavigationItems: React.FunctionComponent<Props> = (props: Props) => {
    return(
        <ul className="NavigationItems">
            <NavigationItem link="/">Burger Builder</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>
        </ul>
    );
};

export default NavigationItems;