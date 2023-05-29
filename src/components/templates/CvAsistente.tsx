import {
  Document,
  Image,
  PDFDownloadLink,
  PDFViewer,
  Page,
  Text,
  View,
} from "@react-pdf/renderer";
import { styles } from "../../data/styles";
import useCvContext from "../../custom/useCvContext";
import dayjs from "dayjs";
import { useMediaQuery } from "@mui/material";
import { IProfile } from "../../types/context";
import CvDownload from "../CvDownload";

const MyDocument = ({
  profile,
  summary,
  file,
}: {
  profile: IProfile;
  summary: string;
  file: File | null;
}) => (
  <Document>
    <Page style={styles.page} wrap={true}>
      <View style={styles.lineHeader} />
      <View>
        <Text style={styles.name}>STEVEN NIZAMA {profile?.name} </Text>
      </View>
      <View style={styles.image}>
        {file ? (
          <Image
            src={URL.createObjectURL(file as Blob)}
            style={{
              width: "100px",
              height: "120px",
              border: "2px solid #FACD48",
            }}
          />
        ) : null}
        <View
          style={{
            width: "120%",
            height: "2px",
            marginTop: "12px",
            backgroundColor: "#BCA97E",
          }}
        />
        <View
          style={{
            textAlign: "left",
            width: "100%",
            marginTop: "6px",
          }}
        >
          <Text>{profile.email}</Text>
          <Text>{profile.dni}</Text>
          <Text>{profile.phone}</Text>
          <Text>{profile.adress}</Text>
        </View>
      </View>
      <View style={styles.line}></View>
      <View>
        <Text style={styles.title}>RESUMEN PROFESIONAL</Text>
        <Text style={styles.description}>{summary}</Text>
      </View>
      <View style={styles.line}></View>
      <View>
        <Text style={styles.title}>EXPERIENCIA LABORAL</Text>
        {profile.experience.map((exp, index) => (
          <View key={index}>
            <Text style={styles.subTitle}>Nombre de la Empresa</Text>
            <Text>{exp.jobPosition}</Text>
            <View style={{ flexDirection: "row", marginBottom: 4 }}>
              <Text style={{ marginHorizontal: 8 }}>•</Text>
              <Text>Funciones:</Text>
            </View>
            <Text>
              {dayjs(exp.startDate).format("YYYY-MM")} -{" "}
              {dayjs(exp.endDate).format("YYYY-MM")}
            </Text>
            <Text>{exp.description}</Text>
            <Text>Logros</Text>
          </View>
        ))}
      </View>
      <View style={styles.line}></View>
      <View>
        <Text style={styles.title}>FORMACIÓN ACADÉMICA Y COMPLEMENTARIA</Text>
        {profile.education.map((edu, index) => (
          <View
            style={{ flexDirection: "row", marginBottom: 4, width: "80%" }}
            key={index}
          >
            <View style={{ flexDirection: "row", width: "60%" }}>
              <Text style={{ marginHorizontal: 8, textOverflow: "ellipsis" }}>
                •
              </Text>
              <Text>{edu.institutionName}</Text>
            </View>
            <View style={{ flexDirection: "row", width: "40%" }}>
              <Text style={{ marginHorizontal: 8 }}>-</Text>
              <Text>{edu.career}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.line}></View>
      <View>
        <Text style={styles.title}>IDIOMAS, TECNOLOGÍAS Y SOFTWARES</Text>
        {profile.knowledge.map((know, index) => (
          <View key={index}>
            <View style={{ flexDirection: "row", width: "50%" }}>
              <Text style={{ marginHorizontal: 8 }}>
                • {know.knowledgeName}
              </Text>
              <Text> • Nivel : {know.level}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.line}></View>
      <View>
        <Text style={styles.title}>LOGROS ACADÉMICOS Y PERSONALES</Text>
        <Text style={styles.content}>{profile.achievements}</Text>
      </View>
      <View style={styles.line}></View>
      <View>
        <Text style={styles.title}>REFERENCIAS PERSONALES</Text>
        {profile.references.map((ref, index) => (
          <View style={{ flexDirection: "row", width: "50%" }} key={index}>
            <Text style={{ marginHorizontal: 8 }}>• {ref.name}</Text>
            <Text> {ref.phone} </Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

function CvAsistente() {
  const { profile, summary, file } = useCvContext();
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <>
      {matches ? (
        <CvDownload
          document={
            <MyDocument profile={profile} summary={summary} file={file} />
          }
        />
      ) : (
        <PDFViewer>
          <MyDocument profile={profile} summary={summary} file={file} />
        </PDFViewer>
      )}
    </>
  );
}

export default CvAsistente;
