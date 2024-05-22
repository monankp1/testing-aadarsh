import * as React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Ellora() {
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
                        <Title>Kailashnath Mandir, Ellora</Title>
                    </Header>
                    <TempleImageWrapper>
                        <TempleImage
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Kailash_temple_%28Ellora_cave_no_15%29_at_Verul.png/643px-Kailash_temple_%28Ellora_cave_no_15%29_at_Verul.png?20200103111835"
                            alt="Kailashnath Mandir, Ellora"
                        />
                    </TempleImageWrapper>
                </TemplePageContainer>

                <Content>
                    <Paragraph>
                        ઈલોરા (મૂળ નામ વેરુળ) એક પુરાતાત્વિક સ્થળ છે, જે ભારત દેશમાં ઔરંગાબાદ, મહારાષ્ટ્ર થી ૩૦ કિ.મિ. (૧૮.૬૦ માઈલ) જેટલા અંતરે આવેલું છે.
                        આ ગુફાઓને રાષ્ટ્રકૂટ વંશે બનાવડાવી હતી. પોતાની સ્મારક ગુફ઼ાઓ માટે પ્રસિદ્ધ ઈલોરા યુનેસ્કો દ્વારા વિશ્વ ધરોહર સ્થળ તરીકે ઘોષિત કરવામાં આવેલું છે.
                        <br />
                    </Paragraph>
                    <Paragraph>
                        ઈલોરા ભારતીય પાષાણ શિલ્પ સ્થાપત્ય કલાનો સાર છે. અહીં ૩૪ "ગુફાઓ" અસલમાં એક ઊર્ધ્વાધર ઊભી ચરણાદ્રિ પર્વતનો એક ફલક છે. આમાં હિંદુ, બૌદ્ધ અને જૈન ગુફ઼ા મંદિર બનેલ છે. આ ગુફાઓ પાંચમી અને દસમી શતાબ્દીમાં બનેલ હતી. અહીં ૧૨ બૌદ્ધ ગુફ઼ાઓ (૧-૧૨), ૧૭ હિંદુ ગુફાઓ (૧૩-૨૯) અને ૫ જૈન ગુફાઓ (૩૦-૩૪) છે. આ બધી ગુફાઓ એકબીજાની આસપાસ બનેલ છે અને પોતાના નિર્માણ કાળના ધાર્મિક સૌહાર્દને દર્શાવે છે.
                        <br />
                    </Paragraph>

                    <Paragraph>
                        ઈલોરાના ૩૪ મઠ અને મંદિર ઔરંગાબાદની નજીક ૨ કિમી ક્ષેત્રમાં ફેલાયેલ છે, આને ઊંચી બેસાલ્ટની ઊભા ખડકોની દીવાલો ને કાપી બનાવાયા છે. દુર્ગમ પહાડીઓ વાળા વિસ્તારમાં આવેલી ઈલોરાની ગુફાઓ ૬૦૦ થી ૧૦૦૦ ઈસવીના કાળની છે, જે પ્રાચીન ભારતીય સભ્યતાનું જીવંત પ્રદર્શન કરે છે. બૌદ્ધ, હિંદૂ અને જૈન ધર્મને પણ સમર્પિત પવિત્ર સ્થાન ઈલોરા પરિસર ન કેવળ અદ્વિતીય કલાત્મક સર્જન અને એક તકનીકી ઉત્કૃષ્ટતા છે, પણ આ પ્રાચીન ભારતના ધૈર્યવાન ચરિત્રની વ્યાખ્યા પણ કરે છે.
                        <br />
                    </Paragraph>

                    <Paragraph>
                        આ સ્થળ યૂનેસ્કોની વિશ્વ વિરાસતમાં સામેલ છે.
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

export default Ellora;
