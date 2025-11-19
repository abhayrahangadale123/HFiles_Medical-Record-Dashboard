using System.ComponentModel.DataAnnotations;

namespace HfilesMedicalDashboard_Api.Models
{
    public class SignupModel
    {
        public string FullName { get; set; }
        [RegularExpression(@"^[^\s@]+@[^\s@]+$",
    ErrorMessage = "Invalid email format.")]
        public string Email { get; set; }
        public string? Phone { get; set; }
        public string? Gender { get; set; }
        [Required]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z]).{8,}$",
    ErrorMessage = "Password must contain at least one uppercase letter, one lowercase letter, and be at least 8 characters long.")]
        public string Password { get; set; }
    }

   

    

    

}
