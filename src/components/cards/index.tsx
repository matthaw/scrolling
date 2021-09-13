import { Grid } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { useFilter } from '../../hooks/useFilter';
import { request } from '../../lib/reddit';
import { Card } from '../card';

interface CardProps {
  id: string;
  url: string;
  permalink: string;
  title: string;
}

function Cards() {
  const { filter, setFilter } = useFilter();
  const [data, setData] = useState<CardProps[]>([]);

  useEffect(() => {
    request({ name: 'gifs', filter }).then((req) => {
      console.log(req);
    });
  }, []);

  return (
    <Grid gridTemplateColumns="repeat(4, 1fr)">
      {data.map((info) => (
        <Card
          key={info.id}
          id={info.id}
          title={info.title}
          permalink={info.permalink}
          url={info.url}
        />
      ))}
    </Grid>
  );
}

export { Cards };
