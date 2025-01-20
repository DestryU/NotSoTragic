-- Enable the UUID extension
create extension if not exists "uuid-ossp";

-- Table to store character data
create table characters (
  id uuid primary key default uuid_generate_v4(),
  char_name text not null,
  char_race text not null,
  char_class text not null,
  personality text check (length(personality) <= 100), -- 100 character limit for personality
  backstory text check (length(backstory) <= 2500) not null, -- 2500 character limit for backstory
  created_at timestamp with time zone default current_timestamp
);

-- Table to store upvotes
create table upvotes (
  id uuid primary key default uuid_generate_v4(),
  character_id uuid references characters(id) on delete cascade,
  user_id text,  -- This can be anonymous or linked to users if needed
  created_at timestamp with time zone default current_timestamp
);

-- Bard's Honor table (for high-rated characters)
create table bardic_honor (
  character_id uuid references characters(id) on delete cascade,
  upvote_count integer default 0,
  added_at timestamp with time zone default current_timestamp
);