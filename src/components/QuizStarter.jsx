import * as React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const data = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5726dbf65194fe06ff5de8d1114099a33ba854e16ba10a864803498f09a9216a?apiKey=3250d16d0ad044539de68d3e33600ce8&",
    title: "Do you know?",
    description:
      "What mandir gives to the society and the population connected with its divine environment?",
  },
];
const activities = [
  {
    id: 1,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/48e32c756171dfd83384040b5add7bdfba0735f59c6cb31f5a40dc08aa7053da?apiKey=3250d16d0ad044539de68d3e33600ce8&",
    title: "Activity Zone",
  },
];
function QuizStarter() {
  const navigate = useNavigate(); // Hook to handle navigation

  // Handler to navigate to the details page
  const handleIcon = () => {
    navigate("/score"); // Navigate to the ImageDetails component page
  };
  const handleQuiz = () => {
    navigate("/play-activity"); // Navigate to the ImageDetails component page
  };
  return (
    <>
      <MemoriesHeader>
        {/* <MemoriesIcon
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/48e32c756171dfd83384040b5add7bdfba0735f59c6cb31f5a40dc08aa7053da?apiKey=3250d16d0ad044539de68d3e33600ce8&"
          alt="Memories Icon"
        /> */}
        <MemoriesTitle>Quiz Zone</MemoriesTitle>
        {/* <MemoriesLink onClick={handleIcon}>View All</MemoriesLink> */}
      </MemoriesHeader>
      <Container>
        {data.map((item, index) => (
          <Card key={index}>
            <CardContent>
              <CardImage src={item.image} alt={item.title} />
              <CardText>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardText>
            </CardContent>
            <PlayButton>
              <PlayButtonContent>
                <PlayButtonText onClick={handleQuiz}>
                  Start the Quiz
                </PlayButtonText>

              </PlayButtonContent>
            </PlayButton>
            <CardFooter>
              Play the quiz to know more about BAPS and the history of the
              mandirs built by HH Pramukhswami Maharaj
            </CardFooter>
          </Card>
        ))}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  padding: 10px;
  margin-bottom: 62px;
`;

const Card = styled.div`
  border-radius: 16px;
  border: 1px solid #c86fff;
  background-color: #f4eaff;
  color: #1d0f2a;
  width: 350px;
`;

const CardContent = styled.div`
  display: flex;
  gap: 16px;
  padding: 10px;
`;

const CardImage = styled.img`
  width: 100px;
  aspect-ratio: 1;
  object-fit: cover;
  margin: auto 0;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CardTitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
  line-height: 130%;
  margin: 0;
`;

const CardDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-top: 8px;
`;

const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #bfa1ff;
  margin: 16px 10px;
  width: calc(100% - 20px);
  padding: 9px 60px;
  font-size: 16px;
  color: #270025;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;

const PlayButtonContent = styled.div`
  display: flex;
  gap: 8px;
`;

const PlayButtonText = styled.span`
  font-weight: 600;
  font-size: 16px;
`;



const CardFooter = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin: 16px 10px 10px;
`;
const MemoriesHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 20px 10px 0 10px;

  color: #1d0f2a;
  padding: 0 8px;
`;

const MemoriesIcon = styled.img`
  width: 28px;
  object-fit: contain;
  height: 28px;
`;
const MemoriesTitle = styled.h2`
  flex: 1;
  margin: auto 0;
  font: 700 20px Arial, sans-serif;
`;
const MemoriesLink = styled.a`
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
  color: #0000ee; // Default link color
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default QuizStarter;
