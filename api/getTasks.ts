```ts
import { supabase } from '../lib/supabase';

export default async function handler(req, res) {
  const { data, error } = await supabase.from('tasks').select('*').order('created_at', { ascending: false });
  if (error) return res.status(400).json({ error });
  res.status(200).json({ tasks: data });
}
