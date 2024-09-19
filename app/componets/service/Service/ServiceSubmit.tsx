"use client"

import UploadS3 from "@/api/UploadS3"
import type { ServiceSubmitProps } from "../serviceType"


export const ServiceSubmit  = ({selectedForm}:ServiceSubmitProps) => {
    async function submitHandler(){
      const lambdaName = selectedForm.selectedLambdaName
      const files = selectedForm.selectedFiles[0]
      const filename = files.name
      const filepath = `${lambdaName}/${filename}`
      console.log(`${lambdaName}/${files.name}`)
        try{
          await UploadS3(filepath,files)
          console.log("success")
        }catch(e){
            console.log(e)
        }
    }
    const isDisabled = selectedForm.selectedLambdaName === "" || selectedForm.selectedFiles[0] === undefined;
    return (
      <div className="flex flex-col items-center justify-center">
        <button 
          onClick={submitHandler} 
          disabled={isDisabled}
          className={`text-white w-96 font-bold py-3 px-6 rounded-lg text-lg ${isDisabled ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-700'}`}
        >
          送信
        </button>
        <div className="mt-2 text-sm text-gray-600">
          {selectedForm.selectedLambdaName}
        </div>
      </div>
    )
}
