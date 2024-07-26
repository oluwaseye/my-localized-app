import { atom } from 'recoil';

export const localeAtom = atom({
  key: 'localeAtom',
  default: 'en',
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      if (typeof window !== 'undefined' && window.localStorage) {
        const savedValue = localStorage.getItem('locale');
        if (savedValue != null) {
          setSelf(savedValue);
        }

        onSet(newValue => {
          localStorage.setItem('locale', newValue);
        });
      }
    },
  ],
});
