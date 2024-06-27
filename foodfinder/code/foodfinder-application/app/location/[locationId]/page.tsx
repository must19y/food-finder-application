// app/location/[locationId]/page.tsx
import { Metadata } from 'next';
import LocationDetail from "components/location-details";
import dbConnect from "middleware/db-connect";
import { findLocationsById } from "mongoose/locations/services";
import { LocationType } from "mongoose/locations/schema";


export const metadata: Metadata = {
    title: 'Location Details',
    description: 'Details for the selected location',
  };


const LocationPage = ({ location }:  { location: LocationType | null }) => {
  if (!location) {
    return <div>Location not found</div>;
  }

  const title = `The Food Finder - Details for ${location.name}`;

  return (
    <div>
      <head>
        <title>{title}</title>
        <meta
          name="description"
          content={`The Food Finder. Details for ${location.name}`}
        />
      </head>
      <h1>{String(location.name)}</h1>
      <LocationDetail location={location} />
    </div>
  );
};

export default LocationPage;

export async function generateMetadata({ params }: { params: { locationId: string } }): Promise<Metadata> {
  const location = await fetchLocation(params.locationId);
  return {
    title: `The Food Finder - Details for ${location?.name ?? 'Unknown Location'}`,
    description: `Details for ${location?.name ?? 'Unknown Location'}`,
  };
}

export async function getServerSideProps({ params }: { params: { locationId: string } }) {
  const location = await fetchLocation(params.locationId);
  return {
    props: { location },
  };
}

async function fetchLocation(locationId: string): Promise<LocationType | null> {
  await dbConnect();
  const locations = await findLocationsById([locationId]);
  return locations.length ? locations[0] : null;
}
