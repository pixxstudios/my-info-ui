import '@testing-library/react/render';
import Home from './home';

describe('<Home /> spec', () => {
    test('snapshot', () => {
        const { container } = render(<Home />);
        expect(container.firstChild).toMatchSnapshot();
    });
});