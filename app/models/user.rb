class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true}
  validates :username, :session_token, uniqueness: true

  has_many :posts,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "Post"

  has_many :follows,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: "Follow"

  has_many :followers,
    through: :follows,
    source: :follower

  has_many :leads,
    primary_key: :id,
    foreign_key: :leader_id,
    class_name: "Follow"

  has_many :leaders,
    through: :leads,
    source: :leader

  has_many :note_posts,
    primary_key: :id,
    foreign_key: :recipient_id,
    class_name: "Note"

  has_many :notes,
    through: :note_posts,
    source: :post

  after_initialize :ensure_session_token

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    return self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def correct_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = self.find_by_username(username)
    if user && user.correct_password?(password)
      user
    else
      nil
    end
  end


end
