import React from "react";
import { useHistory, useParams } from "react-router-dom";
import POSTS from "../Posts/index";
import { Image } from "../App";
import styled, { createGlobalStyle } from "styled-components";
import { PostGrid, InfoGrid } from "./PostGrid";
import { ProfileImage } from "../Profile/ProfileImage";
import { MiniUserGrid } from "../Profile/UserGrid";
const OverFlowHidden = createGlobalStyle`
    body {
        overflow: hidden;
    }
`;

const BackgroundStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 5000px;
  background: rgba(0, 0, 0, 0.8);
`;

const ModalStyled = styled.div`
  position: absolute;
  background: #fff;
  top: ${({ top }) => top}px;
  left: 25%;
  right: 25%;
  width: 600px;
  border: 2px solid #444;

  @media (max-width: 990px) {
    left: 0;
    right: 0;
    top: ${({ top }) => top}px;
    width: auto;
  }
`;

const Modal = () => {
  let history = useHistory();
  let { id } = useParams();
  let image = POSTS[parseInt(id, 10) - 1];
  console.log(parseInt(id, 10));
  if (!image) return null;

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <BackgroundStyled onClick={back}>
      <ModalStyled top={window.scrollY + window.innerHeight / 2 - 250}>
        <OverFlowHidden />
        <PostGrid>
          <Image inModal index={image.id} />
          <InfoGrid>
            <MiniUserGrid>
              <ProfileImage mini />
              <h2>Grid Gallery</h2>
            </MiniUserGrid>
            <div>
              <h1>{image.title}</h1>
            </div>
            <div> 45 Likes</div>
          </InfoGrid>
        </PostGrid>
      </ModalStyled>
    </BackgroundStyled>
  );
};

export default Modal;
