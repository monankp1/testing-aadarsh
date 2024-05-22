import * as React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Dhule() {
    const navigate = useNavigate();
    const headingStyle = {
        fontWeight: "bold",
        fontSize: "1.25rem"
    }
    return (
        <>
            <BackIcon onClick={() => navigate(-1)}>
                {/* Navigate back */}
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fd569ca716b29d7f1a98071e37fd2287542114cc8243ecad11b40ab9ef936c8?apiKey=65b9bef5a9974c109a4afdb193963080&"
                    alt="Back button"
                />
            </BackIcon>
            <MainContainer>
                <TemplePageContainer>
                    <Header>
                        <Title>BAPS Shree Swaminarayan Mandir, Dhule</Title>
                    </Header>
                    <TempleImageWrapper>
                        <TempleImage
                            src="https://www.baps.org//Data/Sites/1/Media/LocationImages/310BAPS_Shri_Swaminarayan_Mandir_Dhule_Mandir_moods_03.jpg"
                            alt="BAPS Shree Swaminarayan Mandir, Dhule"
                        />
                    </TempleImageWrapper>
                </TemplePageContainer>

                <Content>
                    <Paragraph>
                        જયાં હરિમંદિરની શક્યતા ન હતી ત્યાં સન-૧૯૭૬ માં આર્ષદ્રષ્ટા
                        પ્રમુખસ્વામી મહારાજે શિખરબદ્ધ મંદિર કરવાનો વિચાર કરેલો. હૃદયની બીમારી હતી, ડોકટરોની સખત ના હતી, છતાં સ્વામીશ્રી ધૂલિયા
                        પધાર્યા. અને તા. ૧૯-૬-૧૯૯૮ શુક્રવારે સં. ૨૦૫૫ જેઠ વદ ૧૦ ના રોજ હરિમંદિરની પ્રતિષ્ઠા અને છાત્રાલયના ઉદ્ઘાટનનો વિષિ કર્યો. ગુજરાતના અને મહારાષ્ટના વિધાર્થીઓ અહીં ધૂલિયા ભણવા આવતા.
                        તેથી સ્વામીશ્રીએ પ્રથમ છાત્રાલય તૈયાર કરાવ્યું.પાસે જમીન ઉપર એક ખૂણો પડતો હતો. સ્વામીશ્રી કહે આ બાજુની જમીન પણ લ્યો. આનંદજીવન સ્વામી કહે : ખૂબ જમીન છે. કયાં સાચવવી ? સ્વામીશ્રી કહે : ના, 'ખાંચો ના જોઈએ, કામ આવશે, ખરીદી લેજો ' (તેમને મન શિખર બદ્ધ મંદિરનો પ્લાન હતો.)
                        તે એક એકર જમીન ખરીદાઈ ગઈ તો સ્વામીશ્રી કહેઃ ત્યાં કોઈ ઝાડ ન વાવ શો !! આજુ બાજુના પ્લોટ પણ લઈ લ્યો. “ફુલ ઝાડના આગ્રહીને મન શિખર મંદિરનો પ્લાન નક્કી હતો. તેથી ઝાડ ન વવરાવ્યા. અને પ્લોટ (જમીન) લેવડાવી.

                        <br />
                    </Paragraph>
                    <Paragraph>
                        તા-૩-૭-૨૦૦૭ ના રોજ મહંતસ્વામી મહારાજે હરિમંદિરમાં વાધાવાળા (પોષાક પહેરાવી શકાય તેવા) અક્ષર પુરુષોત્તમ મહારાજની પ્રાણપ્રતિષ્ઠા કરી.

                        <br />
                    </Paragraph>
                    <Paragraph style={headingStyle}>
                        ધુલિયા શિખરબદ્ધ મંદિર
                        <br />
                    </Paragraph>
                    <Paragraph>
                        તા-૪-૩-૨૦૧૩ ના રોજ અમદાવાદ ખાતે ધુલિયા ના શિખરબદ્ધ મંદિરનું શિલાપૂજન પ્રમુખસ્વામી મહારાજે કર્યું. ખાનદેશથી ૧૦૦૦ હરિભક્તો પધાર્યા હતા.તા-૧૦-૧૦-૨૦૧૩ ના રોજ ભૂમિપૂજન
                        અને તા-૨૫-૧૧-૨૦૧૩ ના રોજ શિલાન્યાસ વિધિ મહંતસ્વામી મહારાજે કર્યો.સાથે મુંબઈના કોઠારી બાપા અને સદગુરુ સંતો તથા ૬૫ સંતો-અને ૬૫૦૦ હરિભક્તો હતા.
                        તા-૨૪-૭-૨૦૧૪ ના રોજ સારંગપુરમાં પ્રમુખસ્વામી મહારાજે સ્તંભપૂજન કર્યું. તા-૬-૮-૨૦૧૫ ના રોજ સારંગપુરમાં પ્રમુખસ્વામી મહારાજે ધૂલિયાના શિખરબદ્ધ મંદિરમાં બિરાજમાન થનાર બધી મૂર્તિઓની પ્રાણપ્રતિષ્ઠા કરી.
                        ૧૨ એકર ભૂમિ ઉપર બંસીપહાડપુરના ગુલાબી પથ્થરોથી નિર્માણ આ સુંદર મંદિર પૂર્વમુખે છે. ૨૪ પગથિયાં છે, ઊંડી-જીણી-નાજુક કોતરણીથી આખુ મંદિર ભરચક છે સુંદર અલૌકિક મંદિર મનને સ્થિર કરે છે. અહીં આવનાર વ્યક્તિ વારંવાર આવે છે અને સંસ્કાર અને શાંતી લઈને જાય છે.
                        હનુમાનજી અને ગણપતિજીના શિખરની ચારેકોર તે તે દેવોની ત્રણ ફૂટ
                        ઊંચી વિભિન્ન મુદ્રાવાળી મૂર્તિઓ દર્શન આપે છે. આ પણ એક વિશિષ્ટતા છે. ત્રણ પગથિયાં ચઢી ઘુમ્મટ બાજુ જઈએ છીએ ત્યારે વિશાળ સ્તંભો પર કંડારાયેલી અવતારો, દેવો, ઋષિમુનિયો, સંતો - ભક્તોની મૂર્તિઓ વિવિધ સ્વરુપો સાથે દર્શન દે છે, સમર્થ રામદાસ, એકનાથ, ચાંગદેવ, તુકારામ - તુકડોજી ની પણ મૂર્તિઓ શોભે છે. અહીં પરોક્ષના લોકોને પણ પોતાનું જ મંદિર છે તેવું લાગે છે અને અદ્ભૂત કોતરણી જોઈ વાહ વાહ કર્યા સિવાય રહી શકતા નથી.
                        આકર્ષક લેન્ડ સ્કેપ, સ્વર્ગની યાદ અપાવે છે. મંદિર જાણે અંતરીક્ષમાંથી અવતરી ઊઠયું હોય તેવું ગગનને આંબતું જણાય છે. પ્રાકૃતિક સૌદર્યથી શોભતું અલંકૃત ભવ્યતાથી ભવ્ય દીપી ઉઠે છે. રંગ બે રંગી પ્રકાશ સંયોજનથી શોભતા ફુવારા ગાર્ડન અને મંદિર અલૌકિક લાગે છે.
                        લટકતું વિશાળ ઊડી કોતરણીવાળું ઝુમ્મર નીરખતાં નત મસ્તક થઈ જવાય છે.
                        મૂર્તિ પ્રતિષ્ઠા પ્રગટ બ્રહ્મસ્વરૂપ મહંતસ્વામી મહારાજના વરદ હસ્તે સંપન્ન થઈ. મહારાષ્ટ્ર સરકારના પર્યટન મંત્રીએ કહ્યું : “મહારાષ્ટ્રમાં જેવું પંઢરપુર અને શિરડી વગેરે તીર્થો છે તેવું આ સ્વામિનારાયણ મંદિર છે.
                        પાંજરા નદીના કિનારે આવું સુંદર મંદિર છે. પરિણામે ત્યાં સામે હાઈવે, રેલ્વે વગેરે ની સુંદર વ્યવસ્થાઓ અહીં થશે. " આ ક્ષેત્રને પર્યટન ક્ષેત્ર તરીકે પોપિત કરીને મહારાષ્ટ્ર સરકાર તેના વિકાસ માટેનાં સુંદર આયોજનો કરશે." પરિણામે અહીં આવનાર દર્શનાર્થીઓને વિશેષ સુવિધાઓ પ્રાપ્ત થશે.
                        મહંતસ્વામી મહારાજે આશીર્વચનમાં કહ્યું કે “આ ભૂમિ મહાતીર્થ બની ગઈ છે.ભવિષ્યમાં આનો મહિમા ખૂબ વધશે."

                        <br />
                    </Paragraph>

                    <Paragraph style={headingStyle}>
                        પાંજરા નદી
                        <br />
                    </Paragraph>

                    <Paragraph>
                        નીલકંઠવર્ણી વેપ ભગવાન સ્વામિનારાયણ અહીં સ્નાન કર્યું છે. ભોજન કર્યું છે. પછી માલેગાંવ પપાર્યા છે. ગુણાતીત સ્વરૂપ પ.પૂ. મંહત સ્વામી મહારાજે કહ્યું “આ ધુલિયા અને પાંજરા નદી મહા પ્રસાદીની છે. નીલકંઠવર્ણી પધાર્યા છે. પાંજરા નદીમાં સ્નાન કર્યું છે." તેનો મહિમા ખૂબ છે "

                        <br />
                    </Paragraph>



                </Content>
            </MainContainer>
        </>
    );
}

const MainContainer = styled.div`
  position: relative;
  margin-top: 21px;
  height: auto;
  padding: 0 20px;
`;

const Header = styled.header`
  background-color: #fff;
`;

const Title = styled.h2`
  background-color: #fff;
`;

const Content = styled.section`
  background-color: #fff;
`;

const Paragraph = styled.p`
  background-color: #fff;
`;

const TemplePageContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
`;
const BackIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  margin-left: 1.5rem;
`;
const TempleTitle = styled.h1`
  color: var(--BG-Pink, #270025);
  font: 700 19px Overlock, sans-serif;
`;

const TempleImageWrapper = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 17px;
  border-radius: 8px;
`;

const TempleImage = styled.img`
  width: 100%;
  aspect-ratio: 1.47;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
`;

export default Dhule;
