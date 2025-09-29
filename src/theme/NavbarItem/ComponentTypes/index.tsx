import type { ComponentType } from 'react';

import * as OriginalComponentTypesModule from '@theme-original/NavbarItem/ComponentTypes';
import CustomAuthAccountNavbarItem from '../CustomAuthAccount';

type ComponentTypesMap = Record<string, ComponentType<unknown>>;

const baseComponentTypes = (OriginalComponentTypesModule as { default?: ComponentTypesMap } & ComponentTypesMap).default ??
  (OriginalComponentTypesModule as ComponentTypesMap);

const ComponentTypes = {
  ...baseComponentTypes,
  'custom-auth-account': CustomAuthAccountNavbarItem,
};

export default ComponentTypes;
