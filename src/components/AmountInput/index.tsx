import React from 'react';
import { Flex, Text } from 'rebass';

import { colors } from 'src/styles/variables';
import { cache } from 'src/utils/cache';

export interface AmountContext {
  amount: number;
  setAmount(amount: number): void;
}

export const AmountContext = React.createContext<AmountContext>({ amount: 50, setAmount(amount) {} });

export const AmountProvider: React.FunctionComponent = ({ children }) => {
  const defaultAmount = Number(cache.get('amount')) || 50;
  const [amount, setState] = React.useState(defaultAmount);

  const setAmount = React.useCallback(
    v => {
      if (v !== amount) {
        setState(v);
        cache.set('amount', v);
      }
    },
    [amount]
  );

  return <AmountContext.Provider value={{ amount, setAmount }}>{children}</AmountContext.Provider>;
};

const Input: React.FunctionComponent = () => {
  const { amount, setAmount } = React.useContext(AmountContext);

  return (
    <input
      type="number"
      value={amount}
      min={0}
      max={100000}
      onChange={e => setAmount(Number(e.target.value))}
      onFocus={e => e.target.select()}
      css={{
        flex: 1,
        textAlign: 'right',
        background: 'none',
        border: 'none',
        margin: 0,
        WebkitAppearance: 'none',
        outline: 'none',
        width: '100%',
        height: '100%',
        '::-webkit-outer-spin-button': {
          WebkitAppearance: 'none',
          margin: 0,
        },
        '::-webkit-inner-spin-button': {
          WebkitAppearance: 'none',
          margin: 0,
        },
      }}
    />
  );
};

export const AmountInput: React.FunctionComponent = () => {
  return (
    <Flex
      width="66%"
      bg={colors.background}
      p="5px 30px"
      mr="15px"
      justifyContent="space-between"
      alignItems="center"
      css={{
        borderRadius: 26,
        height: 52,
      }}
    >
      <Text>$</Text>

      <Input />
    </Flex>
  );
};