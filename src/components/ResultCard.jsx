import "./ResultCard.css";

function ResultCard() {
  return (
    <div className="result">
      <h1>HappyBeersDay</h1>
      <div className="result-card">
        <div className="beer-result">
          <img src="./src/assets/img/logo_hbd.png" alt="logo" />
          <h1>Beer name</h1>
        </div>
        <div className="description">
          <h1>Beer description</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            expedita molestiae corporis rem. Dolorem dolore laborum, ea et omnis
            officia. Id, eos sapiente! Neque nisi beatae, nihil quam eum a? Non
            dignissimos perferendis provident officiis architecto totam qui
            incidunt, nesciunt laudantium velit recusandae ipsa rem delectus
            illo, commodi rerum debitis asperiores impedit consequuntur ab
            doloremque mollitia quam saepe earum. Nisi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
