import Dirctory from './components/directory/dirctory.components';
const App=()=> {
  const derctories=[
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://assets.burberry.com/is/image/Burberryltd/587CBED2-693F-49C6-BF55-542BDD7B5BF0?$BBY_V2_ML_1x1$&wid=2500&hei=2500"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://assets.burberry.com/is/image/Burberryltd/587CBED2-693F-49C6-BF55-542BDD7B5BF0?$BBY_V2_ML_1x1$&wid=2500&hei=2500"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://assets.burberry.com/is/image/Burberryltd/587CBED2-693F-49C6-BF55-542BDD7B5BF0?$BBY_V2_ML_1x1$&wid=2500&hei=2500"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://assets.burberry.com/is/image/Burberryltd/587CBED2-693F-49C6-BF55-542BDD7B5BF0?$BBY_V2_ML_1x1$&wid=2500&hei=2500"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://assets.burberry.com/is/image/Burberryltd/587CBED2-693F-49C6-BF55-542BDD7B5BF0?$BBY_V2_ML_1x1$&wid=2500&hei=2500"
    }
  ]

  return (
    <div className="app">
     <Dirctory derctories={derctories} />
        
    </div>
  );
}

export default App;
