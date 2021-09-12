import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { UserType } from './types/UserType';

const App: React.FC<{}> = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [name, setName] = useState<string>('');
  const [newName, setNewName] = useState<string>('');
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    try {
      const res = await axios.get('/users');
      setUsers(res.data);
    } catch (error) {
      console.log('🚀 ~ file: App.tsx ~ line 14 ~ getUserData ~ error', error);
    }
  };
  const addUser = async () => {
    try {
      const res = await axios.post('/users/add', { name });
      setUsers(res.data);
    } catch (error) {
      console.log('🚀 ~ file: App.tsx ~ line 27 ~ addUser ~ error', error);
    }
  };
  return (
    <div className="App">
      <h1>Client</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={addUser}>add user</button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>delete</th>
            <th>modify</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: UserType, index) => {
            const deleteUser = async () => {
              try {
                const res = await axios.post('/users/delete', { id: user.id });
                console.log(
                  '🚀 ~ file: App.tsx ~ line 26 ~ addUser ~ res',
                  res
                );
                setUsers(res.data);
              } catch (error) {
                console.log(
                  '🚀 ~ file: App.tsx ~ line 27 ~ addUser ~ error',
                  error
                );
              }
            };
            const modefyUser = async () => {
              try {
                const res = await axios.post('/users/modefy', {
                  id: user.id,
                  newName,
                });
                console.log(
                  '🚀 ~ file: App.tsx ~ line 26 ~ addUser ~ res',
                  res
                );
                setUsers(res.data);
              } catch (error) {
                console.log(
                  '🚀 ~ file: App.tsx ~ line 64 ~ modefyUser ~ error',
                  error
                );
              }
            };
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>
                  <button onClick={deleteUser}>delete</button>
                </td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => setNewName(e.target.value)}
                  />
                  <button onClick={modefyUser}>modefy</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
