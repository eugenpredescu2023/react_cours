import { Cars } from "./DataBase";
import User from "./User";

export const Home = () => {
    
    return (
      <div className="App">
        {Cars.map((car, i) => {
          return <User name={car.name} km={car.km} key={car.key} />;
        })}
      </div>
    );
   
}

