/* 📁 Document Property */
// React Practice Mar 2020
// NomadCoder Youtube 강의 (니꼴라스 Tr) 

/* 🗂 Imported Libraries */
import React from 'react';
import PropTypes from "prop-types";

/* 🗄 Data  */
const disneyILike = [
  {
    id: 1,
    name: "라따뚜이",
    image: "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile25.uf.tistory.com%2Fimage%2F15213F484D1F69D70A79ED",
    rating: 5
  }
]

/* 🏃‍♂️ Run!  */
// Run with function components
function Disney({ name, picture, rating }) {
return <div>
  <h2>I like {name}</h2>
  <h4>{rating} / 5</h4>
  <img src={picture} alt={name}/>
</div>
}

/*  🙆‍♀️ Proper Type Check 🙆‍♀️ */
// Check info ➡️ https://reactjs.org/docs/typechecking-with-proptypes.html
Disney.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      {disneyILike.map(character => (
        <Disney key={character.id} name={character.name} picture={character.image} rating={character.rating} />
      ))}
    </div>
  );
}

export default App;
