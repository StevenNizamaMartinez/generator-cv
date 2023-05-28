import UserData from "../form/UserData";
import UserSumary from "../form/UserSumary";
import UserEducation from "../form/UserEducation";
import UserVolunteers from "../form/UserVolunteers";
import useCvContext from "../../custom/useCvContext";
import UserSeminars from "../form/UserSeminars";
import UserKnowledge from "../form/UserKnowledge";
import UserAchievements from "../form/UserAchievements";

function PathCvNoExperience() {
  const { index } = useCvContext();

  return (
    <>
      {index === 0 ? <UserData /> : null}
      {index === 1 ? <UserSumary /> : null}
      {index === 2 ? <UserEducation /> : null}
      {index === 3 ? <UserVolunteers /> : null}
      {index === 4 ? <UserKnowledge /> : null}
      {index === 5 ? <UserSeminars /> : null}
      {index === 6 ? <UserAchievements /> : null}
    </>
  );
}

export default PathCvNoExperience;
