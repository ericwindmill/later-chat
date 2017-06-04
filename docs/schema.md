# Schema Information

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## Post
column name | data type     | details
------------|---------------|-----------------------
id          | integer       | not null, primary key
body        | text          | not null
location    | string        | not null
image_url   | string        |
public      | boolean       | not null
author_id   | integer       | not null, foreign key (references users), indexed

## Notes
column name  | data type | details
------------ |-----------|-----------------------
id           | integer   | not null, primary key
post_id      | integer   | not null, foreign key (references posts), indexed
recipient_id | integer   | not null, foreign key (references users), indexed
read         | boolean   | not null

## Follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
leader_id   | integer   | not null, foreign key (references users), indexed

# Associations

## User
__has many__
posts
notes
followers
leaders

## Post
__belongs to__
author

__has many__
recipients (only for notes)

## Notes
__belongs to__
follower
leader
