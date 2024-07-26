export async function getMessages(locale: string) {
  const messageModule = await import(`@/i18n/messages/${locale}.json`);
  return messageModule.default;
}
