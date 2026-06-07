import { useEffect, useState } from 'react';
import { invoke, isTauri } from '@/lib/invoke';

export function useSystemFonts() {
  const [systemFonts, setSystemFonts] = useState<string[]>([]);

  useEffect(() => {
    if (!isTauri()) return;

    let cancelled = false;
    invoke<string[]>('list_system_fonts')
      .then((fonts) => {
        if (!cancelled) setSystemFonts(fonts);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  return systemFonts;
}
