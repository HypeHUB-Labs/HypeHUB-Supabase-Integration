```ts
import { supabase } from '../lib/supabase';

export default async function handler(req, res) {
  const { userId, platform, action, targetUrl, rewardPoints } = req.body;

  const { data, error } = await supabase.from('tasks').insert([
    { owner_id: userId, platform, action, target_url: targetUrl, reward_points: rewardPoints }
  ]);

  if (error) return res.status(400).json({ error });
  res.status(200).json({ task: data[0] });
}
```

---
