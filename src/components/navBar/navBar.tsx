import React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { ThemeContext } from '@/utils';

export const Navbar = () => {
  const { theme, setTheme }: any = React.useContext(ThemeContext);
  return (
    <div className="fixed shadow-md z-50 w-full bg-white dark:bg-gray-900">
      <header className="lg:px-16 px-9 flex flex-wrap items-center lg:py-0 my-3">
        <div className="flex-1 flex justify-between items-center">
          <svg width="32" height="36" viewBox="0 0 32 36" xmlns="http://www.w3.org/2000/svg"><path d="M15.922 35.798c-.946 0-1.852-.228-2.549-.638l-10.825-6.379c-1.428-.843-2.549-2.82-2.549-4.501v-12.762c0-1.681 1.12-3.663 2.549-4.501l10.825-6.379c.696-.41 1.602-.638 2.549-.638.946 0 1.852.228 2.549.638l10.825 6.379c1.428.843 2.549 2.82 2.549 4.501v12.762c0 1.681-1.12 3.663-2.549 4.501l-10.825 6.379c-.696.41-1.602.638-2.549.638zm0-33.474c-.545 0-1.058.118-1.406.323l-10.825 6.383c-.737.433-1.406 1.617-1.406 2.488v12.762c0 .866.67 2.05 1.406 2.488l10.825 6.379c.348.205.862.323 1.406.323.545 0 1.058-.118 1.406-.323l10.825-6.383c.737-.433 1.406-1.617 1.406-2.488v-12.757c0-.866-.67-2.05-1.406-2.488l-10.825-6.379c-.348-.21-.862-.328-1.406-.328zM26.024 13.104l-7.205 13.258-3.053-5.777-3.071 5.777-7.187-13.258h4.343l2.803 5.189 3.107-5.832 3.089 5.832 2.821-5.189h4.352z"></path></svg>
        </div>
        <nav>
          <div className="transition duration-500 ease-in-out rounded-full p-2">
            {theme === 'dark' ? (
              <HiSun
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
              />
            ) : (
                <HiMoon
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
                />
              )}
          </div>
        </nav>
      </header>
    </div>
  );
}