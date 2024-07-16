import pkgInfo from '../package.json';

export const constants = {
  userAgent: `ErasebgPlugin/${pkgInfo.version} Photoshop`,
  photoshopVersion: '23.0.8',
  urls: {
    redirectToAppsPage:
      'https://console.pixelbin.io/choose-org?redirectTo=settings/apps',
    redirectToDashboardPage:
      'https://console.pixelbin.io/choose-org?redirectTo=dashboard',
    redirectToPricingPage:
      'https://console.pixelbin.io/choose-org?redirectTo=settings/billing/pricing',

    orgPricingPage:
      'https://console.pixelbin.io/organization/:orgId/settings/billing/pricing',

    pluginHomePage: 'https://www.erase.bg',
    pluginDoc: 'https://www.pixelbin.io/docs/integrations/photoshop/erase.bg/',

    apiDomain: 'https://api.pixelbin.io',
  },
};
