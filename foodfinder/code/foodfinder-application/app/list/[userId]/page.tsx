import dbConnect from "middleware/db-connect";
import { onUserWishlist } from "mongoose/locations/services";
import ClientWishlistPage from './ClientWishlistPage';
import { LocationType } from "mongoose/locations/schema";

const WishlistPage = async ({ params }: { params: { userId: string } }) => {
  await dbConnect();
  const locations = await onUserWishlist(params.userId);

  return <ClientWishlistPage locations={locations} userId={params.userId} />;
};

export default WishlistPage;
