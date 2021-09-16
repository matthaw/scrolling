import { createContext, useContext, useState } from 'react';

enum Filters {
  none = 'None',
  picture = 'Picture',
  video = 'Video',
  albumns = 'Albumns',
}

enum Sort {
  random = 'Random',
  hot = 'Hot',
  top = 'Top',
  new = 'New',
}

interface Filter {
  filter: Filters;
  sort: Sort;
}

interface FilterContextData {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

const FilterContext = createContext<FilterContextData>({} as FilterContextData);

const useFilter = () => useContext(FilterContext);

export { FilterContext, useFilter, Sort, Filters };
export type { Filter };
