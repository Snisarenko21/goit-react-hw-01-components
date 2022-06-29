import user from '../data/user.json';
import Container from './Container/Container';
import Profile from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';
import { FriendList } from './FrielndList/FriendList';
import friends from '../data/friends.json';
// import transactions from '../data/transactions.json';
// import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

// export const App = () => {
//   return (
//     <divs
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </divs>
//   );
// };
export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
