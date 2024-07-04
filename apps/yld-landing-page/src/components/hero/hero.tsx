import Typography from '@mui/material/Typography';
import {
  HeroContainer,
  HeroContentWrapper,
  StyledFormContainer,
  StyledFormWithContentContainer,
} from './styles';
import { MarketingLandingContent } from '../../types';
import { MarketingFormProps } from '../forms/marketing/marketing-form';

type HeroProps = {
  children?: React.ReactElement<MarketingFormProps>;
  content: MarketingLandingContent;
};

export const Hero = ({ children, content }: HeroProps): JSX.Element => {
  return (
    <div>
      <HeroContainer>
        <HeroContentWrapper>
          <Typography variant="h5" color="white">
            {content.title}
          </Typography>
          {content.subtitle && (
            <Typography variant="h3" color="white">
              {content.subtitle}
            </Typography>
          )}
        </HeroContentWrapper>

        <StyledFormWithContentContainer>
          {content.formTitle && (
            <Typography variant="h5">{content.formTitle}</Typography>
          )}
          <StyledFormContainer>{children}</StyledFormContainer>
        </StyledFormWithContentContainer>
      </HeroContainer>
    </div>
  );
};
