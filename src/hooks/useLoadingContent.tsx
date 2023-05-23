import { useContext } from "react";
import { LoadingContentContextType } from "@/interfaces";
import { LoadingContentContext } from "@/contexts/LoadingContentContext";

const useLoadingContent: () => LoadingContentContextType = () => useContext(LoadingContentContext);

export default useLoadingContent;