"use client"

import { GroupDataStateProps, GroupFormStateProps } from "./GroupFormType";

const DeleteListContentsButton = ({ setGroupData }: GroupDataStateProps) => {
    return (
        <button onClick={() => setGroupData((prevGroupData:GroupFormStateProps) => ({
            ...prevGroupData,
            functions: [],
        }))}>
            全て取り消し
        </button>
    );
}

export default DeleteListContentsButton;
