import { LocationType } from "mongoose/locations/schema";
import styles from "./index.module.css";
interface PropsInterface {
location: LocationType;
}
const LocationDetail = (props: PropsInterface): JSX.Element => {
  let location = props.location;
  return (
    <div>
     {location && (
     <ul className={styles.root}>
     <li>
     <b>Address: </b>
     {String(location.address)}
     </li>
     <li>
     <b>Zipcode: </b>
     {String(location.zipcode)}
     </li>
     <li>
     <b>Borough: </b>
     {String(location.borough)}
     </li>
     <li>
     <b>Cuisine: </b>
     {String(location.cuisine)}
     </li>
     <li>
     <b>Grade: </b>
     {String(location.grade)}
     </li>
     </ul>
    )}
    </div>
    );
};
export default LocationDetail;