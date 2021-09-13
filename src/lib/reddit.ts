import Snoowrap from 'snoowrap';

interface Filter {
  filter: 'none' | 'picture' | 'video' | 'albumns';
  sort: 'random' | 'hot' | 'top' | 'new';
}

interface Info {
  name: string;
  filter: Filter;
}

interface CardProps {
  id: string;
  url: string;
  permalink: string;
  title: string;
}

async function request({ name, filter }: Info) {
  let reddit: Snoowrap = {} as Snoowrap;
  try {
    reddit = new Snoowrap({
      userAgent:
        'Mozilla/5.0 (Linux; Android 8.0.0; SM-G960F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36',
      accessToken: '-8d8GzNSOO40uDwRqhrSVIzA-il7bXg',
    });
  } catch (err) {
    throw new Error('Not request data');
  }

  let data = new Array<CardProps>();

  reddit.getHot(name).then((redditData) =>
    redditData.map((post) => {
      data.push({
        id: post.id,
        url: post.url,
        permalink: post.permalink,
        title: post.title,
      });
    })
  );

  return data;
}

export { request };
