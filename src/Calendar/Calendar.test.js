import Calendar from './index'
import renderer from 'react-test-renderer';

describe('Test Calendar', () => {
  const RealDate = Date

  Date = class extends RealDate {
    constructor(...args) {
      if (args.length === 0) return new RealDate(2022, 7, 22)
      return new RealDate(...args)
    }
  }

  afterEach(() => {
    Date = RealDate
  })

  it('render 2022/8/22', () => {
    const tree = renderer
      .create(<Calendar />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
});
