import { Metadata } from 'next';
import LocationDetail from "components/location-details";
import dbConnect from "middleware/db-connect";
import { findLocationsById } from "mongoose/locations/services";
import { LocationType } from "mongoose/locations/schema";

// Fetch the location data based on the locationId
async function fetchLocation(locationId: string): Promise<LocationType | null> {
  await dbConnect();
  const locations = await findLocationsById([locationId]);
  return locations.length ? locations[0] : null;
}

// Server component fetching location data
const LocationPage = async ({ params }: { params: { locationId: string } }) => {
  const location = await fetchLocation(params.locationId);

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

// Dynamically generate metadata based on the location details
export async function generateMetadata({ params }: { params: { locationId: string } }): Promise<Metadata> {
  const location = await fetchLocation(params.locationId);
  return {
    title: `The Food Finder - Details for ${location?.name ?? 'Unknown Location'}`,
    description: `Details for ${location?.name ?? 'Unknown Location'}`,
  };
}
