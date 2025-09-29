import { createRequire } from 'module';
import type { ComponentType } from 'react';

import CustomAuthAccountNavbarItem from '../CustomAuthAccount';

const require = createRequire(import.meta.url);

type ComponentTypesMap = Record<string, ComponentType<unknown>>;

const baseComponentTypes = require('@docusaurus/theme-classic/lib/theme/NavbarItem/ComponentTypes.js').default as ComponentTypesMap;

const ComponentTypes = {
  ...baseComponentTypes,
  'custom-auth-account': CustomAuthAccountNavbarItem,
};

export default ComponentTypes;
