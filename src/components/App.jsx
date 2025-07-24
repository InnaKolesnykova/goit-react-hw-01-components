import user from "../components/source/data.json";
import data from "../components/source/friends.json";
import friends from '../components/source/transactions.json';
import transactions from '../components/source/user.json';

import { TransactionHistory } from './transaction/Transaction';
import { FriendList } from './friendList/FriendsList';
import { Statistics } from './statistics/Statisctics';
import { Profile }from './profile/Profile'; 

import React from 'react';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'baseline',
        fontSize: 40,
        color: '#010101',
        maxWidth: '1500px',
        flexWrap: 'wrap',
        marginBottom: '40px',
        marginTop: '40px'
      }}
    >
      <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={data} />
      <TransactionHistory items={transactions} />
    </div>
  );
};