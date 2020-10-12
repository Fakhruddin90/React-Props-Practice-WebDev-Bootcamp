import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="heading name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Beyonce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        tel="+123 456 789"
        email="b@beyonce.com"
      />
      <Card
        name="Nana"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlbEu5mh5aUNsCPOvLJKUF7SChe-i6QNxNPA&usqp=CAU"
        tel="+123 456 789"
        email="n@nana.com"
      />
      <Card
        name="Caramel"
        img="https://www.wonderslist.com/wp-content/uploads/2015/10/Countries-With-The-Most-Beautiful-Women.jpg"
        tel="+123 456 789"
        email="c@caramel.com"
      />
    </div>
  );
}

export default App;
