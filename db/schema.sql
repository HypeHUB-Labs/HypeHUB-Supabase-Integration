sql
create table if not exists users (
  id uuid primary key default uuid_generate_v4(),
  email text unique,
  wallet_address text unique,
  created_at timestamp default now()
);

create table if not exists tasks (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid references users(id),
  platform text,
  action text,
  target_url text,
  reward_points int,
  created_at timestamp default now()
);

create table if not exists task_claims (
  id uuid primary key default uuid_generate_v4(),
  task_id uuid references tasks(id),
  user_id uuid references users(id),
  claimed_at timestamp default now(),
  unique (task_id, user_id)
);

create table if not exists points_ledger (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id),
  amount int,
  type text check (type in ('earn', 'spend')),
  source text,
  created_at timestamp default now()
);

create table if not exists notifications (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id),
  message text,
  read boolean default false,
  created_at timestamp default now()
);
