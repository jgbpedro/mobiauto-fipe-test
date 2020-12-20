import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import FipeTable from './pages/FipeTable';
import Main from './pages/Main.tsx';

const Routes = createAppContainer(
    createSwitchNavigator({
        Main,
        FipeTable
    })
);

export default Routes;
