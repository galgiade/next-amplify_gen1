
import authAndUserData from '@/utils/authAndUserData';
import GroupForm from './GroupForm';

const functionList = ["function1", "function2"];
const lamdaNames = ["lamda1", "lamda2"];

export default async function Test10() {
  const userDataDemmy = { 
    "cognitoIdentityID": "87e58239-27da-4c40-90b5-2f6e0a4d7549",
     "functions": [
        {
             "id": "018db5bd-4b43-7000-94e9-00f7f3ba29e8", "lambdaName": "lambda1", "functionName": "function1", "groupName": "", "groupId": "", "groupPassword": "", "groupOwner": ""
        }, {
             "id": "018dbb35-bdf8-7000-b6c0-25d2c8feba2d", "lambdaName": "lamda2", "functionName": "function2", "groupName": "", "groupId": "", "groupPassword": "", "groupOwner": ""
            }
        ], 
        "reservation": null, 
        "userInfo": {
             "id": "018d9c43-cab1-7000-b09e-ee82f14eff8d", "userName": "galgiade", "calculatedDataValue": 0, "userActive": true, "billingID": "018d9c43-cab1-7001-aa81-76d4c0ef153f", "billingName": "株式会社コネクトテック", "billingActive": true, "billingOwner": "87e58239-27da-4c40-90b5-2f6e0a4d7549", "billingPassword": "981817721a" 
            }
         }
  return (
    <div>{JSON.stringify(userDataDemmy)}</div>
  );
}
