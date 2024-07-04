import { MarketingLandingContent } from '../../types';
import { MarketingFormProps } from '../forms/marketing/marketing-form';
import { StyledHero } from './styles';

type LandingPageProps = {
  content: MarketingLandingContent;
  children?: React.ReactElement<MarketingFormProps>;
};

export const LandingPage = ({
  content,
  children,
}: LandingPageProps): JSX.Element => {
  return <StyledHero content={content}>{children}</StyledHero>;
};
