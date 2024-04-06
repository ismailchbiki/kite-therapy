import { Filters, SportList, Sort } from "./components";
import "./SportsPage.scss";

const SportsPage = () => {
  return (
    <main className="section">
      <div className="section-center sports">
        <Filters className="sports" />
        <div>
          <Sort />
          <SportList />
        </div>
      </div>
    </main>
  );
};

export default SportsPage;
