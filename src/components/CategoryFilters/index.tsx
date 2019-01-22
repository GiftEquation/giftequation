import React from 'react';
import { Flex } from 'rebass';

import { IconNames } from 'src/components/Icon';
import { Filter } from 'src/components/Filter';

import { colors } from 'src/styles/variables';
import { cache } from 'src/utils/cache';

export const filterNames: { [key: string]: Category } = {
  all: 'all',
  techie: 'techie',
  green: 'green',
  outdoorsy: 'outdoorsy',
  music: 'music',
  foodie: 'foodie',
  sporty: 'sporty',
  baby: 'baby',
  kids: 'kids',
  manly: 'manly',
  girly: 'girly',
  pets: 'pets',
  romantic: 'romantic',
};

export type Category =
  | 'all'
  | 'techie'
  | 'green'
  | 'outdoorsy'
  | 'music'
  | 'foodie'
  | 'sporty'
  | 'baby'
  | 'kids'
  | 'manly'
  | 'girly'
  | 'pets'
  | 'romantic';

export interface ICategoryFilterContext {
  category: Category;
  setCategory(category: Category): void;
}

export const CategoryFilterContext = React.createContext<ICategoryFilterContext>({
  category: 'all',
  setCategory(category) {},
});

export const categoryReducer = (current: Category, next: Category) => {
  if (next !== current) {
    cache.set('category', next);
    return next;
  }

  return current;
};

export const CategoryFilterProvider: React.FunctionComponent = ({ children }) => {
  const defaultCategory = cache.get('category') || 'all';
  const [category, setCategory] = React.useReducer(categoryReducer, defaultCategory as Category);

  return <CategoryFilterContext.Provider value={{ category, setCategory }}>{children}</CategoryFilterContext.Provider>;
};

export interface ICategoryFilter {
  name: Category;
}

const CategoryFilter: React.FunctionComponent<ICategoryFilter> = React.memo(({ name }) => {
  const { category, setCategory } = React.useContext(CategoryFilterContext);

  const onClick = React.useCallback(() => setCategory(name as Category), [name]);

  return (
    <Filter name={name} icon={IconNames[name]} isActive={category === name} bg={colors.category} onClick={onClick} />
  );
});

export const CategoryFilters = () => {
  return (
    <Flex flexWrap="nowrap" pb="20px" mb="-20px" css={{ overflow: 'auto' }}>
      {Object.values(filterNames).map((name, index) => (
        <CategoryFilter key={index} name={name} />
      ))}
    </Flex>
  );
};