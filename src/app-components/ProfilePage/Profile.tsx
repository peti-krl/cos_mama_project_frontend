import { ProfileBreadcrumbContainer } from "./ProfileBreadcrumbContainer";
import { SectionsList } from "./SectionsList";

export const Profile = () => {
  return (
    <>
      <ProfileBreadcrumbContainer currentSection="Personal Data" />
      <div className="mt-5">
        <SectionsList />
      </div>
    </>
  );
};
