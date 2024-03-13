import { ProfileBreadcrumbContainer } from "./ProfileBreadcrumbContainer";
import { SectionsList } from "./SectionsList";

export const Profile = () => {
  return (
    <>
      <ProfileBreadcrumbContainer currentSection="Personal Data" />
      <SectionsList />
    </>
  );
};
