import { LoadingContentContextType } from "@/interfaces";
import LoadingContent from "@/components/LoadingContent";
import { FC, ReactNode, createContext, useState } from "react";

export const LoadingContentContext = createContext<LoadingContentContextType>({
  loadingContent: false,
  changeLoadingContent: () => null,
});

export const LoadingContentProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [loadingContent, setLoadingContent] = useState<boolean>(false);

  const changeLoadingContent = (newStatus: boolean): void => setLoadingContent(newStatus);

  return (
    <LoadingContentContext.Provider value={{
      loadingContent: loadingContent, changeLoadingContent: changeLoadingContent
    }}>
      {children}
      <LoadingContent open={loadingContent} />
    </LoadingContentContext.Provider>
  );
};