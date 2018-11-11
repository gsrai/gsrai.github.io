import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

// mock the window fetch, by default this is used by the api functions
const mockWindowFetch = jest.fn()
window['fetch'] = mockWindowFetch
// mock console.error and console.warn to declutter the test runner output
console['error'] = jest.fn()
console['warn'] = jest.fn()
