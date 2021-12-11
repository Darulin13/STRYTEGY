import React from "react";
import * as S from "./styles";

import { graphql, useStaticQuery } from "gatsby";

export function Main() {
  const data = useStaticQuery(graphql`
    query {
      sitedata {
        mains {
          button1
          button2
          button3
          button4

          gif {
            url
          }
          img1 {
            url
          }
          img2 {
            url
          }
          img3 {
            url
          }
          img4 {
            url
          }
          img5 {
            url
          }
          img6 {
            url
          }
          paragraph1
          paragraph2
          paragraph3
          paragraph4
          paragraph5
          quadrotitle1
          quadrotitle2
          quadrotitle3
          s {
            url
          }
          seemore
          startnow
          strytegy
          title1
          title2
          title3
          title4
          title5
          title6
          topic1
          topic2
          topic3
        }
      }
    }
  `);

  const {
    button1,
    button2,
    button3,
    button4,

    gif,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    paragraph5,
    quadrotitle1,
    quadrotitle2,
    quadrotitle3,
    s,
    seemore,
    startnow,
    strytegy,
    title1,
    title2,
    title3,
    title4,
    title5,
    title6,
    topic1,
    topic2,
    topic3
  } = data.sitedata.mains[0];
  console.log("Main", data);

  return (
    <S.Container>
      <S.Sec1>
        <div>
          <h1>{title1}</h1>
          <p>{paragraph1}</p>
          <button>{startnow}</button>
        </div>
        <img src={img1.url} alt="Logo" />
      </S.Sec1>
      <S.Sec2>
        <h1>{title2}</h1>
        <p>{paragraph2}</p>
        <div>
          <button>{button1}</button>
          <button class="barra">{button2}</button>
          <button>{button3}</button>
          <button class="barra2">{button4}</button>
        </div>
      </S.Sec2>
    </S.Container>
  );
}
