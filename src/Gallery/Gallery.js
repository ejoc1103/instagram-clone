import React from "react";
import { Link } from "react-router-dom";
import UserGrid from "../Profile/UserGrid";
import POSTS from "../Posts/index";
import styled, { css } from "styled-components";

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 305px);
  justify-content: center;
  gap: 20px;
  grid-auto-rows: 350px;
  ${({ cascade }) =>
    cascade &&
    css`
      grid-auto-rows: 200px;
      grid-gap: 5px;
    `}

  @media (max-width: 990px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: calc(33vw - 10px);
    gap: 5px;
  }
`;

const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  gap: px;
  margin-bottom: 20px;
`;

const TabLink = styled(Link)`
  text-decoration: none;
  color: #ccc;
  text-transform: uppercase;
  letter-spacing: 3px;
  ${({ selected }) => selected && "color: black"}
`;

const ImageLink = styled(Link)`
  background: no-repeat center/150% url(/img/${({ index }) => index}.jpeg);
  background-size: cover;
  :hover {
    opacity: 0.7;
  }
  ${({ cascade }) =>
    cascade &&
    css`
      background-size: cover;

      &:nth-of-type(2n) {
        grid-row-start: span 2;
      }
    `}
`;

function Gallery({ match, location }) {
  const cascade = location.search === `?type=cascade`;
  console.log(match, location);
  return (
    <div>
      <UserGrid />
      <LinkGrid>
        <TabLink selected={!cascade} to={`${match.url}`}>
          square
        </TabLink>
        <TabLink
          selected={cascade}
          to={{ pathname: `${match.url}`, search: "?type=cascade" }}
        >
          cascade
        </TabLink>
      </LinkGrid>
      <PhotoGrid cascade={cascade}>
        {POSTS.map(i => (
          <ImageLink
            cascade={cascade}
            index={i.id}
            key={i.id}
            to={{
              pathname: `/img/${i.id}`,
              // This is the trick! This link sets
              // the `background` in location state.
              state: { background: location },
            }}
          ></ImageLink>
        ))}
      </PhotoGrid>
    </div>
  );
}

export default Gallery;
