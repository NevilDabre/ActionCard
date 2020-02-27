import React, { useState } from "react";
import styled from "styled-components";

const OuterView = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 300px;
  height: 70px;
  background: rgb(255, 255, 255);
  box-shadow: 0px 0px 2px 0px rgba(67, 70, 74, 0),
    0px 0px 5px 0px rgba(67, 86, 100, 0.12);
  border-radius: 10px;
  display: flex;
  flex-direction: "row";
  padding: 5px;
  margin: 5px;
  border: 2px solid #ffffff;
  border-color: ${props => props.isSelected && "rgb(2, 181, 246)"};
`;

const ImageView = styled.div`
  flex: 4;
  height: 100%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  display: block;
  border-radius: 8px;
`;

const ContentView = styled.div`
  flex: 8;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const Title = styled.span`
  font-size: 20px;
  letter-spacing: -0.87px;
`;

const Description = styled.span`
  font-size: 13px;
  letter-spacing: -0.5px;
`;

const CardElement = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Card
      isSelected={isSelected}
      onClick={() => {
        setIsSelected(!isSelected);
      }}
    >
      <ImageView>
        <Image
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7Q189XEh7BuTxJ7UGjoc8REnGzzoqm5j7eDoyYnKBFsP7Yu9b"
          }
        />
      </ImageView>
      <ContentView>
        <Title>Donation</Title>
        <Description>
          An action that helps your community outreach and education
        </Description>
      </ContentView>
    </Card>
  );
};
export default function CustomizedTooltips() {
  return (
    <OuterView>
      <CardElement />
    </OuterView>
  );
}
