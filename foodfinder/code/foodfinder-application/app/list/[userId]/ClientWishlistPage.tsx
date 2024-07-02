'use client';

import { useSession } from 'next-auth/react';
import LocationsList from 'components/locations-list';
import { LocationType } from "mongoose/locations/schema";

interface Props {
  locations: LocationType[];
  userId: string;
}

const ClientWishlistPage = ({ locations, userId }: Props) => {
  const { data: session } = useSession();
  const isCurrentUser = session?.user?.fdlst_private_userId === userId;
  const title = `The Food Finder - ${isCurrentUser ? 'Your' : 'A'} Personal Wish List`;

  return (
    <div>
      <head>
        <title>{title}</title>
        <meta name="description" content="The Food Finder - A personal wish list." />
      </head>
      <h1>{isCurrentUser ? 'Your' : 'A'} Wish List!</h1>
      {isCurrentUser && locations.length === 0 && (
        <>
          <h2>Your list is currently empty! :(</h2>
          <p>Start adding locations to your wish list!</p>
        </>
      )}
      <LocationsList locations={locations} />
    </div>
  );
};

export default ClientWishlistPage;
