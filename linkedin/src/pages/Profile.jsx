import Section from '../components/common/Section';
import ConnectionsSection from '../components/ConnectionsSection';
import ExperienceSection from '../components/ExperienceSection';
import LanguageSection from '../components/LanguageSection';
import ProfileSection from '../components/ProfileSection';

const Profile = () => {
  return (
    <div className='flex flex-row gap-5'>
      <div className='w-3/4 flex flex-col gap-2'>
        <Section>
          <ProfileSection></ProfileSection>
        </Section>
        <Section>
          <ExperienceSection></ExperienceSection>
        </Section>
      </div>
      <div className='w-1/4 flex flex-col gap-2'>
        <Section>
          <LanguageSection></LanguageSection>
        </Section>
        <Section>
          <ConnectionsSection></ConnectionsSection>
        </Section>
      </div>
    </div>
  );
};

export default Profile;
