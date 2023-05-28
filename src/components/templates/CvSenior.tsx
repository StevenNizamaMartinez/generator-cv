import {
  Document,
  Image,
  PDFViewer,
  Page,
  Text,
  View,
} from "@react-pdf/renderer";
import { styles } from "../../data/styles";
import useCvContext from "../../custom/useCvContext";
import dayjs from "dayjs";

function CvSenior() {
  const { profile, summary, file } = useCvContext();

  return (
    <PDFViewer>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.lineHeader} />
          <View>
            <Text style={styles.name}>
              {profile?.name} {profile.lastname}{" "}
            </Text>
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
            {profile.experience.map((exp) => (
              <>
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
              </>
            ))}
          </View>
          <View style={styles.line}></View>
          <View>
            <Text style={styles.title}>PERIODO 2018-2023</Text>
            <View
              style={{ flexDirection: "row", marginBottom: 4, width: "80%" }}
            >
              <View style={{ flexDirection: "row", width: "50%" }}>
                <Text style={{ marginHorizontal: 8 }}>•</Text>
                <Text>Cargo: asdfasdfdasfasdfasdf</Text>
              </View>
              <View style={{ flexDirection: "row", width: "50%" }}>
                <Text style={{ marginHorizontal: 8 }}>-</Text>
                <Text>Cargo: asdfasdfdasfasdfasdaDDSFASDFDASFf</Text>
              </View>
            </View>
          </View>
          <View style={styles.line}></View>
          <View>
            <Text style={styles.title}>
              FORMACIÓN ACADÉMICA Y COMPLEMENTARIA
            </Text>
            {profile.education.map((edu) => (
              <View
                style={{ flexDirection: "row", marginBottom: 4, width: "80%" }}
              >
                <View style={{ flexDirection: "row", width: "60%" }}>
                  <Text
                    style={{ marginHorizontal: 8, textOverflow: "ellipsis" }}
                  >
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
            {profile.knowledge.map((know) => (
              <>
                <View style={{ flexDirection: "row", width: "50%" }}>
                  <Text style={{ marginHorizontal: 8 }}>
                    • {know.knowledgeName}
                  </Text>
                  <Text> • Nivel : {know.level}</Text>
                </View>
              </>
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
            {profile.references.map((ref) => (
              <View style={{ flexDirection: "row", width: "50%" }}>
                <Text style={{ marginHorizontal: 8 }}>• {ref.name}</Text>
                <Text> {ref.phone} </Text>
              </View>
            ))}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default CvSenior;
