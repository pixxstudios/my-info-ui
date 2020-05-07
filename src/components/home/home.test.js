import React from 'react';
import { render } from '@testing-library/react';
import Home from './home';

describe('<Home /> spec', () => {
    it('renders the component', () => {
        const container = render(<Home />);
        expect(container.firstChild).toMatchSnapshot();
    });
});