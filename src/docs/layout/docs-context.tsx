import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface Section {
  id: string;
  label: string;
}

interface DocsContextType {
  sections: Section[];
  setSections: (s: Section[]) => void;
}

const DocsContext = createContext<DocsContextType>({ sections: [], setSections: () => {} });

export const useDocsContext = () => useContext(DocsContext);

export function DocsProvider({ children }: { children: ReactNode }) {
  const [sections, setSections] = useState<Section[]>([]);
  return (
    <DocsContext.Provider value={{ sections, setSections }}>
      {children}
    </DocsContext.Provider>
  );
}
