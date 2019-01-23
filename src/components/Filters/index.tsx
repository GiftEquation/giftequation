import React from 'react';
import { Box, Flex, Text } from 'rebass';

import { AmountFilters } from 'src/components/AmountFilters';
import { AmountInput, AmountContext } from 'src/components/AmountInput';
import { CategoryFilters, CategoryFilterContext } from 'src/components/CategoryFilters';
import { Icon, IconNames } from 'src/components/Icon';
import { HeaderContext } from 'src/components/Header';

import { getEmSize } from 'src/styles/mixins';
import { colors, breakpoints, dimensions } from 'src/styles/variables';

const MobileFilter = () => {
  const { showFilters, toggleFilters } = React.useContext(HeaderContext);
  const { amount } = React.useContext(AmountContext);
  const { category } = React.useContext(CategoryFilterContext);

  // Only show when filters are hidden
  if (showFilters) {
    return null;
  }

  return (
    <Flex
      p="15px 24px"
      alignItems="center"
      onClick={toggleFilters}
      css={{
        display: 'none',
        [`@media (max-width: ${getEmSize(breakpoints.md)}em)`]: {
          display: 'flex',
        },
      }}
    >
      <Box
        pr="24px"
        fontSize={dimensions.fontSize.large}
        css={{
          boxShadow: '1px 0px 0px 0px lightgrey',
        }}
      >
        ${amount}
      </Box>

      <Flex flex="1" pl="24px" alignItems="center">
        <Flex
          alignItems="center"
          justifyContent="center"
          bg={colors.category}
          width="35px"
          css={{
            borderRadius: '50%',
            height: '35px',
            cursor: 'pointer',
          }}
        >
          <Icon icon={IconNames[category]} color={colors.white} />
        </Flex>

        <Box ml="10px">{category.charAt(0).toUpperCase() + category.slice(1)}</Box>
      </Flex>
    </Flex>
  );
};

export const Filters = () => {
  const { showFilters } = React.useContext(HeaderContext);
  return (
    <Box
      bg={colors.white}
      css={{
        boxShadow: '0px 2px 4px 0px lightgrey',
      }}
    >
      {showFilters && (
        <Flex flexWrap="wrap">
          <Box
            width={[1, 1, 1, 1 / 3]}
            pt="25px"
            pb="20px"
            pl="24px"
            pr="15px"
            css={{ boxShadow: `0px 2px 0px 0px lightgrey` }}
          >
            <Box pb="15px">
              <Text fontWeight="bold" fontSize={dimensions.fontSize.large}>
                Amount
              </Text>
            </Box>

            <Flex flexWrap="nowrap">
              <AmountInput />

              <AmountFilters />
            </Flex>
          </Box>

          <Box width={[1, 1, 1, 2 / 3]} mt="25px" mb="20px" css={{ borderLeft: '2px solid lightgrey', flex: 1 }}>
            <Box ml="9px">
              <Text pb="15px" pl="15px" fontWeight="bold" fontSize={dimensions.fontSize.large}>
                Filters
              </Text>

              <CategoryFilters />
            </Box>
          </Box>
        </Flex>
      )}

      <MobileFilter />
    </Box>
  );
};
