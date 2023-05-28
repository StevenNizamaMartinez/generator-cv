import { useParams } from "react-router-dom";
import CvSenior from "./templates/CvSenior";
import CvPracticanteSE from "./templates/CvPracticanteSE";
import CvPracticanteCE from "./templates/CvPracticanteCE";
import CvAsistente from "./templates/CvAsistente";

const CvPrevisualzer = () => {
  const { id } = useParams();

  if (id === "1") return <CvPracticanteSE />;
  if (id === "2") return <CvPracticanteCE />;
  if (id === "3") return <CvAsistente />;
  if (id === "4") return <CvSenior />;

  return null;
};

export default CvPrevisualzer;
