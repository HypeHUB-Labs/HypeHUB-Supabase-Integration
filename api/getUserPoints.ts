```ts
import { supabase } from '../lib/supabase';

export default async function handler(req, res) {
  const { userId } = req.query;
  const { data, error } = await supabase
    .from('points_ledger')
    .select('*')
    .eq('user_id', userId);

  const balance = data?.reduce((acc, entry) => acc + (entry.type === 'earn' ? entry.amount : -entry.amount), 0);

  if (error) return res.status(400).json({ error });
  res.status(200).json({ balance });
}
