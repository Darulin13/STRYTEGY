import React from "react";
import * as S from "./styles";

import { graphql, useStaticQuery } from "gatsby";

export function Footer() {
  const data = useStaticQuery(graphql`
    query {
      sitedata {
        footers {
          aboutus
          blog
          cnpj
          facebook
          faq
          help
          instagram
          linkedin
          paragraph1
          paragraph2
          privacy
          social
          stage
          startnow
          sti
          support
          term
          title
          s {
            url
          }
        }
      }
    }
  `);

  const {
    aboutus,
    blog,
    cnpj,
    facebook,
    faq,
    help,
    instagram,
    linkedin,
    paragraph1,
    paragraph2,
    privacy,
    social,
    stage,
    startnow,
    sti,
    support,
    term,
    title,
    s
  } = data.sitedata.footers[0];
  console.log("Footer", data);

  return (
    <S.Container>
      <S.Sec>
        <div>
          <h1>{title}</h1>
          <p>{paragraph1}</p>
          <button>{startnow}</button>
        </div>
      </S.Sec>
      <S.Sec2>
        <div>
          <article>
            <h2>{social}</h2>
            <nav>
              <p>{instagram}</p>
              <p>{facebook}</p>
              <p>{linkedin}</p>
              <p>{blog}</p>
            </nav>
          </article>
          <article>
            <h2>{help}</h2>
            <nav>
              <p>{faq}</p>
              <p>{term}</p>

              <p>{privacy}</p>
              <p>{support}</p>
            </nav>
          </article>
        </div>
        <div>
          <article class="box">
            <h2>{aboutus}</h2>
            <p class="paragraph">{paragraph2}</p>

            <p>{sti}</p>
            <p>{cnpj}</p>
          </article>
        </div>
      </S.Sec2>
    </S.Container>
  );
}
