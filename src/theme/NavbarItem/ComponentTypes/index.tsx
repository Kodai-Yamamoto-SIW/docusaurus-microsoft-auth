import type { ComponentType } from 'react';

import CustomAuthAccountNavbarItem from '../CustomAuthAccount';

type ComponentTypesMap = Record<string, ComponentType<unknown>>;

const loadBaseComponentTypes = (): ComponentTypesMap => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const original = require('@theme-original/NavbarItem/ComponentTypes') as {
    default?: ComponentTypesMap;
  } & ComponentTypesMap;

  if (original && typeof original === 'object') {
    return original.default ?? original;
  }

  throw new Error('Failed to load original navbar component map');
};

const ComponentTypes = {
  ...loadBaseComponentTypes(),
  'custom-auth-account': CustomAuthAccountNavbarItem,
};

export default ComponentTypes;
