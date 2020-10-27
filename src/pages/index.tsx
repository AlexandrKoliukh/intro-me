import React from 'react';
import { App } from '../components/App';
import { useStaticQuery, graphql } from 'gatsby';
import { AppLayout } from '../layouts/AppLayout';

export default function Home(props) {
  const data = useStaticQuery(graphql`
    query ProfileQuery {
      profile: profileYaml {
        name
      }
    }
  `);
  return (
    <AppLayout>
      <App />
    </AppLayout>
  );
}
