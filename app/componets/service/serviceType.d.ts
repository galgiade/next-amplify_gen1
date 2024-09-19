import { FunctionType } from "@/api/apiType";

export interface FunctionSelecterProps {
    functions:FunctionType[]
    setSelectedForm:React.Dispatch<React.SetStateAction<SelectedFormStateProps>>
  }

  export interface ServiceProps {
    functions: FunctionType[];
  }
  
  export interface SelectedFormProps {
    selectedForm:SelectedFormStateProps
    setSelectedForm:React.Dispatch<React.SetStateAction<SelectedFormStateProps>>
  }
  
  export interface SelectedFormStateProps {
    selectedFunctionName: string;
    selectedLambdaName: string;
    selectedFiles: File[];
  }

  export interface ServiceSubmitProps {
    selectedForm:SelectedFormStateProps
  }

  