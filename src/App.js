import './app.css';
import Main from './Main';
import Item from './Item';
import {useState, useEffect} from 'react'
import { db } from './Firebase';

function App() {
  const [datas, setDatas] = useState([])

  useEffect(() => {
    db.collection('items').onSnapshot(snapshot => {
      setDatas(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data()
        }
      )))
    })
  }, [])
  return (
    <div className="app">
          <Main />
          <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {datas.map(data => (
          <Item desc={data.data.desc} key={data.id} trailerUrl={data.data.trailerUrl} username={data.data.username} title={data.data.title} genre={data.data.genre} />
        ))}
      </div>
    </div>
  );
}

export default App;
