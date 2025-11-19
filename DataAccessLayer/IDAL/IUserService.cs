using HfilesMedicalDashboard_Api.Models;

namespace HfilesMedicalDashboard_Api.DataAccessLayer.IDAL
{
    public interface IUserService
    {
        Task<UserModel?> GetUserByIdAsync(int userId);
        Task<bool> UpdateUserProfileAsync(int id ,UserModel model);
    }
}
