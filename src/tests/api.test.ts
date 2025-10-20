import { fetcher } from '../lib/api';

describe('api fetcher', () => {
  it('throws on non-OK response', async () => {
    global.fetch = jest.fn(() => Promise.resolve({ ok: false, status: 500, text: () => Promise.resolve('err') })) as any;
    await expect(fetcher('/somepath')).rejects.toThrow(/API Error/);
  });
});
