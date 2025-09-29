import type { ComponentType } from 'react';

import OriginalComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import CustomAuthAccountNavbarItem from '../CustomAuthAccount';

type ComponentTypesMap = Record<string, ComponentType<unknown>>;

const ComponentTypes = {
  ...(OriginalComponentTypes as ComponentTypesMap),
  'custom-auth-account': CustomAuthAccountNavbarItem,
};

export default ComponentTypes;
