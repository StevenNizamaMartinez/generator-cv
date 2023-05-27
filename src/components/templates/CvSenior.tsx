import {
  Document,
  Image,
  PDFViewer,
  Page,
  Text,
  View,
} from "@react-pdf/renderer";
import { styles } from "../../utils/styles";
import useCvContext from "../../custom/useCvContext";
import image from "../../assets/1.png";

const exist = true;

function CvSenior() {
  const { profile } = useCvContext();

  return (
    <PDFViewer>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.lineHeader} />
          <View>
            <Text style={styles.name}>STEVEN NIZAMA {profile?.name} </Text>
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
              <Text>Correo</Text>
              <Text>DNI : </Text>
              <Text>Telefono</Text>
              <Text>Dirección</Text>
            </View>
          </View>
          <View style={styles.line}></View>
          <View>
            <Text style={styles.title}>RESUMEN PROFESIONAL</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, voluptates, quia voluptate quod quos
              voluptatibus quas doloribus quidem voluptatem. Quisquam
              voluptatum,
            </Text>
          </View>
          <View style={styles.line}></View>
          <View>
            <Text style={styles.title}>EXPERIENCIA LABORAL</Text>
            <Text style={styles.subTitle}>Nombre de la Empresa</Text>
            <Text>Cargo</Text>
            <View style={{ flexDirection: "row", marginBottom: 4 }}>
              <Text style={{ marginHorizontal: 8 }}>•</Text>
              <Text>Objetivo del Puesto :</Text>
            </View>
            <Text>Fecha de Inicio - Fecha de Fin</Text>
            <Text>Objetivo del puesto</Text>
            <Text>Logros</Text>
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
            <View
              style={{ flexDirection: "row", marginBottom: 4, width: "80%" }}
            >
              <View style={{ flexDirection: "row", width: "50%" }}>
                <Text style={{ marginHorizontal: 8 }}>•</Text>
                <Text>Nombre del centro de Fomarción</Text>
              </View>
              <View style={{ flexDirection: "row", width: "50%" }}>
                <Text style={{ marginHorizontal: 8 }}>-</Text>
                <Text>Nombre del curso</Text>
              </View>
            </View>
          </View>
          <View style={styles.line}></View>
          <View>
            <Text style={styles.title}>IDIOMAS, TECNOLOGÍAS Y SOFTWARES</Text>
            <View style={{ flexDirection: "row", width: "50%" }}>
              <Text style={{ marginHorizontal: 8 }}>• Idioma 1</Text>
              <Text> Lorem, ipsum.</Text>
            </View>
          </View>
          <View style={styles.line}></View>
          <View>
            <Text style={styles.title}>LOGROS ACADÉMICOS Y PERSONALES</Text>
            <Text style={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
              architecto fugiat recusandae aliquid ipsam necessitatibus dolor
              consequatur minima accusamus quas?
            </Text>
          </View>
          <View style={styles.line}></View>
          <View>
            <Text style={styles.title}>REFERENCIAS PERSONALES</Text>
            <View style={{ flexDirection: "row", width: "50%" }}>
              <Text style={{ marginHorizontal: 8 }}>• Nombre</Text>
              <Text> Lorem, ipsum.</Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default CvSenior;
