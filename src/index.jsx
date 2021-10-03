import ForgeUI, {Fragment, render, Text , SpacePage } from '@forge/ui';

const App = () => {
    return (
        <Fragment>
                    <Text>Hello, worldddddddd!</Text>

        </Fragment>
    );
};
export const run = render(
    <SpacePage>
        <App/>
    </SpacePage>
);