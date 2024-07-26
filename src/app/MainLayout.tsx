'use client';
import { LocalizationProvider } from '@/contexts/LocalizationContextProvider';
import useUpdateHtmlLang from '@/hooks/useUpdateHtmlLang';
import { localeAtom } from '@/state/atom-states';
import { getMessages } from '@/utils/getMessages';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const currentLocale = useRecoilValue(localeAtom);
  const [messages, setMessages] = useState<any>(null);

  useUpdateHtmlLang();

  useEffect(() => {
    async function fetchMessages() {
      const msgs = await getMessages(currentLocale);
      setMessages(msgs);
    }
    fetchMessages();
  }, [currentLocale]);

  if (!messages) {
    return null; // or a loading spinner
  }

  return (
    <LocalizationProvider messages={messages} locale={currentLocale}>
        {children}
    </LocalizationProvider>
  );
}
