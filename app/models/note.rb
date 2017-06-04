class Note < ApplicationRecord
  validates :recipient_id, :post_id, presence: true

  belongs_to :post

  belongs_to :recipient,
    primary_key: :id,
    foreign_key: :recipient_id,
    class_name: "User"

end
