"use client"
import { useState } from "react";
import FunctionSelecter from "./Service/FunctionSelecter";
import FileUpload from "./Service/FileUpload";
import { ServiceSubmit } from "./Service/ServiceSubmit";
import type { ServiceProps, SelectedFormStateProps } from "./serviceType";
import SelectedFilesList from "./Service/SelectedFilesList";

export default function Service({
  functions
}: 
ServiceProps
){
  const [selectedForm, setSelectedForm] = useState<SelectedFormStateProps>({
    selectedFunctionName: "",
    selectedLambdaName: "",
    selectedFiles: []
  });
return (
  <div className="p-4 md:p-8 ">
     <div className=" space-x-12 flex justify-center items-center">
        <FunctionSelecter
          functions={functions}
          setSelectedForm={setSelectedForm}
        />
        <FileUpload selectedForm={selectedForm} setSelectedForm={setSelectedForm} />
        <SelectedFilesList selectedForm={selectedForm} setSelectedForm={setSelectedForm} />
     </div>
     <ServiceSubmit selectedForm={selectedForm} />
  </div>
)
}
