namespace HfilesMedicalDashboard_Api.Models
{
    public class UserModel
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string? Phone { get; set; }
        public string? Gender { get; set; }

        public string? ProfileImageUrl { get; set; }
        public string? PasswordHash { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
