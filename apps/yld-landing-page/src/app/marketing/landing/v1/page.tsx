'use client';

import { LandingPage } from './../../../../components/pages/landing-page';
import {
  StyledLanding,
  StyledLandingBackgroundLayer,
  StyledLandingWrapper,
} from '../styles';
import { MarketingForm } from '../../../../components/forms/marketing/marketing-form';
import { useCmsContent } from './../../../../hooks/use-cms-content';
import { MarketingLandingContent } from './../../../../types';
import { MarketingFormValidator } from '../../../../helpers/validators/forms/marketing/marketing-form-validator';

export default function Landing() {
  const marketingForm = (
    <MarketingForm
      endpoint="https://localhost:3000/send-lead" // TODO: read from env
      validator={new MarketingFormValidator()}
    />
  );

  const content = useCmsContent('landing-page/v1') as MarketingLandingContent;

  return (
    <StyledLanding>
      <StyledLandingBackgroundLayer />

      <StyledLandingWrapper>
        <LandingPage content={content}>{marketingForm}</LandingPage>
      </StyledLandingWrapper>
    </StyledLanding>
  );
}
