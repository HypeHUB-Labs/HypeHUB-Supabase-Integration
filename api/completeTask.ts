```ts
import { supabase } from '../lib/supabase';

export default async function handler(req, res) {
  const { userId, taskId } = req.body;

  // Prevent double claiming
  const { data: existing } = await supabase
    .from('task_claims')
    .select('*')
    .eq('user_id', userId)
    .eq('task_id', taskId);

  if (existing.length > 0) {
    return res.status(400).json({ error: 'Already claimed' });
  }

  // Record claim
  await supabase.from('task_claims').insert([{ user_id: userId, task_id: taskId }]);
  // Award points
  const { data: task } = await supabase.from('tasks').select('reward_points').eq('id', taskId).single();
  await supabase.from('points_ledger').insert([{ user_id: userId, amount: task.reward_points, type: 'earn', source: taskId }]);

  res.status(200).json({ success: true });
}
