'use client';

import { useState } from 'react';

export default function useToggle() {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => setIsToggled(!isToggled);

  return [isToggled, toggle] as const;
}