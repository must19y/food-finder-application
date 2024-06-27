import Head from 'next/head';
import LocationsList from 'components/locations-list';
import dbConnect from 'middleware/db-connect';
import { findAllLocations } from 'mongoose/locations/services';
import { LocationType } from 'mongoose/locations/schema';

const fetchLocations = async (): Promise<LocationType[]> => {
  await dbConnect();
  const locations: LocationType[] = await findAllLocations();
  return locations;
};

const Home = async () => {
  const locations: LocationType[] = await fetchLocations();

  return (
    <div>
      <Head>
        <title>The Food Finder - Home</title>
        <meta name="description" content="The Food Finder - Home" />
      </Head>
      <h1>Welcome to the Food Finder!</h1>
      <LocationsList locations={locations} />
    </div>
  );
};

export default Home;
