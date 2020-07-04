import MockAdapter from 'axios-mock-adapter';
import { getApiClient } from '@utils/apiUtils';
import { getRepos } from '../repoApi';

describe('RepoApi tests', () => {
  const repositoryName = 'perfect';
  it('should make the api call to "/search/?term="', async () => {
    const mock = new MockAdapter(getApiClient().axiosInstance);
    const data = {
      resultCount: 50,
      results: []
    };
    mock.onGet(`https://itunes.apple.com/search?term=${repositoryName}`).reply(200, data);
    const res = await getRepos(repositoryName);
    expect(res.data).toEqual(data);
  });
});
