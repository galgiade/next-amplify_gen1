import React from 'react';

interface UserCheckboxListProps {
  formState: any;
  setFormState: React.Dispatch<React.SetStateAction<any>>;
  users: any[];
}

const UserCheckboxList: React.FC<UserCheckboxListProps> = ({ formState, setFormState, users }) => {
  const handleUserCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userId = event.target.value;
    if (event.target.checked) {
      setFormState(prevState => ({
        ...prevState,
        userList: [...prevState.userList, userId]
      }));
    } else {
      setFormState(prevState => ({
        ...prevState,
        userList: prevState.userList.filter(id => id !== userId)
      }));
    }
  };

  return (
    <div className="border border-gray-300 rounded p-4 h-64 overflow-y-auto">
      {users.map(user => (
        <div key={user.id} className="mb-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              value={user.cognitoIdentityID}
              checked={formState.userList.includes(user.cognitoIdentityID)}
              onChange={handleUserCheckbox}
              className="mr-2"
            />
            {user.userName}
          </label>
        </div>
      ))}
      
    </div>
  );
};

export default UserCheckboxList;