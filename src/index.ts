import path from 'path';
import { fileURLToPath } from 'url';
import type { Plugin } from '@docusaurus/types';

export type { AuthEnvironment, AuthConfig, EnabledAuthConfig, DisabledAuthConfig } from './client/authConfig';
export {
  resolveAuthConfig,
  buildMsalConfiguration,
  DEFAULT_SCOPES,
} from './client/authConfig';
export { getMsalInstance, createLoginRequest, createLogoutRequest } from './client/msalClient';
export {
  AuthAccountProvider,
  useAuthAccountContext,
  type AuthAccountContextValue,
} from './client/AuthAccountContext';
export { default as AuthGuard } from './client/components/AuthGuard';
export { default as LoadingScreen } from './client/components/LoadingScreen';
export type { LoadingScreenProps } from './client/components/LoadingScreen';
export { default as LoginScreen } from './client/components/LoginScreen';
export type { LoginScreenProps } from './client/components/LoginScreen';

export default function microsoftAuthPlugin(): Plugin<void> {
  const dirname = path.dirname(fileURLToPath(import.meta.url));
  return {
    name: '@kodai-yamamoto-siw/docusaurus-microsoft-auth',
    getThemePath() {
      return path.resolve(dirname, 'theme');
    },
    getTypeScriptThemePath() {
      return path.resolve(dirname, '../src/theme');
    },
  };
}
