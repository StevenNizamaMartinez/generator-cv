import UserData from "../form/UserData";
import UserSumary from "../form/UserSumary";
import UserEducation from "../form/UserEducation";
import UserVolunteers from "../form/UserVolunteers";
import useCvContext from "../../custom/useCvContext";
import UserSeminars from "../form/UserSeminars";
import UserKnowledge from "../form/UserKnowledge";
import UserAchievements from "../form/UserAchievements";
import UserExperience from "../form/UserExperience";

function PathCvExperience() {
  const { index } = useCvContext();

  return (
    <>
      {index === 0 ? <UserData /> : null}
      {index === 1 ? <UserSumary /> : null}
      {index === 2 ? <UserEducation /> : null}
      {index === 3 ? <UserVolunteers /> : null}
      {index === 4 ? <UserExperience /> : null}
      {index === 5 ? <UserKnowledge /> : null}
      {index === 6 ? <UserSeminars /> : null}
      {index === 7 ? <UserAchievements /> : null}
    </>
  );
}

export default PathCvExperience;
