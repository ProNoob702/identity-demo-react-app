import { UserManager } from "oidc-client";

const url = window.location.origin;

const config = {
  authority: "https://demo.identityserver.io",
  client_id: "interactive.public",
  response_type: "code",
  scope: "openid profile api",
  redirect_uri: url + "/callback",
  silent_redirect_uri: url + "/silent_renew",
  automaticSilentRenew: false,
  validateSubOnSilentRenew: true,
  monitorAnonymousSession: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
  revokeAccessTokenOnSignout: true,
};

const userManager = new UserManager(config);

export default userManager;
