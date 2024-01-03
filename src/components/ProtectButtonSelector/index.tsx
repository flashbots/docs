/**
 * Copyright (c) Flashbots Ltd. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect, useState } from 'react';

export default function ProtectButtonSelector() {

  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const htmlElement = document.documentElement;
    const handleThemeChange = () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      setTheme(currentTheme || 'light');
    };
    handleThemeChange();
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(htmlElement, { attributes: true, attributeFilter: ['data-theme'] });
  }, [])

  return <iframe
    title='Protect Button'
    id="protect-button"
    // replace with correct host
    src={`https://flashbots-protect-72l.vercel.app/button?theme=${theme}`}
    height="88" width="336"
    className="flex dark:dark border-none rounded-lg hover:outline"
    sandbox="allow-top-navigation-by-user-activation"
  />
}
