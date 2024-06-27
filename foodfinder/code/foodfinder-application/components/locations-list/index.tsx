/**
 * Renders all user documents as rows to the DOM.
 */

import LocationsListItem from "components/locations-list-item";
import styles from "./index.module.css";
import { LocationType } from "mongoose/locations/schema";

interface PropsInterface {
    locations: LocationType[];
}

const LocationsList = (props: PropsInterface): JSX.Element => {
    return (
        <ul className={styles.root}>
            {props.locations.map((location:LocationType) => {
                return (
                    <LocationsListItem
                        location={location}
                        key={String(location.location_id)}
                    />
                );
            })}
        </ul>
    );
};

export default LocationsList;
