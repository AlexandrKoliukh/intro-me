import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { PageLayout } from '../layouts/PageLayout';

export default function Index(props) {
  const data = useStaticQuery(graphql`
    query ProfileQuery {
      profile: profileYaml {
        name
      }
    }
  `);

  console.log(data);
  return <PageLayout>Adsadas</PageLayout>;
}
