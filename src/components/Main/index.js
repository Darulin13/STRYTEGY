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
          data
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
      <S.Sec3>
        <img src={gif.url} alt="Imagem" />
        <div>
          <h1>{title3}</h1>
          <p>{paragraph3}</p>
        </div>
      </S.Sec3>

      <S.Sec4>
        <img src={img2.url} alt="Imagem" />
        <div>
          <h1>{title4}</h1>
          <p>{paragraph4}</p>
        </div>
      </S.Sec4>
      <S.Sec5>
        <h1>{title6}</h1>
        <img src={img3.url} alt="Imagem" />
        <ul>
          <li>{topic1}</li>
          <li>{topic2}</li>
          <li>{topic3}</li>
        </ul>
      </S.Sec5>
      <S.Sec6>
        <section>
          <div>
            <article>
              <img src={img4.url} alt="Imagem" />
              <h1>{quadrotitle1}</h1>
            </article>
          </div>
          <div>
            <article>
              <img src={img5.url} alt="Imagem" />
              <h1>{quadrotitle2}</h1>
            </article>
          </div>
          <div>
            <article>
              <img src={img6.url} alt="Imagem" />
              <h1>{quadrotitle3}</h1>
            </article>
          </div>
        </section>
      </S.Sec6>
      <button>{seemore}</button>
    </S.Container>
  );
}
