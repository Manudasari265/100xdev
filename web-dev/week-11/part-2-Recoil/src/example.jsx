export const PostFeed = () => {
  return (
    <div className="main">
      <ul className="li"></ul>
      <ul className="li"></ul>
      <ul className="li"></ul>
    </div>
  );
};

const App = () => {
  return (
    <div>
      {[
        <Todo key={1} title={"Go to gym"} done={false} />,
        <Todo key={2} title={"Eat food"} done={false} />,
      ]}
    </div>
  );
};

function Todo({ title, done }) {
  return (
    <div>
      {title} - {done ? "Done!" : "Not completed!"}
    </div>
  );
}

export default App;
