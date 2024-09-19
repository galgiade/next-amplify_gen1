"use client"

import { UserDataType } from "@/api/apiType";
import { useState } from "react";
import UpdateUserProfileViewDesign from "../../elements/UpdateUserProfileViewDesign"; // 正しいパスに修正してください
import { EditAccountFormProps } from "../SettingType";
import UpdateSubmit from "@/app/componets/elements/UpdateSubmit";

interface EditAccountProps {
    userData:UserDataType
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>
}

const EditAccount = ({
    userData,
    setEditMode
  }:EditAccountProps
  ) => {
    const [editAccountForm, setEditAccountForm] = useState<EditAccountFormProps>({
        ...userData.userInfo,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditAccountForm(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="p-4">
                <UpdateUserProfileViewDesign
                    label="ユーザー名"
                    name="userName"
                    value={editAccountForm.userName}
                    onChange={handleInputChange}
                />
                <UpdateUserProfileViewDesign
                    label="請求名"
                    name="billingName"
                    value={editAccountForm.billingName}
                    onChange={handleInputChange}
                />
                <UpdateSubmit label = "保存する" formProps = {editAccountForm}/>
                {/* <SubmitUpdateReservation contactForm = {editAccountForm} /> */}
                <button onClick={()=>setEditMode(false)}>
                    キャンセル
                </button>
        </div>
    );
};

export default EditAccount;