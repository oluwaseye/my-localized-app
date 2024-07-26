"use client";
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLocalization } from '@/contexts/LocalizationContextProvider';

const HomePage = () => {
  const { messages } = useLocalization();

  if (!messages) {
    return <div className="flex items-center justify-center h-screen text-xl text-gray-700">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="absolute top-4 right-4">
          <LanguageSwitcher />
        </div>
      <div className="bg-white shadow-lg rounded-lg px-6 py-10 max-w-2xl w-full">
         <h1 className="text-4xl font-bold text-center text-gray-800 mt-8">
          {messages.home.title}
        </h1>
        <p className="text-lg text-center text-gray-600 mt-4">
          {messages.home.description}
        </p>
      </div>
    </div>
  );
};

export default HomePage;
