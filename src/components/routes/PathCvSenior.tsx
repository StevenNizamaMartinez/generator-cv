import UserData from "../form/UserData";
import UserSumary from "../form/UserSumary";
import UserEducation from "../form/UserEducation";
import useCvContext from "../../custom/useCvContext";
import UserSeminars from "../form/UserSeminars";
import UserKnowledge from "../form/UserKnowledge";
import UserAchievements from "../form/UserAchievements";
import UserExperience from "../form/UserExperience";
import UserReferences from "../form/UserReferences";
function PathCvSenior() {
  const { index } = useCvContext();

  return (
    <>
      {index === 0 ? <UserData /> : null}
      {index === 1 ? <UserSumary /> : null}
      {index === 2 ? <UserEducation /> : null}
      {index === 3 ? <UserExperience /> : null}
      {index === 4 ? <UserKnowledge /> : null}
      {index === 5 ? <UserSeminars /> : null}
      {index === 6 ? <UserAchievements /> : null}
      {index === 7 ? <UserReferences /> : null}
    </>
  );
}

export default PathCvSenior;
