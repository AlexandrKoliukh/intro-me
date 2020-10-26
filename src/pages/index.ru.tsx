import React from 'react';
import { useTranslation } from 'react-i18next';
import AppLayout from '../components/AppLayout';
import '../i18n';

export default function Home() {
  const { t } = useTranslation();

  return (
    <AppLayout>
      <div className="">{t('hello')}</div>
    </AppLayout>
  );
}
