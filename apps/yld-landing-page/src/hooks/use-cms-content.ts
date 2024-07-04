export const useCmsContent = (pageId: string): Record<string, string> => {
  // replace with actual CMS content fetching the cms api
  switch (pageId) {
    case 'landing-page/v1':
      return {
        title: 'Invest in Real Estate',
        subtitle:
          'Get direct digital access to istitutional-grade Real Estate investments',
        formTitle:
          'Sign up in a few minutes to discover our investment opportunities',
      };
    case 'landing-page/v2':
      return {
        title: 'Invest in Real Estate',
        subtitle:
          'Get direct digital access to istitutional-grade Real Estate investments',
        formTitle: 'Fake Form Title',
      };

    default:
      return {};
  }
};
