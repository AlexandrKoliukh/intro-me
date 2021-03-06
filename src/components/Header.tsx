import { ThemeSwitcher } from '@components/ThemeSwitcher/ThemeSwitcher';
import React, { FC } from 'react';
import { IProfile } from '../types/profile';

interface IProps {
  profile: IProfile;
}

export const Header: FC<IProps> = ({ profile = {} }) => {
  return (
    <header className="flex justify-between p-4 lg:px-8">
      <span className="inline-flex w-14 h-14 lg:mt-4 font-header font-bold text-xl justify-center items-center text-center text-front border-2 border-solid border-front rounded-full">
        {profile.initials}
      </span>
      <div>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
