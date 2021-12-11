import React from "react";
import * as S from "./styles";

import { graphql, useStaticQuery } from "gatsby";

export function Header() {
  const data = useStaticQuery(graphql`
    query {
      sitedata {
        headers {
          blog
          en
          enter
          faq
          logo {
            url
          }
        }
      }
    }
  `);
  const { blog, en, enter, faq, logo } = data.sitedata.headers[0];
  console.log("Header", data);
  return (
    <S.Container>
      <div>
        <img src={logo.url} alt="Logo" />
      </div>
      <nav>
        <p>{blog}</p>
        <p>{faq}</p>
        <button>{enter}</button>
        <picture>{en}</picture>
      </nav>
    </S.Container>
  );
}
