/* app/api/games/route.js
import dbConnect from '@/utils/dbConnect';
import Game from '@/models/Game';

export async function GET(req) {
  await dbConnect();
  const games = await Game.find({});
  return new Response(JSON.stringify(games), { status: 200 });
}
*/