import React from 'react';
import { useTranslation } from 'react-i18next';
import { Locale } from '../../../../app/localization/settings';
export const LangSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language as Locale) === Locale.ru ? Locale.en : Locale.ru;
  return (
    <button type="button" onClick={() => i18n.changeLanguage(lang)}>
      {lang}
    </button>
  );
};
