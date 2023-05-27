import useCvContext from "../../custom/useCvContext";
import CardActivities from "./Card/CardActivities";

function UserActivities() {
  const { profile } = useCvContext();
  return (
    <>
      {profile.activities.map((_, index) => (
        <CardActivities index={index} key={index} />
      ))}
    </>
  );
}

export default UserActivities;
