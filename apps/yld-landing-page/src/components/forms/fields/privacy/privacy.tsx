import { PrivacyItem } from './privacy-item';
import { PrivacyWrapper } from './style';

export const Privacy = (): JSX.Element => {
  return (
    <PrivacyWrapper>
      <PrivacyItem
        label="Privacy first consent to agree"
        consentName="consentFirst"
      />
      <PrivacyItem
        label="Privacy second consent to agree"
        consentName="consentSecond"
      />
    </PrivacyWrapper>
  );
};
