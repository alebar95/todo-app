import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(
  keycloak: KeycloakService
  ) {
    return () =>
      keycloak.init({
        config: {
          url: 'http://localhost:8180' + '/auth',
          realm: 'todos-realm',
          clientId: 'todo-app',
        },
        enableBearerInterceptor: true,
        bearerExcludedUrls: ['/assets'],
        initOptions: {
          checkLoginIframe: false,
          onLoad: 'check-sso'
        }
      });
}