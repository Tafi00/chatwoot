import { removeEmoji } from '../emoji';

describe('#removeEmoji', () => {
  it('returns values without emoji', () => {
    expect(removeEmoji('๐Hi๐๐ป thereโ')).toEqual('Hi there');
  });
});
