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
      <div>{}</div>
    </S.Container>
  );
}
