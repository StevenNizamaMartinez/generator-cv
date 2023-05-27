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
          <View>
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
            <View>
              <Text>Correo : {profile?.email} </Text>
              <Text>Contacto : {profile?.phone}</Text>
            </View>
            <View>
              <Text>DNI : {profile?.dni}</Text>
              <Text>Dirección : {profile?.adress}</Text>
            </View>
          </View>
          <View style={styles.line}></View>
          <View>
            <Text style={styles.title}>RESUMEN PROFESIONAL</Text>
            <Text style={styles.description}>{summary}</Text>
          </View>
          <View style={styles.line}></View>
          <View>
            <Text style={styles.title}>
              FORMACION ACADÉMICA Y COMPLEMENTARIA
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
          <View>
            <Text style={styles.title}>CHARLAS Y SEMINARIOS</Text>
            <View style={{ flexDirection: "row", width: "50%" }}>
              <Text style={{ marginHorizontal: 8 }}>• Nombre</Text>
              <Text> Lorem, ipsum.</Text>
            </View>
          </View>
          <View style={styles.line}></View>
          <View>
            <Text style={styles.title}>LOGROS ACADÉMICOS Y PERSONALES</Text>
            <Text style={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
              architecto fugiat recusandae aliquid ipsam necessitatibus dolor
              consequatur minima accusamus quas? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Debitis quae sunt hic. Voluptates
              molestiae a, tempora placeat corrupti repudiandae eaque? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut
              asperiores architecto? Quos adipisci odit, error animi magnam
              dignissimos consequuntur, qui, eveniet voluptatibus ratione nobis.
              Quos amet ullam repellat ea. Aspernatur, dolorem debitis
              repellendus inventore veniam perspiciatis, quis nihil, asperiores
              aperiam cumque ex odio molestiae porro eveniet odit itaque animi
              facere soluta fugit autem aut ipsam. Deleniti officiis error
              minima! Dolores, recusandae odit itaque ipsum repellat vel
              cupiditate tempora ullam laborum temporibus dolor corrupti?
              Sapiente nulla, et aliquid blanditiis id quibusdam beatae magni
              corporis doloribus eligendi, porro quasi ex doloremque. Nam sit,
              magnam ut doloremque nobis repellendus incidunt corporis facilis
              hic perferendis soluta non obcaecati repudiandae ad beatae animi!
              Laborum optio tempora sed ab, officiis ex dolorum eos est minus.
              Officia velit aperiam eum esse? Voluptas delectus quo
              necessitatibus voluptatum doloremque quibusdam modi, voluptates
              at, fugit, ex facere earum atque eaque laudantium perferendis
              nisi! Consectetur ea architecto similique labore ullam! Ad
              repellendus necessitatibus eligendi ratione omnis ducimus, eum
              magni quam accusamus ab error enim illo ea commodi ipsa aliquid a
              vero beatae? Repudiandae quam optio quos, dicta a aut. Adipisci.
              Nostrum quasi neque ea rem aliquid rerum explicabo maxime corrupti
              ex commodi veniam atque inventore quas animi illo repellendus
              sapiente, voluptatibus dolore excepturi soluta. Quos nulla
              laudantium beatae inventore doloribus? Consequuntur rerum aliquid
              molestiae minus sunt odit, hic cupiditate officia quas! Porro
              corporis a excepturi rerum natus architecto quis illo in,
              voluptates nihil nisi consequuntur impedit mollitia tempora
              dolores expedita. Ipsum reprehenderit saepe nisi quam amet minus
              similique corrupti voluptatum numquam dignissimos debitis, ducimus
              doloribus rem ab esse accusantium adipisci nostrum. Deserunt
              laboriosam ducimus facere doloremque dolorum possimus sunt alias?
              Debitis aliquid ut consequatur molestias excepturi iusto qui
              aperiam fugit. Corrupti ut odio aut, totam consectetur recusandae
              omnis molestiae, maiores, quibusdam iusto sunt nam perferendis
              reiciendis quod adipisci ab. Excepturi. Assumenda aut nisi
              accusamus voluptates quod in nihil, sed odio amet enim sequi,
              illum dolore eveniet earum nesciunt dolores adipisci itaque
              quisquam alias. Enim eos sapiente veniam commodi, eligendi quos.
              Sed ex saepe molestias autem maxime quasi? Explicabo, quae facere
              cupiditate laborum assumenda at incidunt minima libero delectus
              illo dicta, temporibus maxime perspiciatis harum pariatur suscipit
              sunt inventore laboriosam recusandae? Magni, similique repellat
              consequuntur blanditiis, delectus fugit doloremque officia totam
              fuga inventore laborum voluptate aperiam unde quis voluptates
              atque deserunt! Vero delectus, in ipsa incidunt mollitia fuga
              molestiae accusantium debitis. Ea modi hic rem repellendus tenetur
              ex debitis quam molestias enim expedita consectetur pariatur, iste
              assumenda sequi molestiae explicabo. Alias nihil doloremque qui
              nam nobis numquam, nulla earum magni sequi. Debitis accusantium
              quibusdam asperiores iusto eos hic culpa maiores, dolore placeat!
              Possimus tenetur quis voluptas eos expedita obcaecati molestias
              veniam, totam non qui. Quidem tempora temporibus voluptatum et
              velit. Sapiente.
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default CvPracticanteSE;
