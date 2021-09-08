import React from "react";
import styled from "styled-components";
import { ProfileImage } from "./ProfileImage";
const UserGridStyled = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 50px;
  gap: 15px;
  grid-template-areas:
    "photo name"
    "photo label"
    "photo description";

  @media (max-width: 990px) {
    grid-template-areas:
      "photo name"
      "label ."
      "description .";
  }
`;

export const MiniUserGrid = styled.div`
  display: grid;
  justify-content: left;
  grid-template-columns: auto auto;
  gap: 10px;
`;

const Photo = styled.div`
  grid-area: photo;
`;

const Name = styled.div`
  grid-area: name;
  font-size: 35px;
  align-self: center;
`;

const Label = styled.div`
  grid-area: label;

  @media (max-width: 990px) {
    padding-left: 25px;
  }
`;

const Description = styled.div`
  grid-area: description;
  max-width: 400px;

  @media (max-width: 990px) {
    padding-left: 25px;
    grid-column: 1/3;
  }
`;

const UserGrid = () => {
  return (
    <UserGridStyled>
      <Photo>
        <ProfileImage />
      </Photo>
      <Name>Name</Name>
      <Label>
        <strong>400</strong> Followers
      </Label>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
        elementum magna, et rhoncus quam. Pellentesque auctor euismod nulla
        vitae volutpat. Vivamus at feugiat diam, a lobortis libero. Vivamus
        tempor porta convallis. Quisque eu tortor vitae tortor feugiat lobortis
        vel et ante. In ultrices, libero id ullamcorper consectetur, dui ante
        hendrerit augue, a vulputate ipsum risus nec eros. Pellentesque viverra
        convallis ipsum. Pellentesque congue maximus felis, non finibus purus
        gravida sed. Nulla vulputate condimentum eros et euismod. Sed eu justo
        eget arcu imperdiet mollis vitae ac ex. Integer tincidunt ipsum et
        tincidunt ullamcorper. Mauris vehicula, tortor at semper cursus, nisl
        lectus vestibulum tellus, eget iaculis dui odio hendrerit sapien.
      </Description>
    </UserGridStyled>
  );
};

export default UserGrid;
