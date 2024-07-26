import { localeAtom } from '@/state/atom-states';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

const useUpdateHtmlLang = () => {
  const currentLocale = useRecoilValue(localeAtom);

  useEffect(() => {
    document.documentElement.lang = currentLocale;
  }, [currentLocale]);
};

export default useUpdateHtmlLang;
