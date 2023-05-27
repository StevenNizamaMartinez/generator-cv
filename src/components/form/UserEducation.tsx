import useCvContext from "../../custom/useCvContext";
import CardEducation from "./Card/CardEducation";
import { IEducation } from "../../types/context";

function UserEducation() {
  const { profile, setProfile, setExpanded } = useCvContext();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const newEducation: IEducation = {
      academicArea: "",
      career: "",
      condition: "",
      degree: "",
      description: "",
      endDate: new Date(),
      idEducationLaborum: "",
      imgUrl: "",
      institutionName: "",
      startDate: new Date(),
      studyingHere: false,
      level: "",
    };
    setProfile({
      ...profile,
      education: [...profile.education, newEducation],
    });
    setExpanded((prevState: Record<number, boolean>) => {
      const newExpanded = { ...prevState };
      Object.keys(newExpanded).forEach((key) => {
        newExpanded[key] = false;
      });
      newExpanded[profile.education.length] = true;
      return newExpanded;
    });
  };

  return (
    <>
      {profile.education.map((_, index) => (
        <CardEducation key={index} index={index} />
      ))}
      <button onClick={handleClick}>Add Education</button>
    </>
  );
}

export default UserEducation;
