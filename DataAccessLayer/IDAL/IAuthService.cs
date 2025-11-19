using HfilesMedicalDashboard_Api.Models;

namespace HfilesMedicalDashboard_Api.DataAccessLayer.IDAL
{
    public interface IAuthService
    {
        Task<int> CreateUserAsync(SignupModel model);
         Task<UserModel?> LoginUser(string email);
    }
}
