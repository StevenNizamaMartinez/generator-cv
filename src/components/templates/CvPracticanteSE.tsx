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
import image from "../../assets/image.jpg";

const exist = true;

function CvPracticanteSE() {
  const { profile, summary } = useCvContext();
  console.log(profile);
  return (
    <PDFViewer>
      <Document>
        <Page size="A4" style={styles.page} wrap>
          <View style={styles.lineHeader} />
          <View style={{ marginBottom: "4" }}>
            <Text style={styles.name}>
              {profile?.name} {profile?.lastname}
            </Text>
          </View>
          <View style={styles.image}>
            {exist ? (
              <Image
                src={image}
                source={image}
                style={{
                  width: "100px",
                  height: "120px",
                  border: "2px solid #FACD48",
                }}
              />
            ) : null}
          </View>
          <View style={styles.line}></View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "60%",
              gap: "10px",
            }}
          >
            <View style={{ marginBottom: "4" }}>
              <Text>Correo : {profile?.email} </Text>
              <Text>Contacto : {profile?.phone}</Text>
            </View>
            <View>
              <Text>DNI : {profile?.dni}</Text>
              <Text>Dirección : {profile?.adress}</Text>
            </View>
          </View>
          <View style={styles.line}></View>
          <View style={{ marginBottom: "4" }}>
            <Text style={styles.title}>RESUMEN PROFESIONAL</Text>
            <Text style={styles.description}>{summary}</Text>
          </View>
          <View style={styles.line}></View>
          <View style={{ marginBottom: "4" }}>
            <Text style={styles.title}>
              FORMACION ACADÉMICA Y COMPLEMENTARIA
            </Text>
            <View
              style={{ flexDirection: "row", marginBottom: 4, width: "90%" }}
            >
              {profile.education.map((edu) => (
                <>
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
                </>
              ))}
            </View>
          </View>
          <View style={styles.line}></View>
          <View style={{ marginBottom: "4" }}>
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
          <View style={{ marginBottom: "4" }}>
            <Text style={styles.title}>
              ACTIVIDADES EXTRA ACADÉMICAS Y VOLUNTARIADOS
            </Text>
            <Text style={styles.subTitle}>Nombre de la Empresa</Text>
            <Text>Cargo</Text>
            <View style={{ flexDirection: "row", marginBottom: 4 }}>
              <Text style={{ marginHorizontal: 8 }}>•</Text>
              <Text>Funciones:</Text>
            </View>
            <Text>Fecha de Inicio - Fecha de Fin</Text>
            <Text>Objetivo del puesto</Text>
            <Text>Logros</Text>
          </View>
          <View style={styles.line}></View>
          <View style={{ marginBottom: "4" }}>
            <Text style={styles.title}>CHARLAS Y SEMINARIOS</Text>
            {profile.seminars.map((seminar) => (
              <>
                <View style={{ flexDirection: "row", width: "50%" }}>
                  <Text style={{ marginHorizontal: 8 }}>• {seminar.name}</Text>
                  <Text> {seminar.place}</Text>
                </View>
              </>
            ))}
          </View>
          <View style={styles.line}></View>
          <View style={{ marginBottom: "4" }}>
            ||
            <Text style={styles.title}>LOGROS ACADÉMICOS Y PERSONALES</Text>
            <Text style={styles.content}>{profile.achievements}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default CvPracticanteSE;
