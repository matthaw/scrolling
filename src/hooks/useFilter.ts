import React, { createContext, useContext, useState } from 'react';

interface Filter {
  filter: 'none' | 'picture' | 'video' | 'albumns';
  sort: 'random' | 'hot' | 'top' | 'new';
}

interface FilterContextData {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

const FilterContext = createContext<FilterContextData>({} as FilterContextData);

const useFilter = () => useContext(FilterContext);

export { FilterContext, useFilter };
