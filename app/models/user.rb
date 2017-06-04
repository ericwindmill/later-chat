class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true}
  validates :username, :session_token, uniqueness: true

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
