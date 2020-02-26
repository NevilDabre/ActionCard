import React from "react";
import styled from "styled-components";

const OuterView = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 350px;
  height: 100px;
  background: rgb(255, 255, 255);
  border: 2px solid rgb(2, 181, 246);
  box-shadow: 0px 0px 2px 0px rgba(67, 70, 74, 0),
    0px 0px 5px 0px rgba(67, 86, 100, 0.12);
  border-radius: 17px;
  display: flex;
  flex-direction: "row";
  font-family: HelveticaNeue-Medium;
  padding: 5px;
  margin: 5px;
`;

const ImageView = styled.div`
  flex: 5;
  height: 100%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  display: block;
  border-radius: 17px;
`;

const ContentView = styled.div`
  flex: 7;
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
  font-size: 14px;
  letter-spacing: -0.5px;
`;

const CardElement = () => {
  return (
    <Card>
      <ImageView>
        <Image
          src={
            "https://i.pinimg.com/736x/73/e6/37/73e6372d655033e44cbf9fb99cbe8216.jpg"
          }
        />
      </ImageView>
      <ContentView>
        <Title>Donation</Title>
        <br />
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
      <CardElement />
      <CardElement />
      <CardElement />
    </OuterView>
  );
}
